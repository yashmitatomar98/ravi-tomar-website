"use client";

import { gsap } from "gsap";
import { gallery, type GalleryItem } from "@/data/gallery";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";

const SPAN_CLASS: Record<GalleryItem["span"], string> = {
  wide: "md:col-span-2 aspect-[16/10]",
  portrait: "md:col-span-1 aspect-[3/4]",
  square: "md:col-span-1 aspect-square",
  tall: "md:col-span-1 md:row-span-2 aspect-[3/5]",
};

export default function LeadershipMoments() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-lm-head] [data-reveal]", {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-lm-head]", start: "top 82%" },
    });
    gsap.from("[data-tile]", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-mosaic]", start: "top 78%" },
    });
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-lab-deep py-[14vh]">
      <div className="container-lab">
        <header data-lm-head className="mb-16 max-w-4xl">
          <p className="eyebrow mb-8">Leadership Moments</p>
          <h2 className="font-serif text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.92] tracking-[-0.02em] text-ivory">
            <span className="reveal-line"><span data-reveal className="block">In the room</span></span>
            <span className="reveal-line"><span data-reveal className="block">where healthcare</span></span>
            <span className="reveal-line"><span data-reveal className="block text-sci">moves forward.</span></span>
          </h2>
        </header>

        <div
          data-mosaic
          className="grid grid-flow-row-dense grid-cols-1 gap-3 md:grid-cols-3"
        >
          {gallery.map((item) => (
            <figure
              key={item.id}
              data-tile
              data-cursor="view"
              className={`group relative overflow-hidden ${SPAN_CLASS[item.span]}`}
            >
              <MediaFrame
                src={item.image}
                alt={item.alt}
                label={item.event}
                meta={`${item.location} · ${item.year}`}
                sourceUrl={item.sourceUrl}
                className="h-full w-full"
                bw
                cursor="view"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* hover meta */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-lab-black/90 to-transparent p-5 opacity-0 transition-all duration-500 ease-precision group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-lg leading-tight text-ivory">
                  {item.event}
                </p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-widest2 text-muted">
                  {item.location} · {item.year}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 font-sans text-[10px] uppercase tracking-widest2 text-muted/50">
          Verified event photography only · hosted locally, never hotlinked
        </p>
      </div>
    </section>
  );
}
