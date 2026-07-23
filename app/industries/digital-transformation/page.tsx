import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Transformation — Strategy & Execution",
  description:
    "Daeson Technologies delivers enterprise digital transformation: replacing legacy systems, consolidating fragmented tools, and building owned operational infrastructure. Strategy through implementation.",
  alternates: { canonical: "https://daesontechnologies.online/industries/digital-transformation" },
};

const phases = [
  { phase: "Phase 1", title: "Discovery & Assessment", duration: "2–4 weeks", description: "Comprehensive assessment of current state — systems, workflows, data, pain points, and transformation priorities. We map where value is lost and where it can be created.", deliverables: ["Current state system map", "Workflow pain point analysis", "Transformation opportunity assessment", "Technology stack evaluation", "Priority roadmap recommendation"] },
  { phase: "Phase 2", title: "Strategy & Architecture", duration: "4–6 weeks", description: "Transformation strategy and target architecture design — defining what the future operational environment looks like and how to get there without disrupting the business.", deliverables: ["Transformation strategy document", "Target architecture blueprint", "Migration & transition plan", "Risk assessment", "Business case & investment analysis"] },
  { phase: "Phase 3", title: "Foundation Build", duration: "3–5 months", description: "Building the foundational operational infrastructure — the core platform that will replace fragmented legacy systems, starting with the highest-priority operational functions.", deliverables: ["Core operational platform", "Data migration", "Integration layer", "User training & adoption", "Change management support"] },
  { phase: "Phase 4", title: "AI Integration", duration: "2–4 months", description: "Embedding AI capabilities into the operational platform — operational intelligence dashboards, workflow automation with AI, and decision support systems.", deliverables: ["AI operational layer", "Intelligent workflow automation", "Operational intelligence dashboards", "Performance measurement infrastructure"] },
  { phase: "Phase 5", title: "Evolution & Optimization", duration: "Ongoing", description: "Continuous evolution of the platform based on operational data and changing business requirements. The system grows with the business.", deliverables: ["Quarterly system enhancements", "Performance optimization", "New capability development", "Governance & support"] },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is enterprise digital transformation?", acceptedAnswer: { "@type": "Answer", text: "Enterprise digital transformation is the process of replacing legacy systems and fragmented manual processes with owned digital infrastructure aligned to how the organization actually operates. This includes replacing disconnected SaaS tools with unified platforms, digitizing manual workflows, embedding AI into operational processes, and creating real-time operational visibility for leadership. Unlike IT modernization (which focuses on technology), digital transformation focuses on operational outcomes — measurable improvements in efficiency, decision quality, and competitive capability." } },
    { "@type": "Question", name: "How long does enterprise digital transformation take?", acceptedAnswer: { "@type": "Answer", text: "The timeline for enterprise digital transformation depends on scope and complexity. A focused transformation affecting core operational systems typically takes 9 to 18 months for the foundational phase, with subsequent AI integration and optimization phases extending the program. We structure transformations to deliver working, valuable systems within the first 3 to 5 months — rather than requiring the full program to complete before any value is realized." } },
    { "@type": "Question", name: "What is the difference between digital transformation and IT modernization?", acceptedAnswer: { "@type": "Answer", text: "IT modernization focuses on technology — upgrading infrastructure, migrating to cloud, replacing legacy software. Digital transformation focuses on operational outcomes — redesigning how the organization works, what decisions it can make, and how quickly it can adapt. Technology is the enabler of digital transformation, not the goal. Successful transformation programs keep operational outcomes at the center and treat technology decisions as serving those outcomes." } },
    { "@type": "Question", name: "Why do digital transformation programs fail?", acceptedAnswer: { "@type": "Answer", text: "Digital transformation programs most commonly fail for four reasons: starting with technology instead of operational requirements (buying a platform before understanding the workflows), underestimating change management (deploying new systems without adequate adoption support), delivering too slowly to demonstrate value (programs that take years before anything works), and treating transformation as a project rather than a continuous evolution. Daeson Technologies structures transformations to avoid all four failure patterns." } },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Enterprise Digital Transformation — Daeson Technologies",
  url: "https://daesontechnologies.online/industries/digital-transformation",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://daesontechnologies.online/industries" },
      { "@type": "ListItem", position: 3, name: "Digital Transformation", item: "https://daesontechnologies.online/industries/digital-transformation" },
    ],
  },
};

export default function DigitalTransformationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>Industries / Digital Transformation</p>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Enterprise Digital Transformation
            <br />
            <span style={{ color: "var(--green)" }}>Operational Outcomes First</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-8" style={{ color: "var(--text-secondary)" }}>
            We replace fragmented legacy systems and manual processes with owned operational infrastructure —
            delivering measurable outcomes at every phase, not promises at the end of a multi-year program.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Request Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/research" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              Read Our Research
            </Link>
          </div>
        </div>

        {/* Transformation Phases */}
        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Transformation Methodology</p>
            <div className="space-y-5">
              {phases.map((phase, i) => (
                <div key={i} className="rounded-2xl p-7" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] font-bold" style={{ color: "var(--green)" }}>{phase.phase}</span>
                        <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>·</span>
                        <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{phase.duration}</span>
                      </div>
                      <h3 className="text-[17px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>{phase.title}</h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{phase.description}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>Deliverables</p>
                      <ul className="space-y-1.5">
                        {phase.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Frequently Asked Questions</p>
          <div className="space-y-4 mb-10">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <h3 className="text-[14px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Begin Discovery <ArrowRight size={13} />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              All Solutions
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
