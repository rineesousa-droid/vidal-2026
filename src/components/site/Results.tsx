import { CheckCircle2 } from "lucide-react";

import { results } from "@/content/eduardo";

export function Results() {
  return (
    <section id="resultados" className="bg-surface-strong py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow text-royal">Resultados sem mandato</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] text-navy">
              Articulação também entrega.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">
              Sem cargo, sem gabinete e sem verba própria, o que resta é método e insistência. Foi
              assim que demandas de municípios paulistas viraram projeto, recurso e obra entregue.
            </p>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {results.map((r, i) => (
              <div
                key={r.title}
                className="reveal bg-surface p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <CheckCircle2 className="size-6 text-brand-green" />
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}