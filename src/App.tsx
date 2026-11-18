import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { Methodology } from './components/Methodology';
import { SkillsShowcase } from './components/SkillsShowcase';
import { Programs } from './components/Programs';
import { CoachBio } from './components/CoachBio';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { LeadBanner } from './components/LeadBanner';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D0E] text-slate-100 relative">
      {/* Sticky Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Skill Map Diagnostic Tool (Lead Magnet flagship) */}
        <SkillMapQuiz />

        {/* The 3 Pillars of J-Method */}
        <Methodology />

        {/* Detailed Skills Roadmap (Handstand, Muscle Up, Front Lever, Planche) */}
        <SkillsShowcase />

        {/* Programs, Plans & Pricing */}
        <Programs />

        {/* Coach Bio: Jorge Daniel (@jorgedaniel_sw) */}
        <CoachBio />

        {/* Real Athlete Testimonials & Results */}
        <Testimonials />

        {/* Interactive FAQ */}
        <Faq />

        {/* Pre-footer Call To Action */}
        <LeadBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />

      {/* Floating Desktop WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
