import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Layout } from '../components/Layout';

export function AptosStructuralReset2026() {
  const [content, setContent] = useState('');
  const majorHeadings = useMemo(
    () =>
      new Set([
        "1. Introduction: Transition to Next-Generation Financial Infrastructure and the Paradox of Blockchain Valuation",
        "2. Technical Advancements of the Aptos Network and the Maturation of 'Aptos 2.0' Infrastructure",
        '3. Explosive Growth in On-chain Data and Ecosystem Metrics',
        '4. Accelerating Institutional Adoption and On-chain Integration of Real World Assets (RWA)',
        '5. Performance Analysis of Major Aptos Ecosystem Projects (DeFi, RWA, Web3)',
        "6. The Endemic Disease of the Crypto Market: Defining the 'Structural Discount' Mechanism",
        '7. Analysis of the Structural Discount Incidents of Existing Aptos Ecosystem Projects',
        "8. 'Comprehensive Aptos Tokenomics Revamp' to Overcome Structural Discount (Proposal 183)",
        "9. Future Value Capture and 'Deflationary Crossover' Prospects for 2026-2027",
        '10. Conclusion: The Perfect Alignment of Technology, Capital, and Economic Structure'
      ]),
    []
  );

  useEffect(() => {
    fetch('/content/insights/aptos-structural-reset-2026.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('Failed to load report content.'));
  }, []);

  const sections = useMemo(() => content.split('\n\n').map((s) => s.trim()).filter(Boolean), [content]);

  const renderMetricTable = (block: string) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    if (lines.length < 8) return null;

    const headers = lines.slice(0, 4);
    const rows: string[][] = [];
    const bodyLines = lines.slice(4);
    for (let i = 0; i + 3 < bodyLines.length; i += 4) {
      rows.push(bodyLines.slice(i, i + 4));
    }

    return (
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left border-collapse border border-slate-800">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/50">
              {headers.map((h) => (
                <th key={h} className="py-3 px-4 text-slate-300 font-semibold border-b border-slate-800">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={`${row[0]}-${rowIdx}`}
                className={`border-b border-slate-800 ${rowIdx % 2 === 0 ? 'bg-slate-900/50' : ''}`}
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={`${cell}-${cellIdx}`}
                    className={`py-3 px-4 border-b border-slate-800 ${cellIdx === 0 ? 'text-white font-medium' : 'text-slate-300'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative font-sans">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Aptos Structural Reset</span>
          </nav>

          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 bg-transparent text-emerald-500 border border-emerald-500 text-xs font-bold mb-6 uppercase tracking-wider">
              DEEP RESEARCH
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              APT Just Lost 70% of its TVL: A Structural Reset, Not a Crisis
            </h1>

            <p className="text-slate-400 text-lg mt-4 mb-8">
              By Nexus One Research Desk • Apr 10, 2026 • 35 min read
            </p>
          </div>

          <div className="max-w-5xl mx-auto text-lg leading-relaxed text-slate-300 font-sans">
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                TL;DR: Key Takeaways
              </h2>
              <ul className="space-y-4 mb-6 text-lg leading-relaxed text-slate-300 list-disc pl-6">
                <li><strong className="text-white">TVL drop is structural, not terminal:</strong> The 70% TVL contraction reflects mercenary-liquidity unwind and tokenomics overhang more than core network failure.</li>
                <li><strong className="text-white">Fundamentals continue improving:</strong> Aptos shows sub-50ms execution, high uptime, expanding stablecoin usage, and meaningful institutional RWA adoption.</li>
                <li><strong className="text-white">Main drag has been value-capture design:</strong> High FDV/low float, unlock pressure, and weak burn mechanics suppressed token valuation despite ecosystem activity.</li>
                <li><strong className="text-white">Proposal 183 changes the equation:</strong> Hard cap, emission cuts, fee burn, and foundation lockups shift the model toward scarcity and tighter supply discipline.</li>
                <li><strong className="text-white">October 2026 is the key timing gate:</strong> Major unlock-cycle completion plus reduced grant emissions can materially lower structural sell pressure.</li>
                <li><strong className="text-white">Early 2027 is the crossover target:</strong> If network usage and Decibel-driven burn scale as expected, burn may exceed emissions and open a deflationary phase.</li>
              </ul>
            </section>

            {sections.map((section, idx) => {
              if (idx === 0 && section.startsWith('APT just lost 70% of its TVL')) return null;

              if (section.startsWith('Key On-chain Metric Category')) {
                return <div key={idx}>{renderMetricTable(section)}</div>;
              }

              if (/^\d+\.\s/.test(section) && majorHeadings.has(section)) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                    {section}
                  </h2>
                );
              }

              if (/^\d+\.\d+\./.test(section) || /^\d+\.\s/.test(section)) {
                return (
                  <p key={idx} className="mb-6 text-lg leading-relaxed text-slate-300 whitespace-pre-line">
                    {section}
                  </p>
                );
              }

              return (
                <p key={idx} className="mb-6 text-lg leading-relaxed text-slate-300 whitespace-pre-line">
                  {section}
                </p>
              );
            })}

            <div className="mt-16 pt-8 border-t border-slate-800/50">
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Disclaimer</h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify">
                  This report is for informational purposes only and does not constitute financial, investment, legal, or tax advice. The views expressed herein are those of the Nexus One Research Desk as of the date of publication and are subject to change without notice.
                  <br /><br />
                  Nexus One and its affiliates may hold long or short positions in the assets discussed and may adjust these positions at any time. Digital asset investments are highly volatile and involve a significant risk of loss. Investors should conduct their own due diligence.
                </p>
              </div>
              <div className="border-t border-slate-800/50 pt-6">
                <Link to="/insights" className="group inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors font-medium text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                  Back to All Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
