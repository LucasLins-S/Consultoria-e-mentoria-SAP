Idiomas: 🇺🇸 [English](README.md) · 🇧🇷 [Português](README.pt-BR.md) · 🇪🇸 [Español](README.es.md)

---

# 📊 SAP Consulting & Mentoring — Lucas Lins

## 📋 Descripción General

Una aplicación moderna y de alto rendimiento tipo Single Page Application (SPA), desarrollada como portafolio profesional y vitrina de servicios para Lucas Lins, Consultor Senior SAP MM y Mentor.

La plataforma está diseñada para destacar su experiencia en SAP S/4HANA, historial de implementaciones y ofrecer servicios especializados de consultoría y mentoría. Cuenta con una interfaz limpia, una línea de tiempo interactiva y un sistema de contacto completamente funcional.

## 🔗 Vista Previa

[Portfolio Lucas Lins](https://lucas-lins.com/)

## ✨ Funcionalidades Principales

* 💼 **Presentación de Servicios:** Secciones detalladas sobre Mentoría SAP, Consultoría BTP, Clean Core Architecture y Optimización de Procesos.
* ⏳ **Timeline Interactiva:** Recorrido visual de la carrera profesional, desde logística operativa hasta implementaciones SAP Greenfield senior.
* ✉️ **Formulario de Contacto Funcional:** Canal directo de comunicación usando Resend para envío confiable de correos.
* ⚡ **Optimizado para Edge:** Preparado para despliegue en Cloudflare Pages mediante @opennextjs/cloudflare.
* 📱 **Totalmente Responsivo:** Adaptación perfecta en dispositivos móviles, tablet y escritorio.

## 🧩 Tecnologías Utilizadas

Este proyecto utiliza un ecosistema moderno basado en React:

* **Framework:** Next.js 16 (React 19)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS v4
* **Íconos:** React Icons
* **Email:** Resend API
* **Deploy e Infraestructura:** OpenNext, Cloudflare Pages, Wrangler

## 📁 Arquitectura y Estructura

La aplicación sigue una arquitectura limpia basada en componentes dentro de una estructura de página única:

```id="es-struct"
sap-consulting-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navegación y marca
│   │   ├── Hero.tsx           # Banner principal
│   │   ├── Services.tsx       # Servicios SAP (S/4HANA, BTP, etc.)
│   │   ├── About.tsx          # Resumen profesional y habilidades
│   │   ├── Timeline.tsx       # Trayectoria profesional (2017 - Actualidad)
│   │   ├── ContactForm.tsx    # Formulario integrado con Resend
│   │   └── Footer.tsx         # Enlaces y créditos
│   └── app/
│       └── page.tsx           # Punto de entrada principal
├── package.json
└── cloudflare-env.d.ts        # Tipos de Cloudflare generados por Wrangler
```

## 🚀 Cómo Ejecutar Localmente

### Requisitos

* Node.js (recomendado v20+)
* npm, pnpm o yarn
* Una API Key de Resend para el formulario

### Instalación

1. Clona el repositorio:

```bash id="es-clone"
git clone https://github.com/LucasLins-S/Consultoria-e-mentoria-SAP
```

2. Entra al directorio:

```bash id="es-cd"
cd sap-consulting-portfolio
```

3. Instala las dependencias:

```bash id="es-install"
npm install
```

4. Configura las variables de entorno:

Crea un archivo `.env.local` y agrega:

```id="es-env"
RESEND_API_KEY=your_resend_api_key_here
```

5. Inicia el servidor:

```bash id="es-dev"
npm run dev
```

6. Abre en el navegador:

```id="es-url"
http://localhost:3000
```

## ☁️ Despliegue en Cloudflare

Este proyecto está optimizado para ejecutarse en la red Edge de Cloudflare utilizando OpenNext.

Para generar el build:

```bash id="es-build"
npm run build:cloudflare
```

Para desplegar en Cloudflare Pages:

```bash id="es-deploy"
npm run deploy
```

Generar tipos de entorno:

```bash id="es-typegen"
npm run cf-typegen
```

## 👨‍💻 Desarrollo

Diseño y arquitectura frontend desarrollados por Willian D. Daniel.
