import { NAV_LINKS } from "@/data/navigation";
import { links, profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="texture-lines bg-navy text-white/70">
      <div className="container-site pb-10 pt-14 lg:pt-20" style={{ paddingBottom: "max(2.5rem, calc(env(safe-area-inset-bottom) + 1.5rem))" }}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span aria-hidden className="flex h-12 w-12 items-center justify-center border border-gold/60 font-serif text-lg tracking-[0.06em] text-gold">
              RT
            </span>
            <p className="mt-6 font-serif text-3xl text-white">{profile.name}</p>
            <p className="mt-2 text-sm">Founder | Chairman &amp; Managing Director</p>
            <p className="text-sm">{profile.company}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 text-sm">
              {NAV_LINKS.slice(1, -1).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="flex min-h-[40px] items-center transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">Connect</p>
            <ul className="mt-4 text-sm">
              <li>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex min-h-[40px] items-center transition-colors hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#contact" className="flex min-h-[40px] items-center transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href={links.crlWebsite} target="_blank" rel="noopener noreferrer" className="flex min-h-[40px] items-center transition-colors hover:text-white">
                  CRL Diagnostics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
