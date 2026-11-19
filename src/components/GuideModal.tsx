import React, { useState } from 'react';
import {
  SKILLS_CATALOG,
  GUIDE_SECTIONS,
  COACH_DATA,
  getWhatsAppLink,
} from '../data/content';
import { SkillId } from '../types';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<SkillId>('planche');

  if (!isOpen) return null;

  const currentSkill =
    SKILLS_CATALOG.find((s) => s.id === activeTab) || SKILLS_CATALOG[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
    >
      <div className="bg-[#111015] border border-white/[0.18] rounded-[14px] w-full max-w-[860px] max-h-[90dvh] flex flex-col overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.85)] animate-jm-enter">
        {/* Sticky Editorial Top Bar */}
        <div className="bg-[#15131b] border-b border-white/[0.12] px-5 sm:px-7 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="jm-monogram text-[28px]" aria-hidden="true">
              j<span>/</span>
            </span>
            <div>
              <span className="block text-[9px] font-bold tracking-[0.16em] text-[#ef4255] uppercase">
                GUÍA PRÁCTICA GRATUITA · EDICIÓN DIGITAL
              </span>
              <h2
                id="guide-modal-title"
                className="text-[14px] sm:text-[16px] font-extrabold tracking-[-0.03em] text-[#f3f0ec]"
              >
                J-METHOD · Skill Map & Criterios de Nivel
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="border border-white/25 hover:border-white/60 rounded-[6px] px-3 py-1.5 text-[11px] font-bold text-[#e4dce7] hover:text-white transition-colors"
          >
            Cerrar ✕
          </button>
        </div>

        {/* Scrollable Editorial Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          {/* Intro Banner */}
          <div className="bg-[#eee9e2] text-[#21191e] rounded-[12px] p-5 sm:p-6 grid sm:grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <span className="text-[8px] font-extrabold tracking-[0.14em] text-[#8d4455] uppercase block mb-1">
                MENOS GUARDAR RUTINAS · MÁS SABER QUÉ HACER
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-extrabold tracking-[-0.045em] leading-[1.15]">
                Ubicá tu punto de partida real antes de programar tu semana.
              </h3>
              <p className="text-[12px] text-[#635663] mt-1.5 leading-[1.7]">
                Por Jorge Daniel (@{COACH_DATA.instagram}) · Salta Capital, Argentina.
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="bg-[#21191e] text-[#f3f0ec] hover:bg-black px-4 py-2.5 rounded-[7px] text-[11px] font-bold whitespace-nowrap transition-colors"
            >
              Imprimir / Guardar PDF ↓
            </button>
          </div>

          {/* Interactive Skill Matrix inside Guide */}
          <div>
            <p className="jm-eyebrow mb-3">01 / MATRIZ DE ENTRADA POR SKILL</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {SKILLS_CATALOG.map((sk) => (
                <button
                  key={sk.id}
                  type="button"
                  onClick={() => setActiveTab(sk.id)}
                  className={`px-3.5 py-2 rounded-[7px] text-[11px] font-bold transition-all border ${
                    activeTab === sk.id
                      ? 'bg-[#eee7e1] border-[#eee7e1] text-[#261925]'
                      : 'bg-[#17151d] border-white/[0.12] text-[#b8a7c2] hover:text-white'
                  }`}
                >
                  {sk.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentSkill.levels.map((lvl) => (
                <div
                  key={lvl.id}
                  className="bg-[#16141c] border border-white/[0.12] rounded-[10px] p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#ef4255] mb-2">
                      <span>NIVEL {lvl.index}</span>
                      <span className="uppercase font-bold">{lvl.label}</span>
                    </div>
                    <p className="text-[12px] text-[#e4dce7] leading-[1.75] mb-3">
                      {lvl.entryTest}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/[0.08] text-[11px] text-[#a998b5]">
                    <strong className="text-[#ef8ca0] block text-[9px] uppercase tracking-wider mb-0.5">
                      Foco del Bloque:
                    </strong>
                    {lvl.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Rules of J-METHOD */}
          <div>
            <p className="jm-eyebrow mb-4">02 / REGLAS DE ESTRUCTURA Y PROGRESIÓN</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0 list-none">
              {GUIDE_SECTIONS.map((sec) => (
                <li
                  key={sec.number}
                  className="border-t border-white/[0.15] pt-3.5"
                >
                  <span className="font-mono text-[10px] text-[#ef4255] block mb-1">
                    {sec.number}
                  </span>
                  <h4 className="text-[14px] font-bold text-[#f3f0ec] mb-1.5">
                    {sec.title}
                  </h4>
                  <p className="text-[12px] text-[#b6a1c2] leading-[1.8]">
                    {sec.content}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sticky Modal Footer */}
        <div className="bg-[#15131b] border-t border-white/[0.12] px-5 sm:px-7 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#b8a7c2]">
            ¿Tenés dudas sobre en qué nivel ubicarte?
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getWhatsAppLink(
                `Hola Jorge! Estuve leyendo la Guía Skill Map en la web y quiero consultarte por mi nivel en ${currentSkill.name}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="jm-btn-primary w-full sm:w-auto min-h-[42px] py-2 px-4 text-[11px]"
            >
              <span>CONSULTAR A JORGE POR WHATSAPP</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
