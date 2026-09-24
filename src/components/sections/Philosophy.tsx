import { philosophy, profile, values } from "@/data/profile";
import { stagger } from "@/lib/motion";

export default function Philosophy() {
  return (
    <section id="leadership" className="texture-lines section relative overflow-hidden bg-navy text-white">
      <div className="container-site">
        <div data-reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow-light">
              <span className="text-gold">04</span>Leadership Philosophy
            </p>
            <h2 className="h-section text-white">The principles behind the work.</h2>
          </div>
          <blockquote className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden className="absolute -left-8 -top-10 hidden font-serif text-[9rem] leading-none text-gold/25 sm:block">
              &ldquo;
            </span>
            <p className="relative border-l-2 border-gold pl-5 font-serif text-[1.85rem] leading-[1.22] text-white sm:border-0 sm:pl-0 sm:text-[2.9rem]">
              {profile.principle}
            </p>
            <footer className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <span aria-hidden className="h-px w-8 bg-gold" />
              {profile.name}&rsquo;s guiding principle
            </footer>
            <p className="mt-6 max-w-xl leading-[1.8] text-white/70">{profile.principleNote}</p>
          </blockquote>
        </div>

        <div className="mt-14 grid border-t border-white/15 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              style={stagger(i, 120)}
              className={`border-white/15 py-8 sm:px-8 sm:py-10 sm:first:pl-0 ${i > 0 ? "border-t sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l" : ""
              } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""} ${i === 2 ? "sm:pl-0 lg:pl-8" : ""}`}
            >
              <span className="font-serif text-4xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[1.8rem] text-white">{p.title}</h3>
              <p className="mt-4 leading-[1.8] text-white/70">{p.body}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-4 grid gap-5 border-t border-white/15 pt-10 sm:gap-10 sm:pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">A people-first leader</p>
          </div>
          <p className="font-serif text-[1.3rem] leading-[1.55] text-white/90 sm:text-[1.75rem] lg:col-span-8">
            {profile.peopleFirst}
          </p>
        </div>

        <ul data-reveal className="mt-12 grid grid-cols-2 sm:mt-16 border border-white/15 lg:grid-cols-4">
          {values.map((v, i) => (
            <li
              key={v}
              className={`flex items-center gap-3 border-white/15 px-4 py-4 text-[0.68rem] sm:px-7 sm:py-5 sm:text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
