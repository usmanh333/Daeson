"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Solution", href: "#solution" },
  { label: "Workflow", href: "#workflow" },
  { label: "Deployment", href: "#deployment" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-green-deep/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#0F3D2E] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-[#0F3D2E] tracking-tight">
              Amanah AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#0F3D2E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#features"
              className="text-sm font-medium text-[#0F3D2E] hover:text-[#1A5C42] transition-colors"
            >
              View Platform
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#1A5C42] transition-all shadow-md hover:shadow-lg"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#0F3D2E] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-[#0F3D2E] py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-[#0F3D2E] py-2"
              >
                View Platform
              </a>
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#0F3D2E] text-white text-sm font-semibold px-5 py-3 rounded-lg"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
