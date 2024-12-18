import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlitchWords } from './GlitchWords';
import { ParticleField } from './ParticleField';

interface LoadingContainerProps {
  isVisible: boolean;
}

export function LoadingContainer({ isVisible }: LoadingContainerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <ParticleField />
          <GlitchWords />
        </motion.div>
      )}
    </AnimatePresence>
  );
}