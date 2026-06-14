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
  title: {
    default: "Daeson Technologies — Operational Infrastructure for Modern Businesses",
    template: "%s | Daeson Technologies",
  },
  description:
    "Daeson Technologies builds owned operational infrastructure for real estate firms, governance-sensitive organizations, and enterprise operations. Founder-led. Workflow-first. No subscriptions.",
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
  ],
  authors: [
    { name: "Mahnoor Zafar", url: "https://daesontechagency.online/about" },
    { name: "Usman Ahmad", url: "https://daesontechagency.online/about" },
  ],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Daeson Technologies — Operational Infrastructure for Modern Businesses",
    description:
      "We help real estate firms and governance-sensitive organizations replace fragmented workflows with owned AI-powered operational systems aligned to how their business actually operates.",
    url: "https://daesontechagency.online",
    siteName: "Daeson Technologies",
    images: [
      {
        url: "https://daesontechagency.online/favicon.png",
        width: 1200,
        height: 630,
        alt: "Daeson Technologies — Enterprise Operational Infrastructure",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daeson Technologies — Operational Infrastructure for Modern Businesses",
    description:
      "Owned operational infrastructure for real estate, Islamic finance, and enterprise organizations. Founder-led. Workflow-first.",
    images: ["https://daesontechagency.online/favicon.png"],
    creator: "@DaesonTech",
  },
  alternates: {
    canonical: "https://daesontechagency.online",
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
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://daesontechagency.online/#organization",
  name: "Daeson Technologies",
  legalName: "Daeson Technologies",
  url: "https://daesontechagency.online",
  logo: "https://daesontechagency.online/logo.png",
  description:
    "Daeson Technologies builds owned AI-powered operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. We design systems aligned to how businesses actually operate — replacing fragmented SaaS with owned platforms built around real workflows. Founder-led. Workflow-first.",
  foundingDate: "2023",
  slogan: "Operational infrastructure built around how your business actually operates.",
  founder: [
    {
      "@type": "Person",
      "@id": "https://daesontechagency.online/about#mahnoor-zafar",
      name: "Mahnoor Zafar",
      jobTitle: "Founder & Strategic Systems Lead",
      url: "https://daesontechagency.online/about",
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
      "@id": "https://daesontechagency.online/about#usman-ahmad",
      name: "Usman Ahmad",
      jobTitle: "Co-Founder & Technical Lead",
      url: "https://daesontechagency.online/about",
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
        url: "https://daesontechagency.online/real-estate",
      },
      {
        "@type": "Offer",
        name: "Amanah AI — Islamic Finance Intelligence",
        description:
          "AI-powered Shariah compliance infrastructure for Islamic financial institutions — Murabaha contract analysis, governance documentation, scholar review queues, and regulatory reporting. In strategic development.",
        url: "https://daesontechagency.online/amanah-ai",
      },
      {
        "@type": "Offer",
        name: "Enterprise AI Workflow Systems",
        description:
          "Custom AI workflow systems for enterprise operations — cross-department automation, operational intelligence dashboards, and predictive analytics. Fully owned.",
        url: "https://daesontechagency.online/industries",
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
  "@id": "https://daesontechagency.online/#website",
  url: "https://daesontechagency.online",
  name: "Daeson Technologies",
  description: "Operational Infrastructure for Modern Businesses — Founder-led, Workflow-first",
  publisher: { "@id": "https://daesontechagency.online/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://daesontechagency.online/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* FOUC prevention — runs before React hydrates */
const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('dt-theme');
    if (t === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* FOUC prevention — must be synchronous, before any render */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

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
          src="https://www.googletagmanager.com/gtag/js?id=AW-17758896306"
          strategy="afterInteractive"
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
