import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CustomConnectButton } from './CustomConnectButton';
import { VaultAccessDrawer } from './VaultAccessDrawer';
import { ReferralDrawer } from './ReferralDrawer';
import { NewsletterSignup } from './NewsletterSignup';
import { resolveBrand, type NavKey } from '../lib/brand';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS: Record<NavKey, { label: string; path: string }> = {
  letter: { label: 'Letter', path: '/letter' },
  vaults: { label: 'Vaults', path: '/vaults' },
  performance: { label: 'Performance', path: '/performance' },
  insights: { label: 'Insights', path: '/insights' },
  radar: { label: 'Radar', path: '/radar' },
  dashboard: { label: 'Dashboard', path: '/dashboard' },
};

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVaultDrawerOpen, setIsVaultDrawerOpen] = useState(false);
  const [isReferralDrawerOpen, setIsReferralDrawerOpen] = useState(false);

  // Same deployment, three domains: header wordmark + home <title> follow the
  // hostname (n1dv.io / quadrix.finance / nexusonecap.com). Footer stays Nexus One.
  const brand = useMemo(() => resolveBrand(), []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Only override the home tab title; report pages keep their pre-rendered SEO titles.
  useEffect(() => {
    if (location.pathname === '/') document.title = brand.homeTitle;
  }, [brand, location.pathname]);

  // Research-only surfaces (nexusonecap Insight) land on /insights, not the vault
  // home. Preserve search so the ?brand= dev override survives the redirect (prod
  // keeps the brand via hostname regardless).
  useEffect(() => {
    if (brand.landing && location.pathname === '/') {
      navigate(brand.landing + location.search, { replace: true });
    }
  }, [brand, location.pathname, location.search, navigate]);

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
              if (brand.homeHref) {
                window.location.href = brand.homeHref;
              } else if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center cursor-pointer bg-[#0a0a0a]"
          >
            {brand.logoSrc ? (
              <img src={brand.logoSrc} alt={brand.wordmark} className="h-[18px] md:h-5 w-auto" />
            ) : (
              <span
                className="font-brand text-white text-lg md:text-xl font-semibold leading-none"
                style={{ letterSpacing: brand.tracking }}
              >
                {brand.wordmark}
              </span>
            )}
          </div>

          {/* Right: Group 1 (info) | Divider | Group 2 (user action) — unified across landing & dashboard */}
          <div className="hidden md:flex items-center gap-8">
            {/* Group 1: Main info & service (per-surface) */}
            <div className="flex items-center gap-6">
              {brand.nav.map((key) => (
                <button
                  key={key}
                  onClick={() => handleNavigate(NAV_ITEMS[key].path)}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {NAV_ITEMS[key].label}
                </button>
              ))}
            </div>
            {/* Group 2: User action — platform/fund only */}
            {brand.showUserActions && (
              <>
                <div className="w-[1px] h-6 bg-gray-600 flex-shrink-0" aria-hidden />
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setIsReferralDrawerOpen(true)}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Referral
                  </button>
                  <CustomConnectButton />
                </div>
              </>
            )}
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
              {brand.logoSrc ? (
                <img src={brand.logoSrc} alt={brand.wordmark} className="h-[18px] w-auto" />
              ) : (
                <span
                  className="font-brand text-white text-xl font-semibold leading-none"
                  style={{ letterSpacing: brand.tracking }}
                >
                  {brand.wordmark}
                </span>
              )}
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
              {brand.nav.map((key) => (
                <button
                  key={key}
                  onClick={() => handleNavigate(NAV_ITEMS[key].path)}
                  className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
                >
                  {NAV_ITEMS[key].label}
                </button>
              ))}
              {brand.showUserActions && (
                <>
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
                </>
              )}
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
              src={brand.theme === 'light' ? '/nexus-one-wordmark-dark.png' : '/nexus-one-wordmark.png'}
              alt="Nexus One"
              className="h-4 w-auto opacity-40"
            />
            <p className="text-xs text-gray-700 font-medium">© 2026 Nexus One Capital</p>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}
