"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scoped GSAP context helper. Returns a ref to attach to the section root.
 * The callback receives the resolved root element; ScrollTrigger is registered.
 */
export function useGsap<T extends HTMLElement = HTMLElement>(
  build: (root: T) => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const root = ref.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReducedMotion()) {
      // Ensure content is visible without motion.
      gsap.set(root.querySelectorAll("[data-reveal]"), {
        clearProps: "all",
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => build(root), root);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/** Split a line of text into a reveal-ready structure via GSAP y-translate. */
export function revealLines(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars = {}
) {
  return gsap.from(targets, {
    yPercent: 110,
    opacity: 0,
    duration: 1.1,
    ease: "power4.out",
    stagger: 0.08,
    ...vars,
  });
}

export function fadeUp(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  return gsap.from(targets, {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    ...vars,
  });
}
