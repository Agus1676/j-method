import React from 'react';
import { useContent } from '../context/ContentContext';

export const Navbar: React.FC = () => {
  const { content, getWhatsAppLink, setIsAdminOpen } = useContent();
  const { coach } = content;

  return (
    <header className="sticky top-0 z-40 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1184px] mx-auto px-5 sm:px-8 min-h-[64px] flex items-center justify-between gap-4">
        {/* Brand Monogram j/ */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label={`${coach.name} SW / ${coach.brand} Coaching`}
        >
          <span className="jm-monogram text-[34px] sm:text-[40px]" aria-hidden="true">
            j<span>/</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.14em] text-[#f4f1ed] group-hover:text-white transition-colors uppercase">
              {coach.name} SW
            </span>
            <small className="text-[7px] sm:text-[8px] font-semibold tracking-[0.22em] text-[#9c9ca7] mt-0.5 uppercase">
              {coach.brand} COACHING · 100% ONLINE
            </small>
          </span>
        </a>

        {/* Navigation */}
        <nav aria-label="Navegación principal" className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-[12px] font-semibold">
          <a
            href="#diagnostico"
            className="text-[#ef8ca0] hover:text-white transition-colors py-2"
          >
            Test de Nivel
          </a>
          <a
            href="#coach"
            className="hidden sm:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
          >
            Sobre Jorge & Coaching
          </a>
          <a
            href="#faq"
            className="hidden md:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
          >
            Preguntas
          </a>
          <a
            href={getWhatsAppLink(`Hola Jorge! Vengo de la web ${coach.brand} y quiero solicitar una valoración para entrenar con vos.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="jm-btn-bone text-[10px] sm:text-[11px] px-3.5 py-1.5 min-h-[36px]"
          >
            <span>Empezar</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
