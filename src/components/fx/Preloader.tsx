"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SEQUENCE = ["01", "27", "58", "84", "100"];

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState("00");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
      document.dispatchEvent(new CustomEvent("preloader:done"));
      setDone(true);
    };

    if (reduced) {
      setCount("100");
      const t = window.setTimeout(finish, 400);
      return () => window.clearTimeout(t);
    }

    const q = gsap.utils.selector(root);
    const tl = gsap.timeline({ onComplete: finish });

    // thin line appears
    tl.fromTo(
      q(".pre-line"),
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.9, ease: "power3.inOut" }
    );

    // rapid number updates
    SEQUENCE.forEach((n, i) => {
      tl.call(() => setCount(n), [], 0.5 + i * 0.32);
    });

    tl.to(q(".pre-caption"), { opacity: 0, duration: 0.4 }, 2.05)
      .to(q(".pre-count"), { opacity: 0, y: -8, duration: 0.4 }, 2.05)
      // line perfectly aligns / centres
      .to(q(".pre-line"), { width: "40px", duration: 0.6, ease: "power3.inOut" }, 2.1)
      // RT monogram
      .fromTo(
        q(".pre-rt"),
        { opacity: 0, letterSpacing: "0.6em" },
        { opacity: 1, letterSpacing: "0.1em", duration: 0.6, ease: "power2.out" },
        2.35
      )
      .to(q(".pre-line"), { opacity: 0, duration: 0.4 }, 2.7)
      .to(q(".pre-rt"), { opacity: 0, y: -14, duration: 0.5 }, 2.9)
      // reveal full name
      .fromTo(
        q(".pre-name .line"),
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
        },
        3.0
      )
      .fromTo(
        q(".pre-role"),
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        3.4
      )
      .to({}, { duration: 0.6 })
      // curtain opens vertically
      .to(q(".pre-half-top"), { yPercent: -100, duration: 1.1, ease: "power4.inOut" }, "+=0.1")
      .to(q(".pre-half-bottom"), { yPercent: 100, duration: 1.1, ease: "power4.inOut" }, "<")
      .to(q(".pre-content"), { opacity: 0, duration: 0.5 }, "<");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999]" aria-hidden>
      <div className="pre-half-top absolute inset-x-0 top-0 h-1/2 bg-lab-black" />
      <div className="pre-half-bottom absolute inset-x-0 bottom-0 h-1/2 bg-lab-black" />

      <div className="pre-content absolute inset-0 flex flex-col items-center justify-center text-ivory">
        <div className="flex flex-col items-center gap-6">
          <span className="pre-caption font-sans text-[10px] uppercase tracking-widest2 text-muted">
            Calibrating Precision
          </span>

          <div
            className="pre-line h-px w-[42vw] max-w-[520px] origin-center bg-ivory/70"
            style={{ transform: "scaleX(0)" }}
          />

          <span className="pre-count index-num text-[13px] tracking-widest2 text-sci">
            {count}
          </span>

          <span className="pre-rt font-serif text-5xl opacity-0">RT</span>
        </div>

        <div className="pre-name mt-2 overflow-hidden text-center">
          <span className="reveal-line">
            <span className="line block font-serif text-6xl leading-none md:text-8xl">
              Ravi Tomar
            </span>
          </span>
        </div>
        <span className="pre-role mt-5 font-sans text-[11px] uppercase tracking-widest2 text-muted opacity-0">
          Founder. Leader. Institution Builder.
        </span>
      </div>
    </div>
  );
}
