import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Partnerships — Real Estate & Fintech",
  description:
    "Daeson Technologies seeks strategic partnerships with real estate firms, Islamic finance institutions, operational advisors, and technology partners aligned with our mission of building owned operational infrastructure.",
  keywords: [
    "Daeson Technologies partnerships",
    "Islamic finance strategic partnership",
    "real estate technology partnership",
    "Shariah advisory collaboration",
    "enterprise technology alliance",
  ],
  alternates: { canonical: "https://daesontechnologies.online/partnerships" },
  openGraph: {
    title: "Strategic Partnerships | Daeson Technologies",
    description:
      "Strategic partnerships with real estate firms, Islamic finance institutions, and technology partners building owned operational infrastructure.",
    url: "https://daesontechnologies.online/partnerships",
  },
};

const currentPartnership = {
  name: "Alhamd Shariah Advisory",
  type: "Strategic Shariah Advisory Collaboration",
  description:
    "Alhamd Shariah Advisory provides strategic domain expertise and Shariah operational knowledge supporting the development of Amanah AI. This collaboration ensures that Amanah AI's workflow architecture is grounded in practical Shariah compliance requirements — informed by qualified Shariah expertise rather than theoretical assumptions.",
  scope: [
    "Domain expertise for Amanah AI workflow architecture",
    "Shariah operational requirements review",
    "Practical compliance workflow alignment",
    "Advisory guidance on governance documentation approach",
  ],
  disclaimer:
    "This collaboration supports domain alignment and workflow development. It does not constitute Shariah endorsement of AI-generated compliance determinations. All Shariah rulings remain the responsibility of qualified scholars.",
};

const partnershipTypes = [
  {
    title: "Real Estate Firms & Brokerages",
    description:
      "We seek relationships with real estate operators, property developers, and brokerage leaders who understand the operational gap between generic SaaS tools and what their business actually needs. Early partnership engagements may include co-development of operational specifications and preferred access to the Real Estate Operations Platform.",
    ideal: ["Property development firms", "Commercial real estate operators", "Residential brokerages", "Real estate investment groups"],
    color: "var(--blue)",
  },
  {
    title: "Islamic Finance Institutions",
    description:
      "We are actively seeking introductions to Islamic banks, Islamic fintech platforms, and Shariah-compliant investment firms operating across GCC, Pakistan, and UK markets. Early institutional partners inform Amanah AI's compliance architecture and gain early engagement access.",
    ideal: ["Islamic banks and financial institutions", "Islamic fintech platforms", "Shariah-compliant investment funds", "Islamic payment institutions"],
    color: "var(--gold)",
  },
  {
    title: "Shariah Advisory & Governance",
    description:
      "We welcome relationships with qualified Shariah scholars, advisory boards, and governance institutions who are interested in how AI can support — not replace — Shariah compliance operations. Collaboration is always advisory and complementary to human scholarly decision-making.",
    ideal: ["Shariah advisory boards", "Islamic governance consultancies", "Compliance advisory firms", "Academic Islamic finance institutions"],
    color: "var(--gold)",
  },
  {
    title: "Operational & Technology Advisors",
    description:
      "We are interested in relationships with operational advisors, technology consultants, and professional services firms who work with organizations in our target sectors and believe their clients deserve better infrastructure than generic SaaS.",
    ideal: ["Management consultants (real estate / finance)", "Technology implementation firms", "Enterprise advisory practices", "Independent operational advisors"],
    color: "var(--blue)",
  },
];

const partnershipSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Strategic Partnerships — Daeson Technologies",
  description:
    "Daeson Technologies seeks strategic partnerships with real estate firms, Islamic finance institutions, and operational advisors aligned with its mission of building owned operational infrastructure.",
  url: "https://daesontechnologies.online/partnerships",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
};

export default function PartnershipsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }}
      />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--gold-border)", backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}
          >
            Strategic Partnerships
          </div>

          <h1
            className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.06] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Building the Right Relationships
            <br />
            <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
              for the Right Outcomes
            </span>
          </h1>

          <p
            className="text-[17px] leading-relaxed mb-6 max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Daeson Technologies is early-stage and growing deliberately. We do not pursue partnerships
            for optics — we seek relationships with organizations that share our belief that serious
            businesses deserve infrastructure built for them.
          </p>
          <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
            If you represent an organization that could benefit from or contribute to operational
            infrastructure development in real estate or Islamic finance, we welcome a direct conversation.
          </p>
        </div>

        {/* Current Partnership */}
        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--text-faint)" }}>
              Current Strategic Collaboration
            </p>

            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
                {/* Left */}
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                    style={{ border: "1px solid var(--gold-border)", backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}
                  >
                    {currentPartnership.type}
                  </div>
                  <h2
                    className="text-[26px] font-bold mb-4 tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {currentPartnership.name}
                  </h2>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {currentPartnership.description}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Collaboration Scope
                  </p>
                  <ul className="space-y-3 mb-6">
                    {currentPartnership.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--gold)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rounded-xl px-4 py-3"
                    style={{ backgroundColor: "var(--bg-elevated)", borderLeft: "2px solid var(--gold-border)" }}
                  >
                    <p className="text-[12px] leading-relaxed italic" style={{ color: "var(--text-faint)" }}>
                      {currentPartnership.disclaimer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Seeking
            </p>
            <h2
              className="text-[30px] md:text-[38px] font-bold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Strategic Industry Relationships
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
              We are at an early stage and selective about the relationships we build.
              Below are the types of organizations we are actively seeking to engage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-1 h-10 rounded-full mb-5"
                  style={{ backgroundColor: type.color }}
                />
                <h3
                  className="text-[17px] font-bold mb-3 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {type.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {type.description}
                </p>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                    Ideal for
                  </p>
                  <ul className="space-y-1.5">
                    {type.ideal.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[12px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: type.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div>
                <h2
                  className="text-[28px] md:text-[34px] font-bold tracking-tight mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Interested in a Strategic Conversation?
                </h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  We respond to every serious partnership inquiry personally. If you represent an
                  organization that could benefit from or contribute to our work, we welcome a
                  direct, no-pressure conversation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                    style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)" }}
                  >
                    Begin Partnership Discussion
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="mailto:partnerships@daesontechnologies.online"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  >
                    partnerships@daesontechnologies.online
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Response Time", value: "Within 48 business hours" },
                  { label: "Format", value: "Direct conversation, no sales process" },
                  { label: "Commitment", value: "Exploratory — no obligation" },
                  { label: "Primary Contact", value: "Founding team directly" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <span className="text-[12px] font-semibold" style={{ color: "var(--text-faint)" }}>
                      {item.label}
                    </span>
                    <span className="text-[13px] font-medium" style={{ color: "var(--text-primary)" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
