import { ArrowUpRight, Vote } from "lucide-react";

import { candidate, socials } from "@/content/eduardo";

export function Participate() {
  return (
    <section id="participe" className="bg-navy py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="reveal">
            <p className="eyebrow text-brand-yellow">Participe</p>

            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.02]">
              Sua comunidade tem uma demanda. Vamos transformá-la em projeto.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Envie a pauta do seu bairro, da sua entidade ou do seu município.
              Fale diretamente com a equipe de Eduardo Vidal pelo WhatsApp.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-7 py-4 font-display text-sm font-bold tracking-widest text-navy transition-transform hover:-translate-y-0.5"
              >
                FALAR NO WHATSAPP
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#bandeiras"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 font-display text-sm font-bold tracking-widest transition-colors hover:border-brand-yellow hover:text-brand-yellow"
              >
                VER AS BANDEIRAS
              </a>
            </div>
          </div>

          <div
            className="reveal border border-white/15 bg-white/[0.04] p-10 text-center"
            style={{ transitionDelay: "120ms" }}
          >
            <Vote className="mx-auto size-8 text-brand-yellow" />

            <p className="eyebrow mt-6 text-white/60">
              Nas urnas em 2026
            </p>

            <p className="mt-4 font-display text-[5.5rem] font-black leading-none tracking-tight text-brand-yellow">
              {candidate.number}
            </p>

            <p className="mt-4 font-display text-lg font-bold uppercase tracking-widest">
              {candidate.name}
            </p>

            <p className="mt-1 text-sm text-white/60">
              {candidate.office} · {candidate.state}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}