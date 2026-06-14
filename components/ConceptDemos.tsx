"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const demos = [
  {
    label: "Concept Demonstration",
    labelColor: "#3B6AFF",
    labelBg: "#3B6AFF15",
    status: "Available for Review",
    statusColor: "text-emerald-400",
    title: "Real Estate Operations Platform",
    subtitle: "Real Estate & PropTech",
    description:
      "An exploration of how a unified operational platform could replace four to six fragmented tools for property development firms and real estate operators. Built around the actual workflow of real estate operations — not adapted from generic CRM templates.",
    modules: [
      { name: "CEO Dashboard & Portfolio Overview", icon: "◈" },
      { name: "AI Lead Intelligence Engine", icon: "◈" },
      { name: "CRM & Deal Pipeline", icon: "◈" },
      { name: "Payment & Rent Tracking", icon: "◈" },
      { name: "Investor Visibility Portal", icon: "◈" },
      { name: "Role-Based Access Control", icon: "◈" },
    ],
    note: "Built around operational workflows and scalable according to firm size and investment priorities.",
    primaryCta: { label: "Request Tailored Demo", href: "/contact" },
    secondaryCta: { label: "View Overview", href: "/real-estate" },
    primaryColor: "#3B6AFF",
  },
  {
    label: "In Development",
    labelColor: "#C9A84C",
    labelBg: "#C9A84C15",
    status: "Strategic Development",
    statusColor: "text-[#C9A84C]",
    title: "Amanah AI",
    subtitle: "Islamic Finance Compliance Intelligence",
    description:
      "Amanah AI is being developed to support Shariah compliance workflows inside Islamic financial institutions — providing AI-assisted contract analysis, governance documentation, and regulatory reporting. Development is informed by strategic Shariah advisory collaboration.",
    modules: [
      { name: "Murabaha Workflow Intelligence", icon: "◈" },
      { name: "Compliance Document Processing", icon: "◈" },
      { name: "Shariah Governance Workflow", icon: "◈" },
      { name: "Audit Trail Generation", icon: "◈" },
      { name: "Multi-Market Regulatory Support", icon: "◈" },
      { name: "Scholar Review Interface", icon: "◈" },
    ],
    note: "Amanah AI is currently being developed with strategic Shariah advisory collaboration to support practical workflow alignment.",
    primaryCta: { label: "Learn More", href: "/amanah-ai" },
    secondaryCta: { label: "Express Interest", href: "/contact" },
    primaryColor: "#C9A84C",
    disclaimer: true,
  },
];

export default function ConceptDemos() {
  return (
    <section className="bg-[#070B12] py-28 relative overflow-hidden" id="concept-demonstrations">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#3B6AFF]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-6">
            Concept Demonstrations
          </div>
          <h2 className="text-[34px] md:text-[42px] font-extrabold tracking-tight text-white mb-4">
            Explore Operational Infrastructure in Action.
          </h2>
          <p className="text-[15px] text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            See how intelligent operational systems could look inside your organization.
            These demonstrations illustrate our infrastructure approach across two operational contexts.
          </p>
        </motion.div>

        {/* Demo cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
              className="bg-[#0D1521] border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col hover:border-white/[0.11] transition-all duration-300"
            >
              {/* Top bar */}
              <div className="px-7 pt-7 pb-5 border-b border-white/[0.05]">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: demo.labelBg, color: demo.labelColor }}
                  >
                    {demo.label}
                  </div>
                  <span className={`text-[11px] font-medium ${demo.statusColor}`}>
                    {demo.status}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-white mb-1.5 tracking-tight">{demo.title}</h3>
                <p className="text-[12px] font-semibold text-[#4B5568] uppercase tracking-widest">{demo.subtitle}</p>
              </div>

              <div className="px-7 py-6 flex-1 flex flex-col">
                {/* Description */}
                <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-7">{demo.description}</p>

                {/* Modules */}
                <div className="mb-6">
                  <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-4">
                    System Modules
                  </p>
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                    {demo.modules.map((module) => (
                      <div key={module.name} className="flex items-start gap-2 text-[12px] text-[#94A3B8]">
                        <span className="mt-0.5 shrink-0" style={{ color: demo.primaryColor, fontSize: "8px" }}>
                          {module.icon}
                        </span>
                        {module.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div
                  className="rounded-xl px-4 py-3 mb-6 border-l-2"
                  style={{
                    backgroundColor: `${demo.primaryColor}08`,
                    borderLeftColor: `${demo.primaryColor}40`,
                  }}
                >
                  <p className="text-[12px] text-[#94A3B8] leading-relaxed italic">{demo.note}</p>
                </div>

                {demo.disclaimer && (
                  <p className="text-[11px] text-[#4B5568] mb-5 italic">
                    ✦ Advisory note: Amanah AI provides workflow support — it does not issue Shariah rulings.
                    All compliance decisions rest with qualified Shariah scholars.
                  </p>
                )}

                {/* CTAs */}
                <div className="mt-auto flex items-center gap-4">
                  <Link
                    href={demo.primaryCta.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-white text-[13px] font-semibold rounded-xl transition-all duration-200 shadow-lg"
                    style={{
                      backgroundColor: demo.primaryColor,
                    }}
                  >
                    {demo.primaryCta.label}
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href={demo.secondaryCta.href}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {demo.secondaryCta.label}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-[12px] text-[#4B5568] mt-10"
        >
          All demonstrations are tailored to your specific operational context.{" "}
          <Link href="/contact" className="text-[#3B6AFF] hover:text-[#4F7FFF] transition-colors font-medium">
            Request a walkthrough →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
