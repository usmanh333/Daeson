import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join Daeson Technologies",
  description:
    "Build enterprise technology at Daeson Technologies. We're hiring engineers, business development professionals, and operational advisors. Plus partnerships and referral programs.",
  alternates: { canonical: "https://daesontechnologies.online/careers" },
};

const values = [
  {
    title: "Operational Depth Over Surface",
    body: "We build systems that understand industries at the operational level. We hire people who think the same way — deeply, specifically, with genuine interest in how businesses actually work.",
  },
  {
    title: "Ownership Mindset",
    body: "We build owned infrastructure because we believe businesses should own what they depend on. The same applies to our team — we take ownership of outcomes, not just tasks.",
  },
  {
    title: "Substance Over Performance",
    body: "No performative productivity. No manufactured urgency. We work carefully, communicate clearly, and deliver systems that stand up to real-world use.",
  },
  {
    title: "Governance at the Core",
    body: "The industries we serve require careful, auditable decision-making. We hire people who take that seriously — in their work and in how they operate as professionals.",
  },
];

const featuredInternship = {
  title: "Business Development Intern",
  type: "Internship",
  badge: "Now Hiring",
  location: "Remote / Hybrid (UAE preferred)",
  duration: "3–6 months",
  linkedinPost: "https://www.linkedin.com/posts/daeson-technologies_hiring-internship-businessdevelopment-activity-7473648269986934784-rtbA",
  description:
    "Join the Daeson Technologies business development team as an intern and gain hands-on experience in enterprise B2B outreach, market research, and partnership development across real estate and Islamic finance sectors. This is a meaningful role — not a coffee-and-admin internship.",
  responsibilities: [
    "Support outbound BD efforts targeting real estate firms and Islamic financial institutions",
    "Research target markets and qualify enterprise prospects in UAE, GCC, and Canadian markets",
    "Assist in preparing executive engagement materials and capability presentations",
    "Participate in partnership discussions and maintain CRM pipeline records",
    "Contribute to market intelligence gathering and competitive analysis",
  ],
  ideal: [
    "Final-year undergraduate or recent graduate (Business, Finance, or Technology focus)",
    "Strong interest in enterprise technology, real estate, or Islamic finance",
    "Professional written and verbal communication skills",
    "Self-starter who can work independently with remote-first culture",
    "Arabic language skills are advantageous but not required",
  ],
  compensation: "Performance-based stipend + professional mentorship + direct access to founding team",
};

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Technical",
    location: "Remote (UAE / Canada)",
    description:
      "Senior engineer with full-stack expertise to join the core development team. You'll work on real estate operational platforms, Amanah AI, and enterprise client systems.",
    requirements: [
      "5+ years full-stack development experience",
      "Strong TypeScript, React/Next.js, Node.js",
      "Enterprise system architecture experience",
      "Interest in real estate or Islamic finance technology",
    ],
    href: "/contact?role=senior-fullstack",
  },
  {
    title: "AI/ML Engineer",
    type: "Technical",
    location: "Remote (UAE / Canada)",
    description:
      "Join the AI team working on Amanah AI's document analysis, workflow automation, and operational intelligence layers — at the intersection of AI engineering and real enterprise operations.",
    requirements: [
      "Experience with LLM integration and fine-tuning",
      "Python, PyTorch/TensorFlow proficiency",
      "Enterprise AI systems design experience",
      "Understanding of governance-sensitive AI requirements",
    ],
    href: "/contact?role=ai-engineer",
  },
  {
    title: "Business Development Lead",
    type: "Business",
    location: "UAE / GCC (On-site preferred)",
    description:
      "Drive enterprise business development across UAE and GCC markets. Engage C-suite prospects in real estate and financial services, qualify opportunities, and support the engagement process through to closed partnerships.",
    requirements: [
      "5+ years enterprise B2B sales or BD experience",
      "Deep familiarity with UAE/GCC real estate or financial services",
      "Ability to engage at C-suite and board level",
      "Arabic language skills advantageous",
    ],
    href: "/contact?role=bd-lead",
  },
  {
    title: "Islamic Finance Domain Consultant",
    type: "Advisory",
    location: "Remote or GCC-based",
    description:
      "A qualified Islamic finance professional to support the operational design and domain accuracy of Amanah AI — working directly with the product team on workflow logic, compliance requirements, and domain validation.",
    requirements: [
      "Practical Islamic finance operations experience",
      "Familiarity with Murabaha, Ijara, and other Islamic structures",
      "Experience in Shariah compliance or Islamic banking operations",
      "Advisory or consulting background preferred",
    ],
    href: "/contact?role=islamic-finance-consultant",
  },
];

