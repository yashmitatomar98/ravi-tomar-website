export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  /** Only entries with `verified: true` are rendered. */
  verified: boolean;
  note?: string;
};

/**
 * Professional journey. Keep entries factual and source-backed.
 * Unverified entries stay in the file (hidden) until confirmed.
 */
export const timeline: TimelineEntry[] = [
  {
    year: "Early career",
    title: "Leadership in pathology",
    body: "Built a career with renowned pathology brands, rising to senior leadership roles across the diagnostics industry.",
    verified: true,
  },
  {
    year: "1998",
    title: "Head of Sales, Speciality Ranbaxy Limited",
    body: "Sales leadership across the healthcare and diagnostics industry.",
    verified: false,
    note: "From the previous site; confirm title and year before publishing.",
  },
  {
    year: "2002",
    title: "Sales & Marketing Leadership, Pathnet India",
    body: "Sales and marketing leadership in diagnostic operations.",
    verified: false,
    note: "From the previous site; confirm title and year before publishing.",
  },
  {
    year: "2015",
    title: "Founded CRL Diagnostics",
    body: "Established CRL Diagnostics as a single pathology laboratory, built around quality, ethics and affordability.",
    verified: true,
  },
  {
    year: "2017 & 2019",
    title: "Zee Business Award",
    body: "CRL Diagnostics named Best Diagnostics Lab in North India.",
    verified: true,
  },
  {
    year: "2020",
    title: "ET HealthWorld interview",
    body: "Discussed regulation, accreditation and quality standards across the diagnostics industry.",
    verified: true,
  },
  {
    year: "2021",
    title: "Healthcare Leadership Award",
    body: "Recognised by Eminent Research for healthcare leadership.",
    verified: true,
  },
  {
    year: "2022",
    title: "CEO Insights cover feature",
    body: "Profiled among India's leaders in diagnostics and pathology.",
    verified: true,
  },
  {
    year: "2025",
    title: "Industry platforms",
    body: "Speaker at InnoHealth 2025 and participant at the CII Delhi Healthcare Summit.",
    verified: true,
  },
  {
    year: "2026",
    title: "Nationwide expansion",
    body: "CRL Diagnostics expands its diagnostic network with advanced laboratories, as reported by ANI.",
    verified: true,
  },
  {
    year: "Today",
    title: "950+ professionals, pan-India",
    body: "Leading CRL Diagnostics as one of India's fastest-growing diagnostic chains, trusted by leading institutions.",
    verified: true,
  },
];
