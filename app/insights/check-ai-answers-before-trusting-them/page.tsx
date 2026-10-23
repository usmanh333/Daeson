import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/check-ai-answers-before-trusting-them`;
const TITLE = "Can You Trust an AI Answer? 5 Questions to Ask";
const DESCRIPTION =
  "Before using an AI answer at work, check its sources, context, missing information, review requirements, and data-privacy implications.";
const PUBLISHED = "2026-10-23";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "responsible AI use",
    "AI source verification",
    "human oversight AI",
    "AI at work",
    "trusting AI answers",
    "AI risk management",
    "generative AI verification",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Daeson Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "geo.position": "30.3753;69.3451",
    ICBM: "30.3753, 69.3451",
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Responsible AI",
    "article:tag": "responsible AI, AI verification, human oversight, AI at work",
  },
};

const faqs = [
  {
    q: "Why can't I just trust a well-written AI answer?",
    a: "An answer can be well written and still be incorrect, out of context, or missing relevant information. NIST identifies confabulation, the generation of confidently presented but erroneous or false content, as a known risk of generative AI. Fluency is not the same as accuracy.",
  },
  {
    q: "What is the most important question to ask before acting on an AI answer?",
    a: "Whether the answer is suitable for the decision you are about to make. A reasonable-sounding answer for a low-stakes draft may not be reliable enough for a decision involving contracts, compliance, or finances.",
  },
  {
    q: "Does a citation in an AI answer guarantee the claim is correct?",
    a: "No. A citation should be treated as something to inspect, not a guarantee. Check whether the source exists, whether the relevant passage is present, and whether it actually supports the specific statement made.",
  },
  {
    q: "Who should review AI-generated work before it is used?",
    a: "Match the review to the consequences. A basic check may be enough for a low-stakes internal draft. For anything affecting contracts, compliance, finances, or other consequential decisions, a responsible professional should review it before it is acted on.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  about: [
    { "@type": "Thing", name: "responsible AI use" },
    { "@type": "Thing", name: "AI source verification" },
    { "@type": "Thing", name: "human oversight" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
    { "@type": "ListItem", position: 3, name: TITLE, item: URL },
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

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "var(--blue)", border: "1px solid rgba(59,130,246,0.20)" }}>
                Responsible AI
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>October 23, 2026</time></span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Before You Trust an AI Answer, Ask These Five Questions
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              An AI answer can be well written and still require careful checking. For professional work, the
              question is not whether an answer sounds useful. It is whether it is suitable for the decision you
              are about to make.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                NIST identifies confabulation, the generation of confidently presented but erroneous or false
                content, as a risk associated with generative AI. It also addresses privacy, information integrity,
                and the role of human oversight. Before relying on an AI answer, check its source, its context, what
                it might be missing, who needs to review it, and what information you shared to get it.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              1. Where did the answer come from?
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Look for the source behind important claims. If an answer includes a citation, open it. Check whether
              the source exists, whether the relevant passage is present, and whether it supports the specific
              statement.
            </p>
            <p className="text-[15px] leading-[1.85]">Treat a reference as something to inspect, not as a guarantee.</p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              2. Does it apply to this situation?
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A correct statement can still be irrelevant to the task. Check the jurisdiction, date, transaction
              type, audience, and assumptions. Ask whether the answer depends on information that was never
              provided.
            </p>
            <p className="text-[15px] leading-[1.85]">
              If the answer moves from general guidance to a specific conclusion, examine that transition carefully.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              3. What might be missing?
            </h2>
            <p className="text-[15px] leading-[1.85]">
              An answer can summarize the material it has without identifying every document or fact it lacks.
              Before relying on it, ask:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Was the complete document available?</li>
              <li>Were relevant attachments included?</li>
              <li>Is there a newer version?</li>
              <li>Does the task require evidence outside the documents?</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">Missing information should influence how much weight you place on the output.</p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              4. Who needs to review it?
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Match the review process to the consequences. For a low-stakes internal draft, a basic check may be
              appropriate. For an output affecting contracts, compliance, finances, or other consequential
              decisions, identify the responsible professional before acting.
            </p>
            <p className="text-[15px] leading-[1.85]">
              NIST&apos;s AI guidance emphasizes defining responsibilities and oversight arrangements for human–AI
              configurations.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              5. What information are you sharing?
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Before submitting business documents, understand the tool&apos;s data arrangements. Check what
              information is necessary, who can access it, how it is retained, and which organizational rules apply.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Privacy is part of evaluating a tool, not a separate question to consider only after adoption. NIST
              includes data privacy among the risks addressed in its generative-AI profile.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              A useful habit: verify before acting
            </h2>
            <p className="text-[15px] leading-[1.85]">
              AI can be part of professional work without becoming the final authority. A practical routine is:
              inspect the source, check the context, identify missing information, and confirm who is responsible
              for the decision.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The purpose is not to distrust every output. It is to know what has been checked before the output
              becomes an action.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Further reading
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The{" "}
              <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "var(--blue)" }}>
                NIST Generative AI Profile
              </a>{" "}
              is a general resource on evaluating AI risks, including confabulation, privacy, and information
              integrity. It is referenced here as background reading, not as a certification of any product.
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

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Expert-led AI workflows
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Read more about Daeson Technologies&apos; approach to focused software and{" "}
                <Link href="/insights/shariah-compliance-ai-expert-review" className="underline underline-offset-2" style={{ color: "var(--blue)" }}>
                  expert-led Shariah compliance AI
                </Link>
                .
              </p>
              <Link href="/contact" className="btn-solid inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl">
                Talk to Daeson Technologies <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
