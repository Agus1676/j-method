import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA, getWhatsAppLink } from '../data/content';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0c0e10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolvé tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Todo lo que necesitás saber antes de empezar a entrenar con Jorge Daniel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#CCFF00]/10 border-[#CCFF00]/30 text-[#CCFF00]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="text-center p-8 rounded-3xl glass-panel border border-white/10 max-w-xl mx-auto">
          <h4 className="text-lg font-bold text-white mb-2">
            ¿Tenés alguna otra pregunta puntual?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-5">
            Escribime directo a mi WhatsApp personal y te saco las dudas antes de tomar cualquier decisión.
          </p>
          <a
            href={getWhatsAppLink('Hola Jorge! Tengo una duda sobre el método y los entrenamientos antes de sumarme.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CCFF00] text-black font-extrabold text-sm hover:bg-[#bbf000] transition-all shadow-lg shadow-[#CCFF00]/20"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp (+54 9 387 466-7930)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
