import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Parallax } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Context
import { LanguageProvider } from './context/LanguageContext';
import { SwiperProvider, useMainSwiper } from './context/SwiperContext';

function AppContent() {
  const { setMainSwiper } = useMainSwiper();
  
  return (
    <div className="bg-black text-white selection:bg-neon-green selection:text-black h-screen overflow-hidden">
      <Navbar />

      <LazyMotion features={domAnimation}>
        <Swiper
          direction="vertical"
          modules={[Mousewheel, Keyboard, Parallax]}
          mousewheel={{ 
            releaseOnEdges: true,
            sensitivity: 2,
            thresholdDelta: 20,
            thresholdTime: 200
          }}
          keyboard={{ enabled: true }}
          speed={600}
          parallax={true}
          onSwiper={setMainSwiper}
          className="h-full w-full"
        >
          {/* Hero Section */}
          <SwiperSlide>
            <Hero />
          </SwiperSlide>

          {/* About Section */}
          <SwiperSlide>
            <About />
          </SwiperSlide>

          {/* Skills Section */}
          <SwiperSlide>
            <Skills />
          </SwiperSlide>

          {/* Tech Stack Section */}
          <SwiperSlide>
            <TechStack />
          </SwiperSlide>

          {/* Experience Section */}
          <SwiperSlide>
            <Experience />
          </SwiperSlide>

          {/* Work Section (Hiding as per previous request, but technically ready) */}
          {/* <SwiperSlide>
            <Work />
          </SwiperSlide> */}

          {/* Contact Section */}
          <SwiperSlide>
            <Contact />
          </SwiperSlide>

          {/* Footer Slide */}
          <SwiperSlide>
            <section className="h-screen flex items-center bg-black">
              <Footer />
            </section>
          </SwiperSlide>
        </Swiper>
      </LazyMotion>
    </div>
  );
}

function MainApp() {
  return (
    <LanguageProvider>
      <SwiperProvider>
        <AppContent />
      </SwiperProvider>
    </LanguageProvider>
  );
}

export default MainApp;
