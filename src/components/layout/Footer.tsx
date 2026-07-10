import { crlLinks } from "@/data/crl";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-lab-black pt-24 pb-10">
      <div className="container-lab">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-serif text-6xl leading-none text-ivory md:text-7xl">
              RT<span className="text-accent">.</span>
            </p>
            <p className="mt-6 font-serif text-3xl text-ivory">Ravi Tomar</p>
            <p className="mt-3 max-w-xs font-sans text-[11px] uppercase leading-relaxed tracking-widest2 text-muted">
              Founder · Chairman · Managing Director
            </p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-widest2 text-muted/60">
              Delhi / India
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 sm:grid-cols-3">
            {[
              { label: "LinkedIn", href: crlLinks.linkedin },
              { label: "Instagram", href: crlLinks.instagram },
              { label: "CRL Diagnostics", href: crlLinks.website },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="group inline-flex items-center gap-1 font-sans text-sm text-muted transition-colors hover:text-ivory"
              >
                {l.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="my-16 hairline" />

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="font-serif text-4xl leading-[1.05] text-ivory md:text-6xl">
            Precision.
            <br />
            Purpose.
            <br />
            <span className="text-champagne">Progress.</span>
          </p>

          <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted/50">
            © {year} Ravi Tomar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
