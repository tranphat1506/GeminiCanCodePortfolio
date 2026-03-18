import { motion } from 'framer-motion';
import TiltCard from './ui/TiltCard';
import { containerVariants, itemVariants } from '../utils/animations';

const TechStack = () => {
  const techs = [
    // Languages & Runtimes
    { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: '.NET', url: 'https://dotnet.microsoft.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Python', url: 'https://www.python.org/', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'PHP', url: 'https://www.php.net/', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    
    // Web Frameworks & UI
    { name: 'React', url: 'https://react.dev/', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', url: 'https://nodejs.org/', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', url: 'https://expressjs.com/', icon: 'https://cdn.simpleicons.org/express/white' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'MUI', url: 'https://mui.com/', icon: 'https://cdn.simpleicons.org/mui/007FFF' },
    { name: 'Vite', url: 'https://vitejs.dev/', icon: 'https://cdn.simpleicons.org/vite/646CFF' },

    // Data & Messaging
    { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Redis', url: 'https://redis.io/', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    { name: 'RabbitMQ', url: 'https://www.rabbitmq.com/', icon: 'https://cdn.simpleicons.org/rabbitmq/FF6600' },

    // Tools & Infra
    { name: 'Docker', url: 'https://www.docker.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Linux', url: 'https://www.linux.org/', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    { name: 'Postman', url: 'https://www.postman.com/', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Git', url: 'https://git-scm.com/', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', url: 'https://github.com/', icon: 'https://cdn.simpleicons.org/github/white' },
    
    // AI & Science
    { name: 'Hugging Face', url: 'https://huggingface.co/', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
    { name: 'TensorFlow', url: 'https://www.tensorflow.org/', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
    { name: 'Scikit-learn', url: 'https://scikit-learn.org/', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
    { name: 'NumPy', url: 'https://numpy.org/', icon: 'https://cdn.simpleicons.org/numpy/013243' },
  ];

  return (
    <section id="stack" className="py-32 bg-[#050505]" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-16 font-display uppercase italic text-center">Tech <span className="text-neon-green">Stack</span></h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {techs.map((tech) => (
            <motion.a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative"
            >
              <TiltCard className="p-6 border border-white/10 rounded-2xl bg-[#080808] hover:border-neon-green/50 transition-all duration-500 h-full flex flex-col items-center justify-center gap-4 glass-card-hover overflow-hidden">
                <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 blur-xl -m-4 rounded-3xl" />
                
                <div className="w-12 h-12 relative z-10 p-1 group-hover:scale-110 transition-transform duration-500">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(0,233,100,0.5)]" />
                </div>
                
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </TiltCard>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
