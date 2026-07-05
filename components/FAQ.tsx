"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is operational infrastructure software?",
    a: `Operational infrastructure software refers to purpose-built digital systems that serve as the backbone of a company's day-to-day operations. Unlike generic SaaS tools, operational infrastructure is designed specifically around your business's workflows, data models, and compliance requirements.

It typically includes CRM and lead management, data aggregation and reporting, compliance and governance systems, workflow automation, and executive visibility dashboards — all integrated and owned by the business. Daeson Technologies specializes in building this type of owned infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations.`,
  },
  {
    q: "What does 'workflow-first' mean in software development?",
    a: `Workflow-first means systems are designed around how a business actually operates before any code is written. Rather than buying software and adapting processes around it, workflow-first development begins with operational discovery — mapping real workflows, data flows, and decision points — then builds infrastructure around those realities.

Most software projects fail not because of poor engineering, but because the system was built on a misunderstood workflow. Daeson Technologies applies a workflow-first methodology to every engagement: discovery and operational architecture come before development, and prototypes are validated against real business scenarios before full build.`,
  },
  {
    q: "How is custom-built software different from using SaaS platforms?",
    a: `When a business uses SaaS tools, they are renting access to software built for a general market — not their specific operations. The business has no control over features, data models, integrations, or pricing trajectory.

Ownership means the company controls the codebase, the data, and the product roadmap. There are no recurring licensing fees per seat, no vendor lock-in, and no compromise on features. Custom-built operational infrastructure can be precisely aligned to your workflows and scaled as your business evolves.

For businesses with complex, high-volume, or compliance-driven operations, owned infrastructure typically delivers superior ROI within 12–24 months compared to equivalent SaaS subscriptions.`,
  },
  {
    q: "Can real estate companies build their own CRM and operations platform?",
    a: `Yes. Real estate firms with portfolio complexity, investor relationships, or multi-market operations often find that generic CRMs fall short of their operational needs — they require heavy customization, expensive consultants, and still don't match the actual workflow.

Purpose-built real estate operational infrastructure can include unified lead and deal management, investor dashboards with real-time portfolio visibility, payment and project milestone tracking, document management, and AI-powered reporting — all integrated into a single owned platform.

Daeson Technologies has designed operational infrastructure architecture specifically for real estate and property development firms operating across UAE, GCC, and international markets.`,
  },
  {
    q: "What is Amanah AI and how does it support Shariah compliance?",
    a: `Amanah AI is Daeson Technologies' dedicated platform for Islamic financial institutions, currently in strategic development with Alhamd Shariah Advisory collaboration. It provides AI-assisted support for Shariah compliance workflows — including Murabaha contract analysis, risk scoring, governance documentation, scholar review queues, and regulatory reporting.

Amanah AI is designed to support — not replace — Shariah scholars and compliance teams. It automates the repetitive, time-consuming analysis tasks and creates consistent, auditable documentation, so scholars can focus on substantive governance decisions rather than manual document review.

The platform is in development for Islamic banks, Islamic fintech platforms, investment funds, and payment institutions operating across GCC, Pakistan, and UK markets.`,
  },
  {
    q: "What is Murabaha workflow digitization?",
    a: `Murabaha is one of the most common structures in Islamic finance — a cost-plus-profit sale arrangement used for home financing, trade finance, vehicle purchase, and commodity financing. In most institutions, Murabaha compliance is managed manually: contracts reviewed line-by-line, documentation compiled by hand, scholar approval tracked through email.

Murabaha workflow digitization replaces this with structured, automated workflows. The system parses contracts against compliance frameworks, executes Shariah compliance checklists, generates governance documentation automatically, and maintains a full audit trail from contract intake through scholar approval — making the process faster, more consistent, and fully auditable at scale.`,
  },
  {
    q: "What is governance-sensitive AI?",
    a: `Governance-sensitive AI refers to AI systems designed with explicit attention to audit trails, explainability, human oversight, and regulatory compliance — required by industries where decisions carry legal, financial, or religious accountability.

Islamic finance and regulated real estate operations are prime examples: AI recommendations must be documented, auditable, and subject to human review. Daeson builds AI infrastructure with governance requirements built into the architecture from the start — not added as an afterthought. This means every AI decision has a traceable evidence chain, human review is embedded in the workflow, and the system can be audited by regulators, Shariah boards, or internal governance teams.`,
  },
  {
    q: "What industries does Daeson Technologies serve?",
    a: `Daeson Technologies currently serves three primary verticals:

Real Estate & PropTech — portfolio management, AI-powered CRM, investor relations dashboards, payment and project tracking, and lead intelligence systems for property development firms and real estate operators.

Islamic Finance — Shariah compliance infrastructure, Murabaha contract analysis, governance workflows, and regulatory reporting for Islamic banks, fintech platforms, investment funds, and lending institutions.

Enterprise Operations — workflow automation, operational intelligence dashboards, AI system integration, and cross-department visibility platforms for organizations with complex internal operations.

Our focus is on operationally complex businesses that have outgrown generic software tools and need infrastructure designed for their specific context.`,
  },
  {
    q: "How long does it take to build an operational infrastructure system?",
    a: `Timeline depends on scope and complexity. A core operational platform — including discovery, architecture, prototyping, development, and deployment — typically requires 3 to 6 months for a first production version.

More complex systems with AI integration, multi-market compliance requirements, and enterprise-scale data infrastructure may take 6 to 12 months.

We work in structured phases with clear milestones and weekly progress reviews. Clients see working interactive prototypes within the first 4–6 weeks of engagement — well before any final development commitment.`,
  },
  {
    q: "Do clients own the source code?",
    a: `Yes. Every system we build is fully owned by the client. This includes all source code, database schemas, architectural documentation, deployment configurations, and any intellectual property created during the engagement.

Clients receive a complete handover package and can continue development independently or with their own team. We do not retain any proprietary dependencies, license keys, or platform access that would create vendor lock-in.

We believe businesses should own their infrastructure — not lease it.`,
  },
  {
    q: "What makes Daeson Technologies different?",
    a: `Traditional software companies build what clients ask for. They are execution partners — given specifications, they write code.

Daeson Technologies functions as an operational systems partner. We start with in-depth workflow discovery and operational architecture before development begins. Our approach is closer to a management consulting and technology implementation firm than a development shop.

We focus on a small number of industries and bring deep domain knowledge — particularly in real estate operations and Islamic finance compliance — rather than taking on any project that comes our way. We don't build software; we build systems that change how businesses operate.`,
  },
  {
    q: "How much does enterprise software development cost?",
    a: `Enterprise operational infrastructure is scoped on a project basis after discovery. Initial platform builds typically range from $25,000 to $150,000 depending on complexity, AI integration requirements, and number of stakeholder roles.

We provide fixed-scope, fixed-price proposals after completing a discovery and architecture phase — so clients understand the full investment commitment before development begins. There are no surprise costs or scope creep billing.

For ongoing optimization, feature development, and operational support, we offer structured retainer engagements following initial deployment.`,
  },
  {
    q: "What is AI for business operations — and how does Daeson use it?",
    a: `AI for business operations refers to the application of machine learning, natural language processing, and reasoning systems to operational workflows — not just chatbots or content generation.

This includes AI-driven contract analysis, automated reporting and data aggregation, intelligent lead qualification, compliance document generation, anomaly detection in operational data, and executive intelligence dashboards that synthesize multiple data sources.

Daeson Technologies integrates AI capabilities into operational infrastructure in ways that create measurable business value — improving processing speed, decision consistency, and organizational visibility. We do not build AI as a product feature; we build AI as an operational layer that makes the entire system more intelligent.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="faq"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}
          >
            FAQ
          </div>
          <h2
            className="text-[34px] md:text-[42px] font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Answers to the most common questions about operational infrastructure, custom development, and how we work.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                border: open === i ? "1px solid var(--blue-border)" : "1px solid var(--border)",
                backgroundColor: open === i ? "var(--blue-muted)" : "var(--bg-card)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span
                  className="text-[14px] font-semibold leading-snug transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: open === i ? "var(--blue)" : "var(--border-hover)",
                    backgroundColor: open === i ? "var(--blue-muted)" : "transparent",
                    color: open === i ? "var(--blue)" : "var(--text-faint)",
                  }}
                >
                  {open === i ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px mb-4" style={{ backgroundColor: "var(--border)" }} />
                      <p
                        className="text-[13px] leading-[1.8] whitespace-pre-line"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
