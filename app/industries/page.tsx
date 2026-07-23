import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Real Estate & Islamic Finance",
  description:
    "Daeson Technologies builds operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. Purpose-built systems for operationally complex industries.",
  keywords: [
    "real estate technology industry",
    "Islamic finance technology industry",
    "enterprise operations software",
    "operational infrastructure by industry",
    "Daeson Technologies industries",
  ],
  alternates: { canonical: "https://daesontechnologies.online/industries" },
  openGraph: {
    title: "Industries — Real Estate, Islamic Finance & Enterprise Operations | Daeson Technologies",
    description:
      "Purpose-built operational infrastructure for real estate, Islamic finance, and enterprise organizations — industries where operational complexity is a competitive variable.",
    url: "https://daesontechnologies.online/industries",
  },
};

const industries = [
  {
    badge: "Real Estate",
    color: "#000000",
    title: "Real Estate & PropTech",
    description:
      "Property development firms, real estate operators, and investment portfolios running on fragmented tools need unified operational infrastructure — not another CRM subscription.",
    problems: [
      "Generic CRMs not designed for real estate workflows",
      "No unified portfolio and investor visibility",
      "Fragmented lead, payment, and project systems",
      "Manual investor reporting and updates",
    ],
    what: "We design owned operational platforms that unify CRM, investor dashboards, lead intelligence, payment tracking, and AI analytics into a single system you control.",
    href: "/real-estate",
    cta: "Explore Real Estate Infrastructure",
  },
  {
    badge: "Islamic Finance",
    color: "#C9A84C",
    title: "Islamic Finance & Shariah Compliance",
    description:
      "Islamic banks, fintech platforms, investment funds, and lending institutions need Shariah compliance infrastructure that scales — not manual review workflows in spreadsheets.",
    problems: [
      "Manual contract review and Shariah analysis",
      "Disconnected governance and scholar coordination",
      "No immutable audit trail infrastructure",
      "Fragmented multi-market regulatory reporting",
    ],
    what: "Amanah AI provides AI-assisted Shariah compliance infrastructure — contract analysis, governance workflows, audit trails, and regulatory reporting — designed for GCC, Pakistan, and UK markets.",
    href: "/amanah-ai",
    cta: "Explore Amanah AI",
  },
  {
    badge: "Enterprise",
    color: "#10B981",
    title: "Enterprise Operations",
    description:
      "Enterprise organizations with complex cross-department operations need AI-integrated workflow systems that connect their data and give leadership the visibility to make execution-level decisions.",
    problems: [
      "Disconnected systems across teams and departments",
      "Manual data aggregation and reporting bottlenecks",
      "No AI integration or workflow automation",
      "Executives operating on stale, incomplete data",
    ],
    what: "We build enterprise AI workflow systems that integrate your operational data, automate intelligence pipelines, and give leadership real-time visibility into the metrics that drive decisions.",
    href: "/contact",
    cta: "Start a Conversation",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Header */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-8">
            Industries
          </div>
          <h1 className="text-[42px] md:text-[56px] font-extrabold text-white tracking-tight leading-[1.06] mb-6">
            Infrastructure for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #A0A0A0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Complex Operations.
            </span>
          </h1>
          <p className="text-[17px] text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            We specialize in industries where operational complexity is a competitive variable —
            and where generic software consistently falls short.
          </p>
        </section>

        {/* Industry cards */}
        <div className="bg-white">
        <section className="relative max-w-7xl mx-auto px-6 py-24 space-y-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 hover:border-black/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-12">
                {/* Left */}
                <div>
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider mb-5"
                    style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
                  >
                    {industry.badge}
                  </div>
                  <h2 className="text-[28px] font-bold text-black mb-4 tracking-tight">{industry.title}</h2>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{industry.description}</p>

                  <div className="space-y-2.5">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Common challenges</p>
                    {industry.problems.map((p) => (
                      <div key={p} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/60 shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block bg-black/8" />

                {/* Right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">What we build</p>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-8">{industry.what}</p>
                  </div>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold transition-colors"
                    style={{ color: industry.color }}
                  >
                    {industry.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        </div>

        {/* CTA */}
        <section className="relative max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="bg-[#0D1521] border border-white/8 rounded-2xl p-10">
            <h2 className="text-[28px] font-bold text-white mb-4 tracking-tight">
              Don&apos;t see your industry?
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-8">
              If you run a complex operation that&apos;s been underserved by generic software, we&apos;d like to talk.
              Our systems approach applies across any operationally complex business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-300 text-black text-[14px] font-semibold rounded-xl transition-colors"
            >
              Schedule a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
