import { useState } from 'react';
import { motion, m } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

// Swiper styles
import 'swiper/css';

import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import { ArrowDown } from 'lucide-react';

const Work = () => {
  const { t } = useLanguage();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex);
  };

  const scrollToPage = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="h-screen bg-black relative overflow-hidden">
      <Swiper
        direction="vertical"
        nested={true}
        modules={[Mousewheel]}
        mousewheel={{ 
          releaseOnEdges: true,
          sensitivity: 2,
          thresholdDelta: 20
        }}
        speed={600}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="h-full w-full"
      >
        {/* Intro Page */}
        <SwiperSlide>
          <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-20 relative">
             <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-12">
                  <m.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-display uppercase italic mb-8 leading-tight">
                      <span className="text-white">{t.work.title.split(' ')[0]}</span>{' '}
                      <span className="text-neon-green text-glow-neon">{t.work.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                      <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-mono text-neon-green uppercase tracking-widest self-start font-bold">
                        {t.work.subtitle}
                      </span>
                      <p className="text-gray-500 max-w-md text-sm md:text-lg italic font-display">
                        {t.work.description}
                      </p>
                    </div>
                  </m.div>
                </div>
                
                <div className="mt-12">
                    <m.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="flex items-center gap-4 text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold cursor-pointer font-display"
                      onClick={() => scrollToPage(1)}
                    >
                      {t.work.explore} <span className="text-neon-green">↓</span>
                    </m.div>
                </div>
             </div>
          </div>
        </SwiperSlide>

        {/* Project Pages */}
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-20 relative">
              <div className="w-full max-w-5xl">
                <ProjectCard project={project} />
              </div>

              {/* If last project, show exit to contact */}
              {index === projects.length - 1 && (
                 <motion.button
                   onClick={scrollToContact}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
                 >
                   <span className="text-neon-green font-mono text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors">
                     {t.contact.title.split(' ').slice(0, 2).join(' ')} ↓
                   </span>
                   <motion.div
                     animate={{ y: [0, 5, 0] }}
                     transition={{ repeat: Infinity, duration: 1.5 }}
                   >
                     <ArrowDown size={16} className="text-neon-green" />
                   </motion.div>
                 </motion.button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Internal Pagination Bullets */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {[ {id: 'intro'}, ...projects].map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`w-1.5 transition-all duration-500 rounded-full ${
              currentPage === i ? 'h-10 bg-neon-green' : 'h-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
