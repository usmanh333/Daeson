'use client';

import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Product', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #0F3D2E 0%, #1a6b50 100%)' }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <div className="font-bold text-[17px] tracking-tight" style={{ color: '#0F3D2E' }}>
                  Amanah<span style={{ color: '#D4AF37' }}>AI</span>
                </div>
                <div className="text-[9px] font-semibold tracking-widest uppercase text-gray-400">
                  Shariah Intelligence
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#0F3D2E] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#cta"
                className="px-5 py-2 text-sm font-semibold rounded-lg text-[#0F3D2E] border-2 border-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white transition-all duration-200"
              >
                Request Demo
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[#0F3D2E] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #0F3D2E 0%, #1a6b50 100%)' }}
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
