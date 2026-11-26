import React from 'react';
import { getWhatsAppLink } from '../data/content';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0b0b0e]/95 backdrop-blur-md border-t border-white/20 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] grid grid-cols-3 gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <a
        href="#diagnostico"
        className="bg-[#eee7e1] text-[#261a23] rounded-[7px] min-h-[42px] px-2.5 py-2 text-[10px] font-extrabold flex items-center justify-between gap-1"
      >
        <span>Diagnóstico</span>
        <span aria-hidden="true">↓</span>
      </a>

      <a
        href="#coach"
        className="bg-[#1a191f] border border-white/20 text-[#f3f0ec] rounded-[7px] min-h-[42px] px-2.5 py-2 text-[10px] font-bold flex items-center justify-between gap-1"
      >
        <span>Sobre Jorge</span>
        <span aria-hidden="true">↓</span>
      </a>

      <a
        href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar por el coaching.')}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#d91831] text-white rounded-[7px] min-h-[42px] px-2.5 py-2 text-[10px] font-bold flex items-center justify-between gap-1"
      >
        <span>WhatsApp</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
};
