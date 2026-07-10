"use client";

import { gsap } from "gsap";
import { useGsap } from "@/lib/animations";
import PrincipleVisual from "./PrincipleVisual";
import ScanLine from "@/components/fx/ScanLine";

type Kind = "quality" | "ethics" | "accessibility" | "precision";

const PRINCIPLES: {
  index: string;
  key: string;
  kind: Kind;
  body: string;
  quote?: boolean;
}[] = [
  {
    index: "01",
    key: "Quality",
    kind: "quality",
    quote: true,
    body: "A diagnostic report is not simply data. It can influence a patient's entire treatment journey.",
  },
  {
    index: "02",
    key: "Ethics",
    kind: "ethics",
    body: "Trust must exist before scale can matter.",
  },
  {
    index: "03",
    key: "Accessibility",
    kind: "accessibility",
    body: "Quality healthcare investigations should reach beyond privilege and geography.",
  },
  {
    index: "04",
    key: "Precision",
    kind: "precision",
    body: "Accuracy is built through standards, systems, technology and people.",
  },
];

export default function Philosophy() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-phil-head] [data-reveal]", {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-phil-head]", start: "top 80%" },
    });

    gsap.utils.toArray<HTMLElement>("[data-principle]").forEach((p) => {
      gsap.from(p.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: p, start: "top 70%" },
      });
      gsap.fromTo(
        p.querySelector("[data-visual]"),
        { opacity: 0, scale: 0.9, rotate: -3 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: p, start: "top 72%" },
        }
      );
    });
  });

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative overflow-hidden bg-lab-black py-[14vh]"
    >
      <ScanLine interval={13} />

      <header data-phil-head className="container-lab mb-[12vh] max-w-5xl">
        <p className="eyebrow mb-8">The Philosophy</p>
        <h2 className="font-serif text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.02em] text-ivory">
          <span className="reveal-line"><span data-reveal className="block">The business</span></span>
          <span className="reveal-line"><span data-reveal className="block">of diagnostics</span></span>
          <span className="reveal-line"><span data-reveal className="block">is the business</span></span>
          <span className="reveal-line"><span data-reveal className="block text-champagne">of trust.</span></span>
        </h2>
      </header>

      <div className="container-lab space-y-[10vh]">
        {PRINCIPLES.map((p, i) => (
          <article
            key={p.index}
            data-principle
            className={`grid grid-cols-1 items-center gap-10 border-t border-white/10 pt-14 md:grid-cols-[1fr_1fr] md:gap-20 ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="[direction:ltr]">
              <div className="flex items-baseline gap-5">
                <span data-reveal className="index-num text-sm text-champagne">
                  {p.index}
                </span>
                <span
                  data-reveal
                  className="font-sans text-[11px] uppercase tracking-widest2 text-muted"
                >
                  {p.key}
                </span>
              </div>
              {p.quote ? (
                <blockquote
                  data-reveal
                  className="mt-8 font-serif text-[clamp(1.8rem,4.4vw,3.6rem)] italic leading-[1.05] tracking-[-0.01em] text-ivory"
                >
                  “{p.body}”
                </blockquote>
              ) : (
                <p
                  data-reveal
                  className="mt-8 font-serif text-[clamp(1.8rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.01em] text-ivory"
                >
                  {p.body}
                </p>
              )}
            </div>

            <div className="[direction:ltr]">
              <div
                data-visual
                data-cursor="view"
                className="mx-auto aspect-square w-full max-w-[360px] rounded-sm border border-white/5 bg-lab-deep p-10"
              >
                <PrincipleVisual kind={p.kind} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
