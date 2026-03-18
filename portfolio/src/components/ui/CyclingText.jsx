import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const CyclingText = () => {
  const { lang } = useLanguage();
  const wordsEN = ["WEB APPLICATIONS", "MOBILE SOLUTIONS", "AI INTEGRATIONS", "SCALABLE BACKENDS", "CRM & ERP SYSTEMS"];
  const wordsVI = ["ỨNG DỤNG WEB", "GIẢI PHÁP MOBILE", "TÍCH HỢP AI", "SCALABLE BACKENDS", "HỆ THỐNG CRM & ERP"];
  
  const words = lang === 'vi' ? wordsVI : wordsEN;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[1.3em] min-w-full md:min-w-[800px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-neon-green font-normal not-italic tracking-tighter absolute left-0 top-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default CyclingText;
