import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CustomConnectButton } from './CustomConnectButton';
import { VaultAccessDrawer } from './VaultAccessDrawer';
import { ReferralDrawer } from './ReferralDrawer';
import { NewsletterSignup } from './NewsletterSignup';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVaultDrawerOpen, setIsVaultDrawerOpen] = useState(false);
  const [isReferralDrawerOpen, setIsReferralDrawerOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const isDashboard = location.pathname === '/dashboard';
  // Report detail pages: /insights/{slug}, /insight/{slug} (legacy), /research/{slug}
  const isReportPage = /^\/(insights|insight|research)\/./.test(location.pathname);

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-white/20 selection:text-white ${isDashboard ? 'flex flex-col' : ''}`}>
      {/* Navbar */}
      <nav className="border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <div
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center cursor-pointer bg-[#0a0a0a]"
          >
            <img
              src="/nexus-one-wordmark.png"
              alt="NEXUS ONE"
              className="h-4 md:h-5 w-auto object-contain"
            />
          </div>

          {/* Right: Group 1 (info) | Divider | Group 2 (user action) — unified across landing & dashboard */}
          <div className="hidden md:flex items-center gap-8">
            {/* Group 1: Main info & service */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNavigate('/letter')}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Letter
              </button>
              <button
                onClick={() => handleNavigate('/vaults')}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Vaults
              </button>
              <button
                onClick={() => handleNavigate('/performance')}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Performance
              </button>
              <button
                onClick={() => handleNavigate('/insights')}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Insights
              </button>
              <button
                onClick={() => handleNavigate('/radar')}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Radar
              </button>
              <button
                onClick={() => handleNavigate('/dashboard')}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Dashboard
              </button>
            </div>
            {/* Divider */}
            <div className="w-[1px] h-6 bg-gray-600 flex-shrink-0" aria-hidden />
            {/* Group 2: User action */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsReferralDrawerOpen(true)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Referral
              </button>
              <CustomConnectButton />
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — same order: Letter, Vaults, Insights, Dashboard | Referral, Connect Wallet */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'flex flex-col opacity-100' : 'hidden'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <div className="flex items-center bg-[#0a0a0a]">
              <img
                src="/nexus-one-wordmark.png"
                alt="NEXUS ONE"
                className="h-7 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 transition-colors rounded-lg"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col gap-1">
              <button
                onClick={() => handleNavigate('/letter')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Letter
              </button>
              <button
                onClick={() => handleNavigate('/vaults')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Vaults
              </button>
              <button
                onClick={() => handleNavigate('/performance')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Performance
              </button>
              <button
                onClick={() => handleNavigate('/insights')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Insights
              </button>
              <button
                onClick={() => handleNavigate('/radar')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Radar
              </button>
              <button
                onClick={() => handleNavigate('/dashboard')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Dashboard
              </button>
              <div className="my-2 border-t border-white/10" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsReferralDrawerOpen(true);
                }}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Referral
              </button>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
                <CustomConnectButton variant="fullWidth" className="w-full max-w-xs" />
              </div>
            </nav>
          </div>
        </div>
      </div>

      <main className={isDashboard ? 'flex-1 flex flex-col' : ''}>
        {children}
      </main>

      {isReportPage && <NewsletterSignup />}

      <VaultAccessDrawer isOpen={isVaultDrawerOpen} onClose={() => setIsVaultDrawerOpen(false)} />
      <ReferralDrawer isOpen={isReferralDrawerOpen} onClose={() => setIsReferralDrawerOpen(false)} />

      {!isDashboard && (
      <footer className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#111111] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-brand text-xs text-gray-500 mb-6 uppercase">
            Institutional Partners
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Strategic Alignment
          </h2>

          <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            We focus entirely on Deep Value execution and generating Alpha. We are looking for strategic partners to handle capital formation and distribution. We offer a highly competitive Performance Fee Sharing structure for qualified partners. Let's align our interests.
          </p>

          <a
            href="mailto:partner@nexusonecap.com"
            className="inline-block bg-gray-100 text-black font-bold px-6 py-3 text-sm hover:bg-gray-200 transition-colors mb-16"
          >
            Become a Partner →
          </a>

          <div className="h-px w-full bg-white/5 mb-8"></div>

          <p className="text-xs text-gray-600/50 leading-relaxed max-w-2xl mx-auto mb-6">
            This website is for informational purposes only and does not constitute financial advice.
            Nexus One strategies involve high risk. Past performance is not indicative of future results.
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/nexus-one-wordmark.png"
              alt="NEXUS ONE"
              className="h-5 w-auto object-contain opacity-40"
            />
            <p className="text-xs text-gray-700 font-medium">© 2026 Nexus One</p>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}
