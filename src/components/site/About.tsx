import { candidate, principles } from "@/content/eduardo";

export function About() {
  return (
    <section id="quem-e" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow text-royal">Quem é</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] text-navy">
              Um articulador que aprendeu a política pelo lado do problema.
            </h2>
            <div className="mt-8 border-l-2 border-brand-yellow pl-6">
              <p className="font-display text-lg font-semibold italic leading-snug text-navy">
                “Mandato não é ponto de partida. É consequência de quem já estava trabalhando.”
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {candidate.name}
              </p>
            </div>
          </div>

          <div className="reveal space-y-6 text-lg leading-relaxed text-foreground/80" style={{ transitionDelay: "120ms" }}>
            <p>
              Eduardo Vidal construiu sua atuação pública no lugar onde a política costuma ser mais
              difícil e menos visível: na conversa direta com quem precisa de resposta. Antes de
              qualquer candidatura, passou anos acompanhando associações de bairro, conselhos
              municipais, secretarias e prefeituras do interior e da Região Metropolitana de São Paulo.
            </p>
            <p>
              Foi ali que desenvolveu o método que define seu trabalho: escutar a demanda no
              território, transformá-la em projeto técnico viável e percorrer o caminho institucional
              — município, Estado, União — até o recurso virar obra, equipamento ou serviço entregue.
              Um trabalho paciente, técnico e sem holofote, que exige conhecer o orçamento público
              tão bem quanto a realidade da comunidade.
            </p>
            <p>
              Em 2026, ele leva essa experiência para a Câmara dos Deputados. A candidatura a
              Deputado Federal por São Paulo, com o número <strong className="text-navy">2023</strong>,
              nasce de uma convicção simples: o Brasil precisa de representantes que já sabem fazer o
              serviço antes de pedir o voto.
            </p>

            <ul className="grid gap-3 pt-4 sm:grid-cols-3">
              {principles.map((p) => (
                <li
                  key={p}
                  className="border-t-2 border-royal pt-4 font-display text-base font-semibold leading-snug text-navy"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}