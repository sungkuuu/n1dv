import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, RadioTower, RefreshCw } from 'lucide-react';
import { Layout } from '../components/Layout';
import { fetchYieldRadar, formatTvl, type YieldRow } from '../lib/yieldRadar';

export function YieldRadar() {
  const [rows, setRows] = useState<YieldRow[]>([]);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  const load = useCallback(() => {
    setLoading(true);
    setErr('');
    fetchYieldRadar()
      .then((r) => {
        setRows(r);
        setUpdatedAt(new Date());
      })
      .catch((e) => setErr(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const bestApy = rows.length ? Math.max(...rows.map((r) => r.apy)) : null;

  return (
    <Layout>
      <div className="min-h-screen font-sans bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Yield Radar</span>
          </nav>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <RadioTower className="text-emerald-400" size={26} />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Yield Radar
              </h1>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Live stablecoin and fixed-income yields across the protocols the Nexus One
              desk monitors. Pulled directly from public on-chain data aggregators — no
              estimates, no stale numbers.
            </p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
              {updatedAt
                ? `Last updated ${updatedAt.toUTCString().slice(17, 25)} UTC`
                : 'Fetching live data…'}
            </p>
            <button
              onClick={load}
              disabled={loading}
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white disabled:opacity-50 transition-colors"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>

          {err && (
            <p className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
              Failed to load live data ({err}). Please refresh in a moment.
            </p>
          )}

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/60 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-4 font-bold">Protocol</th>
                  <th className="px-5 py-4 font-bold">Asset</th>
                  <th className="px-5 py-4 font-bold">Category</th>
                  <th className="px-5 py-4 font-bold">Chain</th>
                  <th className="px-5 py-4 font-bold text-right">APY</th>
                  <th className="px-5 py-4 font-bold text-right">30d Avg</th>
                  <th className="px-5 py-4 font-bold text-right">TVL</th>
                </tr>
              </thead>
              <tbody>
                {loading &&
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i} className="border-t border-slate-800/60">
                      {Array.from({ length: 7 }).map((_, j) => (
                        <td key={j} className="px-5 py-4">
                          <div className="h-4 w-16 animate-pulse rounded bg-slate-800/80" />
                        </td>
                      ))}
                    </tr>
                  ))}
                {!loading &&
                  rows.map((r) => (
                    <tr
                      key={`${r.protocol}-${r.asset}`}
                      className="border-t border-slate-800/60 hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="px-5 py-4">
                        <a
                          href={r.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white hover:text-emerald-400 transition-colors"
                        >
                          {r.protocol}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-slate-300">{r.asset}</td>
                      <td className="px-5 py-4 text-slate-400">{r.category}</td>
                      <td className="px-5 py-4 text-slate-400">{r.chain}</td>
                      <td
                        className={`px-5 py-4 text-right font-bold tabular-nums ${
                          r.apy === bestApy ? 'text-emerald-400' : 'text-white'
                        }`}
                      >
                        {r.apy.toFixed(2)}%
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-slate-400">
                        {r.apy30d != null ? `${r.apy30d.toFixed(2)}%` : '—'}
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-slate-300">
                        {formatTvl(r.tvlUsd)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-slate-600 leading-relaxed max-w-3xl">
            Data from DefiLlama and Pendle public APIs, refreshed on page load. Sources that
            cannot be verified are omitted rather than estimated. This page is for
            informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </Layout>
  );
}
