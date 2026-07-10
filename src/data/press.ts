export type PressItem = {
  publication: string;
  /** Leave empty when a reliable date is unavailable — never invent one. */
  date: string;
  headline: string;
  category: string;
  href: string;
  verified: boolean;
};

export const press: PressItem[] = [
  {
    publication: "ET HealthWorld",
    date: "2020",
    headline: "Quality matters most in the diagnostic industry: Ravi Tomar",
    category: "Interview",
    href: "https://www.youtube.com/watch?v=rnkk_qOdvvg",
    verified: true,
  },
  {
    publication: "CEO Insights",
    date: "",
    headline:
      "Driving the Indian Diagnostics Industry Based on Quality & Ethics",
    category: "Leadership",
    href: "",
    verified: false,
  },
  {
    publication: "CEO Insights",
    date: "2022",
    headline:
      "A Diagnostic Industry Veteran Democratizing Quality Healthcare Investigations",
    category: "Leadership",
    href: "https://www.ceoinsightsindia.com/leader/ravi-tomar-a-diagnostic-industry-veteran-democratizing-quality-healthcare-investigations-cid-4432.html",
    verified: true,
  },
  {
    publication: "ET NOW",
    date: "2025",
    headline: "Service Excellence in Diagnostics",
    category: "Recognition",
    href: "",
    verified: false,
  },
  {
    publication: "Medgate Today",
    date: "2025",
    headline: "CII Delhi Healthcare Summit Interview",
    category: "Interview",
    href: "https://medgatetoday.com/cii-delhi-healthcare-summit-2025-reinforces-vision-for-inclusive-preventive-and-tech-driven-healthcare/",
    verified: true,
  },
  {
    publication: "Medgate Today",
    date: "2026",
    headline: "Newsmakers of the Year 2025",
    category: "Feature",
    href: "",
    verified: false,
  },
  {
    publication: "ET Focus",
    date: "",
    headline: "Leadership Feature",
    category: "Leadership",
    href: "",
    verified: false,
  },
];
