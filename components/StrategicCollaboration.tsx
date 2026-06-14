"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StrategicCollaboration() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl p-8 md:p-10"
          style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
          <div className="grid md:grid-cols-[1fr_1px_1.4fr] gap-8 md:gap-12 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
                style={{
                  border: "1px solid var(--gold-border)",
                  backgroundColor: "var(--gold-muted)",
                  color: "var(--gold)",
                }}
              >
                Strategic Collaboration
              </div>
              <h2
                className="text-[22px] font-bold mb-3 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Alhamd Shariah Advisory
              </h2>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Strategic Shariah advisory collaboration supporting practical workflow alignment and domain
                expertise for Amanah AI.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block self-stretch" style={{ backgroundColor: "var(--border)" }} />

            {/* Right */}
            <div className="space-y-4">
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Amanah AI&apos;s compliance infrastructure is being designed in collaboration with
                Shariah domain expertise from Alhamd Shariah Advisory. This collaboration ensures that the
                platform&apos;s workflow architecture remains grounded in practical Shariah operational
                requirements — not theoretical assumptions.
              </p>
              <p className="text-[12px] italic leading-relaxed" style={{ color: "var(--text-faint)" }}>
                This collaboration supports domain alignment. It does not constitute endorsement of
                AI-generated compliance determinations. All Shariah rulings remain the responsibility of
                qualified scholars.
              </p>
              <Link
                href="/amanah-ai"
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                style={{ color: "var(--gold)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--gold-light)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              >
                About Amanah AI <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
