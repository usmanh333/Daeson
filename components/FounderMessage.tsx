"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export default function FounderMessage() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
          {/* Left — Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <div
                className="w-full aspect-[4/5] rounded-2xl overflow-hidden flex flex-col items-center justify-center relative"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, var(--bg-page)55, transparent)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 100%)" }}
                />

                {/* Monogram */}
                <div className="z-10 text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 border"
                    style={{
                      background: "linear-gradient(135deg, var(--blue-muted) 0%, rgba(255,255,255,0.04) 100%)",
                      borderColor: "var(--blue-border)",
                    }}
                  >
                    <span className="text-2xl font-black" style={{ color: "var(--blue)" }}>MZ</span>
                  </div>
                  <p className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>Mahnoor Zafar</p>
                  <p className="text-[12px] font-semibold mt-1 tracking-wide" style={{ color: "var(--blue)" }}>Founder</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--text-faint)" }}>Strategic Systems Lead</p>
                </div>
              </div>

              {/* Floating credential */}
              <div
                className="absolute -bottom-5 -right-5 rounded-xl px-4 py-3"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--text-faint)" }}>
                  Focus
                </p>
                {[
                  { label: "Real Estate Infrastructure", color: "var(--blue)" },
                  { label: "Governance Systems", color: "var(--gold)" },
                  { label: "Workflow Intelligence", color: "var(--blue)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-[11px] mb-1 last:mb-0" style={{ color: "var(--text-secondary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}
            >
              Founder Statement
            </div>

            <blockquote
              className="text-[24px] md:text-[28px] font-bold leading-[1.28] mb-8 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              &ldquo;Most businesses are being sold subscriptions — not solutions. Companies that operate
              at scale deserve to{" "}
              <span style={{ color: "var(--blue)" }}>
                own the infrastructure
              </span>{" "}
              that powers them.&rdquo;
            </blockquote>

            <div className="space-y-4 text-[14px] leading-[1.8] mb-8" style={{ color: "var(--text-secondary)" }}>
              <p>
                I founded Daeson Technologies because I kept observing the same operational gap: businesses
                in complex, high-stakes industries patching together generic SaaS tools and calling it
                &ldquo;their system.&rdquo; The result is fragmented data, manual bottlenecks, and
                infrastructure that works against the business instead of for it.
              </p>
              <p>
                Real estate firms with multi-market portfolios running investor relations on spreadsheets.
                Islamic financial institutions conducting Shariah compliance manually with no audit
                infrastructure. Enterprise operations teams unable to get a real-time view of their own
                business.
              </p>
              <p>
                These are not software problems. They are infrastructure problems — and they require an
                infrastructure response. Daeson Technologies builds the systems these businesses should
                have owned from the beginning.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
              <div className="text-right">
                <p className="text-[14px] font-bold" style={{ color: "var(--text-primary)" }}>Mahnoor Zafar</p>
                <p className="text-[12px]" style={{ color: "var(--text-secondary)" }}>Founder & Strategic Systems Lead, Daeson Technologies</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                style={{ color: "var(--blue)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue-hover)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue)")}
              >
                About our leadership <ArrowRight size={13} />
              </Link>
              <a
                href="https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-elevated)", color: "var(--text-secondary)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(10, 102, 194, 0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#0A66C2";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
              >
                <Linkedin size={11} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
