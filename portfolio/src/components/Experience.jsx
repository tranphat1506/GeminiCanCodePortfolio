import { motion } from 'framer-motion';
import { education } from '../data/projects';
import { containerVariants, itemVariants } from '../utils/animations';

const Experience = () => {
  return (
    <section id="experience" className="py-32 border-t border-white/5" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-16 font-display uppercase italic text-center text-gradient-neon">Career <span className="text-white">& Experience</span></h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative pl-8 pb-16 border-l border-white/10 last:pb-0">
              <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-neon-green rounded-full shadow-[0_0_15px_#00e964]" />
              
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-6 md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 uppercase italic tracking-tight">{edu.school}</h3>
                  <p className="text-neon-green font-mono text-sm uppercase tracking-widest">{edu.degree} — {edu.major}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-gray-400 whitespace-nowrap whitespace-normal text-center">
                    {edu.period}
                  </span>
                  {edu.gpa && <p className="text-white font-bold mt-2 font-display">GPA: {edu.gpa}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {edu.achievements.map((ach, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                    <span className="text-gray-400 text-sm">{ach}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
