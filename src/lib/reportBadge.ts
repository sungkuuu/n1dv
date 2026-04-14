import type { Report } from '../data/reports';

export type ReportBadgeInput = Pick<Report, 'category'> & { badge?: Report['badge'] };

export function reportBadgeLabel(report: ReportBadgeInput): string {
  return report.badge?.text ?? report.category;
}

export function reportBadgeClassName(report: ReportBadgeInput): string {
  switch (report.badge?.variant) {
    case 'outline-blue':
      return 'bg-transparent border border-blue-500 text-blue-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider';
    case 'outline-purple':
      return 'bg-transparent border border-emerald-500 text-emerald-500 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider';
    default:
      break;
  }
  switch (report.category) {
    case 'WEEKLY BRIEF':
      return 'bg-transparent border border-blue-500 text-blue-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider';
    case 'DEEP RESEARCH':
      return 'bg-transparent border border-emerald-500 text-emerald-500 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider';
    case 'QUARTERLY REPORT':
      return 'bg-transparent border border-indigo-500 text-indigo-400 rounded-md !px-2 !py-1 text-xs font-bold !tracking-widest uppercase';
    default:
      return 'bg-[#333333] text-gray-300';
  }
}
