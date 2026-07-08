import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appRoutesFile = path.join(__dirname, 'src', 'App.tsx');
const defaultMeta = { changefreq: 'monthly', priority: 0.6 };
const perRouteMeta = {
  '/': { changefreq: 'daily', priority: 1.0 },
  '/services': { changefreq: 'weekly', priority: 0.8 },
  '/team': { changefreq: 'weekly', priority: 0.7 },
  '/faq': { changefreq: 'weekly', priority: 0.8 },
  '/book-appointment': { changefreq: 'monthly', priority: 0.9 },
};

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

function stripComments(source) {
  return source
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\/.*$/gm, '');
}

function getRoutesFromAppFile() {
  const appSource = readFileSync(appRoutesFile, 'utf8');
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

function getSlugsFromDataFile(dataFilePath, slugRegex) {
  const source = readFileSync(dataFilePath, 'utf8');
  const slugs = [];
  let match;

  while ((match = slugRegex.exec(source)) !== null) {
    slugs.push(match[1]);
  }

  return slugs;
}

function getAllPaths() {
  const routePaths = getRoutesFromAppFile();

  dynamicRouteDataSources.forEach(({ routePrefix, dataFile, slugRegex }) => {
    const slugs = getSlugsFromDataFile(dataFile, slugRegex);
    slugs.forEach((slug) => routePaths.add(`${routePrefix}/${slug}`));
  });

  return Array.from(routePaths);
}

const links = getAllPaths().map((url) => ({
  url,
  ...defaultMeta,
  ...(perRouteMeta[url] || {}),
}));

const sitemap = new SitemapStream({ hostname: 'https://kunaphysicaltherapy.com' });

mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
const writeStream = createWriteStream(path.join(__dirname, 'dist', 'sitemap.xml'));
sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('Sitemap generated successfully');
});

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://kunaphysicaltherapy.com/sitemap.xml
`;

writeFileSync(path.join(__dirname, 'dist', 'robots.txt'), robotsContent);
console.log('Robots.txt generated successfully');