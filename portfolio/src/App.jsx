import React, { useState, useEffect, memo } from 'react';
import { projects, personalInfo, education } from './data/projects';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Menu, X, Rocket, Database, Code, Cpu, Award } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// --- Helper Components ---

const CyclingText = () => {
  const words = ["DIGITAL SYSTEMS", "AI APPLICATIONS", "SCALABLE BACKENDS", "DISTRIBUTED CORES", "AUTOMATION ENGINES"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-block min-w-[300px] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-neon-green font-normal not-italic tracking-tighter absolute inset-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0">{words[0]}</span>
    </span>
  );
};

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display flex items-center gap-1 will-change-transform"
        >
          GEMINI<span className="text-neon-green underline decoration-neon-green/50 underline-offset-4">CANCODE</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-neon-green transition-colors">
              {item}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-full hover:bg-neon-green transition-all group"
          >
            <Github size={20} className="group-hover:text-black" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center bg-[radial-gradient(circle_at_20%_30%,rgba(0,233,100,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,233,100,0.05)_0%,transparent_50%)]">
      <FloatingElement delay={0} className="top-1/4 left-1/4 w-96 h-96 bg-neon-green" />
      <FloatingElement delay={2} className="bottom-1/4 right-1/3 w-64 h-64 bg-neon-green" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 bg-neon-green/20 text-neon-green text-xs font-bold rounded-full border border-neon-green/30 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,233,100,0.2)]">
              {personalInfo.status}
            </span>
            <span className="w-12 h-[1px] bg-white/20" />
            <span className="text-gray-400 text-xs font-medium uppercase tracking-[0.3em]">
              BASED IN HCMC, VN
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl lg:text-[11rem] mb-12 leading-[0.85] font-display uppercase italic will-change-transform tracking-tighter"
          >
            I BUILD <br />
            <CyclingText />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-16 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            <a href="#projects" className="px-10 py-5 bg-neon-green text-black font-bold uppercase tracking-widest hover:shadow-[0_0_35px_rgba(0,233,100,0.6)] transition-all flex items-center gap-2 transform hover:scale-105 duration-300">
              EXPLORE WORKS <ChevronRight size={20} />
            </a>
            <a href="#contact" className="px-10 py-5 border border-neon-green/30 text-neon-green font-bold uppercase tracking-widest hover:bg-neon-green/5 transition-all backdrop-blur-sm">
              GET IN TOUCH
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={itemVariants}
    className="group relative will-change-scroll"
  >
    <TiltCard className="h-full">
      <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 -m-4 rounded-3xl blur-2xl" />
      
      <div className="bg-[#080808] border border-white/10 p-8 rounded-2xl h-full flex flex-col group-hover:border-neon-green/50 transition-all duration-500 glass-card-hover shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] uppercase tracking-widest text-neon-green font-bold bg-neon-green/10 px-3 py-1 border border-neon-green/20 rounded shadow-[0_0_10px_rgba(0,233,100,0.1)]">
            {project.type}
          </span>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="text-gray-500 hover:text-neon-green transition-colors">
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl mb-1 group-hover:text-neon-green transition-colors font-display italic">{project.title}</h3>
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-sm font-medium text-gray-300 italic">{project.role}</span>
          <span className="text-[10px] text-gray-500 font-mono tracking-widest">{project.period}</span>
        </div>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>

        <ul className="mb-6 space-y-2 flex-grow">
          {project.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="text-[11px] text-gray-400 flex gap-2 items-center">
              <span className="text-neon-green shadow-[0_0_5px_#00E964]">•</span>
              <span className="line-clamp-1">{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.slice(0, 4).map(tech => (
            <span key={tech} className="text-[9px] text-gray-300 border border-white/10 px-2 py-1 bg-white/5 uppercase tracking-tighter">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    { name: 'Core', icon: <Cpu />, skills: ['C#', 'TypeScript', 'Node.js', 'Python'] },
    { name: 'Frontend', icon: <Code />, skills: ['React', 'Next.js', 'Tailwind', 'Material UI'] },
    { name: 'Backend', icon: <Database />, skills: ['ASP.NET Core', 'Express', 'RabbitMQ', 'Redis'] },
    { name: 'Storage', icon: <Database />, skills: ['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'] },
  ];

  return (
    <section id="skills" className="py-32 bg-[#050505]" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl mb-8 font-display uppercase italic">Skill <span className="text-neon-green">Ecosystem</span></h2>
            <p className="text-gray-500 leading-relaxed mb-12">
              Focusing on building scalable, event-driven architectures and production-grade applications across multiple layers.
            </p>
            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
              <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Core Philosophy</h4>
              <p className="text-lg text-white font-medium italic">"Deep technical internals meet seamless user experiences."</p>
            </div>
          </div>

          <motion.div
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.name}
                variants={itemVariants}
                className="group relative"
              >
                <TiltCard className="p-8 border border-white/10 rounded-2xl bg-[#080808] hover:border-neon-green/50 transition-all duration-500 shadow-xl overflow-hidden glass-card-hover h-full">
                  <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -m-4 rounded-3xl blur-xl" />
                  
                  <div className="relative z-10 text-neon-green mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(group.icon, { size: 32 })}
                  </div>
                  <h3 className="text-xl mb-4 font-display uppercase italic tracking-wider">{group.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] rounded-full border border-white/5 uppercase tracking-widest">{s}</span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-32 border-t border-white/5" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-16 font-display uppercase italic text-center">Academic <span className="text-neon-green">Foundation</span></h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l border-neon-green/30"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-neon-green rounded-full shadow-[0_0_10px_#00E964]" />

              <div className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                  <span className="px-3 py-1 bg-white/5 text-neon-green text-xs font-mono rounded-full border border-white/10 uppercase italic">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xl text-gray-300 mb-2 font-medium">{edu.degree}</p>
                <p className="text-gray-500 mb-6 uppercase tracking-widest text-sm">{edu.major} • GPA: {edu.gpa}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {edu.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                      <span className="text-gray-400 text-sm">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-neon-green selection:text-black">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-32" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <TiltCard>
                <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-3xl group bg-white/[0.02] border border-white/10 group-hover:border-neon-green/50 transition-all duration-500 shadow-2xl">
                  {personalInfo.profileImage ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neon-green flex items-center justify-center text-9xl font-display italic text-black opacity-20 group-hover:opacity-40 transition-opacity">
                      {personalInfo.alias}
                    </div>
                  )}
                  <div className="absolute inset-4 border-2 border-neon-green/30 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-neon-green font-bold text-sm mb-1 italic tracking-tight">{personalInfo.name}</p>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">CS Year 4 • AI & Software • HIU</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <div>
              <h2 className="text-4xl md:text-5xl mb-12 font-display uppercase italic text-gradient-neon">Engineering with <br />Passion & Purpose</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I am a passionate Computer Science student specializing in Software Development and AI. My goal is to create impactful digital solutions that combine technical depth with user-friendly experiences.
                </p>
                <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/[0.02] rounded-2xl group hover:border-neon-green/30 transition-all">
                  <div className="w-16 h-16 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src="/images/hiu_logo.png" alt="HIU Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight mb-1 italic">Hong Bang International University</h4>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-mono">Official Academic Partner</p>
                  </div>
                </div>
                <p>
                  Throughout my journey at <strong>HIU</strong>, I've focused on mastering modern web stacks, AI integration, and core software principles. I enjoy the challenge of turning complex ideas into functional, high-performance applications that deliver real value.
                </p>
                <p className="text-white italic font-medium pt-4 border-t border-white/5 opacity-80">
                  "Building robust systems that translate vision into digital reality."
                </p>
              </div>
            </div>
          </div>
        </section>

        <Skills />

        <Education />

        <section id="projects" className="py-32" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 1000px' }}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl md:text-7xl font-display uppercase italic mb-4">Recent <br /><span className="text-neon-green">Exports</span></h2>
                <div className="flex gap-2 items-center text-gray-500 uppercase tracking-widest text-[10px]">
                  <span className="w-8 h-[1px] bg-white/20" /> 2024 - 2026 Production History
                </div>
              </motion.div>
              <p className="text-gray-500 hidden md:block max-w-xs text-sm italic">
                A selection of systems I've architected, focusing on scalability and technical depth.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </motion.div>
          </div>
        </section>



        <section id="contact" className="py-40 bg-neon-green text-black overflow-hidden relative" style={{ contain: 'paint' }}>
          <div className="absolute top-0 left-0 text-[300px] leading-none select-none pointer-events-none font-display opacity-[0.02] italic -mt-20">
            GEMINI
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl lg:text-9xl mb-12 font-display uppercase italic leading-none">Let's build <br />tomorrow.</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a href={`mailto:${personalInfo.email}`} className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                Contact Me <Mail size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-neon-green transition-all">
                LinkedIn
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-20">
              <div className="flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Status</p>
                <p className="font-bold text-sm tracking-widest">OPEN FOR HIRE</p>
              </div>
              <div className="w-[1px] h-12 bg-black/20" />
              <div className="flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Located</p>
                <p className="font-bold text-sm tracking-widest">HCMC, VN</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-xl font-display font-bold">GCC<span className="text-neon-green">.</span></span>
            <span className="text-gray-600 text-[10px] uppercase tracking-widest pt-1">© 2026 GeminiCanCode Portfolio</span>
          </div>

          <div className="flex gap-8">
            <a href={personalInfo.github} className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Github</a>
            <a href={personalInfo.linkedin} className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
            <a href="#" className="text-neon-green text-xs uppercase tracking-widest font-bold">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
