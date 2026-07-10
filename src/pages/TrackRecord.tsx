import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FlaskConical, LineChart as LineChartIcon } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Layout } from '../components/Layout';
import {
  fetchBacktestData,
  rebaseAndCompute,
  monthTicks as computeMonthTicks,
  SIM_COLORS as COLORS,
  type BacktestDataPoint,
} from '../utils/backtest';

function StatCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-white/[0.02] px-5 py-4">
      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1.5">{label}</p>
      <p className={`text-2xl font-bold tabular-nums ${accent ? 'text-emerald-400' : 'text-white'}`}>
        {value}
      </p>
    </div>
  );
}

export function TrackRecord() {
  const [data, setData] = useState<BacktestDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetchBacktestData()
      .then(setData)
      .catch((e) =>
        setErr(
          e instanceof Error && e.message === 'RATE_LIMIT'
            ? 'Price API rate limit — please refresh in a minute.'
            : 'Failed to load market data.'
        )
      )
      .finally(() => setLoading(false));
  }, []);

  const { series, stats } = useMemo(() => rebaseAndCompute(data), [data]);
  const monthTicks = useMemo(() => computeMonthTicks(series), [series]);

  return (
    <Layout>
      <div className="min-h-screen font-sans bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Performance</span>
          </nav>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <LineChartIcon className="text-emerald-400" size={26} />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                N1DV Track Record
              </h1>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Barbell strategy — 40% stablecoin sleeve, 60% high-conviction digital assets —
              tracked daily against BTC and ETH since February 2026.
            </p>
          </div>

          {/* Honest-stage disclosure — mirrors the IR memo */}
          <div className="mb-10 rounded-xl border border-amber-500/30 bg-amber-500/5 px-5 py-4 flex gap-3">
            <FlaskConical className="text-amber-400 flex-shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-bold text-amber-300 mb-1 uppercase tracking-wider">
                Simulated track record — not live AUM
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                N1DV is in the seed stage, immediately prior to live deployment. The figures
                below are a virtual portfolio computed from real historical market prices with
                the strategy's target weights. Once the vault is live, this page will switch to
                on-chain NAV verifiable via the Enzyme vault address.
              </p>
            </div>
          </div>

          {err && (
            <p className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
              {err}
            </p>
          )}

          {loading && (
            <div className="h-64 flex items-center justify-center text-slate-500 text-sm">
              Loading market data…
            </div>
          )}

          {!loading && stats && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <StatCard
                  label="Cumulative Return"
                  value={`${stats.cumReturn >= 0 ? '+' : ''}${stats.cumReturn.toFixed(1)}%`}
                  accent
                />
                <StatCard
                  label="Annualized"
                  value={`${stats.annReturn >= 0 ? '+' : ''}${stats.annReturn.toFixed(1)}%`}
                />
                <StatCard label="Max Drawdown" value={`${stats.maxDrawdown.toFixed(1)}%`} />
                <StatCard
                  label="BTC Max Drawdown"
                  value={`${stats.btcMaxDrawdown.toFixed(1)}%`}
                />
              </div>

              <section className="rounded-xl border border-slate-800 bg-white/[0.02] p-6 mb-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h2 className="text-lg font-bold text-white">
                    Cumulative Return — Simulation vs Benchmarks
                  </h2>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-2 w-2 rounded-full" style={{ background: COLORS.n1dv }} /> N1DV (sim)
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="h-2 w-2 rounded-full" style={{ background: COLORS.btc }} /> BTC
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="h-2 w-2 rounded-full" style={{ background: COLORS.eth }} /> ETH
                    </span>
                  </div>
                </div>
                <div className="h-[380px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={series} margin={{ top: 4, right: 8, bottom: 0, left: -12 }}>
                      <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis
                        dataKey="date"
                        ticks={monthTicks}
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
                        contentStyle={{
                          background: '#0f172a',
                          border: '1px solid #1e293b',
                          borderRadius: 8,
                          fontSize: 13,
                        }}
                        labelStyle={{ color: '#94a3b8' }}
                        formatter={(value, name) => [
                          `${Number(value ?? 0).toFixed(2)}%`,
                          String(name ?? '').toUpperCase(),
                        ]}
                      />
                      <Line type="monotone" dataKey="n1dv" stroke={COLORS.n1dv} strokeWidth={2.5} dot={false} />
                      <Line type="monotone" dataKey="btc" stroke={COLORS.btc} strokeWidth={1.5} dot={false} />
                      <Line type="monotone" dataKey="eth" stroke={COLORS.eth} strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-white/[0.02] p-6 mb-10">
                <h2 className="text-lg font-bold text-white mb-4">Methodology</h2>
                <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc pl-5">
                  <li>
                    Virtual portfolio with fixed target weights: <span className="text-slate-300">40% USDT · 20% BTC · 20% ETH · 10% HYPE · 5% PENDLE · 5% AERO</span>, rebalanced daily.
                  </li>
                  <li>
                    Computed from real historical daily prices (CoinGecko). Simulation window starts February 1, 2026.
                  </li>
                  <li>
                    Conservative assumptions: the stablecoin sleeve is counted at <span className="text-slate-300">0% yield</span> (live strategy deploys it to DeFi yield venues), and no leverage is used.
                  </li>
                  <li>
                    Gas and slippage are not deducted; at the fund's target size their impact on daily-rebalanced spot positions is estimated below 0.5% annually.
                  </li>
                  <li>
                    Full methodology whitepaper (asset universe, rebalancing rules, cost assumptions) is available to investors in due diligence.
                  </li>
                </ul>
              </section>
            </>
          )}

          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            Simulated performance is hypothetical, does not represent live trading, and is not a
            guarantee of future results. This page is for informational purposes only and does not
            constitute investment advice or an offer of securities.
          </p>
        </div>
      </div>
    </Layout>
  );
}
