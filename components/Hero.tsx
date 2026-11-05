import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCT_URLS, newTab } from "@/lib/products";
import { GOLD, GOLD_LIGHT } from "@/lib/services";

const focus = ["AI & Agentic AI", "Custom Software", "Islamic Finance", "Real Estate"];

const products = [
  { name: "Aylinor", category: "Islamic Finance", note: "Shariah compliance and governance", href: PRODUCT_URLS.aylinor, featured: true },
  { name: "LuxeProperty AI", category: "Real Estate", note: "CEO, team and investors on one platform", href: PRODUCT_URLS.luxe, featured: false },
  { name: "Home 1.0", category: "Property Management", note: "Rentals, leases and maintenance", href: PRODUCT_URLS.home, featured: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ backgroundColor: "var(--bg-page)" }}>
      {/* Decorative rings */}
      <svg aria-hidden className="absolute -right-48 top-1/2 -translate-y-1/2 w-[820px] h-[820px] pointer-events-none hidden lg:block" viewBox="0 0 820 820" fill="none">
        <circle cx="410" cy="410" r="409" stroke="rgba(0,0,0,0.05)" />
        <circle cx="410" cy="410" r="310" stroke="rgba(0,0,0,0.05)" />
        <circle cx="410" cy="410" r="210" stroke="rgba(185,145,47,0.35)" />
        <circle cx="410" cy="410" r="110" stroke="rgba(0,0,0,0.05)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <p className="hero-in inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] mb-8" style={{ color: "var(--text-muted)" }}>
              <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              Daeson Technologies
            </p>

            <h1
              className="speakable hero-in text-[42px] md:text-[60px] lg:text-[68px] font-extrabold leading-[1.02] tracking-[-0.035em] mb-8"
              style={{ color: "var(--text-primary)", animationDelay: "80ms" }}
            >
              Custom AI software,
              <br />
              <span style={{ color: "var(--text-muted)" }}>built to bank-grade standards.</span>
            </h1>

            <p className="hero-in text-[18px] leading-[1.7] mb-10 max-w-[560px]" style={{ color: "var(--text-secondary)", animationDelay: "160ms" }}>
              We design and build AI systems, automation and enterprise software for businesses worldwide, with
              deep expertise in Islamic finance and real estate.
            </p>

            <div className="hero-in flex flex-col sm:flex-row gap-3 mb-12" style={{ animationDelay: "240ms" }}>
              <Link href="/contact" className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                Book a discovery call <ArrowRight size={15} />
              </Link>
              <Link href="/expertise" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl">
                Our expertise
              </Link>
            </div>

            <ul className="hero-in grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-3" style={{ animationDelay: "320ms" }}>
              {focus.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[12.5px] font-semibold" style={{ color: "var(--text-muted)" }}>
                  <span aria-hidden className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ backgroundColor: GOLD }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Product panel */}
          <div className="hero-in" style={{ animationDelay: "300ms" }}>
            <div className="rounded-[28px] p-3" style={{ backgroundColor: "#F7F7F5", border: "1px solid var(--border)" }}>
              <p className="px-4 pt-3 pb-3 text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--text-faint)" }}>
                Our Products
              </p>
              <div className="space-y-2.5">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    {...newTab}
                    className="lift-card group relative overflow-hidden flex items-center justify-between rounded-2xl px-6 py-6"
                    style={p.featured ? { backgroundColor: "#0A0A0A" } : { backgroundColor: "#FFFFFF", border: "1px solid var(--border)" }}
                  >
                    {p.featured && (
                      <span aria-hidden className="absolute -right-10 -top-10 w-28 h-28 rounded-full" style={{ border: "1px solid rgba(212,175,55,0.45)" }} />
                    )}
                    <div className="relative">
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: p.featured ? GOLD_LIGHT : "var(--text-faint)" }}>
                        {p.category}
                      </p>
                      <p className="text-[20px] font-extrabold tracking-tight" style={{ color: p.featured ? "#FFFFFF" : "var(--text-primary)" }}>
                        {p.name}
                      </p>
                      <p className="text-[12.5px] mt-0.5" style={{ color: p.featured ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}>
                        {p.note}
                      </p>
                    </div>
                    <span
                      className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45"
                      style={p.featured ? { border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF" } : { border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
