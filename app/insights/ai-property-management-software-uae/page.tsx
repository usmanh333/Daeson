import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Property Management Software UAE",
  description:
    "AI-powered property management software for UAE landlords and property managers — tenants, rent, maintenance, and leases in one platform. 30-day free trial.",
  alternates: { canonical: "https://daesontechnologies.online/insights/ai-property-management-software-uae" },
  keywords: [
    "AI property management software UAE",
    "property management software UAE",
    "property management software Dubai",
    "property management software for small landlords",
    "AI property management",
    "rental property management software UAE",
    "Arabic property management software",
    "tenant management software UAE",
    "rent collection software UAE",
    "property maintenance software UAE",
    "landlord software UAE",
    "property management system Middle East",
  ],
  openGraph: {
    title: "AI Is No Longer a Luxury for Small Property Owners",
    url: "https://daesontechnologies.online/insights/ai-property-management-software-uae",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Is No Longer a Luxury for Small Property Owners",
  description:
    "AI-powered property management software for UAE landlords and property managers — tenants, rent, maintenance, and leases in one platform. 30-day free trial.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/ai-property-management-software-uae",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  about: [
    { "@type": "Thing", name: "Home 1.0" },
    { "@type": "Thing", name: "AI property management software" },
    { "@type": "Thing", name: "UAE real estate technology" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Home 1.0 only for large property companies?",
      acceptedAnswer: { "@type": "Answer", text: "No. Home 1.0 was built specifically so a landlord with five properties has access to the same AI-assisted workflows as a company managing five hundred — modern property management shouldn't require an enterprise IT budget." },
    },
    {
      "@type": "Question",
      name: "Does Home 1.0 support Arabic?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Arabic is a first-class language experience in Home 1.0, not a translation added afterward — built for teams and tenants across the UAE and wider Middle East." },
    },
    {
      "@type": "Question",
      name: "Does Home 1.0 include hosting or servers?",
      acceptedAnswer: { "@type": "Answer", text: "No. Home 1.0 is software — hosting, servers, and infrastructure are handled separately according to the deployment model you choose, giving businesses flexibility instead of forcing one infrastructure arrangement on every customer." },
    },
    {
      "@type": "Question",
      name: "Can I try Home 1.0 before committing?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Home 1.0 is available with a 30-day free trial so you can explore the workflows and see how your team and tenants respond before making a decision." },
    },
  ],
};

