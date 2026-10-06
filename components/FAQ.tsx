"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What problem does Aylinor solve for Islamic financial institutions?",
    a: `Shariah compliance review in most Islamic banks happens through disconnected, manual processes. Contracts arrive as documents, officers review them individually, comments are exchanged over email, and decisions are recorded in separate files, if at all.

The result is inconsistent review quality, no reliable audit trail, and compliance teams spending most of their time on coordination rather than substantive analysis. When financing volume grows, the bottleneck grows with it because the process scales with headcount, not with technology.

Aylinor is built to bring that process into a single, organized workflow so that review, commentary, and decision history are connected, retrievable, and auditable.`,
  },
  {
    q: "Who is Aylinor designed for?",
    a: `Aylinor is designed for Islamic financial institutions that carry an active Shariah compliance function. This includes microfinance banks, commercial Islamic banks, Islamic windows within conventional banks, and Islamic fintech platforms.

The primary users are compliance officers and Shariah advisors who are responsible for reviewing contracts, maintaining governance records, and preparing documentation for audit or board review. The platform supports their work without replacing their judgment or authority.`,
  },
  {
    q: "How does Aylinor support Shariah advisors specifically?",
    a: `Shariah advisors at Islamic banks spend a significant portion of their time on operational overhead: reading documents, tracking versions, consolidating comments, and chasing approvals through email. This is time taken away from the substantive compliance decisions that require their expertise.

Aylinor reduces that overhead by organizing the review workflow in one place. Advisors can see what has been submitted, what requires their attention, and what decisions have been recorded, without reconstructing that picture from emails and shared drives.

The advisor remains the decision-maker. The platform makes the information they need available in a structured, traceable form.`,
  },
  {
    q: "What is Murabaha compliance and why is it operationally difficult?",
    a: `Murabaha is a cost-plus-profit sale arrangement and one of the most common financing structures in Islamic banking. It is used for home financing, trade finance, vehicle purchase, and commodity financing.

Compliance requires verifying that the contract correctly reflects the agreed cost, profit margin, and delivery terms, and that it meets the applicable Shariah and regulatory requirements. In most institutions this is done manually: a compliance officer reads the contract, checks it against a checklist or their own knowledge, and records the outcome in a spreadsheet or by email.

At low volume this is manageable. As financing volume grows, the manual process becomes a serious operational constraint. Review takes longer, errors are harder to catch, and audit documentation is incomplete or inconsistent.`,
  },
  {
    q: "What makes Shariah compliance different from conventional financial compliance?",
    a: `Conventional compliance is primarily regulatory: does the contract meet the rules set by a financial regulator? Shariah compliance adds a second layer: does the contract's structure, economics, and intent conform to Islamic jurisprudence?

That second layer requires human scholarly judgment. A compliance officer or Shariah advisor must evaluate not just whether a clause is present, but whether the transaction as a whole is structured correctly under the applicable standard.

This means technology in Islamic finance cannot simply automate compliance decisions. It must support the review process, organize information, surface relevant material, and preserve the record of expert judgment. That is the role Aylinor is built to fill.`,
  },
  {
    q: "What is Ask Aylinor?",
    a: `Ask Aylinor is the Arabic and English conversational assistant within the Aylinor platform. It is designed for Shariah compliance officers who work across both languages and need to interact with documentation, research, and guidance material without switching tools or manually translating between languages.

Its purpose is to reduce the language-coordination overhead in compliance work, not to issue rulings or replace expert review. Outputs from Ask Aylinor should be evaluated against the source material and the officer's own professional judgment before any finding is recorded.`,
  },
  {
    q: "How does Daeson Technologies approach Islamic finance technology?",
    a: `Islamic finance institutions have governance requirements that conventional financial technology was not built to handle. Compliance workflows, audit trails, and scholar review processes require a different underlying structure than standard banking software.

Daeson Technologies builds products specifically for this context. That means governance accountability is part of the product design, not an add-on. Expert oversight is embedded in the workflow, not bypassed by it. And the institution retains control over every decision the platform supports.

Our focus is on making existing compliance work more organized and retrievable, not on automating away the human judgment that Islamic governance requires.`,
  },
  {
    q: "What real estate problems do Home 1.0 and LuxeProperty AI address?",
    a: `Property management and real estate operations involve a large number of disconnected activities: listing units, processing applications, collecting rent, handling maintenance, managing investor reporting, and tracking deals. Most firms handle these through a combination of spreadsheets, email, and separate tools that do not share data.

Home 1.0 is a residential property management platform that connects listing, tenant applications, rent tracking, and maintenance into one place. LuxeProperty AI is designed for real estate teams, investors, and executives who need operational and portfolio visibility in a single platform.

Both products are designed around the actual workflows of the teams using them, rather than requiring those teams to adapt their operations to a generic tool.`,
  },
  {
    q: "Is Aylinor available to all institutions or by invitation only?",
    a: `Aylinor is currently available as a private preview by invitation. We are working directly with a small number of Islamic financial institutions to refine the compliance workflow before broader release.

Institutions that want to be considered for early access can request a demonstration through the Aylinor website. We prioritize institutions where the compliance review problem is active and where there is interest in participating in the refinement process.`,
  },
  {
    q: "What industries does Daeson Technologies focus on?",
    a: `Daeson Technologies focuses on three areas where operational complexity and governance requirements make generic software inadequate.

Islamic finance, where Shariah compliance workflows require purpose-built support that respects the role of scholars and advisors. Real estate and property management, where deal flow, investor reporting, tenant management, and payment tracking need to work as a connected system rather than isolated tools. And enterprise operations more broadly, where organizations need visibility and coordination across departments that currently operate in silos.

Our products, Aylinor, Home 1.0, and LuxeProperty AI, are each built for one of these contexts.`,
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
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-(--blue-muted)"
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
