"use client";

import { motion } from "framer-motion";

const scenarios = [
  {
    index: "01",
    sector: "Real Estate — Brokerage",
    title: "Growing Brokerage Replacing Fragmented Tools",
    color: "#FFFFFF",
    colorVar: "var(--blue)",
    before: {
      label: "Operational Gaps",
      points: [
        "CRM data scattered across email, spreadsheets, and a generic platform",
        "Sales leads falling through gaps with no systematic follow-up",
        "Manual commission and payment tracking prone to errors",
        "No unified visibility into deal pipeline for leadership",
      ],
    },
    after: {
      label: "Infrastructure Outcome",
      points: [
        "Centralized pipeline with AI-assisted lead prioritization",
        "Automated follow-up workflows aligned to brokerage process",
        "Real-time payment and commission visibility",
        "Executive dashboard with portfolio-level reporting",
      ],
    },
  },
  {
    index: "02",
    sector: "Real Estate — Commercial",
    title: "Commercial Firm with Investor Reporting Gaps",
    color: "#10B981",
    colorVar: "#10B981",
    before: {
      label: "Operational Gaps",
      points: [
        "Investor updates compiled manually from multiple sources",
        "Rent collection and payment statuses tracked in spreadsheets",
        "No centralized asset performance view for ownership team",
        "Document and contract management across email threads",
      ],
    },
    after: {
      label: "Infrastructure Outcome",
      points: [
        "Automated investor reporting with configurable visibility levels",
        "Centralized rent and payment tracking with status alerts",
        "Portfolio-level performance dashboard for leadership",
        "Structured document management with role-based access",
      ],
    },
  },
  {
    index: "03",
    sector: "Islamic Finance — Operations",
    title: "Islamic Finance Workflow Structuring",
    color: "#D4AF37",
    colorVar: "var(--gold)",
    before: {
      label: "Operational Gaps",
      points: [
        "Murabaha contract review conducted manually with no workflow structure",
        "Shariah documentation inconsistent across products and markets",
        "Scholar review and approval cycles creating operational delays",
        "Compliance audit trails maintained in disconnected documents",
      ],
    },
    after: {
      label: "Infrastructure Outcome",
      points: [
        "Structured Murabaha workflow with AI-assisted document preparation",
        "Consistent Shariah governance documentation across all products",
        "Digital scholar review queue with structured approval flows",
        "Immutable audit trail generation for all compliance decisions",
      ],
    },
  },
];

export default function OperationalScenarios() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Top separator */}
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}
          >
            Illustrative Scenarios
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <h2
                className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                How Operational Infrastructure
                <br />
                <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
                  Changes Business Outcomes
                </span>
              </h2>
            </div>
            <div>
              <p className="text-[14px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                The scenarios below illustrate common operational patterns in the industries we serve.
                They are not specific client engagements — they reflect recurring infrastructure challenges
                and the outcomes that purpose-built systems enable.
              </p>
              <p
                className="text-[12px] mt-3 italic"
                style={{ color: "var(--text-muted)" }}
              >
                All scenarios are illustrative. They do not represent or imply specific client relationships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scenario cards */}
        <div className="space-y-6">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={scenario.index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Card header */}
              <div
                className="px-7 pt-6 pb-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[11px] font-bold tracking-widest"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {scenario.index}
                    </span>
                    <div
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${scenario.color}12`,
                        color: scenario.colorVar,
                      }}
                    >
                      {scenario.sector}
                    </div>
                  </div>
                </div>
                <h3
                  className="text-[18px] font-bold mt-3 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {scenario.title}
                </h3>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div
                  className="px-7 py-6"
                  style={{ borderRight: "1px solid var(--border)" }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-5"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {scenario.before.label}
                  </p>
                  <ul className="space-y-3">
                    {scenario.before.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[13px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "rgba(239, 68, 68, 0.5)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="px-7 py-6">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-5"
                    style={{ color: scenario.colorVar }}
                  >
                    {scenario.after.label}
                  </p>
                  <ul className="space-y-3">
                    {scenario.after.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[13px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: scenario.colorVar }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px]" style={{ color: "var(--text-faint)" }}>
            We typically begin with the highest operational priority and evolve systems gradually —
            reducing adoption risk while delivering measurable value early.
          </p>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="section-sep absolute bottom-0 left-0 right-0" />
    </section>
  );
}
