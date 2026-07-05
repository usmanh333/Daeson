import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study — Desktop System for USA Sheriff Police Department",
  description:
    "How Daeson Technologies built a secure, mission-critical desktop application for a USA Sheriff Police Department to manage law enforcement operations, case records, and sensitive data with absolute reliability.",
  alternates: { canonical: "https://daesontechnologies.online/case-studies/sheriff-police-system" },
  openGraph: {
    title: "Case Study — Desktop System for USA Sheriff Police Department | Daeson Technologies",
    description:
      "A secure, mission-critical desktop application built to manage law enforcement operations, case records, and sensitive data with absolute reliability.",
    url: "https://daesontechnologies.online/case-studies/sheriff-police-system",
  },
};

export default function SheriffPoliceSystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
