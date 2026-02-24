import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { VaultAccessDrawer } from './VaultAccessDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVaultDrawerOpen, setIsVaultDrawerOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-white/20 selection:text-white">
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
            className="flex items-center cursor-pointer"
          >
            <img
              src="/nexus_one_logo.jpg"
              alt="NEXUS ONE"
              className="h-14 md:h-24 w-auto invert mix-blend-screen object-contain"
            />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <button
              onClick={() => navigate('/letter')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Letter
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => navigate('/insights')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Insights
            </button>

            <button
              onClick={() => setIsVaultDrawerOpen(true)}
              className="bg-gray-100 text-black px-5 py-2.5 font-bold text-xs hover:bg-gray-200 transition-colors"
            >
              Connect Wallet
            </button>
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <div className="flex items-center">
              <img
                src="/nexus_one_logo.jpg"
                alt="NEXUS ONE"
                className="h-14 w-auto invert mix-blend-screen object-contain"
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

          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col p-6 gap-2">
              <button
                onClick={() => handleNavigate('/letter')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Letter
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Portfolio
              </button>

              <button
                onClick={() => handleNavigate('/insights')}
                className="text-left text-white text-lg font-medium py-4 px-4 hover:bg-white/5 transition-colors rounded-lg"
              >
                Insights
              </button>

              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsVaultDrawerOpen(true);
                  }}
                  className="w-full bg-gray-100 text-black px-6 py-4 font-bold text-base hover:bg-gray-200 transition-colors"
                >
                  Connect Wallet
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <main>
        {children}
      </main>

      <VaultAccessDrawer isOpen={isVaultDrawerOpen} onClose={() => setIsVaultDrawerOpen(false)} />

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#111111] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase">
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

          <p className="text-xs text-gray-700 font-medium">
            © 2026 Nexus One
          </p>
        </div>
      </footer>
    </div>
  );
}
