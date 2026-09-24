/**
 * Core profile content. Edit here — components read from this file.
 * Primary source: the official profile sheet supplied by Mr. Ravi Tomar's
 * office ("Mr. Ravi Tomar" PDF). Other sources are listed in `sources.ts`.
 */

export const profile = {
  name: "Ravi Tomar",
  roles: ["Founder", "Chairman & Managing Director", "Healthcare & Diagnostics"],
  company: "CRL Diagnostics",
  companyLegal: "CRL Diagnostics Pvt. Ltd.",
  location: "Delhi, India",

  /** Short headline line under the name. */
  tagline: "A visionary in diagnostics. A trailblazer in Indian healthcare.",

  /** Hero positioning statement. */
  positioning:
    "With over 29 years in the healthcare and diagnostics industry, Ravi Tomar has built a legacy of trust, excellence and innovation — growing CRL Diagnostics from a single laboratory into one of India's fastest-growing diagnostic chains.",

  /** About section — editorial biography. */
  bio: [
    "Ravi Tomar is the Founder, Chairman and Managing Director of CRL Diagnostics Pvt. Ltd., with over 29 years of experience in the healthcare and diagnostics industry.",
    "Before founding CRL, he built his career with renowned pathology brands, rising to senior leadership roles and developing a deep understanding of how diagnostic organisations are run.",
    "In 2015 he founded CRL Diagnostics. Under his leadership it has grown from a single laboratory into one of India's fastest-growing and most respected diagnostic chains, with a pan-India presence and more than 950 healthcare professionals.",
    "His unwavering focus on quality, ethics, innovation and affordability has positioned CRL Diagnostics as a benchmark for clinical excellence and customer trust.",
  ],

  /** "A people-first leader" statement from the profile sheet. */
  peopleFirst:
    "Mr. Tomar believes in empowering people, nurturing talent, and fostering a culture of ownership and accountability. He is deeply committed to process excellence, quality assurance, and making healthcare accessible to all.",

  /** Guiding principle. */
  principle: "Quality healthcare at affordable prices for all.",
  principleNote:
    "Driven by this belief, Ravi Tomar continues to innovate, inspire and lead — shaping the future of diagnostics in India.",
};

export type Stat = { value: string; label: string; verified: boolean };

export const stats: Stat[] = [
  { value: "29+", label: "Years of experience", verified: true },
  { value: "950+", label: "Healthcare professionals led", verified: true },
  { value: "Pan-India", label: "Diagnostic presence", verified: true },
  { value: "Award-winning", label: "Recognised for excellence in diagnostics", verified: true },
];

export const credentials = [
  { title: "Doctoral Degree", detail: "Business Administration" },
  { title: "MBA", detail: "Business Administration" },
  { title: "Certified Internal Auditor", detail: "NABL" },
];

/** Values strip from the profile sheet. */
export const values = ["Visionary Leader", "Ethical & Transparent", "Committed to Quality", "Dedicated to Society"];

export type PressLogo = {
  name: string;
  src: string;
  /** White version for dark backgrounds. */
  srcLight: string;
  width: number;
  height: number;
};

/** "Featured & recognised by" — logos cut from the official profile sheet. */
export const featuredIn: PressLogo[] = [
  { name: "Forbes", src: "/media/press/forbes.png", srcLight: "/media/press/forbes-light.png", width: 328, height: 92 },
  { name: "ANI", src: "/media/press/ani.png", srcLight: "/media/press/ani-light.png", width: 252, height: 136 },
  { name: "CEO Insights", src: "/media/press/ceo-insights.png", srcLight: "/media/press/ceo-insights-light.png", width: 384, height: 112 },
];

export const links = {
  linkedin: "https://www.linkedin.com/in/ravi-tomar-9783a6b4/",
  crlWebsite: "https://www.crldiagnostics.com/",
  crlLinkedin: "https://in.linkedin.com/company/crldiagnostics",
  /** Public professional contact email. Leave empty until approved — it is hidden when empty. */
  email: "",
};

export type Principle = { title: string; body: string };

export const philosophy: Principle[] = [
  {
    title: "Quality",
    body: "A commitment to reliable and accurate diagnostics. A report can shape a patient's entire course of treatment, so standards are never negotiable.",
  },
  {
    title: "Ethics",
    body: "Building healthcare organisations around trust, transparency and responsibility — to patients, to clinicians and to the people who do the work.",
  },
  {
    title: "Innovation",
    body: "Using technology and modern laboratory systems to improve diagnostics and the way healthcare is delivered.",
  },
  {
    title: "Accessibility",
    body: "Quality healthcare at affordable prices — diagnostics that reach more people, beyond the limits of geography and cost.",
  },
];
