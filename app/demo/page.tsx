import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Center — Explore Our Platforms",
  description:
    "Request a demonstration of Daeson Technologies enterprise platforms: Real Estate Operations Platform, Amanah AI Islamic finance intelligence, workflow automation systems, and enterprise AI integration.",
  alternates: { canonical: "https://daesontechnologies.online/demo" },
};

const demos = [
  {
    title: "Real Estate Operations Platform",
    subtitle: "Concept Architecture Walkthrough",
    description:
      "A demonstration of the operational architecture for a unified real estate platform — CRM, investor dashboards, payment tracking, and AI lead intelligence — built around how a modern property firm actually operates.",
    highlights: [
      "Unified deal pipeline & CRM walkthrough",
      "Investor visibility portal & real-time dashboard",
      "AI lead scoring & qualification demo",
      "Executive analytics & KPI overview",
      "Payment tracking & reconciliation flow",
    ],
    duration: "45 minutes",
    format: "Screen-share walkthrough with Q&A",
    ideal: "Real estate executives, COOs, brokerage owners",
    status: "Available",
    href: "/contact?demo=real-estate",
  },
  {
    title: "Amanah AI",
    subtitle: "Islamic Finance Compliance Intelligence",
    description:
      "A walkthrough of the Amanah AI platform architecture — demonstrating the Murabaha workflow automation, Shariah governance documentation, and compliance visibility systems currently in development.",
    highlights: [
      "Murabaha contract analysis workflow",
      "Shariah governance documentation generation",
      "Scholar review queue management",
      "Compliance audit trail demonstration",
      "Governance visibility dashboard",
    ],
    duration: "30 minutes",
    format: "Architecture presentation with Q&A",
    ideal: "Islamic bank executives, Shariah compliance officers",
    status: "Available",
    href: "/contact?demo=amanah-ai",
  },
  {
    title: "Enterprise AI Integration",
    subtitle: "AI Integration Architecture Overview",
    description:
      "An executive briefing on how Daeson Technologies integrates AI into existing enterprise systems — covering integration patterns, workflow automation with AI, and operational intelligence implementation approaches.",
    highlights: [
      "AI integration architecture patterns",
      "Workflow automation with AI layer",
      "Operational intelligence dashboard design",
      "Governance & audit trail approach",
      "Implementation timeline & phases",
    ],
    duration: "60 minutes",
    format: "Executive briefing with case discussion",
    ideal: "C-suite executives, digital transformation leaders",
    status: "Available",
    href: "/contact?demo=enterprise-ai",
  },
  {
    title: "Workflow Automation System",
    subtitle: "Intelligent Workflow Architecture Demo",
    description:
      "A demonstration of intelligent workflow system architecture — showing how complex operational workflows can be automated, monitored, and continuously improved with AI-powered orchestration.",
    highlights: [
      "Workflow mapping & design methodology",
      "Automated approval & routing flows",
      "Exception handling & escalation logic",
      "Compliance enforcement in workflows",
      "Performance monitoring & analytics",
    ],
    duration: "45 minutes",
    format: "Technical walkthrough with business context",
    ideal: "Operations directors, enterprise architects",
    status: "Available",
    href: "/contact?demo=workflow-automation",
  },
];

const process = [
  { step: "01", title: "Submit Request", body: "Tell us which platform you're interested in and provide brief context on your organization and operational challenges." },
  { step: "02", title: "Confirmation", body: "We review your request and confirm a time within one business day. Demonstrations are conducted by the founding team directly." },
  { step: "03", title: "Preparation", body: "We may ask a few questions in advance to tailor the demonstration to your specific industry context and operational environment." },
  { step: "04", title: "Demonstration", body: "A focused walkthrough of the platform architecture relevant to your use case, followed by open Q&A. No sales pressure — just substance." },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Demo Center — Daeson Technologies",
  url: "https://daesontechnologies.online/demo",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Demo Center", item: "https://daesontechnologies.online/demo" },
    ],
  },
};

export default function DemoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Demo Center
          </div>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6" style={{ color: "var(--text-primary)" }}>
            See the Architecture.
            <br />
            <span style={{ color: "var(--green)" }}>Ask the Hard Questions.</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies demonstrations are platform walkthroughs — not polished sales presentations.
            We show architecture, workflow logic, and operational design, then answer questions directly.
          </p>
          <p className="text-[13px]" style={{ color: "var(--text-muted)" }}>
            All demonstrations are conducted by the founding team. No account executives, no scripts.
          </p>
        </div>

        {/* Demo options */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
              Available Demonstrations
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {demos.map((demo, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7 flex flex-col"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-[16px] font-bold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                        {demo.title}
                      </h2>
                      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>{demo.subtitle}</p>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shrink-0"
                      style={{ backgroundColor: "var(--green-muted)", color: "var(--green)" }}
                    >
                      {demo.status}
                    </span>
                  </div>

                  <p className="text-[12px] leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
                    {demo.description}
                  </p>

                  <div className="mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: "var(--text-faint)" }}>
                      What You'll See
                    </p>
                    <ul className="space-y-1.5">
                      {demo.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mb-5 text-[11px]" style={{ color: "var(--text-muted)" }}>
                    <span>{demo.duration}</span>
                    <span>·</span>
                    <span>{demo.format}</span>
                  </div>

                  <Link
                    href={demo.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-white text-[12px] font-semibold rounded-lg transition-all"
                    style={{ backgroundColor: "var(--green)" }}
                  >
                    Request This Demo <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              How It Works
            </p>
            <h2 className="text-[28px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              The Demo Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i}>
                <div
                  className="text-[28px] font-bold mb-4"
                  style={{ color: "var(--green)", fontVariantNumeric: "tabular-nums" }}
                >
                  {p.step}
                </div>
                <h3 className="text-[14px] font-bold mb-2" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h2 className="text-[26px] md:text-[32px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
              Ready to See It in Action?
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
              Request a demonstration directly. We'll confirm a time within one business day and
              tailor the walkthrough to your organization's context.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-white text-[14px] font-semibold rounded-xl"
              style={{ backgroundColor: "var(--green)", boxShadow: "0 4px 20px rgba(5,150,105,0.25)" }}
            >
              Request a Demonstration <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
