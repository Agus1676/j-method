import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/content';

interface Milestone {
  level: string;
  name: string;
  entryReq: string;
  keyCue: string;
  targetHold: string;
}

interface RoadmapSkill {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  prerequisites: string;
  injuryTrap: string;
  milestones: Milestone[];
}

const ROADMAP_DATA: RoadmapSkill[] = [
  {
    id: 'planche',
    name: 'Planche',
    subtitle: 'Dominio de Empuje Isométrico & Palanca Anterior',
    description:
      'La skill rey de la calistenia requiere acondicionamiento previo del tendón distal del bíceps y una protracción activa despiadada.',
    prerequisites: '12 fondos en paralelas estrictos + 15 s Planche Lean en suelo con protracción completa.',
    injuryTrap: 'Forzar intentos de Tuck o Straddle con brazos flexionados («cheat planche»), sobrecargando la articulación del codo.',
    milestones: [
      {
        level: 'Fase 01',
        name: 'Planche Lean + Pseudo Push-Ups',
        entryReq: 'Fuerza básica de empuje',
        keyCue: 'Bloqueo a 0° de codos y protracción activa constante',
        targetHold: '20 s hold limpio',
      },
      {
        level: 'Fase 02',
        name: 'Tuck Planche Estricta',
        entryReq: '15 s Planche Lean con hombros pasados',
        keyCue: 'Rodillas al pecho sin perder altura escapular',
        targetHold: '10–12 s sólidos',
      },
      {
        level: 'Fase 03',
        name: 'Advanced Tuck / Half Lay Planche',
        entryReq: '10 s Tuck Planche repetibles',
        keyCue: 'Apertura de cadera a 90° con retroversión pélvica',
        targetHold: '6–8 s controlados',
      },
      {
        level: 'Fase 04',
        name: 'Straddle & Full Planche',
        entryReq: 'Advanced Tuck sólida + fondos pesados',
        keyCue: 'Cadena anterior compacta y puntas de pie en tensión',
        targetHold: '5–10 s libres',
      },
    ],
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    subtitle: 'Tensión Isométrica Horizontal de Dorsal & Core',
    description:
      'Requiere una conexión profunda con el dorsal ancho y una depresión escapular sólida para no colgarse de los tendones.',
    prerequisites: '10 dominadas estrictas al pecho + 10 s Scapular Pull hold.',
    injuryTrap: 'Tirar con los brazos flexionados buscando la horizontal en vez de empujar la barra hacia las caderas con brazos rectos.',
    milestones: [
      {
        level: 'Fase 01',
        name: 'Tuck Front Lever + Scapular Depressions',
        entryReq: '10 dominadas estrictas',
        keyCue: 'Empuje de barra hacia abajo con brazos rectos',
        targetHold: '15 s hold',
      },
      {
        level: 'Fase 02',
        name: 'Advanced Tuck Front Lever',
        entryReq: '12 s Tuck limpia',
        keyCue: 'Espalda completamente plana a 90° de rodillas',
        targetHold: '10 s repetibles',
      },
      {
        level: 'Fase 03',
        name: 'One Leg & Half Lay Front Lever',
        entryReq: '8 s Advanced Tuck sólida',
        keyCue: 'Apertura gradual sin que caiga la pelvis',
        targetHold: '6–8 s por pierna',
      },
      {
        level: 'Fase 04',
        name: 'Full Front Lever',
        entryReq: 'Half Lay consistente + Front Lever Raises',
        keyCue: 'Cuerpo como una tabla perfecta paralelo al suelo',
        targetHold: '5–10 s estricto',
      },
    ],
  },
  {
    id: 'handstand',
    name: 'Handstand (Pino)',
    subtitle: 'Arquitectura Invertida & Conciencia Espacial',
    description:
      'No es fuerza bruta: es movilidad de hombro, alineación escapular y calibración micrométrica con las yemas de los dedos.',
    prerequisites: '30 s Chest-to-wall con hombros abiertos + movilidad de flexión dorsal de muñeca.',
    injuryTrap: 'Patear a lo loco sin entender la salida con pirueta (bailout), generando miedo a caerse de espaldas.',
    milestones: [
      {
        level: 'Fase 01',
        name: 'Chest-to-Wall Handstand & Salidas',
        entryReq: 'Pike push-ups cómodas',
        keyCue: 'Cuerpo pegado a la pared sin banana lumbar',
        targetHold: '45 s continuos',
      },
      {
        level: 'Fase 02',
        name: 'Patadas Controladas & Separaciones de Pared',
        entryReq: '30 s Chest-to-wall perfecto',
        keyCue: 'Patear con una sola pierna manteniendo la pelvis neutra',
        targetHold: '5 s hold libre',
      },
      {
        level: 'Fase 03',
        name: 'Handstand Libre Consistente',
        entryReq: 'Entradas repetibles',
        keyCue: 'Grip activo con los dedos y empuje hacia arriba',
        targetHold: '15–30 s sin mover manos',
      },
      {
        level: 'Fase 04',
        name: 'Handstand Push-Ups & Formas (Straddle/Stag)',
        entryReq: '25 s Handstand libre consistente',
        keyCue: 'Fuerza excéntrica y concéntrica sobre la vertical',
        targetHold: 'Holds 45 s + HSPU',
      },
    ],
  },
  {
    id: 'muscle-up',
    name: 'Bar Muscle-Up',
    subtitle: 'Potencia Explosiva & Transición Bar-to-Chest',
    description:
      'El puente entre los básicos y la calistenia avanzada. Combina aceleración explosiva y técnica de rotación de muñecas.',
    prerequisites: '8–10 dominadas altas (al esternón) + 10 fondos en barra recta (straight bar dips).',
    injuryTrap: 'Subir con un brazo antes que el otro («muscle up en pollo»), dañando severamente el manguito rotador.',
    milestones: [
      {
        level: 'Fase 01',
        name: 'Dominada Explosiva al Esternón',
        entryReq: '8 dominadas limpias',
        keyCue: 'Tracción explosiva con codos pegados al cuerpo',
        targetHold: '3 series de 5 reps altas',
      },
      {
        level: 'Fase 02',
        name: 'Transición con Banda & Saltos Controlados',
        entryReq: 'Dominada al esternón consistente',
        keyCue: 'Paso de muñecas sobre la barra en el punto muerto',
        targetHold: '5 reps sin pausa',
      },
      {
        level: 'Fase 03',
        name: 'Bar Muscle-Up Estricto (Simétrico)',
        entryReq: 'Transición fluida',
        keyCue: 'Codos simétricos entrando al mismo milisegundo',
        targetHold: '1–3 reps limpias',
      },
      {
        level: 'Fase 04',
        name: 'Muscle-Up Continuo & Lastrado',
        entryReq: '5 reps de Muscle-Up estricto',
        keyCue: 'Eficiencia de potencia sin balanceo excesivo',
        targetHold: '5–8 reps o +5kg lastre',
      },
    ],
  },
];

