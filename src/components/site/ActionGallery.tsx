import articulacao from "@/assets/articulacao-pl-celiacos.webp";
import entrega from "@/assets/entrega-pl-celiacos.webp";
import reuniao from "@/assets/reuniao-congresso.webp";
import dialogo from "@/assets/dialogo-lideranca.webp";
import apoio from "@/assets/apoio-lideranca.webp";
import { actionPhotos } from "@/content/eduardo";

const images: Record<string, string> = {
  "articulacao-pl-celiacos": articulacao,
  "entrega-pl-celiacos": entrega,
  "reuniao-congresso": reuniao,
  "dialogo-lideranca": dialogo,
  "apoio-lideranca": apoio,
};

export function ActionGallery() {
  return (
    <section id="atuacao" className="bg-navy py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-brand-yellow">Atuação na prática</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.03]">
            Trabalho feito antes de qualquer mandato.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Reuniões, articulação e diálogo com parlamentares de diferentes partidos para transformar
            demandas reais das pessoas com doença celíaca e outras restrições alimentares em propostas
            concretas no Congresso Nacional.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {actionPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`reveal group relative overflow-hidden bg-white/5 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img
                src={images[photo.src]}
                alt={photo.caption}
                loading="lazy"
                className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? "h-[340px] lg:h-[420px]" : "h-[340px] lg:h-[420px]"
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-5 pt-16 text-sm leading-snug text-white/85">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
