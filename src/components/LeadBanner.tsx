import React from 'react';
import { MessageCircle, Compass, Zap } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const LeadBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#161b1e] via-[#121619] to-[#0e1214] border border-[#CCFF00]/25 p-6 sm:p-10 overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#CCFF00]/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/15 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Empezá Hoy Mismo</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight mb-3 leading-tight">
              ¿Listo Para Desbloquear tu Primera <span className="text-[#CCFF00]">Skill Real</span>?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              No dejes pasar otro mes practicando sin estructura. Hacé el test de nivel o escribile a Jorge Daniel directamente para armar tu plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#skill-map"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#CCFF00] text-black font-extrabold text-sm hover:bg-[#bbf000] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#CCFF00]/20"
              >
                <Compass className="w-4 h-4" />
                <span>Hacer Skill Map Gratis</span>
              </a>

              <a
                href={getWhatsAppLink('Hola Jorge! Quiero empezar a entrenar con el J-METHOD. ¿Cómo arrancamos?')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#CCFF00] fill-current" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
