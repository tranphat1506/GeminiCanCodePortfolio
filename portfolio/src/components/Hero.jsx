import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';
import FloatingElement from './ui/FloatingElement';
import CyclingText from './ui/CyclingText';
import { containerVariants, itemVariants } from '../utils/animations';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" style={{ contain: 'paint' }}>
      <FloatingElement className="top-1/4 left-1/4 w-96 h-96 bg-neon-green/10" delay={0} />
      <FloatingElement className="bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5" delay={2} />
      <FloatingElement className="top-1/2 left-1/2 w-64 h-64 bg-purple-500/5" delay={1} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex gap-4 items-center mb-8">
            <span className="w-12 h-[1px] bg-neon-green" />
            <span className="text-neon-green font-mono uppercase tracking-[0.3em] text-xs">Available for selective projects</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[0.85] uppercase italic mb-12 -ml-1 will-change-transform flex flex-col items-start"
          >
            <span className="text-white">I Build</span>
            <div className="h-[1.1em] md:h-[0.85em] relative">
              <CyclingText />
            </div>
          </motion.h1>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              {personalInfo.description}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-12 items-center">
                <div className="flex flex-col">
                  <span className="text-4xl font-display text-white italic">0 - 1</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">Year Experience</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#work" className="px-8 py-4 bg-neon-green text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                  View Work
                </a>
                <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
