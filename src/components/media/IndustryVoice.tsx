"use client";

import { gsap } from "gsap";
import { media } from "@/data/media";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";

export default function IndustryVoice() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-iv-head] [data-reveal]", {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-iv-head]", start: "top 82%" },
    });
    gsap.from("[data-rail-card]", {
      opacity: 0,
      y: 50,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-rail]", start: "top 80%" },
    });
  });

  return (
    <section
      ref={ref}
      id="media"
      className="relative overflow-hidden bg-lab-black py-[14vh]"
    >
      <div className="container-lab">
        <header data-iv-head className="mb-16 max-w-4xl">
          <p className="eyebrow mb-8">Industry Voice</p>
          <h2 className="font-serif text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.92] tracking-[-0.02em] text-ivory">
            <span className="reveal-line"><span data-reveal className="block">Beyond the lab.</span></span>
            <span className="reveal-line"><span data-reveal className="block">Shaping the <span className="italic text-sci">conversation.</span></span></span>
          </h2>
        </header>
      </div>

      {/* horizontal editorial rail */}
      <div
        data-rail
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:px-12 lg:px-20"
        style={{ scrollbarWidth: "none" }}
      >
        {media.map((m, i) => {
          const Wrapper = m.href ? "a" : "div";
          return (
            <Wrapper
              key={i}
              {...(m.href
                ? { href: m.href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-rail-card
              data-cursor={m.kind === "watch" ? "media" : "read"}
              className="group relative w-[80vw] shrink-0 snap-start sm:w-[440px]"
            >
              {/* magazine-cover style */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <MediaFrame
                  src={m.image}
                  alt={m.imageAlt || m.title}
                  label={m.outlet}
                  meta={m.year}
                  sourceUrl={m.sourceUrl}
                  className="h-full w-full"
                  cursor={m.kind === "watch" ? "media" : "read"}
                  bw
                  sizes="(max-width: 640px) 80vw, 440px"
                />
                {/* cover masthead */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl text-ivory drop-shadow">
                      {m.outlet}
                    </span>
                    <span className="font-sans text-[9px] uppercase tracking-widest2 text-ivory/80">
                      {m.kind === "watch" ? "Watch" : "Read"}
                    </span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.05] text-ivory drop-shadow">
                    {m.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-muted transition-colors group-hover:text-ivory">
                  {m.kind === "watch" ? "Watch interview" : "Read story"} ↗
                </span>
                {!m.href && (
                  <span className="font-sans text-[8px] uppercase tracking-widest2 text-champagne/60">
                    Link pending
                  </span>
                )}
              </div>
            </Wrapper>
          );
        })}
        <div className="w-6 shrink-0 md:w-12 lg:w-20" aria-hidden />
      </div>

      <p className="container-lab mt-8 font-sans text-[10px] uppercase tracking-widest2 text-muted/50">
        Drag or scroll horizontally · sources link to original verified publications
      </p>
    </section>
  );
}
