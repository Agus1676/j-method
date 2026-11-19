import React from 'react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

interface HeroProps {
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuide }) => {
  return (
    <>
      <section
        className="max-w-[1280px] mx-auto px-5 sm:px-12 pt-8 pb-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] items-center gap-8 lg:gap-16"
        aria-labelledby="map-title"
      >
        {/* Left Copy Column */}
        <div className="animate-jm-enter">
          <p className="jm-eyebrow mb-4">SKILL MAP / TU GUÍA GRATIS</p>

          <h1
            id="map-title"
            className="text-[42px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-[-0.06em] leading-[1.03] text-[#f3f0ec] mb-6"
          >
            TU SKILL.
            <br />
            TU NIVEL.
            <br />
            <span className="text-[#ef4255]">EMPIEZA AQUÍ.</span>
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[#afa6b6] max-w-[460px] leading-[1.85] mb-6">
            Encontrá tu punto de partida en planche, front lever, handstand o muscle-up.{' '}
            <strong className="text-[#e4dce7] font-medium">
              Leé la guía en el celular o elegí tu ruta en tres preguntas.
            </strong>
          </p>

          {/* Stacked Editorial Actions */}
          <div className="flex flex-col items-stretch sm:items-start gap-2.5 max-w-[340px]">
            <a href="#mapa" className="jm-btn-primary w-full">
              <span>ELEGIR MI RUTA EN 3 PASOS</span>
              <span aria-hidden="true" className="text-base leading-none">↓</span>
            </a>

            <button
              type="button"
              onClick={onOpenGuide}
              className="jm-btn-ghost w-full"
            >
              <span>LEER GUÍA GRATIS (14 PÁGINAS)</span>
              <span aria-hidden="true" className="text-base leading-none">↗</span>
            </button>

            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero solicitar una valoración inicial para mi entrenamiento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center sm:justify-start gap-3 text-[11px] font-semibold text-[#c8bfcf] hover:text-white min-h-[38px] pt-1 transition-colors"
            >
              <span>Valoración directa por WhatsApp · Salta & Online</span>
              <span aria-hidden="true" className="text-[#ef4255]">↗</span>
            </a>
          </div>

          {/* Micro facts */}
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-[10px] text-[#b3a8bb] font-medium">
            <li className="flex items-center gap-1.5">
              <span className="text-[#ed8294]">✓</span> Lectura en móvil
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#ed8294]">✓</span> Criterios reales de nivel
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#ed8294]">✓</span> Sin registro ni pago
            </li>
          </ul>

          {/* Coach Editorial Signature */}
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.08] max-w-[380px]">
            <span className="w-10 h-10 rounded-full border border-white/25 overflow-hidden flex-shrink-0 bg-[#15131b]">
              <img
                src="/images/hero.webp"
                alt="Jorge Daniel SW"
                className="w-full h-full object-cover object-[50%_38%] scale-125"
              />
            </span>
            <p className="text-[11px] leading-[1.55]">
              <strong className="text-[#f3f0ec] font-semibold block">
                Entrenás vos. Te acompaño yo.
              </strong>
              <span className="text-[#9e9ea8] text-[10px]">
                Jorge Daniel (@{COACH_DATA.instagram}) · Entrenador y atleta SW
              </span>
            </p>
          </div>
        </div>

        {/* Right Editorial Collage Column */}
        <div
          className="grid grid-cols-[1fr_0.75fr] items-center gap-3 sm:gap-4 min-w-0 animate-jm-enter"
          aria-label="Ejecuciones reales y guía gratuita Skill Map"
        >
          {/* Main Tall Athlete Frame */}
          <figure className="bg-[#15131b] border border-white/[0.15] rounded-xl overflow-hidden m-0 relative group shadow-2xl">
            <div className="jm-athlete-frame">
              <img
                src="/images/muscle-up.webp"
                alt="Ejecución de Muscle-Up"
                loading="eager"
                style={{ objectPosition: '50% 40%' }}
              />
              <span
                className="absolute top-3.5 left-3.5 z-10 bg-[#0b0b0e]/85 px-2 py-1 text-[9px] font-bold tracking-[0.14em] text-white"
                aria-hidden="true"
              >
                J / 01
              </span>
              <span
                className="absolute top-2 right-3.5 z-10 text-white/80 text-2xl font-extralight"
                aria-hidden="true"
              >
                +
              </span>
            </div>
            <figcaption className="p-3.5 sm:p-4 bg-[#141318] border-t border-white/[0.08] text-[8px] sm:text-[9px] font-semibold tracking-[0.06em] text-[#cfc1d2] leading-[1.6]">
              <span className="block text-[7px] sm:text-[8px] text-[#9e8fa8] font-medium mb-1 uppercase tracking-[0.12em]">
                EL OBJETIVO LO ELEGÍS VOS.
              </span>
              LA RUTA EMPIEZA EN TU NIVEL.
            </figcaption>
          </figure>

          {/* Right Side Stacked Art + Paper Guide Teaser */}
          <div className="grid gap-3 sm:gap-4 min-w-0">
            <figure className="bg-[#15131b] border border-white/[0.15] rounded-xl overflow-hidden m-0 group">
              <div className="jm-athlete-frame">
                <img
                  src="/images/handstand.webp"
                  alt="Ejecución de Handstand"
                  loading="lazy"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
              <figcaption className="px-3 py-2.5 text-[7px] sm:text-[8px] tracking-[0.08em] text-[#cfc1d2] font-semibold uppercase">
                PRÁCTICA REAL / J-METHOD
              </figcaption>
            </figure>

            {/* Warm Bone Paper Guide Teaser Card */}
            <button
              type="button"
              onClick={onOpenGuide}
              className="text-left bg-[#eee9e2] text-[#20171f] rounded-[10px] p-3 sm:p-3.5 flex items-center gap-3 shadow-xl hover:-translate-y-0.5 transition-transform group cursor-pointer"
            >
              {/* Mini tilted paper cover representation */}
              <div className="w-11 sm:w-12 aspect-[0.707] bg-[#141319] text-[#f3f0ec] border border-[#d6cdd4] rounded-[2px] flex-shrink-0 -rotate-6 shadow-md p-1.5 flex flex-col justify-between">
                <span className="jm-monogram text-[14px] leading-none">
                  j<span>/</span>
                </span>
                <div>
                  <span className="block text-[5px] tracking-[0.1em] text-[#ef4255] font-bold uppercase">
                    SKILL MAP
                  </span>
                  <span className="block text-[6px] font-extrabold leading-tight text-white">
                    J-METHOD
                  </span>
                </div>
              </div>

              <span className="grid gap-1 min-w-0">
                <small className="text-[6px] sm:text-[7px] font-extrabold tracking-[0.1em] text-[#8d4455] uppercase">
                  LLEVÁTELA CON VOS
                </small>
                <strong className="text-[13px] sm:text-[15px] font-extrabold tracking-[-0.04em] leading-[1.25] text-[#20171f]">
                  Tu guía.
                  <br />
                  Cero pesos.
                </strong>
                <span className="text-[8px] sm:text-[9px] font-semibold text-[#665363] group-hover:text-[#a82140] transition-colors">
                  Ver qué incluye ↗
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Architectural Route Strip */}
      <div
        className="bg-[#121116] border-y border-white/[0.08] py-4 px-5 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-11 gap-y-2 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] text-[#d1c8d7]"
        aria-label="Habilidades incluidas"
      >
        <span>PLANCHE</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>FRONT LEVER</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>HANDSTAND</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>MUSCLE-UP</span>
      </div>
    </>
  );
};
