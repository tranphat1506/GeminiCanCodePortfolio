import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Work from './components/Work';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data
import { projects } from './data/projects';
import { containerVariants } from './utils/animations';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-black text-white selection:bg-neon-green selection:text-black">
      <Navbar />

      <LazyMotion features={domAnimation}>
        <main>
          <Hero />

          <About />

          <Skills />

          <TechStack />

          <Experience />

          <Work />

          <Contact />

          <section className="h-screen snap-start flex items-center bg-black">
            <Footer />
          </section>
        </main>
      </LazyMotion>
    </div>
  );
}

function MainApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default MainApp;
