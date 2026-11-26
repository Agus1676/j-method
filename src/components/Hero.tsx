import React from 'react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section
      className="max-w-[1184px] mx-auto px-5 sm:px-12 pt-6 pb-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[1.06fr_1fr] items-center gap-7 lg:gap-12"
      aria-labelledby="hero-title"
    >
      {/* Left Copy Column */}
      <div className="animate-jm-enter">
        <p className="jm-eyebrow mb-3.5">
          COACHING DE CALISTENIA 1:1 · ONLINE & GLOBAL
        </p>

        <h1
          id="hero-title"
          className="text-[38px] sm:text-[50px] lg:text-[58px] font-extrabold tracking-[-0.06em] leading-[1.02] text-[#f3f0ec] mb-4 sm:mb-5"
        >
          TU SIGUIENTE
          <br />
          <span className="text-[#ef4255]">NIVEL.</span>
          <br />
          CON UN PLAN.
        </h1>

        <p className="text-[13px] sm:text-[14px] text-[#afa6b6] max-w-[440px] leading-[1.8] mb-5">
          Dejá de improvisar tus entrenamientos. Trabajá tu fuerza y tus skills con{' '}
          <strong className="text-[#e4dce7] font-medium">
            programación individualizada, revisión técnica y seguimiento semanal.
          </strong>
        </p>

        {/* Action Button & WhatsApp link */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-[420px] mb-4">
          <a href="#diagnostico" className="jm-btn-primary flex-1 justify-center sm:justify-between">
            <span>HACER DIAGNÓSTICO (3 PASOS)</span>
            <span aria-hidden="true" className="text-base leading-none">↓</span>
          </a>

          <a
            href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar para empezar a entrenar con vos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="jm-btn-ghost justify-center sm:justify-between px-4"
          >
            <span>WhatsApp</span>
            <span aria-hidden="true" className="text-[#ef4255]">↗</span>
          </a>
        </div>

        <p className="text-[10px] text-[#a3a3b0] mb-5">
          <span aria-hidden="true" className="text-[#ef4255] mr-1.5">↳</span>
          Valoración técnica inicial gratuita · Sin compromiso
        </p>

        {/* Coach Editorial Signature */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08] max-w-[360px]">
          <span className="w-9 h-9 rounded-full border border-white/25 overflow-hidden flex-shrink-0 bg-[#15131b]">
            <img
              src="/images/hero.webp"
              alt="Jorge Daniel SW"
              className="w-full h-full object-cover object-[50%_38%] scale-125"
            />
          </span>
          <p className="text-[11px] leading-[1.5]">
            <strong className="text-[#f3f0ec] font-semibold block">
              Entrenás vos. Te acompaño yo.
            </strong>
            <span className="text-[#9e9ea8] text-[10px]">
              Jorge Daniel (@{COACH_DATA.instagram}) · Coach de calistenia
            </span>
          </p>
        </div>
      </div>

      {/* Right Editorial Visual Collage */}
      <div
        className="grid grid-cols-[1fr_0.75fr] items-center gap-3 sm:gap-4 min-w-0 animate-jm-enter"
        aria-label="Ejecuciones reales de calistenia J-METHOD"
      >
        {/* Main Tall Athlete Frame */}
        <figure className="bg-[#141419] border border-white/[0.16] rounded-[14px] overflow-hidden m-0 relative group shadow-2xl">
          <div className="jm-athlete-frame">
            <img
              src="/images/front-lever.webp"
              alt="Ejecución de Front Lever horizontal en barra"
              loading="eager"
              style={{ objectPosition: '50% 50%' }}
            />
            <span
              className="absolute top-3.5 left-3.5 z-10 bg-[#0b0b0e]/85 px-2 py-1 text-[9px] font-bold tracking-[0.14em] text-white"
              aria-hidden="true"
            >
              J / 01
            </span>
          </div>

          <figcaption className="p-3 bg-[#141318] border-t border-white/[0.08] grid gap-1">
            <span className="flex items-center gap-1.5 text-[7px] sm:text-[8px] font-bold tracking-[0.12em] text-[#d9d9df] uppercase">
              <i className="w-1.5 h-1.5 rounded-full bg-[#ef4255] inline-block" aria-hidden="true" />
              PRÁCTICA REAL.
            </span>
            <strong className="text-[15px] sm:text-[18px] font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f3f0ec]">
              CONTROL QUE SE ENTRENA.
            </strong>
            <span className="text-[8px] sm:text-[9px] text-[#b6b6c0]">
              Front Lever & Estáticos
            </span>
          </figcaption>
        </figure>

        {/* Right Side Stacked Art + Assessment Card */}
        <div className="grid gap-3 min-w-0">
          <figure className="bg-[#15131b] border border-white/[0.15] rounded-xl overflow-hidden m-0 group">
            <div className="jm-athlete-frame">
              <img
                src="/images/muscle-up.webp"
                alt="Ejecución de Muscle-Up"
                loading="lazy"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>
            <figcaption className="px-2.5 py-2 text-[7px] sm:text-[8px] tracking-[0.08em] text-[#cfc1d2] font-semibold uppercase">
              POTENCIA & SW
            </figcaption>
          </figure>

          {/* Warm Bone Assessment Card */}
          <a
            href="#diagnostico"
            className="text-left bg-[#eee9e2] text-[#20171f] rounded-[11px] p-3 sm:p-3.5 grid gap-1 shadow-xl hover:-translate-y-0.5 transition-transform group"
          >
            <div className="flex items-center justify-between">
              <small className="text-[6px] sm:text-[7px] font-extrabold tracking-[0.12em] text-[#8d4455] uppercase">
                TEST DE NIVEL
              </small>
              <span className="jm-monogram text-[14px] text-[#20171f]">
                j<span>/</span>
              </span>
            </div>
            <strong className="text-[12px] sm:text-[14px] font-extrabold tracking-[-0.03em] leading-[1.2] text-[#20171f]">
              Ubicá tu punto de partida.
            </strong>
            <span className="text-[8px] sm:text-[9px] font-bold text-[#665363] group-hover:text-[#a82140] transition-colors">
              Iniciar test 3 pasos ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
