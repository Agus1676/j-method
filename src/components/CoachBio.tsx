import React from 'react';
import { COACH_DATA, FAQ_DATA, getWhatsAppLink } from '../data/content';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './SocialIcons';

export const CoachBio: React.FC = () => {
  return (
    <>
      {/* Editorial Coach Section */}
      <section
        id="coach"
        aria-labelledby="about-title"
        className="border-t border-white/[0.09] py-12 lg:py-16 scroll-mt-20"
      >
        <div className="max-w-[1184px] mx-auto px-5 sm:px-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] items-center gap-8 lg:gap-16">
          {/* Left Portrait Frame */}
          <div className="bg-[#15151b] border border-white/[0.14] rounded-[14px] h-[340px] sm:h-[400px] relative overflow-hidden shadow-2xl">
            <img
              src="/images/hero.webp"
              alt="Jorge Daniel SW en barra de calistenia"
              loading="lazy"
              className="w-full h-full object-cover object-[50%_35%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/80 to-transparent pt-16 pb-5 px-6 flex items-end justify-between gap-4">
              <div>
                <span className="block text-[20px] sm:text-[22px] font-extrabold tracking-[-0.04em] text-[#f3f0ec] leading-none">
                  JORGE DANIEL SW
                </span>
                <span className="block text-[8px] sm:text-[9px] font-semibold tracking-[0.17em] text-[#d0cdd8] mt-1.5 uppercase">
                  ATLETA / ENTRENADOR · COACHING 100% ONLINE
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#ef4255] font-bold">
                @{COACH_DATA.instagram}
              </span>
            </div>
          </div>

          {/* Right Editorial Copy & Channels */}
          <div>
            <p className="jm-eyebrow mb-3.5">DE ATLETA A TU ENTRENAMIENTO</p>
            <h2
              id="about-title"
              className="text-[30px] sm:text-[42px] font-extrabold tracking-[-0.055em] leading-[1.06] text-[#f3f0ec]"
            >
              YO TAMBIÉN TUVE
              <br />
              QUE <span className="text-[#ef4255]">EMPEZAR.</span>
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#b4b2be] max-w-[510px] mt-4 leading-[1.85]">
              Mis primeras habilidades también fueron intentos, errores y progresiones que tocaba aprender. Hoy entreno planche, front lever, handstand y muscle-up, y trabajo como entrenador especializado guiando a atletas de todo el mundo mediante <strong className="text-[#f3f0ec] font-semibold">coaching 1 a 1 100% online</strong>.
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#b4b2be] max-w-[510px] mt-3.5 leading-[1.85]">
              Mi trabajo con vos es convertir un objetivo que parece lejano en decisiones concretas: qué practicar, qué corregir en cada serie y cómo organizar tu semana.
            </p>

            {/* Editorial Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-4 border-t border-white/[0.09]">
              <a
                href={COACH_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#f4f1ed] hover:text-[#ff8a97] border-b border-white/25 hover:border-[#ef4255] pb-1 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#ef4255]" />
                <span>Instagram @{COACH_DATA.instagram}</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={COACH_DATA.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#f4f1ed] hover:text-[#ff8a97] border-b border-white/25 hover:border-[#ef4255] pb-1 transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-[#ef4255]" />
                <span>TikTok @{COACH_DATA.tiktok}</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={COACH_DATA.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#f4f1ed] hover:text-[#ff8a97] border-b border-white/25 hover:border-[#ef4255] pb-1 transition-colors"
              >
                <YouTubeIcon className="w-3.5 h-3.5 text-[#ef4255]" />
                <span>YouTube @{COACH_DATA.youtube}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Direct Contact Micro Row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-4 text-[11px] text-[#9e9ba8]">
              <a
                href={getWhatsAppLink('Hola Jorge! Vi tu perfil en la web J-METHOD y quiero consultarte por los entrenamientos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: <strong className="text-[#e4dce7]">{COACH_DATA.phoneDisplay}</strong>
              </a>
              <span className="text-white/20">·</span>
              <a
                href={`mailto:${COACH_DATA.email}`}
                className="hover:text-white transition-colors"
              >
                Email: <strong className="text-[#e4dce7]">{COACH_DATA.email}</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial 2-Column FAQ Section */}
      <section
        id="faq"
        aria-labelledby="map-faq-title"
        className="border-t border-white/[0.09] py-12 lg:py-14 scroll-mt-20"
      >
        <div className="max-w-[1184px] mx-auto px-5 sm:px-12 grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-8 lg:gap-16 items-start">
          <div>
            <p className="jm-eyebrow mb-3">ANTES DE EMPEZAR</p>
            <h2
              id="map-faq-title"
              className="text-[28px] sm:text-[38px] font-extrabold tracking-[-0.055em] leading-[1.1] text-[#f3f0ec]"
            >
              Que la duda
              <br />
              <span className="text-[#9c8da7]">no te pare.</span>
            </h2>
          </div>

          <div>
            {FAQ_DATA.map((item, idx) => (
              <details
                key={idx}
                className="group border-t border-white/[0.15] last:border-b py-3.5"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-5 min-h-[38px] text-[13px] sm:text-[14px] font-semibold text-[#f3f0ec] list-none select-none">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#eb687f] text-[22px] font-normal leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                  >
                    +
                  </span>
                </summary>
                <p className="text-[12px] sm:text-[13px] text-[#b6a1c2] max-w-[600px] mt-2.5 pb-1 leading-[1.85]">
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
