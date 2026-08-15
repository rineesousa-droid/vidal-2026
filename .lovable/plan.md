# Site institucional e eleitoral — Eduardo Vidal | Deputado Federal 2023

## Objetivo desta etapa
Entregar a **Home completa**, com acabamento visual de agência, identidade própria e todos os blocos narrativos. Páginas internas ficam para a etapa seguinte, com rotas já previstas na navegação.

## Fotografias
Vou tentar ler a pasta do Drive assim que o link público for reenviado. Se o download automático não for possível (é comum o Drive bloquear), a Home é construída com **slots de imagem nomeados** — `hero`, `quem-e`, `causa-2019`, `resultados`, `territorio`, `familia`, `galeria-01..08`, `cta-final` — cada um em um arquivo único de configuração. Ao enviar as fotos, basta soltá-las nesses slots e o site inteiro se atualiza sem mexer no layout. Nenhuma imagem artificial do Eduardo e nenhum banco de imagens com pessoas será usado; onde faltar foto, uso composição tipográfica e blocos de cor da marca, não stock.

## Identidade visual
Base azul institucional (#0f1b3d, #1e3a5f, #3b6fa0, #e8edf3), com um acento quente reservado para números e CTAs. Quando a logomarca oficial chegar, ajusto a paleta para bater exatamente com ela — a logo não será redesenhada. Duas famílias tipográficas: uma display com personalidade para títulos, uma sans altamente legível para texto. Tokens semânticos definidos em `src/styles.css` (primary, secondary, accent, background, surface, text primary/secondary, border, radius, sombras), sem cores fixas nos componentes.

## Direção de layout
Editorial contemporâneo, muito respiro, fotografia grande, ritmo alternado entre seções claras, seções escuras e seções abertas sem card. Nada de grade de cards repetida do topo ao rodapé. Cada seção tem intenção visual própria.

## Estrutura da Home (nesta ordem)
1. Header integrado ao hero, virando barra fixa compacta com blur no scroll; menu hambúrguer próprio no mobile; botão FALE COM A EQUIPE
2. Hero 50/50 — label DEPUTADO FEDERAL • SÃO PAULO, nome, número **2023** em destaque tipográfico, mensagem, dois CTAs
3. Faixa de 4 números com contador discreto (20 anos, 4 propostas, +73%, desde 2019)
4. Quem é Eduardo — editorial foto + texto, botão para a trajetória
5. A virada de 2019 — fluxo visual Comunidade → Mobilização → Congresso → Diálogo → Propostas
6. Resultados antes do mandato — 4 blocos, linguagem sempre de participação/articulação, nunca autoria exclusiva
7. Bandeiras — 5 causas, ícones minimalistas
8. Agenda mais ampla — Saúde, Educação, Empreendedorismo, Inclusão
9. Trajetória — timeline alternada no desktop, vertical no mobile
10. São Paulo e Jundiaí — seção territorial, estrutura pronta para agenda regional
11. Crescimento eleitoral — 2022 → 2024 → +73% → 2026, gráfico minimalista, sem votos absolutos
12. Por que Brasília? — seção de forte impacto, 4 pilares: Trabalho, Presença, Fiscalização, Resultado
13. Propostas — 6 categorias com estrutura pronta e placeholders explícitos
14. Família — seção pequena e sóbria, exibida só quando houver foto autorizada
15. Galeria masonry com lightbox
16. Vídeo — oculto automaticamente enquanto não houver vídeo configurado
17. Notícias — cards de exemplo marcados como placeholder, prontos para conteúdo real
18. Agenda — oculta automaticamente sem eventos
19. Redes sociais — só os canais com link informado
20. FAQ em accordion, com as 8 perguntas, respondidas apenas com a biografia oficial
21. CTA final com foto forte + EDUARDO VIDAL / DEPUTADO FEDERAL / 2023
22. Contato — nome, telefone, e-mail, cidade, bairro, assunto, mensagem, consentimento; captura de UTMs e landing_page
23. Footer completo com placeholders [PARTIDO], [CNPJ DA CAMPANHA], [INFORMAÇÕES LEGAIS], [RESPONSÁVEL PELO SITE]
24. Botão flutuante de WhatsApp (número configurável, oculto até ser preenchido) e banner de cookies discreto com Aceitar / Rejeitar / Configurar

## Conteúdo e dados
Todos os textos, números, links, fotos, notícias, eventos e propostas ficam centralizados em arquivos de conteúdo editáveis, separados dos componentes. Nada inventado: partido, CNPJ, telefone, WhatsApp, redes sociais, votos absolutos e propostas específicas ficam como placeholders vazios que ocultam o bloco correspondente até serem preenchidos.

## Mobile, performance e acessibilidade
Mobile pensado à parte, não apenas reduzido: hero recomposto, número 2023 sempre visível, CTAs grandes, timeline vertical, zero overflow horizontal. Imagens responsivas com lazy loading e formatos modernos, fontes otimizadas, animações discretas (fade-up, reveal, contador, parallax mínimo) respeitando prefers-reduced-motion. HTML semântico, um único H1, alt text, foco visível, navegação por teclado e ARIA.

## SEO
Title "Eduardo Vidal | Deputado Federal 2023", meta description a partir da biografia oficial, Open Graph e Twitter Cards, canonical, robots.txt, sitemap, Schema.org (Person + WebSite) e hierarquia de headings correta.

## Detalhes técnicos
- Componentes em `src/components/site/` conforme a lista pedida (Header, Hero, StatsBar, AboutEduardo, CauseOrigin, ResultsBeforeOffice, CausesGrid, BroaderAgenda, Timeline, TerritorySection, ElectionGrowth, WhyCongress, Proposals, FamilySection, Gallery, VideoSection, NewsGrid, Agenda, SocialSection, FAQ, ContactForm, CampaignCTA, WhatsAppButton, Footer, CookieConsent)
- Conteúdo em `src/content/` (bio, stats, causas, timeline, propostas, notícias, agenda, redes, fotos)
- Home substitui `src/routes/index.tsx`; rotas internas criadas na etapa seguinte
- Tokens e tipografia em `src/styles.css`; fontes carregadas via `<link>` no `__root.tsx`
- Sem backend nesta etapa; o formulário já monta o payload com UTMs para plugar em banco de dados depois

## Próxima etapa (após aprovação da Home)
Páginas /eduardo, /trajetoria, /resultados, /bandeiras, /propostas, /noticias, /noticias/[slug], /agenda, /contato, /politica-de-privacidade e, se desejar, backend para notícias, agenda e recebimento dos contatos.
