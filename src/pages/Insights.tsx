import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Layout } from '../components/Layout';
import { reports, Report } from '../data/reports';
import { useLocation, useNavigate } from 'react-router-dom';

export function Insights() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleReportClick = (report: Report) => {
    if (report.link) {
      navigate(report.link);
    } else {
      setSelectedReport(report);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    if (selectedReport && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedReport]);

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'WEEKLY BRIEF':
        return 'bg-cyan-900/50 text-cyan-300 border border-cyan-600/30';
      case 'DEEP RESEARCH':
        return 'bg-transparent border border-emerald-500 text-emerald-500 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider';
      case 'QUARTERLY REPORT':
        return 'bg-transparent border border-indigo-500 text-indigo-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider';
      default:
        return 'bg-[#333333] text-gray-300';
    }
  };

  return (
    <Layout>
      <section className="px-4 py-20 bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] min-h-[60vh] relative">
        <div className="absolute inset-0 pointer-events-none bg-grid-unified" aria-hidden />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 pb-2 bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">Market Insights</h1>
            <p className="text-gray-400 text-xl">Research & Analysis from Nexus One Research Desk</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div
                key={report.id}
                id={report.id}
                onClick={() => handleReportClick(report)}
                className="border border-white/10 bg-gradient-to-br from-gray-900/50 to-black p-10 hover:border-white/30 transition-all cursor-pointer group rounded-xl h-full flex flex-col"
              >
                <div className={`inline-block w-fit px-3 py-1 text-xs font-bold mb-3 uppercase tracking-wider ${getCategoryStyle(report.category)}`}>
                  {report.category}
                </div>
                <div className="text-xs text-gray-500 mb-4">{report.date}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gray-300 leading-tight text-white">{report.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">{report.summary}</p>
                <div className="flex items-center text-white group-hover:text-gray-300">
                  <span className="text-sm font-medium mr-2">Read Report</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedReport && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto pt-10">
          <div ref={modalContentRef} className="bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-xl max-w-4xl w-full my-8 p-8 relative">
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <div className={`inline-block w-fit px-3 py-1 text-xs font-bold mb-4 uppercase tracking-wider ${getCategoryStyle(selectedReport.category)}`}>
              {selectedReport.category}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{selectedReport.title}</h2>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-800">
              <span>{selectedReport.date}</span>
              <span>•</span>
              <span>{selectedReport.author}</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {(selectedReport.content != null ? selectedReport.content.split('\n') : []).map((paragraph, index) => {
                if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-white">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                } else if (paragraph.trim().startsWith('•')) {
                  return (
                    <li key={index} className="ml-6 mb-2 text-gray-300">
                      {paragraph.replace('•', '').trim()}
                    </li>
                  );
                } else if (paragraph.trim() === '') {
                  return <br key={index} />;
                } else {
                  return (
                    <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <button
                onClick={() => setSelectedReport(null)}
                className="w-full px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
