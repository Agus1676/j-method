import React from 'react';
import { getWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0e] border-t border-white/[0.12] py-6 pb-24 md:pb-6">
      <div className="max-w-[1184px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#a895b2]">
        {/* Brand Monogram + Tagline */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#f0e7ed] font-extrabold tracking-[-0.04em] text-[14px]"
          >
            <span className="jm-monogram text-[24px]" aria-hidden="true">
              j<span>/</span>
            </span>
            <span>J-METHOD</span>
          </a>
          <span className="text-white/20">·</span>
          <span>Fuerza. Habilidades. Control.</span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Coaching 100% Online</span>
        </div>

        {/* Minimal Nav */}
        <nav
          aria-label="Explorar J-Method"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-[#b9a8c4]"
        >
          <a href="#diagnostico" className="hover:text-white transition-colors">
            Test de Nivel
          </a>
          <a href="#coach" className="hover:text-white transition-colors">
            Sobre Jorge
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Preguntas
          </a>
          <a
            href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Copyright & Agustín Pollán Signature */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-[#9c87a7]">
          <span>© {new Date().getFullYear()} Jorge Daniel SW</span>
          <span className="text-white/20">·</span>
          <span>
            Desarrollado por{' '}
            <a
              href="https://agustinpollan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ef4255] hover:text-white font-bold underline underline-offset-4 decoration-[#ef4255]/50 hover:decoration-white transition-colors"
            >
              Agustín Pollán
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
