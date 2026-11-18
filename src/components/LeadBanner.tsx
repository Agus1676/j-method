import React from 'react';
import { ArrowRight, MessageCircle, Compass, Zap } from 'lucide-react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const LeadBanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#161b1e] via-[#121619] to-[#0e1214] border-2 border-[#CCFF00]/30 p-8 sm:p-14 overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-[#CCFF00]/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFF00]/15 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4" />
              <span>Empezá Hoy Mismo</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-5 leading-tight">
              ¿Listo Para Desbloquear tu Primera <span className="text-[#CCFF00]">Skill Real</span>?
            </h2>

            <p className="text-slate-300 text-sm sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              No dejes pasar otro mes practicando sin estructura. Hacé el test de nivel o escribile a Jorge Daniel directamente para armar tu plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#skill-map"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#CCFF00] text-black font-extrabold text-base hover:bg-[#bbf000] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#CCFF00]/25"
              >
                <Compass className="w-5 h-5" />
                <span>Hacer Skill Map Gratis</span>
              </a>

              <a
                href={getWhatsAppLink('Hola Jorge! Quiero empezar a entrenar con el J-METHOD. ¿Cómo arrancamos?')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/15 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#CCFF00] fill-current" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
