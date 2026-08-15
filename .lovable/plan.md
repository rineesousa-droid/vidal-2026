# Site institucional e eleitoral — Eduardo Vidal | Deputado Federal 2023

## Objetivo desta etapa
Entregar a **Home completa**, com acabamento visual de agência, identidade própria e todos os blocos narrativos. Páginas internas ficam para a etapa seguinte, com rotas já previstas na navegação.

## Materiais oficiais (já acessados no Drive)
Consegui abrir a pasta pela conexão do Google Drive. Ela contém exatamente três arquivos:

- Logomarca oficial vetorizada (PNG 3886x2711 e .ai) — azul-marinho e azul royal, filetes verde e amarelo, tipografia itálica condensada e o bloco **2023** em destaque.
- Uma única fotografia: retrato de estúdio em fundo branco, corpo 3/4, terno escuro, sorriso aberto, 4016x6016.

Consequência prática: hoje existe **uma** foto. Ela será o retrato principal do Hero, com recorte do fundo branco e integração ao background da marca. Não vou repetir a mesma imagem em várias seções — isso empobreceria o site. As demais seções que pedem fotografia (atuação política, Congresso, pessoas, São Paulo e Jundiaí, família, galeria, CTA final) ficam com **slots nomeados** já posicionados: `quem-e`, `causa-2019`, `resultados`, `territorio`, `familia`, `galeria-01..08`, `cta-final`, todos listados em um único arquivo de configuração. Enquanto vazios, essas seções renderizam em versão tipográfica e gráfica da marca — sem banco de imagens e sem imagem artificial do Eduardo. Basta subir as fotos nesses slots depois e o layout se completa sem retrabalho. Recomendo enviar mais fotos para a Home ficar realmente fotográfica.

## Identidade visual (extraída da logo)
Paleta derivada da própria logomarca: azul-marinho profundo como cor primária, azul royal como secundária, verde e amarelo apenas como acentos finos (filetes, sublinhados, destaque do número), off-white e cinza-azulado para superfícies e texto secundário. A logo não será redesenhada, apenas aplicada em versão cheia e reduzida, e o favicon sai dela. Duas famílias tipográficas: uma display condensada/itálica que conversa com a logo para títulos e para o número 2023, e uma sans neutra e muito legível para texto. Tudo em tokens semânticos no `src/styles.css` (primary, secondary, accent, background, surface, texto primário/secundário, borda, raio, sombras), sem cores fixas nos componentes.

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
