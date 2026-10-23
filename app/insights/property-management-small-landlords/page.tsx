import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/property-management-small-landlords`;
const TITLE = "Home1.0: Property Management for Small Landlords";
const DESCRIPTION =
  "Managing a few rentals? Discover Home1.0's approach to organizing leasing, payment information, maintenance, and tenant communication.";
const PUBLISHED = "2026-10-23";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "rental-property organization",
    "landlord software",
    "tenant communication",
    "maintenance tracking",
    "property management small landlords",
    "Home 1.0",
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
    "article:section": "PropTech",
    "article:tag": "Home 1.0, landlord software, property management, small landlords",
  },
};

const faqs = [
  {
    q: "Is Home1.0 only for large property portfolios?",
    a: "No. Home1.0 is designed so a small landlord can start with one property, organize the essential records, and introduce additional workflows as they become comfortable, without needing to redesign their entire operation first.",
  },
  {
    q: "What does Home1.0 help a landlord manage?",
    a: "Home1.0 brings together listings, applications, leasing, payment access, maintenance, and tenant communication so records for a property and tenancy stay connected in one place.",
  },
  {
    q: "What should I check before choosing property management software?",
    a: "Ask whether you can find the information you need without extensive training, whether you can tell what is pending, whether the process will work for your tenants, what payment options are available in your market, and what the complete service will cost.",
  },
  {
    q: "Where should a small landlord start?",
    a: "Start with the task that causes the most repeated searching or follow-up, such as locating the current lease, checking payment status, or tracking a maintenance request. Fix that first before adding more workflows.",
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
    { "@type": "Thing", name: "property management for small landlords" },
    { "@type": "Thing", name: "landlord software" },
    { "@type": "Thing", name: "Home 1.0" },
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
                PropTech
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>October 23, 2026</time></span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Managing a Few Rental Properties Shouldn&apos;t Feel Like a Second Full-Time Job
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A small rental portfolio does not always mean a small administrative workload. The goal of
              property-management software should be simple: help landlords keep the everyday work organized
              without adding unnecessary complexity.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <p className="text-[15px] leading-[1.85]">
              Even one property can involve applications, lease documents, payment records, maintenance requests,
              and ongoing tenant communication. When those tasks live in separate places, answering a simple
              question can become a search exercise.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Did the tenant report the problem last week? Which lease version was signed? Has the payment record
              been updated?
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Start with the tasks you repeat
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Before choosing any tool, write down what you need to manage each month. For a small landlord, a
              practical starting list might include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Keeping property and tenant details organized.</li>
              <li>Finding the current lease and related documents.</li>
              <li>Checking payment information.</li>
              <li>Tracking maintenance requests.</li>
              <li>Keeping communication connected to the right tenancy.</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              You do not need to redesign your entire business to improve these routines. Start with the task that
              causes the most repeated searching or follow-up.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Keep the property history connected
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Imagine receiving a message about a repair while you are at work. The first question is not
              necessarily who should fix it. You may first need to identify the property, check whether the issue
              was reported previously, and find the details already shared.
            </p>
            <p className="text-[15px] leading-[1.85]">
              A connected record gives you a place to return to. Instead of rebuilding the story from scattered
              messages, you can review what has been recorded and decide what needs to happen next.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The same principle applies to leasing and payment information: clear records make the next action
              easier to identify.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Where Home1.0 fits
            </h2>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/home-1-0" className="underline underline-offset-2" style={{ color: "var(--blue)" }}>
                Home1.0
              </Link>{" "}
              is Daeson Technologies&apos; property-management platform, bringing together listings, applications,
              leasing, payment access, maintenance, and tenant communication.
            </p>
            <p className="text-[15px] leading-[1.85]">
              For a small landlord, the intended benefit is not having more software to manage. It is having a
              clearer place to handle the work that already exists.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The right starting point will depend on your current setup. You might begin with one property,
              organize the essential records, and introduce additional workflows as you become comfortable.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Choose clarity over complexity
            </h2>
            <p className="text-[15px] leading-[1.85]">
              When assessing a property-management platform, ask practical questions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Can I find the information I need without extensive training?</li>
              <li>Can I understand what is pending?</li>
              <li>Will the process work for my tenants?</li>
              <li>What payment options and integrations are available in my market?</li>
              <li>What will the complete service cost?</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              A platform should fit your operating needs, not require you to become a larger business before it
              becomes useful.
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
                Explore Home1.0
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Or contact Daeson Technologies to discuss your rental-management workflow and available
                capabilities.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/home-1-0" className="btn-solid inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl">
                  Explore Home1.0 <ArrowRight size={14} />
                </Link>
                <Link
                  href="/insights/fix-workflow-before-buying-software"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium px-2 py-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Read: Fix your workflow before buying software
                </Link>
              </div>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
