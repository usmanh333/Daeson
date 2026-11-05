import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/murabahah-contract-review-software-bilingual`;
const TITLE = "Murabahah Contract Review: AI in English and Arabic";
const DESCRIPTION =
  "How AI-assisted Murabahah contract review supports bilingual document analysis, issue flags, supporting references, and reviewer workflow, with human oversight.";
const PUBLISHED = "2026-11-05";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Murabahah contract review software",
    "Murabaha contract review software",
    "Islamic finance document review AI",
    "Arabic English contract analysis",
    "Shariah reviewer workflow",
    "Islamic fintech documentation",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: { type: "article", title: TITLE, description: DESCRIPTION, url: URL, siteName: "Daeson Technologies" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Islamic Finance",
    "article:tag": "Murabahah, contract review, Aylinor, bilingual document analysis",
  },
};

const faqs = [
  { q: "What does Murabahah contract review involve?", a: "Murabahah contract review involves checking a cost-plus-profit sale contract and its supporting documentation against Shariah standards, institutional policy, and applicable regulatory requirements, to identify anything that needs clarification, correction, or scholarly attention before approval." },
  { q: "Why does bilingual review matter for Murabahah documents?", a: "Murabahah documentation in many markets exists in both Arabic and English, sometimes with material drafted in one language and reviewed by teams working primarily in the other. Software that can analyse both languages reduces the risk of relevant content being missed because it was reviewed in only one language." },
  { q: "What is an issue flag in this context?", a: "An issue flag is a point in a document that a review system has identified as warranting closer human attention, for example wording that differs from an approved template or a clause that appears inconsistent with a referenced standard. A flag is a prompt for review, not a finding of non-compliance." },
  { q: "Can AI finalise a Murabahah compliance decision?", a: "No. AI-assisted review can prepare material for a reviewer: locating relevant clauses, comparing language, and surfacing supporting references. The decision on Shariah compliance remains with qualified reviewers and governance structures." },
  { q: "What should a reviewer workflow for Murabahah contracts include?", a: "At minimum, a clear record of what was submitted, what was flagged, what correction or clarification was made, who reviewed it, and when it was approved. This supports both internal governance and external audit." },
  { q: "Is Aylinor available for institutions to use today?", a: "Aylinor is in private preview. Daeson Technologies' current priority is evaluating its usefulness and limitations with experienced practitioners and institutions before wider release." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Murabahah Contract Review: How AI Supports Shariah Compliance in English and Arabic",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  about: [
    { "@type": "Thing", name: "Murabahah contract review" },
    { "@type": "Thing", name: "bilingual document review" },
    { "@type": "Thing", name: "Aylinor" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
    { "@type": "ListItem", position: 3, name: "Murabahah Contract Review: How AI Supports Shariah Compliance in English and Arabic", item: URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(212,175,55,0.05) 0%, transparent 70%)" }} />
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
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>5 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Murabahah Contract Review: How AI Supports Shariah Compliance in English and Arabic
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Murabahah documentation often moves between English and Arabic, across different teams and
              reviewers. Reviewing it consistently in both languages is a specific, solvable problem.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                AI-assisted Murabahah contract review can help locate relevant clauses, flag wording that deserves
                attention, and surface supporting references in both English and Arabic, giving reviewers a
                structured starting point. It does not determine Shariah compliance; that remains with qualified
                reviewers and governance bodies.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Why Murabahah documentation is a natural starting point
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Murabahah, a cost-plus-profit sale structure, is one of the most widely used Islamic financing
              arrangements, which means institutions process a high volume of broadly similar contracts. That
              volume, combined with a relatively standardised document structure, makes Murabahah review a
              practical place to introduce structured, AI-assisted workflows, compared with more bespoke or
              highly negotiated transaction types.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The bilingual review problem
            </h2>
            <p className="text-[15px] leading-[1.85]">
              In many markets, Murabahah contracts and supporting policy material exist in both Arabic and
              English, sometimes drafted in one language and reviewed primarily in the other. This creates a real
              risk: a clause that reads as standard in one language may carry a different nuance in the other, and
              a reviewer working mainly in one language can miss that difference. Software that can analyse both
              languages side by side reduces this risk by surfacing the same issue regardless of which language a
              reviewer is more comfortable in.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What issue flags and supporting references actually do
            </h2>
            <p className="text-[15px] leading-[1.85]">
              An issue flag marks a point in a document that deserves closer human attention, wording that departs
              from an approved template, a clause inconsistent with a referenced standard, or a term that appears
              in one version of a contract but not another. A supporting reference points the reviewer to the
              relevant internal policy, approved standard, or prior ruling.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Neither of these is a conclusion. A flag says &ldquo;look here&rdquo;, and a reference says &ldquo;this
              material may be relevant&rdquo;. The reviewer still needs to confirm whether the reference actually
              supports the point, whether it applies to this specific transaction, and whether any local or
              institutional requirement changes the answer.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Designing a reviewer workflow around this
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A useful reviewer workflow for Murabahah documentation tracks the full lifecycle of a review:
              submission, automated flags and references presented to the reviewer, the reviewer&apos;s
              assessment, any correction made to the document, re-review of the correction, and final approval.
              Each step should be recorded, so the institution has a complete audit trail rather than having to
              reconstruct the history from emails after the fact.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Human oversight is the design principle, not an afterthought
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The industry&apos;s simplest useful principle for AI in Shariah governance is that machines can
              assist, scholars decide, and institutions remain accountable. For Murabahah review specifically,
              this means AI handles the repetitive work, locating clauses, comparing language, retrieving
              references, while the actual determination of whether a contract meets Shariah requirements stays
              with the people responsible for that judgment.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Where Aylinor fits
            </h2>
            <p className="text-[15px] leading-[1.85]">
              This is the approach behind{" "}
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                Aylinor
              </Link>
              , Daeson Technologies&apos; Arabic&ndash;English AI platform for Shariah-compliance documentation,
              starting with Murabahah contract review. The product is in private preview, and our current priority
              is evaluating its usefulness and limitations with experienced practitioners and Islamic banks before
              wider release.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Questions to ask before adopting Murabahah review software
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Does the system genuinely analyse both Arabic and English, or only one with translation layered on top?</li>
              <li>Are issue flags and references presented as prompts for review, or as automatic conclusions?</li>
              <li>Is there a complete audit trail from submission through correction to approval?</li>
              <li>How is sensitive contract data protected and who can access it?</li>
              <li>What does the vendor say about the limits of what the system can determine on its own?</li>
            </ul>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Conclusion
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Murabahah contract review is a strong early use case for AI-assisted Islamic finance documentation,
              precisely because the task is bounded and the volume is high. The institutions that get the most
              value treat AI as a way to prepare material faster for human reviewers, not as a shortcut past the
              scholarly judgment the process exists to protect.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Frequently asked questions
            </h2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[17px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[15px] leading-[1.85]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Interested in reviewing Aylinor&apos;s approach?</p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Contact Daeson Technologies to request an introductory demonstration, or read{" "}
                <Link href="/insights/islamic-banking-software-ai-governance" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                  how AI fits into Islamic banking software
                </Link>{" "}
                more broadly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
              >
                Request a demonstration <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
