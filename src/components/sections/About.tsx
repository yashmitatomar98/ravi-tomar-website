import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import Photo from "@/components/ui/Photo";
import { stagger } from "@/lib/motion";
import { assets } from "@/data/assets";
import { credentials, profile, stats } from "@/data/profile";

const CREDENTIAL_ICONS = [GraduationCap, Award, BadgeCheck];

export default function About() {
  const shown = stats.filter((s) => s.verified);
  const [lead, ...rest] = profile.bio;

  return (
    <section id="about">
      <div className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow">
              <span className="text-bronze">01</span>About
            </p>
            <h2 className="h-section">A career built in diagnostics.</h2>
            <div className="mt-8 border-l-2 border-gold pl-5 sm:mt-10 sm:pl-6">
              <p className="font-serif text-[1.4rem] leading-[1.45] text-ink sm:text-[1.8rem]">{lead}</p>
            </div>
            <div className="relative ml-3 mt-10 max-w-[392px] sm:mt-12">
              <div aria-hidden className="absolute -left-3 -top-3 h-full w-full border border-gold/50" />
              <Photo
                src={assets.aboutPortrait.image}
                alt={assets.aboutPortrait.alt}
                sizes="392px"
                className="relative aspect-[392/254] w-full shadow-soft"
              />
            </div>
          </div>

          <div data-reveal className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <div className="space-y-6 text-[1.05rem] leading-[1.85] text-slate">
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 border border-line bg-paper">
              <p className="border-b border-line px-5 py-4 text-[0.7rem] sm:px-6 uppercase tracking-[0.18em] text-slate">
                Academic excellence
              </p>
              <ul className="divide-y divide-line">
                {credentials.map((c, i) => {
                  const Icon = CREDENTIAL_ICONS[i % CREDENTIAL_ICONS.length];
                  return (
                    <li key={c.title} data-reveal style={stagger(i, 100, 150)} className="flex items-center gap-4 px-5 py-4 sm:gap-5 sm:px-6 sm:py-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-gold">
                        <Icon aria-hidden size={20} strokeWidth={1.3} />
                      </span>
                      <span>
                        <span className="block font-serif text-lg text-ink sm:text-xl">{c.title}</span>
                        <span className="block text-sm text-slate">{c.detail}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {shown.length > 0 && (
        <div className="texture-lines bg-navy">
          <dl className="container-site grid py-4 sm:grid-cols-2 sm:py-0 lg:grid-cols-4">
            {shown.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                style={stagger(i, 120)}
                className={`flex items-center gap-5 border-white/10 py-5 sm:flex-col sm:items-start sm:gap-0 sm:py-12 lg:py-14 ${
                  i > 0 ? "border-t sm:border-t-0" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:pl-8" : "sm:pr-6"} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${
                  i > 0 ? "lg:border-l lg:pl-8" : ""
                }`}
              >
                <dt className="order-2 text-sm leading-snug text-white/60 sm:mt-3">{s.label}</dt>
                <dd className="order-1 w-[9.5rem] shrink-0 sm:w-auto">
                  <span aria-hidden className="mb-5 hidden h-px w-8 bg-gold sm:block" />
                  <span className="block whitespace-nowrap font-serif text-[1.6rem] leading-none text-white sm:text-[2.1rem] lg:text-[2.6rem]">
                    <CountUp value={s.value} />
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
