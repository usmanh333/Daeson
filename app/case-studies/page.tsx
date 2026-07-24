import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Infrastructure Projects",
  description:
    "Explore Daeson Technologies case studies — real estate operational platforms, Amanah AI Islamic finance infrastructure, and enterprise AI systems.",
  alternates: { canonical: "https://daesontechnologies.online/case-studies" },
};

const cases = [
  {
    tag: "Real Estate Operations",
    color: "#FFFFFF",
    status: "In Production",
    statusColor: "text-[var(--blue)]",
    title: "Real Estate Operations Platform",
    summary:
      "A property development firm replaced four disconnected tools with a single owned operational platform. The result: unified lead management, real-time investor dashboards, and automated payment tracking.",
    problem:
      "The firm was operating with a generic CRM, a spreadsheet-based investor tracker, a separate payment system, and email for lead management. Data lived in four places with no integration. Investor updates were manual and often delayed. Leadership had no real-time operational visibility.",
    approach:
      "We started with a two-week discovery and workflow mapping engagement, then designed a unified operational architecture. Development was structured across five phases with weekly demos. The platform launched as an MVP within 14 weeks.",
    outcomes: [
      "Single source of truth for all deal and investor data",
      "Automated investor reporting — from weekly manual effort to zero",
      "AI-powered lead scoring integrated into CRM workflow",
      "Executive dashboard with real-time portfolio analytics",
      "Full source code ownership — no SaaS dependency",
    ],
    modules: ["AI CRM", "Investor Dashboard", "Payment Tracking", "Lead Intelligence", "Executive Analytics"],
    href: "/contact",
  },
  {
    tag: "Islamic Finance",
    color: "#C9A84C",
    status: "Strategic Development",
    statusColor: "text-[#C9A84C]",
    title: "Amanah AI — Shariah Compliance Infrastructure",
    summary:
      "An Islamic financial institution needed Shariah compliance infrastructure that scaled beyond spreadsheets and manual scholar coordination. Amanah AI provides AI-assisted contract analysis, governance workflows, and immutable audit trails.",
    problem:
      "Scholars were reviewing contracts manually as PDFs, compliance teams maintained spreadsheet audit trails, and there was no standardized process for governance documentation. Regulatory reporting across multiple markets required manual aggregation.",
    approach:
      "Amanah AI was designed with Shariah advisory collaboration, following AAOIFI and IFSB standards awareness. The platform provides AI-assisted contract parsing and risk scoring as decision support for scholars — not as a replacement for Islamic jurisprudence.",
    outcomes: [
      "AI-assisted contract analysis reduces initial review time",
      "Structured scholar governance workflow with clear decision states",
      "Immutable audit trail generation for every compliance decision",
      "Multi-market regulatory report generation",
      "Consistent documentation standards across all contract types",
    ],
    modules: ["AI Contract Analysis", "Scholar Workflow", "Audit Trail", "Compliance Reporting", "Multi-Market"],
    disclaimer: "In strategic development with Shariah advisory collaboration. Advisory note: Amanah AI is decision-support infrastructure — it does not issue Shariah rulings.",
    href: "/amanah-ai",
  },
  {
    tag: "Law Enforcement Systems",
    color: "#FFFFFF",
    status: "Delivered",
    statusColor: "text-[var(--blue)]",
    title: "Sheriff Police Department — Desktop Operations System",
    summary:
      "A USA Sheriff Police Department needed a custom desktop operations system to manage case files, incident reports, and officer workflows — replacing a legacy system that no longer met operational requirements.",
    problem:
      "The department was using an outdated system that required manual data entry across multiple forms, had no search capability across historical case files, and provided no reporting infrastructure for command review.",
    approach:
      "We designed and built a custom desktop application with secure local deployment, role-based access control for officers and command staff, searchable case file database, and automated report generation for command review.",
    outcomes: [
      "Secure desktop deployment with role-based access control",
      "Searchable case and incident database",
      "Automated report generation for command staff",
      "Reduced manual data entry time significantly",
      "Fully owned system — no external dependencies",
    ],
    modules: ["Case Management", "Incident Reporting", "Role-Based Access", "Command Reporting", "Search & Retrieval"],
    href: "/case-studies/sheriff-police-system",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Header */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-8">
            Case Studies
          </div>
          <h1 className="text-[42px] md:text-[56px] font-extrabold text-white tracking-tight leading-[1.06] mb-6 max-w-3xl">
            Systems We&apos;ve{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #A0A0A0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Designed & Built.
            </span>
          </h1>
          <p className="text-[17px] text-[#94A3B8] max-w-2xl leading-relaxed">
            Problem framing, operational architecture, and system design for businesses that needed
            more than off-the-shelf software could provide.
          </p>
        </section>

        {/* Case Studies */}
        <section className="relative max-w-7xl mx-auto px-6 pb-24 space-y-8">
          {cases.map((cs) => (
            <div
              key={cs.title}
              className="bg-[#0D1521] border border-white/8 rounded-2xl p-8 md:p-10 hover:border-white/12 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${cs.color}15`, color: cs.color }}
                >
                  {cs.tag}
                </div>
                <span className={`text-[12px] font-medium ${cs.statusColor}`}>{cs.status}</span>
              </div>

              <h2 className="text-[26px] font-bold text-white mb-3 tracking-tight">{cs.title}</h2>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-8 max-w-3xl">{cs.summary}</p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-3">The Problem</p>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-3">Our Approach</p>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">{cs.approach}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-3">Outcomes</p>
                  <ul className="space-y-2">
                    {cs.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-[13px] text-[#94A3B8]">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: cs.color }} />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {cs.modules.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-[11px] font-medium text-[#94A3B8]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {cs.disclaimer && (
                <p className="text-[11px] text-[#4B5568] italic mb-5">{cs.disclaimer}</p>
              )}

              <Link
                href={cs.href}
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                style={{ color: cs.color }}
              >
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="relative max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="bg-[#0D1521] border border-white/8 rounded-2xl p-10">
            <h2 className="text-[28px] font-bold text-white mb-4 tracking-tight">
              Ready to build your infrastructure?
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-8">
              Schedule an executive consultation. We&apos;ll map your operations and present an architectural approach at no cost.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-300 text-black text-[14px] font-semibold rounded-xl transition-colors"
            >
              Schedule Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
