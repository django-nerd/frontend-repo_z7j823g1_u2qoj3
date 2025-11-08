import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center">
      <motion.div
        className="flex items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="h-2 w-2 rounded-full bg-[#FF6A3D] shadow-[0_0_10px_4px_rgba(255,106,61,0.6)]"
          animate={{ opacity: [0.4, 1, 0.4], y: [0, -4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
        />
        <span className="text-xs" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>Scroll</span>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
