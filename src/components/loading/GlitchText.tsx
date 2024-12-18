import React from 'react';
import { motion } from 'framer-motion';
import { LOADING_WORDS } from '../../utils/constants';
import { LoadingParticles } from './LoadingParticles';

interface GlitchTextProps {
  isVisible: boolean;
}

export function GlitchText({ isVisible }: GlitchTextProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <LoadingParticles />
      
      {/* Circular loading indicator */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-32 h-32 rounded-full border-t-2 border-r-2 border-blue-500 mb-8"
      />

      {/* Loading words */}
      <div className="flex gap-4">
        {LOADING_WORDS.map((word, index) => (
          <LoadingWord
            key={word.text}
            text={word.text}
            color={word.color}
            delay={index * 0.2}
          />
        ))}
      </div>

      {/* Scanning line effect */}
      <motion.div
        animate={{
          y: [-20, 20],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        style={{ filter: 'blur(4px)' }}
      />
    </motion.div>
  );
}

interface LoadingWordProps {
  text: string;
  color: string;
  delay: number;
}

function LoadingWord({ text, color, delay }: LoadingWordProps) {
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    show: {
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, -20],
      scale: [0.8, 1.2, 1.2, 0.8],
      filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
      transition: {
        duration: 2,
        times: [0, 0.3, 0.7, 1],
        repeat: Infinity,
        delay,
      },
    },
  };

  return (
    <motion.span
      variants={wordVariants}
      className={`text-4xl font-bold ${color} filter drop-shadow-glow`}
      style={{
        textShadow: `0 0 10px currentColor, 0 0 20px currentColor`,
      }}
    >
      {text}
    </motion.span>
  );
}