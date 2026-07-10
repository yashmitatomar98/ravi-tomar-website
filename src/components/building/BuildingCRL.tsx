"use client";

import { gsap } from "gsap";
import { crlPillars, crlLinks } from "@/data/crl";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";
import IndiaMap from "./IndiaMap";
import { assets } from "@/data/assets";

export default function BuildingCRL() {
  const ref = useGsap<HTMLElement>((root) => {
    // slow cinematic zoom on the lab visual
    gsap.fromTo(
      "[data-lab-zoom]",
      { scale: 1.18 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-lab-visual]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.from("[data-crl-head] [data-reveal]", {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-crl-head]", start: "top 80%" },
    });

    gsap.from("[data-pillar]", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-pillars]", start: "top 78%" },
    });
  });

  return (
    <section
      ref={ref}
      id="crl"
      className="relative overflow-hidden bg-lab-deep py-[14vh]"
    >
      {/* Full-bleed lab visual with slow zoom */}
      <div
        data-lab-visual
        className="relative mb-[12vh] h-[70vh] w-full overflow-hidden"
      >
        <div data-lab-zoom className="absolute inset-0">
          <MediaFrame
            src={assets.crlLab.image}
            alt={assets.crlLab.alt}
            label={assets.crlLab.label}
            meta={assets.crlLab.meta}
            sourceUrl={assets.crlLab.sourceUrl}
            className="h-full w-full"
            cursor="view"
            sizes="100vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lab-deep via-lab-deep/30 to-transparent" />

        <div className="container-lab absolute inset-x-0 bottom-10">
          <p className="eyebrow mb-4 text-sci">CRL Diagnostics</p>
          <h2 className="max-w-4xl font-serif text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-ivory">
            From one laboratory to a diagnostic network.
          </h2>
        </div>
      </div>

      <div className="container-lab">
        <header data-crl-head className="mb-20 max-w-3xl">
          <p className="overflow-hidden">
            <span data-reveal className="block font-sans text-sm leading-relaxed text-muted">
              A pathology laboratory built on a single, uncompromising idea — that
              quality diagnostics should reach beyond privilege and geography.
            </span>
          </p>
        </header>

        {/* Pillars */}
        <div
          data-pillars
          className="grid grid-cols-1 gap-px border-t border-white/10 md:grid-cols-2"
        >
          {crlPillars.map((p) => (
            <article
              key={p.index}
              data-pillar
              data-cursor="view"
              className="group relative border-b border-white/10 py-12 md:odd:pr-12 md:even:border-l md:even:border-white/10 md:even:pl-12"
            >
              <span className="index-num text-xs text-champagne">{p.index}</span>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-widest2 text-muted">
                {p.key}
              </p>
              <h3 className="mt-4 font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-tight tracking-[-0.01em] text-ivory transition-colors duration-500 group-hover:text-sci">
                {p.headline}
              </h3>
              <span className="mt-3 inline-block font-sans text-[9px] uppercase tracking-widest2 text-champagne/50">
                Figures CMS-configurable · verify before production
              </span>
            </article>
          ))}
        </div>

        {/* Map + CTA */}
        <div className="mt-[12vh] grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Regional Presence</p>
            <h3 className="font-serif text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.05] tracking-[-0.01em] text-ivory">
              A growing diagnostic presence, lighting up across India.
            </h3>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-muted">
              Advanced diagnostic capabilities and quality systems, extended
              region by region — designed to make accurate diagnosis more
              accessible.
            </p>

            <a
              href={crlLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="group mt-10 inline-flex items-center gap-3 border border-white/15 px-7 py-4 font-sans text-[11px] uppercase tracking-widest2 text-ivory transition-colors duration-500 hover:border-sci hover:text-sci"
            >
              Explore CRL Diagnostics
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <IndiaMap />
        </div>
      </div>
    </section>
  );
}
