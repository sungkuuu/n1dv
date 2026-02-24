/**
 * N1DV virtual backtest: fetch real price data from CoinGecko and compute
 * cumulative returns for the fund (40% USDT, 20% WBTC, 20% ETH, 10% HYPE, 5% PENDLE, 5% AERO).
 * USDT is treated as 0% daily return.
 */

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
const CACHE_KEY = 'n1dv_backtest_365';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h

const WEIGHTS = {
  usdt: 0.4,
  btc: 0.2,
  eth: 0.2,
  hype: 0.1,
  pendle: 0.05,
  aero: 0.05,
} as const;

export type BacktestDataPoint = {
  date: string;
  monthLabel: string;
  n1dv: number;
  btc: number;
  eth: number;
};

type PriceSeries = { dayKey: string; price: number }[];

function toDayKey(tsMs: number): string {
  const d = new Date(tsMs);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

function pricesToDailySeries(prices: [number, number][]): PriceSeries {
  const byDay = new Map<string, number>();
  for (const [ts, p] of prices) {
    const key = toDayKey(ts);
    byDay.set(key, p);
  }
  return Array.from(byDay.entries())
    .map(([dayKey, price]) => ({ dayKey, price }))
    .sort((a, b) => a.dayKey.localeCompare(b.dayKey));
}

function dailyReturns(series: PriceSeries): Map<string, number> {
  const out = new Map<string, number>();
  for (let i = 1; i < series.length; i++) {
    const prev = series[i - 1].price;
    const curr = series[i].price;
    const dayKey = series[i].dayKey;
    if (prev > 0) out.set(dayKey, (curr - prev) / prev);
  }
  return out;
}

function monthLabel(dayKey: string): string {
  const [y, m] = dayKey.split('-').map(Number);
  const d = new Date(Date.UTC(2000, m - 1, 1));
  const short = d.toLocaleString('en-US', { month: 'short' });
  const year = String(y).slice(-2);
  return `${short} '${year}`;
}

async function fetchMarketChart(coinId: string): Promise<PriceSeries> {
  const url = `${COINGECKO_BASE}/coins/${coinId}/market_chart?vs_currency=usd&days=365`;
  const res = await fetch(url);
  if (res.status === 429) throw new Error('RATE_LIMIT');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as { prices?: [number, number][] };
  const prices = data.prices ?? [];
  return pricesToDailySeries(prices);
}

function alignAndCompute(
  btcSeries: PriceSeries,
  ethSeries: PriceSeries,
  hypeSeries: PriceSeries,
  pendleSeries: PriceSeries,
  aeroSeries: PriceSeries
): BacktestDataPoint[] {
  const btcReturns = dailyReturns(btcSeries);
  const ethReturns = dailyReturns(ethSeries);
  const hypeReturns = dailyReturns(hypeSeries);
  const pendleReturns = dailyReturns(pendleSeries);
  const aeroReturns = dailyReturns(aeroSeries);

  const allDays = new Set<string>();
  [btcSeries, ethSeries, hypeSeries, pendleSeries, aeroSeries].forEach((s) => {
    s.forEach(({ dayKey }) => allDays.add(dayKey));
  });
  const sortedDays = Array.from(allDays).sort();

  let n1dvCum = 1;
  let btcCum = 1;
  let ethCum = 1;
  const result: BacktestDataPoint[] = [];

  for (const dayKey of sortedDays) {
    const btcRet = btcReturns.get(dayKey) ?? 0;
    const ethRet = ethReturns.get(dayKey) ?? 0;
    const hypeRet = hypeReturns.get(dayKey) ?? 0;
    const pendleRet = pendleReturns.get(dayKey) ?? 0;
    const aeroRet = aeroReturns.get(dayKey) ?? 0;

    const n1dvDaily =
      WEIGHTS.usdt * 0 +
      WEIGHTS.btc * btcRet +
      WEIGHTS.eth * ethRet +
      WEIGHTS.hype * hypeRet +
      WEIGHTS.pendle * pendleRet +
      WEIGHTS.aero * aeroRet;

    n1dvCum *= 1 + n1dvDaily;
    btcCum *= 1 + btcRet;
    ethCum *= 1 + ethRet;

    result.push({
      date: dayKey,
      monthLabel: monthLabel(dayKey),
      n1dv: (n1dvCum - 1) * 100,
      btc: (btcCum - 1) * 100,
      eth: (ethCum - 1) * 100,
    });
  }
  return result;
}

export async function fetchBacktestData(): Promise<BacktestDataPoint[]> {
  const cached = getCached();
  if (cached) return cached;

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

  let btc: PriceSeries = [];
  let eth: PriceSeries = [];
  let hype: PriceSeries = [];
  let pendle: PriceSeries = [];
  let aero: PriceSeries = [];

  const fetchOne = async (
    id: string,
    setter: (s: PriceSeries) => void
  ): Promise<void> => {
    try {
      const series = await fetchMarketChart(id);
      setter(series);
    } catch (e) {
      if (e instanceof Error && e.message === 'RATE_LIMIT') throw e;
    }
    await delay(1300);
  };

  await fetchOne('bitcoin', (s) => (btc = s));
  await fetchOne('ethereum', (s) => (eth = s));
  await fetchOne('hyperliquid', (s) => (hype = s));
  await fetchOne('pendle', (s) => (pendle = s));
  await fetchOne('aerodrome-finance', (s) => (aero = s));

  if (btc.length < 2 || eth.length < 2) throw new Error('INSUFFICIENT_DATA');

  const out = alignAndCompute(btc, eth, hype, pendle, aero);
  setCached(out);
  return out;
}

function getCached(): BacktestDataPoint[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw) as { data: BacktestDataPoint[]; ts: number };
    if (Date.now() - ts > CACHE_TTL_MS) return null;
    return data;
  } catch {
    return null;
  }
}

function setCached(data: BacktestDataPoint[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // ignore
  }
}

/** Slice by time range: 3M ≈ 90d, 6M ≈ 180d, 1Y = all. */
export function sliceBacktestByRange(
  data: BacktestDataPoint[],
  range: '3M' | '6M' | '1Y'
): BacktestDataPoint[] {
  if (data.length === 0) return [];
  if (range === '1Y') return data;
  const days = range === '3M' ? 90 : 180;
  if (data.length <= days) return data;
  return data.slice(-days);
}

/** One point per month for cleaner chart (last day of each month in range). */
export function toChartPoints(data: BacktestDataPoint[]): { month: string; n1dv: number; btc: number; eth: number }[] {
  if (data.length === 0) return [];
  const byMonth = new Map<string, BacktestDataPoint>();
  for (const p of data) {
    const monthKey = p.date.slice(0, 7);
    byMonth.set(monthKey, p);
  }
  return Array.from(byMonth.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, p]) => ({
      month: p.monthLabel,
      n1dv: Math.round(p.n1dv * 10) / 10,
      btc: Math.round(p.btc * 10) / 10,
      eth: Math.round(p.eth * 10) / 10,
    }));
}
