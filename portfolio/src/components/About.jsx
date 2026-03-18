import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="h-screen snap-start flex flex-col md:flex-row bg-[#050505] relative overflow-hidden group">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0 md:relative md:w-1/2 md:h-full transition-all duration-1000">
        <img
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        {/* Mobile/Tablet Glassy Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/20 z-10" />
      </div>

      {/* Content Side */}
      <div className="relative z-20 w-full h-full md:w-1/2 flex items-center px-6 md:px-16 lg:px-24 py-20">
        <div className="max-h-full overflow-y-auto pr-2 custom-scrollbar">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 md:bg-transparent p-6 md:p-0 rounded-3xl border border-white/10 md:border-none max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl mb-6 md:mb-12 font-display uppercase italic leading-tight">
              <span className="text-white">{t.about.title.split(' ').slice(0, 2).join(' ')}</span>{' '}
              <span className="text-neon-green text-glow-neon">{t.about.title.split(' ').slice(2).join(' ')}</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-200 md:text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
              <p>{t.about.bio_p1}</p>
              <p>{t.about.bio_p2}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-mono text-xs md:text-sm italic tracking-tighter opacity-80">
                  "{t.about.quote}"
                </p>
              </div>
            </div>

            {/* Scroll Down Hint to Skills */}
            <motion.button
              onClick={scrollToSkills}
              whileHover={{ y: 5 }}
              className="flex items-center gap-4 text-neon-green font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold group"
            >
              <span className="relative">
                {t.about.view_skills}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
              <div className="w-10 h-10 rounded-full border border-neon-green/30 flex items-center justify-center group-hover:border-neon-green transition-colors">
                <ChevronDown size={20} className="animate-bounce" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Blur for Desktop */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-neon-green/10 blur-[120px] rounded-full hidden md:block" />
    </section>
  );
};

export default About;
