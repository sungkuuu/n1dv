import { useState, useCallback, useRef } from 'react';
import { useReferralRegister } from '../hooks/useReferralRegister';

export function ReferralRegister() {
  const [walletInput, setWalletInput] = useState('');
  const [inviteCodeInput, setInviteCodeInput] = useState('');
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    profile,
    error,
    isRegistering,
    isValidatingCode,
    register,
    validateCode,
    clearError,
  } = useReferralRegister();

  const handleCopyCode = useCallback(async () => {
    if (!profile?.my_referral_code) return;
    try {
      await navigator.clipboard.writeText(profile.my_referral_code);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      setCopied(true);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [profile?.my_referral_code]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    const wallet = walletInput.trim();
    if (!wallet) return;
    const code = inviteCodeInput.trim() || undefined;
    await register(wallet, code ?? undefined);
  };

  const handleValidateCode = async () => {
    const code = inviteCodeInput.trim();
    if (!code) return;
    const valid = await validateCode(code);
    if (valid) {
      clearError();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#0a0a0a]">
      <div className="rounded-lg border border-white/10 bg-[#111111] p-6 max-w-md w-full">
        <h2 className="text-xl font-bold text-white mb-4">Referral Sign Up</h2>
        <p className="text-sm text-gray-400 mb-6">
          Connect your wallet to get your unique referral code. Optionally enter an invite code if someone referred you.
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="wallet" className="block text-sm font-medium text-gray-300 mb-2">
              Wallet address
            </label>
            <input
              id="wallet"
              type="text"
              value={walletInput}
              onChange={(e) => setWalletInput(e.target.value)}
              placeholder="0x..."
              className="w-full px-4 py-2.5 bg-black border border-white/10 text-white placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
              required
              disabled={isRegistering}
            />
          </div>

          <div>
            <label htmlFor="inviteCode" className="block text-sm font-medium text-gray-300 mb-2">
              Invite code (optional)
            </label>
            <div className="flex gap-2">
              <input
                id="inviteCode"
                type="text"
                value={inviteCodeInput}
                onChange={(e) => {
                  setInviteCodeInput(e.target.value.toUpperCase());
                  clearError();
                }}
                placeholder="e.g. ABC123"
                maxLength={6}
                className="flex-1 px-4 py-2.5 bg-black border border-white/10 text-white placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent uppercase"
                disabled={isRegistering}
              />
              <button
                type="button"
                onClick={handleValidateCode}
                disabled={isValidatingCode || !inviteCodeInput.trim()}
                className="px-4 py-2.5 bg-zinc-100 text-black text-sm font-semibold rounded-md hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidatingCode ? 'Checking...' : 'Verify'}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded bg-red-950/30 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isRegistering || !walletInput.trim()}
            className="w-full py-3 bg-zinc-100 text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRegistering ? 'Registering...' : 'Register'}
          </button>
        </form>

        {profile && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-1">Your referral code</p>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-2xl font-mono font-bold text-white tracking-wider">
                {profile.my_referral_code}
              </p>
              <button
                type="button"
                onClick={handleCopyCode}
                className="px-4 py-2 bg-zinc-100 text-black text-sm font-semibold rounded-md hover:bg-zinc-200 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            {profile.referred_by && (
              <p className="text-xs text-gray-500 mt-2">
                Referred by: {profile.referred_by}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
