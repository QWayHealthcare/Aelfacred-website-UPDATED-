import { mkdir, rm, cp, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages, notFound } from '../src/pages.mjs';
import { layout, escape } from '../src/components.mjs';
import { site } from '../src/config.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, 'public'), dist, { recursive: true });
for (const page of [...pages, notFound]) {
  const directory = page.path === '/404.html' ? dist : path.join(dist, page.path);
  const filename = page.path === '/404.html' ? '404.html' : 'index.html';
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), layout(page));
}
await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page => `\n<url><loc>${escape(site.origin + page.path)}</loc><lastmod>${page.updated || site.date}</lastmod></url>`).join('')}\n</urlset>\n`);
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
await writeFile(path.join(root, 'SEO-MAP.json'), JSON.stringify(pages.map(page => ({ path: page.path, title: page.title, description: page.description, keywords: page.keywords, sections: (page.content.match(/<section\b/g) || []).length, type: page.article ? 'Article' : 'WebPage' })), null, 2));
console.log(`Built ${pages.length} complete HTML pages + 404, sitemap and robots.txt into dist/.`);
console.log(`Canonical origin: ${site.origin}. No client rendering or external runtime dependencies.`);
