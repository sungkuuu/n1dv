/**
 * Exports every report as Webflow-CMS-ready data for the nexusonecap.com
 * "View" section (plan A: full body lives inside the company site).
 *
 *   npx tsx scripts/exportWebflowView.ts
 *
 * Writes out/webflow-view/export.json and export.csv:
 * - Reports with a markdown source (public/content/insights/{id}.md) get their
 *   full body converted to HTML (Webflow rich-text fields accept HTML on both
 *   CSV import and the CMS API).
 * - Older reports whose body only exists as a dedicated TSX page are exported
 *   with metadata + summary and flagged hasFullBody:false — convert those
 *   pages to markdown first, rerun, and they pick up the full body.
 *
 * Field names are generic on purpose; map them to the actual View collection
 * fields once the agency shares the Webflow schema.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { reports } from '../src/data/reports';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mdDir = join(root, 'public/content/insights');
const outDir = join(root, 'out/webflow-view');
mkdirSync(outDir, { recursive: true });

marked.setOptions({ gfm: true, breaks: false });

interface ViewItem {
  name: string;
  slug: string;
  date: string;
  category: string;
  summary: string;
  author: string;
  readTime: string;
  bodyHtml: string;
  hasFullBody: boolean;
}

const items: ViewItem[] = reports.map((r) => {
  const mdPath = join(mdDir, `${r.id}.md`);
  let bodyHtml = '';
  let hasFullBody = false;

  if (existsSync(mdPath)) {
    const md = readFileSync(mdPath, 'utf8');
    bodyHtml = marked.parse(md) as string;
    hasFullBody = true;
  } else if (r.content && r.content.trim()) {
    // Legacy inline content: plain paragraphs.
    bodyHtml = r.content
      .split('\n')
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${p}</p>`)
      .join('\n');
    hasFullBody = true;
  }

  return {
    name: r.title,
    slug: r.id,
    date: r.date,
    category: r.category,
    summary: r.description || r.summary || '',
    author: r.author,
    readTime: r.readTime || '',
    bodyHtml,
    hasFullBody,
  };
});

writeFileSync(join(outDir, 'export.json'), JSON.stringify(items, null, 2));

// CSV for Webflow's native CMS import (rich-text columns accept HTML).
const csvEsc = (s: string) => `"${s.replace(/"/g, '""')}"`;
const header = ['Name', 'Slug', 'Date', 'Category', 'Summary', 'Author', 'Read Time', 'Body'];
const rows = items.map((i) =>
  [i.name, i.slug, i.date, i.category, i.summary, i.author, i.readTime, i.bodyHtml].map(csvEsc).join(',')
);
writeFileSync(join(outDir, 'export.csv'), [header.join(','), ...rows].join('\n'));

const full = items.filter((i) => i.hasFullBody).length;
console.log(`[webflow-view] ${items.length} reports exported → out/webflow-view/`);
console.log(`  full body: ${full} · metadata-only (TSX pages, need markdown): ${items.length - full}`);
for (const i of items.filter((x) => !x.hasFullBody)) console.log(`    - ${i.slug}`);
