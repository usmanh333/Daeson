import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Workflow Automation — Intelligent Enterprise Workflow Systems",
  description:
    "Daeson Technologies builds intelligent workflow automation systems for enterprise operations. End-to-end workflow design, AI-powered orchestration, automated approval flows, and compliance enforcement. Full ownership.",
  alternates: { canonical: "https://daesontechnologies.online/industries/workflow-automation" },
};

const challenges = [
  { title: "Manual Processes at Enterprise Scale", body: "Enterprise operations often involve dozens of manual workflow steps — approvals, data entry, reporting, notifications — that create overhead, delay decisions, and introduce human error at scale." },
  { title: "RPA Limitations", body: "Robotic process automation works for simple, stable tasks. Complex enterprise workflows with exceptions, conditional logic, and cross-system dependencies require intelligent orchestration that RPA can't provide." },
  { title: "No Visibility Into Workflow Status", body: "When workflows are manual or semi-automated, leadership has no real-time visibility into where work is in the process, what's delayed, and what exceptions require intervention." },
  { title: "Compliance Workflows Are Under-Engineered", body: "Compliance workflows in regulated industries — approvals, sign-offs, documentation — are often informal or email-driven, creating audit risk and compliance gaps." },
  { title: "Cross-System Orchestration is Fragile", body: "Enterprise workflows that span multiple systems — from CRM to ERP to compliance tools — are typically connected through fragile integrations that break under change or load." },
  { title: "Institutional Knowledge in Undocumented Processes", body: "Manual workflows carry institutional knowledge that exists only in people's heads. When those people leave, workflows break — sometimes catastrophically." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is intelligent workflow automation?", acceptedAnswer: { "@type": "Answer", text: "Intelligent workflow automation refers to systems that orchestrate complex business workflows with conditional logic, AI-powered decision support, exception handling, and cross-system integration — beyond what simple rule-based or RPA systems can manage. Intelligent workflow systems understand the context of a workflow instance, can adapt to exceptions, incorporate AI analysis at decision points, and maintain full audit trails of every workflow action." } },
    { "@type": "Question", name: "What is the difference between RPA and intelligent workflow automation?", acceptedAnswer: { "@type": "Answer", text: "RPA (robotic process automation) excels at automating simple, stable, rules-based tasks — screen scraping, data entry, report extraction. It breaks down under complex conditional logic, frequent change, or exception-heavy workflows. Intelligent workflow automation handles complexity through programmatic orchestration, AI-powered decision support, and adaptive exception handling — making it appropriate for the full range of enterprise operational workflows rather than a narrow subset." } },
    { "@type": "Question", name: "How does workflow automation support compliance?", acceptedAnswer: { "@type": "Answer",text: "Workflow automation supports compliance by enforcing required steps, approvals, and documentation as part of the workflow design — not as an afterthought. Automated compliance workflows ensure that every transaction or process that requires sign-off, documentation, or review gets it, with a full audit trail created automatically. This eliminates the compliance gaps that occur in manual or email-driven processes where steps are skipped or undocumented." } },
    { "@type": "Question", name: "What types of workflows can be automated?", acceptedAnswer: { "@type": "Answer", text: "The most common enterprise workflows that benefit from intelligent automation include: approval and authorization workflows, document review and processing workflows, onboarding and offboarding workflows, compliance and audit workflows, reporting and data distribution workflows, exception identification and escalation workflows, and cross-system data synchronization workflows. The candidates are anywhere that humans are currently routing, reviewing, or approving work that follows a structured pattern." } },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Workflow Automation — Daeson Technologies",
  url: "https://daesontechnologies.online/industries/workflow-automation",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://daesontechnologies.online/industries" },
      { "@type": "ListItem", position: 3, name: "Workflow Automation", item: "https://daesontechnologies.online/industries/workflow-automation" },
    ],
  },
};

export default function WorkflowAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>Industries / Workflow Automation</p>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Intelligent Workflow Systems
            <br />
            <span style={{ color: "var(--green)" }}>Beyond RPA. Built for Complexity.</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-8" style={{ color: "var(--text-secondary)" }}>
            End-to-end workflow automation for enterprise operations — replacing manual, fragmented processes
            with owned intelligent systems that enforce compliance, surface exceptions, and give leadership
            real-time operational visibility.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Request Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/demo" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              View Demo
            </Link>
          </div>
        </div>

        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Industry Challenges</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((c, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-8 h-px mb-5" style={{ backgroundColor: "var(--green)" }} />
                  <h3 className="text-[13px] font-bold mb-2.5 tracking-tight" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities matrix */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>What We Build</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Workflow Design & Architecture", items: ["Operational workflow mapping", "Process redesign & optimization", "Exception logic design", "Escalation path definition", "Compliance checkpoint design"] },
              { title: "Automation Implementation", items: ["Workflow orchestration engine", "Automated routing & assignment", "Conditional logic implementation", "Cross-system data orchestration", "Notification & alert systems"] },
              { title: "Compliance Enforcement", items: ["Required step enforcement", "Automated approval workflows", "Document generation & storage", "Compliance audit trail", "Regulatory reporting support"] },
              { title: "Visibility & Analytics", items: ["Real-time workflow status dashboards", "Bottleneck & delay detection", "Throughput & efficiency analytics", "Exception pattern analysis", "Team productivity metrics"] },
            ].map((cap, i) => (
              <div key={i} className="p-7 rounded-xl" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <h3 className="text-[15px] font-bold mb-4" style={{ color: "var(--text-primary)" }}>{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Frequently Asked Questions</p>
            <div className="space-y-4 mb-10">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <h3 className="text-[14px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Request Consultation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
