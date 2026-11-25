import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/content';

interface LabSkill {
  id: string;
  name: string;
  tag: string;
  image: string;
  angleTarget: string;
  angleLabel: string;
  primaryMuscle: string;
  tendonRisk: string;
  coachCue: string;
  audioDuration: string;
  coordinates: { x: number; y: number; label: string }[];
}

const LAB_SKILLS: LabSkill[] = [
  {
    id: 'planche',
    name: 'Full & Straddle Planche',
    tag: 'CADENA ANTERIOR & EMPUJE',
    image: '/images/planche.webp',
    angleTarget: '45°–50°',
    angleLabel: 'Proyección anterior de hombro',
    primaryMuscle: 'Serrato anterior + Bíceps (tendón distal)',
    tendonRisk: 'Epitróclea y tendón de bíceps por hiperextensión brusca',
    coachCue:
      '«Mirá el segundo 3 del video: estás perdiendo protracción activa al fatigar los hombros. En tu próxima sesión abrí las manos 15° hacia afuera en paralelas para descargar el tendón del bíceps y bloquear a 0°.»',
    audioDuration: '0:38',
    coordinates: [
      { x: 28, y: 38, label: 'Protracción escapular activa (Serrato)' },
      { x: 48, y: 56, label: 'Bloqueo 0° articular de codo' },
      { x: 72, y: 46, label: 'Retroversión pélvica neutra (Glúteos)' },
    ],
  },
  {
    id: 'front-lever',
    name: 'Full Front Lever',
    tag: 'CADENA POSTERIOR & TRACCIÓN',
    image: '/images/front-lever.webp',
    angleTarget: '0°',
    angleLabel: 'Línea horizontal respecto a la barra',
    primaryMuscle: 'Dorsal ancho + Redondo mayor + Core',
    tendonRisk: 'Molestia en inserción tendinosa del tríceps y codos',
    coachCue:
      '«Acá tu palanca está perfecta pero la pelvis cae 5 cm por falta de hollow body al final de la serie. Vamos a meter 3 series de Dragon Flags al final de tu rutina para que el core no ceda.»',
    audioDuration: '0:42',
    coordinates: [
      { x: 26, y: 44, label: 'Depresión escapular continua' },
      { x: 55, y: 49, label: 'Activación dorsal y tríceps largo' },
      { x: 80, y: 52, label: 'Tensión de cuádriceps y puntas en punta' },
    ],
  },
  {
    id: 'handstand',
    name: 'Handstand (Pino Libre)',
    tag: 'EQUILIBRIO & VERTICAL',
    image: '/images/handstand.webp',
    angleTarget: '180°',
    angleLabel: 'Alineación muñeca-hombro-cadera-tobillo',
    primaryMuscle: 'Deltoides anterior + Trapecio superior + Antebrazo',
    tendonRisk: 'Compresión excesiva en muñeca por falta de flexión dorsal',
    coachCue:
      '«No compenses la falta de movilidad abriendo el pecho en banana. Empujá el suelo hacia abajo activando trapecios y usá las yemas de los dedos como freno activo.»',
    audioDuration: '0:31',
    coordinates: [
      { x: 49, y: 22, label: 'Elevación de trapecios (empuje activo)' },
      { x: 51, y: 50, label: 'Bloqueo pélvico (cero arqueo lumbar)' },
      { x: 50, y: 88, label: 'Micro-corrección con yemas de dedos' },
    ],
  },
  {
    id: 'muscle-up',
    name: 'Bar Muscle-Up Estricto',
    tag: 'POTENCIA & TRANSICIÓN',
    image: '/images/muscle-up.webp',
    angleTarget: '90°➔0°',
    angleLabel: 'Transición rápida sobre la barra',
    primaryMuscle: 'Tracción explosiva + Pectoral mayor + Tríceps',
    tendonRisk: 'Golpe asimétrico de codo (transición en "pollo")',
    coachCue:
      '«El error de subir un codo antes que el otro es letal para los rotadores. En tu siguiente bloque subimos el jalón al esternón y practicamos la transición con banda elástica lenta.»',
    audioDuration: '0:45',
    coordinates: [
      { x: 52, y: 32, label: 'Codos simétricos por encima de la barra' },
      { x: 42, y: 48, label: 'Inclinación de torso sobre la barra' },
      { x: 56, y: 78, label: 'Fuerza estricta sin balanceo excesivo' },
    ],
  },
];

