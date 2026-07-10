/**
 * CRL Diagnostics — all quantitative values are CMS-configurable and MUST be
 * verified against official company material before production.
 */

export const crlLinks = {
  website: "https://www.crldiagnostics.com/",
  linkedin: "https://www.linkedin.com/in/ravi-tomar-9783a6b4/",
  instagram: "https://www.instagram.com/crl.diagnostics/",
  companyLinkedin: "https://in.linkedin.com/company/crldiagnostics",
};

export type CrlPillar = {
  index: string;
  key: string;
  headline: string;
};

export const crlPillars: CrlPillar[] = [
  { index: "01", key: "Founding Vision", headline: "Quality Without Compromise" },
  { index: "02", key: "Network", headline: "A Growing Diagnostic Presence" },
  { index: "03", key: "Science", headline: "Advanced Diagnostic Capabilities" },
  {
    index: "04",
    key: "Access",
    headline: "Making Quality Diagnostics More Accessible",
  },
];

export type LabLocation = {
  name: string;
  region: string;
  /** Normalised map coordinates (0–100) over the India silhouette viewBox. */
  x: number;
  y: number;
  verified: boolean;
};

/**
 * PLACEHOLDER regional markers. Replace with CRL's verified lab locations from
 * official company material. Do NOT ship fake locations — `verified` gates display.
 */
export const labLocations: LabLocation[] = [
  { name: "Delhi NCR", region: "North", x: 42, y: 30, verified: false },
  { name: "Jaipur", region: "North", x: 33, y: 36, verified: false },
  { name: "Lucknow", region: "North", x: 54, y: 37, verified: false },
  { name: "Ahmedabad", region: "West", x: 26, y: 46, verified: false },
  { name: "Mumbai", region: "West", x: 27, y: 58, verified: false },
  { name: "Kolkata", region: "East", x: 68, y: 48, verified: false },
  { name: "Hyderabad", region: "South", x: 44, y: 63, verified: false },
  { name: "Bengaluru", region: "South", x: 40, y: 72, verified: false },
  { name: "Chennai", region: "South", x: 48, y: 74, verified: false },
];
