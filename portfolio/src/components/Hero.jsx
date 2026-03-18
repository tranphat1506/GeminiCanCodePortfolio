import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';
import FloatingElement from './ui/FloatingElement';
import CyclingText from './ui/CyclingText';
import { containerVariants, itemVariants } from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="h-screen snap-start flex items-center justify-center relative overflow-hidden bg-black md:pb-20" style={{ contain: 'paint' }}>
      <FloatingElement className="top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-neon-green/10" delay={0} />
      <FloatingElement className="bottom-1/4 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-blue-500/5" delay={2} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <span className="w-8 md:w-12 h-[1px] bg-neon-green" />
            <span className="text-neon-green font-display text-[10px] md:text-sm uppercase tracking-[0.3em]">
              {lang === 'vi' ? personalInfo.roleVi : personalInfo.role}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl lg:text-9xl font-display leading-[1.2] md:leading-[1] uppercase italic mb-8 md:mb-12 -ml-1 flex flex-col items-start"
          >
            <span className="text-white">{t.hero.i_build}</span>
            <div className="h-[1.2em] md:h-[1em] relative text-neon-green text-glow-neon">
              <CyclingText />
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm md:text-xl max-w-2xl mb-8 md:mb-12 leading-relaxed"
          >
            {lang === 'vi' ? personalInfo.descriptionVi : personalInfo.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <a
              href="#work"
              className="px-6 md:px-8 py-3 md:py-4 bg-neon-green text-black font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all text-center"
            >
              {t.hero.view_work}
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:border-neon-green hover:text-neon-green transition-all text-center"
            >
              {t.hero.contact}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 rotate-90 mb-8 whitespace-nowrap font-display font-bold">
          {t.hero.scroll}
        </span>
        <div className="w-[1px] h-20 bg-linear-to-b from-neon-green/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
