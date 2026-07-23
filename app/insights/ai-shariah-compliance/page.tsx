import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "AI and Shariah Compliance Infrastructure",
  description:
    "AI in Islamic finance is most valuable when it removes operational burden from compliance workflows — freeing scholars to focus on substantive jurisprudential decisions rather than manual document review.",
  alternates: { canonical: "https://daesontechnologies.online/insights/ai-shariah-compliance" },
  openGraph: {
    title: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
    url: "https://daesontechnologies.online/insights/ai-shariah-compliance",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
  description:
    "AI in Islamic finance is most valuable when it removes operational burden from compliance workflows — freeing scholars to focus on substantive jurisprudential decisions rather than manual document review.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/ai-shariah-compliance",
  datePublished: "2026-03-25",
  dateModified: "2026-06-01",
  about: [
    { "@type": "Thing", name: "Islamic finance AI" },
    { "@type": "Thing", name: "Shariah compliance" },
    { "@type": "Thing", name: "Murabaha workflow digitization" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(185,145,47,0.05) 0%, transparent 70%)" }}
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
                style={{ backgroundColor: "rgba(185,145,47,0.08)", color: "var(--gold)", border: "1px solid rgba(185,145,47,0.20)" }}
              >
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>10 min read</span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              AI and Shariah Compliance: Building Infrastructure That Supports Scholars
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The conversation about AI in Islamic finance has been distorted from the beginning. It has been
              framed as a question of whether machines can replace scholars — a question so obviously wrong
              that it has prevented more important questions from being asked.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            {/* Answer Capsule */}
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                The core argument
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                AI in Islamic finance is most valuable not when it tries to make jurisprudential decisions,
                but when it removes the operational burden that prevents scholars and compliance teams from
                doing their real work. The right question is not &ldquo;can AI do what scholars do?&rdquo; — it is
                &ldquo;what is taking up scholars&apos; time that AI could handle instead?&rdquo;
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The burden scholars actually carry
            </h2>
            <p className="text-[15px] leading-[1.85]">
              In most Islamic financial institutions, Shariah scholars spend a significant portion of their
              time on work that is not jurisprudential. They review documents that a trained compliance
              analyst could have pre-screened. They sign off on reports that were compiled manually from
              multiple data sources. They track contract statuses through email threads. They generate
              audit documentation by copying information from one document into another.
            </p>
            <p className="text-[15px] leading-[1.85]">
              None of this is what a Shariah scholar was educated to do. It is operational overhead that
              has accumulated because the institutions that employ scholars never invested in the
              infrastructure that would automate it.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The result is a compound problem: scholars are less available for the substantive governance
              decisions that require their expertise, compliance quality suffers because the manual process
              is inconsistent, and audit exposure grows because documentation is incomplete or unstructured.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What Shariah compliance actually requires, operationally
            </h2>
            <p className="text-[15px] leading-[1.85]">
              To understand where AI belongs in this picture, it helps to be specific about what Shariah
              compliance involves at the operational level in a typical Islamic bank or fintech institution.
            </p>
            <p className="text-[15px] leading-[1.85]">
              For a Murabaha financing contract — one of the most common Islamic finance structures —
              compliance involves: verifying that the contract structure adheres to Shariah principles,
              checking that the commodity or asset is Shariah-permissible, confirming that the cost and
              profit elements are correctly disclosed, documenting the scholar or compliance officer
              review, and creating an audit trail that can be examined by the institution&apos;s Shariah
              supervisory board or regulators.
            </p>
            <p className="text-[15px] leading-[1.85]">
              In most institutions, all of this happens manually. A compliance officer reads the contract.
              They check items on a checklist. They fill in a review form. They send it to a scholar for
              sign-off. The scholar reviews the form, adds comments, and approves or returns it. The
              documentation is saved in a folder. When an audit happens, someone retrieves the folder.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This process works at low volumes. At scale — thousands of Murabaha contracts per month
              across multiple branches — it becomes a bottleneck that threatens both speed and quality.
            </p>

            <div
              className="rounded-xl p-6 my-6"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <p className="text-[13px] font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Where manual compliance breaks down at scale:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Review quality becomes inconsistent — different compliance officers interpret guidelines differently",
                  "Scholar queues back up — high-volume periods create days-long delays on approvals",
                  "Documentation becomes incomplete — time pressure leads to shortcuts",
                  "Audit trails are fragmented across email, folders, and spreadsheets",
                  "Errors are discovered after contract execution, when correction is costly",
                  "Cross-branch consistency is impossible to enforce without a shared system",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What AI can do — and what it cannot
            </h2>
            <p className="text-[15px] leading-[1.85]">
              This is where the conversation about AI in Islamic finance needs to become more precise. AI
              cannot make jurisprudential rulings. It cannot determine whether a novel financial structure
              is permissible under Shariah principles. It cannot substitute for the scholarly deliberation
              that governs Islamic finance governance.
            </p>
            <p className="text-[15px] leading-[1.85]">
              What AI can do is automate the operational layer that precedes and surrounds those decisions.
              It can parse a Murabaha contract against a structured compliance framework, flag clauses that
              deviate from established standards, and generate a structured review document that a scholar
              can examine in minutes rather than hours. It can classify contracts by complexity and risk
              level, routing straightforward cases through an automated process and escalating unusual
              structures for detailed scholar review.
            </p>
            <p className="text-[15px] leading-[1.85]">
              It can generate audit documentation automatically from structured compliance data — producing
              the same report in seconds that a compliance officer previously spent hours compiling. It can
              maintain a complete, timestamped audit trail from contract intake through scholar approval,
              accessible to Shariah boards and regulators without manual effort.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The scholar&apos;s role in this system is not diminished — it is elevated. Instead of reviewing
              raw contracts and compiling documentation, the scholar receives a structured briefing package:
              the contract summary, the compliance flags, the relevant precedents, and the documentation
              template ready for their input. The scholar&apos;s judgment is applied to what only a scholar
              can judge.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The governance-sensitive architecture requirement
            </h2>
            <p className="text-[15px] leading-[1.85]">
              AI infrastructure for Islamic finance must be built differently from AI infrastructure for
              other industries. The difference is accountability.
            </p>
            <p className="text-[15px] leading-[1.85]">
              In most AI applications, if the system makes a decision that turns out to be wrong, the
              consequences are manageable. In Shariah compliance, a wrong decision — a contract classified
              as compliant when it contains a prohibited element — has implications that extend beyond
              financial loss to religious accountability for the institution and its customers.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This means the AI system must be designed from the beginning with explainability, audit
              trails, and human oversight built into the architecture — not added afterwards. Every AI
              output must have a traceable evidence chain. Every compliance flag must reference the specific
              clause or standard that triggered it. Every scholar decision must be documented in the system.
              No AI recommendation should be implemented without a documented human review.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is what we mean by governance-sensitive AI: systems where the governance requirements
              shape the architecture from the ground up, rather than systems that add compliance features
              to a pre-existing general-purpose AI product.
            </p>

            <div
              className="rounded-xl p-7 my-6"
              style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--blue-border)" }}
            >
              <p className="text-[13px] font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Principles of governance-sensitive AI for Islamic finance:
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Full explainability", desc: "Every AI output must be traceable to specific contract clauses, compliance standards, or data inputs — not a black-box score." },
                  { title: "Human authority", desc: "No compliance decision is final without human review. The AI prepares; the scholar decides." },
                  { title: "Complete audit trails", desc: "Every action, flag, review, and approval is timestamped and recorded in a structured, retrievable format." },
                  { title: "Standards alignment", desc: "The compliance framework must reflect actual scholarly standards (AAOIFI, local Shariah boards) — not AI-generated interpretations." },
                  { title: "Calibrated confidence", desc: "The system distinguishes between high-confidence routine cases and uncertain cases requiring elevated review — and routes them differently." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-[13px]">
                    <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--blue)" }} />
                    <span>
                      <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.title} — </span>
                      <span style={{ color: "var(--text-secondary)" }}>{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The institutional trust dimension
            </h2>
            <p className="text-[15px] leading-[1.85]">
              There is a deeper reason why the governance architecture matters, beyond regulatory compliance.
              Islamic finance institutions operate in a relationship of trust with their customers that is
              fundamentally different from conventional banking. Customers who choose Islamic finance are
              choosing based on values, not just financial terms. They are trusting the institution to
              maintain Shariah standards on their behalf.
            </p>
            <p className="text-[15px] leading-[1.85]">
              AI infrastructure that undermines this trust — even subtly, even unintentionally — is
              corrosive. The risk is not that AI will openly violate Shariah principles; it is that AI
              will create an appearance of compliance without the substance. A system that generates
              compliant-looking documentation for contracts that have not been properly reviewed is worse
              than no AI at all.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is why the involvement of scholars in the design of AI compliance infrastructure is not
              optional — it is foundational. The system should be designed with scholars, not for scholars.
              The difference is significant: scholars who understand what the system will and will not do,
              who have validated the compliance logic it applies, and who have defined where their judgment
              is required, are genuine participants in the governance architecture.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What the transition looks like in practice
            </h2>
            <p className="text-[15px] leading-[1.85]">
              For institutions beginning to think about AI for Shariah compliance, the practical starting
              point is not &ldquo;what can AI do?&rdquo; — it is &ldquo;what is taking the most operational time right now,
              and could AI handle it consistently?&rdquo;
            </p>
            <p className="text-[15px] leading-[1.85]">
              For most institutions, the highest-impact starting point is Murabaha contract pre-screening.
              Automating the initial review — structuring the contract data, checking it against a defined
              compliance framework, generating a review summary — creates immediate value without requiring
              the system to make complex jurisprudential judgments. The scholar still reviews, but the
              package they receive is structured and ready.
            </p>
            <p className="text-[15px] leading-[1.85]">
              From there, institutions can expand to automated audit trail generation, governance reporting,
              and eventually more sophisticated compliance analysis as the system&apos;s track record builds
              institutional confidence.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The pace of adoption should be governed by institutional trust, not technology capability.
              AI can move faster than institutions are ready to follow. The institutions that will benefit
              most from AI in Shariah compliance are those that build confidence gradually, with full
              scholar involvement, and refuse to let efficiency pressure push them to deploy before they
              are ready.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Where this is going
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The Islamic finance industry is at an inflection point. The volume of Islamic financial
              transactions is growing faster than the capacity to process them manually. The institutions
              that solve the operational infrastructure problem first will have a meaningful competitive
              advantage — not because they are more technologically sophisticated, but because they can
              process more volume with consistent quality and full auditability.
            </p>
            <p className="text-[15px] leading-[1.85]">
              AI infrastructure designed specifically for Islamic finance governance — built with scholars,
              aligned to established standards, and governed by the principles of explainability and human
              authority — is not a distant aspiration. It is a development that is happening now, and the
              institutions that engage with it thoughtfully will be better positioned than those that either
              ignore it or adopt it without the governance architecture it requires.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The question was never whether AI belongs in Islamic finance. The question is whether the
              institutions that adopt it will build it in a way that strengthens the trust at the heart of
              the industry — or in a way that erodes it.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Islamic Finance AI", "Shariah Compliance", "Murabaha Digitization", "Governance-Sensitive AI", "GCC Islamic Banking"].map((t) => (
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

        {/* CTA */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "linear-gradient(135deg, #FFFBEB 0%, #FFF7E6 100%)", border: "1px solid rgba(185,145,47,0.25)" }}
            >
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Building Shariah compliance infrastructure?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                Amanah AI is Daeson Technologies&apos; platform for Islamic financial institutions — built in
                collaboration with Alhamd Shariah Advisory. We are selectively discussing the platform with
                institutions interested in the early development phase.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/amanah-ai"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Learn About Amanah AI <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all"
                  style={{ border: "1px solid rgba(185,145,47,0.30)", color: "var(--gold)" }}
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* More Articles */}
        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>
            Related Reading
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href="/insights/real-estate-saas-vs-owned"
              className="p-5 rounded-xl block transition-all"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
              >
                Real Estate
              </span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure
              </p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>
                Read article <ArrowRight size={11} />
              </p>
            </Link>
            <Link
              href="/research"
              className="p-5 rounded-xl block transition-all"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: "rgba(185,145,47,0.08)", color: "var(--gold)" }}
              >
                Whitepapers
              </span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                Download our published whitepapers on AI, Shariah compliance, and GCC fintech
              </p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>
                Research Center <ArrowRight size={11} />
              </p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
