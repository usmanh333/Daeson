"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES, GOLD, GOLD_LIGHT } from "@/lib/services";

export default function WhatWeBuild() {
  return (
    <section className="py-28" style={{ backgroundColor: "#E1D3B6", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid md:grid-cols-[1fr_1.3fr] gap-8 mb-14 items-end"
        >
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: "var(--text-muted)" }}>
              <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              What We Build
            </p>
            <h2 className="text-[34px] md:text-[46px] font-bold tracking-tight leading-[1.08]" style={{ color: "var(--text-primary)" }}>
              Seven services.
              <br />
              <span style={{ color: "var(--text-muted)" }}>One standard of care.</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed md:pb-2" style={{ color: "var(--text-secondary)" }}>
            Every system is designed around how your business actually works, not adapted from a template.
            Choose the area closest to your problem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: "easeOut" }}
            >
              <Link
                href={s.href}
                className="lift-card group h-full rounded-2xl p-7 flex flex-col min-h-[210px]"
                style={{ backgroundColor: "#F6F0E4", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[12px] font-bold tracking-widest" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:rotate-45"
                    style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
                  >
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <h3 className="text-[16.5px] font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
          >
            <Link
              href="/expertise"
              className="group h-full rounded-2xl p-7 flex flex-col justify-between min-h-[210px] transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "#1F3D2B", color: "#F3ECDD" }}
            >
              <span className="text-[12px] font-bold tracking-widest" style={{ color: GOLD_LIGHT }}>OUR EXPERTISE</span>
              <div>
                <p className="text-[18px] font-bold tracking-tight mb-3">See how we build: AI, security and process.</p>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: "rgba(243,236,221,0.75)" }}>
                  Explore <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
