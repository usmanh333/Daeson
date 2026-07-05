"use client";

import Link from "next/link";
import Image from "next/image";

const solutions = [
  { label: "Real Estate Infrastructure", href: "/real-estate" },
  { label: "Amanah AI", href: "/amanah-ai" },
  { label: "Enterprise AI Systems", href: "/industries" },
  { label: "Solutions Overview", href: "/solutions" },
  { label: "Products", href: "/products" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Press & Media", href: "/pr" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const recognition = [
  { label: "Clutch Profile", href: "https://clutch.co", external: true },
  { label: "GoodFirms", href: "https://goodfirms.co", external: true },
  { label: "Google Partner", href: "#", external: false },
  { label: "Press Coverage", href: "/pr", external: false },
];

const markets = ["UAE & GCC", "Saudi Arabia", "Canada", "United States", "United Kingdom", "Pakistan"];

const badgeImages = [
  { src: "/clutch.png", alt: "Clutch", href: "https://clutch.co" },
  { src: "/goodfirm.png", alt: "GoodFirms", href: "https://goodfirms.co" },
  { src: "/google-reviews-logo.png", alt: "Google Reviews", href: null },
  { src: "/Trustpilot.png", alt: "Trustpilot", href: null },
  { src: "/Designrush.png", alt: "DesignRush", href: null },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(170deg, #141414 0%, #0A0A0A 60%, #050505 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.10)",
      }}
    >
      {/* Subtle top glow */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main Grid — 5 columns */}
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group opacity-80 hover:opacity-100 transition-opacity duration-200">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Daeson"
                  width={18}
                  height={18}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-[3px] leading-none">
                <span
                  className="text-[15px] font-extrabold tracking-[0.05em] uppercase text-white"
                  style={{ lineHeight: 1 }}
                >
                  Daeson
                </span>
                <span
                  className="text-[8px] font-semibold tracking-[0.3em] uppercase"
                  style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1 }}
                >
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.52)" }}>
              Enterprise technology company building owned AI-powered infrastructure. Founder-built. Workflow-first. No subscriptions.
            </p>
            <a
              href="mailto:info@daesontechagency.online"
              className="text-[12px] transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
            >
              info@daesontechagency.online
            </a>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Solutions
            </p>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] transition-colors"
                    style={{ color: "rgba(255,255,255,0.52)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.52)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Company
            </p>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] transition-colors"
                    style={{ color: "rgba(255,255,255,0.52)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.52)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Markets Served
            </p>
            <ul className="space-y-3">
              {markets.map((market) => (
                <li key={market} className="flex items-center gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.52)" }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
                  {market}
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Recognition
            </p>
            <ul className="space-y-3">
              {recognition.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] transition-colors flex items-center gap-1"
                      style={{ color: "rgba(255,255,255,0.52)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.52)")}
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors"
                      style={{ color: "rgba(255,255,255,0.52)" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.52)")}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-10 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-7 text-center" style={{ color: "rgba(255,255,255,0.28)" }}>
            Trusted &amp; Recognized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {badgeImages.map((badge) => {
              const img = (
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain footer-badge-img"
                  unoptimized
                />
              );
              return badge.href ? (
                <a key={badge.src} href={badge.href} target="_blank" rel="noopener noreferrer">
                  {img}
                </a>
              ) : (
                <span key={badge.src}>{img}</span>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] pt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          <div>
            <p>© {new Date().getFullYear()} Daeson Technologies 2025. All rights reserved.</p>
            <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
          
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="transition-colors" onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}>About</Link>
            <Link href="/partnerships" className="transition-colors" onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}>Partnerships</Link>
            <Link href="/contact" className="transition-colors" onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}>Contact</Link>
            <Link href="/insights" className="transition-colors" onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}>Insights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
