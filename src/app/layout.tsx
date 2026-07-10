import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Grain from "@/components/fx/Grain";
import CustomCursor from "@/components/fx/CustomCursor";
import Preloader from "@/components/fx/Preloader";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { crlLinks } from "@/data/crl";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://ravitomar.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ravi Tomar | Founder, Chairman & Managing Director — CRL Diagnostics",
    template: "%s | Ravi Tomar",
  },
  description:
    "Ravi Tomar is the Founder, Chairman and Managing Director of CRL Diagnostics, with nearly three decades of leadership experience across healthcare and diagnostics.",
  keywords: [
    "Ravi Tomar",
    "CRL Diagnostics",
    "diagnostics industry leader",
    "healthcare entrepreneur India",
    "diagnostic quality",
    "pathology",
    "Founder Chairman Managing Director",
    "Delhi healthcare",
  ],
  authors: [{ name: "Ravi Tomar" }],
  creator: "Ravi Tomar",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title:
      "Ravi Tomar | Founder, Chairman & Managing Director — CRL Diagnostics",
    description:
      "Nearly three decades in healthcare and diagnostics. Founder of CRL Diagnostics. Driven by quality, ethics and accessible diagnostic healthcare.",
    siteName: "Ravi Tomar",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Tomar — Founder, CRL Diagnostics",
    description:
      "Building trust in every diagnosis. Precision. Purpose. Progress.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Healthcare",
};

export const viewport: Viewport = {
  themeColor: "#07110F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ravi Tomar",
  jobTitle: "Founder, Chairman & Managing Director",
  description:
    "Founder, Chairman and Managing Director of CRL Diagnostics, with nearly three decades of leadership experience across healthcare and diagnostics.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "CRL Diagnostics Pvt. Ltd.",
    url: crlLinks.website,
    industry: "Diagnostics & Healthcare",
  },
  knowsAbout: [
    "Diagnostics",
    "Healthcare Quality",
    "Laboratory Accreditation",
    "Pathology",
    "Accessible Healthcare",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Preloader />
        <Grain />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
