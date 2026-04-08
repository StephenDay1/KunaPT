import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/testimonials', changefreq: 'weekly', priority: 0.6 },
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/book-appointment', changefreq: 'monthly', priority: 0.6 },
];

const sitemap = new SitemapStream({ hostname: 'https://kunapt.web.app' });

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

Sitemap: https://kunapt.web.app/sitemap.xml
`;

writeFileSync(path.join(__dirname, 'dist', 'robots.txt'), robotsContent);
console.log('Robots.txt generated successfully');