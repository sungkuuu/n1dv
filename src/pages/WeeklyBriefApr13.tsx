import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Layout } from '../components/Layout';

function stripDuplicateHeader(md: string): string {
  return md
    .replace(/^#\s+April 13, 2026 Global Macroeconomic and Digital Asset Market In-Depth Analysis Report\s*\n+/m, '')
    .replace(/^\*\*By Nexus One Research Desk • Apr 13, 2026\*\*\s*\n+/m, '');
}

export function WeeklyBriefApr13() {
  const [md, setMd] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    fetch('/content/insights/weekly-brief-apr-13-2026.md', { cache: 'no-store' })
      .then((r) => r.text())
      .then((t) => {
        if (!t.trim()) setErr('Report content is empty.');
        else setMd(t);
      })
      .catch((e) => setErr(String(e)));
  }, []);

  const body = stripDuplicateHeader(md);

  return (
    <Layout>
      <article className="min-h-screen font-sans bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Weekly Brief: Apr 13, 2026</span>
          </nav>

          <div className="mb-16">
            <div className="inline-block w-fit bg-transparent border border-blue-500 text-blue-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              WEEKLY BRIEF
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              April 13, 2026 Global Macroeconomic and Digital Asset Market In-Depth Analysis Report
            </h1>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              By Nexus One Research Desk • Apr 13, 2026 • 25 min read
            </p>
          </div>

          {err && <p className="mb-6 text-red-400">{err}</p>}
          {!err && !md && <p className="mb-6 text-slate-400">Loading report content...</p>}

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 prose-a:break-all prose-li:marker:text-slate-400 prose-ul:list-disc prose-ol:list-decimal [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:border [&_table]:border-slate-800 [&_th]:border [&_th]:border-slate-800 [&_th]:px-4 [&_th]:py-3 [&_td]:border [&_td]:border-slate-800 [&_td]:px-4 [&_td]:py-3 [&_thead]:bg-slate-900/50 [&_tbody_tr:nth-child(even)]:bg-slate-900/30 [&_small]:mt-2 [&_small]:block [&_small]:text-sm [&_small]:text-slate-500">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {body}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/50">
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Disclaimer</h4>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                This report is for informational purposes only and does not constitute financial, investment, legal, or tax advice. The views expressed herein are those of the Nexus One Research Desk as of the date of publication and are subject to change without notice.
                <br /><br />
                Nexus One and its affiliates may hold long or short positions in the assets discussed and may adjust these positions at any time. Digital asset investments are highly volatile and involve a significant risk of loss. Investors should conduct their own due diligence.
              </p>
            </div>
            <div className="border-t border-slate-800/50 pt-6">
              <Link to="/insights" className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                Back to All Insights
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
