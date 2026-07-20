/**
 * N1DV virtual backtest: fetch real price data from CoinGecko and compute
 * cumulative returns for the vault (40% USDT, 20% WBTC, 20% ETH, 10% HYPE, 5% PENDLE, 5% AERO).
 * The 40% stablecoin sleeve earns a conservative DeFi yield (STABLE_APY), matching
 * the strategy's "yield-bearing defense" — the working capital is never idle.
 */

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
// Bumped the cache key so the yield-bearing recompute isn't masked by a stale 0%-yield cache.
// v3: invalidates caches poisoned by silently-empty rate-limited fetches (fixed below).
const CACHE_KEY = 'n1dv_backtest_365_v3';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h

const WEIGHTS = {
  usdt: 0.4,
  btc: 0.2,
  eth: 0.2,
  hype: 0.1,
  pendle: 0.05,
  aero: 0.05,
} as const;

/** Assumed annual yield on the stablecoin sleeve (conservative lower bound of the
 *  strategy's 5–10% APY working-capital claim). Applied daily to the USDT weight. */
const STABLE_APY = 0.05;
const STABLE_DAILY_RETURN = Math.pow(1 + STABLE_APY, 1 / 365) - 1;

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
  const data = (await res.json()) as {
    prices?: [number, number][];
    // CoinGecko's free tier signals rate limiting via HTTP 200 + an error body.
    status?: { error_code?: number };
  };
  if (data.status?.error_code === 429) throw new Error('RATE_LIMIT');
  const prices = data.prices ?? [];
  if (prices.length === 0) throw new Error('EMPTY_SERIES');
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
      WEIGHTS.usdt * STABLE_DAILY_RETURN +
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

const COIN_IDS = ['bitcoin', 'ethereum', 'hyperliquid', 'pendle', 'aerodrome-finance'] as const;

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Fetch one coin, retrying twice with backoff when CoinGecko rate-limits. */
async function fetchWithRetry(id: string): Promise<PriceSeries> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await delay(2500 * attempt);
    try {
      return await fetchMarketChart(id);
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError;
}

/** True when the series is a full backfill reaching (at least) yesterday UTC. */
function isComplete(out: BacktestDataPoint[]): boolean {
  if (out.length < 300) return false;
  const yesterday = toDayKey(Date.now() - 86_400_000);
  return out[out.length - 1].date >= yesterday;
}

/** Dedupe concurrent callers (Home, vault page, Performance all want this). */
let inFlight: Promise<BacktestDataPoint[]> | null = null;

export function fetchBacktestData(): Promise<BacktestDataPoint[]> {
  const cached = getCached();
  if (cached?.fresh) return Promise.resolve(cached.data);

  if (!inFlight) {
    inFlight = doFetch().finally(() => {
      inFlight = null;
    });
  }

  // Stale-while-revalidate: paint the expired cache immediately, refresh behind it.
  if (cached) {
    void inFlight.catch(() => {});
    return Promise.resolve(cached.data);
  }
  return inFlight;
}

async function doFetch(): Promise<BacktestDataPoint[]> {
  // All five in parallel — the free tier tolerates a burst of 5; retry covers 429s.
  const settled = await Promise.allSettled(COIN_IDS.map((id) => fetchWithRetry(id)));
  const [btc, eth, hype, pendle, aero] = settled.map((s) =>
    s.status === 'fulfilled' ? s.value : []
  );

  if (btc.length < 2 || eth.length < 2) {
    const rateLimited = settled.some(
      (s) => s.status === 'rejected' && (s.reason as Error)?.message === 'RATE_LIMIT'
    );
    throw new Error(rateLimited ? 'RATE_LIMIT' : 'INSUFFICIENT_DATA');
  }

  const out = alignAndCompute(btc, eth, hype, pendle, aero);
  // Cache only a complete run — a partial fetch must not poison 24h of views.
  const allOk = settled.every((s) => s.status === 'fulfilled');
  if (allOk && isComplete(out)) setCached(out);
  return out;
}

function getCached(): { data: BacktestDataPoint[]; fresh: boolean } | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw) as { data: BacktestDataPoint[]; ts: number };
    if (!Array.isArray(data) || data.length === 0) return null;
    return { data, fresh: Date.now() - ts <= CACHE_TTL_MS };
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

// ---------------------------------------------------------------------------
// Simulation track-record model — shared by /performance and the home preview
// so both pages show identical numbers.
// ---------------------------------------------------------------------------

/** Simulation portfolio inception per the strategy definition (Feb 2026). */
export const SIM_START = '2026-02-01';

/** Line colors for the simulation vs benchmark chart. */
export const SIM_COLORS = { n1dv: '#34D399', btc: '#F59E0B', eth: '#818CF8' } as const;

export interface SimStats {
  days: number;
  cumReturn: number;
  annReturn: number;
  maxDrawdown: number;
  btcCumReturn: number;
  btcMaxDrawdown: number;
}

/** Rebase the cumulative-return series to SIM_START and compute headline stats. */
export function rebaseAndCompute(data: BacktestDataPoint[]): {
  series: BacktestDataPoint[];
  stats: SimStats | null;
} {
  const sliced = data.filter((p) => p.date >= SIM_START);
  if (sliced.length < 2) return { series: [], stats: null };

  const base = sliced[0];
  const rebase = (v: number, b: number) => ((1 + v / 100) / (1 + b / 100) - 1) * 100;
  const series = sliced.map((p) => ({
    ...p,
    n1dv: rebase(p.n1dv, base.n1dv),
    btc: rebase(p.btc, base.btc),
    eth: rebase(p.eth, base.eth),
  }));

  const drawdown = (values: number[]) => {
    let peak = -Infinity;
    let maxDd = 0;
    for (const v of values) {
      const equity = 1 + v / 100;
      peak = Math.max(peak, equity);
      maxDd = Math.min(maxDd, equity / peak - 1);
    }
    return maxDd * 100;
  };

  const last = series[series.length - 1];
  const days = Math.max(
    1,
    Math.round((Date.parse(last.date) - Date.parse(series[0].date)) / 86_400_000)
  );
  const cum = last.n1dv / 100;
  return {
    series,
    stats: {
      days,
      cumReturn: last.n1dv,
      annReturn: (Math.pow(1 + cum, 365 / days) - 1) * 100,
      maxDrawdown: drawdown(series.map((p) => p.n1dv)),
      btcCumReturn: last.btc,
      btcMaxDrawdown: drawdown(series.map((p) => p.btc)),
    },
  };
}

/** First date of each month in the series — for clean monthly x-axis ticks. */
export function monthTicks(series: BacktestDataPoint[]): string[] {
  const seen = new Set<string>();
  return series
    .filter((p) => {
      const m = p.date.slice(0, 7);
      if (seen.has(m)) return false;
      seen.add(m);
      return true;
    })
    .map((p) => p.date);
}
