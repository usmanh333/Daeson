"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GOLD_LIGHT } from "@/lib/services";

export default function CTA() {
  return (
    <section className="px-6 py-20 md:py-24" style={{ backgroundColor: "var(--bg-page)" }}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden max-w-6xl mx-auto rounded-[32px] px-8 py-20 md:py-24 text-center"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <span aria-hidden className="absolute -left-28 -bottom-28 w-80 h-80 rounded-full pointer-events-none" style={{ border: "1px solid rgba(212,175,55,0.35)" }} />
        <span aria-hidden className="absolute -right-20 -top-20 w-60 h-60 rounded-full pointer-events-none" style={{ border: "1px solid rgba(255,255,255,0.10)" }} />

        <div className="relative max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] mb-8" style={{ color: GOLD_LIGHT }}>
            <span className="w-8 h-px" style={{ backgroundColor: GOLD_LIGHT }} />
            Discovery Call
            <span className="w-8 h-px" style={{ backgroundColor: GOLD_LIGHT }} />
          </p>
          <h2 className="text-[34px] md:text-[52px] font-bold tracking-tight leading-[1.06] mb-6 text-white">
            Start with one conversation.
          </h2>
          <p className="text-[17px] leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.62)" }}>
            Tell us about the workflow you want to improve. We&apos;ll map it with you and recommend the right
            approach, before any commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-bold rounded-xl transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#FFFFFF", color: "#0A0A0A" }}
            >
              Book a discovery call <ArrowRight size={15} />
            </Link>
            <Link
              href="/expertise"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-xl transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF" }}
            >
              See our expertise
            </Link>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12.5px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            {["No commitment required", "Founder-led session", "Clear written proposal"].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: GOLD_LIGHT }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
