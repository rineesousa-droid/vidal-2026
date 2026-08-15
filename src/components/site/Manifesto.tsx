export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-royal py-24 text-white md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(115deg,#fff_0_2px,transparent_2px_16px)]"
      />
      <div className="relative mx-auto max-w-[1000px] px-5 text-center md:px-8">
        <p className="eyebrow text-brand-yellow">Manifesto</p>
        <blockquote className="mt-6 font-display text-[clamp(1.8rem,4.2vw,3rem)] font-extrabold leading-[1.08]">
          “A política que funciona é chata, técnica e demorada. Ela não cabe num vídeo de trinta
          segundos — mas cabe na vida de quem espera por uma consulta, uma creche ou uma rua sem
          alagamento.”
        </blockquote>
        <p className="mt-8 eyebrow text-white/60">Eduardo Vidal · Deputado Federal · 2023</p>
      </div>
    </section>
  );
}