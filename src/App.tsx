import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { BiomechanicsLab } from './components/BiomechanicsLab';
import { SkillRoadmap } from './components/SkillRoadmap';
import { SkillCalculator } from './components/SkillCalculator';
import { Programs } from './components/Programs';
import { Transformations } from './components/Transformations';
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

        {/* Biomechanical Analysis Lab: Live technique inspection & audio simulation */}
        <BiomechanicsLab />

        {/* Skill Progression Roadmap (Interactive milestone tree) */}
        <SkillRoadmap />

        {/* Interactive Readiness & Potential Calculator */}
        <SkillCalculator />

        {/* Editorial Contrast Coaching Modalities (Online 1:1 vs Intensivo 12 Semanas) + Method */}
        <Programs />

        {/* Real Athlete Transformations & Success Stories */}
        <Transformations />

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
