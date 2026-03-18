import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import { itemVariants } from '../utils/animations';

const ProjectCard = ({ project }) => (
  <motion.div variants={itemVariants} className="group h-full select-none cursor-default">
    <TiltCard className="p-8 border border-white/10 rounded-3xl bg-white/[0.01] hover:border-neon-green/40 transition-all duration-700 h-full flex flex-col glass-card-hover relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
        <ExternalLink className="text-neon-green" size={20} />
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] uppercase tracking-widest text-neon-green font-mono px-3 py-1 border border-neon-green/20 bg-neon-green/5 rounded-full">
            {project.type}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
            {project.period}
          </span>
        </div>
        <h3 className="text-3xl font-display uppercase italic text-white group-hover:text-neon-green transition-colors leading-none mb-2 underline decoration-white/0 group-hover:decoration-neon-green/50 underline-offset-8">
          {project.title}
        </h3>
        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-6">{project.role}</p>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      <div className="space-y-6">
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 font-bold">Key Highlights</h4>
          <ul className="space-y-2">
            {project.highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="text-[11px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 bg-neon-green rounded-full mt-1.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.stack.map(s => (
              <span key={s} className="px-2 py-1 bg-white/5 text-[9px] text-gray-500 rounded uppercase tracking-wider font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

export default ProjectCard;
