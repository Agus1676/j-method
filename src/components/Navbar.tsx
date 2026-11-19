import React from 'react';
import { getWhatsAppLink } from '../data/content';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 min-h-[74px] flex items-center justify-between gap-4">
        {/* Brand Monogram j/ */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Jorge Daniel SW / J-Method Coaching"
        >
          <span className="jm-monogram text-[38px] sm:text-[46px]" aria-hidden="true">
            j<span>/</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.14em] text-[#f4f1ed] group-hover:text-white transition-colors">
              JORGE DANIEL SW
            </span>
            <small className="text-[7px] sm:text-[8px] font-semibold tracking-[0.22em] text-[#9c9ca7] mt-1 uppercase">
              J-METHOD COACHING · SALTA & ONLINE
            </small>
          </span>
        </a>

        {/* Navigation */}
        <nav aria-label="Navegación principal" className="flex items-center gap-4 sm:gap-7 text-[11px] sm:text-[12px] font-semibold">
          <a
            href="#diagnostico"
            className="text-[#ef8ca0] hover:text-white transition-colors py-2"
          >
            Diagnóstico inicial
          </a>
          <a
            href="#coaching"
            className="hidden sm:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2 items-center gap-1.5"
          >
            <span>Modalidades</span>
            <span className="text-[10px] text-[#ff8592]">1:1 & Salta</span>
          </a>
          <a
            href="#metodo"
            className="hidden md:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
          >
            Método
          </a>
          <a
            href="#coach"
            className="hidden lg:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
          >
            Jorge Daniel
          </a>
          <a
            href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero solicitar una valoración para entrenar con vos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="jm-btn-bone text-[10px] sm:text-[11px] px-3.5 sm:px-4 py-2 min-h-[38px] sm:min-h-[42px]"
          >
            <span>Empezar</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
