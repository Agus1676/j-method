import React from 'react';
import { Compass, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0B0D0E]/95 backdrop-blur-xl border-t border-white/10 md:hidden">
      <div className="flex items-center gap-2">
        <a
          href="#skill-map"
          className="flex-1 py-3 px-3 rounded-xl bg-white/10 border border-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Compass className="w-4 h-4 text-[#CCFF00]" />
          <span>Skill Map Gratis</span>
        </a>

        <a
          href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD desde mi celular y quiero info de los planes de coaching.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-[#CCFF00] text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-[#CCFF00]/25 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Coach</span>
        </a>
      </div>
    </div>
  );
};
