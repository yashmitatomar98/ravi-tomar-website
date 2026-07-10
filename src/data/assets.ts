/**
 * Standalone (non-list) image slots — one entry per unique frame on the site.
 *
 * IMAGE MAPPING RULES (enforced):
 *  - `sourceUrl` = the human-readable social POST / publication URL the correct
 *     photo lives in. NEVER an Instagram/Facebook image CDN url, never a Google
 *     Images address.
 *  - `image` = local path under /public/media once the approved asset is
 *     downloaded and hosted. Until then it stays empty and a labelled
 *     placeholder shows the `label` + `sourceUrl`.
 *  - Each photo maps ONLY to the event/content described in `label`.
 */

export type AssetSlot = {
  image?: string;
  label: string;
  meta?: string;
  sourceUrl?: string;
  alt: string;
};

export const assets: Record<
  "heroPortrait" | "crlLab" | "personalPortrait" | "legacyPortrait",
  AssetSlot
> = {
  heroPortrait: {
    image: "",
    label: "Editorial leadership portrait",
    meta: "Forbes-style studio lighting · portrait",
    sourceUrl: "",
    alt: "Editorial studio portrait of Ravi Tomar, Founder and Chairman of CRL Diagnostics.",
  },
  crlLab: {
    image: "",
    label: "Modern diagnostic laboratory",
    meta: "CRL Diagnostics · facility",
    sourceUrl: "",
    alt: "Interior of a modern, automated CRL diagnostic laboratory.",
  },
  personalPortrait: {
    image: "",
    label: "Close leadership portrait",
    meta: "Intimate · editorial",
    sourceUrl: "",
    alt: "Close editorial portrait of Ravi Tomar.",
  },
  legacyPortrait: {
    image: "",
    label: "Leadership portrait",
    meta: "Legacy",
    sourceUrl: "",
    alt: "Portrait of Ravi Tomar.",
  },
};
