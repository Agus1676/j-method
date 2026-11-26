import React from 'react';
import { ContentProvider } from './context/ContentContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { CoachBio } from './components/CoachBio';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AdminPanel } from './components/AdminPanel';

export const App: React.FC = () => {
  return (
    <ContentProvider>
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

        {/* Compact Architectural Footer with Agustín Pollán Signature & Admin Trigger */}
        <Footer />

        {/* Mobile Bottom Action Bar */}
        <MobileStickyBar />

        {/* CMS Admin Management Panel */}
        <AdminPanel />
      </div>
    </ContentProvider>
  );
};

export default App;
