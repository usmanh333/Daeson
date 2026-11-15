import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Ban, Car, Landmark, CheckCircle2 } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/islamic-finance-vs-conventional-finance`;
const TITLE = "Islamic Finance vs Conventional Finance Explained";
const HEADLINE = "Is Islamic Finance a Different Finance Market From Conventional Finance?";
const DESCRIPTION =
  "Islamic finance is a distinct system: no interest, asset-backed contracts like Murabahah, and Shariah governance. A clear comparison with an example.";
const PUBLISHED = "2026-11-15";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Islamic finance vs conventional finance",
    "difference between Islamic and conventional banking",
    "what is Islamic finance",
    "riba gharar maysir",
    "Murabahah",
    "Ijarah",
    "Musharakah",
    "Mudarabah",
    "Islamic banking explained",
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
    "article:tag": "Islamic finance, conventional finance, Murabahah, Ijarah, riba",
  },
};

const faqs = [
  { q: "What is the main difference between Islamic finance and conventional finance?", a: "Islamic finance follows Shariah principles: it prohibits riba (interest), excessive uncertainty (gharar) and gambling or speculation (maysir), and financing must be linked to a real asset, service or productive economic activity. Conventional finance commonly lends money and charges interest on the loan." },
  { q: "Is Islamic finance just conventional banking with different names?", a: "No. It uses different contracts, such as sale (Murabahah), leasing (Ijarah) and partnership (Musharakah, Mudarabah), and is subject to Shariah governance and review. It does, however, operate alongside conventional finance and often uses similar banking infrastructure, payment systems and regulation." },
  { q: "Does Islamic finance mean financing is free?", a: "No. Islamic finance still has costs and returns. The difference is how they are structured: returns come from trade, leasing or shared profit on real activity rather than interest on a loan. Customers should still check the total cost, payment schedule, ownership terms and late-payment policy." },
  { q: "What is Murabahah?", a: "Murabahah is a cost-plus sale. The bank buys an asset and sells it to the customer at an agreed price that includes a disclosed profit, usually payable in instalments." },
  { q: "Who can use Islamic finance?", a: "Anyone. Islamic finance products are open to Muslims and non-Muslims, and many customers choose them for their emphasis on asset backing, risk sharing and transparency." },
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
    { "@type": "Thing", name: "Islamic finance" },
    { "@type": "Thing", name: "Conventional banking" },
    { "@type": "Thing", name: "Murabahah" },
  ],
  citation: [
    "https://www.imf.org/-/media/files/data/statistics/bmp7/draft-chapters/sna-ch26-bpm7-ch17.pdf.md",
    "https://elibrary.imf.org/downloadpdf/view/journals/001/2015/120/article-A001-en.pdf",
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

const prohibitions = [
  { term: "Riba", meaning: "Interest" },
  { term: "Gharar", meaning: "Excessive uncertainty" },
  { term: "Maysir", meaning: "Gambling or speculation" },
];

const contracts = [
  { name: "Murabahah", type: "Cost-plus sale", body: "The bank buys an asset and sells it to the customer at an agreed profit." },
  { name: "Ijarah", type: "Leasing", body: "The bank owns an asset and leases it to the customer for an agreed rent." },
  { name: "Musharakah", type: "Partnership", body: "Partners contribute capital and share profit and loss." },
  { name: "Mudarabah", type: "Partnership", body: "One party provides capital, the other provides expertise or management." },
];

const comparison = [
  ["Basis of return", "Interest on money lent", "Profit from trade, leasing or shared activity"],
  ["Link to real economy", "Not required", "Must be tied to a real asset, service or activity"],
  ["Risk", "Mostly borne by borrower", "Shared or tied to the asset"],
  ["Governance", "Financial regulation", "Financial regulation plus Shariah governance"],
  ["Infrastructure", "Banking systems and payment rails", "Often the same systems and rails"],
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>7 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>15 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              {HEADLINE}
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Yes. Islamic finance is built on different principles, contracts and governance requirements. It is
              not simply conventional banking with Islamic terminology.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Islamic finance is a distinct financial system. It prohibits interest, excessive uncertainty and
                speculation, links every transaction to a real asset or activity, and is subject to Shariah governance.
                It operates alongside conventional finance and often shares the same banking infrastructure.
              </p>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>What makes it different</h2>
            <p className={P}>
              Islamic finance is based on Shariah principles. It prohibits three things, and avoids financing
              activities considered harmful or impermissible (
              <a href="https://www.imf.org/-/media/files/data/statistics/bmp7/draft-chapters/sna-ch26-bpm7-ch17.pdf.md" target="_blank" rel="noopener" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>IMF</a>
              ):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {prohibitions.map((p) => (
                <div key={p.term} className="rounded-2xl p-5 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <Ban size={20} className="mx-auto mb-3" style={{ color: "var(--gold)" }} />
                  <p className="text-[17px] font-bold" style={{ color: "var(--text-primary)" }}>{p.term}</p>
                  <p className="text-[13px]">{p.meaning}</p>
                </div>
              ))}
            </div>
            <p className={P}>
              In conventional finance, a bank may lend money and charge interest on the loan. In Islamic finance, the
              transaction must be connected to a real asset, service or productive economic activity. Islamic finance
              emphasises risk sharing, asset backing, transparency and real economic activity (
              <a href="https://elibrary.imf.org/downloadpdf/view/journals/001/2015/120/article-A001-en.pdf" target="_blank" rel="noopener" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>IMF</a>
              ).
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Common Islamic financing structures</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {contracts.map((c) => (
                <div key={c.name} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>{c.type}</p>
                  <h3 className="text-[18px] font-bold mb-2" style={{ color: "var(--text-primary)" }}>{c.name}</h3>
                  <p className="text-[13.5px] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>A simple example: buying a car</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>Conventional auto loan</p>
                <div className="flex flex-col items-start gap-2 text-[14px]">
                  <span className="flex items-center gap-2"><Landmark size={16} /> Bank lends money</span>
                  <ArrowRight size={16} className="rotate-90 ml-1" style={{ color: "var(--text-faint)" }} />
                  <span className="flex items-center gap-2"><Car size={16} /> Customer buys the car</span>
                  <ArrowRight size={16} className="rotate-90 ml-1" style={{ color: "var(--text-faint)" }} />
                  <span>Customer repays loan plus interest</span>
                </div>
              </div>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Murabahah</p>
                <div className="flex flex-col items-start gap-2 text-[14px]">
                  <span className="flex items-center gap-2"><Landmark size={16} /> Bank buys the car</span>
                  <ArrowRight size={16} className="rotate-90 ml-1" style={{ color: "var(--gold)" }} />
                  <span className="flex items-center gap-2"><Car size={16} /> Bank sells it at an agreed price</span>
                  <ArrowRight size={16} className="rotate-90 ml-1" style={{ color: "var(--gold)" }} />
                  <span>Customer pays in instalments</span>
                </div>
              </div>
            </div>
            <p className={P}>
              The Murabahah transaction is based on the sale of an asset, not on lending money for interest. The
              customer should still understand the total cost, payment schedule, ownership terms, late-payment policy
              and complaint process. Islamic finance does not mean financing is free; it means the structure and
              returns must follow Shariah requirements.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Is it a separate market?</h2>
            <p className={P}>
              Islamic finance is a separate market in terms of principles, contracts, governance and customer
              expectations. However, it operates alongside conventional finance and often uses similar banking
              infrastructure, payment systems, regulation and technology. It is a multi-trillion-dollar global
              industry, with Islamic banking as its largest segment.
            </p>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
              <table className="w-full text-left text-[13.5px] min-w-[520px]">
                <thead>
                  <tr style={{ backgroundColor: "var(--bg-elevated)" }}>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-faint)" }}>Area</th>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>Conventional</th>
                    <th className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>Islamic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([area, a, b]) => (
                    <tr key={area} style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: "var(--text-primary)" }}>{area}</td>
                      <td className="px-5 py-4">{a}</td>
                      <td className="px-5 py-4">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>What customers should expect</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Clear explanation of the contract structure",
                "Transparency on profit, pricing and instalments",
                "Asset-backed or real-economy-linked financing",
                "Shariah governance and review",
                "Documentation that explains the transaction",
                "A clear complaint and escalation process",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-xl p-4 text-[14px]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                  {x}
                </li>
              ))}
            </ul>
            <p className={P}>
              The difference is not only religious. It is also about how risk, ownership, assets and returns are
              structured.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Where technology helps</h2>
            <p className={P}>
              Islamic finance needs clear documentation, because every transaction must be traceable to its structure,
              conditions, approvals and Shariah basis.{" "}
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>Aylinor</Link>{" "}
              helps Shariah teams keep that trail organised and auditable, while scholars keep the final decision.
            </p>

            <h2 className={H2} style={{ color: "var(--text-primary)" }}>Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[14.5px] leading-[1.8]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Go deeper on Murabahah</p>
              <p className="text-[14px] mb-5">
                Read how{" "}
                <Link href="/insights/murabahah-contract-review-software-bilingual" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                  Murabahah contract review works
                </Link>.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90" style={{ backgroundColor: "var(--purple-fill)", color: "#FFFFFF" }}>
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
