import React from 'react';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 min-h-[74px] flex items-center justify-between gap-4">
        {/* Brand Monogram j/ */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Jorge Daniel SW / J-Method"
        >
          <span className="jm-monogram text-[38px] sm:text-[46px]" aria-hidden="true">
            j<span>/</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.14em] text-[#f4f1ed] group-hover:text-white transition-colors">
              JORGE DANIEL SW
            </span>
            <small className="text-[7px] sm:text-[8px] font-semibold tracking-[0.22em] text-[#9c9ca7] mt-1 uppercase">
              J-METHOD / SALTA & ONLINE
            </small>
          </span>
        </a>

        {/* Navigation */}
        <nav aria-label="J-Method" className="flex items-center gap-4 sm:gap-7 text-[11px] sm:text-[12px] font-semibold">
          <a
            href="#mapa"
            className="text-[#ef8ca0] hover:text-white transition-colors py-2"
          >
            Skill Map gratis
          </a>
          <a
            href="#programas"
            className="hidden md:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2 items-center gap-1.5"
          >
            <span>Programas</span>
            <span className="text-[10px] text-[#ff8592]">J-Method</span>
          </a>
          <a
            href="#coaching"
            className="hidden sm:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
          >
            Coaching
          </a>
          <a
            href="#coach"
            className="hidden lg:inline-flex text-[#bfbcc8] hover:text-white transition-colors py-2"
          >
            Jorge Daniel
          </a>
          <button
            type="button"
            onClick={onOpenGuide}
            className="jm-btn-bone text-[10px] sm:text-[11px] px-3 sm:px-4 py-2 min-h-[38px] sm:min-h-[42px]"
          >
            <span>Leer guía gratis</span>
            <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
