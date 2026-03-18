import { motion } from 'framer-motion';
import TiltCard from './ui/TiltCard';
import { personalInfo } from '../data/projects';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-neon-green/20 blur-[120px] rounded-full -m-20" />
            <TiltCard className="relative z-10 aspect-square rounded-3xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
              <img
                src="/images/profile_image.png"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-green">Status: Student Year 4 (HIU)</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-12 font-display uppercase italic text-gradient-neon">Engineering with <br />Passion & Purpose</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                {personalInfo.description}
              </p>

              <p>
                Throughout my journey at <strong>HIU</strong>, I've focused on mastering modern web stacks, AI integration, and core software principles. I enjoy the challenge of turning complex ideas into functional, high-performance applications that deliver real value.
              </p>
              <p className="text-white italic font-medium pt-4 border-t border-white/5 opacity-80">
                "Building robust systems that translate vision into digital reality."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