const futureOpportunities = [
  {
    area: "Product Management",
    description: "We expect to open a product management role as our platform portfolio matures. Experience in enterprise SaaS or operational technology is key.",
    timeline: "Q3 2025",
  },
  {
    area: "Shariah Compliance Analyst",
    description: "As Amanah AI scales, we'll need dedicated compliance analysts with hands-on Islamic finance experience to support governance workflows.",
    timeline: "Q3 2025",
  },
  {
    area: "Enterprise Sales (GCC)",
    description: "A dedicated enterprise sales professional for GCC market expansion — with strong relationships in financial services and real estate sectors.",
    timeline: "Q4 2025",
  },
  {
    area: "Operations Lead",
    description: "A generalist operations leader to manage internal business operations as the company scales its client delivery capacity.",
    timeline: "Q4 2025",
  },
];

const partnerOpps = [
  {
    title: "Partner Program",
    description:
      "Boutique digital agencies, software consultancies, and IT firms with clients in real estate, fintech, or Islamic finance can become referral or delivery partners. We're selective — we partner with firms whose clients deserve better infrastructure.",
    ideal: ["Digital agencies with real estate clients", "Tech consultancies in GCC or Canada", "Enterprise IT service firms"],
    href: "/partnerships",
  },
  {
    title: "Referral Partnership",
    description:
      "If you work with enterprise organizations that need better operational infrastructure — as a consultant, advisor, or professional services provider — our referral program compensates introductions that result in engagements.",
    ideal: ["Management consultants", "Financial advisors", "Operations specialists"],
    href: "/partnerships",
  },
  {
    title: "Business Development Partnership",
    description:
      "We're open to BD partnerships with individuals or organizations with strong relationships with enterprise decision-makers in our target sectors and markets.",
    ideal: ["Market connectors in UAE/GCC", "Real estate network leaders", "Islamic finance network participants"],
    href: "/partnerships",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers — Daeson Technologies",
  url: "https://daesontechnologies.online/careers",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://daesontechnologies.online/careers" },
    ],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Business Development Intern",
  description: "Join Daeson Technologies as a Business Development Intern. Support enterprise BD outreach in real estate and Islamic finance sectors. Gain hands-on experience in enterprise technology sales and partnership development.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Daeson Technologies",
    sameAs: "https://daesontechnologies.online",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
  },
  employmentType: "INTERN",
  datePosted: "2025-01-01",
  validThrough: "2025-12-31",
  url: "https://daesontechnologies.online/careers",
};

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Careers at Daeson
          </div>
          <h1 className="text-[42px] md:text-[58px] font-bold tracking-tight leading-[1.04] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Build Enterprise Technology
            <br />
            <span style={{ color: "var(--green)" }}>That Actually Gets Used</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies builds operational infrastructure for real estate, Islamic finance,
            and enterprise operations. We hire for depth, ownership, and operational thinking.
          </p>
        </div>

        {/* ── FEATURED INTERNSHIP ── */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">

            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
                style={{ backgroundColor: "#FEF3C7", color: "#92400E", border: "1px solid #FDE68A" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                {featuredInternship.badge}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                Featured Opportunity
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "2px solid var(--green-border)", backgroundColor: "var(--bg-card)" }}
            >
              {/* Card Header */}
              <div
                className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--green-muted)" }}
              >
                <div>
                  <h2 className="text-[22px] font-bold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                    {featuredInternship.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest"
                      style={{ backgroundColor: "var(--green)", color: "#fff" }}
                    >
                      {featuredInternship.type}
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                      {featuredInternship.location}
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                      Duration: {featuredInternship.duration}
                    </span>
                  </div>
                </div>
                <a
                  href={featuredInternship.linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-semibold text-white shrink-0 transition-all duration-200"
                  style={{ backgroundColor: "#0A66C2" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  View on LinkedIn
                </a>
              </div>

              {/* Card body */}
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {featuredInternship.description}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {featuredInternship.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                    Ideal Candidate
                  </p>
                  <ul className="space-y-2 mb-6">
                    {featuredInternship.ideal.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rounded-xl px-4 py-3 mb-6"
                    style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--text-faint)" }}>
                      Compensation
                    </p>
                    <p className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      {featuredInternship.compensation}
                    </p>
                  </div>
                  <Link
                    href="/contact?role=bd-intern"
                    className="inline-flex items-center gap-2 px-5 py-3 text-white text-[13px] font-semibold rounded-xl transition-all duration-200"
                    style={{ backgroundColor: "var(--green)", boxShadow: "0 4px 16px rgba(4,120,87,0.25)" }}
                  >
                    Apply for BD Internship <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Daeson */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
            Why Daeson
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-xl"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="w-8 h-px mb-5" style={{ backgroundColor: "var(--green)" }} />
                <h3 className="text-[15px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {v.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Roles */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                Open Positions
              </p>
              <h2 className="text-[30px] md:text-[36px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                Current Openings
              </h2>
            </div>
            <div className="space-y-5">
              {openRoles.map((role, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      <h3 className="text-[17px] font-bold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest"
                          style={{ backgroundColor: "var(--green-muted)", color: "var(--green)" }}
                        >
                          {role.type}
                        </span>
                        <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{role.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[13px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                    {role.description}
                  </p>
                  <div className="mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                      What We&apos;re Looking For
                    </p>
                    <ul className="space-y-1.5">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={role.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-white text-[12px] font-semibold rounded-lg"
                    style={{ backgroundColor: "var(--green)" }}
                  >
                    Apply for This Role <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Opportunities */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Planned Hires
            </p>
            <h2 className="text-[28px] font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Future Opportunities
            </h2>
            <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
              These roles are not yet open but planned as the company grows. If your background
              aligns, we welcome a direct introduction now.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {futureOpportunities.map((opp, i) => (
              <div
                key={i}
                className="p-6 rounded-xl flex flex-col gap-3"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-bold" style={{ color: "var(--text-primary)" }}>
                    {opp.area}
                  </h3>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-faint)", border: "1px solid var(--border)" }}
                  >
                    {opp.timeline}
                  </span>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {opp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                Partner With Us
              </p>
              <h2 className="text-[28px] font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                Partner &amp; Referral Opportunities
              </h2>
              <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Not looking for a full-time role? We work with agencies, consultants, and BD partners.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {partnerOpps.map((opp, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl flex flex-col"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-[14px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {opp.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                    {opp.description}
                  </p>
                  <div className="mb-4">
                    {opp.ideal.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[11px] mb-1.5" style={{ color: "var(--text-muted)" }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={opp.href}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                    style={{ color: "var(--green)" }}
                  >
                    Learn More <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-[28px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-[14px] leading-relaxed max-w-md mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
            If your skills are a strong fit for what we&apos;re building, we welcome a
            direct introduction — even without an open listing.
          </p>
          <a
            href="mailto:careers@daesontechnologies.online"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl"
            style={{ backgroundColor: "var(--green)", boxShadow: "0 4px 16px rgba(4,120,87,0.25)" }}
          >
            Send a Direct Introduction <ArrowRight size={14} />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
