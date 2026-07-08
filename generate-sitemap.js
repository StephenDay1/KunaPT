import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { execFileSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appRoutesFile = path.join(__dirname, 'src', 'App.tsx');
const servicesDataFile = path.join(__dirname, 'src', 'data', 'services.tsx');
const teamDataFile = path.join(__dirname, 'src', 'data', 'team.ts');
const faqLocalePartials = [
  path.join(__dirname, 'src', 'locales', 'partials', 'faqPageEn.ts'),
  path.join(__dirname, 'src', 'locales', 'partials', 'faqPageEs.ts'),
];
const serviceLocalePartials = [
  path.join(__dirname, 'src', 'locales', 'partials', 'serviceItemsEn.ts'),
  path.join(__dirname, 'src', 'locales', 'partials', 'serviceItemsEs.ts'),
];
const teamLocalePartials = [
  path.join(__dirname, 'src', 'locales', 'partials', 'teamMembersEn.ts'),
  path.join(__dirname, 'src', 'locales', 'partials', 'teamMembersEs.ts'),
];

const defaultMeta = { changefreq: 'monthly', priority: 0.6 };
const perRouteMeta = {
  '/': { changefreq: 'daily', priority: 1.0 },
  '/services': { changefreq: 'weekly', priority: 0.8 },
  '/team': { changefreq: 'weekly', priority: 0.7 },
  '/faq': { changefreq: 'weekly', priority: 0.8 },
  '/book-appointment': { changefreq: 'monthly', priority: 0.9 },
};

/** Static routes → source files whose git history drives lastmod. */
const routeSourceFiles = {
  '/': [
    path.join(__dirname, 'src', 'pages', 'HomePage.tsx'),
    path.join(__dirname, 'src', 'data', 'clinicInfo.ts'),
    path.join(__dirname, 'src', 'data', 'siteBanner.ts'),
  ],
  // Content lives in locale partials; ignore page/layout file churn.
  '/services': [...serviceLocalePartials],
  '/team': [...teamLocalePartials],
  '/faq': [...faqLocalePartials],
  '/book-appointment': [
    path.join(__dirname, 'src', 'pages', 'BookAppointmentPage.tsx'),
    path.join(__dirname, 'src', 'data', 'clinicInfo.ts'),
  ],
};

const dynamicRouteDataSources = [
  {
    routePrefix: '/services',
    dataFile: servicesDataFile,
    slugRegex: /slug:\s*'([^']+)'/g,
    sourceFiles: [...serviceLocalePartials],
  },
  {
    routePrefix: '/team',
    dataFile: teamDataFile,
    slugRegex: /slug:\s*'([^']+)'/g,
    sourceFiles: [...teamLocalePartials],
  },
];

const lastmodCache = new Map();

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

function getSourceFilesForPath(urlPath) {
  if (routeSourceFiles[urlPath]) {
    return routeSourceFiles[urlPath];
  }

  for (const { routePrefix, sourceFiles } of dynamicRouteDataSources) {
    if (urlPath.startsWith(`${routePrefix}/`)) {
      return sourceFiles;
    }
  }

  return [];
}

function getGitLastmod(files) {
  const existingFiles = files.filter(Boolean);
  if (existingFiles.length === 0) return undefined;

  const cacheKey = existingFiles.join('\0');
  if (lastmodCache.has(cacheKey)) {
    return lastmodCache.get(cacheKey);
  }

  try {
    const output = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', ...existingFiles],
      { cwd: __dirname, encoding: 'utf8' },
    ).trim();

    const lastmod = output ? output.slice(0, 10) : undefined;
    lastmodCache.set(cacheKey, lastmod);
    return lastmod;
  } catch (error) {
    console.warn(
      `Could not read git lastmod for:\n${existingFiles.join('\n')}\n${error.message}`,
    );
    lastmodCache.set(cacheKey, undefined);
    return undefined;
  }
}

const links = getAllPaths().map((url) => {
  const lastmod = getGitLastmod(getSourceFilesForPath(url));
  return {
    url,
    ...defaultMeta,
    ...(perRouteMeta[url] || {}),
    ...(lastmod ? { lastmod } : {}),
  };
});

const sitemap = new SitemapStream({
  hostname: 'https://kunaphysicaltherapy.com',
  lastmodDateOnly: true,
});

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
