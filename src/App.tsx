import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { CoachBio } from './components/CoachBio';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f3f0ec] relative selection:bg-[#ef4255] selection:text-[#0b0b0e]">
      {/* Architectural Sticky Header */}
      <Navbar />

      <main id="ss-main">
        {/* Asymmetric Editorial Hero */}
        <Hero />

        {/* 3-Step Interactive Technical Assessment & Biomechanical Dossier */}
        <SkillMapQuiz />

        {/* Coach Bio (Calisrama Style) + Integrated 1:1 Coaching Offer + Compact FAQ */}
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
