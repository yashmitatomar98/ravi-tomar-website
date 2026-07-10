"use client";

import { gsap } from "gsap";
import { useGsap } from "@/lib/animations";
import { crlLinks } from "@/data/crl";

const FOR = [
  "Industry Conversations",
  "Speaking Engagements",
  "Healthcare Collaborations",
  "Media",
];

export default function Contact() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from("[data-contact-head] .line", {
      yPercent: 115,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: { trigger: "[data-contact-head]", start: "top 78%" },
    });
    gsap.from("[data-contact-reveal]", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-contact-body]", start: "top 82%" },
    });
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden bg-lab-black pt-[16vh] pb-[10vh]"
    >
      <div className="container-lab">
        <h2
          data-contact-head
          className="font-serif text-[clamp(3rem,12vw,11rem)] leading-[0.86] tracking-[-0.03em] text-ivory"
        >
          <span className="reveal-line"><span className="line block">Let's move</span></span>
          <span className="reveal-line"><span className="line block">healthcare</span></span>
          <span className="reveal-line"><span className="line block text-sci">forward.</span></span>
        </h2>

        <div
          data-contact-body
          className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]"
        >
          <div data-contact-reveal>
            <p className="eyebrow mb-6">For</p>
            <ul className="space-y-3">
              {FOR.map((f) => (
                <li
                  key={f}
                  className="font-serif text-[clamp(1.4rem,2.6vw,2.2rem)] text-ivory/80"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div data-contact-reveal className="flex flex-col justify-end gap-5">
            <a
              href={crlLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="group flex items-center justify-between border-t border-white/15 py-6 font-sans text-sm uppercase tracking-widest2 text-ivory transition-colors hover:text-accent"
            >
              Connect on LinkedIn
              <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <a
              href={crlLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="group flex items-center justify-between border-t border-white/15 py-6 font-sans text-sm uppercase tracking-widest2 text-ivory transition-colors hover:text-sci"
            >
              Visit CRL Diagnostics
              <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <p className="mt-4 font-sans text-[10px] uppercase leading-relaxed tracking-widest2 text-muted/50">
              Private contact details are intentionally withheld pending approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
