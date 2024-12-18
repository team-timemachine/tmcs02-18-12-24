import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '../../utils/constants';

interface AnimatedWordsProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedWords({ text, className, style }: AnimatedWordsProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.p
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          className="opacity-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}