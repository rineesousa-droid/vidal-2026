import { ArrowUpRight, Vote } from "lucide-react";

import eduardoCard from "@/assets/eduardo-card-2023.webp";
import { candidate, socials } from "@/content/eduardo";

export function Participate() {
  return (
    <section
      id="participe"
      className="overflow-hidden bg-navy py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          
          {/* TEXTO */}
          <div className="reveal">
            <p className="eyebrow text-brand-yellow">
              Participe
            </p>

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

          {/* CARD ELEITORAL COM FOTO INTEGRADA */}
          <div
            className="reveal relative mx-auto w-full max-w-[620px]"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="relative overflow-hidden rounded-sm border border-white/15 bg-royal/40 pt-16 sm:pt-0">
              {/* FOTO INTEGRADA */}
              <img
                src={eduardoCard}
                alt="Eduardo Vidal"
                loading="lazy"
                className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-auto -translate-x-1/2 object-contain object-bottom opacity-25 sm:left-0 sm:h-[105%] sm:translate-x-0 sm:opacity-90"
              />

              {/* OVERLAY PARA CONTRASTE */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/50 to-navy/85 sm:from-navy/30 sm:via-navy/70 sm:to-navy/90" />

              {/* CONTEÚDO ELEITORAL */}
              <div className="relative z-10 px-6 py-12 text-center sm:ml-auto sm:w-[58%] sm:px-8 sm:py-16 sm:text-left">
                <Vote className="mx-auto size-8 text-brand-yellow sm:mx-0" />

                <p className="eyebrow mt-6 text-white/70">Nas urnas em 2026</p>

                <p className="mt-3 font-display text-[5rem] font-black leading-none tracking-tight text-brand-yellow drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] md:text-[6rem]">
                  {candidate.number}
                </p>

                <p className="mt-4 font-display text-lg font-bold uppercase tracking-widest">
                  {candidate.name}
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {candidate.office} · {candidate.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}