import { ExternalLink, BarChart3, Activity, FileText, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reports } from '../data/reports';
import { N1DVModal } from '../components/N1DVModal';
import {
  fetchEnzymeVaultData,
  ENZYME_VAULT_ADDRESS,
  type PortfolioToken,
} from '../api/enzymeSubgraph';

interface FeaturedReport {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  summary: string;
  fullContent: string;
  link?: string;
}

const VAULT_ADDRESS = ENZYME_VAULT_ADDRESS;

/** Optional: link to vault UI (e.g. Enzyme app or explorer). Set VITE_VAULT_APP_URL in .env to override. */
const VAULT_APP_URL =
  (import.meta.env?.VITE_VAULT_APP_URL as string) ||
  `https://basescan.org/address/${VAULT_ADDRESS}`;

const getCategoryColor = (category: string) => {
  if (category === 'WEEKLY BRIEF') return 'text-blue-500';
  if (category === 'DEEP RESEARCH') return 'text-emerald-500';
  if (category === 'MARKET STRATEGY') return 'text-blue-500';
  return 'text-gray-400';
};


const parseDate = (dateStr: string) => {
  return new Date(dateStr);
};

const FEATURED_REPORTS: FeaturedReport[] = reports
  .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
  .slice(0, 3)
  .map(report => ({
    id: report.id,
    category: report.category,
    categoryColor: getCategoryColor(report.category),
    title: report.title,
    date: report.date,
    summary: report.summary,
    fullContent: report.content,
    link: report.link || `/insights/${report.id}`
  }));

