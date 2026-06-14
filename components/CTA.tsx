"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,106,255,0.05) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--blue-border)", backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
          >
            Executive Consultation
          </div>

          <h2
            className="text-[34px] md:text-[50px] font-bold tracking-tight leading-[1.08] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to Own Your{" "}
            <br className="hidden md:block" />
            <span style={{ color: "var(--blue)" }}>
              Operational Infrastructure?
            </span>
          </h2>

          <p className="text-[17px] leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Schedule a complimentary executive consultation. We&apos;ll map your current operations, identify
            infrastructure gaps, and present an architectural approach — before any commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white text-[15px] font-semibold rounded-xl transition-all duration-200"
              style={{
                backgroundColor: "var(--blue)",
                boxShadow: "0 4px 28px rgba(59, 106, 255, 0.30)",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue)")}
            >
              <Calendar size={16} />
              Schedule Executive Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[15px] font-semibold rounded-xl transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-surface)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Explore Research & Insights
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[12px]" style={{ color: "var(--text-faint)" }}>
            {[
              "No commitment required",
              "Founder-led session",
              "Architecture included",
              "Fixed-scope proposals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
