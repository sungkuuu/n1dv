import { FileText, ArrowRight, ShieldCheck, Layers, Percent, TrendingUp } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  fetchEnzymeVaultData,
  ENZYME_VAULT_ADDRESS,
  type PortfolioToken,
} from '../api/enzymeSubgraph';
import {
  fetchBacktestData,
  sliceBacktestByRange,
  toChartPoints,
} from '../utils/backtest';

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

const VAULT_ADDRESS = ENZYME_VAULT_ADDRESS;

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

/** Fallback when on-chain data is unavailable — matches VaultDetail */
const FALLBACK_TVL = 1_024_500;

/** Full 12 months dummy cumulative return (%) — N1DV leads, BTC/ETH with volatility */
const BENCHMARK_CHART_DATA_FULL = [
  { month: 'Mar', n1dv: 0, btc: 0, eth: 0 },
  { month: 'Apr', n1dv: 2.1, btc: 0.8, eth: 0.5 },
  { month: 'May', n1dv: 4.8, btc: 2.5, eth: 1.8 },
  { month: 'Jun', n1dv: 7.2, btc: 3.8, eth: 3.2 },
  { month: 'Jul', n1dv: 10.1, btc: 5.5, eth: 4.5 },
  { month: 'Aug', n1dv: 12.8, btc: 7.0, eth: 5.8 },
  { month: 'Sep', n1dv: 15.5, btc: 8.2, eth: 6.9 },
  { month: 'Oct', n1dv: 18.8, btc: 10.5, eth: 8.2 },
  { month: 'Nov', n1dv: 22.2, btc: 13.1, eth: 9.8 },
  { month: 'Dec', n1dv: 24.9, btc: 15.0, eth: 11.2 },
  { month: 'Jan', n1dv: 28.1, btc: 17.8, eth: 13.0 },
  { month: 'Feb', n1dv: 31.4, btc: 20.5, eth: 15.2 },
];
const CHART_COLORS = {
  n1dv: '#34D399',
  btc: '#F59E0B',
  eth: '#818CF8',
};

type TimeRangeKey = '3M' | '6M' | '1Y';
const TIME_RANGE_OPTIONS: { value: TimeRangeKey; label: string }[] = [
  { value: '3M', label: '3M' },
  { value: '6M', label: '6M' },
  { value: '1Y', label: '1Y' },
];

