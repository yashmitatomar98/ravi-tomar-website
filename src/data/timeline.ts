export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  /** Optional archival image (black & white, colourises on hover). */
  image?: string;
  imageAlt?: string;
  /** The social post / publication URL this year's photo belongs to. */
  sourceUrl?: string;
  /** Set true only once the underlying claim is source-verified. */
  verified: boolean;
};

/**
 * The Journey — nearly three decades, one pursuit: accurate diagnosis.
 * NOTE: Public profiles carry slightly different timeline references.
 * Founding-year specifics are intentionally kept soft until CMS-verified.
 */
export const timeline: TimelineEntry[] = [
  {
    year: "1998",
    title: "The Foundation",
    body: "Sales leadership across the healthcare and diagnostics industry, including tenure as Head of Sales at Speciality Ranbaxy Limited.",
    verified: false,
  },
  {
    year: "2002",
    title: "Understanding the Industry",
    body: "Sales and marketing leadership at Pathnet India. Years spent close to healthcare businesses, professionals and diagnostic operations shaped a deep understanding of how the industry truly works.",
    verified: false,
  },
  {
    year: "2011—2015",
    title: "The Idea Takes Form",
    body: "A conviction begins to take shape: quality diagnostics should not be limited by geography or affordability.",
    verified: false,
  },
  {
    year: "2015+",
    title: "Building CRL Diagnostics",
    body: "From a single pathology laboratory to a growing diagnostic network — built around one non-negotiable principle.",
    verified: false,
  },
  {
    year: "2020",
    title: "The Quality Conversation",
    body: "Featured by ETHealthWorld discussing regulation, accreditation and quality standards across the diagnostics industry.",
    verified: true,
  },
  {
    year: "2023",
    title: "Leadership Recognised",
    body: "Recognised as Most Promising CEO of the Year in Healthcare.",
    verified: false,
  },
  {
    year: "2025",
    title: "Service Excellence",
    body: "Service Excellence in Diagnostics — ET NOW Business Conclave & Awards.",
    verified: false,
  },
  {
    year: "2025",
    title: "Affordable Diagnostics",
    body: "Recognised as a Rising Star in Affordable Diagnostic Services.",
    verified: false,
  },
  {
    year: "2025",
    title: "The Industry Stage",
    body: "Leadership participation and interviews at healthcare and diagnostics forums, including the CII Delhi Healthcare Summit.",
    verified: false,
  },
  {
    year: "2026",
    title: "The Journey Continues",
    body: "Continuing to build quality-focused, accessible diagnostic infrastructure across the country.",
    verified: false,
  },
];
