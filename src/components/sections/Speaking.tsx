import { ArrowUpRight, Mic } from "lucide-react";
import Photo from "@/components/ui/Photo";
import SectionHeader from "@/components/ui/SectionHeader";
import { engagements } from "@/data/media";
import { stagger } from "@/lib/motion";

export default function Speaking() {
  const items = engagements.filter((e) => e.verified);
  if (items.length === 0) return null;
  return (
    <section id="speaking" className="section">
      <div className="container-site">
        <SectionHeader index="07" eyebrow="Speaking & Industry Presence" title="Conferences and industry forums."
          intro="A sought-after speaker and panelist at leading healthcare and business forums."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((e, i) => (
            <article key={e.event} data-reveal style={stagger(i, 120)} className="lift flex flex-col border border-line bg-paper hover:border-gold/60">
              {e.image ? (
                <Photo src={e.image} alt={e.imageAlt} className="aspect-[16/9] w-full" />
              ) : (
                <div className="flex items-center justify-between bg-stone px-8 py-6">
                  <span className="font-serif text-[3rem] leading-none text-navy/80">{e.year}</span>
                  <Mic aria-hidden size={24} strokeWidth={1.2} className="text-bronze" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate">
                  {e.role}
                  {e.location && <> · {e.location}</>}
                </p>
                <h3 className="mt-3 text-[1.7rem]">{e.event}</h3>
                {e.href && (
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="link-quiet mt-auto self-start pt-6 text-[0.8rem]">
                    View event <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
