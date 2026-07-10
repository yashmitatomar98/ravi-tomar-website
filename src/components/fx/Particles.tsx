"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** Particle density factor. Lowered automatically on small screens. */
  density?: number;
  color?: string;
  linked?: boolean;
};

/**
 * Microscopic particle field — slow-drifting cells under a lens, not stars.
 * Canvas-based, DPR-aware, paused off-screen, disabled for reduced motion / low-power.
 */
export default function Particles({
  className = "",
  density = 1,
  color = "121, 199, 181",
  linked = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cores = navigator.hardwareConcurrency || 4;
    const lowPower = cores <= 4 || window.innerWidth < 768;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    const seed = () => {
      const base = Math.round(
        (width * height) / (lowPower ? 34000 : 20000) * density
      );
      const count = Math.max(10, Math.min(base, lowPower ? 26 : 90));
      particles = Array.from({ length: count }, (_, i) => ({
        // deterministic-ish spread, no Math.random dependency issues at init
        x: ((i * 97) % 100) / 100 * width,
        y: ((i * 61) % 100) / 100 * height,
        vx: (((i * 13) % 7) - 3) * 0.02,
        vy: (((i * 29) % 7) - 3) * 0.02,
        r: 0.6 + ((i * 7) % 10) / 10 * 1.4,
        a: 0.15 + ((i * 17) % 10) / 10 * 0.35,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    let raf = 0;
    let visible = true;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.a})`;
        ctx.fill();
      }

      if (linked && !lowPower) {
        const maxDist = 120;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(${color}, ${0.06 * (1 - dist / maxDist)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(draw);
        if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [density, color, linked]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  );
}
