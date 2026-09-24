export type Award = {
  /** Leave empty when the year is not confirmed — never invent one. */
  year: string;
  title: string;
  organisation: string;
  /** Whether the honour was conferred on Ravi Tomar personally or on CRL Diagnostics. */
  recipient: "Ravi Tomar" | "CRL Diagnostics";
  /** Optional one-line description. */
  detail?: string;
  /** Only entries with `verified: true` are rendered. */
  verified: boolean;
  source?: string;
};

export const awards: Award[] = [
  {
    year: "2025",
    title: "Rising Star in Affordable Diagnostic Services",
    organisation: "National Diagnostics Innovation & Excellence Awards",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "ANI, February 2026",
  },
  {
    year: "2021",
    title: "Healthcare Leadership Award",
    organisation: "Eminent Research",
    recipient: "Ravi Tomar",
    verified: true,
    source: "CEO Insights, May 2022",
  },
  {
    year: "2019",
    title: "National Excellence Award — Best Diagnostics Lab in North India",
    organisation: "National Excellence Awards",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "CEO Insights, May 2022",
  },
  {
    year: "2019",
    title: "Best Diagnostics Lab in North India",
    organisation: "Zee Business",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "CEO Insights, May 2022",
  },
  {
    year: "2017",
    title: "Best Diagnostics Lab in North India",
    organisation: "Zee Business",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "CEO Insights, May 2022",
  },
  {
    year: "",
    title: "UP Rattan Samman",
    organisation: "",
    detail: "A mark of pride and recognition for his outstanding contribution to healthcare and society.",
    recipient: "Ravi Tomar",
    verified: true,
    source: "Official profile sheet — add year and conferring body",
  },
  {
    year: "",
    title: "Fastest Growing Pathology Lab in India",
    organisation: "",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "Official profile sheet — add year and awarding body",
  },
  {
    year: "",
    title: "Best Emerging Chain of Laboratories in India",
    organisation: "",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "Official profile sheet — add year and awarding body",
  },
  {
    year: "",
    title: "Best Pathology Lab in India",
    organisation: "",
    recipient: "CRL Diagnostics",
    verified: true,
    source: "Official profile sheet — add year and awarding body",
  },

  // --- Awaiting verification (from the previous site; hidden) ---
  {
    year: "2025",
    title: "Service Excellence in Diagnostics",
    organisation: "ET NOW Business Conclave & Awards",
    recipient: "Ravi Tomar",
    verified: false,
  },
  {
    year: "2023",
    title: "Most Promising CEO of the Year in Healthcare",
    organisation: "Healthcare Summit & Awards",
    recipient: "Ravi Tomar",
    verified: false,
  },
  {
    year: "2026",
    title: "Newsmakers of the Year 2025",
    organisation: "Medgate Today",
    recipient: "Ravi Tomar",
    verified: false,
  },
];
