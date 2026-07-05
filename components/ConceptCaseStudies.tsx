"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    sector: "Real Estate Operations",
    tag: "Conceptual Architecture",
    color: "var(--green)",
    colorMuted: "var(--green-muted)",
    colorBorder: "var(--green-border)",
    scenario: "Regional Property Group — Multi-Market Operations",
    challenge:
      "A real estate firm managing 400+ listings across three markets operates across disconnected spreadsheets, a generic CRM, and a separate investor reporting tool. Leadership has no real-time portfolio visibility. Investor updates require 3–4 hours of manual compilation per week.",
    approach: [
      "Unified operational platform replacing 6 disconnected tools",
      "Real-time investor portal with automated portfolio reporting",
      "AI-powered lead qualification and pipeline prioritization",
      "Centralized payment and rent tracking across all properties",
    ],
    outcomes: [
      { metric: "12 hrs/week", label: "Saved in manual reporting" },
      { metric: "100%", label: "Investor visibility in real-time" },
      { metric: "1 platform", label: "Replacing 6 disconnected tools" },
    ],
    href: "/industries/real-estate",
    linkLabel: "Explore Real Estate Infrastructure",
  },
  {
    sector: "Workflow Automation",
    tag: "Conceptual Architecture",
    color: "#1D4ED8",
    colorMuted: "rgba(29,78,216,0.07)",
    colorBorder: "rgba(29,78,216,0.20)",
    scenario: "Enterprise Operations Team — Manual Approval Workflows",
    challenge:
      "An operations team of 40 people processes vendor approvals, compliance sign-offs, and internal requests via email threads and PDF forms. Average approval cycle: 6–8 days. No audit trail. No escalation visibility for leadership.",
    approach: [
      "Structured digital workflow engine replacing email-based approvals",
      "Role-based routing with automatic escalation logic",
      "Full audit trail for every decision and document",
      "Executive dashboard for real-time workflow status",
    ],
    outcomes: [
      { metric: "6 days → 14 hrs", label: "Approval cycle reduction" },
      { metric: "Complete", label: "Audit trail on every action" },
      { metric: "Zero", label: "Lost or missed approvals" },
    ],
    href: "/industries/workflow-automation",
    linkLabel: "Explore Workflow Automation",
  },
  {
    sector: "Islamic Finance Operations",
    tag: "Amanah AI — In Development",
    color: "var(--gold)",
    colorMuted: "var(--gold-muted)",
    colorBorder: "var(--gold-border)",
    scenario: "Islamic Financial Institution — Murabaha Processing",
    challenge:
      "An Islamic bank processes 200+ Murabaha financing applications per month. Each requires manual Shariah compliance checklist review, document preparation, and scholar sign-off. Average processing time: 11 days. Scholars spend 70% of review time on documentation instead of jurisprudential judgment.",
    approach: [
      "AI-powered Murabaha contract analysis and compliance flagging",
      "Automated governance documentation with structured audit trails",
      "Scholar review queue — showing only matters requiring substantive judgment",
      "Regulatory-ready compliance reporting generated automatically",
    ],
    outcomes: [
      { metric: "11 days → 3 days", label: "Processing time reduction" },
      { metric: "70% less", label: "Scholar time on documentation" },
      { metric: "100%", label: "Compliance audit trail" },
    ],
    href: "/amanah-ai",
    linkLabel: "Explore Amanah AI",
  },
];

export default function ConceptCaseStudies() {
  return (
    <section
      id="case-studies"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.20em] uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            Conceptual Case Studies
          </p>
          <h2
            className="text-[34px] md:text-[42px] font-bold tracking-tight leading-[1.08] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What Operational Infrastructure
            <br />
            Looks Like in Practice
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Illustrative scenarios based on documented industry pain points.
            No fabricated client names — just an honest picture of the problems we solve.
          </p>
        </div>

        {/* Case study cards */}
        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
            >
              {/* Card header */}
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-1 h-8 rounded-full shrink-0"
                    style={{ backgroundColor: cs.color }}
                  />
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: "var(--text-faint)" }}>
                      {cs.tag}
                    </p>
                    <p className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>
                      {cs.sector}
                    </p>
                  </div>
                </div>
                <span
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: cs.colorMuted, color: cs.color, border: `1px solid ${cs.colorBorder}` }}
                >
                  {cs.scenario}
                </span>
              </div>

              {/* Card body */}
              <div className="p-8 grid md:grid-cols-[1fr_1fr_auto] gap-8 items-start">

                {/* Challenge + Approach */}
                <div className="md:col-span-1">
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--text-faint)" }}>
                    Operational Challenge
                  </p>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {cs.challenge}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--text-faint)" }}>
                    Our Approach
                  </p>
                  <ul className="space-y-2">
                    {cs.approach.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: cs.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "var(--text-faint)" }}>
                    Projected Outcomes
                  </p>
                  <div className="space-y-3">
                    {cs.outcomes.map((outcome) => (
                      <div
                        key={outcome.label}
                        className="flex items-center justify-between px-4 py-3 rounded-xl"
                        style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                      >
                        <span className="text-[18px] font-bold tracking-tight" style={{ color: cs.color }}>
                          {outcome.metric}
                        </span>
                        <span className="text-[11px] font-medium text-right max-w-[140px]" style={{ color: "var(--text-muted)" }}>
                          {outcome.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-between h-full">
                  <div
                    className="text-[11px] leading-relaxed px-4 py-3 rounded-xl mb-4"
                    style={{ backgroundColor: cs.colorMuted, border: `1px solid ${cs.colorBorder}`, color: "var(--text-muted)" }}
                  >
                    <strong style={{ color: cs.color }}>Conceptual only.</strong> These scenarios illustrate documented
                    industry problems and our architectural approach — not specific client engagements.
                  </div>
                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-semibold text-white transition-all duration-200"
                    style={{ backgroundColor: cs.color }}
                  >
                    {cs.linkLabel}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-colors"
            style={{ color: "var(--green)" }}
          >
            View All Case Studies & Research
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
