import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, Check } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/why-customers-frustrated-conventional-banking`;
const TITLE = "Why Are People Fed Up With Conventional Banking?";
const DESCRIPTION =
  "Customers aren't rejecting banks. They're tired of slow processes, unclear fees, failing apps and weak support. Why, and how banks rebuild trust.";
const PUBLISHED = "2026-11-15";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "banking customer experience",
    "why customers are unhappy with banks",
    "bank customer frustration",
    "digital banking problems",
    "banking app complaints",
    "customer trust in banks",
    "Islamic banking customer trust",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: { type: "article", title: TITLE, description: DESCRIPTION, url: URL, siteName: "Daeson Technologies", publishedTime: PUBLISHED },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Banking",
    "article:tag": "banking customer experience, digital banking, customer trust",
  },
};

const faqs = [
  { q: "Why are customers frustrated with conventional banks?", a: "Most customers are not rejecting banking itself. They are frustrated with slow processes, repeated verification, failed transactions without explanation, confusing fees, apps that crash or log them out, and slow complaint handling." },
  { q: "Why does customer experience matter so much in banking?", a: "Banking depends on trust. Customers trust a bank with their money, data and daily transactions. A customer may tolerate one error, but repeated failures quickly reduce trust and push them to look for alternatives." },
  { q: "How can banks improve customer experience?", a: "By simplifying onboarding, disclosing fees clearly, making payments reliable with visible status updates, offering human support when digital support fails, resolving complaints quickly, and testing and improving apps continuously based on customer feedback." },
  { q: "Should banks add more features to their apps?", a: "Not as a first priority. The goal should be making everyday banking easier, clearer and more dependable. Reliable core journeys such as login, transfers and bill payments matter more than new features." },
  { q: "What does customer trust mean for Islamic banks?", a: "For Islamic banks, trust also depends on Shariah confidence: customers want to know their financing is properly reviewed, documented and governed." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  publisher: { "@id": `${SITE}/#organization` },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "en",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable", ".answer-capsule"] },
  about: [
    { "@type": "Thing", name: "Banking customer experience" },
    { "@type": "Thing", name: "Digital banking" },
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

const frustrations = [
  "Long account-opening processes",
  "Repeated identity verification",
  "Failed transactions without clear explanations",
  "Slow customer support",
  "Confusing fees and charges",
  "Apps that crash, freeze or log users out",
  "Difficulty adding beneficiaries or making payments",
  "Poor complaint handling",
  "No transparency about delays",
];

const fixes = [
  ["Long, repetitive onboarding", "Simple onboarding with fewer unnecessary steps"],
  ["Confusing fees", "Clear pricing and fee disclosure"],
  ["Failed payments, no explanation", "Reliable payments with visible transaction status"],
  ["Chatbot loops", "Human support when digital support fails"],
  ["Complaints that go nowhere", "Fast, tracked complaint resolution"],
  ["Apps that break after updates", "Continuous app testing and improvement"],
  ["Decisions made internally", "Customer feedback built into product decisions"],
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)", border: "1px solid var(--blue-border)" }}>
                Banking
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>5 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>15 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              {TITLE}
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Many people are not rejecting banking itself. They are frustrated with slow processes, poor
              communication, hidden complexity and digital experiences that do not work reliably.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Customers are frustrated by everyday friction: slow onboarding, failed payments, confusing fees,
                unreliable apps and weak support. Because banking runs on trust, repeated friction erodes that trust
                faster than in almost any other industry.
              </p>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>The customer expectation has changed</h2>
            <p className={P}>
              Customers now compare their bank with the apps they use every day. They expect fast payments, clear
              screens, simple onboarding, instant support and no repeated failures. When a bank app fails during a
              payment or login, customers do not see an internal systems issue. They see a service that did not work
              when they needed it.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Common frustrations</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {frustrations.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl p-4 text-[13.5px]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <X size={15} className="mt-0.5 shrink-0" style={{ color: "#DC2626" }} />
                  {f}
                </div>
              ))}
            </div>
            <p className={P}>
              These problems create a feeling that the bank is difficult to deal with, even when the underlying
              product may be sound.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Trust is the real issue</h2>
            <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-strong)" }}>
              <p className="text-[20px] md:text-[22px] font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                A customer may tolerate one error. Repeated errors make them look for alternatives.
              </p>
            </div>
            <p className={P}>
              Banking depends on trust. Customers trust a bank with their money, personal data, financial plans and
              daily transactions. When service is unreliable, that trust decreases quickly.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>How conventional banking can improve</h2>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
              <table className="w-full text-left text-[13.5px] min-w-[520px]">
                <thead>
                  <tr style={{ backgroundColor: "var(--bg-elevated)" }}>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>Today&apos;s friction</th>
                    <th className="px-2 py-4" aria-hidden />
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>What good looks like</th>
                  </tr>
                </thead>
                <tbody>
                  {fixes.map(([from, to]) => (
                    <tr key={from} style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-5 py-4">{from}</td>
                      <td className="px-2 py-4" aria-hidden><ArrowRight size={14} style={{ color: "var(--text-faint)" }} /></td>
                      <td className="px-5 py-4" style={{ color: "var(--text-primary)" }}>
                        <span className="inline-flex items-start gap-2"><Check size={14} className="mt-0.5 shrink-0" style={{ color: "#16A34A" }} />{to}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              The goal should not be to add more features. It should be to make everyday banking easier, clearer and
              more dependable.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Where Aylinor fits</h2>
            <p className={P}>
              For Islamic banks and financial institutions, customer trust also depends on Shariah confidence.
              Customers want to know that their financing is properly reviewed, documented and governed.{" "}
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>Aylinor</Link>{" "}
              supports Shariah review teams by making the review process more structured and traceable, with
              audit-ready records. This helps institutions build trust through transparency and accountability.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[14.5px] leading-[1.8]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Building banking technology?</p>
              <p className="text-[14px] mb-5">
                Read{" "}
                <Link href="/insights/pakistani-banking-apps-negative-feedback" className="underline underline-offset-2" style={{ color: "var(--blue)" }}>
                  why many banking apps receive negative feedback
                </Link>{" "}
                and what good digital banking looks like.
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
