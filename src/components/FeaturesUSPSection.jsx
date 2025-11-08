import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Smartphone, CloudOff, Stethoscope, Sparkles } from 'lucide-react';
import FlameUnderline from './FlameUnderline';

const features = [
  {
    icon: Languages,
    title: "Speaks Bharat’s Language",
    desc: 'Understands local dialects, accents, and even non-medical words — breaking barriers of literacy and language.',
  },
  {
    icon: Smartphone,
    title: 'Works Anywhere, on Any Phone',
    desc: 'Runs smoothly on low-end devices — healthcare that fits in every pocket.',
  },
  {
    icon: CloudOff,
    title: 'Offline-First Intelligence',
    desc: 'Works without internet and syncs automatically when online — built for Bharat’s toughest terrains.',
  },
  {
    icon: Stethoscope,
    title: 'ASHA & Health Worker Assist Mode',
    desc: 'Empowers frontline workers with instant AI support for faster, smarter diagnosis.',
  },
  {
    icon: Sparkles,
    title: 'Learns From Every Village',
    desc: 'Constantly improves with every interaction — the more it serves, the smarter it gets.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: 0.15 + i * 0.12 },
  }),
};

const FeaturesUSPSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0F2B66] to-[#07103A] py-20 text-white md:py-28"
      aria-label="Key Features & Unique Selling Points (USP)"
    >
      {/* Background abstract India map lines with gentle pulse */}
      <div className="pointer-events-none absolute inset-0">
        <AbstractIndiaMap />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl font-semibold sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui' }}
          >
            Key Features & Unique Selling Points (USP)
          </motion.h2>
          <div className="mx-auto mt-3 w-48">
            <FlameUnderline />
          </div>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            Built for Bharat — intelligent, resilient, and human-centered.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-sm transition-colors"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 28px rgba(255,106,61,0.25), inset 0 0 0 1px rgba(255,106,61,0.6)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A3D]/15 ring-1 ring-[#FF6A3D]/30">
                    <f.icon className="text-[#FF6A3D]" size={20} />
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui' }}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-[15px] leading-relaxed text-white/85"
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
                >
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-12 max-w-xl text-center text-sm text-white/80 sm:text-base"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          “Smart enough for cities. Simple enough for villages.”
        </motion.p>
      </div>

      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.35)]" />
    </section>
  );
};

const AbstractIndiaMap = () => {
  // Faint pulsing grid/lines shaped like an abstract India outline overlay
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 1200 800"
        className="h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="gridLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E65F5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0.18" />
          </linearGradient>
          <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2E65F5" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#0F2B66" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#07103A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft center glow that pulses every ~5s */}
        <motion.circle
          cx="600"
          cy="400"
          r="240"
          fill="url(#pulseGlow)"
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Abstract outline path of India (stylized) */}
        <motion.path
          d="M705 150l-30 40 22 28-16 18-38 8-10 22 16 20-20 18 12 14-12 14-4 34-24 24-6 34 26 20-12 18 12 20-18 32 28 18 18 32 28 22 36-10 18-30 30-18 18-22 20-24 18-42-10-36-18-22 4-26-14-18 10-22-20-24-26-10-32-18-28-18z"
          fill="none"
          stroke="url(#gridLine)"
          strokeWidth="1"
          strokeDasharray="6 10"
          initial={{ strokeDashoffset: 80, opacity: 0.4 }}
          animate={{ strokeDashoffset: [80, 0, 80], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* horizontal connection lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1={200}
            x2={1000}
            y1={140 + i * 60}
            y2={140 + i * 60}
            stroke="url(#gridLine)"
            strokeWidth="0.5"
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FeaturesUSPSection;
