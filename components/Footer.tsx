"use client";

import Link from "next/link";
import Image from "next/image";

const solutions = [
  { label: "Real Estate Infrastructure", href: "/real-estate" },
  { label: "Amanah AI", href: "/amanah-ai" },
  { label: "Enterprise AI Systems", href: "/industries" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const markets = ["UAE & GCC", "Saudi Arabia", "Canada", "United States", "United Kingdom", "Pakistan"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-page)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, var(--blue) 0%, #1A45CC 100%)" }}
              >
                <Image src="/logo.png" alt="Daeson" width={20} height={20} className="object-contain" unoptimized />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--text-primary)" }}>
                  Daeson
                </span>
                <span className="text-[9px] font-medium tracking-[0.18em] uppercase" style={{ color: "var(--text-muted)" }}>
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed mb-6 max-w-xs" style={{ color: "var(--text-secondary)" }}>
              Owned operational infrastructure for real estate firms, Islamic financial institutions,
              and enterprise organizations. Founder-led. Workflow-first.
            </p>
            <a
              href="mailto:info@daesontechagency.online"
              className="text-[12px] transition-colors"
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")}
            >
              info@daesontechagency.online
            </a>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--text-faint)" }}>
              Solutions
            </p>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--text-faint)" }}>
              Company
            </p>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--text-faint)" }}>
              Markets Served
            </p>
            <ul className="space-y-3">
              {markets.map((market) => (
                <li key={market} className="flex items-center gap-2 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--blue)" }} />
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ backgroundColor: "var(--border)" }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]" style={{ color: "var(--text-faint)" }}>
          <p>© {new Date().getFullYear()} Daeson Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="transition-colors hover:text-(--text-secondary)">About</Link>
            <Link href="/partnerships" className="transition-colors hover:text-(--text-secondary)">Partnerships</Link>
            <Link href="/contact" className="transition-colors hover:text-(--text-secondary)">Contact</Link>
            <Link href="/insights" className="transition-colors hover:text-(--text-secondary)">Insights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
