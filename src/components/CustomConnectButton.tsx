import { ConnectButton } from '@rainbow-me/rainbowkit';

type Variant = 'compact' | 'fullWidth';

interface CustomConnectButtonProps {
  variant?: Variant;
  /** Optional class for the wrapper (e.g. for mobile menu centering) */
  className?: string;
  /** Label when not connected (default: "Connect Wallet") */
  connectLabel?: string;
}

const compactButtonClass =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md bg-white text-black hover:bg-gray-200 transition-colors';

const fullWidthButtonClass =
  'w-full flex items-center justify-center gap-3 py-3.5 px-6 text-base font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-colors shadow-lg';

const connectedCompactClass =
  'inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border border-white/20 bg-white/[0.06] text-white hover:bg-white/10 transition-colors';

const connectedFullWidthClass =
  'w-full flex items-center justify-center gap-3 py-3.5 px-6 text-base font-semibold rounded-lg border border-white/20 bg-white/[0.06] text-white hover:bg-white/10 transition-colors';

export function CustomConnectButton({ variant = 'compact', className = '', connectLabel = 'Connect Wallet' }: CustomConnectButtonProps) {
  return (
    <ConnectButton.Custom>
      {({ openConnectModal, openAccountModal, account, mounted }) => {
        if (!mounted) {
          return (
            <div className={className}>
              <span className={variant === 'fullWidth' ? fullWidthButtonClass : compactButtonClass}>
                {connectLabel}
              </span>
            </div>
          );
        }
        if (!account) {
          return (
            <div className={className}>
              <button
                type="button"
                onClick={openConnectModal}
                className={variant === 'fullWidth' ? fullWidthButtonClass : compactButtonClass}
              >
                {connectLabel}
              </button>
            </div>
          );
        }
        return (
          <div className={className}>
            <button
              type="button"
              onClick={openAccountModal}
              className={variant === 'fullWidth' ? connectedFullWidthClass : connectedCompactClass}
            >
              {account.displayName}
            </button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
