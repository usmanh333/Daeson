import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shariah-Compliant Banking Software: Governance, Automation and Compliance",
  description:
    "How Shariah-compliant banking software supports modern Islamic financial institutions — governance, contract-level review, and where AI can responsibly help.",
  keywords: [
    "Shariah-compliant banking software",
    "Shariah compliance intelligence",
    "Islamic finance governance software",
    "Murabaha contract review",
    "AAOIFI governance standards",
    "Aylinor",
  ],
  alternates: { canonical: "https://daesontechnologies.online/insights/shariah-compliant-banking-software" },
  openGraph: {
    title: "Shariah-Compliant Banking Software: Governance, Automation and Compliance",
    description:
      "How Shariah-compliant banking software supports modern Islamic financial institutions — governance, contract-level review, and where AI can responsibly help.",
    url: "https://daesontechnologies.online/insights/shariah-compliant-banking-software",
  },
};

const faqs = [
  {
    q: "What is Shariah-compliant banking software?",
    a: "Shariah-compliant banking software is technology designed to help financial institutions manage products and operations according to their approved Islamic finance structures and governance requirements. The term does not automatically mean a platform is certified or approved by a particular regulator — institutions need to evaluate actual capabilities against their own policies.",
  },
  {
    q: "Can AI make Shariah compliance decisions?",
    a: "No. AI can support document analysis, missing-information detection, rule-based screening, knowledge retrieval, review summaries and audit preparation — but it should not silently override formal rules or present uncertain findings as final decisions. Shariah decisions remain the responsibility of qualified scholars and governance bodies.",
  },
  {
    q: "What should institutions ask vendors before adopting Shariah-compliant software?",
    a: "Institutions should ask which Islamic finance products are supported today, which features are configurable versus custom-built, whether scholars can review and amend findings, whether source references and a complete audit history are preserved, and how AI suggestions are distinguished from approved decisions.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Shariah-Compliant Banking Software Supports Modern Financial Institutions",
  description:
    "How Shariah-compliant banking software supports modern Islamic financial institutions — governance, contract-level review, and where AI can responsibly help.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/shariah-compliant-banking-software",
  datePublished: "2026-09-13",
  dateModified: "2026-09-13",
  about: [
    { "@type": "Thing", name: "Shariah compliance intelligence" },
    { "@type": "Thing", name: "Islamic finance governance" },
    { "@type": "Thing", name: "AAOIFI standards" },
    { "@type": "Thing", name: "Aylinor" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Shariah-Compliant Banking Software", item: "https://daesontechnologies.online/insights/shariah-compliant-banking-software" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>9 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              How Shariah-Compliant Banking Software Supports Modern Financial Institutions
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Governance, contract-level review, and where artificial intelligence can
              responsibly help — without replacing the humans who make Shariah decisions.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Shariah-compliant banking software is technology designed to help financial
                institutions manage products and operations according to their approved Islamic
                finance structures and governance requirements. The term alone does not guarantee
                certification or regulatory approval — institutions have to evaluate a platform&apos;s
                actual capabilities against their own policies, regulator requirements and
                governance responsibilities.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              Modern Islamic financial institutions operate in an environment where customer
              expectations, regulatory requirements and internal governance processes are
              becoming more complex. A bank may need to manage financing applications, contracts,
              supporting documents, Shariah approvals, internal reviews, audit requests and
              customer communication across several departments.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Without an organized digital system, important information can become fragmented
              across spreadsheets, emails, document folders and disconnected applications. This is
              why Shariah-compliant banking software is becoming an important area of financial
              technology.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>What is Shariah-compliant banking software?</h2>
            <p className="text-[15px] leading-[1.85]">
              A responsible evaluation requires institutions to examine the software&apos;s actual
              capabilities, the relevant contractual structures, internal Shariah policies,
              regulatory requirements, governance responsibilities, data and security controls,
              and human review procedures. Software can support compliance, but institutional
              compliance depends on much more than technology alone.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Why governance must be part of the system</h2>
            <p className="text-[15px] leading-[1.85]">
              Islamic finance depends on governance processes that involve qualified scholars,
              Shariah boards, compliance teams, internal auditors, legal departments, risk teams
              and senior management. A digital system should make collaboration between these
              groups easier — helping organize approved product structures, Shariah board
              decisions, internal policy documents, review assignments, contract versions,
              compliance questions, exceptions, approval records and audit evidence. This reduces
              the risk of important information being lost or difficult to retrieve.
            </p>
            <p className="text-[15px] leading-[1.85]">
              AAOIFI&apos;s published governance standards cover areas including Shariah
              governance frameworks, the Shariah compliance function, internal Shariah audit and
              Shariah decision-making processes.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>The importance of contract-level review</h2>
            <p className="text-[15px] leading-[1.85]">
              Islamic finance products are based on specific contractual structures. A software
              platform should therefore be able to examine more than a customer&apos;s name,
              financing amount or repayment schedule. Depending on the product and institutional
              policy, the review may need to consider contract type, parties involved, asset
              details, ownership sequence, purchase and sale documents, profit disclosure,
              payment terms, promises and undertakings, relevant conditions, supporting evidence
              and approved Shariah references.
            </p>
            <p className="text-[15px] leading-[1.85]">
              A Murabaha workflow, for example, may require a review of whether the relevant
              documentation reflects the institution&apos;s approved process. The exact
              requirements depend on the institution&apos;s Shariah policy, product structure and
              applicable regulatory framework.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Where artificial intelligence can help</h2>
            <p className="text-[15px] leading-[1.85]">
              Artificial intelligence can support Islamic finance teams by reducing repetitive
              document and information-management work. Potential use cases include document
              analysis — extracting information from contracts, applications, policy documents and
              supporting files; missing-information detection — identifying documents or fields
              that appear to be missing from a review package; rule-based screening — checking
              whether selected conditions are present or absent according to configured
              institutional rules; knowledge retrieval — helping authorized users locate relevant
              internal policies, previous decisions and approved references; review summaries —
              preparing structured summaries for qualified reviewers; and audit preparation —
              organizing evidence, review notes, timestamps and decision records into a more
              accessible audit trail.
            </p>
            <p className="text-[15px] leading-[1.85]">
              These use cases require careful design. AI-generated outputs should be traceable,
              reviewable and clearly distinguished from formal Shariah decisions.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Deterministic rules and AI should work together</h2>
            <p className="text-[15px] leading-[1.85]">
              A useful architecture, in general, combines two different capabilities. A
              deterministic layer applies explicit rules and conditions configured by the
              institution — answering questions like whether a required document is present,
              whether a mandatory review step has been completed, whether a selected contract type
              is allowed for a given product, or whether a required field is missing. An AI
              analysis layer can then assist with unstructured information, language, document
              interpretation and knowledge retrieval — identifying potential concerns, explaining
              why a document was flagged, or summarizing relevant material.
            </p>
            <p className="text-[15px] leading-[1.85]">
              In a well-designed system, the AI layer should not silently override formal rules or
              present uncertain findings as final decisions.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>What should institutions ask vendors?</h2>
            <p className="text-[15px] leading-[1.85]">When reviewing Shariah-compliant banking software, financial institutions should ask vendors:</p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.85]">
              <li>Which Islamic finance products are supported today?</li>
              <li>Which features are configurable, and which require custom development?</li>
              <li>Can internal Shariah policies be represented in the system?</li>
              <li>Can scholars review and amend findings?</li>
              <li>Does the platform preserve source references, and is there a complete audit history?</li>
              <li>Can users distinguish AI suggestions from approved decisions?</li>
              <li>How are permissions managed, and where is institutional data hosted?</li>
              <li>Can the platform integrate with existing systems, and what happens when a rule or policy changes?</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              The vendor should answer these questions clearly instead of relying only on broad
              claims about AI or compliance.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Aylinor and the next stage of Shariah compliance intelligence</h2>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> is
              an upcoming platform from Daeson Technologies focused on Shariah compliance
              intelligence for Islamic financial institutions. It is being developed around areas
              such as Murabaha contract analysis, Shariah governance documentation, scholar review
              workflows, compliance audit trails and AI-assisted financial document analysis.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The objective is to help institutions organize compliance-related work and support
              qualified human reviewers with better information and structured workflows. Aylinor
              is not positioned as a replacement for scholars or formal governance bodies — its
              role is to provide technology that can make review, documentation and operational
              coordination more manageable.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Conclusion</h2>
            <p className="text-[15px] leading-[1.85]">
              Shariah-compliant banking software should be evaluated through the combined lens of
              technology, Islamic finance structures, governance, regulation and institutional
              accountability. The most valuable platforms will not simply use Islamic finance
              terminology — they will provide practical tools for contract management,
              documentation, review, auditability and responsible automation. As AI develops, the
              key question will not be whether a system can produce an answer. It will be whether
              the institution can understand, review, verify and govern that answer.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <p className="text-[14px] font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{f.q}</p>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Shariah Compliance Intelligence", "Aylinor", "AAOIFI", "AI Governance"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Need Shariah compliance intelligence, not just banking software?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                Aylinor is being built to support scholars and compliance teams with structured, auditable review.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all" style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}>
                  Talk to Us <ArrowRight size={14} />
                </Link>
                <Link href="/amanah-ai" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all" style={{ border: "1px solid var(--gold-border)", color: "var(--gold)" }}>
                  Explore Aylinor
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>Related Reading</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/insights/islamic-banking-software-guide" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>What Is Islamic Banking Software and Why Does It Matter?</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>Read article <ArrowRight size={11} /></p>
            </Link>
            <Link href="/insights/best-islamic-banking-software-commercial-banks" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>Choosing the Best Islamic Banking Software for Commercial Banks</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>Read more <ArrowRight size={11} /></p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
