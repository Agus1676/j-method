import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { Programs } from './components/Programs';
import { CoachBio } from './components/CoachBio';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f3f0ec] relative selection:bg-[#ef4255] selection:text-[#0b0b0e]">
      {/* Architectural Sticky Header */}
      <Navbar />

      <main id="ss-main">
        {/* Asymmetric Editorial Hero + Route Strip */}
        <Hero />

        {/* 3-Step Interactive Technical Assessment & Biomechanical Dossier */}
        <SkillMapQuiz />

        {/* Editorial Contrast Coaching Modalities (Online 1:1 vs Presencial Salta) + Method */}
        <Programs />

        {/* Coach Bio (Jorge Daniel @jorgedaniel_sw) + Compact Editorial FAQ */}
        <CoachBio />
      </main>

      {/* Compact Architectural Footer with Agustín Pollán Signature */}
      <Footer />

      {/* Mobile Bottom Action Bar */}
      <MobileStickyBar />
    </div>
  );
};

export default App;
