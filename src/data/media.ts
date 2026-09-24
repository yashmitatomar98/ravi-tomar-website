export type Insight = {
  publication: string;
  /** Leave empty when a reliable date is unavailable — never invent one. */
  date: string;
  title: string;
  description: string;
  format: "Interview" | "Feature" | "Video" | "News";
  href: string;
  /** Only entries with `verified: true` and an `href` are rendered. */
  verified: boolean;
  /** Optional hosted still under /public/media (approved assets only). */
  image?: string;
};

/** The first entry is shown as the lead story. */
export const insights: Insight[] = [
  {
    publication: "CEO Insights India",
    date: "May 2022",
    title: "A diagnostic industry veteran democratizing quality healthcare investigations",
    description:
      "A profile of Ravi Tomar's journey and the growth of CRL Diagnostics, from its founding team to a nationwide network.",
    format: "Feature",
    href: "https://www.ceoinsightsindia.com/leader/ravi-tomar-a-diagnostic-industry-veteran-democratizing-quality-healthcare-investigations-cid-4432.html",
    verified: true,
    image: "/media/ravi-tomar/media/ceo-insights-2022.jpg",
  },
  {
    publication: "ANI",
    date: "February 2026",
    title: "CRL Diagnostics boosts India's diagnostic network with nationwide expansion and advanced labs",
    description:
      "News coverage of CRL Diagnostics' nationwide expansion and investment in advanced laboratory capability.",
    format: "News",
    href: "https://aninews.in/news/business/crl-diagnostics-boosts-indias-diagnostic-network-with-nationwide-expansion-and-advanced-labs20260213162932/",
    verified: true,
  },
  {
    publication: "Medgate Today",
    date: "October 2025",
    title: "Game Changer Edition: leaders transforming India's diagnostic landscape",
    description:
      "Featured in Medgate Today's October 2025 edition spotlighting leaders shaping diagnostics through innovation and precision.",
    format: "Feature",
    href: "https://www.facebook.com/medgatetoday/posts/medgate-today-magazine-october-2025-edition-is-herefeaturing-mr-ravi-tomar-found/1264754369012041/",
    verified: true,
  },
  {
    publication: "Medgate Today",
    date: "2025",
    title: "CII Delhi Healthcare Summit 2025: inclusive, preventive and tech-driven healthcare",
    description:
      "Coverage of the CII Delhi Healthcare Summit, including perspectives on the future of diagnostics.",
    format: "Interview",
    href: "https://medgatetoday.com/cii-delhi-healthcare-summit-2025-reinforces-vision-for-inclusive-preventive-and-tech-driven-healthcare/",
    verified: true,
  },
  {
    publication: "ET HealthWorld",
    date: "2020",
    title: "Quality matters most in the diagnostic industry",
    description:
      "A conversation on regulation, accreditation and why quality standards must lead the diagnostics industry.",
    format: "Video",
    href: "https://www.youtube.com/watch?v=rnkk_qOdvvg",
    verified: true,
  },
  {
    publication: "Healthy Talk Show",
    date: "",
    title: "A long-form conversation on quality-led diagnostics",
    description:
      "An extended discussion on diagnostics, healthcare quality and building a laboratory organisation.",
    format: "Video",
    href: "https://www.youtube.com/watch?v=XonXro1scAQ",
    verified: true,
  },

  // --- Awaiting a verified link (hidden) ---
  {
    publication: "CEO Insights",
    date: "",
    title: "Driving the Indian diagnostics industry based on quality & ethics",
    description: "",
    format: "Feature",
    href: "",
    verified: false,
  },
];

export type Engagement = {
  event: string;
  role: string;
  year: string;
  location?: string;
  href?: string;
  /** Approved event photograph under /public/media/ravi-tomar/events. */
  image?: string;
  imageAlt: string;
  verified: boolean;
};

export const engagements: Engagement[] = [
  {
    event: "InnoHealth 2025",
    role: "Speaker",
    year: "2025",
    href: "https://innohealth.in/2025/speakers/ravi-tomar/",
    imageAlt: "Ravi Tomar speaking at InnoHealth 2025.",
    verified: true,
  },
  {
    event: "CII Delhi Healthcare Summit",
    role: "Industry participant & interview",
    year: "2025",
    location: "New Delhi",
    href: "https://medgatetoday.com/cii-delhi-healthcare-summit-2025-reinforces-vision-for-inclusive-preventive-and-tech-driven-healthcare/",
    imageAlt: "Ravi Tomar at the CII Delhi Healthcare Summit 2025.",
    verified: true,
  },
];
