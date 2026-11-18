import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="glass-panel py-2 px-3.5 rounded-2xl border border-[#CCFF00]/30 shadow-2xl flex items-center gap-2 max-w-xs animate-float">
          <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span className="text-xs font-semibold text-white">
            ¿Dudas sobre tu nivel? Hablá con Jorge
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero hacerte una consulta directa.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Jorge Daniel"
        className="w-14 h-14 rounded-2xl bg-[#CCFF00] text-black flex items-center justify-center shadow-xl shadow-[#CCFF00]/30 hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
