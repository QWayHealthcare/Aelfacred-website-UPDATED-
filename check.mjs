import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/pages.mjs';
import { articles } from '../src/articles.mjs';
import { site } from '../src/config.mjs';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const documents = new Map();
const titleSet = new Set(), descriptionSet = new Set();
for (const page of pages) {
  const html = await readFile(path.join(root, page.path, 'index.html'), 'utf8');
  documents.set(page.path, html);
  const sections = (html.match(/<section\b/g) || []).length;
  const extraSection=['/','/about/','/platform/','/services/','/resources/'].includes(page.path)?1:0;
  assert.ok(sections > 0 && sections <= 5+extraSection, `${page.path}: ${sections} sections`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page.path}: one H1 required`);
  assert.ok(!titleSet.has(page.title), 'Duplicate title'); titleSet.add(page.title);
  assert.ok(!descriptionSet.has(page.description), 'Duplicate description'); descriptionSet.add(page.description);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${page.path}: duplicate element IDs`);
  const structured = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(html);
  assert.ok(Array.isArray(JSON.parse(structured[1])));
  assert.ok(html.includes(`rel="canonical" href="${site.origin}${page.path}"`));
  assert.ok(!html.includes('href="#about"') && !html.includes('href="#services"'));
  console.log(`PASS ${page.path} — ${sections} sections, unique metadata, valid schema`);
}
for (const [pagePath, html] of documents) {
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(raw)) continue;
    const url = new URL(raw, site.origin + pagePath);
    const target = path.join(root, url.pathname);
    const info = await stat(target).catch(() => null);
    assert.ok(info, `${pagePath}: missing target ${raw}`);
    if (url.hash) {
      const targetHtml = documents.get(url.pathname) || html;
      assert.ok(targetHtml.includes(`id="${url.hash.slice(1)}"`), `${pagePath}: missing anchor ${raw}`);
    }
  }
}
assert.ok(articles.length >= 5);
for (const article of articles) {
  const words = [article.intro, ...article.parts.flatMap(p => [...p.paragraphs, ...(p.bullets || [])])].join(' ').split(/\s+/).length;
  assert.ok(words >= 500, `${article.slug}: expected a substantive article, got ${words} words`);
  console.log(`PASS article ${article.slug} — ${words} words`);
}
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, pages.length);
const networkPages = [...documents].filter(([, html]) => html.includes('class="network-art reveal"'));
assert.deepEqual(networkPages.map(([url]) => url), ['/'], 'The connected-logo diagram belongs only to the Home lifecycle.');
assert.equal((documents.get('/').match(/class="network-art reveal"/g) || []).length, 1);
const visualNames = [...documents.values()].flatMap(html => [...html.matchAll(/data-visual="([^"]+)"/g)].map(match => match[1]));
assert.equal(visualNames.length, 5, 'Expected five context-specific illustrations including Resources.');
assert.equal(new Set(visualNames).size, 5, 'Large section illustrations must not repeat.');
const motionPages = [...documents].filter(([, html]) => html.includes('data-live-scene='));
assert.deepEqual(motionPages.map(([url]) => url).sort(), ['/about/', '/platform/', '/resources/']);
console.log('PASS: one connected-logo diagram, five distinct illustrations, advanced motion only on the three selected heroes.');
console.log(`PASS: ${pages.length} static pages; all internal links/assets; ${articles.length} articles; section limits; sitemap.`);
