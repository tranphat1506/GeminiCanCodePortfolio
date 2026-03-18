import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-4xl font-display italic text-white group cursor-default tracking-tighter">
              GCC<span className="text-neon-green text-glow-neon">.</span>
            </div>
            <div className="flex gap-6 mt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-green transition-colors">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em]">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
              <span>&copy; {new Date().getFullYear()} {t.footer.rights}</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-neon-green/30 rounded-full" />
              <span>{t.footer.designed_by}</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-neon-green text-black rounded-full shadow-[0_0_20px_rgba(0,233,100,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(0,233,100,0.5)] transition-all duration-300 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
