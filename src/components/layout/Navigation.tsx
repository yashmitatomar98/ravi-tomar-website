"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { links } from "@/data/profile";
import { stagger } from "@/lib/motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const progressRef = useRef<HTMLSpanElement>(null);

  // Border on scroll, reading-progress line, back-to-top visibility.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      setShowTop(y > window.innerHeight * 1.5);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector<HTMLElement>(l.href)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Menu: lock page scroll, close on Escape or when resized up to desktop.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
          open ? "border-line bg-canvas" : scrolled ? "border-line bg-canvas/95 backdrop-blur-sm" : "border-transparent bg-canvas/95"
        }`}
      >
        <nav className="container-site flex h-16 items-center justify-between lg:h-[4.5rem]" aria-label="Primary">
          <a href="#home" className="flex min-h-[44px] items-center gap-3" onClick={close}>
            <span
              aria-hidden
              className="flex h-9 w-9 items-center justify-center border border-gold/70 font-serif text-sm tracking-[0.06em] text-navy"
            >
              RT
            </span>
            <span className="font-serif text-[1.3rem] font-medium tracking-[0.01em] text-ink sm:text-[1.35rem]">
              Ravi Tomar
            </span>
            <span className="hidden border-l border-line pl-3 text-[0.68rem] uppercase tracking-[0.18em] text-slate sm:inline">
              CRL Diagnostics
            </span>
          </a>

          <ul className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.slice(1, -1).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`relative py-1 text-[0.82rem] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 after:ease-out hover:text-ink hover:after:scale-x-100 ${
                    active === l.href ? "text-ink after:scale-x-100" : "text-slate after:scale-x-0"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-primary px-5 py-2.5 text-[0.78rem]">
                Contact
              </a>
            </li>
          </ul>

          {/* Two-line menu icon that morphs into a cross */}
          <button
            type="button"
            className="-mr-2.5 flex h-11 w-11 items-center justify-center text-ink xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-out ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  open ? "top-[5px] w-6 -rotate-45" : "top-[10px] w-4"
                }`}
              />
            </span>
          </button>
        </nav>
        <span
          ref={progressRef}
          aria-hidden
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left scale-x-0 bg-gold/80"
        />
      </header>

      {/* Mobile menu — outside the header so `fixed` is relative to the viewport. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-canvas transition-[opacity,visibility] duration-300 lg:top-[4.5rem] xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex-1 pt-4">
          <ul>
            {NAV_LINKS.map((l, i) => {
              const current = active === l.href;
              return (
                <li
                  key={l.href}
                  style={stagger(i, 40, 60)}
                  className={`border-b border-line transition-[opacity,transform] duration-500 ease-out [transition-delay:var(--d)] ${
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  <a
                    href={l.href}
                    onClick={close}
                    aria-current={current ? "true" : undefined}
                    className="flex min-h-[56px] items-center gap-5 py-3"
                  >
                    <span className={`w-6 text-xs tabular-nums ${current ? "text-bronze" : "text-slate/70"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-serif text-[1.6rem] leading-none ${current ? "text-navy" : "text-ink"}`}>
                      {l.label}
                    </span>
                    {current && <span aria-hidden className="ml-auto h-px w-8 bg-gold" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="container-site mt-8 border-t border-line bg-paper py-6"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          <a href="#contact" onClick={close} className="btn-primary min-h-[48px] w-full">
            Connect with Ravi Tomar
          </a>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[48px] text-[0.8rem]"
            >
              LinkedIn <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
            <a
              href={links.crlWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[48px] text-[0.8rem]"
            >
              CRL <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#home"
        aria-label="Back to top"
        tabIndex={showTop && !open ? 0 : -1}
        className={`fixed right-4 z-40 flex h-11 w-11 items-center justify-center border border-gold/50 bg-navy text-gold shadow-soft transition-all duration-300 hover:bg-ink sm:right-6 ${
          showTop && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.75rem))" }}
      >
        <ArrowUp size={18} strokeWidth={1.5} />
      </a>
    </>
  );
}
