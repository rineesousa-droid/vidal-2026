import { pillars } from "@/content/eduardo";

export function Pillars() {
  return (
    <section id="bandeiras" className="bg-navy py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-brand-yellow">Bandeiras</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02]">
            Seis compromissos com prazo, método e prestação de contas.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Cada bandeira nasceu de uma demanda concreta ouvida em município paulista — e tem um
            caminho institucional definido para sair do papel.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative bg-navy p-8 transition-colors hover:bg-royal md:p-10"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="font-display text-sm font-bold text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow mt-6 text-brand-yellow">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-white/70">{p.summary}</p>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-yellow transition-transform duration-300 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}