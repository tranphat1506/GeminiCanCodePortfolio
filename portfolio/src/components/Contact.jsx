import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-40 bg-neon-green text-black overflow-hidden relative flex-grow flex items-center" style={{ contain: 'paint' }}>
      <div className="absolute top-0 left-0 text-[300px] leading-none select-none pointer-events-none font-display opacity-[0.02] italic -mt-20">
        GEMINI
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-9xl mb-12 font-display uppercase italic leading-none">Let's build <br />tomorrow.</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href={`mailto:${personalInfo.email}`} className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
            Contact Me <Mail size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2">
            LinkedIn <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