const modules = [
  { title: "Properties & Units", body: "Properties, suites, rent information, occupancy, amenities, documents, and staff assignments — organized in one place, whether you manage one building or a growing portfolio." },
  { title: "Tenant Communication", body: "Real-time messaging between tenants, staff, and management — text, files, images, and voice messages — with notification and history so nothing gets lost in scattered threads." },
  { title: "Leasing", body: "Public listings, lead capture, online applications, and e-signed lease agreements, with defined review workflows and renewals connected to prior leases." },
  { title: "Rent & Payments", body: "Rent, deposits, promotions, taxes, refunds, credits, scheduled charges, and autopay — with tenants able to see their own payment history through their portal." },
  { title: "Maintenance", body: "Tenants submit requests with photos or video; managers categorize, prioritize, and assign; status and comments are tracked through to completion." },
  { title: "Tenant Portal", body: "Payments, maintenance, messages, announcements, agreements, documents, and referrals — self-service, so your team spends time on what actually needs a human." },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)", border: "1px solid var(--blue-border)" }}>
                Product Announcement
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>8 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              AI Is No Longer a Luxury for Small Property Owners
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Why we built Home 1.0 for the owners and property managers still doing too much manually.
            </p>
          </div>
        </section>

        {/* Logo / brand banner */}
        <section className="px-6 pb-16">
          <div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden relative flex items-center justify-center py-10"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--blue-border)" }}
          >
            <Image
              src="/home-1-0-logo.png"
              alt="Home 1.0 — Smarter Property. Stronger Relationships."
              width={360}
              height={320}
              style={{ height: "auto", width: "220px" }}
            />
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                AI in property management has been treated as something only large developers and
                institutional investors could afford. Home 1.0 exists to close that gap — practical,
                affordable AI-assisted property management for the owner managing five properties, not
                just the company managing five hundred, with a 30-day free trial to prove it before you commit.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              For a long time, artificial intelligence in real estate felt like something reserved for
              large developers, institutional investors, and companies with large technology budgets.
              The small property owner had other priorities: rent collected, tenants answered,
              maintenance followed up, leases renewed, documents found, inspections completed — all
              tracked through spreadsheets, WhatsApp messages, emails, paper, and memory.
            </p>
            <p className="text-[15px] leading-[1.85]">
              We believe that should change. AI should not be a luxury reserved for the biggest property
              companies — it should be practical, affordable, and accessible to the person managing five
              properties just as much as the company managing five hundred. That is why we built{" "}
              <strong style={{ color: "var(--text-primary)" }}>Home 1.0</strong>.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Property management should not consume your entire day</h2>
            <p className="text-[15px] leading-[1.85]">
              None of the daily tasks — a maintenance message, a lease question, a document request, a
              payment check, a contractor update — are individually difficult. The problem is that they
              never stop, and as your properties grow, the administrative work grows with them, until
              you&apos;re spending more time managing information than managing your properties. Home
              1.0 was built around a simple idea: your property management software should reduce the
              work, not create more of it.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>AI should assist you, not replace you</h2>
            <p className="text-[15px] leading-[1.85]">
              We are not building Home 1.0 around the idea that property managers should hand their
              business over to AI. The best use of AI is helping people make better decisions and get
              routine work done faster. Home 1.0&apos;s AI assistant works inside the platform, using
              your property data to help you find answers and navigate information — part of the
              workflow, not another separate tool to open. You still make the decisions, manage the
              relationships, and run your properties. AI simply gives you another layer of assistance
              when you need it.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>One place for the work that normally gets scattered everywhere</h2>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {modules.map((m) => (
                <div key={m.title} className="rounded-xl p-5" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                  <p className="text-[14px] font-bold mb-2" style={{ color: "var(--text-primary)" }}>{m.title}</p>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>{m.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Built with Arabic users in mind</h2>
            <p className="text-[15px] leading-[1.85]">
              The Middle East is not a market where technology should simply be translated at the last
              minute. That is why Arabic is a first-class language experience in Home 1.0, alongside the
              platform&apos;s broader multilingual direction — your team may work in Arabic, your
              tenants may prefer it, and your software should never become the language barrier.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>You do not need to be a large property company to use modern technology</h2>
            <p className="text-[15px] leading-[1.85]">
              You should not need an enterprise IT department to modernize your operation, spend months
              implementing software before discovering if it helps, or adopt ten different tools simply
              because your business is growing. Start with what you actually need, then grow from there.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>What about servers and hosting?</h2>
            <p className="text-[15px] leading-[1.85]">
              One point we want to make clear: Home 1.0 is software — we do not provide physical servers
              as part of the product. Hosting, infrastructure, and deployment are handled separately
              according to the model you choose, which gives businesses flexibility rather than forcing
              every customer into the same arrangement. If you need help scoping the right setup, our
              team can walk through the technical requirements with you.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Why now</h2>
            <p className="text-[15px] leading-[1.85]">
              The real estate industry is changing — in Dubai, AI and digital transformation are already
              becoming part of how real estate services operate, with the Dubai Land Department actively
              integrating AI, automation, and centralized digital services into the sector. The question
              is no longer whether AI enters property management — it&apos;s whether smaller property
              businesses get to benefit from it too. We believe they should.
            </p>

            <div className="rounded-xl p-6 my-6" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--blue-border)" }}>
              <p className="text-[13px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Home 1.0 in one place:</p>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Properties. Tenants. Leasing. Applications. Payments. Maintenance. Inspections.
                Documents. Communication. Reporting. And AI assistance — one platform, one place to work.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((f) => (
                <div key={f.name}>
                  <p className="text-[14px] font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{f.name}</p>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{f.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Home 1.0", "AI Property Management", "UAE Real Estate", "PropTech"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        {/* CTA */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ background: "var(--bg-elevated)", border: "1px solid var(--blue-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Your properties may be small today. Your ambitions don&apos;t have to be.
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                See how modern property management can work for your business — with a 30-day free trial.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://home1-0.daesontechnologies.online/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                >
                  Try Home 1.0 <ExternalLink size={14} />
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all" style={{ border: "1px solid var(--blue-border)", color: "var(--blue)" }}>
                  Talk to Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>Related Reading</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/insights/home-1-0-residential-property-management" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}>Real Estate Operations</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>Home 1.0: Building Happier Tenants, Better Communities</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>Read article <ArrowRight size={11} /></p>
            </Link>
            <Link href="/insights/team-growth-tool-sprawl-tax" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}>Founder Insight</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>The Hidden Tax of Growing Your Team Across Tools</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>Read more <ArrowRight size={11} /></p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
