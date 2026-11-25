import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/content';

export const SkillCalculator: React.FC = () => {
  const [skill, setSkill] = useState<'planche' | 'front-lever' | 'handstand' | 'muscle-up'>('planche');
  const [pullups, setPullups] = useState<number>(8);
  const [dips, setDips] = useState<number>(10);
  const [coreHold, setCoreHold] = useState<number>(25);

  // Dynamic calculation algorithm based on biomechanics
  const calculateScore = () => {
    let score = 0;
    if (skill === 'planche') {
      // Planche relies heavily on dips (pushing) and core
      score = Math.min(100, Math.round(dips * 3.2 + coreHold * 0.8 + pullups * 1.5));
    } else if (skill === 'front-lever') {
      // Front Lever relies heavily on pullups (pulling) and core hollow
      score = Math.min(100, Math.round(pullups * 4.2 + coreHold * 1.1 + dips * 0.8));
    } else if (skill === 'handstand') {
      // Handstand is balance + shoulder overhead push
      score = Math.min(100, Math.round(dips * 2.5 + coreHold * 1.3 + pullups * 1.2 + 20));
    } else {
      // Muscle-Up requires explosive pullups + dips
      score = Math.min(100, Math.round(pullups * 3.8 + dips * 2.5 + coreHold * 0.5));
    }
    return Math.max(15, Math.min(98, score));
  };

  const score = calculateScore();

  const getAnalysis = () => {
    if (score < 45) {
      return {
        level: 'Fase de Construcción de Base',
        color: 'text-[#f09a52]',
        summary: 'Tu estructura aún necesita fuerza básica en tendones y básicos antes de intentar palancas.',
        recommendation:
          'El foco prioritario es subir tu volumen de fondos y dominadas estrictas sin balanceo para evitar sobrecargar codos y hombros.',
      };
    } else if (score < 75) {
      return {
        level: 'Fase de Progresiones Específicas',
        color: 'text-[#eed158]',
        summary: 'Tenés la fuerza mínima para comenzar progresiones como Tuck y Advanced Tuck con buena técnica.',
        recommendation:
          'Estás en el punto óptimo para trabajar holds isométricos de 6 a 10 segundos combinados con trabajo dinámico de palanca.',
      };
    } else {
      return {
        level: 'Fase de Alto Rendimiento / Consolidación',
        color: 'text-[#ef4255]',
        summary: 'Tenés una excelente base de fuerza. Tu límite actual es puramente técnico y biomecánico.',
        recommendation:
          'Podés trabajar progresiones abiertas (Straddle, Half Lay) y variantes dinámicas. Pequeños ajustes en protracción o depresión escapular marcarán el desbloqueo total.',
      };
    }
  };

  const analysis = getAnalysis();

  const skillNames = {
    planche: 'Planche',
    'front-lever': 'Front Lever',
    handstand: 'Handstand (Pino)',
    'muscle-up': 'Bar Muscle-Up',
  };

  const getWhatsAppMessage = () => {
    return `Hola Jorge! Usé la Calculadora Biomecánica en la web J-METHOD:
• Skill objetivo: ${skillNames[skill]}
• Dominadas actuales: ${pullups}
• Fondos actuales: ${dips}
• Hold de Core (Hollow): ${coreHold} s
• Índice de preparación: ${score}% (${analysis.level})

Quiero que revises mi nivel para armar mi plan de entrenamiento 1 a 1.`;
  };

  return (
    <section
      id="calculadora"
      className="py-16 lg:py-20 border-t border-white/[0.08] relative"
      aria-labelledby="calc-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-12">
        <div className="max-w-[650px] mb-10">
          <p className="jm-eyebrow mb-3">HERRAMIENTA TÉCNICA INTERACTIVA</p>
          <h2
            id="calc-heading"
            className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.05em] leading-[1.06] text-[#f3f0ec]"
          >
            CALCULADORA DE <span className="text-[#ef4255]">POTENCIAL</span>
            <br />
            PARA TU PRÓXIMA SKILL.
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#a5a3b2] mt-3.5 leading-[1.8]">
            Ingresá tus marcas actuales en básicos y medí al instante si tu cuerpo está listo para soportar la palanca articular sin riesgo de lesión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
          {/* Controls Column */}
          <div className="bg-[#14141a] border border-white/[0.12] rounded-[14px] p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Skill Target */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e2dfea] mb-2.5">
                1. ¿Qué skill querés desbloquear?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'planche', label: 'Planche' },
                  { id: 'front-lever', label: 'Front Lever' },
                  { id: 'handstand', label: 'Handstand' },
                  { id: 'muscle-up', label: 'Muscle-Up' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSkill(s.id as any)}
                    className={`py-2 px-3 rounded-[8px] text-[11px] font-bold border transition-all ${
                      skill === s.id
                        ? 'bg-[#ef4255] border-[#ef4255] text-white shadow-md'
                        : 'bg-[#0f0f14] border-white/[0.1] text-[#9a97a8] hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Dominadas */}
            <div>
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="font-bold text-[#e2dfea] uppercase tracking-wider">
                  2. Dominadas estrictas máximas
                </span>
                <span className="font-mono font-extrabold text-[15px] text-[#ef4255]">
                  {pullups} reps
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={pullups}
                onChange={(e) => setPullups(Number(e.target.value))}
                className="w-full accent-[#ef4255] cursor-pointer h-2 bg-white/10 rounded-lg"
              />
              <div className="flex justify-between text-[9px] text-[#7d7a8c] mt-1 font-mono">
                <span>0 reps</span>
                <span>10 reps</span>
                <span>25+ reps</span>
              </div>
            </div>

            {/* Slider 2: Fondos */}
            <div>
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="font-bold text-[#e2dfea] uppercase tracking-wider">
                  3. Fondos en paralelas estrictos
                </span>
                <span className="font-mono font-extrabold text-[15px] text-[#ef4255]">
                  {dips} reps
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={dips}
                onChange={(e) => setDips(Number(e.target.value))}
                className="w-full accent-[#ef4255] cursor-pointer h-2 bg-white/10 rounded-lg"
              />
              <div className="flex justify-between text-[9px] text-[#7d7a8c] mt-1 font-mono">
                <span>0 reps</span>
                <span>15 reps</span>
                <span>30+ reps</span>
              </div>
            </div>

            {/* Slider 3: Core Hollow */}
            <div>
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="font-bold text-[#e2dfea] uppercase tracking-wider">
                  4. Hollow Body / Plank Hold
                </span>
                <span className="font-mono font-extrabold text-[15px] text-[#ef4255]">
                  {coreHold} s
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={coreHold}
                onChange={(e) => setCoreHold(Number(e.target.value))}
                className="w-full accent-[#ef4255] cursor-pointer h-2 bg-white/10 rounded-lg"
              />
              <div className="flex justify-between text-[9px] text-[#7d7a8c] mt-1 font-mono">
                <span>5 s</span>
                <span>30 s</span>
                <span>60 s</span>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="bg-[#18141d] border border-white/[0.14] rounded-[14px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.14em] text-[#a5a3b2] mb-4">
                <span>ÍNDICE BIOMECÁNICO J-METHOD</span>
                <span className="font-mono text-[#ef4255]">ANÁLISIS EN VIVO</span>
              </div>

              {/* Big Score Visual */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[54px] sm:text-[64px] font-extrabold font-mono text-[#f3f0ec] leading-none tracking-tight">
                  {score}%
                </span>
                <div>
                  <span className={`block text-[13px] sm:text-[14px] font-extrabold ${analysis.color}`}>
                    {analysis.level}
                  </span>
                  <span className="text-[10px] text-[#8e8b9b]">
                    Preparación estimada para {skillNames[skill]}
                  </span>
                </div>
              </div>

              {/* Progress Gauge */}
              <div className="w-full bg-white/[0.08] rounded-full h-2.5 mb-6 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#e03144] to-[#ef4255] h-full rounded-full transition-all duration-500"
                  style={{ width: `${score}%` }}
                ></div>
              </div>

              {/* Analysis Text Box */}
              <div className="bg-[#0f0e13] border border-white/[0.08] p-4 rounded-[10px] space-y-2 mb-6">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#ef4255]">
                  Diagnóstico Técnico
                </span>
                <p className="text-[12px] text-[#d4d1de] leading-[1.6]">
                  {analysis.summary}
                </p>
                <p className="text-[11px] text-[#9b98a8] leading-[1.6] pt-1 border-t border-white/[0.06]">
                  <strong className="text-[#f3f0ec]">Paso sugerido:</strong> {analysis.recommendation}
                </p>
              </div>
            </div>

            {/* WhatsApp Link Action */}
            <div>
              <a
                href={getWhatsAppLink(getWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn-primary w-full text-center"
              >
                <span>MANDAR MI RESULTADO A JORGE DANIEL</span>
                <span aria-hidden="true">↗</span>
              </a>
              <small className="block text-center text-[10px] text-[#8e8b98] mt-2">
                Jorge revisa tu nivel y te dice exactamente qué rutina empezar
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
