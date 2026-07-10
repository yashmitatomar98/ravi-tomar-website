"use client";

import { gsap } from "gsap";
import { timeline } from "@/data/timeline";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";
import ScanLine from "@/components/fx/ScanLine";

export default function Journey() {
  const ref = useGsap<HTMLElement>((root) => {
    // luminous point travels down the line as the section scrolls
    gsap.fromTo(
      "[data-progress]",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top",
        scrollTrigger: {
          trigger: "[data-track]",
          start: "top 60%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    gsap.utils.toArray<HTMLElement>("[data-entry]").forEach((entry) => {
      gsap.from(entry.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 44,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: entry, start: "top 78%" },
      });
      const node = entry.querySelector<HTMLElement>("[data-node]");
      if (node) {
        gsap.fromTo(
          node,
          { scale: 0.4, opacity: 0.3 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(2)",
            scrollTrigger: { trigger: entry, start: "top 62%" },
          }
        );
      }
    });
  });

  return (
    <section
      ref={ref}
      id="story"
      className="relative overflow-hidden bg-lab-black py-[14vh]"
    >
      <ScanLine interval={11} />

      <div className="container-lab">
        <header className="mb-24 max-w-4xl">
          <p className="eyebrow mb-8">The Journey</p>
          <h2 className="font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] text-ivory">
            Nearly three decades.
            <br />
            One pursuit.
            <br />
            <span className="text-sci">Accurate diagnosis.</span>
          </h2>
        </header>

        {/* Timeline track */}
        <div data-track className="relative pl-10 md:pl-0">
          {/* vertical hairline */}
          <div className="absolute bottom-0 left-[3px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          {/* luminous progress */}
          <div
            data-progress
            className="absolute bottom-0 left-[3px] top-0 w-px bg-gradient-to-b from-sci via-sci to-accent md:left-1/2 md:-translate-x-1/2"
            style={{ boxShadow: "0 0 12px rgba(121,199,181,0.6)" }}
          />

          <div className="space-y-[12vh]">
            {timeline.map((entry, i) => {
              const left = i % 2 === 0;
              return (
                <article
                  key={`${entry.year}-${i}`}
                  data-entry
                  className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${
                    left ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* node */}
                  <span
                    data-node
                    className="absolute left-[3px] top-2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sci md:left-1/2"
                    style={{ boxShadow: "0 0 10px rgba(121,199,181,0.8)" }}
                  />

                  {/* text side */}
                  <div
                    className={`[direction:ltr] ${
                      left ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <p
                      data-reveal
                      className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-none tracking-[-0.03em] text-ivory"
                    >
                      {entry.year}
                    </p>
                    <h3
                      data-reveal
                      className="mt-4 font-sans text-[11px] uppercase tracking-widest2 text-champagne"
                    >
                      {entry.title}
                    </h3>
                    <p
                      data-reveal
                      className={`mt-4 max-w-md font-sans text-sm leading-relaxed text-muted ${
                        left ? "md:ml-auto" : ""
                      }`}
                    >
                      {entry.body}
                    </p>
                  </div>

                  {/* image side */}
                  <div className="[direction:ltr]">
                    <div
                      data-reveal
                      className={`relative aspect-[4/3] w-full ${
                        left ? "md:ml-4" : "md:mr-4"
                      }`}
                    >
                      <MediaFrame
                        src={entry.image}
                        alt={entry.imageAlt || `${entry.year} — ${entry.title}`}
                        label={`${entry.year}`}
                        meta={entry.title}
                        sourceUrl={entry.sourceUrl}
                        className="h-full w-full"
                        bw
                        cursor="view"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
