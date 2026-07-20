import { FileText, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { reports } from '../data/reports';
import { reportBadgeClassName, reportBadgeLabel, type ReportBadgeInput } from '../lib/reportBadge';
import { N1DVModal } from '../components/N1DVModal';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  fetchBacktestData,
  rebaseAndCompute,
  monthTicks as computeMonthTicks,
  SIM_COLORS,
} from '../utils/backtest';
import { resolveBrand } from '../lib/brand';
import { HOME_COPY } from '../lib/homeContent';

interface FeaturedReport {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  summary: string;
  fullContent: string;
  link?: string;
  badge?: {
    text: string;
    variant: string;
  };
}


const getCategoryColor = (category: string) => {
  if (category === 'WEEKLY BRIEF') return 'text-blue-500';
  if (category === 'DEEP RESEARCH') return 'text-emerald-500';
  if (category === 'QUARTERLY REPORT') return 'text-indigo-400';
  if (category === 'MARKET STRATEGY') return 'text-blue-500';
  return 'text-gray-400';
};


const parseDate = (dateStr: string) => {
  return new Date(dateStr);
};

const FEATURED_REPORTS: FeaturedReport[] = reports
  .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
  .slice(0, 3)
  .map((report) => ({
    id: report.id,
    category: report.category,
    categoryColor: getCategoryColor(report.category),
    title: report.title,
    date: report.date,
    summary: report.summary,
    fullContent: report.content,
    link: report.link || `/insights/${report.id}`,
    badge: report.badge
  }));


