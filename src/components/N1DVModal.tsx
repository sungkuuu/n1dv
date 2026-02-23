import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { ENZYME_VAULT_ADDRESS } from '../api/enzymeSubgraph';

/** Vault app / explorer link. Set VITE_VAULT_APP_URL in .env to override. */
const VAULT_APP_URL =
  (import.meta.env?.VITE_VAULT_APP_URL as string) ||
  `https://basescan.org/address/${ENZYME_VAULT_ADDRESS}`;

interface N1DVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function N1DVModal({ isOpen, onClose }: N1DVModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl mx-4 my-8">
        <div className="bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] border border-white/20 shadow-2xl">
          <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-6 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">N1DV Investment Thesis</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-8 py-12 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="space-y-16">
              <div className="mb-16">
                <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent pb-2">
                  N1DV
                </h1>
                <p className="text-xl text-gray-400">
                  Nexus One Deep Value Strategies. True Value in a World of Hype.
                </p>
              </div>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">
                  1. The Dilemma: Transparency vs. Alpha
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6">The Problem</h3>
                    <div className="space-y-6 text-lg leading-relaxed">
                      <div className="mb-6">
                        <p className="font-medium text-gray-300 mb-2">Traditional Funds</p>
                        <p className="text-gray-400">
                          Privacy without trust. Opaque structures enabled disasters like FTX.
                          Investors had no real-time visibility into solvency or positions.
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="font-medium text-gray-300 mb-2">Early DeFi</p>
                        <p className="text-gray-400">
                          Trust without privacy. Full transparency led to alpha leak and front-running.
                          Every move is visible and exploitable by MEV bots.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6 mt-12">The N1DV Solution</h3>
                    <div className="space-y-8 text-lg leading-relaxed">
                      <div className="mb-6">
                        <p className="font-medium text-gray-300 mb-2">Now (MVP): Real-time Proof of Solvency</p>
                        <p className="text-gray-400">
                          LPs can verify funds on-chain 24/7. Complete transparency through Base Network
                          verification eliminates counterparty risk. No more FTX-style collapses.
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="font-medium text-gray-300 mb-2">Future (Privacy): Zero-Knowledge (ZK) Proofs</p>
                        <p className="text-gray-400">
                          Verify returns without revealing live positions. The perfect balance of
                          institutional trust and alpha protection. Prove performance cryptographically
                          while keeping strategy private.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">
                  2. Strategy: Defensive Alpha in a Cyclical Downturn
                </h2>

                <div className="space-y-8">
                  <div className="text-lg leading-relaxed space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">Market Context: 2026 Defense Mode</h3>
                    <p className="text-gray-400">
                      We anticipate 2026 to be a defensive year. In volatile, uncertain markets,
                      risk management trumps reckless leverage. Capital preservation is the foundation
                      of long-term alpha generation.
                    </p>
                    <p className="text-gray-400">
                      Our strategy is designed to protect downside while maintaining upside optionality
                      through intelligent capital allocation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6 mt-12">Barbell Strategy</h3>
                    <div className="space-y-8 text-lg leading-relaxed">
                      <div className="mb-6">
                        <p className="text-2xl font-bold text-white mb-3">40% — Smart Stable</p>
                        <p className="text-gray-400">
                          Yield defense and dry powder. Deployed into high-quality stable yield strategies
                          (USDC/USDT/DAI pools) to generate cash flow while maintaining liquidity for
                          opportunistic deployment.
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="text-2xl font-bold text-white mb-3">60% — Core Value</p>
                        <p className="text-gray-400">
                          Undervalued blue-chips based on strict metrics. BTC, ETH, and AERO positions
                          selected via quantifiable valuation frameworks. We buy quality assets when
                          they're statistically cheap, not when narratives are hot.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-lg leading-relaxed">
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">Dynamic Pivot Mechanism</h3>
                    <p className="text-gray-400">
                      AI-augmented CIO system monitors market regime in real-time. When structural
                      shifts occur (e.g., macro policy changes, liquidity expansion), the system
                      aggressively redeploys stablecoins into growth assets. Human oversight combined
                      with algorithmic execution ensures we capture regime changes faster than
                      traditional funds.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">
                  3. The Era of Crypto Valuation
                </h2>

                <div className="space-y-8">
                  <div className="text-lg leading-relaxed space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">From Speculation to Science</h3>
                    <p className="text-gray-400">
                      Crypto has matured like tech stocks did in the 2000s. The days of "narrative-only"
                      investing are ending. Institutional capital demands rigorous, quantifiable frameworks.
                    </p>
                    <p className="text-gray-400">
                      We reject vague narratives. We buy based on data. The market is too complex for
                      retail intuition alone—professional valuation methods are now required.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6 mt-12">Our Valuation Framework</h3>
                    <div className="space-y-8 text-lg leading-relaxed">
                      <div className="mb-6">
                        <p className="font-semibold text-gray-300 mb-2">Price-to-Fees (P/F)</p>
                        <p className="text-gray-400">
                          Protocol revenue efficiency. Lower P/F ratios indicate undervalued cash flow
                          generation relative to market cap. We target protocols trading below their
                          historical P/F mean.
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="font-semibold text-gray-300 mb-2">Earnings-to-Expense Ratio (EER)</p>
                        <p className="text-gray-400">
                          Operational sustainability metric. Protocols with high EER demonstrate structural
                          profitability and capital efficiency. A protocol earning 10x its operational costs
                          is fundamentally stronger than one barely breaking even.
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="font-semibold text-gray-300 mb-2">Real-time Token Burn Rates</p>
                        <p className="text-gray-400">
                          Supply dynamics tracking. Deflationary mechanisms compound value over time.
                          We monitor burn rates, staking ratios, and emission schedules to identify
                          tokens with favorable supply-demand dynamics.
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 text-lg leading-relaxed">
                      <p className="text-gray-400">
                        <span className="font-semibold text-gray-300">Professional Insight:</span> The market
                        now requires institutional-grade analysis. Retail FOMO and Twitter narratives are
                        insufficient for risk-adjusted alpha. We deploy battle-tested valuation models
                        adapted from traditional finance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">
                  4. Future Roadmap: AI & Omnichain
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">Semi-Autonomous Driving</h3>
                    <div className="text-lg leading-relaxed space-y-4">
                      <p className="text-gray-400">
                        Integrating Enzyme protocol with LLM Agents for automated risk control. Think "self-driving"
                        for fund management, but with human oversight.
                      </p>

                      <div className="space-y-4 mt-6">
                        <div className="mb-4">
                          <p className="font-medium text-gray-300 mb-1">Auto-Rebalancing</p>
                          <p className="text-gray-400">
                            Automatic shifts to USDT during panic/volatility spikes detected via onchain metrics.
                          </p>
                        </div>

                        <div className="mb-4">
                          <p className="font-medium text-gray-300 mb-1">Risk Monitoring</p>
                          <p className="text-gray-400">
                            24/7 portfolio health checks with instant alerts and corrective actions.
                          </p>
                        </div>

                        <div className="mb-4">
                          <p className="font-medium text-gray-300 mb-1">Execution Optimization</p>
                          <p className="text-gray-400">
                            AI-driven order routing to minimize slippage and MEV extraction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">Chain-Agnostic Deep Value</h3>
                    <div className="text-lg leading-relaxed space-y-4">
                      <p className="text-gray-400">
                        Launching on Base for efficiency and low fees, but the best risk-adjusted returns
                        don't respect chain borders. We're expanding to capture alpha wherever it exists.
                      </p>

                      <div className="space-y-4 mt-6">
                        <div className="mb-4">
                          <p className="font-medium text-gray-300 mb-1">Hyperliquid (HYPE)</p>
                          <p className="text-gray-400">
                            Perpetual DEX infrastructure with superior capital efficiency and deep liquidity.
                          </p>
                        </div>

                        <div className="mb-4">
                          <p className="font-medium text-gray-300 mb-1">Ethereum Mainnet</p>
                          <p className="text-gray-400">
                            Access to battle-tested DeFi primitives like Curve, Aave, and Uniswap v4.
                          </p>
                        </div>

                        <div className="mb-4">
                          <p className="font-medium text-gray-300 mb-1">Cross-chain Arbitrage</p>
                          <p className="text-gray-400">
                            Exploit pricing inefficiencies and yield differentials across ecosystems.
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 leading-relaxed">
                        <p className="text-gray-400">
                          A truly omnichain fund that deploys capital based on opportunity, not tribal loyalty.
                          The future of institutional crypto investing is chain-agnostic, AI-augmented, and
                          radically transparent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="sticky bottom-0 px-8 py-6 border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-sm flex justify-center">
            <a
              href={VAULT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gray-100 text-black text-base font-bold hover:bg-gray-200 transition-all shadow-lg"
            >
              Enter Vault
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
