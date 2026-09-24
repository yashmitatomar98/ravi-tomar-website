import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import CountUp from "@/components/ui/CountUp";
import { assets } from "@/data/assets";
import { stagger } from "@/lib/motion";
import { featuredIn, profile, stats } from "@/data/profile";

export default function Hero() {
  const heroStats = stats.filter((s) => s.verified).slice(0, 2);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Tonal panel behind the portrait */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[36%] bg-stone lg:block" />
      {/* Three blocks so phones read name → portrait → story, while desktop keeps two columns. */}
      <div className="container-site relative grid gap-y-8 pb-12 pt-8 sm:gap-y-12 sm:py-20 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0 lg:py-28">
        <div className="lg:col-span-7 lg:row-start-1 lg:self-end">
          <p data-hero style={stagger(0)} className="eyebrow">Founder · {profile.company}</p>
          <h1
            data-hero
            style={stagger(1, 120)}
            className="mt-5 text-[2.9rem] leading-[1] sm:mt-6 sm:text-[4rem] lg:text-[5.25rem]"
          >
            {profile.name}
          </h1>
          <p
            data-hero
            style={stagger(2, 120)}
            className="mt-5 flex flex-col gap-y-1.5 text-[0.74rem] font-medium uppercase tracking-[0.14em] text-navy sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:text-[0.78rem]"
          >
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="hidden h-3 w-px bg-gold sm:block" />}
                {r}
              </span>
            ))}
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            {/* Offset gold frame */}
            <div
              aria-hidden
              data-hero="frame"
              style={stagger(0, 0, 900)}
              className="absolute -bottom-3 left-3 right-0 top-3 border border-gold/60 sm:-bottom-5 sm:-right-5 sm:left-4 sm:top-4"
            />
            <div data-hero="portrait" style={stagger(0, 0, 250)} className="relative mr-3 sm:mr-0">
              <Photo
                src={assets.heroPortrait.image}
                alt={assets.heroPortrait.alt}
                priority
                monogram="RT"
                position="60% 30%"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 420px, 40vw"
                className="relative aspect-[4/5] w-full shadow-soft"
              />
            </div>
            {/* Credential card */}
            <div
              data-hero
              style={stagger(0, 0, 1150)}
              className="absolute -left-4 bottom-8 hidden bg-paper px-6 py-5 shadow-soft sm:block lg:-left-12"
            >
              <span aria-hidden className="block h-px w-6 bg-gold" />
              <p className="mt-3 font-serif text-xl leading-tight text-ink">{profile.company}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate">Chairman &amp; Managing Director</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:row-start-2 lg:self-start">
          <p
            data-hero
            style={stagger(3, 120)}
            className="font-serif text-[1.35rem] italic leading-snug text-navy sm:text-[1.65rem] lg:mt-7"
          >
            {profile.tagline}
          </p>
          <p data-hero style={stagger(4, 120)} className="lede mt-4 max-w-xl sm:mt-5">
            {profile.positioning}
          </p>
          <div data-hero style={stagger(5, 120)} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a href="#journey" className="btn-primary min-h-[48px]">
              Explore My Journey <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a href="#contact" className="btn-secondary min-h-[48px]">
              Connect With Me
            </a>
          </div>

          {/* On phones the navy figures band follows right after, so skip the duplicate here. */}
          <dl data-hero style={stagger(6, 120)} className="mt-14 hidden max-w-md grid-cols-2 border-t border-line pt-8 sm:grid">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`flex flex-col ${i > 0 ? "border-l border-line pl-6" : ""}`}>
                <dt className="order-2 mt-2 text-sm text-slate">{s.label}</dt>
                <dd className="order-1 font-serif text-[2.1rem] leading-none text-ink">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Featured in */}
      <div data-hero style={stagger(0, 0, 1000)} className="relative border-y border-line bg-paper">
        <div className="container-site flex flex-col gap-4 py-6 sm:py-7 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-[0.68rem] uppercase tracking-[0.2em] text-slate">Featured &amp; recognised by</p>
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 sm:justify-start sm:gap-x-10 md:gap-x-14">
            {featuredIn.map((f) => (
              <li key={f.name}>
                <Image
                  src={f.src}
                  alt={f.name}
                  width={f.width}
                  height={f.height}
                  className="h-6 w-auto opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8"
                />
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate md:ml-auto md:max-w-[16rem] md:text-right">
            Also featured in ET HealthWorld and Medgate Today
          </p>
        </div>
      </div>
    </section>
  );
}
