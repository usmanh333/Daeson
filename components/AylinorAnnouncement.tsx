import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { PRODUCT_URLS, newTab } from "@/lib/products";

export default function AylinorAnnouncement() {
  return (
    <section className="px-6 py-20 md:py-24" style={{ backgroundColor: "var(--bg-page)" }}>
      <div
        className="max-w-4xl mx-auto rounded-3xl p-9 md:p-14 relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-strong)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(255,255,255,0.06) 0%, transparent 65%)" }}
        />

        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-7"
            style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
          >
            <Sparkles size={11} />
            A Note From Our Founders
          </div>

          <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.1] tracking-tight mb-5" style={{ color: "var(--text-muted)" }}>
            Amanah AI is becoming{" "}
            <span style={{ color: "var(--text-primary)" }}>Aylinor.</span>
          </h2>

          <p className="text-[15px] leading-relaxed mb-4 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            As our Shariah compliance intelligence platform has matured, so has the ambition behind
            it. We&apos;re retiring the Amanah AI name in favor of Aylinor, a name built for what this
            platform is becoming, not just what it started as. The mission is unchanged: governance-first
            AI infrastructure for Islamic financial institutions, built with the same standards of
            auditability and scholar oversight from day one.
          </p>

          <p className="text-[15px] leading-relaxed mb-9 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            <strong style={{ color: "var(--text-primary)" }}>Aylinor 1.0 is launching soon.</strong> We&apos;ll
            share the details as we get closer to release.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href={PRODUCT_URLS.aylinor} {...newTab} className="btn-solid inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-bold rounded-xl">
              Learn more about Aylinor <ArrowRight size={14} />
            </Link>
            <span className="text-[12px]" style={{ color: "var(--text-faint)" }}>
              Mahnoor Zafar &amp; Usman Ahmad, Co-Founders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
