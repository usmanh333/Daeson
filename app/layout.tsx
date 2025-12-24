import type { Metadata } from "next";  
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToTop from "@/app/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daeson Tech Agency Tech Solution",
  description:
    "Daeson Tech Agency helps businesses grow with data analysis & dashboards, and modern website development. Transform your business with powerful IT solutions.",
  keywords:
    "data analysis, dashboards,Chatbots, ML models, web development, IT services, Daeson Tech Agency",

  // ✅ Added favicon block here
 icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.png",
},


  openGraph: {
    title: "Daeson Tech Agency | IT Solutions",
    description:
      "Trusted by startups, founders, and enterprises worldwide to design scalable, high-performance technology solutions",
    url: "http://daesontechagency.online/",
    images: ["http://daesontechagency.online/favicon.png"],
    type: "website",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "Daeson Tech Agency",
    description:
      "Data analysis, ML dashboards, and modern website development.",
    images: ["http://daesontechagency.online/favicon.png"],
  },
  alternates: {
    canonical: "http://daesontechagency.online/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17758896306');
          `}
        </Script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17758896306"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17758896306');
            `,
          }}
        />
      </head>
      <body className={`relative ${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
