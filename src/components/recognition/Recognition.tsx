"use client";

import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awards } from "@/data/awards";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";

export default function Recognition() {
  const [active, setActive] = useState(0);

  const ref = useGsap<HTMLElement>((root) => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = root.querySelector<HTMLElement>("[data-track]");
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", root);
      if (!track) return;

      const scrollLen = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -scrollLen(),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${scrollLen()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: tween,
          start: "left center",
          end: "right center",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    });
  });

  return (
    <section
      ref={ref}
      id="recognition"
      className="relative overflow-hidden bg-lab-deep"
    >
      {/* header */}
      <div className="container-lab pt-[14vh] lg:absolute lg:top-0 lg:z-20 lg:pt-16">
        <p className="eyebrow mb-8">Recognition</p>
        <h2 className="max-w-4xl font-serif text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.02em] text-ivory">
          Recognised for the work.
          <br />
          <span className="text-champagne">Responsible for what comes next.</span>
        </h2>
      </div>

      {/* giant changing index (desktop) */}
      <div className="pointer-events-none absolute right-10 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <span className="index-num font-serif text-[16vw] leading-none text-white/[0.04]">
          {awards[active]?.index}
        </span>
      </div>

      {/* track */}
      <div
        data-track
        className="flex flex-col lg:h-screen lg:flex-row lg:flex-nowrap lg:items-center"
      >
        {awards.map((award) => (
          <article
            key={award.index}
            data-panel
            className="flex w-full shrink-0 items-center px-6 py-[8vh] md:px-12 lg:h-screen lg:w-screen lg:py-0 lg:pl-20 lg:pr-40"
          >
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
              <div className="relative aspect-[4/3] w-full lg:aspect-[3/2]">
                <MediaFrame
                  src={award.image}
                  alt={award.imageAlt || award.title}
                  label={award.title}
                  meta={`${award.organisation} · ${award.year}`}
                  sourceUrl={award.sourceUrl}
                  className="h-full w-full"
                  cursor="view"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <span className="index-num text-sm text-champagne">
                  Award {award.index}
                </span>
                <h3
                  className="mt-6 font-serif text-[clamp(2rem,4.4vw,4rem)] leading-[1.02] tracking-[-0.02em]"
                  style={{
                    background:
                      "linear-gradient(100deg, #E8D9A8, #B89B5E 45%, #8a733f)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {award.title}
                </h3>
                <div className="mt-8 space-y-1">
                  <p className="font-sans text-sm uppercase tracking-widest2 text-ivory">
                    {award.organisation}
                  </p>
                  {award.detail && (
                    <p className="font-sans text-xs uppercase tracking-widest2 text-muted">
                      {award.detail}
                    </p>
                  )}
                  <p className="index-num pt-2 text-2xl text-sci">{award.year}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* progress dots */}
      <div className="hidden justify-center gap-3 pb-10 lg:flex">
        {awards.map((a, i) => (
          <span
            key={a.index}
            className={`h-px w-10 transition-colors duration-500 ${
              i === active ? "bg-champagne" : "bg-white/15"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
