import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden" aria-label="Hero cover">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07103A]/40 via-[#0F2B66]/30 to-[#07103A]" />
      <div className="relative z-10 flex h-full items-end justify-start p-8 md:p-12">
        <div className="max-w-3xl text-left">
          <h1
            className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui' }}
          >
            AarogyaAI
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            Technology meeting care — building equitable access to healthcare for every village.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07103A] to-transparent" />
    </section>
  );
};

export default HeroCover;
