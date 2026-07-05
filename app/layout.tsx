import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToTop from "@/app/components/BackToTop";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daesontechnologies.online"),
  title: {
    default: "Daeson Technologies — Enterprise Technology Company",
    template: "%s | Daeson Technologies",
  },
  description:
    "Daeson Technologies is an enterprise technology company building owned AI-powered operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. Workflow-first. Founder-built. No subscriptions.",
  keywords: [
    "operational infrastructure software",
    "real estate operations platform",
    "Islamic finance AI",
    "Shariah compliance workflow",
    "enterprise workflow systems",
    "custom software development UAE",
    "AI workflow automation",
    "Amanah AI",
    "Daeson Technologies",
    "enterprise software GCC",
    "operational intelligence platform",
    "governance-sensitive software",
    "workflow-first software",
    "founder-led software company",
    "enterprise technology company",
    "technology company Pakistan",
    "technology company UAE",
    "AI software company Pakistan",
    "custom SaaS development Pakistan",
    "GEO optimized software company",
    "B2B technology company GCC",
    "Mahnoor Zafar Daeson Technologies",
    "Daeson Technologies founder",
  ],
  authors: [
    { name: "Mahnoor Zafar", url: "https://daesontechnologies.online/about" },
    { name: "Usman Ahmad", url: "https://daesontechnologies.online/about" },
  ],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/icon-512.png" }],
  },
  openGraph: {
    title: "Daeson Technologies — Enterprise Technology Company",
    description:
      "We help real estate firms and governance-sensitive organizations replace fragmented workflows with owned AI-powered operational systems aligned to how their business actually operates.",
    url: "https://daesontechnologies.online",
    siteName: "Daeson Technologies",
    images: [
      {
        url: "https://daesontechnologies.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daeson Technologies — Enterprise Technology Company",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daeson Technologies — Enterprise Technology Company",
    description:
      "Owned operational infrastructure for real estate, Islamic finance, and enterprise organizations. Founder-built. Workflow-first.",
    images: ["https://daesontechnologies.online/og-image.png"],
    creator: "@DaesonTech",
  },
  alternates: {
    canonical: "https://daesontechnologies.online",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "ProfessionalService"],
  "@id": "https://daesontechnologies.online/#organization",
  name: "Daeson Technologies",
  legalName: "Daeson Technologies Pvt Ltd",
  url: "https://daesontechnologies.online",
  logo: "https://daesontechnologies.online/logo.png",
  description:
    "Daeson Technologies is an enterprise technology company building owned AI-powered operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. We design systems aligned to how businesses actually operate — replacing fragmented SaaS with owned platforms built around real workflows. Founder-built. Workflow-first.",
  foundingDate: "2023",
  slogan: "Enterprise technology built around how your business actually operates.",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "11-50" },
  award: ["Clutch Top Developer 2025", "GoodFirms Top Software Company"],
  memberOf: [
    { "@type": "Organization", name: "Clutch", url: "https://clutch.co" },
    { "@type": "Organization", name: "GoodFirms", url: "https://goodfirms.co" },
  ],
  founder: [
    {
      "@type": "Person",
      "@id": "https://daesontechnologies.online/about#mahnoor-zafar",
      name: "Mahnoor Zafar",
      jobTitle: "Founder & Strategic Systems Lead",
      url: "https://daesontechnologies.online/about",
      sameAs: ["https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/"],
      knowsAbout: [
        "Operational Infrastructure",
        "Real Estate Systems Strategy",
        "Workflow Intelligence Design",
        "Governance-Sensitive Industry Systems",
        "Islamic Finance Operations",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://daesontechnologies.online/about#usman-ahmad",
      name: "Usman Ahmad",
      jobTitle: "Co-Founder & Technical Lead",
      url: "https://daesontechnologies.online/about",
      knowsAbout: [
        "Enterprise System Architecture",
        "AI Infrastructure Engineering",
        "Scalable Product Execution",
        "Technology Operations",
      ],
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "contact@daesontechagency.online",
      contactType: "customer support",
      areaServed: ["AE", "SA", "CA", "US", "PK", "GB"],
      availableLanguage: ["English", "Arabic", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      email: "partnerships@daesontechagency.online",
      contactType: "sales",
      areaServed: ["AE", "SA", "CA", "US", "PK", "GB"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  knowsAbout: [
    "Operational Infrastructure Software",
    "AI Systems Integration",
    "Real Estate Technology",
    "Real Estate CRM Infrastructure",
    "Brokerage Operations Software",
    "Investor Reporting Infrastructure",
    "AI Lead Intelligence for Real Estate",
    "Islamic Finance AI",
    "Shariah Compliance Software",
    "Murabaha Workflow Digitization",
    "Amanah AI",
    "Islamic Finance Operations",
    "Shariah Governance Systems",
    "Enterprise Workflow Automation",
    "Governance-Sensitive Systems",
    "Operational Intelligence Platforms",
    "Workflow-First Software Development",
    "Owned Infrastructure vs SaaS",
    "Enterprise AI Systems",
    "Merchant Banking Workflows",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Daeson Technologies Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Real Estate Operations Platform",
        description:
          "Owned AI-powered operational platform for real estate firms — unified CRM, investor dashboards, AI lead intelligence, payment tracking, and executive analytics.",
        url: "https://daesontechnologies.online/real-estate",
      },
      {
        "@type": "Offer",
        name: "Amanah AI — Islamic Finance Intelligence",
        description:
          "AI-powered Shariah compliance infrastructure for Islamic financial institutions — Murabaha contract analysis, governance documentation, scholar review queues, and regulatory reporting. In strategic development.",
        url: "https://daesontechnologies.online/amanah-ai",
      },
      {
        "@type": "Offer",
        name: "Enterprise AI Workflow Systems",
        description:
          "Custom AI workflow systems for enterprise operations — cross-department automation, operational intelligence dashboards, and predictive analytics. Fully owned.",
        url: "https://daesontechnologies.online/industries",
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/daeson-tech-agency/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://daesontechnologies.online/#website",
  url: "https://daesontechnologies.online",
  name: "Daeson Technologies",
  description: "Enterprise Technology Company — Founder-built, Workflow-first",
  publisher: { "@id": "https://daesontechnologies.online/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://daesontechnologies.online/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://daesontechnologies.online/#webpage",
  name: "Daeson Technologies — Enterprise Technology Company",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable", ".answer-capsule"],
  },
  about: {
    "@type": "Organization",
    name: "Daeson Technologies",
    description:
      "Enterprise technology company building owned AI-powered infrastructure for real estate, Islamic finance, and enterprise operations in UAE, Pakistan, and GCC.",
  },
};

const founderSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://daesontechnologies.online/about#mahnoor-zafar",
    name: "Mahnoor Zafar",
    jobTitle: "Founder & Strategic Systems Lead",
    description:
      "Mahnoor Zafar is the Founder of Daeson Technologies, an enterprise technology company specializing in AI-powered operational infrastructure for real estate, Islamic finance, and enterprise organizations.",
    worksFor: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
    url: "https://daesontechnologies.online/about",
    sameAs: ["https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/"],
    knowsAbout: [
      "Operational Infrastructure",
      "Real Estate Systems Strategy",
      "Islamic Finance Operations",
      "AI Workflow Design",
      "Enterprise Software",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://daesontechnologies.online/about#usman-ahmad",
    name: "Usman Ahmad",
    jobTitle: "Co-Founder & Technical Lead",
    worksFor: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
    url: "https://daesontechnologies.online/about",
    knowsAbout: [
      "Enterprise System Architecture",
      "AI Infrastructure",
      "Scalable Product Engineering",
      "Technology Operations",
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17758896306"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17758896306');
            `,
          }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-speakable"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
        <Script
          id="schema-founders"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchemas) }}
        />
      </head>
      <body
        className={`font-[family-name:var(--font-inter)] antialiased`}
        style={{ backgroundColor: "var(--bg-page)", color: "var(--text-primary)" }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
