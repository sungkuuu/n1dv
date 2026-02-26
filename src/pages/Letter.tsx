import { Layout } from '../components/Layout';
import { useEffect } from 'react';

export function Letter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="absolute inset-0 pointer-events-none bg-grid-unified" aria-hidden />
        <div className="max-w-3xl mx-auto px-6 py-24 relative z-10">
          <div className="mb-32">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent pb-2">
              Investor Letter
            </h1>
          </div>

          <div className="text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              Welcome to the Nexus One Deep Value (n1dv) Investor Letter.
            </p>
            <p>
              Here, we share our core investment thesis, quarterly performance reviews, and deep-dive market insights.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
