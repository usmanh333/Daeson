import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Home 1.0 Free Trial: Listings and Payment Access",
  description:
    "Try Home 1.0 free for 30 days with property listing and payment access. No credit card required, plus first-year free tenant applications.",
  alternates: { canonical: "https://daesontechnologies.online/insights/free-property-listing-payment-access-trial" },
  openGraph: {
    title: "Home 1.0 Free Trial: Listings and Payment Access",
    url: "https://daesontechnologies.online/insights/free-property-listing-payment-access-trial",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Try Home 1.0 Free: List Your Property and Explore Payment Access",
  description:
    "Try Home 1.0 free for 30 days with property listing and payment access. No credit card required, plus first-year free tenant applications.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/free-property-listing-payment-access-trial",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  about: [
    { "@type": "Thing", name: "property management software free trial" },
    { "@type": "Thing", name: "free property listing" },
    { "@type": "Thing", name: "online rent payment access" },
    { "@type": "Thing", name: "landlord software trial" },
    { "@type": "Thing", name: "tenant application platform" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors"
              style={{ color: "var(--text-faint)" }}
            >
              <ArrowLeft size={12} /> Back to Insights
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "var(--blue)", border: "1px solid rgba(59,130,246,0.20)" }}
              >
                PropTech
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>7 min read</span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Try Home 1.0 Free: List Your Property and Explore Payment Access
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Managing a rental property should not require a spreadsheet for rent, a separate inbox for
              applications, and a message thread for every repair. Home 1.0 brings the rental workflow into
              one place, and gives you a way to explore it before committing.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                What you get
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                A 30-day free trial, no credit card required, with free property listing, payment access,
                and first-year free tenant applications.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              List your property in a connected workflow
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A property listing should be the beginning of an organized process, not another place where
              enquiries get lost. During the trial, use free property listing to present an available unit
              and explore how enquiries move into the application process.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Home 1.0 supports listings with photos and video tours, tracked tour requests, and online
              applications. Instead of repeatedly transferring applicant details between tools, you can
              evaluate how the information stays connected as the rental progresses.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Explore online payment access
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Home 1.0 includes card and bank-transfer payment functionality, autopay, automatic reminders,
              and a live rent ledger. The resident portal also lets tenants view payment history.
            </p>
            <p className="text-[15px] leading-[1.85]">
              For landlords and property managers, payment access provides an opportunity to examine:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>How payment status appears in the system.</li>
              <li>How tenant payment history is organized.</li>
              <li>How reminders fit into the workflow.</li>
              <li>How the ledger supports everyday follow-up.</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              Access to payment features does not mean transactions are free. Before processing live
              payments, confirm any transaction charges, provider requirements, account verification,
              and settlement terms.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Free tenant applications for your first year
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Home 1.0 also offers free tenant applications for the first year. This gives property teams
              an opportunity to explore online application management alongside listing and leasing.
              Confirm the offer&apos;s scope before using it with applicants, including whether any separate
              screening services carry charges. Clear terms matter as much as an attractive offer.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              More than a listing tool
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The platform also connects agreements, e-signatures, maintenance requests, and tenant
              messaging. Tenants can submit maintenance requests with photos and track them through the
              resident portal. That means you can evaluate more than the first stage of the tenancy.
              You can explore what happens after someone applies, after a lease is signed, and when a
              tenant needs assistance.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Make your trial useful
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Start with one property and a clear evaluation goal. Publish a listing, inspect the
              application workflow, explore payment access, and create a sample maintenance request.
              Use fictional records until you are ready to handle live tenant information.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Then ask: does this system make the next action easier to see? The goal is not to adopt
              more software. It is to make your existing work easier to manage.
            </p>

            <div
              className="rounded-2xl p-8 mt-4"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Get started without a credit card
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Explore free property listing, payment access, and a connected rental workflow.
              </p>
              <a
                href="https://home1-0.daesontechnologies.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl"
              >
                Start Your Home 1.0 Trial
              </a>
              <p className="text-[12px] mt-4" style={{ color: "var(--text-faint)" }}>
                Offer eligibility, included features, and separate payment or screening charges are subject
                to the applicable terms. The free trial lasts 30 days; first-year tenant applications are
                a separate advertised benefit.
              </p>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
