import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Home 1.0 — Smarter Property Management",
  description:
    "Home 1.0 is Daeson Technologies' AI-powered residential property management platform — built for happier tenants, better living communities, and smarter operations.",
  alternates: { canonical: "https://daesontechnologies.online/insights/home-1-0-residential-property-management" },
  openGraph: {
    title: "Home 1.0: Building Happier Tenants, Better Communities",
    url: "https://daesontechnologies.online/insights/home-1-0-residential-property-management",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Home 1.0: Building Happier Tenants, Better Communities Through Property Technology",
  description:
    "Home 1.0 is Daeson Technologies' AI-powered residential property management platform — built for happier tenants, better living communities, and smarter operations.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/home-1-0-residential-property-management",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  about: [
    { "@type": "Thing", name: "Residential property management software" },
    { "@type": "Thing", name: "Home 1.0" },
    { "@type": "Thing", name: "PropTech" },
  ],
};

const modules = [
  { title: "Resident Portal", points: ["Profile & lease information", "Payment history", "Community notices", "Maintenance tracking"] },
  { title: "Maintenance Management", points: ["Submit & assign requests", "Track progress to close", "Measure response times"] },
  { title: "Lease Management", points: ["Digital lease documents", "Expiration & renewal tracking", "Vacancy & occupancy rates"] },
  { title: "Rent & Payment Tracking", points: ["Outstanding payment visibility", "Collection status", "Financial reporting"] },
  { title: "Community Communication", points: ["Broadcast announcements", "Resident notifications", "Structured updates — no more scattered chats"] },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-0 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
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
                style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)", border: "1px solid var(--blue-border)" }}
              >
                Real Estate Operations
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Home 1.0: Building Happier Tenants, Better Communities
            </h1>
          </div>
        </section>

        {/* Cover banner */}
        <section className="px-6 pt-8 pb-16">
          <div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden relative"
            style={{ border: "1px solid var(--blue-border)", height: "200px" }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-card)" }} />
            <div
              className="absolute inset-0 opacity-60"
              style={{ background: "radial-gradient(ellipse 55% 75% at 85% 15%, var(--blue-muted) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 h-full flex items-center px-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mr-6"
                style={{ backgroundColor: "var(--blue-muted)", border: "1px solid var(--blue-border)" }}
              >
                <Home size={26} style={{ color: "var(--blue)" }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--blue)" }}>
                  Home 1.0
                </p>
                <p className="text-[15px] font-semibold" style={{ color: "var(--text-primary)" }}>
                  Smarter Property. Happier Communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                The short answer
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Home 1.0 is Daeson Technologies&apos; AI-powered residential property management
                platform — bringing resident communication, maintenance, leasing, payments, and
                community updates into one system instead of spreadsheets, WhatsApp groups, and
                disconnected tools. It&apos;s designed to be affordable and owned, not just for large
                enterprises.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              Managing residential properties has become more complex than ever. Property managers are
              expected to handle maintenance requests, rent collection, lease renewals, resident
              communication, financial reporting, occupancy tracking, and dozens of daily operational
              tasks — all while delivering a better living experience.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Many residential communities still rely on disconnected software, spreadsheets, WhatsApp
              groups, emails, and manual processes. The result is slower service, frustrated tenants,
              higher operational costs, and lost revenue.
            </p>
            <p className="text-[15px] leading-[1.85]">
              At Daeson Technologies, we believe residential property management deserves a better
              approach. That&apos;s why we&apos;re building Home 1.0.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Residential Property Management Is Changing
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Across Asia, the Middle East, Europe, and North America, residential communities are
              becoming smarter. Residents now expect digital experiences similar to online banking or
              food delivery apps — pay rent online, submit maintenance requests instantly, track
              request status, receive announcements, renew leases digitally, and reach management
              without waiting days for a response.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Meanwhile, property managers need complete operational visibility without juggling
              multiple systems.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The Real Cost of Manual Operations
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Many residential companies don&apos;t realize how much money inefficient processes cost.
            </p>
            <div
              className="rounded-xl p-6 my-6"
              style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--blue-border)" }}
            >
              <ul className="space-y-2">
                {[
                  "Missed maintenance requests",
                  "Late rent collection",
                  "Paper lease agreements",
                  "Lost communication",
                  "Poor occupancy visibility",
                  "Tenant dissatisfaction",
                  "High administrative workload",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[15px] leading-[1.85]">
              When these problems accumulate, everyone loses. Property managers become overwhelmed.
              Residents become frustrated. Communities lose their reputation.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Introducing Home 1.0
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Home 1.0 is an upcoming residential property operations platform developed by Daeson
              Technologies. Our vision is simple: <strong style={{ color: "var(--text-primary)" }}>happier
              tenants, better living communities.</strong>
            </p>
            <p className="text-[15px] leading-[1.85]">
              Rather than forcing residential companies to purchase multiple disconnected products,
              Home 1.0 brings everyday operations into one unified platform. Our goal is not to
              replace people — it&apos;s to help property teams work smarter.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Designed Around Real Residential Workflows
            </h2>
            <div className="space-y-5">
              {modules.map((m) => (
                <div key={m.title} className="rounded-xl p-5" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                  <p className="text-[14px] font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>{m.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.points.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 rounded-lg text-[11px]"
                        style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Affordable Doesn&apos;t Mean Limited
            </h2>
            <p className="text-[15px] leading-[1.85]">
              One misconception in property technology is that enterprise software must be expensive.
              Home 1.0 is being designed with affordability in mind — smaller residential companies
              deserve modern technology just as much as large enterprises. Whether managing one
              building or multiple communities, our vision is to provide a platform that scales with
              business growth.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Ownership Matters
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Many software platforms lock customers into expensive subscriptions with limited
              customization. Our philosophy is different — we believe companies should have greater
              control over their technology investments. Ownership creates long-term flexibility, it
              enables future customization, and it allows businesses to build around their own
              operational processes.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Technology Should Improve Communities
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Property management isn&apos;t only about buildings. It&apos;s about people. A faster
              maintenance response means a happier resident. Clear communication builds trust.
              Efficient operations create stronger communities. Technology should support these
              outcomes — not complicate them.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Looking Ahead
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Home 1.0 is currently under development by Daeson Technologies as part of our broader
              vision of building practical AI-powered software for real-world industries. We continue
              to work on solutions that help organizations modernize operations while remaining
              practical, scalable, and affordable.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Home 1.0", "PropTech", "Property Management", "SaaS", "Real Estate"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-[11px]"
                style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--blue-border)" }}
            >
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Building better communities together?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                If you&apos;re a residential property company, management firm, community operator,
                or real estate technology partner, we&apos;d love to hear your thoughts.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                >
                  Let&apos;s Talk <ArrowRight size={14} />
                </Link>
                <Link
                  href="/real-estate"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all"
                  style={{ border: "1px solid var(--blue-border)", color: "var(--blue)" }}
                >
                  Real Estate Infrastructure
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>
            Related Reading
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href="/insights/real-estate-operating-platform-vs-one-off-deals"
              className="p-5 rounded-xl block transition-all"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
              >
                Real Estate Operations
              </span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                When Does a Real Estate Operating Platform Beat One-Off Deals?
              </p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>
                Read article <ArrowRight size={11} />
              </p>
            </Link>
            <Link
              href="/insights/real-estate-saas-vs-owned"
              className="p-5 rounded-xl block transition-all"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
              >
                Real Estate Operations
              </span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure
              </p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>
                Read more <ArrowRight size={11} />
              </p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
