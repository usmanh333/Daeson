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
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M1 13V6l6-5 6 5v7H9V9H5v4H1Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Amanah AI",
    description: "Islamic finance compliance intelligence",
    href: "/amanah-ai",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.25" fill="none"/>
        <path d="M4.5 7.5C4.5 5.8 5.6 4.5 7 4.5s2.5 1.3 2.5 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" fill="none"/>
        <circle cx="7" cy="7" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Enterprise AI Systems",
    description: "Workflow automation and AI integration",
    href: "/industries",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1.5" y="1.5" width="4" height="4" rx="0.75" stroke="currentColor" strokeWidth="1.25" fill="none"/>
        <rect x="8.5" y="1.5" width="4" height="4" rx="0.75" stroke="currentColor" strokeWidth="1.25" fill="none"/>
        <rect x="1.5" y="8.5" width="4" height="4" rx="0.75" stroke="currentColor" strokeWidth="1.25" fill="none"/>
        <rect x="8.5" y="8.5" width="4" height="4" rx="0.75" stroke="currentColor" strokeWidth="1.25" fill="none"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [announced, setAnnounced] = useState(true);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      {announced && (
        <div
          className="w-full text-center py-2 px-4 relative"
          style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
        >
          <span className="text-[12px] font-medium hidden sm:inline" style={{ color: "rgba(255,255,255,0.75)" }}>
            Daeson Technologies · Enterprise Technology Company · UAE · Pakistan · Canada
          </span>
          <span className="text-[11px] font-medium sm:hidden" style={{ color: "rgba(255,255,255,0.75)" }}>
            Daeson Technologies · Enterprise Technology Company
          </span>
          <button
            onClick={() => setAnnounced(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: "#FFFFFF" }}
            aria-label="Dismiss announcement"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <header
        className="sticky top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--bg-page)" : "var(--bg-page)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid var(--border)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              {/* Subtle glow behind logo */}
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)", filter: "blur(10px)" }}
              />
              <Image
                src="/logo.png"
                alt="Daeson Technologies"
                width={34}
                height={34}
                className="object-contain relative z-10 transition-transform duration-200 group-hover:scale-110"
                style={{ filter: "brightness(0) invert(1)" }}
                unoptimized
              />
            </div>
            <div className="hidden sm:flex flex-col gap-[3px] leading-none">
              <span
                className="text-[16px] font-bold tracking-[0.06em] uppercase"
                style={{ color: "var(--text-primary)", lineHeight: 1 }}
              >
                Daeson
              </span>
              <span
                className="text-[7.5px] font-semibold tracking-[0.32em] uppercase"
                style={{ color: "var(--text-faint)", lineHeight: 1 }}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-150"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Solutions
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.14, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-xl overflow-hidden shadow-2xl"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    <div className="p-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-lg transition-colors group"
                          style={{ color: "inherit" }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-elevated)")}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          <span
                            className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
                            style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
                          >
                            {item.icon}
                          </span>
                          <div>
                            <div className="text-[13px] font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
                              {item.label}
                            </div>
                            <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-3" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-elevated)" }}>
                      <Link
                        href="/industries"
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-center gap-1.5 text-[12px] font-medium transition-colors"
                        style={{ color: "var(--blue)" }}
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
                className="px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-150"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "var(--blue)",
                color: "var(--on-blue)",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.35)",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue)")}
            >
              Get in Touch
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "var(--bg-page)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 px-2" style={{ color: "var(--text-faint)" }}>
                  Solutions
                </p>
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-2 py-3 rounded-lg transition-colors"
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold" style={{ color: "var(--text-primary)" }}>{item.label}</div>
                      <div className="text-[12px]" style={{ color: "var(--text-muted)" }}>{item.description}</div>
                    </div>
                  </Link>
                ))}

                <div className="my-4" style={{ height: "1px", backgroundColor: "var(--border)" }} />

                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 px-2" style={{ color: "var(--text-faint)" }}>
                  Pages
                </p>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-2 py-3 text-[15px] font-semibold transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 pb-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 text-[15px] font-semibold rounded-xl transition-colors"
                  style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                >
                  Request Executive Consultation
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
