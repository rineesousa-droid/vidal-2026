import { stats } from "@/content/eduardo";

export function Stats() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal bg-surface p-8 md:p-10"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <p className="font-display text-4xl font-extrabold text-royal md:text-5xl">{s.value}</p>
            <p className="mt-3 font-display text-sm font-bold uppercase tracking-widest text-navy">
              {s.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}