import React from 'react';
import HeroCover from './components/HeroCover';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesUSPSection from './components/FeaturesUSPSection';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#07103A] text-white">
      {/* Hero with Spline cover */}
      <HeroCover />

      {/* Problem section (split layout with animated map) */}
      <ProblemSection />

      {/* Solution section with split layout and phone mockup */}
      <SolutionSection />

      {/* Features & USP section */}
      <FeaturesUSPSection />

      {/* Global scroll indicator near bottom of viewport */}
      <div className="relative">
        <ScrollIndicator />
      </div>
    </div>
  );
}

export default App;
