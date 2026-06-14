import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Mahnoor Zafar & Usman Ahmad, Founders",
  description:
    "Daeson Technologies is led by Mahnoor Zafar (Founder & Strategic Systems Lead) and Usman Ahmad (Co-Founder & Technical Lead). Building AI-powered operational infrastructure for real estate, Islamic finance, and enterprise.",
};

const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://daesontechagency.online/about#mahnoor-zafar",
    name: "Mahnoor Zafar",
    jobTitle: "Founder & Strategic Systems Lead",
    worksFor: {
      "@type": "Organization",
      name: "Daeson Technologies",
      url: "https://daesontechagency.online",
    },
    url: "https://daesontechagency.online/about",
    knowsAbout: [
      "Operational Infrastructure",
      "Real Estate Systems Strategy",
      "Workflow Intelligence Design",
      "Governance-Sensitive Industry Systems",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://daesontechagency.online/about#usman-ahmad",
    name: "Usman Ahmad",
    jobTitle: "Co-Founder & Technical Lead",
    worksFor: {
      "@type": "Organization",
      name: "Daeson Technologies",
      url: "https://daesontechagency.online",
    },
    url: "https://daesontechagency.online/about",
    knowsAbout: [
      "Enterprise System Architecture",
      "AI Infrastructure Engineering",
      "Scalable Product Execution",
      "Technology Operations",
    ],
  },
];

const leaders = [
  {
    initials: "MZ",
    name: "Mahnoor Zafar",
    title: "Founder & Strategic Systems Lead",
    accentColor: "#3B6AFF",
    linkedin: "https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/",
    bio: [
      "Mahnoor founded Daeson Technologies to address a structural gap she observed across operationally complex industries: businesses patching together generic SaaS tools and calling it infrastructure — then wondering why their operations remained fragmented, slow, and dependent on vendors who don't understand their workflow.",
      "Her focus is on the strategic layer of operational systems design — understanding how businesses actually run before designing the architecture that should power them. She leads discovery, operational architecture, and strategic client relationships across Daeson's real estate and governance-sensitive industry engagements.",
      "Mahnoor is particularly focused on industries where operational precision is a competitive variable: real estate with portfolio and investor complexity, and Islamic finance where compliance infrastructure directly affects institutional credibility.",
    ],
    areas: [
      "Operational Architecture & Workflow Design",
      "Real Estate Systems Strategy",
      "Governance-Sensitive Industry Infrastructure",
      "Workflow Intelligence & Process Design",
      "Strategic Client Partnerships",
    ],
    contactLabel: "Strategic advisory and partnership discussions",
  },
  {
    initials: "UA",
    name: "Usman Ahmad",
    title: "Co-Founder & Technical Lead",
    accentColor: "#6A7FFF",
   
    bio: [
      "Usman leads the technical execution of Daeson's operational infrastructure platforms. His responsibility spans system architecture, engineering leadership, and the technical operations that ensure every platform we build is enterprise-grade, scalable, and fully owned by the client.",
      "He translates Daeson's operational architecture decisions into production systems — overseeing the engineering of AI-integrated platforms for real estate, Islamic finance, and enterprise operations. His approach prioritizes clean architecture, long-term maintainability, and systems that perform at the scale clients actually need.",
      "Prior to Daeson, Usman worked across the full stack of enterprise software development with particular depth in AI integration, data infrastructure, and system design for regulated industries.",
    ],
    areas: [
      "Enterprise System Architecture",
      "AI Infrastructure & Integration",
      "Scalable Product Engineering",
      "Technology Operations",
      "Full-Stack Platform Development",
    ],
    contactLabel: "Technical advisory and engineering partnership discussions",
  },
];

