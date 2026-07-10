"use client";

import { useEffect, useState } from "react";
import { scrollTo } from "@/lib/smooth-scroll";
import { crlLinks } from "@/data/crl";

const LINKS = [
  { label: "Story", target: "#story" },
  { label: "CRL", target: "#crl" },
  { label: "Philosophy", target: "#philosophy" },
  { label: "Recognition", target: "#recognition" },
  { label: "Media", target: "#media" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveal = () => setReady(true);
    document.addEventListener("preloader:done", reveal);
    // Fallback if preloader is skipped.
    const t = window.setTimeout(reveal, 3600);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("preloader:done", reveal);
      window.clearTimeout(t);
    };
  }, []);

  const go = (target: string) => {
    setOpen(false);
    scrollTo(target, -20);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9000] transition-all duration-700 ease-precision ${
          ready ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        } ${
          scrolled
            ? "bg-lab-black/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container-lab flex items-center justify-between py-5">
          {/* Left — monogram */}
          <button
            onClick={() => scrollTo(0)}
            data-cursor="view"
            className="font-serif text-2xl tracking-tight text-ivory transition-opacity hover:opacity-70"
            aria-label="Ravi Tomar — back to top"
          >
            RT<span className="text-accent">.</span>
          </button>

          {/* Center — links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => go(l.target)}
                  className="group relative font-sans text-[11px] uppercase tracking-wider2 text-muted transition-colors hover:text-ivory"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-sci transition-all duration-500 ease-precision group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right — contact + status */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => go("#contact")}
              data-cursor="view"
              className="hidden font-sans text-[11px] uppercase tracking-wider2 text-ivory transition-colors hover:text-accent md:inline-flex"
            >
              Contact <span className="ml-1">↗</span>
            </button>

            <div className="hidden select-none flex-col items-end leading-none md:flex">
              <span className="flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-widest2 text-muted">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-sci" />
                Delhi
              </span>
              <span className="mt-1 font-sans text-[9px] uppercase tracking-widest2 text-muted/60">
                India
              </span>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`h-px w-6 bg-ivory transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-ivory transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-ivory transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[8900] flex flex-col justify-center bg-lab-black px-8 transition-all duration-500 ease-precision lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-6">
          {LINKS.map((l, i) => (
            <li key={l.label}>
              <button
                onClick={() => go(l.target)}
                className="font-serif text-5xl text-ivory/90"
              >
                <span className="index-num mr-4 align-middle text-sm text-muted">
                  0{i + 1}
                </span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-col gap-4">
          <button
            onClick={() => go("#contact")}
            className="w-fit font-sans text-xs uppercase tracking-widest2 text-accent"
          >
            Contact ↗
          </button>
          <a
            href={crlLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-sans text-xs uppercase tracking-widest2 text-muted"
          >
            CRL Diagnostics ↗
          </a>
        </div>
      </div>
    </>
  );
}
