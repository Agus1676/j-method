import React, { useState } from 'react';
import { SKILLS_DATA, getWhatsAppLink } from '../data/content';
import { CheckCircle2, ChevronRight, Zap, Lightbulb, MessageCircle } from 'lucide-react';

export const SkillsShowcase: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState(SKILLS_DATA[0].id);

  const activeSkill = SKILLS_DATA.find((s) => s.id === activeSkillId) || SKILLS_DATA[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0c0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Matriz de Progresión</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            Las 4 Skills Clave del <span className="text-[#CCFF00]">J-METHOD</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Cada movimiento tiene una ruta anatómica y física estricta. Seleccioná una habilidad para ver sus fases y criterios de desbloqueo.
          </p>
        </div>

        {/* Skill Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {SKILLS_DATA.map((skill) => {
            const isActive = skill.id === activeSkillId;
            return (
              <button
                key={skill.id}
                onClick={() => setActiveSkillId(skill.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-lg shadow-[#CCFF00]/20 scale-105'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                {skill.name}
              </button>
            );
          })}
        </div>

        {/* Active Skill Detail Card */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/20">
                  {activeSkill.level}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  {activeSkill.tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-heading font-black text-white">
                {activeSkill.name}
              </h3>
            </div>

            <a
              href={getWhatsAppLink(`Hola Jorge! Quiero que me enseñes a desbloquear ${activeSkill.name} con el J-METHOD.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-[#CCFF00] text-white hover:text-black font-bold text-sm transition-all border border-white/15 hover:border-[#CCFF00]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quiero dominar {activeSkill.name}</span>
            </a>
          </div>

          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed max-w-3xl">
            {activeSkill.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stages / Roadmap (2 cols) */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                Fases de Progresión J-METHOD
              </h4>
              {activeSkill.stages.map((st, idx) => (
                <div
                  key={st.stage}
                  className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#CCFF00]/10 text-[#CCFF00] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#CCFF00]/25">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-[#CCFF00] uppercase">
                        {st.stage}
                      </span>
                      <span className="text-sm font-bold text-white">
                        • {st.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Side Prerequisites & Pro Tip */}
            <div className="space-y-6">
              {/* Prerequisites */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Requisitos Previos Recomendados
                </h4>
                <ul className="space-y-3">
                  {activeSkill.prerequisites.map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coach Pro Tip */}
              <div className="bg-[#CCFF00]/10 border border-[#CCFF00]/25 p-5 rounded-2xl">
                <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-bold uppercase tracking-wide mb-2">
                  <Lightbulb className="w-4 h-4 fill-current" />
                  <span>Tip de Oro del Coach Jorge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{activeSkill.keyTip}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
