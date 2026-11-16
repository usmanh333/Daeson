import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import AylinorAnnouncement from "@/components/AylinorAnnouncement";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhyDaeson from "@/components/WhyDaeson";
import LeadershipSection from "@/components/LeadershipSection";
import Testimonials from "@/components/Testimonials";
import InsightsPreview from "@/components/InsightsPreview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/homeFaqs";

export const metadata: Metadata = {
  title: {
    absolute: "Daeson Technologies: Custom AI Software & Islamic Finance Technology",
  },
  description:
    "Daeson Technologies builds custom AI software, automation systems, and enterprise platforms for businesses worldwide. Aylinor is our Shariah compliance and governance platform for Islamic banks; Home 1.0 and LuxeProperty AI serve real estate and property management.",
  alternates: { canonical: "https://daesontechnologies.online" },
  openGraph: {
    title: "Custom AI Software & Islamic Finance Technology | Daeson Technologies",
    description:
      "Aylinor is our AI-powered Shariah compliance and governance platform for Islamic banks and Shariah advisory firms, with scholars keeping the final decision.",
    url: "https://daesontechnologies.online",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom AI Software Development",
  provider: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechnologies.online",
  },
  areaServed: ["UAE", "GCC", "Saudi Arabia", "Canada", "United States", "Pakistan", "UK"],
  description:
    "Custom AI software, AI automation and enterprise platforms for businesses worldwide, with specialist expertise in Islamic finance and real estate. Founder-led. Workflow-first.",
  offers: [
    {
      "@type": "Offer",
      name: "Real Estate Operations Platform",
      description: "Real estate operations platforms for developers, brokerages and investment firms.",
    },
    {
      "@type": "Offer",
      name: "Aylinor: Islamic Finance Intelligence",
      description: "Shariah compliance and governance platform for Islamic financial institutions, in private preview.",
    },
    {
      "@type": "Offer",
      name: "Enterprise AI Systems",
      description: "Custom AI and workflow automation systems for enterprise operations.",
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
      {/* The whole homepage uses the white theme; the navbar sits inside so it stays sticky. */}
      <div className="section-light home-white">
      <Navbar />
      <main>
        <div className="sr-only">
          Daeson Technologies builds custom AI software, automation systems, and enterprise platforms
          for businesses worldwide. Aylinor is our Shariah compliance and governance platform for
          Islamic banks and Shariah advisory firms. We also build Home 1.0 and LuxeProperty AI for
          real estate. Founded by Mahnoor Zafar and Usman Ahmad.
        </div>
        <Hero />
        <TrustMarquee />
        <AylinorAnnouncement />
        <Testimonials />
        <WhatWeBuild />
        <WhyDaeson />
        <LeadershipSection />
        <InsightsPreview />
        <FAQ />
        <CTA />
      </main>
      </div>
      <Footer showBadges={false} />
    </>
  );
}
