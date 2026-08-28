import { Layout } from '../components/Layout';
import { DollarSign, Shield, TrendingUp, Mail } from 'lucide-react';
import { useEffect } from 'react';

export function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="px-4 py-32 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-6 py-2 mb-8 border border-gray-800 text-xs text-gray-400 font-bold tracking-widest">
              STRATEGIC ALLIANCE PROGRAM
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              NEXUS ONE<br />STRATEGIC ALLIANCE
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-400 font-light tracking-wide">
              Monetize Your Insight, Not Hype.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="bg-gradient-to-b from-gray-900/50 to-[#0A0A0A] border border-gray-800 p-10 hover:border-gray-700 transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-gray-800">
                  <DollarSign size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Strategic Alignment</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                We focus entirely on Deep Value execution and generating Alpha. We are looking for strategic partners to handle capital formation and distribution. We offer a highly competitive Performance Fee Sharing structure for qualified partners. Let's align our interests.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-900/50 to-[#0A0A0A] border border-gray-800 p-10 hover:border-gray-700 transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-gray-800">
                  <Shield size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Institutional Grade</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                Sell safety. Our 40% Cash / Deep Value strategy is engineered for high-net-worth capital preservation.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-900/50 to-[#0A0A0A] border border-gray-800 p-10 hover:border-gray-700 transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-gray-800">
                  <TrendingUp size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Research Alpha</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                Empower your content. We provide weekly institutional research (Briefs, Letters) to support your sales narrative.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="border-t border-b border-gray-800 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Who We Are Looking For</h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                We partner with Analysts, Private Bankers, and Community Leaders who prioritize integrity. We do not work with aggressive "pump-and-dump" marketers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:cs@nexusonecap.com?subject=Nexus One Partnership Inquiry"
              className="inline-flex items-center px-12 py-5 bg-white text-black text-lg font-bold hover:bg-gray-200 transition-all"
            >
              <Mail className="mr-3" size={24} />
              Request Partnership Deck
            </a>
            <p className="mt-6 text-sm text-gray-600">
              Our team reviews all partnership inquiries within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
