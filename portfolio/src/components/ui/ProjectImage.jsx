import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectImage = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const initials = alt
    ? alt
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'P';

  return (
    <div className={`relative overflow-hidden bg-[#0F0F0F] ${className}`}>
      {/* Fallback Display (Shown if error or no src) */}
      {(isError || !src) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0F0F0F] to-neon-green/10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E964_1px,transparent_1px)] [background-size:20px_20px]" />
          <span className="text-4xl md:text-6xl font-display font-black text-neon-green/20 tracking-tighter italic">
            {initials}
          </span>
          <div className="absolute bottom-4 left-4 flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-neon-green/30" />
             <div className="w-1.5 h-1.5 rounded-full bg-neon-green/20" />
             <div className="w-1.5 h-1.5 rounded-full bg-neon-green/10" />
          </div>
        </div>
      )}

      {/* Actual Image */}
      {src && !isError && (
        <>
          <AnimatePresence>
            {!isLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0F0F0F] z-10 animate-pulse flex items-center justify-center"
              >
                 <div className="w-8 h-8 border-2 border-neon-green/20 border-t-neon-green rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
        </>
      )}
    </div>
  );
};

export default ProjectImage;