function LinkedInButton({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-[#0A66C2]/40 bg-white/[0.02] hover:bg-[#0A66C2]/[0.06] text-[11px] font-semibold text-[#94A3B8] hover:text-[#0A66C2] transition-all duration-200 group"
    >
      <Linkedin size={11} />
      {name} on LinkedIn
      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default function AboutPage() {
  return (
    <>
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Header */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-8">
            Leadership
          </div>
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-6">
            <h1 className="text-[42px] md:text-[52px] font-extrabold text-white tracking-tight leading-[1.06]">
              The People Behind{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Daeson Technologies.
              </span>
            </h1>
            <a
              href="https://www.linkedin.com/company/daeson-tech-agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-[#0A66C2]/40 bg-white/[0.02] hover:bg-[#0A66C2]/[0.06] text-[11px] font-semibold text-[#94A3B8] hover:text-[#0A66C2] transition-all duration-200 group shrink-0"
            >
              <Linkedin size={11} />
              Company LinkedIn
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p className="text-[16px] text-[#94A3B8] max-w-2xl leading-relaxed">
            Daeson Technologies is a focused team built around two disciplines: operational systems strategy
            and enterprise technology execution. We keep the team small and the expertise deep.
          </p>
        </section>

        {/* Leader Profiles */}
        <section className="relative max-w-7xl mx-auto px-6 pb-20 space-y-6">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="bg-[#0D1521] border border-white/[0.07] rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-[280px_1fr] divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
                {/* Left — Identity panel */}
                <div className="p-8 flex flex-col gap-6">
                  {/* Portrait */}
                  <div
                    className="w-16 h-16 rounded-2xl border flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${leader.accentColor}18 0%, ${leader.accentColor}08 100%)`,
                      borderColor: `${leader.accentColor}28`,
                    }}
                  >
                    <span
                      className="text-[18px] font-black tracking-tight"
                      style={{ color: leader.accentColor }}
                    >
                      {leader.initials}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[20px] font-bold text-white tracking-tight mb-1">
                      {leader.name}
                    </h2>
                    <p
                      className="text-[12px] font-semibold uppercase tracking-[0.1em] leading-snug"
                      style={{ color: leader.accentColor }}
                    >
                      {leader.title}
                    </p>
                  </div>

                  {/* Areas */}
                  <div>
                    <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-[0.14em] mb-3">
                      Areas of focus
                    </p>
                    <div className="space-y-2">
                      {leader.areas.map((area) => (
                        <div
                          key={area}
                          className="flex items-start gap-2.5 text-[12px] text-[#94A3B8]"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                            style={{ backgroundColor: leader.accentColor }}
                          />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact note + LinkedIn */}
                  <div className="mt-auto space-y-3">
                    <p className="text-[11px] text-[#4B5568] italic leading-relaxed">
                      Open to {leader.contactLabel}.
                    </p>
                    {leader.linkedin && (
                      <LinkedInButton href={leader.linkedin} name={leader.name.split(" ")[0]} />
                    )}
                  </div>
                </div>

                {/* Right — Bio */}
                <div className="p-8">
                  <div className="space-y-4 text-[14px] text-[#94A3B8] leading-[1.82]">
                    {leader.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Business Development section */}
        <section className="relative max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-[#0A0D14] border border-white/[0.07] rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-[1.5fr_1px_1fr] gap-8 md:gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-white/[0.07] bg-white/[0.02] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8] mb-5">
                  Business Development & Partnerships
                </div>
                <h2 className="text-[24px] font-bold text-white tracking-tight mb-3">
                  Work with Daeson Technologies
                </h2>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed max-w-md">
                  We are selective about engagements and prioritize long-term operational fit over volume.
                  If you are a strategic partner, institutional client, or advisory contact, we want to hear from you.
                  All partnership inquiries are reviewed by our founding team directly.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block bg-white/[0.05] h-full" />

              {/* Contacts */}
              <div className="space-y-5">
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-[0.14em]">Contact</p>
                <div className="space-y-4">
                  <a
                    href="mailto:partnerships@daesontechagency.online"
                    className="flex items-center gap-3 text-[13px] text-[#94A3B8] hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3B6AFF]/10 border border-[#3B6AFF]/20 flex items-center justify-center shrink-0">
                      <Mail size={13} className="text-[#3B6AFF]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-[#EDF2FF]">Strategic Partnerships</span>
                      <span className="text-[11px] text-[#4B5568]">partnerships@daesontechagency.online</span>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@daesontechagency.online"
                    className="flex items-center gap-3 text-[13px] text-[#94A3B8] hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
                      <Mail size={13} className="text-[#94A3B8]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-[#EDF2FF]">General Contact</span>
                      <span className="text-[11px] text-[#4B5568]">contact@daesontechagency.online</span>
                    </div>
                  </a>
                </div>

                <div className="h-px bg-white/[0.05]" />

                <div>
                  <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-[0.14em] mb-2">
                    Response expectation
                  </p>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                    We respond within{" "}
                    <span className="text-[#EDF2FF] font-semibold">24 business hours</span>.
                    Partnership and strategic inquiries are handled by leadership.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[13px] font-semibold rounded-lg transition-colors"
                >
                  Schedule consultation
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company values */}
        <section className="relative max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Operational depth over breadth",
                body: "We serve a small number of industries and develop deep knowledge of how they actually operate — not surface-level familiarity.",
                accent: "#3B6AFF",
              },
              {
                title: "Ownership over dependency",
                body: "Every system we build is fully owned by the client. No vendor lock-in, no perpetual licensing, no black-box infrastructure.",
                accent: "#C9A84C",
              },
              {
                title: "Architecture before code",
                body: "We design before we build. Discovery and operational mapping come before development — because systems built on misunderstood workflows fail.",
                accent: "#10B981",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-[#0D1521] border border-white/[0.07] rounded-xl p-6 hover:border-white/[0.11] transition-all duration-300"
              >
                <div
                  className="w-1 h-5 rounded-full mb-5"
                  style={{ backgroundColor: value.accent }}
                />
                <h3 className="text-[15px] font-bold text-white mb-3 tracking-tight">{value.title}</h3>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
