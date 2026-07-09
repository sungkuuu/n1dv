/**
 * Post-build SEO generator. Runs after `vite build` (see package.json).
 *
 * For every report in src/data/reports.ts it writes dist{link}/index.html —
 * a copy of the built index.html with per-report <title>/description/OG/Twitter
 * tags — so X/Google crawlers (which don't run the SPA's JS) see real metadata.
 * Also emits sitemap.xml, rss.xml and robots.txt into dist/.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { reports } from '../src/data/reports';

const SITE = 'https://n1dv.io';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const template = readFileSync(join(dist, 'index.html'), 'utf8');

function pageHtml(title: string, description: string, url: string): string {
  const t = esc(title);
  const d = esc(description);
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${t} | N1DV</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, '$1article$2')
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace('</head>', `  <link rel="canonical" href="${url}" />\n  </head>`);
}

let pages = 0;
for (const r of reports) {
  if (!r.link) continue;
  const url = `${SITE}${r.link}`;
  const outDir = join(dist, ...r.link.split('/').filter(Boolean));
  mkdirSync(outDir, { recursive: true });
  const description = (r.description || r.summary || '').slice(0, 300);
  writeFileSync(join(outDir, 'index.html'), pageHtml(r.title, description, url));
  pages++;
}

// --- sitemap.xml ---------------------------------------------------------
const staticPaths = ['/', '/insights', '/radar', '/thesis', '/letter', '/vaults', '/partners'];
const urls = [
  ...staticPaths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`),
  ...reports
    .filter((r) => r.link)
    .map((r) => `  <url><loc>${SITE}${r.link}</loc><lastmod>${r.date}</lastmod></url>`),
].join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

// --- rss.xml -------------------------------------------------------------
const items = reports
  .filter((r) => r.link)
  .map((r) => {
    const url = `${SITE}${r.link}`;
    return [
      '    <item>',
      `      <title>${esc(r.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${new Date(`${r.date}T09:00:00+09:00`).toUTCString()}</pubDate>`,
      `      <category>${esc(r.category)}</category>`,
      `      <description>${esc((r.description || r.summary || '').slice(0, 500))}</description>`,
      '    </item>',
    ].join('\n');
  })
  .join('\n');
writeFileSync(
  join(dist, 'rss.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>N1DV — Nexus One Research</title>
    <link>${SITE}/insights</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Digital asset deep research, weekly briefs, and quarterly reports from the Nexus One Research Desk.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`
);

// --- robots.txt ----------------------------------------------------------
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`[seo] ${pages} report pages, sitemap.xml (${staticPaths.length + pages} urls), rss.xml, robots.txt`);
