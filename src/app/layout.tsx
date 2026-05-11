import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AV Rentals South Florida | Audio Visual, LED Wall & Event Equipment Rental",
  description:
    "Professional AV rentals in South Florida including LED walls, sound systems, staging, lighting, projection, and event production support for conferences, meetings, galas, and live events.",
  keywords: [
    "AV rentals South Florida",
    "audio visual rental South Florida",
    "LED wall rental Miami",
    "corporate AV rental",
    "conference AV rental",
    "event production South Florida",
    "projector and screen rental",
    "staging and lighting rental",
    "hybrid event AV",
    "live event production",
  ],
  openGraph: {
    title: "Professional AV Rentals in South Florida",
    description: "Premium LED walls, staging, lighting, and event production support.",
    url: "https://avrentalssouthflorida.com",
    siteName: "AV Rentals South Florida",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for ProfessionalService
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AV Rentals South Florida",
    url: "https://avrentalssouthflorida.com",
    description: "Professional AV Rentals & Event Technology Solutions Across South Florida.",
    parentOrganization: {
      "@type": "Organization",
      name: "Show Technology, Inc.",
      url: "https://showtechinc.com"
    },
    knowsAbout: [
      "Corporate AV",
      "LED Wall Rentals",
      "Event Staging",
      "Live Streaming",
      "Hybrid Events"
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      "Miami",
      "Fort Lauderdale",
      "West Palm Beach",
      "Boca Raton",
      "Hollywood",
      "Aventura",
      "Miami Beach",
    ],
    telephone: "+1-800-555-0199", // Placeholder
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <SocialProof />
        <Footer />
      </body>
    </html>
  );
}
