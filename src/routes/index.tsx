import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Pillars } from "@/components/site/Pillars";
import { Territory } from "@/components/site/Territory";
import { ActionGallery } from "@/components/site/ActionGallery";
import { Timeline } from "@/components/site/Timeline";
import { Results } from "@/components/site/Results";
import { Manifesto } from "@/components/site/Manifesto";
import { Faq } from "@/components/site/Faq";
import { Participate } from "@/components/site/Participate";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { faq } from "@/content/eduardo";

const title = "Eduardo Vidal 2023 — Deputado Federal por São Paulo";
const description =
  "Trabalho antes do mandato: conheça a história, as bandeiras e os resultados de Eduardo Vidal, candidato a Deputado Federal por São Paulo em 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Eduardo Vidal",
              jobTitle: "Candidato a Deputado Federal por São Paulo",
              description,
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <About />
        <Pillars />
        <Territory />
        <ActionGallery />
        <Timeline />
        <Results />
        <Manifesto />
        <Faq />
        <Participate />
      </main>
      <SiteFooter />
    </div>
  );
}
