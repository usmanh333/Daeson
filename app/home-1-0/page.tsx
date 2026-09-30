import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_URL = "https://home1-0.daesontechnologies.online/login";

export const metadata: Metadata = {
  title: "Home 1.0: Property Management Software for the USA",
  description:
    "Home 1.0 is affordable property management software built for landlords and property managers in the USA, tenants, leases, rent, maintenance and resident communication in one platform. Our No Empty Pockets vision: enterprise-grade tools without an enterprise price.",
  keywords: [
    "property management software USA",
    "affordable property management software",
    "landlord software",
    "rental property management software",
    "tenant management software",
    "Home 1.0",
    "Daeson Technologies",
  ],
  alternates: { canonical: "https://daesontechnologies.online/home-1-0" },
  openGraph: {
    title: "Home 1.0: Property Management Software for the USA",
    description: "Trusted, affordable property management software. Enterprise-grade tools, no empty pockets.",
    url: "https://daesontechnologies.online/home-1-0",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Home 1.0",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Property Management Software",
  operatingSystem: "Web",
  url: "https://daesontechnologies.online/home-1-0",
  description:
    "Affordable property management software for landlords and property managers in the USA, tenants, leases, rent, maintenance and resident communication in one platform.",
  creator: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  areaServed: { "@type": "Country", name: "United States" },
};

const modules = [
  { title: "Resident Portal", body: "Lease details, payment history, notices and maintenance tracking, in one place for every tenant." },
  { title: "Maintenance Management", body: "Submit, assign and track requests to close, and see how fast your team responds." },
  { title: "Lease Management", body: "Digital leases with expiration and renewal tracking, plus vacancy and occupancy at a glance." },
  { title: "Rent & Payment Tracking", body: "Outstanding balances, collection status and financial reporting without spreadsheets." },
  { title: "Resident Communication", body: "Announcements and notifications in one structured channel, no more scattered group chats." },
];

export default function HomeOnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)" }}>
        <section className="relative overflow-hidden px-6 pt-24 pb-24">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image src="/home-1-0-logo.png" alt="Home 1.0" width={72} height={72} className="rounded-2xl object-contain" priority />
            </div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "var(--text-muted)" }}>
              PropTech · Property Management Software · USA
            </p>
            <h1 className="text-[40px] md:text-[62px] font-extrabold leading-[1.03] tracking-[-0.03em] mb-7" style={{ color: "var(--text-primary)" }}>
              Home 1.0: Property Management
              <br />
              <span style={{ color: "var(--text-muted)" }}>You Can Trust.</span>
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[1.7] max-w-2xl mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>
              Built to be the most trusted property management software in the USA, tenants, leases, rent and
              maintenance in one platform, at a price that doesn&apos;t empty your pockets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                Open Home 1.0 <ArrowUpRight size={15} />
              </a>
              <Link href="/contact" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>

        <section className="section-light px-6 py-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 items-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#000" }}>
              <Wallet size={34} color="#FFF" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                Our Vision
              </p>
              <h2 className="text-[30px] md:text-[44px] font-extrabold tracking-tight leading-[1.1] mb-4" style={{ color: "var(--text-primary)" }}>
                No Empty Pockets.
              </h2>
              <p className="text-[16px] md:text-[17px] leading-[1.75] max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                A landlord with five units deserves the same modern tools as a company managing five hundred.
                Home 1.0 gives property owners and managers enterprise-grade software without enterprise
                pricing, so better property management never has to empty your pockets.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                One Platform
              </p>
              <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                Everything Your Properties Need
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {modules.map((m, i) => (
                <div key={m.title} className="lift-card rounded-2xl p-7" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                  <p className="text-[12px] font-bold mb-4" style={{ color: "var(--text-faint)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[17px] font-extrabold mb-2" style={{ color: "var(--text-primary)" }}>{m.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-light px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Ready to Manage Smarter?
            </h2>
            <p className="text-[16px] leading-relaxed mb-9" style={{ color: "var(--text-secondary)" }}>
              Get started with Home 1.0 today, or talk to our team about your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                Get Started <ArrowRight size={15} />
              </a>
              <Link href="/contact" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
