import { useState, useEffect } from 'react';
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
  sliceBacktestByRange,
  toChartPoints,
} from '../utils/backtest';

/** Full 12 months fallback — N1DV, BTC, ETH cumulative return (%) */
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

export function FundChart() {
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

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <span className="text-sm text-gray-400 font-medium">Cumulative return (%)</span>
        <div className="flex items-center gap-3">
          <div className="inline-flex p-0.5 border border-white/10 bg-white/[0.02] rounded-lg">
            {TIME_RANGE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setTimeRange(opt.value)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer rounded-md ${
                  timeRange === opt.value
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs">
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
          <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-white/[0.02] border border-white/5 rounded-lg">
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
                        <div className="bg-[#0a0a0a] border border-white/20 px-4 py-3 shadow-xl rounded-lg">
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
  );
}
