"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * A subtle laboratory scanning band that occasionally sweeps vertically through
 * a section. Drop inside a `position: relative; overflow: hidden` container.
 */
export default function ScanLine({ interval = 9 }: { interval?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: interval });
    tl.fromTo(
      el,
      { yPercent: -120, opacity: 0 },
      {
        yPercent: () => (parent.offsetHeight / el.offsetHeight) * 100 + 20,
        opacity: 1,
        duration: 4.5,
        ease: "none",
        onStart: () => gsap.to(el, { opacity: 1, duration: 0.6 }),
        onComplete: () => gsap.set(el, { opacity: 0 }),
      }
    );

    return () => {
      tl.kill();
    };
  }, [interval]);

  return <div ref={ref} className="scan-line" aria-hidden />;
}
