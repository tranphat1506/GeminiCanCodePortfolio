import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

// Swiper styles
import 'swiper/css';

import TiltCard from './ui/TiltCard';
import { containerVariants, itemVariants } from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';

const TechStack = () => {
  const { t } = useLanguage();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const techs = [
    { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: '.NET', url: 'https://dotnet.microsoft.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Python', url: 'https://www.python.org/', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'PHP', url: 'https://www.php.net/', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'React', url: 'https://react.dev/', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', url: 'https://nodejs.org/', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', url: 'https://expressjs.com/', icon: 'https://cdn.simpleicons.org/express/white' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'MUI', url: 'https://mui.com/', icon: 'https://cdn.simpleicons.org/mui/007FFF' },
    { name: 'Vite', url: 'https://vitejs.dev/', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Redis', url: 'https://redis.io/', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    { name: 'RabbitMQ', url: 'https://www.rabbitmq.com/', icon: 'https://cdn.simpleicons.org/rabbitmq/FF6600' },
    { name: 'Docker', url: 'https://www.docker.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Linux', url: 'https://www.linux.org/', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    { name: 'Postman', url: 'https://www.postman.com/', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Git', url: 'https://git-scm.com/', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', url: 'https://github.com/', icon: 'https://cdn.simpleicons.org/github/white' },
    { name: 'Hugging Face', url: 'https://huggingface.co/', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
    { name: 'TensorFlow', url: 'https://www.tensorflow.org/', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
  ];

  const pages = [
    techs.slice(0, 12),
    techs.slice(12)
  ];

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex);
  };

  const scrollToPage = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section id="stack" className="h-screen bg-black relative overflow-hidden">
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
        {pages.map((pageTechs, pageIdx) => (
          <SwiperSlide key={pageIdx}>
            <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-20 relative">
              {pageIdx === 0 && (
                <h2 className="text-3xl md:text-5xl lg:text-7xl mb-12 md:mb-16 font-display uppercase italic text-center leading-tight flex-shrink-0 z-20">
                  <span className="text-white">{t.stack.title.split(' ')[0]}</span>{' '}
                  <span className="text-neon-green text-glow-neon">
                    {t.stack.title.split(' ').length > 1 ? t.stack.title.split(' ').slice(1).join(' ') : t.stack.title}
                  </span>
                </h2>
              )}

              <div className="container mx-auto px-6 max-w-6xl w-full z-20">
                 <motion.div 
                  className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {pageTechs.map((tech) => (
                    <motion.a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="group relative h-24 md:h-40 lg:h-44"
                    >
                      <TiltCard className="p-4 md:p-8 border border-white/5 rounded-3xl bg-white/[0.03] hover:border-neon-green/30 transition-all duration-500 h-full flex flex-col items-center justify-center gap-2 md:gap-6 glass-card-hover overflow-hidden">
                        <div className="w-10 h-10 md:w-16 md:h-16 relative z-10 transition-transform duration-500 group-hover:scale-110">
                          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_12px_rgba(0,233,100,0.6)]" />
                        </div>
                        <span className="text-[10px] md:text-xs font-display uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center font-bold">
                          {tech.name}
                        </span>
                      </TiltCard>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Internal Pagination Bullets */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {pages.map((_, i) => (
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

export default TechStack;
