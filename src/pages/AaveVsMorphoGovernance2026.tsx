import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Layout } from '../components/Layout';

function parseMarkdownTable(block: string) {
  const lines = block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length < 3) return null;

  const header = lines[0]
    .split('|')
    .map((c) => c.trim())
    .filter(Boolean);
  const body = lines.slice(2).map((row) =>
    row
      .split('|')
      .map((c) => c.trim())
      .filter(Boolean)
  );

  return { header, body };
}

export function AaveVsMorphoGovernance2026() {
  const [content, setContent] = useState('');
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    fetch('/content/insights/aave-vs-morpho-governance-2026.md', { cache: 'no-store' })
      .then((res) => res.text())
      .then((text) => {
        if (!text.trim()) {
          setLoadError('Report content is empty.');
          return;
        }
        setContent(text);
      })
      .catch((err) => setLoadError(`Failed to load report content: ${String(err)}`));
  }, []);

  const blocks = useMemo(() => {
    if (!content) return [];
    const raw = content.split('\n\n').map((b) => b.trim()).filter(Boolean);
    const result: string[] = [];
    let skipTldr = false;
    for (const block of raw) {
      if (block.startsWith('## TL;DR:')) {
        skipTldr = true;
        continue;
      }
      if (skipTldr) {
        if (/^##\s+\d+\./.test(block)) {
          skipTldr = false;
          result.push(block);
        }
        continue;
      }
      result.push(block);
    }
    return result;
  }, [content]);

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative font-sans">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">AAVE vs Morpho</span>
          </nav>

          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 bg-transparent text-emerald-500 border border-emerald-500 text-xs font-bold mb-6 uppercase tracking-wider">
              DEEP RESEARCH
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              Paradigm Shift in DeFi Lending: Morpho vs. AAVE Valuation &amp; Governance Crisis
            </h1>
            <p className="text-slate-400 text-lg mt-4 mb-8">
              By Nexus One Research Desk • Apr 13, 2026 • 35 min read
            </p>

            <section className="mb-12 rounded-lg border border-slate-800/80 bg-slate-900/30 px-5 py-6 sm:px-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mb-6">
                TL;DR: The Lending Market Paradigm Shift
              </h2>
              <ul className="space-y-4 text-lg leading-relaxed text-slate-300 list-disc pl-6">
                <li>
                  <strong className="text-white">Architectural Clash:</strong>{' '}
                  AAVE dominates with its battle-tested, shared liquidity pool model ($24B+ TVL), while Morpho is rapidly capturing institutional demand with its capital-efficient, permissionless P2P matching and modular Isolated Markets ($10B TVL).
                </li>
                <li>
                  <strong className="text-white">Valuation Disconnect:</strong>{' '}
                  AAVE generates massive cash flow ($560M+ annualized) but suffers from an extreme &quot;Governance Discount.&quot; Conversely, Morpho generates zero revenue for token holders, relying entirely on a $1.9B FDV bubble fueled by narratives and massive impending insider unlocks, sparking &quot;pump and dump&quot; criticisms.
                </li>
                <li>
                  <strong className="text-white">The AAVE Governance Civil War:</strong>{' '}
                  Aave Labs&apos; push for centralization and opaque budget demands (the &quot;Aave Will Win&quot; proposal) triggered a domino exodus of core contributors (BGD Labs, ACI, Chaos Labs), severely damaging the protocol&apos;s valuation.
                </li>
                <li>
                  <strong className="text-white">Resolution &amp; Outlook:</strong>{' '}
                  AAVE narrowly averted disaster on April 12 with a compromise that attributes 100% of front-end revenue to the DAO, sparking a price rebound. The battle now shifts to execution: AAVE must rebuild its risk management, while Morpho must prove a sustainable value capture model before insider dumping overwhelms the market.
                </li>
              </ul>
            </section>
          </div>

          <div className="max-w-5xl mx-auto text-lg leading-relaxed text-slate-300 font-sans">
            {loadError && (
              <p className="mb-6 text-red-400">{loadError}</p>
            )}
            {!loadError && !content && (
              <p className="mb-6 text-slate-400">Loading report content...</p>
            )}
            {blocks.map((block, idx) => {
              if (block.startsWith('# ')) {
                return null;
              }

              if (block.startsWith('**By ')) {
                return null;
              }

              if (block.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                    {block.replace(/^##\s+/, '')}
                  </h2>
                );
              }

              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">
                    {block.replace(/^###\s+/, '')}
                  </h3>
                );
              }

              if (block.split('\n').every((line) => line.trim().startsWith('* '))) {
                const items = block
                  .split('\n')
                  .map((line) => line.replace(/^\*\s+/, '').trim())
                  .filter(Boolean);
                return (
                  <ul key={idx} className="space-y-4 mb-6 text-lg leading-relaxed text-slate-300 list-disc pl-6">
                    {items.map((item) => (
                      <li key={item} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                    ))}
                  </ul>
                );
              }

              if (block.includes('\n|') || block.startsWith('|')) {
                const parsed = parseMarkdownTable(block);
                if (parsed) {
                  return (
                    <div key={idx} className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse border border-slate-800">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-900/50">
                            {parsed.header.map((h) => (
                              <th key={h} className="py-3 px-4 text-slate-300 font-semibold border-b border-slate-800">
                                {h.replace(/\*\*/g, '')}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {parsed.body.map((row, rowIdx) => (
                            <tr key={`${rowIdx}-${row[0]}`} className={`border-b border-slate-800 ${rowIdx % 2 === 0 ? 'bg-slate-900/50' : ''}`}>
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={`${rowIdx}-${cellIdx}`}
                                  className={`py-3 px-4 border-b border-slate-800 ${cellIdx === 0 ? 'text-white font-medium' : 'text-slate-300'}`}
                                >
                                  {cell.replace(/\*\*/g, '')}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
              }

              return (
                <p
                  key={idx}
                  className="mb-6 text-lg leading-relaxed text-slate-300 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
                />
              );
            })}
          </div>
        </div>
      </article>
    </Layout>
  );
}
