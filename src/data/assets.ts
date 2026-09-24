/**
 * Standalone image slots. Paths are under /public/media (see public/media/README.md
 * and media-manifest.json for provenance). Leave `image` empty to show the
 * monogram placeholder — never a fabricated photo.
 */

export type AssetSlot = { image?: string; alt: string; width?: number; height?: number };

export const assets = {
  heroPortrait: {
    image: "/media/ravi-tomar/portraits/ravi-tomar-office.jpg",
    width: 634,
    height: 606,
    alt: "Ravi Tomar, Founder, Chairman and Managing Director of CRL Diagnostics, at his desk.",
  },
  aboutPortrait: {
    image: "/media/ravi-tomar/portraits/ravi-tomar-desk.jpg",
    width: 392,
    height: 254,
    alt: "Ravi Tomar reviewing documents in his office.",
  },
  crlLab: {
    image: "",
    alt: "Inside a CRL Diagnostics laboratory.",
  },
} satisfies Record<string, AssetSlot>;
