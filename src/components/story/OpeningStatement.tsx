"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/lib/animations";

export default function OpeningStatement() {
  const ref = useGsap<HTMLElement>((root) => {
    const lines = gsap.utils.toArray<HTMLElement>("[data-stmt]", root);

    lines.forEach((line, i) => {
      gsap.fromTo(
        line,
        { opacity: 0.12, filter: "blur(8px)", y: 30 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 42%",
            scrub: true,
          },
        }
      );
      // blur out the previous line as the next comes in
      if (i < lines.length - 1) {
        gsap.to(line, {
          opacity: 0.25,
          filter: "blur(5px)",
          ease: "none",
          scrollTrigger: {
            trigger: lines[i + 1],
            start: "top 72%",
            end: "top 45%",
            scrub: true,
          },
        });
      }
    });

    ScrollTrigger.refresh();
  });

  return (
    <section
      ref={ref}
      className="relative bg-ivory py-[16vh] text-lab-black"
    >
      <div className="container-lab">
        <p className="eyebrow mb-16 text-lab-black/50">The Principle</p>

        <div className="max-w-5xl space-y-2">
          <p
            data-stmt
            className="font-serif text-[clamp(2rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.02em]"
          >
            70% of a patient's diagnosis and treatment can depend on diagnostic
            reports.
          </p>

          <p
            data-stmt
            className="pt-[8vh] font-serif text-[clamp(2.4rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em] text-champagne"
          >
            Quality cannot be compromised.
          </p>

          <p
            data-stmt
            className="pt-6 font-sans text-sm uppercase tracking-widest2 text-lab-black/60"
          >
            — Ravi Tomar
          </p>
        </div>

        <div
          data-stmt
          className="mt-[14vh] max-w-3xl border-t border-lab-black/15 pt-10"
        >
          <p className="font-serif text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.01em]">
            A principle that became the foundation of a business.
          </p>
          <p className="mt-6 font-sans text-xs leading-relaxed text-lab-black/50">
            Reflecting the philosophy expressed by Ravi Tomar in his ET HealthWorld
            interview on quality and accreditation in diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
}
