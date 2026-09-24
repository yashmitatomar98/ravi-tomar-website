import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import { links } from "@/data/profile";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    "Ravi Tomar is the Founder, Chairman and Managing Director of CRL Diagnostics, with over 29 years of leadership experience across healthcare and diagnostics.",
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
      "Over 29 years in healthcare and diagnostics. Founder, Chairman & Managing Director of CRL Diagnostics.",
    siteName: "Ravi Tomar",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Tomar — Founder, CRL Diagnostics",
    description:
      "Over 29 years in healthcare and diagnostics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Healthcare",
};

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ravi Tomar",
  jobTitle: "Founder, Chairman & Managing Director",
  description:
    "Founder, Chairman and Managing Director of CRL Diagnostics, with over 29 years of leadership experience across healthcare and diagnostics.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "CRL Diagnostics Pvt. Ltd.",
    url: links.crlWebsite,
    industry: "Diagnostics & Healthcare",
  },
  sameAs: [links.linkedin],
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
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body>
        {/* Marks JS as available so reveal styles only hide content that can be revealed. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
