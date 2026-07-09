/**
 * Renders a 1200×630 OG image per report (dist/og/{id}.png) at build time.
 * satori (JSX-object → SVG, bundled fonts, no system dependencies) + resvg (SVG → PNG).
 * Referenced by generateSeo.ts as og:image / twitter:image per report page.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { reports } from '../src/data/reports';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const ACCENT: Record<string, string> = {
  'DEEP RESEARCH': '#34D399',
  'WEEKLY BRIEF': '#60A5FA',
  'QUARTERLY REPORT': '#818CF8',
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return y && m && d ? `${MONTHS[m - 1]} ${d}, ${y}` : iso;
}

// satori element helper (no JSX in a .ts script)
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, ...(children !== undefined ? { children } : {}) },
});

function ogTree(title: string, category: string, date: string) {
  const accent = ACCENT[category] ?? '#34D399';
  const fontSize = title.length > 90 ? 44 : title.length > 60 ? 52 : 60;
  return el(
    'div',
    {
      width: 1200,
      height: 630,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 72,
      backgroundColor: '#0a0a0a',
      backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #101418 55%, #0a0a0a 100%)',
      fontFamily: 'Inter',
    },
    [
      el(
        'div',
        {
          display: 'flex',
          alignSelf: 'flex-start',
          border: `2px solid ${accent}`,
          borderRadius: 8,
          padding: '10px 22px',
          color: accent,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 4,
        },
        category
      ),
      el(
        'div',
        {
          display: 'flex',
          color: '#ffffff',
          fontSize,
          fontWeight: 700,
          lineHeight: 1.18,
          letterSpacing: -1,
          maxHeight: 360,
          overflow: 'hidden',
        },
        title
      ),
      el(
        'div',
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.14)',
          paddingTop: 28,
        },
        [
          el('div', { display: 'flex', color: '#e5e7eb', fontSize: 30, fontFamily: 'Oxanium', letterSpacing: 6 }, 'NEXUS ONE'),
          el('div', { display: 'flex', color: '#6b7280', fontSize: 26 }, `${date}   ·   n1dv.io`),
        ]
      ),
    ]
  );
}

export async function generateOgImages(distDir: string): Promise<number> {
  const fonts = [
    { name: 'Inter', weight: 400 as const, style: 'normal' as const, data: readFileSync(join(root, 'scripts/assets/inter-400.woff')) },
    { name: 'Inter', weight: 700 as const, style: 'normal' as const, data: readFileSync(join(root, 'scripts/assets/inter-700.woff')) },
    { name: 'Oxanium', weight: 500 as const, style: 'normal' as const, data: readFileSync(join(root, 'scripts/assets/oxanium-500.woff')) },
  ];
  const outDir = join(distDir, 'og');
  mkdirSync(outDir, { recursive: true });

  let count = 0;
  for (const r of reports) {
    if (!r.link) continue;
    const svg = await satori(ogTree(r.title, r.badge?.text ?? r.category, formatDate(r.date)) as never, {
      width: 1200,
      height: 630,
      fonts,
    });
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
    writeFileSync(join(outDir, `${r.id}.png`), png);
    count++;
  }
  return count;
}
