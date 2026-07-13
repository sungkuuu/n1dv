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
import { generateOgImages } from './generateOgImages';

const SITE = 'https://quadrix.finance';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const template = readFileSync(join(dist, 'index.html'), 'utf8');

function pageHtml(title: string, description: string, url: string, image: string): string {
  const t = esc(title);
  const d = esc(description);
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${t} | Nexus One Research</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, '$1article$2')
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`)
    .replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`)
    .replace('</head>', `  <link rel="canonical" href="${url}" />\n  </head>`);
}

const ogCount = await generateOgImages(dist);

// Report pages are served from dist/insights/{slug}/index.html, so the host
// canonicalizes them to a trailing slash (a bare /insights/{slug} 308-redirects).
// Use the trailing-slash form for canonical/og:url/sitemap/rss so every URL we
// advertise returns 200 and Google sees one consistent canonical.
const reportUrl = (link: string) => `${SITE}${link}/`;

let pages = 0;
for (const r of reports) {
  if (!r.link) continue;
  const url = reportUrl(r.link);
  const outDir = join(dist, ...r.link.split('/').filter(Boolean));
  mkdirSync(outDir, { recursive: true });
  const description = (r.description || r.summary || '').slice(0, 300);
  writeFileSync(join(outDir, 'index.html'), pageHtml(r.title, description, url, `${SITE}/og/${r.id}.png`));
  pages++;
}

// --- sitemap.xml ---------------------------------------------------------
const staticPaths = ['/', '/insights', '/radar', '/performance', '/thesis', '/letter', '/vaults', '/partners'];
const urls = [
  ...staticPaths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`),
  ...reports
    .filter((r) => r.link)
    .map((r) => `  <url><loc>${reportUrl(r.link!)}</loc><lastmod>${r.date}</lastmod></url>`),
].join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

// --- rss.xml -------------------------------------------------------------
const items = reports
  .filter((r) => r.link)
  .map((r) => {
    const url = reportUrl(r.link!);
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

console.log(`[seo] ${pages} report pages, ${ogCount} og images, sitemap.xml (${staticPaths.length + pages} urls), rss.xml, robots.txt`);
