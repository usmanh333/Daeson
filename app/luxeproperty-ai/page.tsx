import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Users, TrendingUp, MapPin, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LuxeProperty AI: Team, Investors & CEO in One Real Estate Platform",
  description:
    "LuxeProperty AI runs a real estate business on one platform, the CEO, the team and investors, all six roles connected with live data. Built for real estate developers in Lombok, Indonesia and beyond.",
  keywords: [
    "LuxeProperty AI",
    "real estate management platform",
    "real estate investor portal",
    "real estate CRM Indonesia",
    "property developer software Lombok",
    "real estate software Indonesia",
    "Daeson Technologies",
  ],
  alternates: { canonical: "https://daesontechnologies.online/luxeproperty-ai" },
  openGraph: {
    title: "LuxeProperty AI: Six Roles. One Platform.",
    description: "CEO, team and investors on one live real estate platform. Built in Lombok, Indonesia.",
    url: "https://daesontechnologies.online/luxeproperty-ai",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LuxeProperty AI",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Real Estate Management Software",
  operatingSystem: "Web",
  url: "https://daesontechnologies.online/luxeproperty-ai",
  description:
    "Real estate operating platform that connects the CEO, team and investors, all six roles, on one live system. Built for developers in Lombok, Indonesia.",
  creator: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  areaServed: { "@type": "Country", name: "Indonesia" },
};

const roles = [
  {
    icon: Crown,
    title: "The CEO",
    body: "Live visibility across sales, projects and investors, decisions made on today's numbers, not last month's spreadsheet.",
  },
  {
    icon: Users,
    title: "The Team",
    body: "Leads, deals and daily work in one shared system, so nobody spends the day calling around for updates.",
  },
  {
    icon: TrendingUp,
    title: "The Investors",
    body: "Their whole portfolio and statements in one dashboard, plus a marketplace to invest in new properties directly.",
  },
];

export default function LuxePropertyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)" }}>
        <section className="relative overflow-hidden px-6 pt-24 pb-24">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-8"
              style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
            >
              <MapPin size={12} /> Lombok, Indonesia
            </div>
            <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-7" style={{ color: "var(--text-primary)" }}>
              Six Roles.
              <br />
              <span style={{ color: "var(--text-muted)" }}>One Platform.</span>
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[1.7] max-w-2xl mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>LuxeProperty AI</strong> manages your team, your
              investors and your CEO, all six roles of a real estate business, connected on one live platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                Request a Demo <ArrowRight size={15} />
              </Link>
              <Link href="/real-estate" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl">
                Real Estate Infrastructure
              </Link>
            </div>
          </div>
        </section>

        <section className="section-light px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                Everyone On The Same System
              </p>
              <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                From the Boardroom to the Investor Portal
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {roles.map(({ icon: Icon, title, body }) => (
                <div key={title} className="lift-card rounded-2xl p-8" style={{ backgroundColor: "#FFF", border: "1px solid var(--border)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#000" }}>
                    <Icon size={19} color="#FFF" />
                  </div>
                  <h3 className="text-[19px] font-extrabold mb-2" style={{ color: "var(--text-primary)" }}>{title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[14px] mt-10 font-semibold" style={{ color: "var(--text-secondary)" }}>
              …and every other role in between, six roles, one source of truth.
            </p>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl p-9 md:p-14" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-strong)" }}>
              <Quote size={34} style={{ color: "var(--text-primary)", opacity: 0.25 }} className="mb-6" />
              <p className="text-[20px] md:text-[24px] leading-[1.5] font-semibold mb-9" style={{ color: "var(--text-primary)" }}>
                &ldquo;Really liked the layout of the LuxeProperty dashboard, especially how investors can see and
                manage their whole portfolio, statements, and invest in other properties directly through the
                marketplace.&rdquo;
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#FFF" }}>
                  <Image src="/floense.png" alt="Floense" width={48} height={48} className="object-contain" />
                </div>
                <div>
                  <p className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>Izeah Voltaire</p>
                  <p className="text-[12.5px]" style={{ color: "var(--text-muted)" }}>Founder, Floense</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Run Your Whole Real Estate Business on One Platform
            </h2>
            <p className="text-[16px] leading-relaxed mb-9" style={{ color: "var(--text-secondary)" }}>
              See how LuxeProperty AI connects your CEO, team and investors.
            </p>
            <Link href="/contact" className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
              Request a Demo <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
