import React, { useState, useRef } from 'react';
import {
  SKILLS_CATALOG,
  SKILL_LABELS,
  LEVEL_LABELS,
  getWhatsAppLink,
} from '../data/content';
import { SkillId, SkillLevelId, SupportMode } from '../types';

interface SkillMapQuizProps {
  onOpenGuide: () => void;
  onSelectProgramFromMap: (skill: SkillId, level: Exclude<SkillLevelId, 'base'>) => void;
}

export const SkillMapQuiz: React.FC<SkillMapQuizProps> = ({
  onOpenGuide,
  onSelectProgramFromMap,
}) => {
  const [step, setStep] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<SkillId | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<SkillLevelId | null>(null);
  const [selectedSupport, setSelectedSupport] = useState<SupportMode | null>(null);

  const stageTitleRef = useRef<HTMLHeadingElement>(null);

  const currentSkillObj = SKILLS_CATALOG.find((s) => s.id === selectedSkill) || null;

  const canContinue =
    (step === 0 && selectedSkill !== null) ||
    (step === 1 && selectedPoint !== null) ||
    (step === 2 && selectedSupport !== null);

  const isFinished = step === 3 && selectedSkill && selectedPoint && selectedSupport;

  const scrollToStage = () => {
    setTimeout(() => {
      stageTitleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue) return;
    setStep((prev) => prev + 1);
    scrollToStage();
  };

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
    scrollToStage();
  };

  const handleEdit = () => {
    setStep(0);
    scrollToStage();
  };

  const buildWhatsAppDiagnosisUrl = () => {
    if (!selectedSkill || !selectedPoint || !selectedSupport) return '#';
    const skillName = SKILL_LABELS[selectedSkill];
    const levelName = LEVEL_LABELS[selectedPoint];
    const modeName =
      selectedSupport === 'review'
        ? 'Coaching 1 a 1 con acompañamiento y revisión técnica'
        : 'Ruta autoguiada J-Method (Bloque 8 semanas)';

    const msg = `Hola Jorge! Completé el *Skill Map de J-METHOD* en la web:
• *Mi prioridad:* ${skillName}
• *Punto de partida:* ${levelName}
• *Modalidad elegida:* ${modeName}

Quiero que revises mi caso para empezar a entrenar con criterio. ¿Cómo seguimos?`;

    return getWhatsAppLink(msg);
  };

  const stepsMeta = ['Tu objetivo', 'Tu punto de partida', 'Tu forma de entrenar'];
  const progressPct = isFinished ? 100 : Math.round((step / 3) * 100);

  return (
    <section
      id="mapa"
      aria-labelledby="map-flow-title"
      className="max-w-[1184px] mx-auto px-5 sm:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[0.38fr_1fr] items-start gap-7 lg:gap-12 scroll-mt-20"
    >
      {/* Left Sticky Editorial Intro */}
      <div className="lg:sticky lg:top-28">
        <p className="jm-eyebrow mb-3.5">TU PUNTO DE PARTIDA</p>
        <h2
          id="map-flow-title"
          className="text-[30px] sm:text-[38px] font-extrabold tracking-[-0.055em] leading-[1.1] text-[#f3f0ec] mb-4"
        >
          Una prioridad.
          <br />
          <span className="text-[#9c8da7]">Un camino más claro.</span>
        </h2>
        <p className="text-[12px] sm:text-[13px] text-[#b1a4ba] max-w-[290px] leading-[1.9] hidden sm:block">
          Empezá con lo que podés hacer hoy. También hay un siguiente paso si todavía estás construyendo tu base.
        </p>

        {/* Step Index List */}
        <ol className="hidden lg:grid my-6 p-0 list-none">
          {stepsMeta.map((label, idx) => {
            const isActive = step === idx;
            const isDone = step > idx;
            return (
              <li
                key={label}
                className={`border-t border-white/[0.12] py-3.5 flex items-center gap-4 text-[11px] font-semibold transition-colors ${
                  isActive
                    ? 'text-white'
                    : isDone
                    ? 'text-[#d3c8dc]'
                    : 'text-[#8e8299]'
                }`}
              >
                <span className="font-mono text-[9px] text-[#e27186]">
                  0{idx + 1}
                </span>
                <span>{label}</span>
                {isDone && (
                  <span className="ml-auto text-[10px] text-[#ef4255]">✓</span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="hidden lg:block text-[10px] text-[#95859f] leading-[1.75]">
          <span aria-hidden="true" className="text-[#ef7488] mr-1">↳</span>
          Tus respuestas orientan esta visita.
          <br />
          Sin email, registro ni pago.
        </p>
      </div>

      {/* Right Interactive Workspace */}
      <div className="bg-[#151319] border border-white/[0.14] rounded-[15px] p-5 sm:p-7 shadow-[0_15px_70px_rgba(0,0,0,0.35)] min-w-0">
        {/* Progress Meta */}
        <div className="flex items-center justify-between gap-4 mb-3 text-[8px] sm:text-[9px] font-bold tracking-[0.09em] uppercase">
          <span className="text-[#e7cfdc]">
            {isFinished ? 'TU RUTA ESTÁ LISTA' : `PASO ${step + 1} DE 3`}
          </span>
          <span className="text-[#b9a8c3]">SKILL MAP / JORGE DANIEL SW</span>
        </div>

        {/* 3px Crimson Progress Bar */}
        <div
          className="w-full h-[3px] bg-white/[0.12] rounded overflow-hidden mb-6"
          role="progressbar"
          aria-label="Progreso del Skill Map"
          aria-valuemin={0}
          aria-valuemax={3}
          aria-valuenow={step}
        >
          <span
            className="block h-full bg-[#ec3853] rounded transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <form onSubmit={handleNext} className="m-0">
          <div>
            <h3
              ref={stageTitleRef}
              tabIndex={-1}
              className="text-[23px] sm:text-[26px] font-extrabold tracking-[-0.045em] leading-[1.25] text-[#f3f0ec] mb-2.5 focus:outline-none"
            >
              {step === 0
                ? '¿Qué querés trabajar?'
                : step === 1
                ? '¿Dónde estás ahora?'
                : step === 2
                ? '¿Cómo querés avanzar?'
                : 'Tu ruta empieza aquí.'}
            </h3>

            {/* STEP 0: CHOOSE SKILL (4 Photo Cards) */}
            {step === 0 && (
              <div className="animate-jm-enter">
                <p className="text-[12px] sm:text-[13px] text-[#bcaec6] mb-5 leading-[1.8]">
                  Elegí tu prioridad. No necesitás dominarla para empezar a orientarte.
                </p>

                <fieldset className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 border-0 p-0 m-0">
                  <legend className="sr-only">Tu skill prioritaria</legend>
                  {SKILLS_CATALOG.map((sk) => {
                    const isSelected = selectedSkill === sk.id;
                    return (
                      <label
                        key={sk.id}
                        className={`group cursor-pointer rounded-[10px] overflow-hidden border transition-all relative block ${
                          isSelected
                            ? 'bg-[#26151f] border-[#ef5971] shadow-[0_0_25px_rgba(239,66,85,0.2)]'
                            : 'bg-[#0d0c11] border-white/[0.18] hover:border-[#cfa9bb]'
                        }`}
                      >
                        <div className="jm-athlete-frame">
                          <img
                            src={sk.image}
                            alt={`Ejecución de ${sk.name}`}
                            loading="lazy"
                            style={{ objectPosition: sk.objectPosition }}
                          />
                        </div>

                        <span className="border-t border-white/[0.08] p-3 grid gap-1 min-h-[78px] sm:min-h-[88px] content-start">
                          <strong className="text-[12px] sm:text-[13px] font-bold tracking-[-0.03em] text-[#f3f0ec]">
                            {sk.name}
                          </strong>
                          <span className="text-[9px] sm:text-[10px] text-[#b8a7c2] leading-[1.6]">
                            {sk.shortDesc}
                          </span>
                        </span>

                        <input
                          type="radio"
                          name="map-skill"
                          value={sk.id}
                          checked={isSelected}
                          onChange={() => {
                            if (selectedSkill !== sk.id) {
                              setSelectedPoint(null);
                            }
                            setSelectedSkill(sk.id);
                          }}
                          className="sr-only"
                        />

                        {/* Top-right + / ✓ badge */}
                        <span
                          aria-hidden="true"
                          className={`w-[23px] h-[23px] rounded-full grid place-items-center text-[13px] font-bold absolute top-2.5 right-2.5 z-10 border transition-colors ${
                            isSelected
                              ? 'bg-[#cf2743] border-[#ee738d] text-white'
                              : 'bg-[#111014]/80 border-white/60 text-white'
                          }`}
                        >
                          {isSelected ? '✓' : '+'}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              </div>
            )}

            {/* STEP 1: TECHNICAL ENTRY LEVEL CRITERIA */}
            {step === 1 && currentSkillObj && (
              <div className="animate-jm-enter">
                <p className="text-[12px] sm:text-[13px] text-[#bcaec6] mb-5 leading-[1.85]">
                  Tu prioridad:{' '}
                  <strong className="text-[#eadde9] font-semibold">
                    {currentSkillObj.name}
                  </strong>
                  . Leé los criterios y elegí lo que podés repetir con calidad. Si dudás, empezá por el nivel inferior.
                </p>

                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-0 p-0 m-0">
                  <legend className="sr-only">Tu nivel en {currentSkillObj.name}</legend>

                  {/* 00: Base option */}
                  <label
                    className={`cursor-pointer rounded-[9px] border p-4 flex items-start gap-3 relative transition-all sm:min-h-[160px] ${
                      selectedPoint === 'base'
                        ? 'jm-surface-bone shadow-lg'
                        : 'bg-[#101016] border-white/[0.16] hover:border-white/35 text-[#f3f0ec]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="map-level"
                      value="base"
                      checked={selectedPoint === 'base'}
                      onChange={() => setSelectedPoint('base')}
                      className="mt-1 w-4 h-4 accent-[#b52c4b] flex-shrink-0"
                    />
                    <span className="grid gap-2">
                      <strong className="text-[12px] sm:text-[13px] font-bold pr-6 leading-[1.4]">
                        Estoy construyendo la base.
                      </strong>
                      <span
                        className={`text-[11px] leading-[1.75] ${
                          selectedPoint === 'base' ? 'text-[#635060]' : 'text-[#b7a9c0]'
                        }`}
                      >
                        Todavía no cumplo la entrada de Principiante o necesito ayuda de Jorge para ubicarme desde cero sin lesionarme.
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[9px] absolute top-4 right-3.5 ${
                        selectedPoint === 'base' ? 'text-[#9e3e59] font-bold' : 'text-[#9d839e]'
                      }`}
                    >
                      00
                    </span>
                  </label>

                  {/* 01, 02, 03 Level Options */}
                  {currentSkillObj.levels.map((lvl) => {
                    const isSelected = selectedPoint === lvl.id;
                    return (
                      <label
                        key={lvl.id}
                        className={`cursor-pointer rounded-[9px] border p-4 flex items-start gap-3 relative transition-all sm:min-h-[160px] ${
                          isSelected
                            ? 'jm-surface-bone shadow-lg'
                            : 'bg-[#101016] border-white/[0.16] hover:border-white/35 text-[#f3f0ec]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="map-level"
                          value={lvl.id}
                          checked={isSelected}
                          onChange={() => setSelectedPoint(lvl.id)}
                          className="mt-1 w-4 h-4 accent-[#b52c4b] flex-shrink-0"
                        />
                        <span className="grid gap-2">
                          <strong className="text-[12px] sm:text-[13px] font-bold pr-6 leading-[1.4]">
                            {lvl.label}
                          </strong>
                          <span
                            className={`text-[11px] leading-[1.75] ${
                              isSelected ? 'text-[#635060]' : 'text-[#b7a9c0]'
                            }`}
                          >
                            {lvl.entryTest}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`font-mono text-[9px] absolute top-4 right-3.5 ${
                            isSelected ? 'text-[#9e3e59] font-bold' : 'text-[#9d839e]'
                          }`}
                        >
                          {lvl.index}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>

                <p className="text-[10px] text-[#9f8cad] mt-4">
                  Son criterios prácticos de orientación del sistema J-METHOD.
                </p>
              </div>
            )}

            {/* STEP 2: SUPPORT MODE (Autonomy vs Coaching with Jorge) */}
            {step === 2 && (
              <div className="animate-jm-enter">
                <p className="text-[12px] sm:text-[13px] text-[#bcaec6] mb-5 leading-[1.85]">
                  Elegí entre una ruta estructurada para entrenar con autonomía o el acompañamiento directo de Jorge Daniel que programe, revise tus videos y ajuste con vos.
                </p>

                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-0 p-0 m-0">
                  <legend className="sr-only">Elegí el apoyo que buscás</legend>

                  <label
                    className={`cursor-pointer rounded-[11px] border p-5 sm:p-6 grid content-start gap-3.5 sm:min-h-[215px] relative transition-all ${
                      selectedSupport === 'autonomy'
                        ? 'jm-surface-bone shadow-lg'
                        : 'bg-[#100e14] border-white/[0.18] hover:border-white/40 text-[#f3f0ec]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="map-support"
                      value="autonomy"
                      checked={selectedSupport === 'autonomy'}
                      onChange={() => setSelectedSupport('autonomy')}
                      className="sr-only"
                    />
                    <span
                      className={`font-mono text-[10px] tracking-[0.05em] font-bold ${
                        selectedSupport === 'autonomy' ? 'text-[#b32847]' : 'text-[#eb7b91]'
                      }`}
                    >
                      01 /
                    </span>
                    <strong className="text-[19px] sm:text-[21px] font-bold tracking-[-0.045em] leading-[1.25]">
                      Quiero una ruta.
                      <br />
                      Entreno por mi cuenta.
                    </strong>
                    <span
                      className={`text-[12px] leading-[1.75] ${
                        selectedSupport === 'autonomy' ? 'text-[#635060]' : 'text-[#b8a7c4]'
                      }`}
                    >
                      Bloque J-Method de 8 semanas, criterios claros y reglas prácticas para avanzar con autonomía.
                    </span>
                  </label>

                  <label
                    className={`cursor-pointer rounded-[11px] border p-5 sm:p-6 grid content-start gap-3.5 sm:min-h-[215px] relative transition-all ${
                      selectedSupport === 'review'
                        ? 'jm-surface-bone shadow-lg'
                        : 'bg-[#100e14] border-white/[0.18] hover:border-white/40 text-[#f3f0ec]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="map-support"
                      value="review"
                      checked={selectedSupport === 'review'}
                      onChange={() => setSelectedSupport('review')}
                      className="sr-only"
                    />
                    <span
                      className={`font-mono text-[10px] tracking-[0.05em] font-bold ${
                        selectedSupport === 'review' ? 'text-[#b32847]' : 'text-[#eb7b91]'
                      }`}
                    >
                      02 /
                    </span>
                    <strong className="text-[19px] sm:text-[21px] font-bold tracking-[-0.045em] leading-[1.25]">
                      Quiero un plan.
                      <br />
                      Y a Jorge conmigo.
                    </strong>
                    <span
                      className={`text-[12px] leading-[1.75] ${
                        selectedSupport === 'review' ? 'text-[#635060]' : 'text-[#b8a7c4]'
                      }`}
                    >
                      Programación individualizada, revisión técnica en video por WhatsApp y seguimiento de Jorge Daniel (Online o Presencial en Salta).
                    </span>
                  </label>
                </fieldset>
              </div>
            )}

            {/* STEP 3: DYNAMIC PRESCRIPTION RESULT */}
            {isFinished && selectedSkill && selectedPoint && (
              <div className="animate-jm-enter" aria-live="polite">
                {/* 3-Column Summary Definition List */}
                <dl className="grid grid-cols-3 gap-3 border-b border-white/[0.14] pb-4 my-4">
                  <div>
                    <dt className="text-[9px] text-[#a18aae] uppercase tracking-wider mb-1">
                      Tu prioridad
                    </dt>
                    <dd className="text-[11px] sm:text-[12px] font-bold text-[#ebdce9] m-0">
                      {SKILL_LABELS[selectedSkill]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[9px] text-[#a18aae] uppercase tracking-wider mb-1">
                      Punto de partida
                    </dt>
                    <dd className="text-[11px] sm:text-[12px] font-bold text-[#ebdce9] m-0">
                      {LEVEL_LABELS[selectedPoint]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[9px] text-[#a18aae] uppercase tracking-wider mb-1">
                      Tu elección
                    </dt>
                    <dd className="text-[11px] sm:text-[12px] font-bold text-[#ebdce9] m-0">
                      {selectedSupport === 'review' ? 'Con acompañamiento' : 'Con autonomía'}
                    </dd>
                  </div>
                </dl>

                {/* Prescription Case A: Coaching 1:1 */}
                {selectedSupport === 'review' ? (
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.1em] text-[#e98ba0] uppercase mb-2">
                      J-METHOD COACHING / CON JORGE DANIEL
                    </p>
                    <h4 className="text-[32px] sm:text-[38px] font-extrabold tracking-[-0.055em] leading-[1.1] text-[#f3f0ec] mb-4">
                      Tu objetivo.
                      <br />
                      Un plan para vos.
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-[#bfa9cb] max-w-[540px] leading-[1.9] mb-5">
                      Elegiste acompañamiento personalizado para{' '}
                      <strong className="text-white">{SKILL_LABELS[selectedSkill]}</strong> (
                      {LEVEL_LABELS[selectedPoint].toLowerCase()}). El siguiente paso es enviarle tu diagnóstico a Jorge Daniel para que valore tu caso personalmente con programación a medida, revisión técnica por video y seguimiento semanal.
                    </p>

                    <a
                      href={buildWhatsAppDiagnosisUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jm-btn-primary w-full"
                    >
                      <span>QUIERO QUE JORGE REVISE MI CASO (WHATSAPP)</span>
                      <span aria-hidden="true">↗</span>
                    </a>

                    <p className="text-[10px] text-[#a08bac] mt-3">
                      Valoración gratuita directa con Jorge Daniel (+54 9 387 466-7930). Recibirás la propuesta antes de decidir.
                    </p>
                  </div>
                ) : selectedPoint === 'base' ? (
                  /* Prescription Case B: Building the Base */
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.1em] text-[#e98ba0] uppercase mb-2">
                      PRIMERO, UNA BASE QUE TE SOSTENGA.
                    </p>
                    <h4 className="text-[32px] sm:text-[38px] font-extrabold tracking-[-0.055em] leading-[1.1] text-[#f3f0ec] mb-4">
                      Tu primer paso
                      <br />
                      también cuenta.
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-[#bfa9cb] max-w-[540px] leading-[1.9] mb-5">
                      Indicaste que todavía estás construyendo la base para{' '}
                      <strong className="text-white">{SKILL_LABELS[selectedSkill]}</strong>. Abrí la guía gratuita para revisar cómo preparar tus básicos y escápulas, o escribile a Jorge para armar tu bloque de adaptación inicial.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={onOpenGuide}
                        className="jm-btn-primary w-full"
                      >
                        <span>ABRIR GUÍA SKILL MAP GRATIS</span>
                        <span aria-hidden="true">↗</span>
                      </button>

                      <a
                        href={buildWhatsAppDiagnosisUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jm-btn-ghost w-full"
                      >
                        <span>CONSULTAR A JORGE POR WHATSAPP</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Prescription Case C: J-Method Autonomous Program */
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.1em] text-[#e98ba0] uppercase mb-2">
                      J-METHOD / TU RUTA AUTOGUIADA
                    </p>
                    <h4 className="text-[32px] sm:text-[38px] font-extrabold tracking-[-0.055em] leading-[1.1] text-[#f3f0ec] mb-4">
                      {SKILL_LABELS[selectedSkill]}.
                      <br />
                      Desde tu nivel {LEVEL_LABELS[selectedPoint].toLowerCase()}.
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-[#bfa9cb] max-w-[540px] leading-[1.9] mb-4">
                      Elegiste <strong className="text-white">{SKILL_LABELS[selectedSkill]}</strong> en nivel{' '}
                      <strong className="text-white">{LEVEL_LABELS[selectedPoint].toLowerCase()}</strong>. Cumplís los criterios para iniciar un bloque estructurado de 8 semanas con progresiones exactas y reglas para saber cuándo avanzar.
                    </p>

                    <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-[10px] font-semibold text-[#d3b9df]">
                      <li>
                        <span className="text-[#ef7c96] mr-1.5">✓</span>Sesiones estructuradas (8 semanas)
                      </li>
                      <li>
                        <span className="text-[#ef7c96] mr-1.5">✓</span>Progresiones y criterios de avance
                      </li>
                      <li>
                        <span className="text-[#ef7c96] mr-1.5">✓</span>Un pago único, sin suscripción
                      </li>
                    </ul>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                      <a
                        href="#programas"
                        onClick={() =>
                          onSelectProgramFromMap(
                            selectedSkill,
                            selectedPoint as Exclude<SkillLevelId, 'base'>
                          )
                        }
                        className="jm-btn-primary w-full"
                      >
                        <span>CONFIGURAR MI PROGRAMA · $24.900</span>
                        <span aria-hidden="true">↓</span>
                      </a>

                      <a
                        href={buildWhatsAppDiagnosisUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jm-btn-ghost w-full"
                      >
                        <span>PEDIR ESTE BLOQUE POR WHATSAPP</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Result Footer Tools */}
                <div className="border-t border-white/[0.1] mt-6 pt-3.5 flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold text-[#d7bedf]">
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors min-h-[38px]"
                  >
                    <span>Revisar mis respuestas</span>
                    <span aria-hidden="true">↶</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenGuide}
                    className="inline-flex items-center gap-2 text-[#c8bfcf] hover:text-white transition-colors min-h-[38px]"
                  >
                    <span>Leer la guía Skill Map gratis</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step Navigation Footer */}
          {!isFinished && (
            <div className="border-t border-white/[0.12] mt-6 pt-4 flex items-center justify-between gap-4">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-[11px] sm:text-[12px] font-semibold text-[#d1bfdb] hover:text-white min-h-[42px] px-2 transition-colors"
                >
                  ← Atrás
                </button>
              ) : (
                <span className="text-[10px] text-[#a38eaf]">
                  Elegí una opción para continuar.
                </span>
              )}

              <button
                type="submit"
                disabled={!canContinue}
                className="jm-btn-primary min-w-[165px]"
              >
                <span>{step === 2 ? 'VER MI RUTA' : 'CONTINUAR'}</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
