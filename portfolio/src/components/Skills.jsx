import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { Brain, Database, Globe, Server, Terminal, Star, RotateCcw } from 'lucide-react';

const Skills = () => {
  const { lang, t } = useLanguage();
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const skillData = lang === 'vi' ? personalInfo.skillsVi : personalInfo.skills;

  const categoryIcons = {
    programming: <Terminal className="text-neon-green" size={24} />,
    frontend: <Globe className="text-neon-green" size={24} />,
    backend: <Server className="text-neon-green" size={24} />,
    dbInfra: <Database className="text-neon-green" size={24} />,
    devops: <RotateCcw className="text-neon-green" size={24} />,
    aiIntern: <Brain className="text-neon-green" size={24} />,
    softSkills: <Star className="text-neon-green" size={24} />,
  };

  const categories = Object.entries(skillData);
  const pages = [
    categories.slice(0, 3), // Core Dev
    categories.slice(3)    // Infra & Special & Soft
  ];

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
    <section id="skills" className="h-screen snap-start bg-black relative overflow-hidden">
      <div 
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory custom-scrollbar scroll-smooth"
        style={{ overscrollBehaviorY: 'auto' }}
      >
        {pages.map((pageCategories, pageIdx) => (
          <div key={pageIdx} className="h-full w-full snap-start flex flex-col items-center justify-center p-6 md:p-20 relative">
            {pageIdx === 0 && (
               <h2 className="text-3xl md:text-5xl lg:text-7xl mb-12 md:mb-16 font-display uppercase italic text-center leading-tight z-20">
                <span className="text-white">{t.about.skills_title.split(' ')[0]}</span>{' '}
                <span className="text-neon-green text-glow-neon">{t.about.skills_title.split(' ').slice(1).join(' ')}</span>
              </h2>
            )}
            
            <div className="container mx-auto max-w-6xl w-full z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {pageCategories.map(([key, list]) => (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="backdrop-blur-xl bg-white/[0.03] border border-white/5 p-6 md:p-10 rounded-3xl hover:border-neon-green/30 transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {categoryIcons[key]}
                      <h4 className="text-white font-display text-xl md:text-2xl uppercase italic tracking-wider">
                        {t.about.categories[key]}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {list.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 md:px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-gray-400 hover:text-neon-green transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default Skills;
