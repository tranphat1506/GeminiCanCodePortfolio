import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/projects';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400">
        <p className="text-sm font-mono tracking-widest uppercase">© 2026 {personalInfo.name}</p>
        <div className="flex gap-8">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
            <Github size={14} /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="#top" className="hover:text-neon-green transition-colors text-xs uppercase tracking-widest font-bold">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
