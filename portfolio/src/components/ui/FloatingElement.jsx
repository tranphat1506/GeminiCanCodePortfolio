import { motion } from 'framer-motion';

const FloatingElement = ({ delay = 0, className }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.1, 0.2, 0.1]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute -z-10 pointer-events-none rounded-full blur-[60px] ${className}`}
  />
);

export default FloatingElement;
