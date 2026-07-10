export type GallerySpan = "wide" | "portrait" | "square" | "tall";

export type GalleryItem = {
  id: string;
  event: string;
  location: string;
  year: string;
  span: GallerySpan;
  image?: string;
  alt: string;
  /** The social post URL this moment's photo belongs to. */
  sourceUrl?: string;
  verified: boolean;
};

/**
 * Leadership Moments — verified event photography only.
 * Images must be downloaded and hosted locally (see /public/media + media-manifest.json).
 * Never hotlink Google Images.
 */
export const gallery: GalleryItem[] = [
  {
    id: "et-now-2025",
    event: "ET NOW Business Conclave & Awards",
    location: "Mumbai",
    year: "2025",
    span: "wide",
    alt: "Ravi Tomar receiving the Service Excellence in Diagnostics award on stage.",
    verified: false,
  },
  {
    id: "cii-summit-2025",
    event: "CII Delhi Healthcare Summit",
    location: "New Delhi",
    year: "2025",
    span: "portrait",
    alt: "Ravi Tomar during a panel discussion at the CII Delhi Healthcare Summit.",
    verified: false,
  },
  {
    id: "panel-quality",
    event: "Diagnostics Leadership Panel",
    location: "New Delhi",
    year: "2025",
    span: "square",
    alt: "Ravi Tomar in an industry panel discussion on diagnostic quality.",
    verified: false,
  },
  {
    id: "healthcare-summit-2023",
    event: "Healthcare Summit & Awards",
    location: "India",
    year: "2023",
    span: "tall",
    alt: "Ravi Tomar recognised as Most Promising CEO of the Year in Healthcare.",
    verified: false,
  },
  {
    id: "crl-event",
    event: "CRL Diagnostics Company Event",
    location: "Delhi",
    year: "2024",
    span: "square",
    alt: "Ravi Tomar with the CRL Diagnostics team at a company event.",
    verified: false,
  },
  {
    id: "interview-ethw",
    event: "ET HealthWorld Interview",
    location: "Studio",
    year: "2020",
    span: "portrait",
    alt: "Ravi Tomar during his ET HealthWorld interview on diagnostic quality.",
    verified: false,
  },
  {
    id: "speaking-forum",
    event: "Healthcare Industry Forum",
    location: "New Delhi",
    year: "2025",
    span: "wide",
    alt: "Ravi Tomar speaking at a healthcare industry forum.",
    verified: false,
  },
];
