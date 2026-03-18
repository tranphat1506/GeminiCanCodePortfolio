# 💎 Gemini CanCode - Premium Portfolio

A sophisticated, high-performance personal portfolio built with **React**, **Vite**, and **Framer Motion**. Featuring a cinematic "frame-by-frame" nested scroll snapping experience and full multilingual support.

## ✨ Key Features

- **🎞️ Cinematic Nested Snapping**: A unique "Frame-by-Frame" scrolling experience that guides users through detailed sub-pages (Projects, Skills, Experience) within the main navigation flow.
- **🌍 Multilingual Support**: Seamless transition between **English** and **Vietnamese** with centralized state management.
- **🎨 Premium UI/UX**:
    - High-end Glassmorphism effects.
    - Custom **ProjectImage** component with robust CSS-fallback logic.
    - Sleeker **Navbar** with intelligent scroll-intent detection (Wheel/Touch).
    - Consistent branding using the **Gilroy** font family.
- **🚀 Advanced Animations**: Smooth entrance animations, cycling text, floating elements, and interactive tilt cards powered by Framer Motion.
- **📱 Responsive & Optimized**: Fully responsive layout optimized for all devices, from mobile to ultra-wide displays.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (for Localization)

## 📁 Project Structure

```text
src/
├── components/         # UI sections (Hero, Work, Experience, etc.)
│   └── ui/             # Reusable UI primitives (ProjectImage, TiltCard)
├── context/            # Global Context (LanguageProvider)
├── data/               # Project and personal data (projects.js)
├── utils/              # Animations, translations, and helper functions
├── App.jsx             # Main application orchestrator
└── index.css           # Global styles and scroll-snap configurations
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tranphat1506/PersonalPortfolio.git
   cd PersonalPortfolio/portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

## 📄 License

Designed and Developed by **Lê Châu Trần Phát (GeminiCanCode)**.
© 2026 All Rights Reserved.
