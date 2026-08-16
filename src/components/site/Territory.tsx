import { MapPin, Check } from "lucide-react";

import { territory } from "@/content/eduardo";

export function Territory() {
  return (
    <section id="territorio" className="bg-surface-strong py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-royal">{territory.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.03] text-navy">
            {territory.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">{territory.lead}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {territory.places.map((place, i) => (
            <article
              key={place.name}
              className="reveal border-t-4 border-royal bg-background p-8 shadow-sm md:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-royal">
                <MapPin className="size-4" />
                {place.role}
              </p>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-navy">{place.name}</h3>
              <p className="mt-4 leading-relaxed text-foreground/75">{place.text}</p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {place.facts.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow reveal text-royal">O que ele já fez</p>
          <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {territory.done.map((d, i) => (
              <div
                key={d.title}
                className="reveal bg-background p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-4xl font-black text-navy/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-display text-lg font-bold leading-snug text-navy">
                  {d.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
