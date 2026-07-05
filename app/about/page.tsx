import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Mahnoor Zafar & Usman Ahmad, Founders of Daeson Technologies",
  description:
    "Daeson Technologies is led by Mahnoor Zafar (Founder & Strategic Systems Lead) and Usman Ahmad (Co-Founder & Technical Lead). Building owned AI-powered operational infrastructure for real estate, Islamic finance, and enterprise organizations.",
  keywords: [
    "Mahnoor Zafar founder",
    "Daeson Technologies founders",
    "operational infrastructure company",
    "real estate AI company founders",
    "Islamic finance AI founders",
    "enterprise software founders UAE",
  ],
  openGraph: {
    title: "About Daeson Technologies — Mahnoor Zafar & Usman Ahmad",
    description:
      "Daeson Technologies is led by Mahnoor Zafar and Usman Ahmad. A founder-led, workflow-first operational infrastructure company serving real estate, Islamic finance, and enterprise organizations.",
    url: "https://daesontechnologies.online/about",
  },
  alternates: {
    canonical: "https://daesontechnologies.online/about",
  },
};

const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://daesontechnologies.online/about#mahnoor-zafar",
    name: "Mahnoor Zafar",
    jobTitle: "Founder & Strategic Systems Lead",
    description:
      "Mahnoor Zafar is the Founder and Strategic Systems Lead of Daeson Technologies. She leads operational architecture, workflow intelligence design, and strategic client relationships across real estate and governance-sensitive industry engagements.",
    worksFor: {
      "@type": "Organization",
      name: "Daeson Technologies",
      url: "https://daesontechnologies.online",
    },
    url: "https://daesontechnologies.online/about",
    sameAs: [
      "https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/",
    ],
    knowsAbout: [
      "Operational Infrastructure",
      "Real Estate Systems Strategy",
      "Workflow Intelligence Design",
      "Governance-Sensitive Industry Systems",
      "Islamic Finance Operations",
      "Enterprise Workflow Architecture",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://daesontechnologies.online/about#usman-ahmad",
    name: "Usman Ahmad",
    jobTitle: "Co-Founder & Technical Lead",
    description:
      "Usman Ahmad is Co-Founder and Technical Lead of Daeson Technologies. He leads system architecture, engineering execution, and AI infrastructure across Daeson's enterprise operational platforms.",
    worksFor: {
      "@type": "Organization",
      name: "Daeson Technologies",
      url: "https://daesontechnologies.online",
    },
    url: "https://daesontechnologies.online/about",
    knowsAbout: [
      "Enterprise System Architecture",
      "AI Infrastructure Engineering",
      "Scalable Product Execution",
      "Technology Operations",
      "Full-Stack Platform Development",
    ],
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://daesontechnologies.online/about",
  url: "https://daesontechnologies.online/about",
  name: "About Daeson Technologies — Mahnoor Zafar & Usman Ahmad",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  about: { "@id": "https://daesontechnologies.online/#organization" },
};

