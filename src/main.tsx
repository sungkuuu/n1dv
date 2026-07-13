import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from './wagmi';
import App from './App.tsx';
import { resolveBrand } from './lib/brand';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css';

// Light corporate theme (nexus surface): set once at bootstrap so it also
// covers lazy-route fallbacks and portaled modals — the brand never changes
// within a session (it's derived from the hostname).
if (resolveBrand().theme === 'light') {
  document.documentElement.classList.add('theme-light');
}

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en-US"
          theme={darkTheme({
            accentColor: '#f3f4f6',
            accentColorForeground: '#111827',
            borderRadius: 'medium',
          })}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
