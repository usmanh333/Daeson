"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/components/ThemeProvider";

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

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className="flex items-center h-7 rounded-lg px-0.5 w-[116px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }} />
    );
  }

  return (
    <div
      className="relative flex items-center h-7 rounded-lg px-0.5 gap-0.5"
      style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }}
      role="group"
      aria-label="Theme switcher"
    >
      <button
        onClick={() => setTheme("dark")}
        className={`relative z-10 flex items-center gap-1.5 px-2.5 h-6 rounded-md text-[11px] font-semibold transition-all duration-200 ${
          theme === "dark"
            ? "text-white"
            : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        }`}
        aria-pressed={theme === "dark"}
      >
        {theme === "dark" && (
          <motion.span
            layoutId="theme-pill"
            className="absolute inset-0 rounded-md"
            style={{ backgroundColor: "var(--blue)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor" aria-hidden="true">
            <path d="M4.5 1.5C4.5 1.5 6.5 2.5 6.5 4.5C6.5 6.5 4.5 7.5 4.5 7.5C4.5 7.5 2.5 6.5 2.5 4.5C2.5 2.5 4.5 1.5 4.5 1.5Z" opacity="0.4"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0C4.5 0 7.5 1.34 7.5 4.5C7.5 7.66 4.5 9 4.5 9C4.5 9 1.5 7.66 1.5 4.5C1.5 1.34 4.5 0 4.5 0ZM4.5 1.5C3.12 1.5 2 2.79 2 4.5C2 6.21 3.12 7.5 4.5 7.5C5.88 7.5 7 6.21 7 4.5C7 2.79 5.88 1.5 4.5 1.5Z"/>
          </svg>
          Dark
        </span>
      </button>

      <button
        onClick={() => setTheme("light")}
        className={`relative z-10 flex items-center gap-1.5 px-2.5 h-6 rounded-md text-[11px] font-semibold transition-all duration-200 ${
          theme === "light"
            ? "text-[var(--text-primary)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        }`}
        aria-pressed={theme === "light"}
      >
        {theme === "light" && (
          <motion.span
            layoutId="theme-pill"
            className="absolute inset-0 rounded-md"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor" aria-hidden="true">
            <circle cx="4.5" cy="4.5" r="2"/>
            <path d="M4.5 0.5V1.5M4.5 7.5V8.5M0.5 4.5H1.5M7.5 4.5H8.5M1.7 1.7L2.4 2.4M6.6 6.6L7.3 7.3M7.3 1.7L6.6 2.4M2.4 6.6L1.7 7.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          Light
        </span>
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--bg-page)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, var(--blue) 0%, #1A45CC 100%)" }}
            >
              <Image src="/logo.png" alt="Daeson" width={20} height={20} className="object-contain" unoptimized />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--text-primary)" }}>Daeson</span>
              <span className="text-[9px] font-medium tracking-[0.18em] uppercase" style={{ color: "var(--text-muted)" }}>Technologies</span>
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

          {/* Right — Theme + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "var(--blue)",
                boxShadow: "0 2px 12px rgba(59, 106, 255, 0.25)",
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
                <div className="flex items-center justify-center mb-5">
                  <ThemeToggle />
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 text-white text-[15px] font-semibold rounded-xl transition-colors"
                  style={{ backgroundColor: "var(--blue)" }}
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
