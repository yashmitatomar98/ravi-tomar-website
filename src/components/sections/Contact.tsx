import { ArrowUpRight, Mail } from "lucide-react";
import { links } from "@/data/profile";

const TOPICS = ["Professional engagements", "Speaking opportunities", "Industry discussions", "Collaborations"];

export default function Contact() {
  const channels = [
    { label: "LinkedIn", detail: "Ravi Tomar", href: links.linkedin },
    { label: "CRL Diagnostics", detail: "crldiagnostics.com", href: links.crlWebsite },
    { label: "CRL on LinkedIn", detail: "Company page", href: links.crlLinkedin },
  ];

  return (
    <section id="contact" className="section bg-paper">
      <div className="container-site">
        <div data-reveal className="grid overflow-hidden border border-line lg:grid-cols-12">
          <div className="texture-lines bg-navy p-8 text-white sm:p-12 lg:col-span-7 lg:p-16">
            <p className="eyebrow-light">
              <span className="text-gold">08</span>Contact
            </p>
            <h2 className="h-section text-white">Connect with Ravi Tomar</h2>
            <p className="lede mt-6 max-w-lg text-white/70">
              For professional engagements, speaking opportunities, industry discussions and collaborations.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {TOPICS.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-white/80">
                  <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              {links.email ? (
                <a href={`mailto:${links.email}`} className="btn-gold">
                  <Mail size={16} strokeWidth={1.5} /> Email
                </a>
              ) : (
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Connect on LinkedIn <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center bg-canvas p-8 sm:p-12 lg:col-span-5">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate">Professional links</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-5">
                    <span>
                      <span className="block font-serif text-xl text-ink">{c.label}</span>
                      <span className="block text-sm text-slate">{c.detail}</span>
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-line text-slate transition-colors duration-200 group-hover:border-gold group-hover:text-bronze">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
