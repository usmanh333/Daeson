"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export default function FounderMessage() {
  return (
    <section className="bg-[#070B12] py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-[#3B6AFF]/[0.04] blur-[100px] pointer-events-none" />

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
              {/* Portrait placeholder — editorial style */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-[#0D1521] border border-white/[0.07] overflow-hidden flex flex-col items-center justify-center relative">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B6AFF]/[0.04] to-transparent" />

                {/* Monogram */}
                <div className="z-10 text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 border"
                    style={{
                      background: "linear-gradient(135deg, rgba(59,106,255,0.15) 0%, rgba(59,106,255,0.06) 100%)",
                      borderColor: "rgba(59,106,255,0.25)",
                    }}
                  >
                    <span className="text-2xl font-black text-[#3B6AFF]">MZ</span>
                  </div>
                  <p className="text-[15px] font-bold text-white">Mahnoor Zafar</p>
                  <p className="text-[12px] text-[#3B6AFF] font-semibold mt-1 tracking-wide">Founder</p>
                  <p className="text-[11px] text-[#4B5568] mt-0.5">Strategic Systems Lead</p>
                </div>
              </div>

              {/* Floating credential */}
              <div className="absolute -bottom-5 -right-5 bg-[#0D1521] border border-white/[0.08] rounded-xl px-4 py-3 shadow-2xl shadow-black/50">
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-1.5">Focus</p>
                {[
                  { label: "Real Estate Infrastructure", color: "#3B6AFF" },
                  { label: "Governance Systems", color: "#C9A84C" },
                  { label: "Workflow Intelligence", color: "#10B981" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-[11px] text-[#94A3B8] mb-1 last:mb-0">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-8">
              Founder Statement
            </div>

            {/* Pull quote */}
            <blockquote className="text-[26px] md:text-[30px] font-bold text-white leading-[1.25] mb-8 tracking-tight">
              &ldquo;Most businesses are being sold subscriptions — not solutions. Companies that operate
              at scale deserve to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                own the infrastructure
              </span>{" "}
              that powers them.&rdquo;
            </blockquote>

            <div className="space-y-4 text-[14px] text-[#94A3B8] leading-[1.8] mb-8">
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
              <div className="h-px flex-1 bg-white/[0.06]" />
              <div className="text-right">
                <p className="text-[14px] font-bold text-white">Mahnoor Zafar</p>
                <p className="text-[12px] text-[#94A3B8]">Founder & Strategic Systems Lead, Daeson Technologies</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#3B6AFF] hover:text-[#4F7FFF] transition-colors"
              >
                About our leadership <ArrowRight size={13} />
              </Link>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-[#0A66C2]/40 bg-white/[0.02] hover:bg-[#0A66C2]/[0.06] text-[11px] font-semibold text-[#94A3B8] hover:text-[#0A66C2] transition-all duration-200"
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
