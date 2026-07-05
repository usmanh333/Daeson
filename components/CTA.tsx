"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #141414 0%, #0A0A0A 50%, #141414 100%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 65%)", filter: "blur(80px)" }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid rgba(255,255,255,0.20)", backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }}
          >
            Executive Consultation
          </div>

          <h2
            className="text-[34px] md:text-[50px] font-bold tracking-tight leading-[1.08] mb-6 text-white"
          >
            Ready to Own Your{" "}
            <br className="hidden md:block" />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              Operational Infrastructure?
            </span>
          </h2>

          <p className="text-[17px] leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.62)" }}>
            Schedule a complimentary executive consultation. We&apos;ll map your current operations, identify
            infrastructure gaps, and present an architectural approach — before any commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-black text-[15px] font-semibold rounded-xl transition-all duration-200"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 28px rgba(0, 0, 0, 0.4)",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4D4D4")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF")}
            >
              <Calendar size={16} />
              Schedule Executive Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[15px] font-semibold rounded-xl transition-all duration-200 text-white"
              style={{ border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.06)";
              }}
            >
              Explore Research & Insights
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[12px]" style={{ color: "rgba(255,255,255,0.42)" }}>
            {[
              "No commitment required",
              "Founder-led session",
              "Architecture included",
              "Fixed-scope proposals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#B9912F" }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