export function Home() {
  const navigate = useNavigate();
  const [isN1DVModalOpen, setIsN1DVModalOpen] = useState(false);

  const copy = useMemo(() => HOME_COPY[resolveBrand().id], []);

  const [backtestData, setBacktestData] = useState<Awaited<ReturnType<typeof fetchBacktestData>> | null>(null);
  const [chartDataLoading, setChartDataLoading] = useState(true);
  const [chartDataError, setChartDataError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setChartDataLoading(true);
    setChartDataError(null);
    fetchBacktestData()
      .then((data) => {
        if (!cancelled) setBacktestData(data);
      })
      .catch((e) => {
        if (cancelled) return;
        const msg = e instanceof Error ? e.message : 'Failed to load chart data';
        setChartDataError(msg === 'RATE_LIMIT' ? 'Rate limit. Try again later.' : 'Using simulated data.');
        setBacktestData(null);
      })
      .finally(() => {
        if (!cancelled) setChartDataLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  // Same rebase-to-Feb-2026 model as the /performance page → identical numbers.
  const { series, stats } = useMemo(
    () => rebaseAndCompute(backtestData ?? []),
    [backtestData]
  );
  const chartTicks = useMemo(() => computeMonthTicks(series), [series]);

  return (
    <Layout>
      <section className="px-4 py-20 sm:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent pb-3">
            {copy.heroTitle[0]} <br className="hidden sm:block" /> {copy.heroTitle[1]}
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {copy.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to={copy.primaryCta.to}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-200 transition-all"
            >
              {copy.primaryCta.label}
              <ArrowRight className="ml-3" size={22} />
            </Link>
            <Link
              to={copy.secondaryCta.to}
              className="inline-flex items-center px-6 py-3 border border-white/20 text-gray-200 text-lg font-bold rounded-lg hover:bg-white/5 hover:border-white/30 transition-all"
            >
              {copy.secondaryCta.label}
              <ArrowRight className="ml-3" size={22} />
            </Link>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-36 px-4 pt-12 pb-20 border-t border-white/10 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl sm:text-5xl font-bold">Performance</h2>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase">
                Simulated
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl">
              Barbell strategy vs BTC &amp; ETH since Feb 2026 — a virtual portfolio from real market prices, not live trading.
            </p>
          </div>

          {chartDataLoading && (
            <div className="h-64 flex items-center justify-center text-gray-500 text-sm">
              Loading market data…
            </div>
          )}

          {!chartDataLoading && stats && (
            <>
              {/* Stat cards — identical model to the /performance page */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1.5">Cumulative Return</p>
                  <p className="text-2xl font-bold tabular-nums text-emerald-400">
                    {`${stats.cumReturn >= 0 ? '+' : ''}${stats.cumReturn.toFixed(1)}%`}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1.5">Annualized</p>
                  <p className="text-2xl font-bold tabular-nums text-white">
                    {`${stats.annReturn >= 0 ? '+' : ''}${stats.annReturn.toFixed(1)}%`}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1.5">Max Drawdown</p>
                  <p className="text-2xl font-bold tabular-nums text-white">{`${stats.maxDrawdown.toFixed(1)}%`}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1.5">BTC Max Drawdown</p>
                  <p className="text-2xl font-bold tabular-nums text-white">{`${stats.btcMaxDrawdown.toFixed(1)}%`}</p>
                </div>
              </div>

              {/* Chart — same daily rebased series as /performance */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h3 className="text-lg font-bold text-white">Cumulative Return — Simulation vs Benchmarks</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-2 w-2 rounded-full" style={{ background: SIM_COLORS.n1dv }} /> N1DV (sim)
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="h-2 w-2 rounded-full" style={{ background: SIM_COLORS.btc }} /> BTC
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="h-2 w-2 rounded-full" style={{ background: SIM_COLORS.eth }} /> ETH
                    </span>
                  </div>
                </div>
                {chartDataError && (
                  <p className="text-xs text-amber-500/90 mb-2">{chartDataError}</p>
                )}
                <div className="h-[320px] sm:h-[380px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={series} margin={{ top: 4, right: 8, bottom: 0, left: -12 }}>
                      <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis
                        dataKey="date"
                        ticks={chartTicks}
                        tickFormatter={(d: string) => {
                          const [, m] = d.split('-');
                          return ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m)];
                        }}
                        stroke="#475569"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        stroke="#475569"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickFormatter={(v: number) => `${v}%`}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 8, fontSize: 13 }}
                        labelStyle={{ color: '#94a3b8' }}
                        formatter={(value, name) => [`${Number(value ?? 0).toFixed(2)}%`, String(name ?? '').toUpperCase()]}
                      />
                      <Line type="monotone" dataKey="n1dv" stroke={SIM_COLORS.n1dv} strokeWidth={2.5} dot={false} />
                      <Line type="monotone" dataKey="btc" stroke={SIM_COLORS.btc} strokeWidth={1.5} dot={false} />
                      <Line type="monotone" dataKey="eth" stroke={SIM_COLORS.eth} strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/performance"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                  >
                    View Full Track Record
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section id="strategy-section" className="scroll-mt-36 px-4 py-20 border-t border-gray-800 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">{copy.vaultsHeading}</h2>
            <p className="text-gray-400 text-lg">{copy.vaultsIntro}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-gradient-to-br from-gray-900/50 to-black p-10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                  <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">Seed Stage</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Nexus One Deep Value (N1DV)</h3>
              <div className="text-sm text-gray-400 mb-6 font-semibold">Deep Value / Defensive Alpha</div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                A dynamic barbell vault balancing 40% yield-bearing working capital with 60% high-conviction growth assets (BTC, ETH).
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
              <Link
                to="/vaults/n1dv"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-black text-sm font-bold hover:bg-gray-200 transition-all"
              >
                View Details
              </Link>
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

          <div className="flex justify-end mt-10">
            <Link
              to="/vaults"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 bg-white/[0.03] backdrop-blur-sm text-gray-300 hover:text-white hover:border-white/25 transition-all text-sm font-medium"
            >
              Explore All Vaults
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
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
                className="group p-10 bg-[#0a0a0a] border border-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full min-h-[320px] cursor-pointer rounded-xl"
              >
                <div className="flex-1 flex flex-col">
                  <div className="mb-4 flex items-center gap-2 w-fit">
                    {report.badge ? (
                      <span className={`inline-block w-fit ${reportBadgeClassName(report as ReportBadgeInput)}`}>
                        {reportBadgeLabel(report as ReportBadgeInput)}
                      </span>
                    ) : report.category === 'DEEP RESEARCH' ? (
                      <span className="inline-block w-fit bg-transparent border border-emerald-500 text-emerald-500 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {report.category}
                      </span>
                    ) : report.category === 'WEEKLY BRIEF' ? (
                      <span className="inline-block w-fit bg-transparent border border-blue-500 text-blue-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {report.category}
                      </span>
                    ) : report.category === 'QUARTERLY REPORT' ? (
                      <span className="inline-block w-fit bg-transparent border border-indigo-500 text-indigo-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {report.category}
                      </span>
                    ) : (
                      <>
                        <FileText className={`w-4 h-4 ${report.categoryColor}`} />
                        <span className={`text-xs font-bold tracking-wider uppercase ${report.categoryColor}`}>
                          {report.category}
                        </span>
                      </>
                    )}
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
          <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center">{copy.pillarsHeading}</h2>
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
