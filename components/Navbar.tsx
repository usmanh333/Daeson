"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    label: "Real Estate Infrastructure",
    description: "Owned operational platform for property firms",
    href: "/real-estate",
    icon: "🏗️",
  },
  {
    label: "Amanah AI",
    description: "Islamic finance compliance intelligence",
    href: "/amanah-ai",
    icon: "⚖️",
  },
  {
    label: "Enterprise AI Systems",
    description: "Workflow automation and AI integration",
    href: "/industries",
    icon: "⚙️",
  },
];

const navLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070B12]/95 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B6AFF] to-[#1A45CC] flex items-center justify-center flex-shrink-0">
              <Image src="/logo.png" alt="Daeson" width={20} height={20} className="object-contain" unoptimized />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold tracking-[0.12em] text-white uppercase">Daeson</span>
              <span className="text-[9px] font-medium tracking-[0.18em] text-[#94A3B8] uppercase">Technologies</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-[#94A3B8] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                Solutions
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-[#0D1521]/98 backdrop-blur-xl border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl shadow-black/50"
                  >
                    <div className="p-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.04] transition-colors group"
                        >
                          <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                          <div>
                            <div className="text-[13px] font-semibold text-white group-hover:text-[#3B6AFF] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-[#94A3B8] mt-0.5">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.02]">
                      <Link
                        href="/industries"
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-center gap-1.5 text-[12px] font-medium text-[#3B6AFF] hover:text-[#4F7FFF] transition-colors"
                      >
                        View all industries <ArrowRight size={11} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-medium text-[#94A3B8] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white rounded-lg transition-all duration-200 shadow-lg shadow-[#3B6AFF]/20"
            >
              Get in Touch
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#070B12]/99 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-[#4B5568] uppercase mb-3 px-2">Solutions</p>
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-[15px] font-semibold text-white">{item.label}</div>
                      <div className="text-[12px] text-[#94A3B8]">{item.description}</div>
                    </div>
                  </Link>
                ))}

                <div className="h-px bg-white/[0.06] my-4" />

                <p className="text-[10px] font-semibold tracking-[0.15em] text-[#4B5568] uppercase mb-3 px-2">Pages</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-2 py-3 text-[15px] font-semibold text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[15px] font-semibold rounded-xl transition-colors"
                >
                  Schedule Executive Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
