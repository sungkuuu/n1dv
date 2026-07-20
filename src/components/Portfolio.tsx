import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { MultiChainBadge } from './MultiChainBadge';
import {
  fetchEnzymeVaultData,
  ENZYME_VAULT_ADDRESS,
  type PortfolioToken,
} from '../api/enzymeSubgraph';

const VAULT_ADDRESS = ENZYME_VAULT_ADDRESS;

/** Optional: link to vault UI. Set VITE_VAULT_APP_URL in .env to override. */
const VAULT_APP_URL =
  (import.meta.env?.VITE_VAULT_APP_URL as string) ||
  `https://basescan.org/address/${VAULT_ADDRESS}`;

export const Portfolio = () => {
  const [balances, setBalances] = useState<PortfolioToken[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchEnzymeVaultData(VAULT_ADDRESS);
        setBalances(data.portfolio);
        setError(null);
      } catch (err) {
        console.error('Error fetching Enzyme vault data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch portfolio data');
        setBalances([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const formatBalance = (balance: string) => {
    const num = parseFloat(balance);
    if (num === 0) return '0';
    if (num < 0.01) return num.toFixed(6);
    if (num < 1) return num.toFixed(4);
    return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h1 className="text-3xl sm:text-5xl font-bold mb-12">Live Onchain Portfolio</h1>
          <div className="flex items-center justify-center py-20">
            <div className="text-gray-400 text-lg font-mono-num">Loading portfolio data from Enzyme Subgraph...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h1 className="text-3xl sm:text-5xl font-bold mb-12">Live Onchain Portfolio</h1>
          <div className="border border-red-900 bg-red-950/20 p-8 text-red-400 rounded">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl sm:text-5xl font-bold mb-12">Live Onchain Portfolio</h1>

        <div className="mb-12">
          <MultiChainBadge />
        </div>

        <div className="border border-white/10 bg-[#111111] p-8 mb-8 rounded">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Vault AUM (Live)</h2>
            <div className="relative">
              <select className="bg-black border border-white/10 text-white px-4 py-2 text-sm font-medium appearance-none pr-10 cursor-default rounded">
                <option>N1 Deep Value (Current)</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>
          </div>

          <div className="space-y-3">
            {balances.map((token) => {
              const balance = parseFloat(token.balance);
              const isActive = balance > 0;

              return (
                <div
                  key={token.symbol}
                  className="flex items-center justify-between p-6 border border-white/10 hover:border-white/20 transition-colors bg-black/60 rounded"
                >
                  <div>
                    <div className={`font-bold text-xl mb-1 ${isActive ? 'text-white' : 'text-gray-700'}`}>
                      {token.symbol}
                    </div>
                    <div className="text-sm text-gray-500">{token.name}</div>
                    <div className="text-xs text-gray-600 mt-1 font-mono-num">Status: {isActive ? 'Active' : 'Inactive'}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold font-mono-num ${isActive ? 'text-white' : 'text-gray-700'}`}>
                      {formatBalance(token.balance)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{token.symbol}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-white/10 bg-gradient-to-br from-gray-900/50 to-black p-8 rounded">
          <h2 className="text-xl font-bold mb-6">Vault Information</h2>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Vault Address</span>
              <span className="font-mono-num text-white">{VAULT_ADDRESS.slice(0, 6)}...{VAULT_ADDRESS.slice(-4)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Network</span>
              <span className="text-white">Base Mainnet</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Strategy</span>
              <span className="text-white">Nexus One Deep Value (N1DV)</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={`https://basescan.org/address/${VAULT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-emerald-600 text-emerald-500 text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all"
            >
              Verify Onchain Strategy
              <ExternalLink className="ml-2" size={16} />
            </a>
            <a
              href={VAULT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-500 transition-all"
            >
              Invest Now
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
