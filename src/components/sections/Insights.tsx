import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import Photo from "@/components/ui/Photo";
import SwipeHint from "@/components/ui/SwipeHint";
import { insights, type Insight } from "@/data/media";
import { featuredIn } from "@/data/profile";
import { stagger } from "@/lib/motion";

const cta = (item: Insight) => (item.format === "Video" ? "Watch" : "Read");

export default function Insights() {
  const items = insights.filter((i) => i.verified && i.href);
  if (items.length === 0) return null;
  const [lead, ...rest] = items;
  const ceoLogo = featuredIn.find((f) => f.name === "CEO Insights");

  return (
    <section id="insights" className="texture-lines section relative overflow-hidden bg-navy text-white">
      <div className="container-site">
        {/* Header */}
        <div data-reveal className="grid gap-8 border-b border-white/15 pb-10 sm:gap-10 sm:pb-14 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow-light">
              <span className="text-gold">06</span>Media &amp; Insights
            </p>
            <h2 className="mt-6 text-[3rem] leading-[0.98] text-white sm:text-[4.2rem] lg:text-[5.2rem]">
              In the press<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Interviews, features and news coverage on diagnostic quality, accreditation and the future of
              healthcare in India.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-4 lg:justify-end">
              <span className="font-serif text-[3.5rem] leading-none text-gold sm:text-[5.5rem]">
                {String(items.length).padStart(2, "0")}
              </span>
              <span className="text-sm uppercase tracking-[0.18em] text-white/60">
                Features &amp;
                <br />
                interviews
              </span>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-9 gap-y-4 lg:justify-end">
              {featuredIn.map((f) => (
                <li key={f.name}>
                  <Image
                    src={f.srcLight}
                    alt={f.name}
                    width={f.width}
                    height={f.height}
                    className="h-7 w-auto opacity-90 sm:h-8"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lead story */}
        <a
          href={lead.href}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          className="group mt-10 grid overflow-hidden bg-paper sm:mt-14 text-ink shadow-soft lg:grid-cols-12"
        >
          {/* Magazine-cover panel. The photo is shown near its native size so it stays sharp. */}
          <div className="texture-lines relative flex flex-col justify-between gap-8 bg-navy-soft p-6 sm:gap-10 sm:p-10 lg:col-span-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              {ceoLogo ? (
                <Image src={ceoLogo.srcLight} alt={lead.publication} width={ceoLogo.width} height={ceoLogo.height} className="h-8 w-auto" />
              ) : (
                <span className="font-serif text-2xl text-white">{lead.publication}</span>
              )}
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/60">{lead.date}</span>
            </div>

            <div className="zoom-on-hover relative mx-auto w-full max-w-[200px] sm:max-w-[260px]">
              <div aria-hidden className="absolute -bottom-3 -right-3 left-3 top-3 border border-gold/60" />
              {lead.image ? (
                <div className="relative overflow-hidden shadow-soft">
                  <Image
                    src={lead.image}
                    alt="Ravi Tomar, as featured in CEO Insights India"
                    width={227}
                    height={227}
                    sizes="260px"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ) : (
                <Photo src="" alt="" monogram="RT" className="relative aspect-square w-full" />
              )}
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="inline-block bg-gold px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy">
                  Cover feature
                </span>
                <p className="mt-3 text-sm text-white/65">Leaders in Diagnostics &amp; Pathology</p>
              </div>
              <span className="whitespace-nowrap font-serif text-2xl text-white">Ravi Tomar</span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-12 lg:col-span-6 lg:p-14">
            <p className="eyebrow">Leadership profile</p>
            <h3 className="mt-5 text-[1.7rem] leading-[1.15] sm:mt-6 sm:text-[2.6rem]">{lead.title}</h3>
            <p className="mt-5 leading-[1.8] text-slate">{lead.description}</p>
            <span className="btn-primary mt-8 min-h-[48px] w-full transition-colors group-hover:bg-ink sm:mt-9 sm:w-auto sm:self-start">
              Read the feature <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </div>
        </a>

        {/* Story grid */}
        <SwipeHint count={rest.length} label="more stories" tone="dark" />
        <ul className="rail mt-4 sm:mt-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <li key={item.href} data-reveal style={stagger(i % 3, 110)} className={i === 0 ? "lg:col-span-2" : ""}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lift group flex h-full flex-col border border-white/10 bg-navy-soft p-7 hover:border-gold/70 sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl leading-none text-gold/90">{String(i + 2).padStart(2, "0")}</span>
                  <span className="border border-gold/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                    {item.format}
                  </span>
                </div>
                <p className="mt-8 text-[0.72rem] uppercase tracking-[0.18em] text-white/55">
                  {[item.publication, item.date].filter(Boolean).join(" · ")}
                </p>
                <h3
                  className={`mt-3 leading-[1.2] text-white ${
                    i === 0 ? "text-[1.5rem] sm:text-[2.3rem]" : "text-[1.5rem] sm:text-[1.55rem]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-white/65">{item.description}</p>
                <span className="mt-auto flex items-center gap-3 pt-8 text-sm font-medium text-white">
                  <span className="flex h-10 w-10 items-center justify-center border border-white/20 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                    {item.format === "Video" ? (
                      <Play size={15} strokeWidth={1.5} />
                    ) : (
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    )}
                  </span>
                  {cta(item)} on {item.publication}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div
          data-reveal
          className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-[1.4rem] text-white sm:text-2xl">For media and interview requests</p>
          <a href="#contact" className="btn-gold min-h-[48px] w-full sm:w-auto">
            Get in touch <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
