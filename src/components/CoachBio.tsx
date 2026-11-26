import React from 'react';
import { COACH_DATA, FAQ_DATA, getWhatsAppLink } from '../data/content';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './SocialIcons';

export const CoachBio: React.FC = () => {
  return (
    <>
      {/* Editorial Coach Section - Inspired by Calisrama Aesthetic */}
      <section
        id="coach"
        aria-labelledby="about-heading"
        className="border-t border-white/[0.09] py-14 lg:py-20 scroll-mt-20 relative"
      >
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          {/* Section Header: Centered Subtitle & Title */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#d4af37] mb-2">
              EL ATLETA Y ENTRENADOR DETRÁS DEL MÉTODO
            </span>
            <h2
              id="about-heading"
              className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.04em] uppercase text-[#f3f0ec] leading-none"
            >
              SOBRE MÍ
            </h2>
          </div>

          {/* Premium Centered Bio Card */}
          <div className="bg-[#121216] border border-white/[0.12] rounded-[18px] sm:rounded-[22px] p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            {/* Athlete Photo Container */}
            <div className="max-w-[360px] mx-auto mb-6 sm:mb-7">
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
              <h3 className="text-[24px] sm:text-[30px] font-extrabold uppercase tracking-[-0.03em] text-[#f3f0ec] mb-3">
                SOY JORGE DANIEL
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#b4b1be] leading-[1.8] mb-4">
                Soy atleta y entrenador de calistenia y street workout. Llevo más de 6 años entrenando y guiando a atletas de todo el mundo mediante <strong className="text-[#f3f0ec] font-semibold">coaching 1 a 1 online</strong>, ayudándolos a construir fuerza real, perfeccionar su técnica y desbloquear sus habilidades sin lesionarse.
              </p>

              <p className="text-[13px] sm:text-[14px] text-[#b4b1be] leading-[1.8] mb-6">
                Mis primeras habilidades también fueron intentos, caídas y estancamientos. Hoy mi trabajo con vos es ahorrarte años de ensayo y error con decisiones claras: qué corregir en cada serie, qué progresiones usar y cómo organizar tu semana.
              </p>

              {/* 3 Metrics / Credentials Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 py-4 border-y border-white/[0.09] mb-6 text-center">
                <div className="p-2">
                  <strong className="block text-[18px] sm:text-[22px] font-extrabold text-[#f3f0ec] tracking-tight">
                    +6 AÑOS
                  </strong>
                  <span className="text-[9px] sm:text-[10px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                    Entrenando
                  </span>
                </div>
                <div className="p-2 border-x border-white/[0.09]">
                  <strong className="block text-[18px] sm:text-[22px] font-extrabold text-[#ef4255] tracking-tight">
                    100% ONLINE
                  </strong>
                  <span className="text-[9px] sm:text-[10px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                    Seguimiento
                  </span>
                </div>
                <div className="p-2">
                  <strong className="block text-[18px] sm:text-[22px] font-extrabold text-[#f3f0ec] tracking-tight">
                    1 A 1
                  </strong>
                  <span className="text-[9px] sm:text-[10px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                    Personalizado
                  </span>
                </div>
              </div>

              {/* Social Channels Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
                <a
                  href={COACH_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-3.5 py-2 rounded-full text-[11px] font-bold transition-all"
                  aria-label="Instagram de Jorge Daniel"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#ef4255]" />
                  <span>@{COACH_DATA.instagram}</span>
                </a>

                <a
                  href={COACH_DATA.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-3.5 py-2 rounded-full text-[11px] font-bold transition-all"
                  aria-label="TikTok de Jorge Daniel"
                >
                  <TikTokIcon className="w-3.5 h-3.5 text-[#ef4255]" />
                  <span>TikTok</span>
                </a>

                <a
                  href={COACH_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-3.5 py-2 rounded-full text-[11px] font-bold transition-all"
                  aria-label="YouTube de Jorge Daniel"
                >
                  <YouTubeIcon className="w-3.5 h-3.5 text-[#ef4255]" />
                  <span>YouTube</span>
                </a>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={getWhatsAppLink('Hola Jorge! Leí tu perfil en la web y quiero consultarte por el coaching 1 a 1.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jm-btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-[12px] font-bold uppercase tracking-wider shadow-lg"
                >
                  <span>HABLAR DIRECTO CON JORGE POR WHATSAPP</span>
                  <span aria-hidden="true" className="ml-2">↗</span>
                </a>
                <small className="block text-center text-[10px] text-[#8e8c9b] mt-2.5">
                  Atención directa y personalizada · Sin intermediarios
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial FAQ Section */}
      <section
        id="faq"
        aria-labelledby="map-faq-title"
        className="border-t border-white/[0.09] py-14 lg:py-16 scroll-mt-20"
      >
        <div className="max-w-[820px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-8">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#ef4255] mb-2">
              PREGUNTAS FRECUENTES
            </span>
            <h2
              id="map-faq-title"
              className="text-[28px] sm:text-[38px] font-extrabold tracking-[-0.04em] text-[#f3f0ec] leading-tight"
            >
              Que la duda no te frene.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((item, idx) => (
              <details
                key={idx}
                className="group bg-[#121216] border border-white/[0.1] rounded-[12px] p-4 sm:p-5 transition-colors hover:border-white/[0.2]"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-4 text-[13px] sm:text-[14px] font-semibold text-[#f3f0ec] list-none select-none">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#ef4255] text-[20px] font-bold leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                  >
                    +
                  </span>
                </summary>
                <p className="text-[12px] sm:text-[13px] text-[#b4b1be] mt-3 leading-[1.8] pt-2 border-t border-white/[0.06]">
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
