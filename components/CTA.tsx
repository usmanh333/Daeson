"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#070B12] py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#3B6AFF]/[0.06] blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B6AFF]/25 bg-[#3B6AFF]/8 text-[#3B6AFF] text-[11px] font-semibold tracking-widest uppercase mb-8">
            Executive Consultation
          </div>

          <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Ready to Own Your{" "}
            <br className="hidden md:block" />
            <span
              style={{
                background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Operational Infrastructure?
            </span>
          </h2>

          <p className="text-[17px] text-[#94A3B8] leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a complimentary executive consultation. We&apos;ll map your current operations, identify
            infrastructure gaps, and present an architectural approach — before any commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[15px] font-semibold rounded-xl transition-all duration-200 shadow-2xl shadow-[#3B6AFF]/25"
            >
              <Calendar size={16} />
              Schedule Executive Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/12 hover:border-white/20 text-[#EDF2FF] text-[15px] font-semibold rounded-xl transition-all duration-200 hover:bg-white/3"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[12px] text-[#4B5568]">
            {[
              "No commitment required",
              "60-minute session",
              "Architecture included",
              "Fixed-scope proposals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#3B6AFF]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
