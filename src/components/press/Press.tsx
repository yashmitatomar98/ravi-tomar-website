"use client";

import { gsap } from "gsap";
import { press } from "@/data/press";
import { useGsap } from "@/lib/animations";

export default function Press() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-press-head] [data-reveal]", {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-press-head]", start: "top 82%" },
    });
    gsap.from("[data-row]", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-press-list]", start: "top 80%" },
    });
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-lab-black py-[14vh]">
      <div className="container-lab">
        <header data-press-head className="mb-16">
          <p className="eyebrow mb-8">Press &amp; Features</p>
          <h2 className="overflow-hidden font-serif text-[clamp(2.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-ivory">
            <span data-reveal className="block">In the news.</span>
          </h2>
        </header>

        <ul data-press-list className="border-t border-white/10">
          {press.map((item, i) => {
            const Tag = item.href ? "a" : "div";
            return (
              <li key={i} className="border-b border-white/10">
                <Tag
                  {...(item.href
                    ? {
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  data-row
                  data-cursor="read"
                  className="group grid grid-cols-1 items-baseline gap-2 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[160px_100px_1fr_auto] md:gap-8 md:px-4"
                >
                  <span className="font-sans text-[11px] uppercase tracking-widest2 text-sci">
                    {item.publication}
                  </span>
                  <span className="index-num text-xs text-muted">
                    {item.date || "—"}
                  </span>
                  <span className="font-serif text-[clamp(1.2rem,2.4vw,1.9rem)] leading-tight text-ivory/90 transition-colors duration-500 group-hover:text-ivory">
                    {item.headline}
                  </span>
                  <span className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">
                    {item.category}
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                      {item.href ? "↗" : ""}
                    </span>
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 font-sans text-[10px] uppercase tracking-widest2 text-muted/50">
          All external stories link to their original verified source · dates omitted where unconfirmed
        </p>
      </div>
    </section>
  );
}
