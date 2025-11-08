import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const bullets = [
  '65 % of Indians live in rural areas with doctor shortage',
  '1 doctor for every 10 000 + people in villages',
  'Delayed detection → preventable diseases & deaths',
  'Digital health apps exist — but not in local languages or offline',
];

const ProblemSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <section
      className="relative w-full min-h-[85vh] bg-gradient-to-b from-[#07103A] to-[#0F2B66] text-white"
      aria-label="The Problem We're Solving"
    >
      {/* Split layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        {/* Left: Text */}
        <div className="relative z-10">
          {/* Title with flame underline */}
          <div className="inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl font-semibold sm:text-4xl md:text-5xl"
              style={{ fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui' }}
            >
              The Problem We’re Solving
            </motion.h2>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="mt-2 block h-1 origin-left rounded-full bg-[#FF6A3D]"
            />
          </div>

          {/* Bullets */}
          <ul className="mt-8 space-y-4" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            {bullets.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={controls}
                variants={{ visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90 md:text-base"
              >
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#FF6A3D] shadow-[0_0_12px_2px_rgba(255,106,61,0.6)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Closing line typing effect */}
          <TypingQuote className="mt-8 max-w-xl text-white/90" />
        </div>

        {/* Right: Animated faint map */}
        <div className="relative h-[320px] w-full md:h-auto">
          <GlowingMap />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex items-center gap-2 text-white/70" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
          <motion.span
            className="h-2 w-2 rounded-full bg-[#FF6A3D] shadow-[0_0_10px_4px_rgba(255,106,61,0.6)]"
            animate={{ opacity: [0.4, 1, 0.4], y: [0, -4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
          <span className="text-xs">Scroll</span>
        </div>
      </div>

      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 ring-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.35)]" />
    </section>
  );
};

// Faint animated map of India using gradients and masks
const GlowingMap = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Abstract map silhouette via SVG path (not geographically precise, stylistic) */}
      <svg
        viewBox="0 0 400 500"
        className="h-full w-full opacity-70"
        aria-hidden
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#2E65F5" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#0F2B66" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#07103A" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="outline" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5AA0FF" />
            <stop offset="100%" stopColor="#FF6A3D" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>

        {/* Glow background */}
        <motion.circle
          cx="200"
          cy="250"
          r="180"
          fill="url(#glow)"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Stylized India outline path (abstract) */}
        <motion.path
          d="M236 68l-14 22 10 14-8 10-18 4-6 12 8 10-10 10 6 8-6 8-2 18-12 12-4 18 12 10-6 10 6 12-10 18 16 10 10 18 16 12 20-6 10-18 18-10 10-14 12-14 10-22-6-20-10-12 2-14-8-10 6-12-12-14-16-6-18-10-16-10z"
          fill="none"
          stroke="url(#outline)"
          strokeWidth="1.5"
          filter="url(#blur)"
          animate={{ pathLength: [0, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Spark pulses */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + Math.sin(i) * 80}
            cy={250 + Math.cos(i) * 60}
            r="2"
            fill="#FF6A3D"
            animate={{ opacity: [0.2, 1, 0.2], r: [1.5, 2.5, 1.5] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeOut', delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
};

// Quote typing component
const TypingQuote = ({ className = '' }) => {
  const text = '“The story we shared isn’t isolated — it represents millions of families who struggle daily because healthcare access ends where the road does.”';
  const [display, setDisplay] = React.useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={`mt-10 border-l-2 border-[#FF6A3D]/70 pl-4 text-sm italic tracking-wide md:text-base ${className}`}>
      {display}
    </p>
  );
};

export default ProblemSection;
