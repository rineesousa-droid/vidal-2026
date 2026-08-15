import logo from "@/assets/logo-eduardo-vidal.png";
import { candidate, nav } from "@/content/eduardo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy pb-10 pt-16 text-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Eduardo Vidal 2023" className="h-11 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {candidate.office} · {candidate.state} · {candidate.election}. Trabalho antes do
              mandato: escutar o território, montar o projeto e cobrar até a entrega.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow text-brand-yellow">Navegue</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/70 transition-colors hover:text-brand-yellow">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-brand-yellow">Na urna</p>
            <p className="mt-4 font-display text-5xl font-black leading-none">{candidate.number}</p>
            <p className="mt-3 text-sm text-white/60">
              Digite 2023, confira o nome e a foto e confirme o voto.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {candidate.name}. Todos os direitos reservados.</p>
          <p>Conteúdo de caráter informativo sobre a pré-campanha eleitoral de 2026.</p>
        </div>
      </div>
    </footer>
  );
}