import React from 'react';
import { getWhatsAppLink } from '../data/content';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Live Status Ticker */}
      <div className="bg-[#121016] border-b border-white/[0.06] text-[10px] font-mono py-1 px-4 text-center text-[#c5c2d1] flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping shrink-0"></span>
        <span className="text-[#e8e6ef] font-semibold">COACHING 1 A 1 ONLINE:</span>
        <span className="text-[#a8a5b6]">Cupos de seguimiento semanal disponibles</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <a
          href={getWhatsAppLink('Hola Jorge! Quiero consultar disponibilidad de cupos para coaching 1 a 1.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline text-[#ef4255] font-bold hover:underline"
        >
          Consultar por WhatsApp ↗
        </a>
      </div>

      <header className="sticky top-0 z-40 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 min-h-[72px] flex items-center justify-between gap-4">
          {/* Brand Monogram j/ */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Jorge Daniel SW / J-Method Coaching"
          >
            <span className="jm-monogram text-[38px] sm:text-[44px]" aria-hidden="true">
              j<span>/</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.14em] text-[#f4f1ed] group-hover:text-white transition-colors">
                JORGE DANIEL SW
              </span>
              <small className="text-[7px] sm:text-[8px] font-semibold tracking-[0.22em] text-[#9c9ca7] mt-0.5 uppercase">
                J-METHOD COACHING · 100% ONLINE
              </small>
            </span>
          </a>

          {/* Navigation */}
          <nav aria-label="Navegación principal" className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-[12px] font-semibold">
            <a
              href="#diagnostico"
              className="text-[#ef8ca0] hover:text-white transition-colors py-2"
            >
              Test de Nivel
            </a>
            <a
              href="#laboratorio"
              className="hidden md:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
            >
              Laboratorio
            </a>
            <a
              href="#roadmap"
              className="hidden lg:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
            >
              Roadmap
            </a>
            <a
              href="#calculadora"
              className="hidden xl:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
            >
              Calculadora
            </a>
            <a
              href="#coaching"
              className="hidden sm:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2 items-center gap-1.5"
            >
              <span>Planes</span>
              <span className="text-[9px] text-[#ff8592] bg-[#ef4255]/15 px-1.5 py-0.5 rounded">1:1</span>
            </a>
            <a
              href="#casos"
              className="hidden md:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
            >
              Casos Reales
            </a>
            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero solicitar una valoración para entrenar con vos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="jm-btn-bone text-[10px] sm:text-[11px] px-3 sm:px-4 py-2 min-h-[36px] sm:min-h-[40px]"
            >
              <span>Empezar</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
