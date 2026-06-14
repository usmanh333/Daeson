import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToTop from "@/app/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daeson Technologies — AI-Powered Operational Infrastructure",
    template: "%s | Daeson Technologies",
  },
  description:
    "Daeson Technologies builds AI-powered operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. Custom systems. Owned software. Intelligent operations.",
  keywords: [
    "operational infrastructure software",
    "real estate CRM software",
    "Islamic finance AI",
    "Shariah compliance software",
    "enterprise AI systems",
    "custom software development UAE",
    "AI workflow automation",
    "Amanah AI",
    "Daeson Technologies",
    "enterprise software GCC",
    "operational intelligence platform",
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
    title: "Daeson Technologies — AI-Powered Operational Infrastructure",
    description:
      "We design and deploy intelligent operational systems for real estate firms, Islamic financial institutions, and enterprise organizations. Own your infrastructure.",
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
    title: "Daeson Technologies — AI-Powered Operational Infrastructure",
    description:
      "Custom AI systems and operational infrastructure for real estate, Islamic finance, and enterprise operations.",
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
  verification: {
    google: "",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://daesontechagency.online/#organization",
  name: "Daeson Technologies",
  legalName: "Daeson Technologies",
  url: "https://daesontechagency.online",
  logo: "https://daesontechagency.online/logo.png",
  description:
    "Daeson Technologies builds AI-powered operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. We design owned, intelligent systems that replace fragmented SaaS stacks.",
  foundingDate: "2023",
  founder: [
    {
      "@type": "Person",
      "@id": "https://daesontechagency.online/about#mahnoor-zafar",
      name: "Mahnoor Zafar",
      jobTitle: "Founder & Strategic Systems Lead",
      url: "https://daesontechagency.online/about",
    },
    {
      "@type": "Person",
      "@id": "https://daesontechagency.online/about#usman-ahmad",
      name: "Usman Ahmad",
      jobTitle: "Co-Founder & Technical Lead",
      url: "https://daesontechagency.online/about",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@daesontechagency.online",
    contactType: "sales",
    areaServed: ["AE", "SA", "CA", "US", "PK", "GB"],
    availableLanguage: ["English", "Arabic", "Urdu"],
  },
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
    "Islamic Finance AI",
    "Shariah Compliance Software",
    "Enterprise Workflow Automation",
  ],
  sameAs: [
    "https://www.linkedin.com/company/daeson-technologies",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://daesontechagency.online/#website",
  url: "https://daesontechagency.online",
  name: "Daeson Technologies",
  description: "AI-Powered Operational Infrastructure for Complex Businesses",
  publisher: { "@id": "https://daesontechagency.online/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://daesontechagency.online/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
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
      <body className="font-[family-name:var(--font-inter)] bg-[#070B12] text-[#EDF2FF] antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
