import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI Integration & Automation",
  description:
    "Daeson Technologies integrates AI into existing enterprise systems as an operational layer — automating analysis, surfacing intelligence, and supporting decisions within live workflows. Not chatbots. Operational AI.",
  alternates: { canonical: "https://daesontechnologies.online/industries/enterprise-ai" },
};

const challenges = [
  { title: "AI Implementations Remain Isolated", body: "Most enterprise AI deployments are standalone tools — a chatbot here, an analytics product there — that don't connect to the actual operational systems where decisions are made." },
  { title: "Data Silos Block Intelligence", body: "Enterprise operational data lives across disconnected systems. Without data integration, AI cannot surface meaningful patterns from the whole of the business." },
  { title: "Governance & Audit Requirements", body: "In regulated industries, AI systems must produce explainable outputs with full audit trails. Generic AI tools rarely meet this bar, requiring significant custom engineering." },
  { title: "AI Without Workflow Context", body: "AI recommendations that aren't embedded in the workflow where action is taken require humans to switch between systems — reducing adoption and negating efficiency gains." },
  { title: "Technical Debt & Integration Complexity", body: "Legacy enterprise systems create integration complexity that most AI vendors don't solve. The result is AI capability constrained by the least modern system in the stack." },
  { title: "ROI Measurement is Unclear", body: "Enterprises struggle to measure AI ROI when implementations are disconnected from operational metrics. AI as an operational layer makes the impact directly measurable." },
];

const approaches = [
  { step: "01", title: "Operational Discovery", body: "We map the operational workflows where AI integration will produce the highest value — identifying data sources, decision points, and integration requirements before recommending an architecture." },
  { step: "02", title: "Integration Architecture", body: "We design AI integration architecture that connects to existing systems — not requiring a full replacement — embedding AI capability at the points in the workflow where it creates measurable value." },
  { step: "03", title: "Governance Design", body: "For regulated industries, we design AI governance into the architecture: audit trails, explainability requirements, human oversight checkpoints, and compliance documentation." },
  { step: "04", title: "Implementation & Testing", body: "We build AI integration incrementally, with extensive testing against real operational data and workflow conditions before production deployment." },
  { step: "05", title: "Measurement & Evolution", body: "We instrument AI systems to measure operational impact — efficiency gains, decision quality, time saved — and use this data to guide continuous evolution of the system." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is enterprise AI integration?", acceptedAnswer: { "@type": "Answer", text: "Enterprise AI integration refers to embedding AI capabilities directly into existing enterprise systems and operational workflows — rather than deploying AI as a standalone tool. This means AI is present at the point where work happens and decisions are made: inside the CRM, the compliance workflow, the operational dashboard. The result is AI that actually changes how the organization operates, rather than being an additional tool that competes for attention alongside existing systems." } },
    { "@type": "Question", name: "How is AI integration different from buying an AI tool?", acceptedAnswer: { "@type": "Answer", text: "Buying an AI tool gives you a capability in isolation. AI integration embeds that capability in the context where it creates value — within your existing operational systems, connected to your real data, at the decision point where it matters. Integration requires architectural work, system connectivity, and workflow redesign that AI tool vendors don't provide. The difference in outcomes is significant: integrated AI changes how people work; isolated AI tools often go unused." } },
    { "@type": "Question", name: "What is governance-sensitive AI for enterprise?", acceptedAnswer: { "@type": "Answer", text: "Governance-sensitive AI for enterprise refers to AI systems designed with audit trails, explainability, human oversight requirements, and compliance documentation — appropriate for organizations in regulated industries or where AI decisions carry significant operational, financial, or legal consequences. Governance-sensitive design treats accountability as an architectural requirement, not a feature to add later." } },
    { "@type": "Question", name: "How long does enterprise AI integration take?", acceptedAnswer: { "@type": "Answer", text: "Enterprise AI integration timelines depend on the complexity of existing systems and the scope of integration. A focused AI integration project — connecting AI to two or three key operational workflows — typically takes 2 to 4 months. Comprehensive operational AI integration across an enterprise typically takes 6 to 12 months, with initial working components delivered within the first 6 to 8 weeks." } },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Enterprise AI Integration — Daeson Technologies",
  url: "https://daesontechnologies.online/industries/enterprise-ai",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://daesontechnologies.online/industries" },
      { "@type": "ListItem", position: 3, name: "Enterprise AI", item: "https://daesontechnologies.online/industries/enterprise-ai" },
    ],
  },
};

export default function EnterpriseAIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>Industries / Enterprise AI</p>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Enterprise AI Integration
            <br />
            <span style={{ color: "var(--green)" }}>Not Chatbots. Operational AI.</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-8" style={{ color: "var(--text-secondary)" }}>
            We integrate AI into your existing enterprise systems as an operational layer — automating analysis,
            surfacing intelligence, and supporting decisions within the workflows where they actually occur.
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

        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Our Approach</p>
          <div className="space-y-4">
            {approaches.map((a, i) => (
              <div key={i} className="flex gap-8 p-7 rounded-xl" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <div className="text-[22px] font-bold shrink-0 w-10" style={{ color: "var(--green)" }}>{a.step}</div>
                <div>
                  <h3 className="text-[15px] font-bold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{a.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{a.body}</p>
                </div>
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
