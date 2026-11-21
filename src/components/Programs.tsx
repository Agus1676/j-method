import React from 'react';
import { METHOD_STEPS, getWhatsAppLink } from '../data/content';

export const Programs: React.FC = () => {
  return (
    <section
      id="coaching"
      aria-labelledby="path-title"
      className="border-t border-white/[0.09] py-12 lg:py-16 scroll-mt-20"
    >
      <div className="max-w-[1184px] mx-auto px-5 sm:px-12">
        {/* Editorial Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="jm-eyebrow mb-3">MODALIDADES DE ENTRENAMIENTO</p>
            <h2
              id="path-title"
              className="text-[30px] sm:text-[42px] font-extrabold tracking-[-0.055em] leading-[1.06] text-[#f3f0ec]"
            >
              TU OBJETIVO.
              <br />
              <span className="text-[#8f8f9a]">TU FORMA DE ENTRENAR.</span>
            </h2>
          </div>
          <p className="text-[12px] sm:text-[13px] text-[#a5a5b1] max-w-[330px] leading-[1.8]">
            Fuerza, habilidades y estáticos.
            <br />
            Acompañamiento profesional desde tus primeros básicos hasta tus skills más exigentes.
          </p>
        </div>

        {/* 2-Column Editorial Contrast Cards (Online 1:1 Mensual vs Programa Intensivo 12 Semanas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* CARD 01: COACHING ONLINE 1 A 1 (Warm Editorial Bone Card) */}
          <article className="jm-coaching-bone rounded-[14px] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 text-[9px] font-bold tracking-[0.13em] text-[#776472] uppercase">
                <span>01 / ACOMPAÑAMIENTO PERSONAL ONLINE</span>
                <span
                  className="text-[#ef4255] text-lg leading-none"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <h3 className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.055em] leading-[1.08] text-[#21191e]">
                UN PLAN PARA VOS.
                <br />
                UN COACH CON VOS.
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#635663] max-w-[400px] mt-3.5 leading-[1.75]">
                Para dejar de preguntarte qué hacer en cada sesión y empezar a entrenar con una dirección clara, estés donde estés.
              </p>

              {/* Architectural 3-Column Spec Strip */}
              <div className="grid grid-cols-3 border-y border-[#21191e]/15 my-5 py-3">
                <div className="pr-3 border-r border-[#21191e]/15">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-[#776472]">
                    Planificación
                  </span>
                  <strong className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.04em] text-[#21191e]">
                    100% 1 a 1
                  </strong>
                </div>
                <div className="px-3 border-r border-[#21191e]/15">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-[#776472]">
                    Revisión Técnica
                  </span>
                  <strong className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.04em] text-[#21191e]">
                    En Video
                  </strong>
                </div>
                <div className="pl-3">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-[#776472]">
                    Seguimiento
                  </span>
                  <strong className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.04em] text-[#a82140]">
                    Semanal
                  </strong>
                </div>
              </div>

              <ul className="grid gap-2.5 mb-6 p-0 list-none text-[12px] sm:text-[13px] text-[#4a3d49] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>
                    Programación individual según tu nivel, disponibilidad y material
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>
                    Análisis y corrección técnica de tus ejecuciones por WhatsApp
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>
                    Ajustes semanales de carga, progresiones y prevención de lesiones
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={getWhatsAppLink(
                  'Hola Jorge! Quiero solicitar una valoración inicial gratuita para el Coaching Online 1 a 1 de J-METHOD.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn-primary w-full"
              >
                <span>SOLICITAR VALORACIÓN GRATUITA · ONLINE 1:1</span>
                <span aria-hidden="true">↗</span>
              </a>
              <small className="block text-center text-[10px] text-[#796874] mt-2.5">
                Propuesta y planificación después de valorar tu caso personalmente.
              </small>
            </div>
          </article>

          {/* CARD 02: PROGRAMA INTENSIVO 12 SEMANAS (Dark Obsidian Architectural Card) */}
          <article className="bg-[linear-gradient(135deg,#1c171e,#141418_65%)] border border-white/[0.16] rounded-[14px] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 text-[9px] font-bold tracking-[0.13em] text-[#afadb8] uppercase">
                <span>02 / BLOQUE ESPECIALIZADO</span>
                <span className="border border-[#5b5a64] px-2 py-0.5 text-[8px] tracking-[0.08em] text-[#d2d0da]">
                  PROGRAMA INTENSIVO 12 SEMANAS
                </span>
              </div>

              <h3 className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.055em] leading-[1.08] text-[#f3f0ec]">
                FUERZA MÁXIMA.
                <br />
                CONTROL BIOMECÁNICO.
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#b1afba] max-w-[400px] mt-3.5 leading-[1.75]">
                Un bloque periodizado de 12 semanas enfocado en desbloquear una skill específica (Planche, Front Lever, Handstand o Muscle-Up) con sobrecarga y acondicionamiento tendinoso.
              </p>

              {/* Architectural 3-Column Spec Strip */}
              <div className="grid grid-cols-3 border-y border-white/[0.12] my-5 py-3">
                <div className="pr-3 border-r border-white/[0.12]">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-[#aaa7b4]">
                    Duración
                  </span>
                  <strong className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.04em] text-[#f3f0ec]">
                    12 Semanas
                  </strong>
                </div>
                <div className="px-3 border-r border-white/[0.12]">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-[#aaa7b4]">
                    Modalidad
                  </span>
                  <strong className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.04em] text-[#f3f0ec]">
                    100% Online
                  </strong>
                </div>
                <div className="pl-3">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-[#aaa7b4]">
                    Enfoque
                  </span>
                  <strong className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.04em] text-[#ef4255]">
                    Skills & SW
                  </strong>
                </div>
              </div>

              <ul className="grid gap-2.5 mb-6 p-0 list-none text-[12px] sm:text-[13px] text-[#d0ced7] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#ff8491] font-bold">✓</span>
                  <span>
                    Periodización estricta por microciclos: fuerza específica, hipertrofia y descarga
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#ff8491] font-bold">✓</span>
                  <span>
                    Auditoría de video continua: optimización biomecánica y corrección de palancas
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#ff8491] font-bold">✓</span>
                  <span>
                    Protocolo de salud articular y fortalecimiento de tendones distales
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={getWhatsAppLink(
                  'Hola Jorge! Vengo de la web J-METHOD y quiero consultar disponibilidad para el Programa Intensivo de 12 Semanas de Skills.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn-ghost w-full border-white/30 hover:border-[#ef4255]"
              >
                <span>CONSULTAR POR EL PROGRAMA INTENSIVO 12 SEMANAS</span>
                <span aria-hidden="true">↗</span>
              </a>
              <small className="block text-center text-[10px] text-[#9e9ba8] mt-2.5">
                Coordinación directa y asesoramiento técnico por WhatsApp.
              </small>
            </div>
          </article>
        </div>

        {/* 3-Column Architectural Method Section (#metodo) */}
        <div id="metodo" className="mt-14 pt-12 border-t border-white/[0.09] scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="jm-eyebrow mb-2.5">ASÍ TRABAJAMOS EN J-METHOD</p>
              <h3 className="text-[26px] sm:text-[36px] font-extrabold tracking-[-0.055em] leading-[1.08] text-[#f3f0ec]">
                MÁS CRITERIO.{' '}
                <span className="text-[#8f8f9a]">MENOS ENSAYO Y ERROR.</span>
              </h3>
            </div>
            <p className="text-[12px] text-[#a5a5b1] max-w-[330px] leading-[1.8]">
              Entrenar más horas no siempre destraba una skill. Saber qué ángulo y qué carga ajustar sí cambia tu progreso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {METHOD_STEPS.map((st) => (
              <article
                key={st.number}
                className="border-t border-[#5c5b65] pt-4"
              >
                <span className="font-mono text-[11px] text-[#ef4255] font-bold block">
                  {st.number}
                </span>
                <h4 className="text-[18px] sm:text-[19px] font-bold tracking-[-0.035em] text-[#f3f0ec] mt-3.5 mb-2">
                  {st.title}
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#a8a6b3] leading-[1.85]">
                  {st.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
