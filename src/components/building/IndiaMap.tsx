"use client";

import { gsap } from "gsap";
import { labLocations } from "@/data/crl";
import { useGsap } from "@/lib/animations";

const INDIA_PATH =
  "M40 5 L52 9 L55 18 L66 24 L62 30 L76 28 L82 32 L72 39 L68 45 L66 55 L58 70 L50 86 L44 97 L40 84 L34 64 L26 52 L17 43 L24 39 L22 33 L30 29 L30 16 Z";

/**
 * Dark, illustrative India map. Regional lab markers illuminate on scroll.
 * All markers here are PLACEHOLDERS — replace with CRL's verified locations.
 */
export default function IndiaMap() {
  const ref = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      "[data-marker]",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: 0.12,
        scrollTrigger: { trigger: "[data-map]", start: "top 70%" },
      }
    );
    gsap.fromTo(
      "[data-india]",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-map]", start: "top 75%" },
      }
    );
  });

  return (
    <div ref={ref} data-map className="relative">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          aria-label="Illustrative map of CRL Diagnostics regional presence across India"
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="rgba(121,199,181,0.10)" />
              <stop offset="100%" stopColor="rgba(121,199,181,0)" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#glow)" />
          <path
            data-india
            d={INDIA_PATH}
            fill="rgba(121,199,181,0.05)"
            stroke="rgba(155,168,163,0.4)"
            strokeWidth="0.4"
            strokeLinejoin="round"
          />
        </svg>

        {/* markers */}
        {labLocations.map((loc) => (
          <span
            key={loc.name}
            data-marker
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          >
            <span className="relative block h-2 w-2">
              <span
                className={`absolute inset-0 rounded-full ${
                  loc.verified ? "bg-accent" : "bg-sci"
                }`}
                style={{ boxShadow: "0 0 8px rgba(121,199,181,0.9)" }}
              />
              <span className="absolute inset-0 animate-ping rounded-full bg-sci/40" />
            </span>
            <span className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap font-sans text-[8px] uppercase tracking-widest2 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {loc.name}
            </span>
          </span>
        ))}
      </div>

      <p className="mt-8 text-center font-sans text-[9px] uppercase tracking-widest2 text-muted/50">
        Illustrative network · locations pending verification against official CRL material
      </p>
    </div>
  );
}
