import React from 'react';
import { motion } from 'framer-motion';

const FlameUnderline = ({ className = '' }) => (
  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={`block h-1 origin-left rounded-full bg-[#FF6A3D] shadow-[0_0_24px_4px_rgba(255,106,61,0.35)] ${className}`}
  />
);

export default FlameUnderline;
