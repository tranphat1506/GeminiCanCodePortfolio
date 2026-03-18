import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data
import { projects } from './data/projects';
import { containerVariants } from './utils/animations';

function App() {
  return (
    <div className="bg-black text-white selection:bg-neon-green selection:text-black">
      <Navbar />

      <LazyMotion features={domAnimation}>
        <main>
          <Hero />
          
          <About />

          <Experience />

          <section id="work" className="py-32" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 1000px' }}>
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-16">
                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-5xl md:text-7xl font-display uppercase italic mb-4 text-gradient-neon">My <span className="text-white">Work</span></h2>
                  <div className="flex gap-2 items-center text-gray-500 uppercase tracking-widest text-[10px]">
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-gray-400 whitespace-nowrap">2024 - 2026 Production History</span>
                  </div>
                </m.div>
                <p className="text-gray-500 hidden md:block max-w-xs text-sm italic">
                  A selection of systems I've architected, focusing on scalability and technical depth.
                </p>
              </div>

              <m.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
              </m.div>
            </div>
          </section>

          <TechStack />

          <Contact />
        </main>
      </LazyMotion>

      <Footer />
    </div>
  );
}

export default App;
