"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Real Estate Operational Infrastructure",
    description:
      "We build owned, AI-powered platforms that replace fragmented SaaS stacks with unified operational systems designed for real estate firms with portfolio complexity, investor relationships, and multi-market operations.",
    outcomes: [
      "Unified CRM and lead intelligence",
      "Investor dashboards and reporting",
      "Payment and project tracking",
      "AI-powered operational analytics",
    ],
    href: "/real-estate",
    color: "#3B6AFF",
    label: "Real Estate",
  },
  {
    number: "02",
    title: "Amanah AI — Islamic Finance Intelligence",
    description:
      "AI-supported Shariah compliance infrastructure that streamlines contract analysis, governance workflows, and regulatory reporting for Islamic financial institutions operating across GCC, UK, and South Asian markets.",
    outcomes: [
      "Automated contract analysis",
      "Scholar governance workflows",
      "Immutable compliance audit trails",
      "Multi-market regulatory reporting",
    ],
    href: "/amanah-ai",
    color: "#C9A84C",
    label: "Islamic Finance",
  },
  {
    number: "03",
    title: "Enterprise AI Workflow Systems",
    description:
      "Custom AI workflow systems that connect your operational data, automate intelligence, and give leadership the visibility needed to make execution-level decisions — replacing disconnected tools with owned infrastructure.",
    outcomes: [
      "Cross-department workflow automation",
      "AI-integrated operational dashboards",
      "Predictive intelligence and reporting",
      "Enterprise-grade deployment",
    ],
    href: "/industries",
    color: "#10B981",
    label: "Enterprise",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="bg-[#0D1521] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B6AFF]/25 bg-[#3B6AFF]/8 text-[#3B6AFF] text-[11px] font-semibold tracking-widest uppercase mb-6">
            What We Build
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-tight text-white leading-[1.1]">
              Three Infrastructure Disciplines.
              <br />
              <span className="text-[#94A3B8]">One Systems Approach.</span>
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed max-w-lg">
              Every system we build is designed around your specific workflows — not adapted from a template.
              We specialize in industries that require operational precision.
            </p>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group bg-[#070B12] border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                  {/* Number */}
                  <div
                    className="text-[48px] font-black leading-none"
                    style={{ color: `${pillar.color}25` }}
                  >
                    {pillar.number}
                  </div>

                  <div>
                    {/* Badge + Title */}
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider mb-4"
                      style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                    >
                      {pillar.label}
                    </div>
                    <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                    <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-6 max-w-xl">{pillar.description}</p>

                    {/* Outcomes */}
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-2 text-[13px] text-[#94A3B8]">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: pillar.color }}
                          />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA arrow */}
                <Link
                  href={pillar.href}
                  className="flex items-center gap-2 text-[13px] font-semibold transition-colors mt-2 flex-shrink-0"
                  style={{ color: pillar.color }}
                >
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
