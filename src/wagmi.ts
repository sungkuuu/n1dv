import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base } from 'wagmi/chains';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

export const config = getDefaultConfig({
  appName: 'n1dv',
  projectId,
  chains: [arbitrum, base],
  ssr: false,
});
