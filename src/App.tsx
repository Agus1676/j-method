import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { Programs } from './components/Programs';
import { CoachBio } from './components/CoachBio';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D0E] text-slate-100 relative selection:bg-[#CCFF00] selection:text-black">
      {/* Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Skill Map Diagnostic Tool */}
        <SkillMapQuiz />

        {/* Programs & Pricing */}
        <Programs />

        {/* Coach Bio & Quick FAQ */}
        <CoachBio />
      </main>

      {/* Ultra Compact Footer with Agustín Pollán Signature */}
      <Footer />

      {/* Mobile Sticky Bar & Floating WhatsApp */}
      <MobileStickyBar />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
