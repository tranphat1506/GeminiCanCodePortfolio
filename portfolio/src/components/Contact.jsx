import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="h-screen snap-start flex items-center bg-neon-green text-black relative overflow-hidden py-20" style={{ contain: 'paint' }}>
      <div className="absolute top-0 left-0 text-[300px] leading-none select-none pointer-events-none font-display opacity-[0.02] italic -mt-20">
        GEMINI
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-9xl mb-12 font-display uppercase italic leading-[1.2] md:leading-tight">{t.contact.title.split(' ').slice(0, -1).join(' ')} <br />{t.contact.title.split(' ').slice(-1)}.</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href={`mailto:${personalInfo.email}`} className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
            {t.contact.email_me} <Mail size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2">
            {t.contact.linkedin} <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
