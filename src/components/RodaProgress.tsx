import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy } from 'lucide-react';

interface RodaProgressProps {
  language: string;
  translations: any;
}

export const RodaProgress: React.FC<RodaProgressProps> = ({ language, translations }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPos = window.scrollY;
      const maxScroll = docHeight - winHeight;

      if (maxScroll <= 0) return;

      if (scrollPos >= maxScroll - 10) {
        setHasReachedBottom(true);
      }

      let currentProgress = 0;
      if (!hasReachedBottom) {
        currentProgress = (scrollPos / maxScroll) * 50;
      } else {
        // Back to top journey
        const reverseProgress = ((maxScroll - scrollPos) / maxScroll) * 50;
        currentProgress = 50 + reverseProgress;
      }

      setScrollProgress(Math.min(currentProgress, 100));

      if (hasReachedBottom && scrollPos < 10 && currentProgress > 99) {
        setShowCelebration(true);
      } else {
        setShowCelebration(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasReachedBottom]);

  // Messages for different languages
  const celebrationMsg = language === 'PT' 
    ? 'Axé! Sua primeira Roda completa!' 
    : language === 'EN'
    ? 'Axé! Your first successful Roda play!'
    : 'Axé! Dein erster erfolgreicher Roda-Play!';

  const subMsg = language === 'PT'
    ? 'Energia e movimento!'
    : language === 'EN'
    ? 'Energy and movement!'
    : 'Energie und Bewegung!';

  return (
    <>
      <div className="fixed bottom-8 left-8 z-50 pointer-events-none">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-brand-dark/80 stroke-white/10"
              strokeWidth="4"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-brand-primary"
              strokeWidth="4"
              strokeDasharray="100"
              strokeDashoffset={100 - scrollProgress}
              style={{ pathLength: scrollProgress / 100 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto">
            <span className="text-[10px] sm:text-xs font-bold text-brand-primary leading-none">
              {Math.round(scrollProgress)}%
            </span>
            <span className="text-[6px] sm:text-[8px] uppercase tracking-tighter text-white/50 mt-1">
              {hasReachedBottom ? 'Volta' : 'Roda'}
            </span>
          </div>

          {/* Icon decoration */}
          <motion.div 
            animate={{ 
              rotate: hasReachedBottom ? 180 : 0,
              scale: hasReachedBottom ? 1.2 : 1
            }}
            className="absolute -top-2 -right-2 bg-brand-secondary p-1 rounded-full shadow-lg border border-white/20"
          >
            <Sparkles size={10} className="text-brand-dark" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] glass-card px-8 py-6 rounded-[2rem] border-2 border-brand-primary shadow-2xl flex flex-col items-center text-center gap-3 backdrop-blur-xl"
          >
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center">
              <Trophy size={32} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary uppercase tracking-tight">{celebrationMsg}</h3>
              <p className="text-sm text-[var(--text-muted)] italic mt-1">{subMsg}</p>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowCelebration(false);
                setHasReachedBottom(false);
                setScrollProgress(0);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-2 px-6 py-2 bg-brand-primary text-brand-dark font-bold rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Salve!
            </motion.button>

            {/* Confetti-like particles (simple) */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100],
                    x: [0, (i - 3) * 20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="absolute bottom-0 left-1/2 w-1 h-1 bg-brand-secondary rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
