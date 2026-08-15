import { timeline } from "@/content/eduardo";

export function Timeline() {
  return (
    <section id="trajetoria" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-royal">Trajetória</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] text-navy">
            Uma década de trabalho, ano a ano.
          </h2>
        </div>

        <ol className="mt-14 border-l border-border pl-6 md:pl-10">
          {timeline.map((item, i) => (
            <li
              key={item.year}
              className="reveal relative pb-12 last:pb-0"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                aria-hidden
                className="absolute -left-[31px] top-2 size-3 rounded-full bg-royal ring-4 ring-background md:-left-[47px]"
              />
              <div className="grid gap-2 md:grid-cols-[120px_1fr] md:gap-8">
                <p className="font-display text-2xl font-extrabold text-brand-green md:text-3xl">
                  {item.year}
                </p>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}