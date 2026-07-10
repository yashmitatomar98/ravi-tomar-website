"use client";

import { gsap } from "gsap";
import { useGsap } from "@/lib/animations";

const ARTICLES = [
  { title: "Why Quality Must Lead Diagnostic Growth", category: "Quality" },
  { title: "The Future of Diagnostics in India", category: "Diagnostics" },
  { title: "Building Trust at Scale", category: "Leadership" },
  { title: "Why Accreditation Matters", category: "Healthcare" },
  { title: "Making Advanced Diagnostics More Accessible", category: "Accessibility" },
];

export default function Journal() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-jr-head] [data-reveal]", {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-jr-head]", start: "top 82%" },
    });
    gsap.from("[data-article]", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-jr-list]", start: "top 80%" },
    });
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-lab-deep py-[14vh]">
      <div className="container-lab">
        <header data-jr-head className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-8">Latest · Journal</p>
            <h2 className="overflow-hidden font-serif text-[clamp(2.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-ivory">
              <span data-reveal className="block">Perspectives.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Diagnostics", "Leadership", "Healthcare", "Quality", "Accessibility"].map(
              (c) => (
                <span
                  key={c}
                  className="border border-white/15 px-3 py-1.5 font-sans text-[9px] uppercase tracking-widest2 text-muted"
                >
                  {c}
                </span>
              )
            )}
          </div>
        </header>

        <ul data-jr-list className="border-t border-white/10">
          {ARTICLES.map((a, i) => (
            <li key={i} className="border-b border-white/10">
              <div
                data-article
                data-cursor="read"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8"
              >
                <span className="index-num text-xs text-champagne">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[clamp(1.4rem,3vw,2.6rem)] leading-tight text-ivory/90 transition-colors duration-500 group-hover:text-sci">
                  {a.title}
                </h3>
                <span className="flex items-center gap-4">
                  <span className="hidden font-sans text-[10px] uppercase tracking-widest2 text-muted sm:inline">
                    {a.category}
                  </span>
                  <span className="border border-champagne/30 px-2 py-1 font-sans text-[8px] uppercase tracking-widest2 text-champagne/70">
                    Draft
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-sans text-[10px] uppercase tracking-widest2 text-muted/50">
          Editorial concepts — no quotes or authorship published until approved in the CMS
        </p>
      </div>
    </section>
  );
}
