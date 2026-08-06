import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout } from '../components/Layout';
import { ReportErrorBoundary } from '../components/ReportErrorBoundary';
import { fetchInsightMarkdown } from '../lib/fetchInsightMarkdown';
import { reportBadgeClassName, reportBadgeLabel } from '../lib/reportBadge';
import { reports } from '../data/reports';

/**
 * Generic insight page: renders any report from reports.ts by slug,
 * fetching its markdown from /content/insights/{slug}.md.
 * New reports only need (1) the .md file and (2) a reports.ts entry.
 */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) return isoDate;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/** Category accent for back-link (badge colors come from reportBadge.ts). */
function backLinkClassName(category: string): string {
  switch (category) {
    case 'WEEKLY BRIEF':
      return 'text-blue-500 hover:text-blue-400';
    case 'QUARTERLY REPORT':
      return 'text-indigo-400 hover:text-indigo-300';
    default:
      return 'text-emerald-500 hover:text-emerald-400';
  }
}

/**
 * Removes the leading H1 and byline/date meta lines from the markdown so the
 * page header (rendered from reports.ts metadata) is not duplicated.
 */
function stripDuplicateHeader(md: string): string {
  return md
    .replace(/^\s*#\s+[^\n]+\n+/, '')
    .replace(/^\*\*(By |Published:|Nexus One)[^\n]*\n+/, '')
    .replace(
      /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}[^\n]*\n+/,
      ''
    )
    .replace(/^\*\*(By |Published:)[^\n]*\n+/, '');
}

export function InsightPage() {
  const { slug } = useParams<{ slug: string }>();
  const report = reports.find((r) => r.id === slug);

  const [md, setMd] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    if (!slug || !report) return;
    setMd('');
    setErr('');
    fetchInsightMarkdown(`/content/insights/${slug}.md`)
      .then(setMd)
      .catch((e) => setErr(e instanceof Error ? e.message : String(e)));
  }, [slug, report]);

  if (!report) {
    return <Navigate to="/insights" replace />;
  }

  const body = stripDuplicateHeader(md);
  const breadcrumbLabel = report.title.split(':')[0];

  return (
    <Layout>
      <article className="min-h-screen font-sans bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">{breadcrumbLabel}</span>
          </nav>

          <div className="mb-16">
            <div className={`inline-block w-fit mb-6 ${reportBadgeClassName(report)}`}>
              {reportBadgeLabel(report)}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              {report.title}
            </h1>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              By {report.author} • {formatDate(report.date)}
              {report.readTime ? ` • ${report.readTime}` : ''}
            </p>
          </div>

          {err && <p className="mb-6 text-red-400">{err}</p>}
          {!err && !md && <p className="mb-6 text-slate-400">Loading report content...</p>}

          <ReportErrorBoundary>
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 prose-a:break-all prose-li:marker:text-slate-400 prose-ul:list-disc prose-ol:list-decimal [&_del]:line-through [&_del]:text-slate-500 [&_s]:line-through [&_s]:text-slate-500 [&_h3]:mt-12 [&_h3]:mb-4 [&_h4]:mt-8 [&_h4]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_hr]:my-10 [&_table]:my-8 [&_table]:w-full [&_table]:table-auto [&_table]:border-collapse [&_table]:border [&_table]:border-slate-800 [&_th]:border [&_th]:border-slate-800 [&_th]:px-4 [&_th]:py-3 [&_td]:border [&_td]:border-slate-800 [&_td]:px-4 [&_td]:py-3 [&_thead]:bg-slate-900/50 [&_tbody_tr:nth-child(even)]:bg-slate-900/30 [&_blockquote]:my-6 [&_blockquote]:border-slate-600 [&_blockquote]:text-slate-400 [&_img]:w-full [&_img]:h-auto [&_img]:my-7 [&_img]:rounded-lg [&_img]:border [&_img]:border-slate-800 [&_img+em]:block [&_img+em]:text-sm [&_img+em]:text-slate-500">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
            </div>
          </ReportErrorBoundary>

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
              <Link to="/insights" className={`group inline-flex items-center gap-2 transition-colors font-medium text-sm ${backLinkClassName(report.category)}`}>
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
