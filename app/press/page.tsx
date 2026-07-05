import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media — Daeson Technologies News & Announcements",
  description:
    "Daeson Technologies press releases, company announcements, partnership news, product updates, and media coverage. Enterprise technology news from UAE and GCC markets.",
  alternates: { canonical: "https://daesontechnologies.online/press" },
};

const announcements = [
  {
    date: "June 2025",
    type: "Partnership Announcement",
    title: "Daeson Technologies Announces Strategic Shariah Advisory Collaboration with Alhamd Shariah Advisory",
    excerpt:
      "Daeson Technologies has formalized its strategic collaboration with Alhamd Shariah Advisory to provide domain expertise and Shariah operational knowledge supporting the development of Amanah AI — the company's Islamic finance operational intelligence platform.",
    href: "/partnerships",
    external: false,
  },
  {
    date: "May 2025",
    type: "Product Update",
    title: "Amanah AI Enters Active Development Phase: Murabaha Workflow Module Underway",
    excerpt:
      "Daeson Technologies announces that Amanah AI has entered active development, with the Murabaha contract analysis and workflow digitization module currently in build phase. The platform is designed for Islamic financial institutions seeking to automate compliance operations.",
    href: "/amanah-ai",
    external: false,
  },
  {
    date: "April 2025",
    type: "Company News",
    title: "Daeson Technologies Launches Enterprise Research Center",
    excerpt:
      "Daeson Technologies has launched its Research Center, publishing practitioner-focused whitepapers and industry reports on real estate technology, Islamic finance AI, and enterprise workflow automation for decision-makers across UAE, GCC, Canada, and UK markets.",
    href: "/research",
    external: false,
  },
  {
    date: "March 2025",
    type: "Company News",
    title: "Daeson Technologies Expands Enterprise Solutions to Cover Digital Transformation and Fintech Infrastructure",
    excerpt:
      "Daeson Technologies has expanded its enterprise solution portfolio to include comprehensive digital transformation programs and fintech infrastructure development, responding to growing demand from enterprise organizations in GCC and Canadian markets.",
    href: "/solutions",
    external: false,
  },
];

const mediaMentions = [
  {
    publication: "Gulf Business",
    title: "The Rise of Owned Operational Infrastructure in GCC Real Estate",
    description: "Feature on enterprise technology adoption patterns in UAE and GCC real estate markets.",
    date: "2025",
    href: "#",
  },
  {
    publication: "Islamic Finance News",
    title: "AI and Shariah Compliance: What the Technology Actually Does",
    description: "Analysis of AI applications in Islamic finance operations with commentary on governance requirements.",
    date: "2025",
    href: "#",
  },
  {
    publication: "Enterprise Technology Review",
    title: "Why Enterprise Workflow Automation Needs a Rethink",
    description: "Coverage of the limitations of RPA-based automation and the emergence of intelligent workflow systems.",
    date: "2025",
    href: "#",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Press & Media — Daeson Technologies",
  url: "https://daesontechnologies.online/press",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Press & Media", item: "https://daesontechnologies.online/press" },
    ],
  },
};

export default function PressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Press & Media
          </div>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6" style={{ color: "var(--text-primary)" }}>
            News & Announcements
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-8" style={{ color: "var(--text-secondary)" }}>
            Company news, product updates, partnership announcements, and media coverage from
            Daeson Technologies.
          </p>

          {/* Press contact */}
          <div
            className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>Press Inquiries</p>
              <a
                href="mailto:press@daesontechnologies.online"
                className="text-[13px] font-medium transition-colors"
                style={{ color: "var(--green)" }}
              >
                press@daesontechnologies.online
              </a>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: "var(--border)" }} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>Response Time</p>
              <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
              Announcements & Press Releases
            </p>
            <div className="space-y-5">
              {announcements.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                        style={{ backgroundColor: "var(--green-muted)", color: "var(--green)" }}
                      >
                        {item.type}
                      </span>
                      <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{item.date}</span>
                    </div>
                  </div>
                  <h2 className="text-[17px] font-bold tracking-tight mb-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h2>
                  <p className="text-[13px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                    {item.excerpt}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                    style={{ color: "var(--green)" }}
                  >
                    Read More <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Mentions */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Media Coverage
            </p>
            <h2 className="text-[28px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              In the Press
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {mediaMentions.map((m, i) => (
              <div
                key={i}
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <p className="text-[11px] font-bold mb-3" style={{ color: "var(--green)" }}>{m.publication}</p>
                <h3 className="text-[13px] font-semibold tracking-tight mb-2 flex-1 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {m.title}
                </h3>
                <p className="text-[11px] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {m.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{m.date}</span>
                  <a
                    href={m.href}
                    className="inline-flex items-center gap-1 text-[11px] font-medium transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    View <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <h2 className="text-[26px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                  Press Kit & Media Resources
                </h2>
                <p className="text-[14px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  For journalists, analysts, and media professionals — our press kit includes company overview,
                  product descriptions, founder bios, and approved brand assets.
                </p>
                <div className="flex gap-3">
                  <a
                    href="mailto:press@daesontechnologies.online"
                    className="inline-flex items-center gap-2 px-5 py-3 text-white text-[13px] font-semibold rounded-lg"
                    style={{ backgroundColor: "var(--green)" }}
                  >
                    Request Press Kit <ArrowRight size={13} />
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  >
                    About the Company
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Press Contact", value: "press@daesontechnologies.online" },
                  { label: "Partnerships", value: "partnerships@daesontechnologies.online" },
                  { label: "General", value: "contact@daesontechnologies.online" },
                  { label: "Response Time", value: "Within 24 business hours" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <span className="text-[11px] font-semibold" style={{ color: "var(--text-faint)" }}>{item.label}</span>
                    <span className="text-[12px]" style={{ color: "var(--text-primary)" }}>{item.value}</span>
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
