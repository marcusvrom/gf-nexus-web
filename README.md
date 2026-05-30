# GF Nexus — Landing Page (gf-nexus.com)

> Landing page **estática de prévia** do servidor GF Nexus. HTML + CSS + JS puro,
> zero backend. Pronta para deploy gratuito em Cloudflare Pages / GitHub Pages / Netlify.

---

## O que é

Uma página única de prévia/teaser para `gf-nexus.com` enquanto o servidor real
ainda está em preparação. Coleta interesse da comunidade (lista de espera + Discord)
e estabelece a identidade visual do GF Nexus.

**NÃO confundir com:**
- O **site institucional PHP** (`gf-site.zip` → `analysis/gf_site_reference/`) que tem cadastro real integrado ao banco. Esse é o **Caminho A** do [`LAUNCHER_PLAN.md`](../../docs/LAUNCHER_PLAN.md) e só roda com VM + Apache + PostgreSQL.
- Esta landing é o que vai no ar **hoje**, sem depender de infra. Quando o servidor estiver pronto (Sprint 0), troca-se a landing pelo site PHP completo.

---

## Estrutura

```
gf-nexus-landing/
├── index.html              # página única (nav, hero, pilares, classes, roadmap, comunidade, beta, FAQ, footer)
├── _headers                # cache + segurança (Cloudflare Pages / Netlify)
├── robots.txt              # SEO
├── README.md               # este arquivo
└── assets/
    ├── css/style.css       # estilos (paleta GF Nexus)
    ├── js/main.js          # menu mobile + nav scroll (sem deps)
    └── img/                # 16 imagens (banner hero + 10 classes + screenshots)
```

Tamanho total: ~3,2 MB (dominado pelas imagens).

---

## Seções da página

1. **Nav fixo** — brand ✦ GF Nexus + links + "Entrar na beta"
2. **Hero** — banner cinematográfico + "O portal para Saphael está se abrindo" + CTAs
3. **Pilares** — Vanilla spirit / Nexus Points / Comunidade
4. **Classes** — grid de 8 classes com imagens
5. **Roadmap** — timeline (Fase 0 concluída → Beta fechada → Beta aberta → Lançamento Q4 2026)
6. **Comunidade** — CTA grande para Discord
7. **Beta / Waitlist** — formulário de e-mail (Formspree)
8. **FAQ** — 5 perguntas (pago?, rates?, wipe?, idioma?, como jogar?)
9. **Footer** — links + aviso de projeto de fã

---

## ⚙️ Antes de publicar — 3 substituições obrigatórias

Procure e troque estes placeholders no `index.html`:

| Placeholder | Onde | Trocar por |
|---|---|---|
| `SEU-CONVITE` | 3 ocorrências (`discord.gg/SEU-CONVITE`) | link real do convite do Discord |
| `SEU_FORM_ID` | 1 ocorrência (`formspree.io/f/SEU_FORM_ID`) | ID do formulário Formspree (ver abaixo) |
| `https://gf-nexus.com` | meta tags OG | confirmar domínio (já é gf-nexus.com ✓) |

```powershell
# Localizar rapidamente todos os placeholders
Select-String -Path index.html -Pattern "SEU-CONVITE|SEU_FORM_ID"
```

### Configurar a lista de espera (Formspree — grátis)

1. Criar conta em https://formspree.io (plano free: 50 submissões/mês)
2. Criar um novo form → copiar o endpoint (`https://formspree.io/f/xxxxxxx`)
3. Substituir `SEU_FORM_ID` no `index.html`
4. Alternativa sem e-mail: remover o `<form>` e deixar só o botão "Entrar no Discord"

---

## 🚀 Deploy — 3 opções gratuitas

### Opção 1 — Cloudflare Pages (RECOMENDADO)

Melhor para este caso: CDN global, HTTPS automático, domínio custom fácil, sem limite de banda.

```
1. Subir a pasta para um repositório Git (GitHub/GitLab):
   cd gf-nexus-landing
   git init && git add . && git commit -m "landing gf-nexus v1"
   git remote add origin https://github.com/voce/gf-nexus-landing.git
   git push -u origin main

2. cloudflare.com → Pages → Create a project → Connect to Git
   - Framework preset: None
   - Build command: (vazio)
   - Build output directory: /
   - Deploy

3. Domínio custom:
   - Pages → Custom domains → Set up a custom domain → gf-nexus.com
   - Como o domínio é seu, adicionar os registros DNS que a Cloudflare indicar
     (ou transferir o DNS do domínio para a Cloudflare — grátis)

4. HTTPS: automático (Cloudflare provisiona o certificado)
```

