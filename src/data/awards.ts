export type Award = {
  index: string;
  title: string;
  organisation: string;
  detail?: string;
  year: string;
  /** Source-provided imagery only. Never fabricate certificates or logos. */
  image?: string;
  imageAlt?: string;
  /** The social post / publication URL this award's photo belongs to. */
  sourceUrl?: string;
  verified: boolean;
};

export const awards: Award[] = [
  {
    index: "01",
    title: "Service Excellence in Diagnostics",
    organisation: "ET NOW",
    detail: "Business Conclave & Awards",
    year: "2025",
    imageAlt:
      "Ravi Tomar receiving the Service Excellence in Diagnostics honour at the ET NOW Business Conclave & Awards.",
    verified: false,
  },
  {
    index: "02",
    title: "Most Promising CEO of the Year in Healthcare",
    organisation: "Healthcare Summit & Awards",
    year: "2023",
    imageAlt:
      "Ravi Tomar recognised as Most Promising CEO of the Year in Healthcare.",
    verified: false,
  },
  {
    index: "03",
    title: "Rising Star in Affordable Diagnostic Services",
    organisation: "National Diagnostics Forum",
    year: "2025",
    imageAlt:
      "Ravi Tomar recognised as a Rising Star in Affordable Diagnostic Services.",
    verified: false,
  },
  {
    index: "04",
    title: "Newsmakers of the Year 2025",
    organisation: "Medgate Today",
    detail: "January 2026 Edition",
    year: "2026",
    imageAlt:
      "Ravi Tomar featured among Medgate Today Newsmakers of the Year 2025.",
    verified: false,
  },
];