export function Home() {
  const navigate = useNavigate();
  const [balances, setBalances] = useState<PortfolioToken[]>([]);
  const [totalTVL, setTotalTVL] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isN1DVModalOpen, setIsN1DVModalOpen] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchEnzymeVaultData(VAULT_ADDRESS);
        setBalances(data.portfolio);
        setTotalTVL(data.gav);
      } catch (err) {
        console.error('Error fetching Enzyme vault data:', err);
        setBalances([]);
        setTotalTVL(0);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const percentages = balances.map(token => ({
    ...token,
    percentage: totalTVL > 0 ? ((token.value ?? 0) / totalTVL) * 100 : (token.percentage ?? 0)
  }));
  return (
    <Layout>
      <section className="px-4 py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent pb-3">
            The Onchain Deep Value <br /> Active Strategy
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            The Anchor of Your Crypto Portfolio. We engineer defensive alpha <br /> through Deep Value execution.
          </p>
          <div className="flex justify-center items-center">
            <a
              href={VAULT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 text-lg font-bold hover:bg-gray-200 transition-all"
            >
              View Live Vault (N1DV)
              <ExternalLink className="ml-3" size={22} />
            </a>
          </div>
        </div>
      </section>

      <section id="strategy-section" className="px-4 py-20 border-t border-gray-800 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Our Strategies</h2>
            <p className="text-gray-400 text-lg">Institutional-grade onchain capital deployment vehicles tailored for every market cycle.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-gradient-to-br from-gray-900/50 to-black p-10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-emerald-500 animate-pulse"></div>
                <div className="inline-block px-4 py-1.5 border border-emerald-600/30 bg-emerald-950/20 text-emerald-400 text-xs font-black tracking-wider font-mono-num">
                  LIVE ON BASE
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Nexus One Deep Value (N1DV)</h3>
              <div className="text-sm text-gray-400 mb-6 font-semibold">Deep Value / Defensive Alpha</div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                A dynamic barbell strategy balancing 40% yield-bearing working capital with 60% high-conviction growth assets (BTC, ETH).
              </p>
              <div className="border-t border-gray-700 pt-6 mb-6">
                <h4 className="text-sm font-bold text-white mb-4">KEY FEATURES</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Resilience First:</strong> We secure the downside with 40% cash-flow assets, ensuring capital preservation through market volatility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Deep Value Discovery:</strong> Active allocation in undervalued on-chain assets like AERO, identifying asymmetric risk-reward opportunities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Aligned Incentives:</strong> Zero management fees. We only win when you win. Performance-based compensation ensures true alignment.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsN1DVModalOpen(true)}
                className="block w-full text-center px-6 py-3 bg-gray-100 text-black text-sm font-bold hover:bg-gray-200 transition-all"
              >
                View Details
              </button>
            </div>

            <div className="border border-white/10 bg-gradient-to-br from-gray-900/30 to-black p-10 hover:border-white/15 transition-all opacity-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1.5 bg-gray-800 text-gray-500 text-xs font-black tracking-wider">
                  COMING Q3 2026
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-400">Nexus One Alpha (N1A)</h3>
              <div className="text-sm text-gray-600 mb-6 font-semibold">Event-Driven / Asymmetric Upside</div>
              <p className="text-gray-500 text-base leading-relaxed">
                Capturing alpha through catalyst-based execution. We target mispriced assets and liquidity inefficiencies in early-stage markets.
              </p>
            </div>

            <div className="border border-white/10 bg-gradient-to-br from-gray-900/30 to-black p-10 hover:border-white/15 transition-all opacity-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1.5 bg-gray-800 text-gray-500 text-xs font-black tracking-wider">
                  RESEARCH PHASE
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-400">Nexus One Innovative (N1I)</h3>
              <div className="text-sm text-gray-600 mb-6 font-semibold">Frontier Thesis / Structural Shift</div>
              <p className="text-gray-500 text-base leading-relaxed">
                Early exposure to high-conviction narratives. Focused on the convergence of AI, DePIN, and Next-Gen RWA infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-20 border-t border-white/10 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-950/20 border border-emerald-600/30 mb-6 backdrop-blur-sm font-mono-num">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
              <span className="text-emerald-400 text-sm font-semibold tracking-wide">Live Onchain Feed</span>
              <Activity className="text-emerald-400" size={16} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Live Portfolio</h2>
            <p className="text-gray-400 text-lg">Onchain transparency. Every allocation verified on Base blockchain.</p>
          </div>

          <div className="relative">
            <div className="relative border border-white/10 bg-gradient-to-br from-gray-900/40 via-gray-800/20 to-gray-900/40 backdrop-blur-xl p-8 shadow-2xl">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <div className="text-gray-400 text-lg">Fetching live on-chain data from Base...</div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pb-8 border-b border-white/10">
                    <div className="text-center md:text-left p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                      <div className="text-sm text-gray-400 mb-2 font-semibold tracking-wider">TOTAL VALUE LOCKED</div>
                      <div className="text-3xl font-bold text-white mb-1 font-mono-num">
                        ${totalTVL.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-xs text-emerald-400 font-semibold">Live on Base</div>
                    </div>

                    <div className="text-center md:text-left p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                      <div className="text-sm text-gray-400 mb-2 font-semibold tracking-wider">CURRENT YIELD</div>
                      <div className="text-3xl font-bold text-white mb-1 font-mono-num">12.4%</div>
                      <div className="text-xs text-gray-400 font-semibold">APY (Est.)</div>
                    </div>

                    <div className="text-center md:text-left p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                      <div className="text-sm text-gray-400 mb-2 font-semibold tracking-wider">STRATEGY STATUS</div>
                      <div className="text-lg font-bold text-white mb-1">Rebalancing Active</div>
                      <div className="text-xs text-emerald-400 font-semibold flex items-center justify-center md:justify-start gap-1.5 font-mono-num">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        Optimizing Allocation
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <BarChart3 size={24} />
                      Asset Allocation
                    </h3>

                    <div className="h-8 flex rounded-lg overflow-hidden mb-6 shadow-lg">
                      {percentages.map((token) => (
                        token.percentage > 0 && (
                          <div
                            key={token.symbol}
                            style={{
                              width: `${token.percentage}%`,
                              backgroundColor: token.color,
                            }}
                            className="relative group cursor-pointer transition-all hover:opacity-80"
                          >
                            <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
                              {token.percentage.toFixed(1)}%
                            </div>
                          </div>
                        )
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {percentages.map((token) => (
                        <div key={token.symbol} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                          <div
                            className="w-4 h-4 flex-shrink-0 shadow-lg mt-1"
                            style={{ backgroundColor: token.color }}
                          ></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-bold text-white text-sm">{token.symbol}</div>
                              <div className="text-xs text-gray-400 font-mono-num">{token.percentage > 0 ? token.percentage.toFixed(1) : '0'}%</div>
                            </div>
                            <div className="text-xs text-gray-400 mb-0.5 font-mono-num">
                              {parseFloat(token.balance).toLocaleString('en-US', { maximumFractionDigits: 4 })} {token.symbol}
                            </div>
                            <div className="text-xs text-white font-semibold font-mono-num">
                              ${(token.value || 0).toLocaleString('en-US', { maximumFractionDigits: 2 })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold text-white">Vault:</span>{' '}
                      <span className="font-mono-num">{VAULT_ADDRESS.slice(0, 6)}...{VAULT_ADDRESS.slice(-4)}</span>
                    </div>
                    <a
                      href={VAULT_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-100 text-black text-sm font-bold hover:bg-gray-200 transition-all shadow-lg"
                    >
                      Verify Onchain Strategy
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 border-t border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl sm:text-5xl font-bold">Featured Insights</h2>
            </div>
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 text-gray-200 text-lg font-bold hover:text-white hover:underline transition-all whitespace-nowrap px-4 py-2 md:px-0 md:py-0"
            >
              View All Insights
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_REPORTS.map((report) => (
              <div
                key={report.id}
                onClick={() => { if (report.link) navigate(report.link); }}
                className="group p-10 bg-[#0a0a0a] border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full min-h-[320px] cursor-pointer"
              >
                <div className="flex-1 flex flex-col">
                  <div className="mb-4 flex items-center gap-2">
                    <FileText className={`w-4 h-4 ${report.categoryColor}`} />
                    <span className={`text-xs font-bold tracking-wider uppercase ${report.categoryColor}`}>
                      {report.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {report.summary}
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-medium">{report.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center">Strategic Pillars</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="relative h-full p-10 bg-neutral-900/40 backdrop-blur-sm">
                <div className="absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br from-white via-gray-500 to-zinc-900 bg-clip-text text-transparent opacity-10 select-none">
                  01
                </div>
                <div className="relative z-10 flex flex-col items-start text-left">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Yield-Bearing Defense</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Cash is never idle. We earn 5-10% APY on working capital, monetizing patience while waiting for market dislocations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="relative h-full p-10 bg-neutral-900/40 backdrop-blur-sm">
                <div className="absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br from-white via-gray-500 to-zinc-900 bg-clip-text text-transparent opacity-10 select-none">
                  02
                </div>
                <div className="relative z-10 flex flex-col items-start text-left">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Intrinsic Value Entry</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We buy value, not price. Rigorous valuation models drive our allocation into undervalued blue-chips.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="relative h-full p-10 bg-neutral-900/40 backdrop-blur-sm">
                <div className="absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br from-white via-gray-500 to-zinc-900 bg-clip-text text-transparent opacity-10 select-none">
                  03
                </div>
                <div className="relative z-10 flex flex-col items-start text-left">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Aligned Incentives</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Zero management fees. We only win when you win. Performance-based compensation ensures true alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 border-t border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center">Trusted Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Multi-chain Ready</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Currently live on Base with upcoming support for Ethereum, BNB Chain, and Hyperliquid.
              </p>
            </div>

            <div className="text-center p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Onchain Execution Layer</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Institutional-grade execution via secure, decentralized asset management protocols.
              </p>
            </div>

            <div className="text-center p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Managed by Nexus One</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Proprietary Investment Research & Strategy Execution by Nexus One Research Desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <N1DVModal isOpen={isN1DVModalOpen} onClose={() => setIsN1DVModalOpen(false)} />
    </Layout>
  );
}