const leaders = [
  {
    initials: "MZ",
    name: "Mahnoor Zafar",
    title: "Founder & Strategic Systems Lead",
    accentColor: "var(--blue)",
    tintHex: "#888888",
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
    accentColor: "var(--text-secondary)",
    tintHex: "#888888",
    linkedin: null as null | string,
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
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 group"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-elevated)", color: "var(--text-secondary)" }}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)" }} className="min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

        {/* Header */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-surface)", color: "var(--text-muted)" }}
          >
            Leadership
          </div>
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-6">
            <h1
              className="speakable text-[42px] md:text-[52px] font-extrabold tracking-tight leading-[1.06]"
              style={{ color: "var(--text-primary)" }}
            >
              The People Behind{" "}
              <span style={{ color: "var(--blue)" }}>Daeson Technologies.</span>
            </h1>
            <a
              href="https://www.linkedin.com/company/daeson-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 group shrink-0"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-surface)", color: "var(--text-secondary)" }}
            >
              <Linkedin size={11} />
              Company LinkedIn
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p className="text-[16px] max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies is a focused team built around two disciplines: operational systems strategy
            and enterprise technology execution. We keep the team small and the expertise deep.
          </p>
        </section>

        {/* Founder authority — positioning statement */}
        <div className="section-light py-4">
        <section className="relative max-w-7xl mx-auto px-6 pb-8">
          <div
            className="rounded-2xl p-7 border-l-4"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderLeftColor: "var(--blue)",
              borderLeftWidth: "3px",
            }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
                  Approach
                </p>
                <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  Workflow-first design
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  We understand how businesses operate before we design the systems that should power them.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
                  Ownership model
                </p>
                <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  No vendor lock-in
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Every system we build is fully owned by the client — source code, data, and architecture.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
                  Industries
                </p>
                <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  Deep over broad
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Real estate, Islamic finance, and enterprise operations — industries where operational
                  precision is a competitive variable.
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Leader Profiles */}
        <section className="relative max-w-7xl mx-auto px-6 pb-20 space-y-6 pt-4">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <div
                className="grid md:grid-cols-[280px_1fr] divide-y md:divide-y-0 md:divide-x"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Left — Identity panel */}
                <div className="p-8 flex flex-col gap-6" style={{ borderColor: "var(--border)" }}>
                  {/* Portrait */}
                  <div
                    className="w-16 h-16 rounded-2xl border flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${leader.tintHex}18 0%, ${leader.tintHex}08 100%)`,
                      borderColor: `${leader.tintHex}28`,
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
                    <h2 className="text-[20px] font-bold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                      {leader.name}
                    </h2>
                    <p
                      className="text-[12px] font-semibold uppercase tracking-widest leading-snug"
                      style={{ color: leader.accentColor }}
                    >
                      {leader.title}
                    </p>
                  </div>

                  {/* Areas */}
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-3"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Areas of focus
                    </p>
                    <div className="space-y-2">
                      {leader.areas.map((area) => (
                        <div
                          key={area}
                          className="flex items-start gap-2.5 text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
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
                    <p className="text-[11px] italic leading-relaxed" style={{ color: "var(--text-faint)" }}>
                      Open to {leader.contactLabel}.
                    </p>
                    {leader.linkedin && (
                      <LinkedInButton href={leader.linkedin} name={leader.name.split(" ")[0]} />
                    )}
                  </div>
                </div>

                {/* Right — Bio */}
                <div className="p-8">
                  <div className="space-y-4 text-[14px] leading-[1.82]" style={{ color: "var(--text-secondary)" }}>
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
        <div className="section-light py-4">
        <section className="relative max-w-7xl mx-auto px-6 pb-20">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
          >
            <div className="grid md:grid-cols-[1.5fr_1px_1fr] gap-8 md:gap-12 items-start">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-[0.14em] mb-5"
                  style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-elevated)", color: "var(--text-secondary)" }}
                >
                  Business Development & Partnerships
                </div>
                <h2 className="text-[24px] font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                  Work with Daeson Technologies
                </h2>
                <p className="text-[14px] leading-relaxed max-w-md" style={{ color: "var(--text-secondary)" }}>
                  We are selective about engagements and prioritize long-term operational fit over volume.
                  If you are a strategic partner, institutional client, or advisory contact, we want to hear from you.
                  All partnership inquiries are reviewed by our founding team directly.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-full" style={{ backgroundColor: "var(--border)" }} />

              {/* Contacts */}
              <div className="space-y-5">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Contact
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:partnerships@daesontechnologies.online"
                    className="flex items-center gap-3 text-[13px] transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--blue-muted)", border: "1px solid var(--blue-border)" }}
                    >
                      <Mail size={13} style={{ color: "var(--blue)" }} />
                    </div>
                    <div>
                      <span className="block font-semibold" style={{ color: "var(--text-primary)" }}>Strategic Partnerships</span>
                      <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>partnerships@daesontechnologies.online</span>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@daesontechnologies.online"
                    className="flex items-center gap-3 text-[13px] transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                    >
                      <Mail size={13} style={{ color: "var(--text-muted)" }} />
                    </div>
                    <div>
                      <span className="block font-semibold" style={{ color: "var(--text-primary)" }}>General Contact</span>
                      <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>contact@daesontechnologies.online</span>
                    </div>
                  </a>
                </div>

                <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: "var(--text-faint)" }}>
                    Response expectation
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    We respond within{" "}
                    <span className="font-semibold" style={{ color: "var(--text-primary)" }}>24 business hours</span>.
                    Partnership and strategic inquiries are handled by leadership.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                >
                  Schedule consultation
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Company values */}
        <section className="relative max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Operational depth over breadth",
                body: "We serve a small number of industries and develop deep knowledge of how they actually operate — not surface-level familiarity. Real estate and Islamic finance are not adjacent to enterprise software; they require distinct expertise.",
                accent: "var(--blue)",
              },
              {
                title: "Ownership over dependency",
                body: "Every system we build is fully owned by the client. No vendor lock-in, no perpetual licensing, no black-box infrastructure. Businesses that operate at scale deserve to own the systems that power them.",
                accent: "var(--gold)",
              },
              {
                title: "Architecture before code",
                body: "We design before we build. Discovery and operational mapping come before development — because systems built on misunderstood workflows fail, regardless of how well they are engineered.",
                accent: "#10B981",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl p-6 transition-all duration-300"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-1 h-5 rounded-full mb-5"
                  style={{ backgroundColor: value.accent }}
                />
                <h3 className="text-[15px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {value.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
