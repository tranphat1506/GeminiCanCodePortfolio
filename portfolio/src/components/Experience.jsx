import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { lang, t } = useLanguage();
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const pageHeight = container.clientHeight;
      const newPage = Math.round(container.scrollTop / pageHeight);
      setCurrentPage(newPage);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage = (index) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: index * container.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className="h-screen snap-start bg-[#050505] relative overflow-hidden">
      {/* Internal Snap Container */}
      <div 
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory custom-scrollbar scroll-smooth"
        style={{ overscrollBehaviorY: 'auto' }}
      >
        {education.map((item, index) => (
          <div key={item.id} className="h-full w-full snap-start flex flex-col items-center justify-center p-6 md:p-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl w-full"
            >
              {index === 0 && (
                <h2 className="text-4xl md:text-7xl font-display uppercase italic mb-12 leading-tight">
                  <span className="text-white">{t.experience.title.split(' ')[0]}</span>{' '}
                  <span className="text-neon-green text-glow-neon">{t.experience.title.split(' ').slice(1).join(' ')}</span>
                </h2>
              )}
              
              <ExperienceItem item={item} lang={lang} t={t} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Internal Pagination Bullets */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {education.map((_, i) => (
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

const ExperienceItem = ({ item, lang, t }) => {
  const period = lang === 'vi' ? t.experience.period[item.id] || item.period : item.period;
  
  return (
    <div className="relative pl-8 md:pl-12 border-l border-white/10 py-4">
      <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 bg-neon-green rounded-full shadow-[0_0_15px_rgba(0,233,100,0.5)]" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-neon-green uppercase mb-4 tracking-widest">
            {period}
          </span>
          <h3 className="text-2xl md:text-4xl font-display text-white uppercase italic">{lang === 'vi' ? item.schoolVi : item.school}</h3>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg md:text-xl text-neon-green font-mono uppercase tracking-wider mb-2">
          {lang === 'vi' ? item.degreeVi : item.degree}
        </h4>
        <p className="text-gray-500 text-sm md:text-base italic">
          {lang === 'vi' ? item.majorVi : item.major}
        </p>
      </div>

      <ul className="space-y-4 max-w-2xl">
        {(lang === 'vi' ? item.achievementsVi : item.achievements).map((achievement, idx) => (
          <li key={idx} className="text-gray-400 text-sm md:text-base flex items-start gap-3 leading-relaxed">
            <span className="w-1.5 h-1.5 bg-neon-green/50 rounded-full mt-2 flex-shrink-0" />
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
