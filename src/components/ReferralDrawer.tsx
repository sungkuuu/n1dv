import { useEffect, useState, useCallback } from 'react';
import { X, Copy, Trophy, Medal, Award, Wallet, Check, Info } from 'lucide-react';
import { useAccount } from 'wagmi';
import { CustomConnectButton } from './CustomConnectButton';
import { getProfileByWallet, registerWallet } from '../lib/referral';

interface ReferralDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'my-referral' | 'leaderboard';

const LEADERBOARD_MOCK = [
  { rank: 1, address: '0x7a3f...9c2e', earnedUsdc: 125000, invitedTvl: 4200000 },
  { rank: 2, address: '0xb1c8...4d7a', earnedUsdc: 98700, invitedTvl: 3100000 },
  { rank: 3, address: '0x2e9f...8b3c', earnedUsdc: 76200, invitedTvl: 2800000 },
  { rank: 4, address: '0x5d4a...1f9e', earnedUsdc: 54100, invitedTvl: 1900000 },
  { rank: 5, address: '0x8c2b...6a4d', earnedUsdc: 43800, invitedTvl: 1650000 },
  { rank: 6, address: '0x3f7e...c891', earnedUsdc: 32100, invitedTvl: 1200000 },
  { rank: 7, address: '0x9a1d...2b5f', earnedUsdc: 28700, invitedTvl: 980000 },
  { rank: 8, address: '0x4b6c...7e3a', earnedUsdc: 21900, invitedTvl: 750000 },
  { rank: 9, address: '0x1e8f...9d2c', earnedUsdc: 18400, invitedTvl: 620000 },
  { rank: 10, address: '0x6d3a...5b8e', earnedUsdc: 15200, invitedTvl: 510000 },
];

