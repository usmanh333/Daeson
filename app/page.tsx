import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AylinorAnnouncement from "@/components/AylinorAnnouncement";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhyDaeson from "@/components/WhyDaeson";
import LeadershipSection from "@/components/LeadershipSection";
import InsightsPreview from "@/components/InsightsPreview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is operational infrastructure software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operational infrastructure software refers to purpose-built digital systems that serve as the backbone of a company's day-to-day operations. Unlike generic SaaS tools, it is designed specifically around your business's workflows, data models, and compliance requirements. It typically includes CRM, reporting, compliance automation, workflow intelligence, and executive dashboards — integrated and owned by the business.",
      },
    },
    {
      "@type": "Question",
      name: "What does workflow-first mean in software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Workflow-first means that systems are designed around how a business actually operates before any code is written. Rather than buying software and forcing processes to adapt around it, workflow-first development starts with operational discovery — mapping the real workflows, data flows, and decision points — then builds infrastructure around those realities. Daeson Technologies applies this approach to every engagement.",
      },
    },
    {
      "@type": "Question",
      name: "How is Daeson Technologies different from a SaaS company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daeson Technologies builds owned infrastructure — not SaaS subscriptions. Clients own all source code, data, and architecture outright. There are no monthly licenses, no per-seat pricing, and no vendor lock-in. Unlike SaaS tools built for a general market, every system Daeson builds is designed around the specific workflows, data model, and operational requirements of the client's business.",
      },
    },
    {
      "@type": "Question",
      name: "Do clients own the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every system we build is fully owned by the client. This includes all source code, database schemas, documentation, deployment configurations, and intellectual property. We believe businesses should own their infrastructure — not lease it.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Daeson Technologies serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daeson Technologies serves real estate and PropTech firms, Islamic financial institutions, and enterprise operations teams. We specialize in operationally complex businesses that have outgrown generic software tools and require infrastructure designed for their specific workflows, compliance requirements, and data models.",
      },
    },
    {
      "@type": "Question",
      name: "What is Amanah AI and how does it support Islamic finance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amanah AI is Daeson Technologies' AI-powered platform for Islamic financial institutions, currently in strategic development in collaboration with Alhamd Shariah Advisory. It automates Murabaha contract analysis, Shariah governance documentation, scholar review workflows, and compliance audit trails — reducing operational burden so scholars can focus on substantive jurisprudential decisions rather than manual document review.",
      },
    },
    {
      "@type": "Question",
      name: "What is Murabaha workflow digitization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Murabaha workflow digitization refers to replacing manual, paper-based Murabaha financing processes with structured digital workflows. Murabaha is one of the most common Islamic financing structures — involving a cost-plus-profit arrangement used for home financing, trade finance, and commodity financing. Digitization replaces manual contract review with structured automated parsing, compliance checklist execution, documentation generation, and full audit trail creation.",
      },
    },
    {
      "@type": "Question",
      name: "Why do real estate firms need owned operational infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate firms with portfolio complexity, investor relationships, and multi-market operations typically use 5–10 disconnected SaaS tools that were not built for real estate workflows. This creates data fragmentation, manual reporting overhead, and no real-time visibility for leadership. Owned operational infrastructure — a unified CRM, investor dashboards, AI lead intelligence, and payment tracking in one platform — eliminates this fragmentation and is fully aligned to how the firm actually operates.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Concept Demonstration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Concept Demonstration is a working prototype that validates architecture, workflow, and business logic for a specific operational domain. Unlike generic demos, our demonstrations are built around real industry workflows and are available for executive review — then tailored and fully built for each client's specific operations.",
      },
    },
    {
      "@type": "Question",
      name: "Does Daeson Technologies operate in the UAE and GCC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Daeson Technologies serves clients and partners across the UAE, GCC, Saudi Arabia, Canada, Pakistan, and UK. Our systems are designed for multi-market, multi-currency, and regulatory-aware operations — including GCC real estate markets and global Islamic finance institutions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an operational system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A core operational platform — including discovery, architecture, prototyping, development, and deployment — typically requires 3 to 6 months for a first production version. More complex systems with AI integration and multi-market compliance may require 6 to 12 months. We begin with the highest operational priority and evolve systems gradually, so clients see working prototypes within the first 4–6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI improve business operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI improves business operations by automating repetitive analytical tasks, surfacing intelligence from operational data, and giving leadership real-time visibility across the business. In real estate, this means AI-powered lead qualification, portfolio analytics, and automated investor reporting. In Islamic finance, it means contract analysis, compliance risk flagging, and governance documentation. Daeson integrates AI as an operational layer — not a feature — so it creates measurable improvement in workflow efficiency and decision quality.",
      },
    },
    {
      "@type": "Question",
      name: "What is governance-sensitive AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Governance-sensitive AI refers to AI systems designed with explicit attention to audit trails, explainability, human oversight, and regulatory compliance — required by industries where decisions carry legal, financial, or religious accountability. Islamic finance and real estate are prime examples: AI recommendations must be documented, auditable, and subject to human review. Daeson builds AI infrastructure with governance requirements built in from the architecture level, not added as an afterthought.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Enterprise Operational Infrastructure",
  provider: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechnologies.online",
  },
  areaServed: ["UAE", "GCC", "Saudi Arabia", "Canada", "United States", "Pakistan", "UK"],
  description:
    "Custom-built operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. Clients own all systems. Founder-led. Workflow-first.",
  offers: [
    {
      "@type": "Offer",
      name: "Real Estate Operations Platform",
      description: "Owned operational platform replacing fragmented SaaS for real estate and PropTech firms.",
    },
    {
      "@type": "Offer",
      name: "Amanah AI — Islamic Finance Intelligence",
      description: "Shariah compliance AI platform in strategic development for Islamic financial institutions.",
    },
    {
      "@type": "Offer",
      name: "Enterprise AI Systems",
      description: "Custom AI workflow systems for enterprise operations — fully owned, no subscriptions.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://daesontechnologies.online",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <div className="sr-only">
          Daeson Technologies is an enterprise technology company based in Pakistan and UAE,
          building owned AI-powered operational infrastructure for real estate firms, Islamic
          financial institutions, and enterprise organizations. Founded by Mahnoor Zafar and
          Usman Ahmad. No SaaS subscriptions — clients own all source code.
        </div>
        <Hero />
        <AylinorAnnouncement />
        <div className="section-light">
          <WhatWeBuild />
        </div>
        <WhyDaeson />
        <div className="section-light">
          <LeadershipSection />
        </div>
        <InsightsPreview />
        <div className="section-light">
          <FAQ />
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
