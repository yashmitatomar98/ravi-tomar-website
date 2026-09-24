import { Award as AwardIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SwipeHint from "@/components/ui/SwipeHint";
import { awards } from "@/data/awards";
import { stagger } from "@/lib/motion";

export default function Recognition() {
  const shown = awards.filter((a) => a.verified);
  return (
    <section id="recognition" className="section">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            index="05"
            eyebrow="Recognition"
            title="Awards & honours."
            intro="Recognition received by Ravi Tomar and by CRL Diagnostics under his leadership."
          />
          <p data-reveal className="hidden items-baseline gap-3 text-slate sm:flex">
            <span className="font-serif text-6xl leading-none text-ink">{String(shown.length).padStart(2, "0")}</span>
            <span className="text-sm">selected honours</span>
          </p>
        </div>

        <SwipeHint count={shown.length} label="honours" />
        <ul className="rail mt-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a, i) => (
            <li
              key={`${a.year}-${a.title}-${a.organisation}`}
              data-reveal
              style={stagger(i % 3, 110)}
              className="lift group relative flex flex-col border border-line bg-paper p-7 hover:border-gold/60 sm:p-8"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gold/80 transition-transform duration-500 group-hover:scale-x-100 sm:scale-x-[0.35]" />
              <div className="flex items-start justify-between">
                {a.year ? (
                  <span className="font-serif text-[2.4rem] leading-none text-bronze">{a.year}</span>
                ) : (
                  <span className="pt-2 text-[0.7rem] uppercase tracking-[0.2em] text-bronze">
                    {a.recipient === "Ravi Tomar" ? "Personal honour" : "Recognition"}
                  </span>
                )}
                <AwardIcon aria-hidden size={22} strokeWidth={1.2} className="text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-[1.45rem] leading-snug">{a.title}</h3>
              {a.organisation && <p className="mt-2 text-sm text-slate">{a.organisation}</p>}
              {a.detail && <p className="mt-3 text-sm leading-relaxed text-slate">{a.detail}</p>}
              <p className="mt-auto pt-8 text-[0.68rem] uppercase tracking-[0.18em] text-navy">
                Awarded to {a.recipient}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