function formatUsdc(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value.toLocaleString()}`;
}

function formatTvl(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M TVL`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K TVL`;
  return `$${value.toLocaleString()} TVL`;
}

// Tier system: Invited TVL → Fee share (mock logic for UI)
const TIERS = [
  { min: 0, max: 50_000, tier: 1, fee: 5 },
  { min: 50_000, max: 250_000, tier: 2, fee: 10 },
  { min: 250_000, max: 1_000_000, tier: 3, fee: 15 },
  { min: 1_000_000, max: Infinity, tier: 4, fee: 20 },
] as const;

function getTierInfo(tvl: number) {
  const current = TIERS.find((t) => tvl >= t.min && tvl < t.max) ?? TIERS[TIERS.length - 1]!;
  const isMaxTier = current.tier === 4;
  const progressPct = isMaxTier
    ? 100
    : Math.min(100, ((tvl - current.min) / (current.max - current.min)) * 100);
  const nextTier = !isMaxTier ? TIERS[current.tier]! : null;
  const amountToNext = nextTier ? nextTier.min - tvl : 0;
  return { current, isMaxTier, progressPct, nextTier, amountToNext };
}

export function ReferralDrawer({ isOpen, onClose }: ReferralDrawerProps) {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<TabId>('my-referral');
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (!address || !isOpen) {
      if (!address) {
        setInviteCode(null);
        setIsFetching(false);
      }
      return;
    }
    let cancelled = false;
    setIsFetching(true);
    setError(null);
    getProfileByWallet(address)
      .then((profile) => {
        if (!cancelled) {
          setInviteCode(profile?.my_referral_code ?? null);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to fetch code');
          setInviteCode(null);
        }
      })
      .finally(() => {
        if (!cancelled) setIsFetching(false);
      });
    return () => {
      cancelled = true;
      return;
    };
  }, [address, isOpen]);

  const inviteLink =
    inviteCode && typeof window !== 'undefined'
      ? `${window.location.origin}/?ref=${inviteCode}`
      : '';

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }, []);

  const handleCopyCode = useCallback(async () => {
    if (!inviteCode) return;
    const ok = await copyToClipboard(inviteCode);
    if (ok) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  }, [inviteCode, copyToClipboard]);

  const handleCopyLink = useCallback(async () => {
    if (!inviteLink) return;
    const ok = await copyToClipboard(inviteLink);
    if (ok) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  }, [inviteLink, copyToClipboard]);

  const handleGenerateLink = useCallback(async () => {
    if (!address) return;
    setError(null);
    setIsGenerating(true);
    try {
      const { profile } = await registerWallet(address);
      setInviteCode(profile.my_referral_code);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate link');
    } finally {
      setIsGenerating(false);
    }
  }, [address]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
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
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 h-full w-full md:w-[600px] lg:w-[700px] bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out"
        style={{ animation: 'referralDrawerSlide 0.3s ease-out' }}
      >
        <style>{`
          @keyframes referralDrawerSlide {
            from { transform: translateX(100%); opacity: 0.95; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}</style>
        <div className="flex items-center justify-between px-6 lg:px-8 py-6 border-b border-white/10 shrink-0">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">Referral</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200 rounded-lg"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <div className="flex border-b border-white/10 px-6 lg:px-8 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('my-referral')}
            className={`py-4 px-1 mr-8 text-sm font-medium border-b-2 transition-colors duration-200 -mb-px ${
              activeTab === 'my-referral' ? 'text-white border-white' : 'text-gray-500 border-transparent hover:text-gray-300'
            }`}
          >
            My Referral
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('leaderboard')}
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors duration-200 -mb-px ${
              activeTab === 'leaderboard' ? 'text-white border-white' : 'text-gray-500 border-transparent hover:text-gray-300'
            }`}
          >
            Leaderboard
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
          {activeTab === 'my-referral' && (
            <div className="space-y-6 transition-opacity duration-200">
              {!isConnected ? (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Wallet className="text-gray-500" size={28} />
                  </div>
                  <p className="text-gray-400 text-base mb-2">Connect your wallet to get your referral link</p>
                  <p className="text-gray-500 text-sm mb-8 max-w-xs">
                    Earn when you refer others. Your unique link and stats will appear here.
                  </p>
                  <CustomConnectButton variant="fullWidth" />
                </div>
              ) : isFetching ? (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                  <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mb-6" />
                  <p className="text-gray-400 text-sm">Checking code...</p>
                </div>
              ) : inviteCode ? (
                <>
                  {error && (
                    <div className="mb-4 p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  {(() => {
                    const invitedTVL = 125000;
                    const { current, isMaxTier, progressPct, nextTier, amountToNext } = getTierInfo(invitedTVL);
                    return (
                      <div className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5 mb-6">
                        <p className="text-sm font-medium text-white mb-1">
                          Current Tier: Tier {current.tier} ({current.fee}% Fee Share)
                        </p>
                        <div className="h-2.5 rounded-full bg-zinc-800 overflow-hidden mt-2 mb-3">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                        {isMaxTier ? (
                          <p className="text-sm text-emerald-400/90">👑 You are at the Max Tier (20%)!</p>
                        ) : (
                          <p className="text-xs text-gray-400">
                            🔥 Invite {formatUsdc(Math.max(0, amountToNext))} more to unlock Tier {nextTier?.tier} ({nextTier?.fee}%)!
                          </p>
                        )}
                      </div>
                    );
                  })()}
                  <div className="flex gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5 mb-6">
                    <Info size={14} className="flex-shrink-0 text-zinc-500 mt-0.5" aria-hidden />
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Fee Share applies exclusively to the performance fees generated by your referred users, not the principal amount.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-zinc-800/50 p-4 md:p-5">
                    <p className="text-xs text-gray-500 mb-2">Your Code</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-2xl font-bold text-white font-mono tracking-wider truncate min-w-0">{inviteCode}</p>
                      <button
                        type="button"
                        onClick={handleCopyCode}
                        className="flex-shrink-0 p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                        aria-label="Copy code"
                      >
                        {copiedCode ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                      </button>
                    </div>
                    {copiedCode && <p className="text-xs text-green-400 mt-1.5">Copied!</p>}
                  </div>
                  <div className="rounded-xl border border-white/10 bg-zinc-800/50 p-4 md:p-5">
                    <p className="text-xs text-gray-500 mb-2">Share Link</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-gray-300 font-mono truncate min-w-0 flex-1 mr-2" title={inviteLink}>
                        {inviteLink}
                      </p>
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="flex-shrink-0 p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                        aria-label="Copy link"
                      >
                        {copiedLink ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                      </button>
                    </div>
                    {copiedLink && <p className="text-xs text-green-400 mt-1.5">Copied!</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Invited TVL</p>
                      <p className="text-xl font-semibold text-white font-mono-num">$0.00</p>
                    </div>
                    <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Pending Earned</p>
                      <p className="text-xl font-semibold text-white font-mono-num">$0.00 USDC</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                    <p className="text-gray-400 text-sm mb-2">No referral code yet for this wallet.</p>
                    <p className="text-gray-500 text-xs mb-6 max-w-xs">
                      Generate a unique invite link to start referring. It will be saved to your wallet.
                    </p>
                    {error && (
                      <div className="w-full mb-4 p-3 rounded bg-red-950/30 border border-red-500/30 text-red-400 text-sm text-left">
                        {error}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={handleGenerateLink}
                      disabled={isGenerating || !address}
                      className="px-6 py-3 bg-gray-100 text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? 'Generating…' : 'Generate My Referral Link'}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          {activeTab === 'leaderboard' && (
            <div className="space-y-3 transition-opacity duration-200">
              {LEADERBOARD_MOCK.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between gap-4 p-4 md:p-5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-400">
                      {item.rank <= 3 ? (
                        item.rank === 1 ? (
                          <Trophy className="text-amber-400" size={22} />
                        ) : item.rank === 2 ? (
                          <Medal className="text-gray-300" size={22} />
                        ) : (
                          <Award className="text-amber-700" size={22} />
                        )
                      ) : (
                        item.rank
                      )}
                    </span>
                    <span className="text-gray-300 font-mono text-sm truncate">{item.address}</span>
                  </div>
                  <div className="flex flex-col items-end flex-shrink-0">
                    <span className="text-base md:text-lg font-semibold text-green-400 font-mono-num">
                      {formatUsdc(item.earnedUsdc)} USDC
                    </span>
                    <span className="text-xs text-gray-500 mt-0.5">Invited: {formatTvl(item.invitedTvl)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
