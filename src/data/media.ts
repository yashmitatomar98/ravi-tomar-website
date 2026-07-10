export type MediaKind = "watch" | "read";

export type MediaItem = {
  outlet: string;
  title: string;
  kind: MediaKind;
  /** External verified source. Empty string = link pending verification. */
  href: string;
  year?: string;
  image?: string;
  imageAlt?: string;
  /** The social post / publication URL this item's photo belongs to. */
  sourceUrl?: string;
  verified: boolean;
};

export const media: MediaItem[] = [
  {
    outlet: "ET HealthWorld",
    title: "Quality matters most in the diagnostic industry",
    kind: "watch",
    href: "https://www.youtube.com/watch?v=rnkk_qOdvvg",
    year: "2020",
    imageAlt: "Ravi Tomar interview still — ET HealthWorld.",
    verified: true,
  },
  {
    outlet: "CEO Insights",
    title: "Driving the Indian Diagnostics Industry Based on Quality & Ethics",
    kind: "read",
    href: "",
    imageAlt: "CEO Insights feature on Ravi Tomar.",
    verified: false,
  },
  {
    outlet: "CEO Insights",
    title: "Democratizing Quality Healthcare Investigations",
    kind: "read",
    href: "https://www.ceoinsightsindia.com/leader/ravi-tomar-a-diagnostic-industry-veteran-democratizing-quality-healthcare-investigations-cid-4432.html",
    year: "2022",
    imageAlt: "CEO Insights profile of a diagnostics industry veteran.",
    verified: true,
  },
  {
    outlet: "CII Delhi Healthcare Summit 2025",
    title: "The Future of Diagnostics",
    kind: "watch",
    href: "https://medgatetoday.com/cii-delhi-healthcare-summit-2025-reinforces-vision-for-inclusive-preventive-and-tech-driven-healthcare/",
    year: "2025",
    imageAlt: "Ravi Tomar interview at the CII Delhi Healthcare Summit 2025.",
    verified: true,
  },
  {
    outlet: "Healthy Talk Show",
    title: "A Long-form Conversation on Quality-led Diagnostics",
    kind: "watch",
    href: "https://www.youtube.com/watch?v=XonXro1scAQ",
    imageAlt: "Ravi Tomar in conversation on the Healthy Talk Show.",
    verified: true,
  },
];
