"use client";

import { gsap } from "gsap";
import { useGsap } from "@/lib/animations";
import MediaFrame from "@/components/ui/MediaFrame";
import Particles from "@/components/fx/Particles";
import { assets } from "@/data/assets";

export default function Legacy() {
  const ref = useGsap<HTMLElement>(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: "[data-legacy]", start: "top 55%" },
    });
    tl.from("[data-legacy-1] span", {
      yPercent: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.14,
      ease: "power4.out",
    })
      .from(
        "[data-legacy-2]",
        { opacity: 0, y: 30, duration: 1 },
        "+=0.6"
      )
      .fromTo(
        "[data-legacy-img]",
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: "power3.out" },
        "-=0.4"
      );
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-lab-black py-[14vh]"
    >
      <Particles className="opacity-40" density={0.7} />

      <div data-legacy className="container-lab relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2
            data-legacy-1
            className="font-serif text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.02em] text-ivory"
          >
            <span className="block reveal-line"><span className="block">The true measure</span></span>
            <span className="block reveal-line"><span className="block">of a diagnostic business</span></span>
            <span className="block reveal-line"><span className="block">is the trust placed</span></span>
            <span className="block reveal-line"><span className="block text-sci">in every report.</span></span>
          </h2>

          <p
            data-legacy-2
            className="mt-14 font-serif text-[clamp(1.6rem,3vw,2.4rem)] italic text-champagne"
          >
            The work continues.
          </p>
        </div>

        <div data-legacy-img className="relative aspect-[3/4] w-full max-w-[440px]">
          <MediaFrame
            src={assets.legacyPortrait.image}
            alt={assets.legacyPortrait.alt}
            label={assets.legacyPortrait.label}
            meta={assets.legacyPortrait.meta}
            sourceUrl={assets.legacyPortrait.sourceUrl}
            className="h-full w-full"
            cursor="view"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
