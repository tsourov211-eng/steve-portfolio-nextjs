# Tanvir Ahammed Sourov - Next.js Portfolio Website

A modern, responsive, and pixel-perfect personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React Icons**.

Designed based on the custom dark & yellow web design specification.

---

## 🌟 Key Features

1. **Pixel-Perfect Hero Section**:
   - Matches both Desktop (`homePageWeb.jpg`) and Mobile (`homePageMobile.png`) designs.
   - Distinctive yellow geometric background polygon accent on desktop.
   - Clean dark profile frame with avatar image.
   - Custom rounded pill button with embedded right-arrow icon.

2. **Interactive Floating Navigation**:
   - **Desktop**: Right-aligned vertical floating navbar with smooth hover tooltips and yellow active indicators.
   - **Mobile**: Top-right floating hamburger toggle button with full-screen menu drawer.

3. **Live Theme / Color Customizer**:
   - Floating gear settings button on the left edge.
   - Dynamic style switcher modal allowing users to customize accent colors in real-time (Yellow, Red, Blue, Green, Purple, Orange).

4. **Multi-Section Single Page Application (SPA)**:
   - **Home**: Main hero layout.
   - **About**: Personal details, statistics cards, skill badges, and experience/education timeline.
   - **Portfolio**: Filterable project gallery cards with interactive categories.
   - **Contact**: Contact information cards and interactive message form.
   - **Blog**: Article card grid with dates and authors.

5. **Responsive & Modern**:
   - Mobile-first approach using Tailwind CSS.
   - Optimized fonts and clean code organization.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your machine.

### 2. Installation
Extract the zip file and navigate into the project directory:

```bash
cd steve-portfolio-nextjs
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
steve-portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── SettingsModal.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── tanvr.png
│   └── Tanvir_Ahammed_Sourov_Resume.pdf
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
