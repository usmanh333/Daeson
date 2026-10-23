import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/fix-workflow-before-buying-software`;
const TITLE = "Before Buying Another App, Fix Your Workflow";
const DESCRIPTION =
  "Before adding another business app, map the handoffs, responsibilities, and information gaps that slow down your daily work.";
const PUBLISHED = "2026-10-23";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "connected workflows",
    "software selection",
    "workflow automation",
    "business process clarity",
    "business workflow improvement",
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
    "article:section": "Enterprise Software",
    "article:tag": "workflow automation, software selection, connected workflows",
  },
};

const faqs = [
  {
    q: "Why does adding a new app sometimes make work harder, not easier?",
    a: "A new app can make a task easier, but it can also become another place a team has to check. If the real difficulty is an unclear handoff rather than a missing feature, adding another tool does not fix the underlying problem.",
  },
  {
    q: "How do I find where a workflow actually gets stuck?",
    a: "Choose a real task, such as a maintenance request, a sales enquiry, or a document review, and write down its journey: where it arrives, who takes responsibility, what information they need, what happens next, and who confirms it is complete. Describe what actually happened last time, not how the process is supposed to work.",
  },
  {
    q: "What makes a handoff clear instead of vague?",
    a: "A clear handoff identifies a responsible person, the expected action, and the information needed to complete it. \"Review this document and record any questions before the client meeting\" is more actionable than \"Please see attached.\"",
  },
  {
    q: "Should I automate a process or fix it first?",
    a: "Automation is most useful when you can explain the process clearly enough to define its rules and exceptions. If you cannot answer what starts the process, what information is required, and what happens if information is incomplete, clarify the workflow before automating it.",
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
    { "@type": "Thing", name: "business workflow improvement" },
    { "@type": "Thing", name: "software selection" },
    { "@type": "Thing", name: "workflow automation" },
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
                Enterprise Software
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>October 23, 2026</time></span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Your Business May Not Need Another App&mdash;It May Need a Better Workflow
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A new app can make a task easier. It can also become another place your team has to check. Before
              introducing another tool, it is worth asking a different question: where does the work actually get
              stuck?
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <p className="text-[15px] leading-[1.85]">
              Perhaps an enquiry arrives, but nobody owns the next step. Perhaps a document is ready, but the
              reviewer does not know it exists. Perhaps a customer receives a reply, but the decision never reaches
              the person who updates the record.
            </p>
            <p className="text-[15px] leading-[1.85]">
              In each example, the difficulty is not necessarily a missing feature. It is an unclear handoff.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Follow one piece of work from beginning to end
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Choose a real task: a maintenance request, a sales enquiry, or a document review. Then write down
              its journey:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Where does it arrive?</li>
              <li>Who takes responsibility?</li>
              <li>What information do they need?</li>
              <li>What happens next?</li>
              <li>Who confirms it is complete?</li>
            </ol>
            <p className="text-[15px] leading-[1.85]">
              Avoid describing how the process is supposed to work. Describe what actually happened last time.
            </p>
            <p className="text-[15px] leading-[1.85]">
              That exercise can reveal where information is copied, where decisions are delayed, and where nobody
              knows the current status.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Give every handoff an owner and an outcome
            </h2>
            <p className="text-[15px] leading-[1.85]">
              &ldquo;Sent to the team&rdquo; is not the same as &ldquo;assigned.&rdquo;
            </p>
            <p className="text-[15px] leading-[1.85]">
              A clearer handoff identifies a responsible person, the expected action, and the information needed to
              complete it.
            </p>
            <p className="text-[15px] leading-[1.85]">For example:</p>
            <blockquote className="pl-4" style={{ borderLeft: "2px solid var(--border-strong)" }}>
              <p className="text-[15px] leading-[1.85] italic">
                &ldquo;Review this document and record any questions before the client meeting.&rdquo;
              </p>
            </blockquote>
            <p className="text-[15px] leading-[1.85]">That is more actionable than:</p>
            <blockquote className="pl-4" style={{ borderLeft: "2px solid var(--border-strong)" }}>
              <p className="text-[15px] leading-[1.85] italic">&ldquo;Please see attached.&rdquo;</p>
            </blockquote>
            <p className="text-[15px] leading-[1.85]">The tool matters, but the instruction and responsibility matter too.</p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Improve the process before automating it
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Automation is most useful when you can explain the process clearly enough to define its rules and
              exceptions. Before automating a task, ask:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>What starts the process?</li>
              <li>Which information is required?</li>
              <li>What can happen automatically?</li>
              <li>Which decisions need approval?</li>
              <li>What happens if the information is incomplete?</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              If those answers are unclear, begin by clarifying the workflow rather than adding more automated
              steps.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Buy software around a defined problem
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A focused purchasing question is easier to evaluate than a broad ambition to &ldquo;digitize
              everything.&rdquo;
            </p>
            <p className="text-[15px] leading-[1.85]">Try replacing:</p>
            <blockquote className="pl-4" style={{ borderLeft: "2px solid var(--border-strong)" }}>
              <p className="text-[15px] leading-[1.85] italic">&ldquo;We need an all-in-one system.&rdquo;</p>
            </blockquote>
            <p className="text-[15px] leading-[1.85]">With:</p>
            <blockquote className="pl-4" style={{ borderLeft: "2px solid var(--border-strong)" }}>
              <p className="text-[15px] leading-[1.85] italic">
                &ldquo;We need to track every maintenance request from submission to completion.&rdquo;
              </p>
            </blockquote>
            <p className="text-[15px] leading-[1.85]">Or:</p>
            <blockquote className="pl-4" style={{ borderLeft: "2px solid var(--border-strong)" }}>
              <p className="text-[15px] leading-[1.85] italic">
                &ldquo;We need reviewers to see the document, supporting information, and pending questions
                together.&rdquo;
              </p>
            </blockquote>
            <p className="text-[15px] leading-[1.85]">A defined problem gives you something concrete to test.</p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Better systems begin with better questions
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The best next tool may be a new platform, a simpler configuration, or a more consistent use of what
              you already have.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Start with the work, identify the handoffs, and choose technology that makes responsibility and
              progress easier to see.
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
                Built around connected workflows
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                At Daeson Technologies, we build platforms around connected workflows. Explore our products to find
                the one relevant to your team&apos;s work.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/solutions" className="btn-solid inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl">
                  Explore our products <ArrowRight size={14} />
                </Link>
                <Link
                  href="/insights/property-management-small-landlords"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium px-2 py-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Read: Property management for small landlords
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
