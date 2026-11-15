import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowDown, AlertTriangle, CheckCircle2, Smartphone } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/pakistani-banking-apps-negative-feedback`;
const TITLE = "Why Pakistani Banking Apps Get Negative Reviews";
const HEADLINE = "Why Pakistani Banking Apps Often Receive Negative Feedback";
const DESCRIPTION =
  "Slow apps, failed transactions and weak support drive negative banking app reviews in Pakistan. The causes, and what good digital banking needs.";
const PUBLISHED = "2026-11-15";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Pakistani banking apps",
    "banking app reviews Pakistan",
    "mobile banking problems Pakistan",
    "digital banking Pakistan",
    "SBP Sunwai",
    "banking app development",
    "fintech Pakistan",
    "bank app user experience",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: { type: "article", title: HEADLINE, description: DESCRIPTION, url: URL, siteName: "Daeson Technologies", publishedTime: PUBLISHED, locale: "en_PK" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "geo.position": "30.3753;69.3451",
    ICBM: "30.3753, 69.3451",
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Banking",
    "article:tag": "Pakistan banking apps, digital banking, SBP Sunwai, banking UX",
  },
};

const faqs = [
  { q: "Why do Pakistani banking apps get negative reviews?", a: "Common complaints in public app reviews include slow performance, login problems, OTP failures, transaction errors, missing features, confusing navigation and slow support. For many customers the app is the bank, so these failures shape their view of the whole institution." },
  { q: "Is having in-house developers enough to build a good banking app?", a: "No. A reliable banking app also needs product management, user experience design, quality assurance and testing, cybersecurity, cloud and data infrastructure, performance monitoring, support integration and continuous improvement, with a clear owner accountable for customer outcomes." },
  { q: "What is SBP Sunwai?", a: "Sunwai is the State Bank of Pakistan's customer complaint portal and app, which lets customers lodge complaints against banks, microfinance banks and development finance institutions." },
  { q: "What does a good banking app look like?", a: "It loads quickly and works reliably, makes common actions such as transfers, bill payments and card management easy, explains errors clearly, shows transaction status, offers accessible support, protects customers without unnecessary friction, and improves continuously based on real user feedback." },
  { q: "Should banks stop building apps in-house?", a: "Not necessarily. Banks need the right leadership, processes and accountability, whether they build in-house, with a partner or both. Technology should be treated as a core business capability." },
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
  dateModified: PUBLISHED,
  inLanguage: "en",
  spatialCoverage: { "@type": "Country", name: "Pakistan" },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable", ".answer-capsule"] },
  about: [
    { "@type": "Thing", name: "Mobile banking" },
    { "@type": "Thing", name: "Digital banking in Pakistan" },
    { "@type": "Organization", name: "State Bank of Pakistan" },
  ],
  citation: ["https://play.google.com/store/apps/details?id=com.sbp.sbp_complaints_management"],
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

const capabilities = [
  "Product management",
  "User experience design",
  "Software engineering",
  "Quality assurance and testing",
  "Cybersecurity",
  "Cloud and data infrastructure",
  "Performance monitoring",
  "Customer support integration",
  "Analytics and continuous improvement",
];

const warnings = [
  "Features built around internal processes instead of customer journeys",
  "No clear owner responsible for app performance",
  "Limited testing across devices, networks and user scenarios",
  "Security controls that make simple actions unnecessarily difficult",
  "No monitoring of crashes, failed payments or drop-offs",
  "Slow response to customer complaints and app-store feedback",
  "No continuous improvement cycle after launch",
];

const good = [
  "Loads quickly and works reliably",
  "Makes transfers, bill payments and card management easy",
  "Explains errors clearly",
  "Shows visible transaction status",
  "Offers accessible customer support",
  "Protects customers without unnecessary friction",
  "Improves continuously from real user feedback",
];

const cycle = ["Build", "Test", "Release", "Monitor", "Listen", "Improve"];

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
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>7 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>15 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              {HEADLINE}
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Customers expect reliable, simple and secure digital banking. Too often they get slow performance,
              failed transactions, confusing flows and weak support.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Many Pakistani banking apps receive negative feedback because they are built as an extension of branch
                banking rather than as a core digital product. Not every bank has this problem, but the fix is the
                same: product ownership, engineering discipline, real testing and accountability for customer outcomes.
              </p>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Customers judge the app, not the bank</h2>
            <div className="flex items-start gap-4 rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-strong)" }}>
              <Smartphone size={22} className="shrink-0 mt-1" style={{ color: "var(--text-primary)" }} />
              <p className="text-[17px] font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                For many customers, the mobile app is the bank.
              </p>
            </div>
            <p className={P}>
              If the app is slow, crashes, fails to send an OTP or cannot complete a payment, the customer&apos;s
              impression of the bank suffers immediately. Public app-store reviews frequently mention slow
              performance, login problems, missing features, transaction errors, poor navigation and difficulty with
              common tasks such as adding payees.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Banking and technology are different skills</h2>
            <p className={P}>
              A bank may be strong in credit, risk, compliance, branch operations and customer relationships. Building a
              reliable digital product needs a different set of capabilities:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {capabilities.map((c) => (
                <div key={c} className="rounded-xl p-4 text-[13px] font-medium" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                  {c}
                </div>
              ))}
            </div>
            <p className={P}>
              Having developers is not enough. A bank needs product leadership, engineering discipline, a testing
              culture and accountability for customer outcomes.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>The real problem: building without a product strategy</h2>
            <p className={P}>
              Some institutions build technology without a clear product owner, experienced technology leadership or a
              proper testing process. The result can be an app that is released quickly but does not perform well in
              real life. Warning signs include:
            </p>
            <ul className="space-y-2.5">
              {warnings.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-xl p-4 text-[14px]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <AlertTriangle size={16} className="mt-0.5 shrink-0" style={{ color: "#D97706" }} />
                  {w}
                </li>
              ))}
            </ul>
            <p className={P}>
              A bank does not need to abandon in-house development. It needs the right leadership, processes and
              accountability, and a continuous improvement loop after launch:
            </p>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <ol className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2">
                {cycle.map((c, i) => (
                  <li key={c} className="flex flex-col sm:flex-row items-center gap-2">
                    <span className="px-4 py-2 rounded-full text-[13px] font-semibold" style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}>{c}</span>
                    {i < cycle.length - 1 && (
                      <span aria-hidden style={{ color: "var(--text-faint)" }}>
                        <ArrowDown size={14} className="sm:hidden" />
                        <ArrowRight size={14} className="hidden sm:block" />
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="text-center text-[12px] mt-4" style={{ color: "var(--text-faint)" }}>…then repeat</p>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>What regulators are watching</h2>
            <p className={P}>
              The State Bank of Pakistan runs{" "}
              <a href="https://play.google.com/store/apps/details?id=com.sbp.sbp_complaints_management" target="_blank" rel="noopener" className="underline underline-offset-2" style={{ color: "var(--blue)" }}>
                Sunwai
              </a>
              , a customer complaint portal and app that lets customers lodge complaints against banks, microfinance
              banks and development finance institutions. Digital customer experience is no longer a side issue; it is
              becoming a core measure of banking quality.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>What good digital banking looks like</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {good.map((g) => (
                <li key={g} className="flex items-start gap-3 rounded-xl p-4 text-[14px]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#16A34A" }} />
                  {g}
                </li>
              ))}
            </ul>
            <p className={P}>
              The best banks will not win because they have the most features. They will win because their apps work
              when customers need them most.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Our view</h2>
            <p className={P}>
              Daeson Technologies believes financial institutions need technology built with the same discipline as
              modern digital products: clear workflows, strong testing, user-centred design and continuous improvement.{" "}
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>Aylinor</Link>{" "}
              applies this approach to Shariah review and compliance.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[14.5px] leading-[1.8]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Building or fixing a financial app?</p>
              <p className="text-[14px] mb-5">
                See{" "}
                <Link href="/expertise" className="underline underline-offset-2" style={{ color: "var(--blue)" }}>our expertise</Link>{" "}
                in custom software built to bank-grade security standards.
              </p>
              <Link href="/contact" className="btn-solid inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl">
                Book a discovery call <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
