"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StrategicCollaboration() {
  return (
    <section className="bg-[#070B12] py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-[1fr_1px_1.4fr] gap-8 md:gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/[0.05] text-[#C9A84C] text-[11px] font-semibold tracking-widest uppercase mb-6">
                Strategic Collaboration
              </div>
              <h2 className="text-[22px] font-bold text-white mb-3 tracking-tight">
                Alhamd Shariah Advisory
              </h2>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                Strategic Shariah advisory collaboration supporting practical workflow alignment and domain
                expertise for Amanah AI.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block bg-white/[0.05] self-stretch" />

            {/* Right */}
            <div className="space-y-4">
              <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                Amanah AI&apos;s compliance infrastructure is being designed in collaboration with
                Shariah domain expertise from Alhamd Shariah Advisory. This collaboration ensures that the
                platform&apos;s workflow architecture remains grounded in practical Shariah operational
                requirements — not theoretical assumptions.
              </p>
              <p className="text-[12px] text-[#4B5568] italic leading-relaxed">
                This collaboration supports domain alignment. It does not constitute endorsement of
                AI-generated compliance determinations. All Shariah rulings remain the responsibility of
                qualified scholars.
              </p>
              <Link
                href="/amanah-ai"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#C9A84C] hover:text-[#E2C46A] transition-colors"
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
