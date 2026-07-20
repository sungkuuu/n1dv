import { Layout } from '../components/Layout';
import { useEffect } from 'react';

export function Thesis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="max-w-3xl mx-auto px-6 py-24 relative z-10">
        <div className="mb-32">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent pb-2">
            N1DV
          </h1>
          <p className="text-xl text-gray-400">
            Nexus One Deep Value Strategies. True Value in a World of Hype.
          </p>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 mt-20">
            1. The Dilemma: Transparency vs. Alpha
          </h2>

          <div className="space-y-10">
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

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 mt-20">
            2. Strategy: Defensive Alpha in a Cyclical Downturn
          </h2>

          <div className="space-y-10">
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

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 mt-20">
            3. The Era of Crypto Valuation
          </h2>

          <div className="space-y-10">
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

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 mt-20">
            4. Future Roadmap: AI & Omnichain
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Semi-Autonomous Driving</h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p className="text-gray-400">
                  Integrating Enzyme protocol with LLM Agents for automated risk control. Think "self-driving"
                  for vault management, but with human oversight.
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
                    A truly omnichain vault that deploys capital based on opportunity, not tribal loyalty.
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
    </Layout>
  );
}
