"use client";

import { gsap } from "gsap";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";
import { assets } from "@/data/assets";

export default function PersonalLeadership() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-pl] [data-reveal]", {
      opacity: 0,
      y: 44,
      duration: 1.1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-pl]", start: "top 74%" },
    });
    gsap.fromTo(
      "[data-pl-img]",
      { opacity: 0, scale: 1.06 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-pl]", start: "top 78%" },
      }
    );
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-ivory py-[16vh] text-lab-black">
      <div data-pl className="container-lab grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div data-pl-img className="relative aspect-[4/5] w-full max-w-[520px]">
          <MediaFrame
            src={assets.personalPortrait.image}
            alt={assets.personalPortrait.alt}
            label={assets.personalPortrait.label}
            meta={assets.personalPortrait.meta}
            sourceUrl={assets.personalPortrait.sourceUrl}
            className="h-full w-full"
            cursor="view"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        <div>
          <p data-reveal className="eyebrow mb-10 text-lab-black/50">
            The Leader
          </p>
          <h2
            data-reveal
            className="font-serif text-[clamp(2rem,5vw,4.4rem)] leading-[1.0] tracking-[-0.02em]"
          >
            Building an institution is never about one individual.
          </h2>

          <div data-reveal className="mt-10 max-w-md space-y-2 font-sans text-base leading-relaxed text-lab-black/70">
            <p>It is about creating systems.</p>
            <p>Building teams.</p>
            <p>Protecting standards.</p>
            <p>
              And ensuring that quality remains intact as the organisation grows.
            </p>
          </div>

          <p
            data-reveal
            className="mt-12 font-serif text-4xl italic text-lab-black"
          >
            Ravi Tomar
          </p>
        </div>
      </div>
    </section>
  );
}
