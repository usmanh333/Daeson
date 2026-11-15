import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowDown, Building, Scale, ShieldCheck, Cpu } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/shariah-department-vs-shariah-advisory-firm`;
const TITLE = "Shariah Department vs Shariah Advisory Firm";
const HEADLINE = "What Is the Difference Between a Bank's Shariah Department and a Shariah Advisory Firm?";
const DESCRIPTION =
  "An internal Shariah department runs daily compliance; an external advisory firm gives independent review and assurance. How they work together.";
const PUBLISHED = "2026-11-15";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Shariah department",
    "Shariah advisory firm",
    "Shariah supervisory board",
    "Shariah governance Islamic bank",
    "internal Shariah audit",
    "external Shariah review",
    "AAOIFI governance standards",
    "Shariah compliance function",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: { type: "article", title: HEADLINE, description: DESCRIPTION, url: URL, siteName: "Daeson Technologies", publishedTime: PUBLISHED },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Islamic Finance",
    "article:tag": "Shariah governance, Shariah advisory, Islamic banking, AAOIFI",
  },
};

const faqs = [
  { q: "What does a bank's Shariah department do?", a: "A bank's Shariah department is an internal team that helps the institution operate in line with Shariah requirements every day. It reviews new products and contracts, supports business teams, prepares documentation for Shariah board approval, monitors compliance in operations, and maintains records and audit trails." },
  { q: "What does a Shariah advisory firm do?", a: "A Shariah advisory firm is an independent organisation that provides Shariah expertise to banks, financial institutions, fintechs and other businesses. Its work can include independent Shariah review and audit, product certification and structuring advice, Shariah board secretariat services, training and research." },
  { q: "Does an Islamic bank need both an internal Shariah department and an external advisory firm?", a: "Strong governance usually combines both. The internal team manages implementation and daily compliance, the Shariah board provides oversight and approval, and external advisers provide specialised and independent support. Relying on only one side leaves either independence or day-to-day coverage weak." },
  { q: "Who gives final Shariah approval in an Islamic bank?", a: "Final Shariah approval normally rests with the institution's Shariah supervisory board, supported by the internal Shariah department. External advisory firms and technology support the process but do not replace the board's authority." },
  { q: "How does technology help Shariah governance?", a: "Technology can make Shariah review structured, documented and auditable: tracking what was submitted, what was flagged, what changed and who approved it. It supports reviewers and boards; it does not make Shariah determinations." },
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
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable", ".answer-capsule"] },
  about: [
    { "@type": "Thing", name: "Shariah governance" },
    { "@type": "Thing", name: "Shariah advisory firm" },
    { "@type": "Thing", name: "Islamic banking" },
  ],
  citation: ["https://www.ijmar.org/v6n4/19-018.html"],
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

const internal = [
  "Reviewing new products, contracts and financing structures",
  "Supporting business teams with Shariah-related questions",
  "Preparing documentation for Shariah board approval",
  "Monitoring Shariah compliance in operations",
  "Coordinating internal Shariah audits and reviews",
  "Maintaining records, policies and audit trails",
  "Supporting training for staff",
];

const external = [
  "Independent Shariah review and audit",
  "Product certification and structuring advice",
  "Shariah board secretariat services",
  "Training and research",
  "Review of complex contracts and transactions",
  "Support for regulatory and governance requirements",
  "Independent assurance for management, boards and customers",
];

const table = [
  ["Relationship", "Internal", "External"],
  ["Main focus", "Daily compliance and execution", "Independent advice, review and assurance"],
  ["Typical work", "Product review, documentation, internal audit, training", "Certification, Shariah audit, research, complex structuring"],
  ["Best suited for", "Ongoing operations", "Specialised expertise and independent oversight"],
];

const model = [
  { icon: <Building size={18} />, who: "Internal Shariah team", role: "Implementation and daily compliance" },
  { icon: <Scale size={18} />, who: "Shariah board", role: "Oversight and final approval" },
  { icon: <ShieldCheck size={18} />, who: "External advisory firm", role: "Specialised, independent support" },
  { icon: <Cpu size={18} />, who: "Technology", role: "Structured, documented, auditable review" },
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />
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
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>15 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              {HEADLINE}
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Islamic banks need Shariah expertise both inside and outside the institution. Here is how the two
              roles differ, and why the strongest governance model uses both.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                An internal Shariah department manages a bank&apos;s day-to-day Shariah compliance. An external
                Shariah advisory firm provides independent review, specialised advice and assurance. They are
                complementary, not alternatives.
              </p>
            </div>

            {/* Side-by-side boxes */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Inside the bank", title: "Shariah department", items: internal },
                { label: "Outside the bank", title: "Shariah advisory firm", items: external },
              ].map((col) => (
                <div key={col.title} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>{col.label}</p>
                  <h2 className="text-[19px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{col.title}</h2>
                  <ul className="space-y-2.5">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                        <ArrowRight size={13} className="mt-1 shrink-0" style={{ color: "var(--gold)" }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>The internal Shariah department</h2>
            <p className={P}>
              A bank&apos;s Shariah department is part of the institution. Its main job is to help the bank operate in
              line with Shariah requirements in daily business: reviewing products and contracts, answering questions
              from business teams, preparing papers for the Shariah board, and keeping the records that show what was
              reviewed and approved.
            </p>
            <p className={P}>
              AAOIFI&apos;s governance framework expects Islamic financial institutions to have Shariah compliance and
              internal Shariah audit functions. Internal Shariah review may be carried out by a separate department or
              as part of internal audit (
              <a href="https://www.ijmar.org/v6n4/19-018.html" target="_blank" rel="noopener" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                source
              </a>
              ).
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>The external Shariah advisory firm</h2>
            <p className={P}>
              A Shariah advisory firm is an independent organisation that provides Shariah expertise to banks,
              financial institutions, fintechs and other businesses. Because it sits outside the institution, it can
              offer an independent view on difficult structures and help demonstrate that governance is credible.
              External Shariah review and audit can be provided by Shariah supervisory boards or by external Shariah
              reviewers, auditors and advisory firms.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Side-by-side comparison</h2>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
              <table className="w-full text-left text-[13.5px] min-w-[520px]">
                <thead>
                  <tr style={{ backgroundColor: "var(--bg-elevated)" }}>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-faint)" }}>Area</th>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>Bank Shariah department</th>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>Shariah advisory firm</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(([area, a, b]) => (
                    <tr key={area} style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>{area}</td>
                      <td className="px-5 py-4">{a}</td>
                      <td className="px-5 py-4">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>How they work together</h2>
            <p className={P}>
              The internal department is close to the business. It understands the bank&apos;s products, systems,
              processes and operational challenges. The advisory firm brings an outside perspective: it can review
              difficult structures, provide specialist research, support the Shariah board, and help the institution
              show that its governance is independent.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Why both matter</h2>
            <p className={P}>
              A bank cannot rely only on an internal team if it wants strong governance, and it cannot rely only on an
              external firm for every daily decision. The strongest model combines four layers:
            </p>
            <ol className="space-y-0">
              {model.map((m, i) => (
                <li key={m.who}>
                  <div className="flex items-center gap-4 rounded-2xl p-5" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ border: "1px solid var(--gold-border)", color: "var(--gold)" }}>{m.icon}</span>
                    <div>
                      <p className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>{m.who}</p>
                      <p className="text-[13.5px]">{m.role}</p>
                    </div>
                  </div>
                  {i < model.length - 1 && (
                    <div aria-hidden className="flex justify-center py-1.5" style={{ color: "var(--gold)" }}><ArrowDown size={16} /></div>
                  )}
                </li>
              ))}
            </ol>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Where technology fits</h2>
            <p className={P}>
              Both internal teams and advisory firms spend a large share of their time on the work around a decision:
              collecting documents, tracking versions, chasing approvals and keeping records.{" "}
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>Aylinor</Link>,
              Daeson Technologies&apos; Shariah compliance and governance platform, is built to make that review process
              structured and traceable for both, while the Shariah board keeps final authority.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[14.5px] leading-[1.8]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Run a Shariah department or advisory firm?</p>
              <p className="text-[14px] mb-5">
                See how Aylinor supports structured, auditable Shariah review, or read{" "}
                <Link href="/insights/islamic-banking-software-ai-governance" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                  how AI fits into Shariah governance
                </Link>.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90" style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}>
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