export const BiomechanicsLab: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string>('planche');
  const [showOverlays, setShowOverlays] = useState<boolean>(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const current = LAB_SKILLS.find((s) => s.id === activeSkillId) || LAB_SKILLS[0];

  const toggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <section
      id="laboratorio"
      className="py-16 lg:py-20 border-t border-white/[0.08] relative overflow-hidden"
      aria-labelledby="lab-heading"
    >
      {/* Background Architectural Watermark */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[240px] font-black text-white/[0.015] pointer-events-none select-none tracking-tighter"
        aria-hidden="true"
      >
        ANALYSIS
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ef4255] animate-pulse"></span>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#ef4255] uppercase">
                FEEDBACK TÉCNICO 1 A 1
              </span>
            </div>
            <h2
              id="lab-heading"
              className="text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold tracking-[-0.05em] leading-[1.05] text-[#f3f0ec]"
            >
              ASÍ ANALIZAMOS
              <br />
              <span className="text-[#ef4255]">TU TÉCNICA</span> CADA SEMANA.
            </h2>
          </div>

          <p className="text-[13px] sm:text-[14px] text-[#a5a3b2] max-w-[420px] leading-[1.75]">
            No te mandamos un PDF genérico para que te arregles solo. Nos mandás tus videos por WhatsApp y Jorge desglosa tus palancas, ángulos y posición articular milímetro a milímetro.
          </p>
        </div>

        {/* Skill Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {LAB_SKILLS.map((sk) => {
            const isSelected = sk.id === current.id;
            return (
              <button
                key={sk.id}
                type="button"
                onClick={() => {
                  setActiveSkillId(sk.id);
                  setIsPlayingAudio(false);
                }}
                className={`py-2.5 px-4 rounded-[8px] text-[11px] sm:text-[12px] font-extrabold tracking-[0.06em] transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#ef4255] border-[#ef4255] text-white shadow-[0_0_20px_rgba(239,66,85,0.35)]'
                    : 'bg-[#121217] border-white/[0.1] text-[#9c9aa8] hover:text-[#f3f0ec] hover:border-white/20'
                }`}
              >
                <span>{sk.name}</span>
                {isSelected && <span className="text-[9px] opacity-80">● ACTIVO</span>}
              </button>
            );
          })}
        </div>

        {/* Interactive Lab Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch">
          {/* Left Column: Visual Analysis Frame with Overlays */}
          <div className="bg-[#121217] border border-white/[0.14] rounded-[14px] overflow-hidden relative min-h-[380px] sm:min-h-[460px] flex flex-col justify-between shadow-2xl">
            {/* Top Toolbar */}
            <div className="bg-[#0b0b0e]/90 backdrop-blur-sm border-b border-white/[0.08] px-4 py-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[#ef4255] font-bold">● REC</span>
                <span className="text-[#a5a3b2] font-semibold uppercase tracking-wider text-[10px]">
                  BIOMECHANICAL ENGINE v2.4
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowOverlays(!showOverlays)}
                className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded transition-colors ${
                  showOverlays
                    ? 'bg-[#ef4255]/20 text-[#ff7d8d] border border-[#ef4255]/40'
                    : 'bg-white/10 text-white/60 hover:text-white'
                }`}
              >
                {showOverlays ? 'CAPAS BIOMECÁNICAS: VISIBLES' : 'VER FOTO LIMPIA'}
              </button>
            </div>

            {/* Athlete Photo with Telemetry Canvas */}
            <div className="relative flex-1 bg-black/40 flex items-center justify-center overflow-hidden">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
              />

              {/* Grid Lines Overlay */}
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
                aria-hidden="true"
              ></div>

              {/* Biomechanical Data Overlays */}
              {showOverlays && (
                <>
                  {/* Subtle Angle Indicator Badge */}
                  <div className="absolute top-4 left-4 bg-[#0b0b0e]/90 border border-[#ef4255]/40 rounded-[8px] p-2.5 shadow-lg backdrop-blur-md">
                    <span className="block text-[8px] font-mono uppercase text-[#ef4255] tracking-wider">
                      ÁNGULO OBJETIVO
                    </span>
                    <strong className="text-[18px] font-extrabold text-[#f3f0ec] leading-none">
                      {current.angleTarget}
                    </strong>
                    <span className="block text-[9px] text-[#a5a3b2] mt-0.5">
                      {current.angleLabel}
                    </span>
                  </div>

                  {/* Hotspot Pins */}
                  {current.coordinates.map((pt, idx) => (
                    <div
                      key={idx}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-6 h-6 rounded-full bg-[#ef4255]/30 animate-ping"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#ef4255] border-2 border-white flex items-center justify-center text-[7px] font-bold text-white shadow-md">
                          {idx + 1}
                        </span>
                      </div>
                      {/* Floating Tooltip */}
                      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 whitespace-nowrap bg-[#0b0b0e]/95 border border-white/20 text-[#f3f0ec] text-[9px] font-semibold py-1 px-2 rounded shadow-xl pointer-events-none">
                        {pt.label}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Bottom Spec Strip */}
            <div className="bg-[#0b0b0e]/95 border-t border-white/[0.08] p-3.5 grid grid-cols-2 gap-3 text-[10px]">
              <div>
                <span className="block text-[#797685] font-bold uppercase tracking-wider text-[8px]">
                  Músculo Principal
                </span>
                <span className="text-[#f3f0ec] font-semibold truncate block">
                  {current.primaryMuscle}
                </span>
              </div>
              <div>
                <span className="block text-[#ef4255] font-bold uppercase tracking-wider text-[8px]">
                  Riesgo de Lesión / Compensación
                </span>
                <span className="text-[#d8d5df] font-semibold truncate block">
                  {current.tendonRisk}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Coach Audio & Direct Feedback Card */}
          <div className="bg-[#17141b] border border-white/[0.14] rounded-[14px] p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Card Tag */}
              <div className="flex items-center justify-between gap-3 mb-4 text-[9px] font-bold uppercase tracking-[0.14em]">
                <span className="text-[#ef4255]">CORRECCIÓN SEMANAL DIRECTA</span>
                <span className="border border-white/20 px-2 py-0.5 text-[#d0ced8] rounded">
                  {current.tag}
                </span>
              </div>

              <h3 className="text-[22px] sm:text-[26px] font-extrabold tracking-[-0.04em] text-[#f3f0ec] leading-[1.15] mb-4">
                La diferencia entre 6 meses estancado y tu skill desbloqueada.
              </h3>

              {/* Coach Quote Box */}
              <div className="bg-[#0e0c10] border-l-2 border-[#ef4255] p-4 rounded-r-[8px] mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-extrabold text-[#f3f0ec]">
                    Jorge Daniel (@jorgedaniel_sw)
                  </span>
                  <span className="text-[9px] text-[#ef4255] font-mono">
                    ✓ Feedback verificado
                  </span>
                </div>
                <p className="text-[12px] sm:text-[13px] text-[#c2bfcc] italic leading-[1.75]">
                  {current.coachCue}
                </p>
              </div>

              {/* Interactive Audio Note Player Simulation */}
              <div className="bg-[#1f1b24] border border-white/[0.12] rounded-[10px] p-4 mb-6">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d0ceda]">
                    Nota de Voz de Jorge ({current.audioDuration} min)
                  </span>
                  <span className="text-[9px] font-mono text-[#ef4255]">
                    {isPlayingAudio ? '0:14 / ' + current.audioDuration : '0:00 / ' + current.audioDuration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleAudio}
                    className="w-10 h-10 rounded-full bg-[#ef4255] text-white flex items-center justify-center shrink-0 hover:bg-[#d83547] transition-all shadow-md focus:outline-none"
                    aria-label={isPlayingAudio ? 'Pausar audio de ejemplo' : 'Reproducir audio de ejemplo'}
                  >
                    {isPlayingAudio ? (
                      <span className="text-sm font-bold">❚❚</span>
                    ) : (
                      <span className="text-sm font-bold ml-0.5">▶</span>
                    )}
                  </button>

                  {/* Audio Waveform Bars */}
                  <div className="flex-1 flex items-center gap-1 h-7">
                    {[
                      35, 60, 80, 45, 90, 70, 30, 85, 100, 65, 40, 75, 95, 60, 45,
                      80, 50, 70, 85, 40, 60, 75, 90, 50, 35, 70, 85, 60, 40, 30,
                    ].map((height, i) => (
                      <span
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio && i < 14
                            ? 'bg-[#ef4255]'
                            : isPlayingAudio
                            ? 'bg-[#ef4255]/40 animate-pulse'
                            : 'bg-white/20'
                        }`}
                        style={{ height: `${height}%` }}
                      ></span>
                    ))}
                  </div>
                </div>
                <small className="block text-[9px] text-[#8e8b98] mt-2">
                  Así recibís las devoluciones por WhatsApp: directas, técnicas y aplicables a tu próxima sesión.
                </small>
              </div>
            </div>

            {/* Action Link to WhatsApp */}
            <div>
              <a
                href={getWhatsAppLink(
                  `Hola Jorge! Estuve viendo el análisis biomecánico de ${current.name} en tu web y quiero que revises mis videos para desbloquear la skill.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn-primary w-full text-center"
              >
                <span>MANDAR MI VIDEO A JORGE DANIEL</span>
                <span aria-hidden="true">↗</span>
              </a>
              <small className="block text-center text-[10px] text-[#8e8b98] mt-2">
                Revisión inicial sin costo · Directo a su WhatsApp personal
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
