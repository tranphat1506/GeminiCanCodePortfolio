import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, t, switchLanguage } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Navbar only visible when in Hero section (first 100vh)
      // We use a small threshold (e.g., 20% of hero height) to trigger the hide
      setIsVisible(currentScrollY < heroHeight * 0.2);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.stack, href: "#stack" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.work, href: "#work" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-black/40 backdrop-blur-2xl border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-display font-black text-white group cursor-pointer tracking-tighter"
          onClick={scrollToTop}
        >
          GEMINI <span className="text-neon-green group-hover:text-white transition-colors">CANCODE</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="relative text-[11px] font-display font-light text-gray-400 hover:text-white transition-colors tracking-[0.2em] group/item uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-green transition-all duration-300 group-hover/item:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-white/10" />

          {/* Utils */}
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 font-display">
              <button 
                onClick={() => switchLanguage('en')}
                className={`px-2 py-0.5 text-[10px] font-light rounded-full transition-all ${lang === 'en' ? 'bg-neon-green text-black font-bold' : 'text-gray-500 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => switchLanguage('vi')}
                className={`px-2 py-0.5 text-[10px] font-light rounded-full transition-all ${lang === 'vi' ? 'bg-neon-green text-black font-bold' : 'text-gray-500 hover:text-white'}`}
              >
                VI
              </button>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full hover:bg-neon-green transition-all group/git"
            >
              <Github size={16} className="text-gray-400 group-hover/git:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => switchLanguage(lang === 'en' ? 'vi' : 'en')}
            className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full text-neon-green border border-neon-green/20 font-display text-[9px] font-light"
          >
              {lang.toUpperCase()}
          </button>
          <button className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-black/98 backdrop-blur-3xl border-b border-white/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-10 gap-8 text-center">
              {navItems.map((item, idx) => (
                <motion.a 
                  key={item.name} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-lg font-display font-light text-gray-400 hover:text-neon-green transition-colors tracking-widest uppercase italic"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex justify-center gap-8 pt-8 border-t border-white/5">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-green">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
