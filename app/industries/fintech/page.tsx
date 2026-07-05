import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fintech Infrastructure — Custom Financial Technology Development",
  description:
    "Daeson Technologies builds custom fintech infrastructure: payment systems, wallet infrastructure, financial operations platforms, and transaction processing. Full ownership, no third-party dependency on critical financial flows.",
  alternates: { canonical: "https://daesontechnologies.online/industries/fintech" },
};

const challenges = [
  { title: "Third-Party Dependency on Critical Financial Flows", body: "Relying on payment processors and financial infrastructure vendors for core transaction flows creates dependency on third-party pricing, availability, and feature decisions." },
  { title: "Generic Platforms Not Built for Specific Workflows", body: "Off-the-shelf payment and wallet platforms weren't designed for the specific transaction types, currencies, and compliance requirements of every fintech product." },
  { title: "Regulatory Compliance Complexity", body: "Financial technology operates under multiple regulatory frameworks — KYC/AML, PCI-DSS, local financial services regulations. Generic platforms provide compliance features that often need significant customization." },
  { title: "Multi-Currency & Cross-Border Complexity", body: "Fintech products operating across multiple markets require sophisticated multi-currency handling, cross-border transaction management, and currency reconciliation that generic platforms handle inconsistently." },
  { title: "Reconciliation Overhead", body: "Financial operations teams in fintech companies typically spend significant time on manual reconciliation between payment processors, bank accounts, and internal ledgers — creating operational overhead and audit risk." },
  { title: "Scaling Costs", body: "Transaction fee structures from third-party payment infrastructure become increasingly expensive at scale. Custom-built infrastructure eliminates per-transaction fees on internal flows." },
];

const capabilities = [
  { title: "Custom Payment System Development", items: ["Payment gateway architecture", "Transaction processing & routing", "Multi-currency payment handling", "Payment reconciliation systems", "Webhook & notification infrastructure"] },
  { title: "Wallet Infrastructure", items: ["Digital wallet architecture", "Balance management systems", "Transfer & payment flows", "KYC/AML integration", "Regulatory compliance frameworks"] },
  { title: "Financial Operations Platforms", items: ["Internal ledger systems", "Reconciliation automation", "Financial reporting infrastructure", "Treasury management tools", "Compliance monitoring dashboards"] },
  { title: "Transaction Processing", items: ["High-throughput transaction engines", "Fraud detection integration", "Chargeback & dispute management", "Transaction audit trail", "Real-time analytics"] },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is custom fintech infrastructure development?", acceptedAnswer: { "@type": "Answer", text: "Custom fintech infrastructure development refers to building purpose-built payment systems, wallet platforms, and financial operations technology specifically for a company's products and workflows — rather than relying on third-party platforms. Custom infrastructure gives the organization full control over transaction logic, compliance implementation, and operational features, without per-transaction fees or vendor limitations." } },
    { "@type": "Question", name: "When does a company need custom payment infrastructure?", acceptedAnswer: { "@type": "Answer", text: "Companies typically need custom payment infrastructure when: (1) third-party fees at scale become prohibitive, (2) the product requires transaction logic or compliance features that generic platforms can't support, (3) the company operates in multiple markets with complex regulatory requirements, (4) there is a strategic need to own the core financial infrastructure of the business, or (5) the company is building a financial product where the payment layer is a core differentiator." } },
    { "@type": "Question", name: "What is wallet infrastructure?", acceptedAnswer: { "@type": "Answer", text: "Wallet infrastructure refers to the back-end systems that power digital wallet products — including balance management, transfer processing, KYC/AML compliance, transaction history, and payment flows. Purpose-built wallet infrastructure is designed around the specific product requirements and regulatory environment rather than using a generic wallet-as-a-service platform." } },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fintech Infrastructure — Daeson Technologies",
  url: "https://daesontechnologies.online/industries/fintech",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://daesontechnologies.online/industries" },
      { "@type": "ListItem", position: 3, name: "Fintech", item: "https://daesontechnologies.online/industries/fintech" },
    ],
  },
};

export default function FintechPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>Industries / Fintech</p>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Custom Fintech Infrastructure
            <br />
            <span style={{ color: "var(--green)" }}>Built for Your Product</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-8" style={{ color: "var(--text-secondary)" }}>
            Payment systems, wallet infrastructure, and financial operations platforms built to your
            exact requirements — fully owned, with no third-party dependency on critical financial flows.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Request Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              View All Solutions
            </Link>
          </div>
        </div>

        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Industry Challenges</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((c, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-8 h-px mb-5" style={{ backgroundColor: "var(--green)" }} />
                  <h3 className="text-[13px] font-bold mb-2.5 tracking-tight" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Capabilities</p>
          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-7 rounded-xl" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <h3 className="text-[15px] font-bold mb-4" style={{ color: "var(--text-primary)" }}>{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>Frequently Asked Questions</p>
            <div className="space-y-4 mb-10">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <h3 className="text-[14px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Request Consultation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
