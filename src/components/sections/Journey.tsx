import SectionHeader from "@/components/ui/SectionHeader";
import { timeline } from "@/data/timeline";

export default function Journey() {
  const entries = timeline.filter((t) => t.verified);
  return (
    <section id="journey" className="section bg-paper">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              index="02"
              eyebrow="Professional Journey"
              title="Nearly three decades in healthcare."
              intro="Milestones from a career spent in pathology and diagnostics, and in building CRL Diagnostics."
            />
            <p aria-hidden className="mt-12 hidden font-serif text-[7rem] leading-none text-stone lg:block">29+</p>
          </div>
        </div>

        <ol className="relative lg:col-span-8">
          <span aria-hidden data-reveal="line" className="absolute bottom-2 left-[5px] top-2 w-px bg-gold/40 sm:left-[11.5rem]" />
          {entries.map((t, i) => (
            <li
              key={`${t.year}-${t.title}`}
              data-reveal
              className="relative grid gap-2 pb-12 pl-8 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-12 sm:pl-0"
            >
              <span
                aria-hidden
                className={`absolute left-0 top-2 h-[11px] w-[11px] rotate-45 border sm:left-[11.5rem] sm:-translate-x-[5px] ${
                  i === entries.length - 1 ? "border-gold bg-gold" : "border-gold bg-paper"
                }`}
              />
              <span className="font-serif text-2xl leading-none text-bronze sm:text-right">{t.year}</span>
              <div className="sm:pl-2">
                <h3 className="font-serif text-[1.45rem] leading-snug text-ink">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