export const SkillRoadmap: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string>('planche');

  const current = ROADMAP_DATA.find((s) => s.id === activeSkill) || ROADMAP_DATA[0];

  return (
    <section
      id="roadmap"
      className="py-16 lg:py-20 border-t border-white/[0.08] bg-[#0c0c10]"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-12">
        {/* Header */}
        <div className="max-w-[650px] mb-10">
          <p className="jm-eyebrow mb-3">ROADMAP DE HABILIDADES J-METHOD</p>
          <h2
            id="roadmap-heading"
            className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.05em] leading-[1.06] text-[#f3f0ec]"
          >
            LA RUTA TÉCNICA
            <br />
            PASO A PASO. <span className="text-[#ef4255]">SIN LESIONES.</span>
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#a5a3b2] mt-3.5 leading-[1.8]">
            En calistenia no existen atajos, existen progresiones con biomecánica inteligente. Mirá en qué fase estás y cuál es tu siguiente eslabón.
          </p>
        </div>

        {/* Skill Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10">
          {ROADMAP_DATA.map((sk) => {
            const isSelected = sk.id === current.id;
            return (
              <button
                key={sk.id}
                type="button"
                onClick={() => setActiveSkill(sk.id)}
                className={`p-3.5 sm:p-4 rounded-[10px] border text-left transition-all ${
                  isSelected
                    ? 'bg-[#1b1720] border-[#ef4255] text-white shadow-[0_0_15px_rgba(239,66,85,0.2)]'
                    : 'bg-[#121217] border-white/[0.1] text-[#9c9aa8] hover:text-[#f3f0ec] hover:border-white/20'
                }`}
              >
                <span className="block text-[9px] uppercase font-mono tracking-wider text-[#ef4255] mb-1">
                  SKILL
                </span>
                <strong className="block text-[14px] sm:text-[16px] font-extrabold text-[#f3f0ec]">
                  {sk.name}
                </strong>
              </button>
            );
          })}
        </div>

        {/* Active Skill Overview Dossier */}
        <div className="bg-[#14141a] border border-white/[0.12] rounded-[14px] p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#ef4255]">
                {current.subtitle}
              </span>
              <h3 className="text-[26px] sm:text-[32px] font-extrabold tracking-[-0.04em] text-[#f3f0ec] mt-1">
                {current.name}
              </h3>
              <p className="text-[13px] text-[#b7b5c4] max-w-[550px] mt-2 leading-[1.75]">
                {current.description}
              </p>
            </div>

            <div className="bg-[#1b1722] border border-white/[0.1] p-4 rounded-[10px] max-w-[420px]">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-[#ff8491] mb-1">
                ⚠ Error crítico a evitar:
              </span>
              <p className="text-[11px] text-[#d6d4df] leading-[1.6]">
                {current.injuryTrap}
              </p>
            </div>
          </div>

          {/* 4 Milestones Progress Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {current.milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#0e0e13] border border-white/[0.08] hover:border-[#ef4255]/50 transition-colors rounded-[10px] p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#ef4255] mb-2">
                    <span className="font-bold">{m.level}</span>
                    <span className="text-white/40">0{idx + 1}/04</span>
                  </div>
                  <h4 className="text-[14px] font-extrabold text-[#f3f0ec] leading-snug mb-2">
                    {m.name}
                  </h4>
                  <div className="text-[10px] text-[#9a97a8] space-y-1.5 mb-3">
                    <p>
                      <strong className="text-[#e2dfea]">Entrada:</strong> {m.entryReq}
                    </p>
                    <p>
                      <strong className="text-[#ef4255]">Clave:</strong> {m.keyCue}
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
                  <span className="text-[#7f7c8d] uppercase text-[8px] font-bold">
                    Meta de hold
                  </span>
                  <strong className="text-[#f3f0ec] font-mono font-bold">
                    {m.targetHold}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1c141d] to-[#121217] border border-white/[0.12] rounded-[12px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-[16px] sm:text-[18px] font-extrabold text-[#f3f0ec]">
              ¿No sabés exactamente en cuál de estas 4 fases estás?
            </h4>
            <p className="text-[12px] text-[#a5a3b2] mt-0.5">
              Hacé el test de 3 pasos o enviale tu video actual a Jorge para ubicar tu punto de partida.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a href="#diagnostico" className="jm-btn-primary text-center w-full sm:w-auto">
              <span>HACER DIAGNÓSTICO</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={getWhatsAppLink(
                `Hola Jorge! Quiero que me ubiques en el roadmap de ${current.name} para saber en qué fase estoy y qué entrenar.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="jm-btn-ghost text-center w-full sm:w-auto"
            >
              <span>Consultar por WhatsApp</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
