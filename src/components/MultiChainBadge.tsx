import React from 'react';

/** Reusable monochrome badge for omnichain / multi-chain strategy. Replaces "LIVE ON BASE". */
export function MultiChainBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-transparent">
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-400 flex-shrink-0"
        aria-hidden
      >
        <circle cx="2" cy="4" r="1.25" fill="currentColor" opacity="0.85" />
        <line x1="3.5" y1="4" x2="6.5" y2="4" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <circle cx="7" cy="4" r="1.25" fill="currentColor" opacity="0.7" />
        <line x1="8.5" y1="4" x2="11.5" y2="4" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <circle cx="12" cy="4" r="1.25" fill="currentColor" opacity="0.85" />
      </svg>
      <span className="text-gray-300 font-light tracking-widest text-xs uppercase">Multi-Chain</span>
    </div>
  );
}
