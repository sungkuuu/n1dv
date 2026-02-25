import React, { useEffect } from 'react';
import { X, Wallet } from 'lucide-react';

interface VaultAccessDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VaultAccessDrawer({ isOpen, onClose }: VaultAccessDrawerProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        className="absolute top-0 right-0 h-full w-full sm:w-[380px] bg-[#0a0a0a] border-l border-white/20 shadow-2xl flex flex-col"
        style={{ animation: 'slideInRight 0.25s ease-out' }}
      >
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-8 border-b border-white/10">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Access N1DV Vault
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-10">
          <p className="text-gray-400 font-light text-sm leading-relaxed mb-10">
            현재 N1DV는 프라이빗 베타 기간입니다.
          </p>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white text-black font-semibold text-base hover:bg-gray-200 transition-colors border border-white/20"
          >
            <Wallet size={20} />
            Connect Wallet
          </button>
          <p className="text-center text-xs text-gray-500 mt-3 mb-10">
            MetaMask, WalletConnect 지원
          </p>

          <div>
            <label className="block text-xs font-medium text-gray-500 tracking-widest uppercase mb-3">
              Referral Code
            </label>
            <input
              type="text"
              placeholder="초대 코드 입력"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 font-mono-num text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