export function Home() {
  const navigate = useNavigate();
  const [balances, setBalances] = useState<PortfolioToken[]>([]);
  const [totalTVL, setTotalTVL] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isN1DVModalOpen, setIsN1DVModalOpen] = useState(false);

  const [chartVisibility, setChartVisibility] = useState({
    n1dv: true,
    btc: false,
    eth: false,
  });
  const [timeRange, setTimeRange] = useState<TimeRangeKey>('1Y');
  const [backtestData, setBacktestData] = useState<Awaited<ReturnType<typeof fetchBacktestData>> | null>(null);
  const [chartDataLoading, setChartDataLoading] = useState(true);
  const [chartDataError, setChartDataError] = useState<string | null>(null);

  const toggleChartLine = (key: keyof typeof chartVisibility) => {
    setChartVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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

  const chartData = (() => {
    if (backtestData && backtestData.length > 0) {
      const sliced = sliceBacktestByRange(backtestData, timeRange);
      return toChartPoints(sliced);
    }
    const fallback = BENCHMARK_CHART_DATA_FULL;
    if (timeRange === '3M') return fallback.slice(-3);
    if (timeRange === '6M') return fallback.slice(-6);
    return fallback;
  })();

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

  const useFallback = !loading && (totalTVL === 0 || balances.length === 0);
  const displayTVL = useFallback ? FALLBACK_TVL : totalTVL;
  return (
    <Layout>
      <section className="px-4 py-20 sm:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent pb-3">
            The Onchain <br className="hidden sm:block" /> Deep Value Active Vault
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The Anchor of Your Crypto Portfolio. We engineer defensive alpha through Deep Value execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-200 transition-all"
            >
              Enter Vault
              <ArrowRight className="ml-3" size={22} />
            </Link>
            <Link
              to="/performance"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-gray-200 text-lg font-bold rounded-lg hover:bg-white/5 hover:border-white/30 transition-all"
            >
              View Track Record
              <ArrowRight className="ml-3" size={22} />
            </Link>
          </div>

          {/* Trust signals — a credential strip under a divider */}
          <div className="mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Layers size={15} className="flex-shrink-0 opacity-70" /> Enzyme Onyx Infrastructure
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={15} className="flex-shrink-0 opacity-70" /> On-chain Verifiable
              </span>
              <span className="inline-flex items-center gap-2">
                <Percent size={15} className="flex-shrink-0 opacity-70" /> 0 / 20 Fee Structure
              </span>
              <span className="inline-flex items-center gap-2">
                <TrendingUp size={15} className="flex-shrink-0 opacity-70" /> Defensive Alpha
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="strategy-section" className="scroll-mt-36 px-4 py-20 border-t border-gray-800 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Our Vaults</h2>
            <p className="text-gray-400 text-lg">Institutional-grade onchain capital deployment vehicles tailored for every market cycle.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border border-white/10 bg-gradient-to-br from-gray-900/50 to-black p-10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  <span className="animate-live-pulse h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">LIVE</span>
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

      <section id="portfolio" className="scroll-mt-36 px-4 pt-12 pb-20 border-t border-white/10 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Live Portfolio</h2>
            <p className="text-gray-400 text-lg max-w-2xl">Alpha vs. benchmarks. Last 6 months cumulative return.</p>
          </div>

          <div className="relative">
            <div className="relative border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden">
              {loading ? (
                <div className="flex items-center justify-center py-16 px-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    <div className="text-gray-400 text-lg">Fetching on-chain data...</div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-6 px-8 border-b border-white/10">
                    <div className="flex items-center gap-8 sm:gap-12">
                      <div className="text-center sm:text-left">
                        <div className="text-xs text-gray-500 mb-0.5 font-semibold tracking-wider uppercase">TVL</div>
                        <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono-num">
                          ${displayTVL.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </div>
                      </div>
                      <div className="h-8 w-px bg-white/10 hidden sm:block" />
                      <div className="text-center sm:text-left">
                        <div className="text-xs text-gray-500 mb-0.5 font-semibold tracking-wider uppercase">APY</div>
                        <div className="text-3xl sm:text-4xl font-light tracking-tight text-emerald-400 font-mono-num">12.4%</div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 sm:px-6 pt-6 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <span className="text-sm text-gray-400 font-medium">Cumulative return (%)</span>
                      <div className="flex items-center gap-3">
                        <div className="inline-flex p-0.5 border border-white/10 bg-white/[0.02]">
                          {TIME_RANGE_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setTimeRange(opt.value)}
                              className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                                timeRange === opt.value
                                  ? 'bg-white/10 text-white'
                                  : 'text-gray-500 hover:text-gray-300'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center gap-6 text-xs">
                          <button
                            type="button"
                            onClick={() => toggleChartLine('n1dv')}
                            className={`flex items-center gap-2 transition-opacity hover:opacity-100 cursor-pointer ${chartVisibility.n1dv ? 'opacity-100' : 'opacity-50'}`}
                          >
                            <span className="w-3 h-0.5 rounded-full" style={{ backgroundColor: CHART_COLORS.n1dv }} />
                            <span className="text-gray-400">N1DV</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleChartLine('btc')}
                            className={`flex items-center gap-2 transition-opacity hover:opacity-100 cursor-pointer ${chartVisibility.btc ? 'opacity-100' : 'opacity-50'}`}
                          >
                            <span className="w-3 h-0.5 rounded-full" style={{ backgroundColor: CHART_COLORS.btc }} />
                            <span className="text-gray-400">BTC</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleChartLine('eth')}
                            className={`flex items-center gap-2 transition-opacity hover:opacity-100 cursor-pointer ${chartVisibility.eth ? 'opacity-100' : 'opacity-50'}`}
                          >
                            <span className="w-3 h-0.5 rounded-full" style={{ backgroundColor: CHART_COLORS.eth }} />
                            <span className="text-gray-400">ETH</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="h-[280px] sm:h-[320px] w-full">
                      {chartDataLoading ? (
                        <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-white/[0.02] border border-white/5">
                          <div className="w-10 h-10 border-2 border-white/10 border-t-white rounded-full animate-spin" />
                          <p className="text-sm text-gray-500">Loading backtest data from CoinGecko...</p>
                          <p className="text-xs text-gray-600">Runs once per day (cached)</p>
                        </div>
                      ) : (
                        <div className="h-full w-full flex flex-col">
                          {chartDataError && (
                            <p className="text-xs text-amber-500/90 mb-2 text-center flex-shrink-0">{chartDataError}</p>
                          )}
                          <div className="flex-1 min-h-0">
                          <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={chartData}
                          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                          <XAxis
                            dataKey="month"
                            axisLine={{ stroke: 'rgba(255,255,255,0.12)' }}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'inherit' }}
                            interval="preserveStartEnd"
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'inherit' }}
                            tickFormatter={(v) => `${v}%`}
                            domain={[0, 'auto']}
                            width={36}
                          />
                          <Tooltip
                            content={({ active, payload, label }) => {
                              if (!active || !payload?.length || !label) return null;
                              return (
                                <div className="bg-[#0a0a0a] border border-white/20 px-4 py-3 shadow-xl">
                                  <div className="text-xs text-gray-500 font-semibold tracking-wider mb-2 uppercase">{label}</div>
                                  <div className="space-y-1">
                                    {payload.map((p) => (
                                      <div key={p.dataKey} className="flex items-center justify-between gap-4 text-sm">
                                        <span style={{ color: p.color }}>{p.name === 'n1dv' ? 'N1DV' : p.name?.toUpperCase()}</span>
                                        <span className="text-white font-mono-num font-medium">{Number(p.value).toFixed(1)}%</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            }}
                            formatter={(value) => [`${Number(value ?? 0).toFixed(1)}%`, '']}
                          />
                          <Line
                            type="monotone"
                            dataKey="n1dv"
                            name="N1DV"
                            stroke={CHART_COLORS.n1dv}
                            strokeWidth={3}
                            dot={{ fill: CHART_COLORS.n1dv, strokeWidth: 0, r: 3 }}
                            activeDot={{ r: 5, fill: CHART_COLORS.n1dv, stroke: 'rgba(255,255,255,0.3)', strokeWidth: 1 }}
                            hide={!chartVisibility.n1dv}
                            isAnimationActive
                            animationDuration={800}
                          />
                          <Line
                            type="monotone"
                            dataKey="btc"
                            name="BTC"
                            stroke={CHART_COLORS.btc}
                            strokeWidth={2}
                            dot={{ fill: CHART_COLORS.btc, strokeWidth: 0, r: 2.5 }}
                            activeDot={{ r: 5, fill: CHART_COLORS.btc, stroke: 'rgba(255,255,255,0.3)', strokeWidth: 1 }}
                            hide={!chartVisibility.btc}
                            isAnimationActive
                            animationDuration={800}
                          />
                          <Line
                            type="monotone"
                            dataKey="eth"
                            name="ETH"
                            stroke={CHART_COLORS.eth}
                            strokeWidth={2}
                            dot={{ fill: CHART_COLORS.eth, strokeWidth: 0, r: 2.5 }}
                            activeDot={{ r: 5, fill: CHART_COLORS.eth, stroke: 'rgba(255,255,255,0.3)', strokeWidth: 1 }}
                            hide={!chartVisibility.eth}
                            isAnimationActive
                            animationDuration={800}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-10 pb-10 px-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                      to="/vaults/n1dv"
                      className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                    >
                      View N1DV Details
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
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
