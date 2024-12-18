import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADING_WORDS } from '../../utils/constants';

export function GlitchWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % LOADING_WORDS.length);
    }, 500); // Faster word change (500ms)

    return () => clearInterval(interval);
  }, []);

  const word = LOADING_WORDS[currentIndex];

  return (
    <div className="relative">
      {/* Background glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute inset-0 ${word.color} blur-3xl opacity-30`}
        style={{ transform: 'scale(2)' }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={word.text}
          initial={{ opacity: 0, y: 20 }}
          animate={[
            { opacity: 1, y: 0 },
            { x: [-2, 2, -2, 2, 0], transition: { duration: 0.2 } }
          ]}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }} // Faster transitions
          className={`text-6xl font-bold ${word.color} relative`}
        >
          {/* Main text */}
          <span className="relative z-10">{word.text}</span>

          {/* Glitch layers */}
          <motion.span
            className="absolute inset-0 z-0"
            animate={{
              x: [-2, 2, -2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: 2,
              ease: "linear"
            }}
            style={{ 
              textShadow: '2px 0 currentColor, -2px 0 currentColor',
              clipPath: 'inset(10% 0 90% 0)'
            }}
          >
            {word.text}
          </motion.span>

          <motion.span
            className="absolute inset-0 z-0"
            animate={{
              x: [2, -2, 2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: 2,
              ease: "linear"
            }}
            style={{ 
              textShadow: '-2px 0 currentColor, 2px 0 currentColor',
              clipPath: 'inset(85% 0 15% 0)'
            }}
          >
            {word.text}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Scanning line */}
      <motion.div
        animate={{
          y: [-20, 20],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`absolute w-full h-0.5 ${word.color}`}
        style={{ filter: 'blur(1px)' }}
      />
    </div>
  );
}