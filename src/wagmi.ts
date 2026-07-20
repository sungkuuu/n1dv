import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';

// Public WalletConnect (Reown) project id — ships in the client bundle by design.
const projectId =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'e474bb99175f1ac956a28903c55d5573';

// Minimal connector set instead of getDefaultConfig(): injected covers the
// MetaMask/Rabby/Brave browser extensions, WalletConnect covers mobile + the
// rest. This drops the ~170KB (gzip) @metamask/sdk connector that every page
// was loading, since almost no IR/research visitor ever connects a wallet.
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet, walletConnectWallet],
    },
  ],
  { appName: 'n1dv', projectId }
);

export const config = createConfig({
  connectors,
  chains: [arbitrum, mainnet],
  transports: {
    [arbitrum.id]: http(),
    [mainnet.id]: http(),
  },
  ssr: false,
});
