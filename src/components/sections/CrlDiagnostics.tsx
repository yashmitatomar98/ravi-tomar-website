import { ArrowUpRight, Building2, HeartPulse, Microscope, ShieldCheck } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { assets } from "@/data/assets";
import { crl, crlPillars, institutions } from "@/data/crl";
import { links } from "@/data/profile";
import { stagger } from "@/lib/motion";

const ICONS = [ShieldCheck, Microscope, HeartPulse, Building2];

export default function CrlDiagnostics() {
  return (
    <section id="crl" className="section">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <Photo
              src={assets.crlLab.image}
              alt={assets.crlLab.alt}
              monogram="CRL"
              caption="Diagnostics"
              className="aspect-[4/3] w-full lg:w-[88%]"
            />
            <div className="relative -mt-16 ml-6 mr-0 bg-paper p-7 shadow-soft sm:ml-auto sm:w-[70%] lg:absolute lg:-bottom-16 lg:right-0 lg:mt-0 lg:w-[40%] lg:p-9">
              <span aria-hidden className="block h-px w-8 bg-gold" />
              <p className="mt-5 font-serif text-[1.45rem] leading-snug text-ink">
                From a single pathology laboratory to a diagnostic network.
              </p>
              <p className="mt-5 border-t border-line pt-4 text-[0.7rem] uppercase tracking-[0.18em] text-slate">
                NABL &amp; ICMR approved laboratories
              </p>
            </div>
          </div>

          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow">
              <span className="text-bronze">03</span>CRL Diagnostics
            </p>
            <h2 className="h-section">An organisation built on quality.</h2>
            <p className="lede mt-6">{crl.intro}</p>
            {crl.body.map((p, i) => (
              <p key={i} className="mt-5 leading-[1.8] text-slate">
                {p}
              </p>
            ))}
            <div className="mt-8 border-t border-line pt-6">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate">Trusted by leading institutions</p>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 text-[0.95rem] text-ink sm:grid-cols-2">
                {institutions.map((name) => (
                  <li key={name} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <a href={links.crlWebsite} target="_blank" rel="noopener noreferrer" className="btn-primary mt-9 min-h-[48px] w-full sm:w-auto">
              Visit CRL Diagnostics <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-px sm:mt-24 border border-line bg-line sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {crlPillars.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={p.title}
                data-reveal
                style={stagger(i, 110)}
                className="group flex gap-5 bg-paper p-6 transition-colors duration-300 hover:bg-canvas sm:block sm:p-8"
              >
                <Icon
                  aria-hidden
                  size={26}
                  strokeWidth={1.2}
                  className="mt-0.5 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                />
                <div>
                  <h3 className="font-serif text-[1.3rem] sm:mt-6 sm:text-[1.4rem]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate sm:mt-3">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
