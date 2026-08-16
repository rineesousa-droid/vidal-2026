import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo-cabecalho-eduardo-v2.png";
import { nav } from "@/content/eduardo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1420px] items-center justify-between px-5 md:px-8">
        
        <a
          href="#topo"
          aria-label="Eduardo Vidal — início"
          className="flex items-center transition-opacity hover:opacity-85"
        >
          <img
            src={logo}
            alt="Eduardo Vidal 2023"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-11 md:h-12" : "h-14 md:h-16"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-brand-yellow"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#participe"
            className="rounded-sm bg-brand-yellow px-5 py-2.5 font-display text-sm font-bold tracking-wide text-navy transition-transform hover:-translate-y-0.5"
          >
            PARTICIPE
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="text-white lg:hidden"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-5 pb-8 pt-4 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 font-display text-lg font-semibold text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#participe"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-sm bg-brand-yellow py-3 text-center font-display font-bold text-navy"
          >
            PARTICIPE
          </a>
        </nav>
      )}
    </header>
  );
}