O arquivo `_headers` é lido nativamente pelo Cloudflare Pages (cache + segurança).

### Opção 2 — GitHub Pages

Mais simples se você já usa GitHub, mas sem suporte nativo a `_headers`.

```
1. Criar repo público gf-nexus-landing no GitHub
2. Subir os arquivos (git push)
3. Settings → Pages → Source: Deploy from branch → main → / (root)
4. Domínio custom:
   - Settings → Pages → Custom domain → gf-nexus.com
   - Criar arquivo CNAME na raiz com o conteúdo: gf-nexus.com
   - No seu provedor de DNS, criar registro CNAME/A apontando para GitHub Pages
     (185.199.108.153 ... — IPs nos docs do GitHub)
5. HTTPS: marcar "Enforce HTTPS"
```

### Opção 3 — Netlify

```
1. netlify.com → Add new site → Deploy manually
2. Arrastar a pasta gf-nexus-landing inteira para o navegador
3. Site no ar em segundos (URL aleatória)
4. Domain settings → Add custom domain → gf-nexus.com → seguir DNS
5. HTTPS automático (Let's Encrypt)
```

`_headers` é lido nativamente pela Netlify também.

---

## Apontar o domínio gf-nexus.com

Onde você comprou o domínio, configurar o DNS conforme a opção escolhida:

| Host | Registro | Aponta para |
|---|---|---|
| Cloudflare Pages | CNAME `@` / `www` | `<seu-projeto>.pages.dev` (ou nameservers da Cloudflare) |
| GitHub Pages | A `@` | `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` + CNAME `www` → `voce.github.io` |
| Netlify | conforme painel | `<seu-site>.netlify.app` ou nameservers da Netlify |

Propagação de DNS leva de minutos a 24h.

---

## Checklist de go-live

- [ ] `SEU-CONVITE` substituído pelo Discord real (3 lugares)
- [ ] `SEU_FORM_ID` configurado no Formspree (ou form removido)
- [ ] Testado localmente (abrir `index.html` no browser)
- [ ] Testado em mobile (DevTools → modo responsivo)
- [ ] Deploy feito (Cloudflare/GitHub/Netlify)
- [ ] DNS de gf-nexus.com apontado
- [ ] HTTPS ativo (cadeado verde)
- [ ] OG image aparece ao colar o link no Discord/WhatsApp (testar)
- [ ] `robots.txt` acessível em gf-nexus.com/robots.txt

---

## Manutenção e evolução

**Atualizar notícias/roadmap:** editar direto no `index.html` e re-deployar (push no Git → deploy automático na Cloudflare/GitHub/Netlify).

**Quando o servidor estiver pronto (Sprint 0):**
- Esta landing pode virar a **home** e o site PHP (`gf-site.zip`) assume `/jogar`, `/register`, `/painel`
- OU a landing é substituída pelo site PHP completo
- Ver [`LAUNCHER_PLAN.md`](../../docs/LAUNCHER_PLAN.md) §3 (Caminho A) para a transição

**Imagens não usadas (disponíveis para expandir):**
- `img-02`, `img-04`, `img-05` — screenshots/cenas extras
- `img-03`, `img-06` — usadas como background de cards no site PHP original
- `img-08` (Optimus), `img-09` (Prime) — classes especiais, se quiser ampliar o grid

**Pendências de conteúdo:**
- [ ] Trocar o banner hero (`img-01`) por screenshot real do servidor próprio quando disponível
- [ ] Logo ✦ é placeholder tipográfico — substituir pelo logotipo final quando o design ficar pronto
- [ ] Datas do roadmap (Q2/Q3/Q4 2026) — ajustar conforme cronograma real

---

## Notas técnicas

- **Fontes:** Cinzel (títulos, ar de fantasia) + Inter (corpo) via Google Fonts. Funciona offline com fallback para serif/sans-serif do sistema.
- **JS:** 1 arquivo, ~30 linhas, sem dependências. Menu mobile + sombra de nav no scroll.
- **Acessibilidade:** `alt` em imagens, `aria-label` no brand, contraste alto (dourado sobre azul escuro passa WCAG AA).
- **Performance:** imagens com `loading="lazy"`, CSS único, sem framework. Lighthouse deve dar 90+ em performance.
- **Compatibilidade:** CSS Grid + custom properties — funciona em todos os browsers modernos (Chrome, Firefox, Edge, Safari). NÃO testar em IE (esta landing é web pública, não o painel embedded do client).

---

*Landing v1 — 2026-05-28. Estética herdada do protótipo `02_desktop_classic`. Paleta consolidada azul + dourado + sky.*
