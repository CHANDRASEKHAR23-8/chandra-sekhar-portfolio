# Chinni Chandra Sekhar — Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, highly responsive developer portfolio engineered for **Chinni Chandra Sekhar** — Software Engineer, Java & Full Stack Developer, and AI/ML Enthusiast. Computer Science and Engineering undergraduate at **Lakireddy Bali Reddy College of Engineering (LBRCE)**.

Built with a modular React architecture, unified dark/light theme system, native `IntersectionObserver` scroll reveals, zero-latency client state management, and WCAG accessibility standards.

---

## 🌟 Key Highlights & Features

- **🌓 Dual Theme Architecture (Dark & Light Mode)**:
  - System-preference detection with persistent `localStorage` memory.
  - Zero-flicker inline initialization preventing theme flashing on initial page loads.
  - Responsive SVG Sun/Moon toggle icons in both desktop navbar and mobile slide-out drawer.
- **⚡ High-Performance Visuals & Animations**:
  - Zero bloated animation libraries (built with pure CSS keyframes and hardware-accelerated transforms).
  - Staggered hero entrance choreography and subtle code terminal float.
  - Smooth section reveal animations via custom `useScrollReveal` hook.
  - Strict compliance with `prefers-reduced-motion` for motion-sensitive users.
- **📱 Fluid Responsiveness Across All Devices**:
  - Meticulously tested and optimized across **320px**, **375px**, **425px**, **768px**, **1024px**, and **1440px+** viewports.
  - Zero horizontal overflow (`overflow-x: hidden`).
  - Fluid clamp typography scaling smoothly without awkward line wrapping.
- **🛡️ Authentic Data & Honest Design**:
  - 100% verified academic credentials, verified GitHub repository links, and authentic LinkedIn connections.
  - Transparent project statuses (Active Development & System Architecture previews).
  - Honest contact form providing clear feedback without deceptive simulated backend deliveries.
- **🚀 Production & SEO Ready**:
  - Full Open Graph and Twitter Card social metadata (`1200x630`).
  - Search engine indexing configured with `robots.txt` and `sitemap.xml`.
  - Schema.org JSON-LD structured data for rich search engine snippets.
  - Pre-configured deployment manifests for **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml`).

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18.3](https://react.dev/) | Component-based UI engineering |
| **Tooling & Bundler** | [Vite 6.0](https://vitejs.dev/) | Instant HMR and optimized production bundling |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first styling with custom CSS design tokens |
| **CSS Architecture** | PostCSS + Autoprefixer | Automated cross-browser vendor prefixing |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible vector icons |
| **Code Quality** | Custom verification test suite | Automated import and syntax integrity checking |

---

## 📁 Scalable Directory Architecture

```
Chandra Sekhar-Portfolio/
├── public/
│   ├── favicon.svg             # Modern vector brand monogram
│   ├── og-image.png            # High-resolution social sharing preview
│   ├── og-image.svg            # Scalable vector open-graph banner
│   ├── robots.txt              # Search engine crawler instructions
│   ├── site.webmanifest        # PWA & mobile bookmark manifest
│   └── sitemap.xml             # Search engine URL hierarchy
├── src/
│   ├── assets/                 # Static vector assets
│   ├── components/
│   │   ├── common/             # Reusable UI elements (SectionHeading, ScrollReveal, ThemeToggle)
│   │   ├── layout/             # Layout components (Navbar, Footer, Container)
│   │   └── ui/                 # Atomic design components (Button, Card, Badge)
│   ├── data/
│   │   └── portfolioData.js    # Verified portfolio owner data & navigation items
│   ├── hooks/
│   │   ├── useScrollReveal.js  # Native IntersectionObserver scroll trigger
│   │   ├── useScrollSpy.js     # Active section scroll spy hook
│   │   └── useTheme.jsx        # Single-source-of-truth theme state hook
│   ├── pages/
│   │   └── HomePage.jsx        # Unified assembly page
│   ├── sections/               # Modular page sections
│   │   ├── Hero.jsx            # Introduction, status pills, CTA & terminal visual
│   │   ├── About.jsx           # Background summary, pillars & academic foundation
│   │   ├── Skills.jsx          # Categorized technical competencies
│   │   ├── Projects.jsx        # Active engineering projects & architecture preview
│   │   ├── Education.jsx       # Degree, coursework & institution timeline
│   │   ├── Experience.jsx      # Practical learning, projects & technical engagement
│   │   ├── Certifications.jsx  # Continuous learning pathway & verified link
│   │   └── Contact.jsx         # Accessible contact form & direct social links
│   ├── styles/
│   │   ├── index.css           # Global typography, animations & reduced-motion rules
│   │   └── variables.css       # Unified dark and light mode color tokens
│   ├── utils/
│   │   └── cn.js               # ClassName merge utility
│   ├── App.jsx                 # Top-level application shell
│   └── main.jsx                # React DOM entry point
├── index.html                  # SEO-optimized HTML5 document with JSON-LD schema
├── netlify.toml                # Netlify SPA routing and security headers
├── package.json                # Project dependencies and script runner
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme extensions
├── vercel.json                 # Vercel SPA rewrites and immutable caching rules
├── vite.config.js              # Vite build and manual chunking configuration
├── .gitignore                  # Git exclusions for secrets, dist, and temporary logs
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or higher (tested on Node.js v24.x)
- **npm**: v9.0.0 or higher

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd "Chandra Sekhar-Portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

