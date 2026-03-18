import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectImage from './ui/ProjectImage';

const ProjectCard = ({ project }) => {
  const { lang, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group w-full h-[85vh] md:h-[75vh] max-w-6xl mx-auto"
    >
      <div className="bg-[#080808]/80 backdrop-blur-3xl border border-white/5 rounded-[40px] overflow-hidden hover:border-neon-green/30 transition-all duration-700 flex flex-col md:flex-row h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative">
        
        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Project Image - Left Side (Desktop) */}
        <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden flex-shrink-0">
          <ProjectImage 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full"
          />
          
          {/* Tags Overlay */}
          <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
            {project?.tags?.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-4 py-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] md:text-xs font-display text-white uppercase font-bold tracking-widest leading-none">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content - Right Side (Desktop) */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col h-full bg-gradient-to-br from-transparent to-white/[0.02] relative z-20">
          <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neon-green font-display font-black border-l-2 border-neon-green pl-4">
                {lang === 'vi' ? project.typeVi : project.type}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-display uppercase italic mb-4 text-white group-hover:text-neon-green transition-colors leading-[1.1] md:leading-none tracking-tighter">
              {project.title}
            </h3>
            
            <p className="text-gray-500 text-xs md:text-sm font-display uppercase tracking-[0.3em] font-bold mb-8 opacity-60">
              {lang === 'vi' ? project.roleVi : project.role}
            </p>
  
            <div className="space-y-8">
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-display font-medium">
                {lang === 'vi' ? project.descriptionVi : project.description}
              </p>
      
              <div className="pt-8 border-t border-white/5 hidden md:block">
                <h4 className="text-xs uppercase tracking-[0.4em] text-gray-600 mb-6 font-black italic">{lang === 'vi' ? 'Giải pháp & Kết quả' : 'Impact & Results'}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {(lang === 'vi' ? project.highlightsVi : project.highlights).slice(0, 3).map((h, i) => (
                    <div key={i} className="text-sm text-gray-400 flex items-center gap-4 group/item">
                       <ChevronRight size={14} className="text-neon-green/40 group-hover/item:text-neon-green transition-colors" />
                       <span className="group-hover/item:text-gray-200 transition-colors">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
 
          {/* Footer Links */}
          <div className="flex gap-8 pt-10 mt-auto flex-shrink-0 border-t border-white/5">
            {project.github && (
              <a 
                href={project.github} 
                className="group/link flex items-center gap-3 text-xs font-display uppercase tracking-widest text-gray-500 hover:text-white transition-all font-black italic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="text-gray-600 group-hover/link:text-neon-green transition-colors" />
                <span>CODE</span>
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                className="group/link flex items-center gap-3 text-xs font-display uppercase tracking-widest text-gray-500 hover:text-white transition-all font-black italic ml-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LIVE PROJECT</span>
                <ExternalLink size={18} className="text-gray-600 group-hover/link:text-neon-green transition-colors " />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
