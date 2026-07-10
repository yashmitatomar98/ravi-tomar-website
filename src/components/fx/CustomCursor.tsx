"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "view" | "media" | "read";

const LABELS: Record<Variant, string> = {
  default: "",
  view: "View",
  media: "Watch",
  read: "Read",
};

/**
 * Precision cursor: an ivory dot with an easing ring that expands and labels
 * itself (VIEW / WATCH / READ) over interactive media. Pointer-fine devices only.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<Variant>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-enabled");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      const el = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      const next = (el?.dataset.cursor as Variant) || "default";
      setVariant((prev) => (prev === next ? prev : next));
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" data-variant={variant} aria-hidden>
        <span className="cursor-label">{LABELS[variant]}</span>
      </div>
    </>
  );
}
