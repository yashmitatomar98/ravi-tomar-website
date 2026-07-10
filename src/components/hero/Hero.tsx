"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MediaFrame from "@/components/ui/MediaFrame";
import Particles from "@/components/fx/Particles";
import { scrollTo } from "@/lib/smooth-scroll";
import { assets } from "@/data/assets";

const MARQUEE = ["Precision", "Quality", "Ethics", "Accessibility", "Leadership"];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = gsap.utils.selector(root);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const play = () => {
      if (reduced) {
        gsap.set(q("[data-hero]"), { opacity: 1, y: 0, clearProps: "all" });
        return;
      }
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(q(".hero-eyebrow"), { opacity: 0, y: 20, duration: 0.9, ease: "power3.out" })
        .from(
          q(".hero-title .line"),
          { yPercent: 115, opacity: 0, duration: 1.1, stagger: 0.1, ease: "power4.out" },
          "-=0.5"
        )
        .from(
          q(".hero-sub .line"),
          { yPercent: 115, opacity: 0, duration: 1, stagger: 0.08, ease: "power4.out" },
          "-=0.7"
        )
        .from(q(".hero-copy"), { opacity: 0, y: 20, duration: 0.9 }, "-=0.6")
        .from(q(".hero-cta"), { opacity: 0, y: 16, duration: 0.8 }, "-=0.5")
        .from(
          q(".hero-portrait"),
          { opacity: 0, scale: 1.06, duration: 1.6, ease: "power3.out" },
          0.3
        )
        .from(q(".hero-marquee"), { opacity: 0, duration: 1 }, "-=0.8");
    };

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      play();
    };
    document.addEventListener("preloader:done", start);
    const t = window.setTimeout(start, 3600);

    // Parallax on portrait
    let raf = 0;
    const onScroll = () => {
      if (reduced) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        gsap.set(q(".hero-portrait-inner"), { yPercent: Math.min(y * 0.02, 12) });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("preloader:done", start);
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* microscopic cell field behind typography */}
      <Particles className="opacity-70" color="121, 199, 181" density={0.9} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(13,27,24,0.6),transparent_60%)]" />

      <div className="container-lab relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_44%]">
        {/* LEFT */}
        <div>
          <p className="hero-eyebrow eyebrow mb-8">
            Founder <span className="text-champagne">•</span> Chairman{" "}
            <span className="text-champagne">•</span> Managing Director
          </p>

          <h1 className="hero-title font-serif text-[clamp(4.5rem,15vw,13rem)] leading-[0.82] tracking-[-0.02em] text-ivory">
            <span className="reveal-line">
              <span className="line block">Ravi</span>
            </span>
            <span className="reveal-line">
              <span className="line block">Tomar</span>
            </span>
          </h1>

          <div className="hero-sub mt-8 font-serif text-[clamp(1.5rem,3.2vw,2.6rem)] leading-tight text-ivory/90">
            <span className="reveal-line">
              <span className="line block">Building trust</span>
            </span>
            <span className="reveal-line">
              <span className="line block">
                in every <span className="italic text-sci">diagnosis.</span>
              </span>
            </span>
          </div>

          <p className="hero-copy mt-8 max-w-md font-sans text-sm leading-relaxed text-muted">
            Nearly three decades in healthcare and diagnostics. Founder of CRL
            Diagnostics. Driven by quality, ethics and accessible diagnostic
            healthcare.
          </p>

          <button
            onClick={() => scrollTo("#story", -20)}
            data-cursor="view"
            className="hero-cta group mt-12 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest2 text-ivory"
          >
            Discover the journey
            <span className="inline-block translate-y-0 transition-transform duration-500 ease-precision group-hover:translate-y-1">
              ↓
            </span>
          </button>
        </div>

        {/* RIGHT — editorial portrait */}
        <div className="hero-portrait relative h-[52vh] min-h-[380px] w-full self-stretch lg:h-[78vh]">
          <div className="hero-portrait-inner relative h-full w-full">
            <MediaFrame
              src={assets.heroPortrait.image}
              alt={assets.heroPortrait.alt}
              label={assets.heroPortrait.label}
              meta={assets.heroPortrait.meta}
              sourceUrl={assets.heroPortrait.sourceUrl}
              className="h-full w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              cursor="view"
            />
            {/* frame ticks */}
            <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-ivory/30" />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-ivory/30" />
          </div>
        </div>
      </div>

      {/* bottom scrolling statement */}
      <div className="hero-marquee absolute inset-x-0 bottom-0 z-10 border-t border-white/5 py-4">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-0 whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
              <span
                key={i}
                className="mx-6 font-serif text-lg text-ivory/25"
              >
                {w}
                <span className="ml-12 text-champagne/40">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
