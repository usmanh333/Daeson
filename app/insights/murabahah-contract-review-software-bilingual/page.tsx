import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/murabahah-contract-review-software-bilingual`;
const TITLE = "Murabahah Contract Review: Keeping Scholars in Control";
const HEADLINE = "Murabahah Contract Review: How Technology Supports Shariah Compliance Without Replacing Scholars";
const DESCRIPTION =
  "What Murabahah contract review involves, why documentation in two languages adds risk, and how technology can help while scholars keep the decision.";
const PUBLISHED = "2026-11-05";
const MODIFIED = "2026-11-15";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Murabahah contract review",
    "Murabaha contract review software",
    "Murabahah Shariah compliance",
    "Islamic finance document review",
    "Shariah governance",
    "Islamic fintech",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: { type: "article", title: HEADLINE, description: DESCRIPTION, url: URL, siteName: "Daeson Technologies" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "article:published_time": PUBLISHED,
    "article:modified_time": MODIFIED,
    "article:author": "Daeson Technologies",
    "article:section": "Islamic Finance",
    "article:tag": "Murabahah, contract review, Shariah governance, Islamic finance",
  },
};

const faqs = [
  { q: "What does Murabahah contract review involve?", a: "Murabahah contract review checks a cost-plus-profit sale contract and its supporting documentation against Shariah standards, institutional policy and applicable regulation, so that anything needing clarification, correction or scholarly attention is resolved before approval." },
  { q: "Why does language matter in Murabahah review?", a: "In many markets Murabahah documentation exists in both Arabic and English, sometimes drafted in one language and reviewed in the other. Reviewers need to be confident that both versions say the same thing, because a difference in wording can change the meaning of a term." },
  { q: "Can AI make a Murabahah compliance decision?", a: "No. Technology can reduce the administrative work around a review, but the decision on Shariah compliance remains with qualified scholars and the institution's governance structures." },
  { q: "What record should a Murabahah review leave behind?", a: "A clear record of what was reviewed, what was decided, by whom and when. This supports internal governance, the Shariah board and external audit." },
  { q: "Is Aylinor available to institutions today?", a: "Aylinor is in private preview. Full platform access is available to institutions on request." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  publisher: { "@id": `${SITE}/#organization` },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: "en",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable", ".answer-capsule"] },
  about: [
    { "@type": "Thing", name: "Murabahah" },
    { "@type": "Thing", name: "Shariah compliance" },
    { "@type": "Thing", name: "Shariah governance" },
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
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const roles = [
  { who: "Technology", does: "Reduces administrative work and keeps records organised" },
  { who: "Shariah reviewer", does: "Examines the documentation and prepares the matter" },
  { who: "Shariah board", does: "Makes the Shariah decision" },
  { who: "Institution", does: "Remains accountable for implementation" },
];

const vendorQuestions = [
  "Does the system keep scholars as the final authority on every Shariah decision?",
  "Does it leave a clear, auditable record of what was reviewed and decided?",
  "Does it work with the languages your documentation actually uses?",
  "How is sensitive contract data protected, and who can access it?",
  "Is the vendor open about what the system cannot do?",
];

const H2 = "text-[24px] font-bold tracking-tight pt-4";
const P = "text-[15px] leading-[1.85]";

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
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>Updated <time dateTime={MODIFIED}>15 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              {HEADLINE}
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Murabahah is one of the most widely used Islamic financing structures. Reviewing it well is less about
              speed and more about consistency, clear records and keeping scholars in control.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Murabahah contract review checks a cost-plus sale and its documents against Shariah standards,
                institutional policy and regulation. Technology can reduce the administrative work around that review,
                but the Shariah decision always stays with qualified scholars.
              </p>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>What Murabahah review involves</h2>
            <p className={P}>
              In a Murabahah, the institution buys an asset and sells it to the customer at a disclosed, agreed profit,
              usually paid in instalments. A review confirms that the contract and its supporting documents reflect a
              valid sale, that terms are clear and consistent, and that the transaction follows the institution&apos;s
              approved Shariah position and applicable regulation.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Why it is a natural place to start</h2>
            <p className={P}>
              Institutions process a high volume of broadly similar Murabahah contracts. That volume makes the work
              around each review, gathering documents, tracking versions, and recording decisions, a real burden on
              scarce scholarly time. It is a sensible place to bring more structure, compared with bespoke or heavily
              negotiated transactions.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Two languages, one meaning</h2>
            <p className={P}>
              In many markets Murabahah documentation exists in both Arabic and English, sometimes drafted in one
              language and reviewed by a team working mainly in the other. A term that reads as standard in one version
              can carry a different nuance in the other. Reviewers need confidence that both versions say the same
              thing, because the documentation is what the institution will be held to.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Who does what</h2>
            <ol>
              {roles.map((r, i) => (
                <li key={r.who}>
                  <div className="flex items-center justify-between gap-4 rounded-2xl px-6 py-5" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <span className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>{r.who}</span>
                    <span className="text-[13.5px] text-right">{r.does}</span>
                  </div>
                  {i < roles.length - 1 && <div aria-hidden className="flex justify-center py-1.5" style={{ color: "var(--gold)" }}><ArrowDown size={16} /></div>}
                </li>
              ))}
            </ol>
            <p className={P}>
              The simplest useful principle for technology in Shariah governance is this: machines can assist, scholars
              decide, institutions remain accountable.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Leave a clear record</h2>
            <p className={P}>
              Every review should leave behind a record of what was reviewed, what was decided, by whom and when.
              Without it, the history has to be rebuilt from emails and meeting notes, which is slower and less reliable
              for the Shariah board, regulators and auditors.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Where Aylinor fits</h2>
            <p className={P}>
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>Aylinor</Link>{" "}
              is Daeson Technologies&apos; AI-powered Shariah compliance and governance platform for Islamic financial
              institutions. It helps Shariah teams work in a more organised, consistent and auditable way, while
              scholars keep the final decision. It is in private preview, with access available to institutions on
              request.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Questions to ask any vendor</h2>
            <ul className="space-y-2.5">
              {vendorQuestions.map((q) => (
                <li key={q} className="flex items-start gap-3 rounded-xl p-4 text-[14px]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                  {q}
                </li>
              ))}
            </ul>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Conclusion</h2>
            <p className={P}>
              Murabahah review is a strong place to bring more structure to Shariah work, because the volume is high and
              the task is well understood. The institutions that benefit most use technology to reduce the work around
              the decision, never to shortcut the scholarly judgment the process exists to protect.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[14.5px] leading-[1.8]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Interested in Aylinor?</p>
              <p className="text-[14px] mb-5">
                Request a private walkthrough, or read{" "}
                <Link href="/insights/islamic-banking-software-ai-governance" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                  how AI fits into Islamic banking software
                </Link>.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90" style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}>
                Request a walkthrough <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
