import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Image as ImageIcon, Activity, Smartphone, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut', delay } },
});

const SolutionSection = () => {
  return (
    <section
      className="relative w-full min-h-[95vh] bg-gradient-to-b from-[#0F2B66] to-[#07103A] text-white"
      aria-label="Our Solution — AarogyaAI"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 lg:px-8">
        {/* Left: Text content */}
        <div className="relative z-10">
          {/* Section title */}
          <motion.h2
            {...fadeUp(0.05)}
            className="text-3xl font-semibold sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui' }}
          >
            Our Solution — AarogyaAI
          </motion.h2>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
            className="mt-2 block h-1 origin-left rounded-full bg-[#FF6A3D]"
          />

          {/* Bullets */}
          <ul className="mt-6 space-y-3 text-white/90" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            {[
              (
                <span>
                  <strong className="text-white">AarogyaAI</strong> = Your Pocket Doctor for Rural Health
                </span>
              ),
              (
                <span>
                  Works through <span className="text-[#FF6A3D]">voice</span>, photo, or symptom input
                </span>
              ),
              'Gives instant risk level (low/medium/high)',
              (
                <span>
                  Works <span className="text-[#FF6A3D]">offline</span> and in local languages
                </span>
              ),
              'Supports ASHA & field health workers',
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-[15px] md:text-base"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 + idx * 0.1 }}
              >
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#FF6A3D] shadow-[0_0_10px_3px_rgba(255,106,61,0.5)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Subsection: How It Works */}
          <motion.h3
            {...fadeUp(0.25)}
            className="mt-10 text-xl font-semibold sm:text-2xl"
            style={{ fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui' }}
          >
            How It Works
          </motion.h3>

          <div className="mt-5 grid gap-3 text-white/90" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            {[
              'Input: User speaks or uploads image',
              'AI: Detects symptoms / analyzes photo',
              'Output: Risk level + guidance (Self-care / Doctor / Emergency)',
              'Offline mode: Data syncs later for government dashboards',
            ].map((t, i) => (
              <motion.div
                key={t}
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              >
                <span className="mt-1 h-1.5 w-6 rounded-full bg-[#FF6A3D]/70" />
                <span className="text-[15px] md:text-base">{t}</span>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            {...fadeUp(0.4)}
            className="mt-8 inline-block rounded-md bg-[#FF6A3D]/10 px-4 py-3 text-sm text-[#FF6A3D] shadow-[0_0_24px_rgba(255,106,61,0.15)] md:text-base"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            “The AI doesn’t just guess — it analyzes, scores risk, and helps detect outbreaks early.”
          </motion.p>
        </div>

        {/* Right: Animated phone + flow diagram */}
        <div className="relative">
          {/* soft flame glow behind phone */}
          <div className="pointer-events-none absolute -top-6 right-6 h-64 w-64 rounded-full bg-[#FF6A3D]/20 blur-3xl" />

          <div className="relative mx-auto w-[280px] sm:w-[320px] md:ml-auto">
            <PhoneMockup />

            {/* Flow: voice/photo -> AI -> result */}
            <FlowDiagram />
          </div>
        </div>
      </div>

      {/* bottom scroll pulse */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 text-white/70"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          <span className="h-2 w-2 rounded-full bg-[#FF6A3D] shadow-[0_0_10px_4px_rgba(255,106,61,0.6)]" />
          <span className="text-xs">Scroll</span>
        </motion.div>
      </div>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.35)]" />
    </section>
  );
};

const PhoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0E1E4F] to-[#0A153B] p-4 shadow-2xl shadow-[#000]/60"
      aria-label="Phone mockup"
    >
      {/* top notch */}
      <div className="mx-auto mb-3 h-5 w-24 rounded-b-2xl bg-black/50" />

      {/* screen content */}
      <div className="space-y-3 rounded-2xl bg-white/5 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/70" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>AarogyaAI</span>
          <Smartphone size={16} className="text-white/60" />
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-sm text-white/90" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            How can I help today?
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/80">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6A3D]/20">
                <Mic size={16} className="text-[#FF6A3D]" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <ImageIcon size={16} className="text-white/80" />
              </div>
            </div>
            <div className="rounded-md bg-[#FF6A3D] px-3 py-1 text-xs font-medium text-[#07103A]">Start</div>
          </div>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-xs text-white/70" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>Result</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-300" />
            <span className="text-sm text-white">Risk: Medium</span>
          </div>
          <p className="mt-1 text-xs text-white/80">Guidance: Visit a doctor in 24–48 hours.</p>
        </div>
      </div>

      {/* glow ring */}
      <div className="pointer-events-none absolute -inset-2 -z-[1] rounded-[28px] bg-gradient-to-r from-[#2E65F5]/20 via-transparent to-[#FF6A3D]/20 blur-xl" />
    </motion.div>
  );
};

const FlowDiagram = () => {
  // sequential arrow glow
  const arrowAnim = (delay) => ({
    initial: { opacity: 0.4 },
    whileInView: { opacity: 1, boxShadow: '0 0 16px rgba(255,106,61,0.5)' },
    transition: { duration: 0.35, delay },
    viewport: { once: true, margin: '-80px' },
  });

  return (
    <div className="mt-6 select-none" aria-label="Flow diagram">
      <div className="flex items-center justify-between text-white/80" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
        <motion.div className="flex items-center gap-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
          <Mic size={18} className="text-[#FF6A3D]" />
          <span className="text-sm">Input</span>
        </motion.div>
        <motion.div {...arrowAnim(0.15)} className="rounded-full bg-[#FF6A3D]/20 p-1">
          <ArrowRight size={16} className="text-[#FF6A3D]" />
        </motion.div>
        <motion.div className="flex items-center gap-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 }}>
          <Activity size={18} className="text-white" />
          <span className="text-sm">AI</span>
        </motion.div>
        <motion.div {...arrowAnim(0.3)} className="rounded-full bg-[#FF6A3D]/20 p-1">
          <ArrowRight size={16} className="text-[#FF6A3D]" />
        </motion.div>
        <motion.div className="flex items-center gap-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 }}>
          <Smartphone size={18} className="text-white" />
          <span className="text-sm">Result</span>
        </motion.div>
      </div>
      <p className="mt-3 text-xs text-white/70">Offline mode: Data syncs later for government dashboards</p>
    </div>
  );
};

export default SolutionSection;
