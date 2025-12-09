 # Marvin Zavala - Portfolio Personal

An interactive, high-performance personal portfolio website built to showcase software engineering projects and skills. Designed with a focus on modern aesthetics, responsiveness, and seamless user experience.

![Project Preview](/client/public/logo.png)

## 🚀 Overview

This project is a modern single-page application (SPA) serving as a professional portfolio. It features a custom "Midnight Azure" design system, rigorous TypeScript typing, and fluid animations powered by Framer Motion. It supports full internationalization (English/Spanish) and showcases selected works with immersive 3D-tilt cards.

## ✨ Key Features

- **Bilingual Support (i18n)**: Instant toggle between English and Spanish content.
- **Dynamic Animations**:
  - Custom *Typewriter* effect with word-boundary integrity.
  - 3D-tilt project cards using `framer-motion`.
  - Smooth scroll navigation and entrance transitions.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Modern UI/UX**:
  - Glassmorphism effects.
  - Custom interactive marquee for Tech Stack.
  - Starry background particle system.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **Routing**: wouter
- **Icons**: Lucide React, React Icons

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/website-personal.git
    cd website-personal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will start at `http://localhost:5000` (or `3000` for full stack).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

## 📂 Project Structure

```
client/src/
├── components/    # Reusable UI components (Hero, Navbar, ProjectCard)
├── lib/          # Utilities, content, and i18n logic
├── pages/        # Main route views (Home, CaseStudy)
└── index.css     # Global styles and Tailwind configuration
```

## 🎨 Design System

The visual identity is built around the **Midnight Azure** theme:
- **Background**: Deep Dark Slate (`#0B0F19`)
- **Primary**: Electric Azure (`#3B82F6`)
- **Secondary**: Bright Cyan (`#06B6D4`)
- **Typography**: Inter (Sans) & Playfair Display (Serif)

---

Developed by **Marvin Zavala**.
