"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    tag: "Real Estate Operations",
    tagColor: "#FFFFFF",
    title: "Real Estate Operations Platform",
    problem:
      "A property development firm was operating with four disconnected tools — a generic CRM, a spreadsheet-based investor tracker, a separate payment system, and email for lead management. Data lived everywhere and nowhere.",
    approach:
      "We designed and built a unified operational platform that replaced all four tools. The platform includes an AI-powered lead intelligence system, investor dashboard with real-time portfolio visibility, integrated payment and milestone tracking, and executive reporting.",
    features: ["Unified CRM", "Investor Dashboard", "Payment Tracking", "Lead Intelligence", "AI Analytics"],
    status: "In Production",
    statusColor: "text-emerald-400",
    href: "/case-studies",
  },
  {
    tag: "Islamic Finance",
    tagColor: "#C9A84C",
    title: "Amanah AI — Shariah Compliance Infrastructure",
    problem:
      "An Islamic financial institution was conducting Shariah contract reviews manually — scholars reviewing PDFs by hand, compliance teams maintaining spreadsheet audit trails, and no standardized documentation process.",
    approach:
      "Amanah AI provides AI-assisted contract parsing and Shariah risk analysis, structured scholar governance workflows, immutable audit trail generation, and multi-market regulatory reporting — all in a single institutional platform.",
    features: ["AI Contract Analysis", "Scholar Workflow", "Audit Trail", "Compliance Reporting", "Multi-Market"],
    status: "Strategic Development",
    statusColor: "text-[#C9A84C]",
    disclaimer: "In strategic development with Shariah advisory collaboration.",
    href: "/amanah-ai",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="bg-[#0D1521] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-6">
              Case Studies
            </div>
            <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-tight text-white leading-tight">
              Systems We&apos;ve Designed
            </h2>
            <p className="text-[15px] text-[#94A3B8] mt-3 max-w-lg leading-relaxed">
              Problem framing, operational architecture, and system design for complex business environments.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-neutral-300 transition-colors flex-shrink-0"
          >
            All case studies <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#070B12] border border-white/[0.07] rounded-2xl p-7 flex flex-col hover:border-white/[0.12] transition-all duration-300 group"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${cs.tagColor}15`, color: cs.tagColor }}
                >
                  {cs.tag}
                </div>
                <span className={`text-[11px] font-medium ${cs.statusColor}`}>{cs.status}</span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold text-white mb-4 tracking-tight">{cs.title}</h3>

              {/* Problem */}
              <div className="mb-4">
                <p className="text-[11px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">The Problem</p>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{cs.problem}</p>
              </div>

              {/* Approach */}
              <div className="mb-6">
                <p className="text-[11px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">Our Approach</p>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{cs.approach}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cs.features.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-[#94A3B8]"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {cs.disclaimer && (
                <p className="text-[11px] text-[#4B5568] italic mb-4">{cs.disclaimer}</p>
              )}

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  href={cs.href}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                  style={{ color: cs.tagColor }}
                >
                  Read full case study <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
