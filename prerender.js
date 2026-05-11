import { createServer } from 'node:http';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const appRoutesFile = path.join(__dirname, 'src', 'App.tsx');
const previewPort = 4173;

const dynamicRouteDataSources = [
  {
    routePrefix: '/services',
    dataFile: path.join(__dirname, 'src', 'data', 'services.tsx'),
    slugRegex: /slug:\s*'([^']+)'/g,
  },
  {
    routePrefix: '/team',
    dataFile: path.join(__dirname, 'src', 'data', 'team.ts'),
    slugRegex: /slug:\s*'([^']+)'/g,
  },
];

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
};

function stripComments(source) {
  return source
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\/.*$/gm, '');
}

async function getRoutesFromAppFile() {
  const appSource = await readFile(appRoutesFile, 'utf8');
  const uncommented = stripComments(appSource);
  const routePathRegex = /<Route\s+[^>]*path="([^"]+)"/g;
  const routes = new Set();

  let match;
  while ((match = routePathRegex.exec(uncommented)) !== null) {
    const routePath = match[1];
    if (routePath === '*' || routePath.includes(':')) continue;
    routes.add(routePath);
  }

  return routes;
}

async function getSlugsFromDataFile(dataFilePath, slugRegex) {
  const source = await readFile(dataFilePath, 'utf8');
  const slugs = [];
  let match;

  while ((match = slugRegex.exec(source)) !== null) {
    slugs.push(match[1]);
  }

  return slugs;
}

async function getAllRoutes() {
  const routes = await getRoutesFromAppFile();

  for (const { routePrefix, dataFile, slugRegex } of dynamicRouteDataSources) {
    const slugs = await getSlugsFromDataFile(dataFile, slugRegex);
    for (const slug of slugs) {
      routes.add(`${routePrefix}/${slug}`);
    }
  }

  return [...routes];
}

async function resolveStaticFilePath(urlPath) {
  const normalized = decodeURIComponent(urlPath).replace(/^\/+/, '');
  const candidate = path.join(distDir, normalized);

  if (normalized.length === 0) {
    return null;
  }

  try {
    const candidateStats = await stat(candidate);
    if (candidateStats.isDirectory()) {
      const directoryIndexPath = path.join(candidate, 'index.html');
      try {
        await stat(directoryIndexPath);
        return directoryIndexPath;
      } catch {
        return null;
      }
    }
    return candidate;
  } catch {
    try {
      await stat(path.join(candidate, 'index.html'));
      return path.join(candidate, 'index.html');
    } catch {
      return null;
    }
  }
}

function createStaticServer(appShellHtml) {
  return createServer(async (req, res) => {
    try {
      const urlPath = (req.url || '/').split('?')[0];
      const filePath = await resolveStaticFilePath(urlPath);

      if (!filePath) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(appShellHtml);
        return;
      }

      const data = await readFile(filePath);
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Prerender server error: ${error.message}`);
    }
  });
}

async function writePrerenderedHtml(route, html) {
  const normalizedRoute = route.replace(/^\/+/, '').replace(/\/+$/, '');
  const outDir = normalizedRoute ? path.join(distDir, normalizedRoute) : distDir;
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
}

async function prerender() {
  const routes = await getAllRoutes();
  const appShellHtml = await readFile(path.join(distDir, 'index.html'));
  const server = createStaticServer(appShellHtml);
  await new Promise((resolve) => server.listen(previewPort, '127.0.0.1', resolve));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    for (const route of routes) {
      const targetUrl = `http://127.0.0.1:${previewPort}${route}`;
      await page.goto(targetUrl, { waitUntil: 'networkidle2' });
      await page.waitForFunction(() => document.readyState === 'complete');
      const html = await page.content();
      await writePrerenderedHtml(route, html);
      console.log(`Prerendered ${route}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
