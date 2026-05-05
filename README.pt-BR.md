Idiomas: 🇺🇸 [English](README.md) · 🇧🇷 [Português](README.pt-BR.md) · 🇪🇸 [Español](README.es.md)

---

# 📊 SAP Consulting & Mentoring — Lucas Lins

## 📋 Visão Geral

Uma aplicação moderna e de alta performance do tipo Single Page Application (SPA), desenvolvida como portfólio profissional e vitrine de serviços para Lucas Lins, Consultor Sênior SAP MM e Mentor.

A plataforma foi projetada para destacar sua expertise em SAP S/4HANA, histórico de implementações e oferecer serviços especializados de consultoria e mentoria. Conta com uma interface limpa, uma linha do tempo interativa e um sistema de contato totalmente funcional.

## 🔗 Preview Online

[Portfolio Lucas Lins](https://lucas-lins.com/)

## ✨ Principais Funcionalidades

* 💼 **Apresentação de Serviços:** Seções detalhadas sobre Mentoria SAP, Consultoria BTP, Clean Core Architecture e Otimização de Processos.
* ⏳ **Timeline Interativa:** Jornada visual da carreira, desde logística operacional até implementações SAP Greenfield nível sênior.
* ✉️ **Formulário de Contato Funcional:** Canal direto de comunicação utilizando Resend para envio confiável de e-mails.
* ⚡ **Otimizado para Edge:** Preparado para deploy em Edge com Cloudflare Pages via @opennextjs/cloudflare.
* 📱 **Totalmente Responsivo:** Adaptação perfeita para dispositivos mobile, tablet e desktop.

## 🧩 Tecnologias Utilizadas

Este projeto utiliza um ecossistema moderno baseado em React:

* **Framework:** Next.js 16 (React 19)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4
* **Ícones:** React Icons
* **Envio de Email:** Resend API
* **Deploy & Infraestrutura:** OpenNext, Cloudflare Pages, Wrangler

## 📁 Arquitetura & Estrutura

A aplicação segue uma arquitetura limpa baseada em componentes dentro de uma estrutura de página única:

```id="ptbr-struct"
sap-consulting-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navegação e branding
│   │   ├── Hero.tsx           # Banner principal
│   │   ├── Services.tsx       # Serviços SAP (S/4HANA, BTP, etc.)
│   │   ├── About.tsx          # Resumo profissional e habilidades
│   │   ├── Timeline.tsx       # Trajetória de carreira (2017 - Atual)
│   │   ├── ContactForm.tsx    # Formulário integrado com Resend
│   │   └── Footer.tsx         # Links e créditos
│   └── app/
│       └── page.tsx           # Entrada principal da SPA
├── package.json
└── cloudflare-env.d.ts        # Tipagens do Cloudflare geradas pelo Wrangler
```

## 🚀 Como Executar Localmente

### Pré-requisitos

* Node.js (recomendado v20+)
* npm, pnpm ou yarn
* Uma API Key do Resend para funcionamento do formulário

### Instalação

1. Clone o repositório:

```bash id="ptbr-clone"
git clone https://github.com/LucasLins-S/Consultoria-e-mentoria-SAP
```

2. Acesse o diretório do projeto:

```bash id="ptbr-cd"
cd sap-consulting-portfolio
```

3. Instale as dependências:

```bash id="ptbr-install"
npm install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```id="ptbr-env"
RESEND_API_KEY=your_resend_api_key_here
```

5. Inicie o servidor de desenvolvimento:

```bash id="ptbr-dev"
npm run dev
```

6. Acesse no navegador:

```id="ptbr-url"
http://localhost:3000
```

## ☁️ Deploy com Cloudflare

Este projeto foi otimizado para rodar na Edge Network da Cloudflare utilizando OpenNext.

Para gerar o build para Cloudflare:

```bash id="ptbr-build"
npm run build:cloudflare
```

Para fazer deploy direto no Cloudflare Pages (necessário autenticação no Wrangler):

```bash id="ptbr-deploy"
npm run deploy
```

Gerar tipagens de ambiente do Cloudflare (caso adicione novos bindings):

```bash id="ptbr-typegen"
npm run cf-typegen
```

## 👨‍💻 Desenvolvimento

Design e arquitetura frontend desenvolvidos por Willian D. Daniel.
