import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMapQuiz } from './components/SkillMapQuiz';
import { Programs } from './components/Programs';
import { CoachBio } from './components/CoachBio';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { GuideModal } from './components/GuideModal';
import { SkillId, SkillLevelId } from './types';

export const App: React.FC = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [preselectedSkill, setPreselectedSkill] = useState<SkillId | null>(null);
  const [preselectedLevel, setPreselectedLevel] = useState<Exclude<
    SkillLevelId,
    'base'
  > | null>(null);

  const handleSelectProgramFromMap = (
    skill: SkillId,
    level: Exclude<SkillLevelId, 'base'>
  ) => {
    setPreselectedSkill(skill);
    setPreselectedLevel(level);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f3f0ec] relative selection:bg-[#ef4255] selection:text-[#0b0b0e]">
      {/* Architectural Sticky Header */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      <main id="ss-main">
        {/* Asymmetric Editorial Hero + Route Strip */}
        <Hero onOpenGuide={() => setIsGuideOpen(true)} />

        {/* 3-Step Interactive Skill Map Workspace */}
        <SkillMapQuiz
          onOpenGuide={() => setIsGuideOpen(true)}
          onSelectProgramFromMap={handleSelectProgramFromMap}
        />

        {/* Editorial Contrast Paths: Coaching 1:1 vs J-Method Interactive Configurator */}
        <Programs
          preselectedSkill={preselectedSkill}
          preselectedLevel={preselectedLevel}
        />

        {/* Coach Bio (Jorge Daniel @jorgedaniel_sw) + Compact Editorial FAQ */}
        <CoachBio />
      </main>

      {/* Compact Architectural Footer with Agustín Pollán Signature */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Mobile Bottom Action Bar */}
      <MobileStickyBar />

      {/* Interactive Skill Map 14-Page Digital Guide Modal */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
};

export default App;
