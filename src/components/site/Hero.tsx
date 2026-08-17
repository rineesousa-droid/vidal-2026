import { ArrowRight } from "lucide-react";

import retrato from "@/assets/eduardo-vidal-retrato-2.webp";
import { candidate } from "@/content/eduardo";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy pt-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_0%,color-mix(in_oklab,var(--royal)_85%,transparent),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.07] [background-image:repeating-linear-gradient(115deg,#fff_0_2px,transparent_2px_14px)]"
      />

      <div className="relative mx-auto grid max-w-[1240px] items-end gap-8 px-5 pt-12 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pt-16">
        <div className="pb-14 lg:pb-24">
          <p className="eyebrow inline-flex items-center gap-3 text-brand-yellow">
            <span className="h-px w-8 bg-brand-yellow" />
            {candidate.office} · {candidate.state} · {candidate.election}
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7.2vw,5.4rem)] font-900 italic leading-[0.92] tracking-tight">
            <span className="block font-extrabold not-italic">TRABALHO</span>
            <span className="block font-extrabold not-italic text-brand-yellow">ANTES DO</span>
            <span className="block font-extrabold not-italic">MANDATO.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            {candidate.lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#bandeiras"
              className="group inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-7 py-4 font-display text-sm font-bold tracking-widest text-navy transition-transform hover:-translate-y-0.5"
            >
              CONHEÇA AS BANDEIRAS
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#quem-e"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 font-display text-sm font-bold tracking-widest text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              QUEM É EDUARDO
            </a>
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute bottom-0 right-4 hidden select-none font-display text-[13rem] font-black leading-none text-white/5 lg:block"
          >
            {candidate.number}
          </div>
          <img
            src={retrato}
            alt="Eduardo Vidal, candidato a Deputado Federal por São Paulo"
            width={845}
            height={1400}
            fetchPriority="high"
            className="relative z-10 max-h-[560px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] lg:max-h-[640px]"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy/60">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 md:px-8">
          <span className="eyebrow text-white/45">Vote {candidate.number}</span>
          <span className="h-4 w-px bg-white/15" />
          <span className="eyebrow text-white/45">Deputado Federal</span>
          <span className="h-4 w-px bg-white/15" />
          <span className="eyebrow text-white/45">São Paulo</span>
        </div>
      </div>
    </section>
  );
}