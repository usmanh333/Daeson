import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCT_URLS, newTab } from "@/lib/products";

const trustStrip = [
  "Core product: Aylinor",
  "Islamic finance AI",
  "Fintech & PropTech",
  "Pakistan · UAE · Europe",
  "Owned infrastructure",
];

const products = [
  {
    name: "Aylinor",
    category: "Fintech · Core Product",
    note: "Shariah compliance intelligence",
    href: PRODUCT_URLS.aylinor,
    featured: true,
  },
  {
    name: "Home 1.0",
    category: "PropTech",
    note: "Property management software",
    href: PRODUCT_URLS.home,
    featured: false,
  },
  {
    name: "LuxeProperty AI",
    category: "PropTech",
    note: "Team, investor & CEO in one platform",
    href: PRODUCT_URLS.luxe,
    featured: false,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
          <div>
            <div className="hero-in" style={{ animationDelay: "0ms" }}>
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-8"
                style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--text-primary)" }} />
                Pakistan · Islamic Finance · AI
              </div>
            </div>

            <h1
              className="speakable text-[40px] md:text-[58px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-7"
              style={{ color: "var(--text-primary)" }}
            >
              Pakistan&apos;s First AI Startup
              <br />
              <span style={{ color: "var(--text-muted)" }}>Working on Islamic Finance.</span>
            </h1>

            <p
              className="text-[18px] md:text-[19px] leading-[1.7] mb-10 max-w-[560px]"
              style={{ color: "var(--text-secondary)" }}
            >
              <strong style={{ color: "var(--text-primary)" }}>Aylinor is our core product.</strong> It helps
              Islamic banks stay Shariah compliant with AI, built for microfinance and commercial banks in
              Pakistan and internationally.
            </p>

            <div className="hero-in flex flex-col sm:flex-row gap-3 mb-12" style={{ animationDelay: "240ms" }}>
              <Link href={PRODUCT_URLS.aylinor} {...newTab} className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                Explore Aylinor <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl">
                Contact for Full Platform Access
              </Link>
            </div>

            <div className="hero-in flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: "320ms" }}>
              {trustStrip.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: "var(--text-muted)" }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--text-primary)" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-in hidden lg:block" style={{ animationDelay: "300ms" }}>
            <div className="rounded-2xl p-2" style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}>
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--text-faint)" }}>
                Our Products
              </p>
              <div className="space-y-2">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    {...newTab}
                    className="lift-card group flex items-center justify-between rounded-xl px-5 py-5"
                    style={
                      p.featured
                        ? { backgroundColor: "var(--text-primary)", border: "1px solid var(--text-primary)" }
                        : { backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }
                    }
                  >
                    <div>
                      <p
                        className="text-[10px] font-bold tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: p.featured ? "var(--bg-page)" : "var(--text-faint)", opacity: p.featured ? 0.6 : 1 }}
                      >
                        {p.category}
                      </p>
                      <p className="text-[19px] font-extrabold tracking-tight" style={{ color: p.featured ? "var(--bg-page)" : "var(--text-primary)" }}>
                        {p.name}
                      </p>
                      <p className="text-[12.5px] mt-0.5" style={{ color: p.featured ? "var(--bg-page)" : "var(--text-muted)", opacity: p.featured ? 0.7 : 1 }}>
                        {p.note}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: p.featured ? "var(--bg-page)" : "var(--text-primary)" }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-page), transparent)" }}
      />
    </section>
  );
}