### Production Build & Preview

1. Compile the production-optimized build:
   ```bash
   npm run build
   ```

2. Preview the compiled production build locally:
   ```bash
   npm run preview
   ```

3. Run verification test suite:
   ```bash
   npm run verify
   ```

---

## 🌐 Production Deployment Guide

This portfolio is pre-configured for one-click deployment on either **Vercel** or **Netlify**.

### Option 1: Deploying to Vercel (Recommended)

**Vercel** is the recommended hosting platform for React + Vite due to its native Vite zero-config optimization, global Edge network, and automatic HTTPS.

#### Method A: Deploy via GitHub (Simplest)
1. Push this project to your GitHub account (`https://github.com/CHANDRASEKHAR23-8/portfolio` or desired repository name).
2. Visit [vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New..."** $\rightarrow$ **"Project"**.
4. Select your portfolio repository from the list.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**. Your site will be live on a global URL (e.g., `https://chandra-sekhar-portfolio.vercel.app`) in under 60 seconds!

#### Method B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Run deployment from the project root
vercel

# Deploy to production
vercel --prod
```

---

### Option 2: Deploying to Netlify

The repository includes a ready-to-use `netlify.toml` configuring single-page routing and security headers.

#### Method A: Deploy via GitHub
1. Push this project to GitHub.
2. Visit [netlify.com](https://www.netlify.com/) and log in with GitHub.
3. Click **"Add new site"** $\rightarrow$ **"Import an existing project"**.
4. Select your repository. Netlify reads `netlify.toml` automatically (`npm run build` $\rightarrow$ `dist`).
5. Click **"Deploy site"**.

#### Method B: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 👤 Verified Developer Profile

- **Full Name**: CHINNI CHANDRA SEKHAR
- **Preferred Name**: Chandra Sekhar
- **Specialization**: Software Engineer | Java & Full Stack Developer | AI/ML Enthusiast
- **Education**: 3rd Year B.Tech in Computer Science and Engineering, Lakireddy Bali Reddy College of Engineering (LBRCE)
- **GitHub**: [github.com/CHANDRASEKHAR23-8](https://github.com/CHANDRASEKHAR23-8)
- **LinkedIn**: [linkedin.com/in/chinni-chandra-sekhar-703629322](https://www.linkedin.com/in/chinni-chandra-sekhar-703629322/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
