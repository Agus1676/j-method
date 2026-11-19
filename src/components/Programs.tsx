import React, { useState, useEffect } from 'react';
import {
  J_METHOD_TIERS,
  SKILLS_CATALOG,
  SKILL_LABELS,
  LEVEL_LABELS,
  getWhatsAppLink,
} from '../data/content';
import { SkillId, SkillLevelId, TierId } from '../types';

interface ProgramsProps {
  preselectedSkill?: SkillId | null;
  preselectedLevel?: Exclude<SkillLevelId, 'base'> | null;
}

export const Programs: React.FC<ProgramsProps> = ({
  preselectedSkill,
  preselectedLevel,
}) => {
  const [selectedTier, setSelectedTier] = useState<TierId>('individual');
  const [selectedSkills, setSelectedSkills] = useState<SkillId[]>(['front-lever']);
  const [skillLevels, setSkillLevels] = useState<
    Record<SkillId, Exclude<SkillLevelId, 'base'>>
  >({
    planche: 'principiante',
    'front-lever': 'principiante',
    handstand: 'principiante',
    'muscle-up': 'principiante',
  });
  const [coachingModality, setCoachingModality] = useState<'online' | 'salta'>('online');

  // Sync when user comes from Skill Map result
  useEffect(() => {
    if (preselectedSkill) {
      setSelectedTier('individual');
      setSelectedSkills([preselectedSkill]);
      if (preselectedLevel) {
        setSkillLevels((prev) => ({
          ...prev,
          [preselectedSkill]: preselectedLevel,
        }));
      }
    }
  }, [preselectedSkill, preselectedLevel]);

  const currentTierObj =
    J_METHOD_TIERS.find((t) => t.id === selectedTier) || J_METHOD_TIERS[0];

  const handleSelectTier = (tier: TierId) => {
    setSelectedTier(tier);
    const tierDef = J_METHOD_TIERS.find((t) => t.id === tier)!;
    if (tierDef.count === 4) {
      setSelectedSkills(['planche', 'front-lever', 'handstand', 'muscle-up']);
    } else if (selectedSkills.length > tierDef.count) {
      setSelectedSkills(selectedSkills.slice(0, tierDef.count));
    } else if (selectedSkills.length < tierDef.count) {
      const allIds: SkillId[] = ['planche', 'front-lever', 'handstand', 'muscle-up'];
      const next = [...selectedSkills];
      for (const id of allIds) {
        if (!next.includes(id) && next.length < tierDef.count) {
          next.push(id);
        }
      }
      setSelectedSkills(next);
    }
  };

  const handleToggleSkill = (skillId: SkillId) => {
    if (currentTierObj.count === 4) return;
    if (currentTierObj.count === 1) {
      setSelectedSkills([skillId]);
      return;
    }
    // Duo mode (2 skills)
    if (selectedSkills.includes(skillId)) {
      if (selectedSkills.length > 1) {
        setSelectedSkills(selectedSkills.filter((id) => id !== skillId));
      }
    } else {
      if (selectedSkills.length < 2) {
        setSelectedSkills([...selectedSkills, skillId]);
      } else {
        setSelectedSkills([selectedSkills[1], skillId]);
      }
    }
  };

  const buildJMethodWhatsAppUrl = () => {
    const summary = selectedSkills
      .map((id) => `${SKILL_LABELS[id]} (${LEVEL_LABELS[skillLevels[id]]})`)
      .join(' + ');

    const msg = `Hola Jorge! Quiero adquirir el programa autoguiado *J-METHOD (${currentTierObj.label} · ${currentTierObj.priceArs})*:
• *Ruta elegida:* ${summary}

¿Me pasás los datos para acceder al bloque de 8 semanas?`;
    return getWhatsAppLink(msg);
  };

  const buildCoachingWhatsAppUrl = () => {
    const modText =
      coachingModality === 'salta'
        ? 'Entrenamiento Presencial en Salta Capital + Seguimiento'
        : 'Coaching Online 1 a 1 con revisión técnica semanal';

    const msg = `Hola Jorge! Quiero solicitar la *valoración gratuita* para entrenar con vos:
• *Modalidad:* ${modText}

¿Cómo hacemos para evaluar mi nivel actual y ver disponibilidad?`;
    return getWhatsAppLink(msg);
  };

  return (
    <section
      id="programas"
      aria-labelledby="path-title"
      className="border-t border-white/[0.09] py-12 lg:py-16 scroll-mt-20"
    >
      <div className="max-w-[1184px] mx-auto px-5 sm:px-12">
        {/* Editorial Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="jm-eyebrow mb-3">ELEGÍ CÓMO QUERÉS AVANZAR</p>
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
            Desde tus primeros básicos hasta tus skills más exigentes.
          </p>
        </div>

        {/* 2-Column Editorial Contrast Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* CARD 01: COACHING 1 A 1 (Warm Editorial Bone Card) */}
          <article
            id="coaching"
            className="jm-coaching-bone rounded-[14px] p-6 sm:p-8 flex flex-col justify-between scroll-mt-24 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 text-[9px] font-bold tracking-[0.13em] text-[#776472] uppercase">
                <span>01 / ACOMPAÑAMIENTO PERSONAL</span>
                <span className="text-[#ef4255] text-lg leading-none" aria-hidden="true">
                  ↗
                </span>
              </div>

              <h3 className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.055em] leading-[1.08] text-[#21191e]">
                UN PLAN PARA VOS.
                <br />
                UN COACH CON VOS.
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#635663] max-w-[400px] mt-3.5 leading-[1.75]">
                Para dejar de preguntarte qué hacer en cada sesión y entrenar con una dirección clara junto a Jorge Daniel.
              </p>

              {/* Modality Switcher: Online vs Salta Capital */}
              <div className="mt-5 p-1 rounded-[8px] bg-[#e2dbd2] border border-[#d3c9be] grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => setCoachingModality('online')}
                  className={`py-2 px-3 rounded-[6px] text-[11px] font-bold transition-all text-center ${
                    coachingModality === 'online'
                      ? 'bg-[#21191e] text-[#f3f0ec] shadow-sm'
                      : 'text-[#635663] hover:text-[#21191e]'
                  }`}
                >
                  Coaching Online 1:1
                </button>
                <button
                  type="button"
                  onClick={() => setCoachingModality('salta')}
                  className={`py-2 px-3 rounded-[6px] text-[11px] font-bold transition-all text-center ${
                    coachingModality === 'salta'
                      ? 'bg-[#21191e] text-[#f3f0ec] shadow-sm'
                      : 'text-[#635663] hover:text-[#21191e]'
                  }`}
                >
                  Presencial · Salta Capital
                </button>
              </div>

              <ul className="grid gap-2.5 my-6 p-0 list-none text-[12px] sm:text-[13px] text-[#4a3d49] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>
                    {coachingModality === 'salta'
                      ? 'Sesiones presenciales en Salta Capital con corrección en vivo'
                      : 'Programación individual según tu nivel, equipo y días'}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>Revisión técnica de tus ejecuciones en video por WhatsApp</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>Seguimiento semanal y ajustes continuos de volumen e intensidad</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#a82140] font-bold">✓</span>
                  <span>Contacto directo con Jorge Daniel (@jorgedaniel_sw)</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={buildCoachingWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn-primary w-full"
              >
                <span>
                  {coachingModality === 'salta'
                    ? 'SOLICITAR CUPO PRESENCIAL EN SALTA'
                    : 'SOLICITAR VALORACIÓN GRATUITA 1 A 1'}
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <small className="block text-center text-[10px] text-[#796874] mt-2.5">
                Propuesta y condiciones después de valorar tu caso por WhatsApp.
              </small>
            </div>
          </article>

          {/* CARD 02: J-METHOD AUTONOMOUS CONFIGURATOR (Dark Obsidian Architectural Card) */}
          <article className="bg-[linear-gradient(135deg,#1c171e,#141418_65%)] border border-white/[0.16] rounded-[14px] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 text-[9px] font-bold tracking-[0.13em] text-[#afadb8] uppercase">
                <span>02 / ENTRENÁ CON AUTONOMÍA</span>
                <span className="border border-[#5b5a64] px-2 py-0.5 text-[8px] tracking-[0.08em] text-[#d2d0da]">
                  J-METHOD · 8 SEMANAS
                </span>
              </div>

              <h3 className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.055em] leading-[1.08] text-[#f3f0ec]">
                ELEGÍ TU SKILL.
                <br />
                SEGUÍ TU RUTA.
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#b1afba] max-w-[410px] mt-3.5 leading-[1.75]">
                Un bloque de 8 semanas, criterios de nivel y reglas claras para saber cuándo avanzar.
              </p>

              {/* Interactive 3-Tier Selector */}
              <div className="grid grid-cols-3 gap-2 my-5">
                {J_METHOD_TIERS.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => handleSelectTier(tier.id)}
                      className={`text-left rounded-[9px] p-3 border transition-all grid gap-1 ${
                        isSelected
                          ? 'bg-[#efebe6] border-[#efebe6] text-[#625861] shadow-md'
                          : 'bg-[#15141a] border-white/[0.14] text-[#bcb4c3] hover:border-white/35'
                      }`}
                    >
                      <span className="text-[9px] font-bold tracking-[0.08em] uppercase">
                        {tier.label}
                      </span>
                      <strong
                        className={`text-[18px] sm:text-[21px] font-extrabold tracking-[-0.045em] leading-tight ${
                          isSelected ? 'text-[#a91a35]' : 'text-[#f5eff0]'
                        }`}
                      >
                        {tier.priceArs}
                      </strong>
                      <span className="text-[9px] opacity-80">{tier.priceUsd}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Skill & Level Selector */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-[10px] text-[#aaa1af] mb-2">
                  <span className="font-semibold uppercase tracking-wider">
                    Seleccioná {currentTierObj.count === 1 ? 'tu skill' : `tus ${currentTierObj.count} skills`}:
                  </span>
                  <span className="text-[#ef8ca0] font-mono">
                    {selectedSkills.length}/{currentTierObj.count}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {SKILLS_CATALOG.map((sk) => {
                    const isPicked = selectedSkills.includes(sk.id);
                    return (
                      <div
                        key={sk.id}
                        className={`rounded-[8px] border p-2.5 transition-all ${
                          isPicked
                            ? 'bg-[#20151c] border-[#ed5264]'
                            : 'bg-[#111015] border-white/[0.1] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => handleToggleSkill(sk.id)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <strong className="text-[12px] font-bold text-[#f3f0ec]">
                            {sk.name}
                          </strong>
                          <span
                            className={`w-4 h-4 rounded-full text-[10px] grid place-items-center font-bold ${
                              isPicked
                                ? 'bg-[#d52945] text-white'
                                : 'border border-white/40 text-white/60'
                            }`}
                          >
                            {isPicked ? '✓' : '+'}
                          </span>
                        </button>

                        {/* Mini Level Picker when Skill is Picked */}
                        {isPicked && (
                          <div className="grid grid-cols-3 gap-1 mt-2 pt-2 border-t border-white/[0.08]">
                            {(['principiante', 'intermedio', 'avanzado'] as const).map(
                              (lvl) => {
                                const isLvl = skillLevels[sk.id] === lvl;
                                return (
                                  <button
                                    key={lvl}
                                    type="button"
                                    onClick={() =>
                                      setSkillLevels((prev) => ({
                                        ...prev,
                                        [sk.id]: lvl,
                                      }))
                                    }
                                    className={`py-1 rounded text-[8px] font-bold uppercase tracking-tight transition-colors ${
                                      isLvl
                                        ? 'bg-[#eadfe3] text-[#20151c]'
                                        : 'bg-white/[0.04] text-[#b8a7c2] hover:text-white'
                                    }`}
                                  >
                                    {lvl === 'principiante'
                                      ? 'Princ.'
                                      : lvl === 'intermedio'
                                      ? 'Interm.'
                                      : 'Avanz.'}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <a
                href={buildJMethodWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn-ghost w-full border-white/30 hover:border-[#ef4255]"
              >
                <span>
                  ELEGIR PROGRAMA ({currentTierObj.label} · {currentTierObj.priceArs})
                </span>
                <span aria-hidden="true">↗</span>
              </a>
              <small className="block text-center text-[10px] text-[#9e9ba8] mt-2.5">
                Pago único · Programa general autoguiado J-METHOD.
              </small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
