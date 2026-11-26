import React, { useState, useRef } from 'react';
import {
  SKILLS_CATALOG,
  SKILL_LABELS,
  LEVEL_LABELS,
  BLOCKER_OPTIONS,
  getWhatsAppLink,
} from '../data/content';
import { SkillId, SkillLevelId, BlockerId, ModalityId } from '../types';

export const SkillMapQuiz: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<SkillId | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<SkillLevelId | null>(null);
  const [selectedBlocker, setSelectedBlocker] = useState<BlockerId | null>(null);
  const [selectedModality, setSelectedModality] = useState<ModalityId>('online');
  const [daysPerWeek, setDaysPerWeek] = useState<'2-3' | '4' | '5+'>('4');

  const stageTitleRef = useRef<HTMLHeadingElement>(null);

  const currentSkillObj =
    SKILLS_CATALOG.find((s) => s.id === selectedSkill) || null;
  const currentBlockerObj =
    BLOCKER_OPTIONS.find((b) => b.id === selectedBlocker) || null;

  const canContinue =
    (step === 0 && selectedSkill !== null) ||
    (step === 1 && selectedPoint !== null) ||
    (step === 2 && selectedBlocker !== null);

  const isFinished =
    step === 3 &&
    selectedSkill !== null &&
    selectedPoint !== null &&
    selectedBlocker !== null;

  const scrollToStage = () => {
    setTimeout(() => {
      stageTitleRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
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

  const getBiomechanicalFocus = (): string => {
    if (!currentSkillObj || !selectedPoint) return '';
    if (selectedPoint === 'base') {
      return currentSkillObj.basePrescription;
    }
    const lvl = currentSkillObj.levels.find((l) => l.id === selectedPoint);
    return lvl ? lvl.focus : currentSkillObj.basePrescription;
  };

  const buildWhatsAppDiagnosisUrl = () => {
    if (!selectedSkill || !selectedPoint || !currentBlockerObj) return '#';
    const skillName = SKILL_LABELS[selectedSkill];
    const levelName = LEVEL_LABELS[selectedPoint];
    const modName =
      selectedModality === 'intensivo'
        ? 'Programa Intensivo 12 Semanas'
        : 'Coaching Online 1 a 1';

    const msg = `Hola Jorge! Completé mi *Diagnóstico Técnico J-METHOD* en la web:
• *Objetivo principal:* ${skillName}
• *Nivel actual:* ${levelName}
• *Principal bloqueo:* ${currentBlockerObj.label}
• *Disponibilidad:* ${daysPerWeek} días por semana
• *Modalidad:* ${modName}

Quiero que revises mi ficha técnica para armar mi planificación. ¿Cómo empezamos?`;

    return getWhatsAppLink(msg);
  };

  const stepsMeta = [
    'Tu objetivo principal',
    'Tu punto de partida técnico',
    'Bloqueo actual y disponibilidad',
  ];
  const progressPct = isFinished ? 100 : Math.round((step / 3) * 100);

  return (
    <section
      id="diagnostico"
      aria-labelledby="map-flow-title"
      className="max-w-[1184px] mx-auto px-5 sm:px-12 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-[0.38fr_1fr] items-start gap-7 lg:gap-12 scroll-mt-20 border-t border-white/[0.08]"
    >
      {/* Left Sticky Editorial Intro */}
      <div className="lg:sticky lg:top-28">
        <p className="jm-eyebrow mb-3.5">DIAGNÓSTICO TÉCNICO INICIAL</p>
        <h2
          id="map-flow-title"
          className="text-[30px] sm:text-[38px] font-extrabold tracking-[-0.055em] leading-[1.08] text-[#f3f0ec] mb-4"
        >
          Dejá de guardar
          <br />
          rutinas.
          <br />
          <span className="text-[#ef4255]">Empezá la tuya.</span>
        </h2>
        <p className="text-[12px] sm:text-[13px] text-[#b1a4ba] max-w-[295px] leading-[1.85] hidden sm:block">
          Seleccioná dónde estás hoy y qué querés conseguir. El sistema genera tu ficha biomecánica inicial para que Jorge Daniel valore tu caso personalmente.
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
          Valoración técnica gratuita.
          <br />
          Directo con Jorge Daniel (@jorgedaniel_sw).
        </p>
      </div>

      {/* Right Interactive Workspace */}
      <div className="bg-[#151319] border border-white/[0.15] rounded-[15px] p-5 sm:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.4)] min-w-0">
        {/* Progress Meta */}
        <div className="flex items-center justify-between gap-4 mb-3 text-[8px] sm:text-[9px] font-bold tracking-[0.09em] uppercase">
          <span className="text-[#e7cfdc]">
            {isFinished
              ? 'FICHA TÉCNICA GENERADA'
              : `PASO ${step + 1} DE 3 · EVALUACIÓN`}
          </span>
          <span className="text-[#b9a8c3]">J-METHOD / JORGE DANIEL SW</span>
        </div>

        {/* 3px Crimson Progress Bar */}
        <div
          className="w-full h-[3px] bg-white/[0.12] rounded overflow-hidden mb-6"
          role="progressbar"
          aria-label="Progreso del diagnóstico"
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
              className="text-[22px] sm:text-[26px] font-extrabold tracking-[-0.045em] leading-[1.2] text-[#f3f0ec] mb-2.5 focus:outline-none"
            >
              {step === 0
                ? '¿Cuál es tu prioridad principal?'
                : step === 1
                ? '¿En qué punto técnico estás hoy?'
                : step === 2
                ? '¿Qué te frena hoy y cómo querés entrenar?'
                : 'Diagnóstico Técnico J-METHOD'}
            </h3>

            {/* STEP 0: CHOOSE SKILL (4 Photo Cards) */}
            {step === 0 && (
              <div className="animate-jm-enter">
                <p className="text-[12px] sm:text-[13px] text-[#bcaec6] mb-5 leading-[1.8]">
                  Elegí la habilidad central sobre la que querés estructurar tu planificación.
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

                        <span className="border-t border-white/[0.08] p-3 grid gap-1 min-h-[78px] sm:min-h-[86px] content-start">
                          <strong className="text-[12px] sm:text-[13px] font-bold tracking-[-0.03em] text-[#f3f0ec]">
                            {sk.name}
                          </strong>
                          <span className="text-[9px] sm:text-[10px] text-[#b8a7c2] leading-[1.55]">
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
                  Prioridad seleccionada:{' '}
                  <strong className="text-[#eadde9] font-semibold">
                    {currentSkillObj.name}
                  </strong>
                  . Leé las referencias prácticas y marcá lo que hoy podés ejecutar con técnica limpia.
                </p>

                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-0 p-0 m-0">
                  <legend className="sr-only">
                    Tu nivel en {currentSkillObj.name}
                  </legend>

                  {/* 00: Base option */}
                  <label
                    className={`cursor-pointer rounded-[9px] border p-4 flex items-start gap-3 relative transition-all sm:min-h-[155px] ${
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
                        Estoy construyendo la base
                      </strong>
                      <span
                        className={`text-[11px] leading-[1.7] ${
                          selectedPoint === 'base'
                            ? 'text-[#635060]'
                            : 'text-[#b7a9c0]'
                        }`}
                      >
                        Todavía no cumplo los requisitos del Nivel Principiante. Busco ganar fuerza base y control escapular desde cero.
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[9px] absolute top-4 right-3.5 ${
                        selectedPoint === 'base'
                          ? 'text-[#9e3e59] font-bold'
                          : 'text-[#9d839e]'
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
                        className={`cursor-pointer rounded-[9px] border p-4 flex items-start gap-3 relative transition-all sm:min-h-[155px] ${
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
                            className={`text-[11px] leading-[1.7] ${
                              isSelected ? 'text-[#635060]' : 'text-[#b7a9c0]'
                            }`}
                          >
                            {lvl.entryTest}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`font-mono text-[9px] absolute top-4 right-3.5 ${
                            isSelected
                              ? 'text-[#9e3e59] font-bold'
                              : 'text-[#9d839e]'
                          }`}
                        >
                          {lvl.index}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              </div>
            )}

            {/* STEP 2: BLOCKER, FREQUENCY & MODALITY */}
            {step === 2 && (
              <div className="animate-jm-enter space-y-5">
                <p className="text-[12px] sm:text-[13px] text-[#bcaec6] leading-[1.8]">
                  Identificá cuál es tu principal limitante actual y tu disponibilidad semanal para personalizar tu diagnóstico.
                </p>

                {/* Blocker Selection */}
                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-0 p-0 m-0">
                  <legend className="text-[11px] font-bold uppercase tracking-wider text-[#e4dce7] mb-2">
                    1. ¿Qué sentís que te frena más ahora?
                  </legend>
                  {BLOCKER_OPTIONS.map((blk, idx) => {
                    const isSelected = selectedBlocker === blk.id;
                    return (
                      <label
                        key={blk.id}
                        className={`cursor-pointer rounded-[9px] border p-3.5 flex items-start gap-3 relative transition-all ${
                          isSelected
                            ? 'jm-surface-bone shadow-md'
                            : 'bg-[#101016] border-white/[0.15] hover:border-white/35 text-[#f3f0ec]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="map-blocker"
                          value={blk.id}
                          checked={isSelected}
                          onChange={() => setSelectedBlocker(blk.id)}
                          className="mt-1 w-4 h-4 accent-[#b52c4b] flex-shrink-0"
                        />
                        <span className="grid gap-1">
                          <strong className="text-[12px] font-bold pr-5 leading-snug">
                            {blk.label}
                          </strong>
                          <span
                            className={`text-[11px] leading-[1.6] ${
                              isSelected ? 'text-[#635060]' : 'text-[#b7a9c0]'
                            }`}
                          >
                            {blk.desc}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`font-mono text-[8px] absolute top-3.5 right-3 ${
                            isSelected ? 'text-[#9e3e59] font-bold' : 'text-[#9d839e]'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>

                {/* Modality & Days Per Week Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.1]">
                  {/* Modality */}
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#e4dce7] mb-2">
                      2. Modalidad de preferencia
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedModality('online')}
                        className={`py-2.5 px-3 rounded-[8px] border text-[11px] font-bold transition-all text-left ${
                          selectedModality === 'online'
                            ? 'bg-[#eee7e1] border-[#eee7e1] text-[#261925]'
                            : 'bg-[#101016] border-white/[0.15] text-[#b8a7c2] hover:text-white'
                        }`}
                      >
                        <span className="block text-[9px] uppercase opacity-75">
                          Mensual 1 a 1
                        </span>
                        Coaching Online
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedModality('intensivo')}
                        className={`py-2.5 px-3 rounded-[8px] border text-[11px] font-bold transition-all text-left ${
                          selectedModality === 'intensivo'
                            ? 'bg-[#eee7e1] border-[#eee7e1] text-[#261925]'
                            : 'bg-[#101016] border-white/[0.15] text-[#b8a7c2] hover:text-white'
                        }`}
                      >
                        <span className="block text-[9px] uppercase opacity-75">
                          12 Semanas
                        </span>
                        Intensivo Skills
                      </button>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#e4dce7] mb-2">
                      3. Disponibilidad semanal
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['2-3', '4', '5+'] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDaysPerWeek(d)}
                          className={`py-2.5 px-2 rounded-[8px] border text-[11px] font-bold transition-all text-center ${
                            daysPerWeek === d
                              ? 'bg-[#eee7e1] border-[#eee7e1] text-[#261925]'
                              : 'bg-[#101016] border-white/[0.15] text-[#b8a7c2] hover:text-white'
                          }`}
                        >
                          <span className="block text-[9px] uppercase opacity-75">
                            Frecuencia
                          </span>
                          {d} días
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PROFESSIONAL BIOMECHANICAL ASSESSMENT DOSSIER */}
            {isFinished &&
              selectedSkill &&
              selectedPoint &&
              currentBlockerObj && (
                <div className="animate-jm-enter" aria-live="polite">
                  <p className="text-[11px] text-[#bcaec6] mb-4">
                    Informe preliminar configurado para tu valoración 1 a 1 con{' '}
                    <strong className="text-white">Jorge Daniel</strong>.
                  </p>

                  {/* 4-Column Executive Technical Summary */}
                  <dl className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-[#100e14] border border-white/[0.12] rounded-[11px] p-3.5 mb-5">
                    <div>
                      <dt className="text-[8px] font-mono text-[#ef4255] uppercase tracking-wider mb-0.5">
                        01 / PRIORIDAD
                      </dt>
                      <dd className="text-[12px] font-extrabold text-[#f3f0ec] m-0">
                        {SKILL_LABELS[selectedSkill]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[8px] font-mono text-[#ef4255] uppercase tracking-wider mb-0.5">
                        02 / PUNTO ACTUAL
                      </dt>
                      <dd className="text-[12px] font-extrabold text-[#f3f0ec] m-0">
                        {LEVEL_LABELS[selectedPoint]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[8px] font-mono text-[#ef4255] uppercase tracking-wider mb-0.5">
                        03 / FRECUENCIA
                      </dt>
                      <dd className="text-[12px] font-extrabold text-[#f3f0ec] m-0">
                        {daysPerWeek} días / semana
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[8px] font-mono text-[#ef4255] uppercase tracking-wider mb-0.5">
                        04 / MODALIDAD
                      </dt>
                      <dd className="text-[12px] font-extrabold text-[#f3f0ec] m-0">
                        {selectedModality === 'intensivo'
                          ? 'Intensivo 12 Sem.'
                          : 'Coaching Online 1:1'}
                      </dd>
                    </div>
                  </dl>

                  {/* 2 Architectural Prescription Cards (Bone + Obsidian) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {/* Card 1: Warm Bone Biomechanical Focus */}
                    <div className="bg-[#eee9e2] text-[#21191e] rounded-[11px] p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        <span className="text-[8px] font-extrabold tracking-[0.13em] text-[#8d4455] uppercase block mb-1.5">
                          FOCO BIOMECÁNICO INICIAL
                        </span>
                        <h4 className="text-[16px] sm:text-[18px] font-extrabold tracking-[-0.04em] leading-[1.2] mb-2">
                          Ruta técnica para {SKILL_LABELS[selectedSkill]}
                        </h4>
                        <p className="text-[11px] sm:text-[12px] text-[#4a3d49] leading-[1.7]">
                          {getBiomechanicalFocus()}
                        </p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-[#21191e]/15 text-[10px] font-bold text-[#a82140]">
                        ✓ Progresiones adaptadas sin sobrecarga articular
                      </div>
                    </div>

                    {/* Card 2: Dark Obsidian Blocker Resolution & Structure */}
                    <div className="bg-[#100e14] border border-white/[0.15] rounded-[11px] p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        <span className="text-[8px] font-extrabold tracking-[0.13em] text-[#ef8ca0] uppercase block mb-1.5">
                          ESTRATEGIA DE DESBLOQUEO ({daysPerWeek} DÍAS/SEM)
                        </span>
                        <h4 className="text-[16px] sm:text-[18px] font-extrabold tracking-[-0.04em] leading-[1.2] text-[#f3f0ec] mb-2">
                          Solución: {currentBlockerObj.label}
                        </h4>
                        <p className="text-[11px] sm:text-[12px] text-[#b8a7c2] leading-[1.7]">
                          {currentBlockerObj.solution}
                        </p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-white/[0.1] text-[10px] font-semibold text-[#d3c8dc]">
                        ✓ Seguimiento semanal 1 a 1 con Jorge Daniel
                      </div>
                    </div>
                  </div>

                  {/* Primary Action: Send Technical Dossier to Jorge on WhatsApp */}
                  <a
                    href={buildWhatsAppDiagnosisUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jm-btn-primary w-full"
                  >
                    <span>
                      ENVIAR MI FICHA TÉCNICA A JORGE DANIEL (WHATSAPP)
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>

                  {/* Result Footer Tools */}
                  <div className="border-t border-white/[0.1] mt-4 pt-3 flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold text-[#d7bedf]">
                    <button
                      type="button"
                      onClick={handleEdit}
                      className="inline-flex items-center gap-2 hover:text-white transition-colors min-h-[34px]"
                    >
                      <span>Modificar respuestas del diagnóstico</span>
                      <span aria-hidden="true">↶</span>
                    </button>

                    <span className="text-[10px] text-[#95859f]">
                      Respuesta directa de Jorge Daniel · Cupos limitados
                    </span>
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
                className="jm-btn-primary min-w-[175px]"
              >
                <span>
                  {step === 2 ? 'GENERAR DIAGNÓSTICO' : 'CONTINUAR'}
                </span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
