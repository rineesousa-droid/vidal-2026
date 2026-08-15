import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { faq } from "@/content/eduardo";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow text-royal">Dúvidas frequentes</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] text-navy">
              Transparência começa na resposta.
            </h2>
          </div>

          <div className="reveal border-t border-border">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-bold text-navy md:text-xl">{item.q}</span>
                    {isOpen ? (
                      <Minus className="mt-1 size-5 shrink-0 text-royal" />
                    ) : (
                      <Plus className="mt-1 size-5 shrink-0 text-royal" />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}