/**
 * CRL Diagnostics section content. Source: official profile sheet; NABL/ICMR
 * approval per CEO Insights (2022).
 */

export const crl = {
  intro:
    "Founded in 2015, CRL Diagnostics Pvt. Ltd. has become a trusted name in the Indian diagnostics landscape. It began as a single laboratory and has grown into one of India's fastest-growing diagnostic chains, guided by one principle: quality healthcare at affordable prices for all.",
  body: [
    "Under Ravi Tomar's leadership, CRL has invested in the standards, systems and people that accurate diagnosis depends on — with NABL- and ICMR-approved laboratory practice and a team of more than 950 healthcare professionals.",
  ],
};

export type CrlPillar = { title: string; body: string };

export const crlPillars: CrlPillar[] = [
  {
    title: "Quality systems",
    body: "NABL- and ICMR-approved laboratory practice, with accuracy treated as a responsibility.",
  },
  {
    title: "Technology",
    body: "Modern diagnostic equipment and laboratory processes that support reliable results.",
  },
  {
    title: "Patient-centred care",
    body: "Diagnostics designed around the patient, and around the clinicians who depend on each report.",
  },
  {
    title: "Pan-India growth",
    body: "From one laboratory to a national presence, with standards kept intact at every stage.",
  },
];

/** "Trusted by leading institutions" — from the official profile sheet. */
export const institutions = [
  "Indian Railways",
  "Pusa Institute",
  "Apollo Hospitals",
  "NTPC & GAIL (India)",
  "State Governments of Punjab, Jammu & Kashmir and Uttar Pradesh",
  "Offices of CMO, DSO and IDSP",
];
