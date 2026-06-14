"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const demos = [
  {
    tag: "Concept Architecture",
    tagColor: "var(--blue)",
    tagBg: "var(--blue-muted)",
    status: "Available for Review",
    statusColor: "#10B981",
    title: "Real Estate Operations Platform",
    subtitle: "Real Estate & PropTech",
    description:
      "An exploration of how a unified operational platform could replace four to six fragmented tools for property development firms and real estate operators. Built around the actual workflow of real estate operations — not adapted from generic CRM templates.",
    modules: [
      "CEO Dashboard & Portfolio Overview",
      "AI Lead Intelligence Engine",
      "CRM & Deal Pipeline",
      "Payment & Rent Tracking",
      "Investor Visibility Portal",
      "Role-Based Access Control",
    ],
    note: "Built according to workflow, operational priorities, and firm size. Each implementation is tailored to the client's specific context.",
    primaryCta: { label: "Request Tailored Demo", href: "/contact" },
    secondaryCta: { label: "View Overview", href: "/real-estate" },
    accentColor: "var(--blue)",
  },
  {
    tag: "In Development",
    tagColor: "var(--gold)",
    tagBg: "var(--gold-muted)",
    status: "Strategic Development",
    statusColor: "var(--gold)",
    title: "Amanah AI",
    subtitle: "Islamic Finance Compliance Intelligence",
    description:
      "Amanah AI is being developed to support Shariah compliance workflows inside Islamic financial institutions — providing AI-assisted contract analysis, governance documentation, and regulatory reporting. Development is informed by strategic Shariah advisory collaboration.",
    modules: [
      "Murabaha Workflow Intelligence",
      "Compliance Document Processing",
      "Shariah Governance Workflow",
      "Audit Trail Generation",
      "Multi-Market Regulatory Support",
      "Scholar Review Interface",
    ],
    note: "Amanah AI is currently being developed in strategic collaboration with Shariah advisory expertise to support practical workflow alignment.",
    primaryCta: { label: "Learn More", href: "/amanah-ai" },
    secondaryCta: { label: "Express Interest", href: "/contact" },
    accentColor: "var(--gold)",
    disclaimer: true,
  },
];

export default function ConceptDemos() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      id="concept-demonstrations"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,106,255,0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-surface)" }}
          >
            Concept Demonstrations
          </div>
          <h2
            className="text-[32px] md:text-[40px] font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Explore Operational Infrastructure in Action
          </h2>
          <p className="text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            See how intelligent operational systems could look inside your organization.
            These demonstrations illustrate our infrastructure approach across two operational contexts.
          </p>
        </motion.div>

        {/* Demo cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              {/* Top bar */}
              <div className="px-7 pt-7 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: demo.tagBg, color: demo.tagColor }}
                  >
                    {demo.tag}
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: demo.statusColor }}>
                    {demo.status}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold mb-1.5 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {demo.title}
                </h3>
                <p className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                  {demo.subtitle}
                </p>
              </div>

              <div className="px-7 py-6 flex-1 flex flex-col">
                {/* Description */}
                <p className="text-[13px] leading-relaxed mb-7" style={{ color: "var(--text-secondary)" }}>
                  {demo.description}
                </p>

                {/* Modules */}
                <div className="mb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                    System Modules
                  </p>
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                    {demo.modules.map((mod) => (
                      <div key={mod} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: demo.accentColor }} />
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div
                  className="rounded-xl px-4 py-3 mb-6"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderLeft: `2px solid ${demo.accentColor}`,
                  }}
                >
                  <p className="text-[12px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                    {demo.note}
                  </p>
                </div>

                {demo.disclaimer && (
                  <p className="text-[11px] mb-5 italic" style={{ color: "var(--text-faint)" }}>
                    Advisory note: Amanah AI provides workflow support — it does not issue Shariah rulings.
                    All compliance decisions rest with qualified Shariah scholars.
                  </p>
                )}

                {/* CTAs */}
                <div className="mt-auto flex items-center gap-4">
                  <Link
                    href={demo.primaryCta.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-white text-[13px] font-semibold rounded-xl transition-all duration-200"
                    style={{ backgroundColor: demo.accentColor }}
                  >
                    {demo.primaryCta.label}
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href={demo.secondaryCta.href}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
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
          className="text-center text-[12px] mt-10"
          style={{ color: "var(--text-faint)" }}
        >
          All demonstrations are tailored to your specific operational context.{" "}
          <Link
            href="/contact"
            className="font-medium transition-colors"
            style={{ color: "var(--blue)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue-hover)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue)")}
          >
            Request a walkthrough →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
