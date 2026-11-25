import React from 'react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <>
      <section
        className="max-w-[1280px] mx-auto px-5 sm:px-12 pt-8 pb-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[1.06fr_1fr] items-center gap-8 lg:gap-14"
        aria-labelledby="hero-title"
      >
        {/* Left Copy Column */}
        <div className="animate-jm-enter">
          <p className="jm-eyebrow mb-4">
            COACHING DE CALISTENIA 1:1 · ONLINE & GLOBAL
          </p>

          <h1
            id="hero-title"
            className="text-[42px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-[-0.06em] leading-[1.02] text-[#f3f0ec] mb-6"
          >
            TU SIGUIENTE
            <br />
            <span className="text-[#ef4255]">NIVEL.</span>
            <br />
            CON UN PLAN.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[#afa6b6] max-w-[460px] leading-[1.85] mb-6">
            Dejá de improvisar tus entrenamientos. Trabajá tu fuerza y tus skills con{' '}
            <strong className="text-[#e4dce7] font-medium">
              programación individualizada, revisión técnica y seguimiento semanal.
            </strong>
          </p>

          {/* Stacked Editorial Actions */}
          <div className="flex flex-col items-stretch sm:items-start gap-2.5 max-w-[350px]">
            <a href="#diagnostico" className="jm-btn-primary w-full">
              <span>HACER DIAGNÓSTICO TÉCNICO (3 PASOS)</span>
              <span aria-hidden="true" className="text-base leading-none">↓</span>
            </a>

            <a href="#coaching" className="jm-btn-ghost w-full">
              <span>VER MODALIDADES DE COACHING 1:1</span>
              <span aria-hidden="true" className="text-base leading-none">↓</span>
            </a>

            <a
              href={getWhatsAppLink('Hola Jorge! Vengo de la web J-METHOD y quiero consultar para empezar a entrenar con vos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center sm:justify-start gap-3 text-[11px] font-semibold text-[#f0a3b2] hover:text-white min-h-[38px] pt-1 transition-colors hover:underline underline-offset-4"
            >
              <span>Hablar directo con Jorge Daniel por WhatsApp</span>
              <span aria-hidden="true" className="text-[#ef4255]">↗</span>
            </a>
          </div>

          <p className="text-[10px] text-[#a3a3b0] mt-3">
            <span aria-hidden="true" className="text-[#ef4255] mr-1.5">↳</span>
            Valoración técnica inicial gratuita · Sin compromiso
          </p>

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
                Jorge Daniel (@{COACH_DATA.instagram}) · Entrenador y atleta de calistenia
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
              <span
                className="absolute top-2 right-3.5 z-10 text-white/80 text-2xl font-extralight"
                aria-hidden="true"
              >
                +
              </span>
            </div>

            <figcaption className="p-3.5 sm:p-4 bg-[#141318] border-t border-white/[0.08] grid gap-1.5">
              <span className="flex items-center gap-2 text-[7px] sm:text-[8px] font-bold tracking-[0.12em] text-[#d9d9df] uppercase">
                <i className="w-1.5 h-1.5 rounded-full bg-[#ef4255] inline-block" aria-hidden="true" />
                PRÁCTICA REAL. CRITERIO REAL.
              </span>
              <strong className="text-[18px] sm:text-[22px] font-extrabold tracking-[-0.045em] leading-[1.08] text-[#f3f0ec]">
                CONTROL
                <br />
                QUE SE ENTRENA.
              </strong>
              <span className="text-[8px] sm:text-[9px] text-[#b6b6c0]">
                Front Lever & Estáticos / J-METHOD
              </span>
            </figcaption>
          </figure>

          {/* Right Side Stacked Art + Editorial Evaluation Card */}
          <div className="grid gap-3 sm:gap-4 min-w-0">
            <figure className="bg-[#15131b] border border-white/[0.15] rounded-xl overflow-hidden m-0 group">
              <div className="jm-athlete-frame">
                <img
                  src="/images/muscle-up.webp"
                  alt="Ejecución de Muscle-Up"
                  loading="lazy"
                  style={{ objectPosition: '50% 40%' }}
                />
              </div>
              <figcaption className="px-3 py-2.5 text-[7px] sm:text-[8px] tracking-[0.08em] text-[#cfc1d2] font-semibold uppercase">
                TÉCNICA & POTENCIA / SW
              </figcaption>
            </figure>

            {/* Warm Bone Editorial Assessment Card */}
            <a
              href="#diagnostico"
              className="text-left bg-[#eee9e2] text-[#20171f] rounded-[11px] p-3.5 sm:p-4 grid gap-1.5 shadow-xl hover:-translate-y-0.5 transition-transform group"
            >
              <div className="flex items-center justify-between">
                <small className="text-[6px] sm:text-[7px] font-extrabold tracking-[0.12em] text-[#8d4455] uppercase">
                  SKILL MAP · EVALUACIÓN
                </small>
                <span className="jm-monogram text-[15px] text-[#20171f]">
                  j<span>/</span>
                </span>
              </div>
              <strong className="text-[14px] sm:text-[16px] font-extrabold tracking-[-0.04em] leading-[1.22] text-[#20171f]">
                Ubicá tu nivel.
                <br />
                Armá tu plan.
              </strong>
              <span className="text-[8px] sm:text-[9px] font-bold text-[#665363] group-hover:text-[#a82140] transition-colors">
                Iniciar diagnóstico 3 pasos ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Architectural Route Strip */}
      <div
        className="bg-[#111115] border-y border-white/[0.09] py-4 px-5 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] text-[#d1c8d7]"
        aria-label="Objetivos de entrenamiento"
      >
        <span>FUERZA & BASE</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>MUSCLE-UP</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>HANDSTAND</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>PLANCHE</span>
        <i aria-hidden="true" className="text-[#ef4255] not-italic text-sm">↗</i>
        <span>FRONT LEVER</span>
      </div>
    </>
  );
};
