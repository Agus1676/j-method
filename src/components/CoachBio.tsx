import React from 'react';
import { COACH_DATA, FAQ_DATA, getWhatsAppLink } from '../data/content';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './SocialIcons';

export const CoachBio: React.FC = () => {
  return (
    <>
      {/* Editorial Coach Section - Calisrama Style + Integrated 1-on-1 Coaching */}
      <section
        id="coach"
        aria-labelledby="about-heading"
        className="border-t border-white/[0.09] py-10 lg:py-14 scroll-mt-20 relative"
      >
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          {/* Section Header: Centered Subtitle & Title */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#d4af37] mb-2">
              EL ATLETA Y ENTRENADOR DETRÁS DEL MÉTODO
            </span>
            <h2
              id="about-heading"
              className="text-[32px] sm:text-[42px] font-extrabold tracking-[-0.04em] uppercase text-[#f3f0ec] leading-none"
            >
              SOBRE MÍ & COACHING
            </h2>
          </div>

          {/* Premium Centered Bio Card */}
          <div className="bg-[#121216] border border-white/[0.12] rounded-[18px] sm:rounded-[22px] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Athlete Photo Container */}
            <div className="max-w-[280px] sm:max-w-[320px] mx-auto mb-5 sm:mb-6">
              <div className="relative rounded-[14px] overflow-hidden border border-white/[0.12] aspect-[4/5] bg-[#0b0b0e] shadow-2xl group">
                <img
                  src="/images/hero.webp"
                  alt="Jorge Daniel SW - Atleta y Entrenador de Calistenia"
                  loading="lazy"
                  className="w-full h-full object-cover object-[50%_35%] filter contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 right-3 text-[9px] font-mono font-bold tracking-wider text-[#ef4255] bg-[#0b0b0e]/90 border border-white/10 px-2.5 py-1 rounded-md">
                  @{COACH_DATA.instagram}
                </span>
              </div>
            </div>

            {/* Coach Headline & Bio Copy */}
            <div className="text-center max-w-[560px] mx-auto">
              <h3 className="text-[22px] sm:text-[28px] font-extrabold uppercase tracking-[-0.03em] text-[#f3f0ec] mb-2.5">
                SOY JORGE DANIEL
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#b4b1be] leading-[1.75] mb-4">
                Soy atleta y entrenador de calistenia y street workout. Llevo más de 6 años entrenando y guiando a atletas de todo el mundo mediante <strong className="text-[#f3f0ec] font-semibold">coaching 1 a 1 online</strong>, ayudándolos a construir fuerza real, perfeccionar su técnica y desbloquear sus habilidades sin lesionarse.
              </p>

              {/* 3 Metrics / Credentials Strip */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.09] mb-5 text-center">
                <div className="p-1.5">
                  <strong className="block text-[17px] sm:text-[20px] font-extrabold text-[#f3f0ec] tracking-tight">
                    +6 AÑOS
                  </strong>
                  <span className="text-[8px] sm:text-[9px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                    Entrenando
                  </span>
                </div>
                <div className="p-1.5 border-x border-white/[0.09]">
                  <strong className="block text-[17px] sm:text-[20px] font-extrabold text-[#ef4255] tracking-tight">
                    100% ONLINE
                  </strong>
                  <span className="text-[8px] sm:text-[9px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                    Seguimiento
                  </span>
                </div>
                <div className="p-1.5">
                  <strong className="block text-[17px] sm:text-[20px] font-extrabold text-[#f3f0ec] tracking-tight">
                    1 A 1
                  </strong>
                  <span className="text-[8px] sm:text-[9px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                    Personalizado
                  </span>
                </div>
              </div>

              {/* What the Coaching includes - High-converting clean list */}
              <div className="bg-[#0e0e12] border border-white/[0.08] rounded-[12px] p-4 text-left mb-5">
                <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#ef4255] mb-2.5">
                  ¿QUÉ INCLUYE EL COACHING 1 A 1?
                </span>
                <ul className="grid gap-2 text-[12px] text-[#d0ceda] list-none p-0 m-0">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ef4255] font-bold">✓</span>
                    <span><strong>Plan individualizado:</strong> Rutinas adaptadas a tu nivel, días y equipamiento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ef4255] font-bold">✓</span>
                    <span><strong>Revisión técnica en video:</strong> Mandás tus series por WhatsApp y Jorge te devuelve correcciones precisas de palancas y codos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ef4255] font-bold">✓</span>
                    <span><strong>Ajustes semanales:</strong> Progresión de cargas y prevención activa de lesiones y tendinitis.</span>
                  </li>
                </ul>
              </div>

              {/* Social Channels Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                <a
                  href={COACH_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-3 py-1.5 rounded-full text-[10px] font-bold transition-all"
                  aria-label="Instagram de Jorge Daniel"
                >
                  <InstagramIcon className="w-3 h-3 text-[#ef4255]" />
                  <span>@{COACH_DATA.instagram}</span>
                </a>

                <a
                  href={COACH_DATA.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-3 py-1.5 rounded-full text-[10px] font-bold transition-all"
                  aria-label="TikTok de Jorge Daniel"
                >
                  <TikTokIcon className="w-3 h-3 text-[#ef4255]" />
                  <span>TikTok</span>
                </a>

                <a
                  href={COACH_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-3 py-1.5 rounded-full text-[10px] font-bold transition-all"
                  aria-label="YouTube de Jorge Daniel"
                >
                  <YouTubeIcon className="w-3 h-3 text-[#ef4255]" />
                  <span>YouTube</span>
                </a>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={getWhatsAppLink('Hola Jorge! Leí tu perfil en la web J-METHOD y quiero solicitar una valoración para empezar coaching 1 a 1 con vos.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jm-btn-primary w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider shadow-lg"
                >
                  <span>SOLICITAR VALORACIÓN 1 A 1 CON JORGE</span>
                  <span aria-hidden="true" className="ml-2">↗</span>
                </a>
                <small className="block text-center text-[10px] text-[#8e8c9b] mt-2">
                  Atención directa y personalizada por WhatsApp · Sin compromiso
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Editorial FAQ Section */}
      <section
        id="faq"
        aria-labelledby="map-faq-title"
        className="border-t border-white/[0.09] py-10 lg:py-12 scroll-mt-20"
      >
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-6">
            <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef4255] mb-1.5">
              PREGUNTAS FRECUENTES
            </span>
            <h2
              id="map-faq-title"
              className="text-[24px] sm:text-[32px] font-extrabold tracking-[-0.04em] text-[#f3f0ec] leading-tight"
            >
              Que la duda no te frene.
            </h2>
          </div>

          <div className="space-y-2.5">
            {FAQ_DATA.map((item, idx) => (
              <details
                key={idx}
                className="group bg-[#121216] border border-white/[0.1] rounded-[11px] p-4 transition-colors hover:border-white/[0.2]"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-4 text-[13px] font-semibold text-[#f3f0ec] list-none select-none">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#ef4255] text-[18px] font-bold leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                  >
                    +
                  </span>
                </summary>
                <p className="text-[12px] text-[#b4b1be] mt-2.5 leading-[1.75] pt-2 border-t border-white/[0.06]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
