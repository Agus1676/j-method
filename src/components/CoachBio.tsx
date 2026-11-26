import React from 'react';
import { useContent } from '../context/ContentContext';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './SocialIcons';

export const CoachBio: React.FC = () => {
  const { content, getWhatsAppLink } = useContent();
  const { coach, metrics, coachingFeatures, faq } = content;

  return (
    <>
      {/* Editorial Coach Section - Compact Split-Card Layout (Desktop 2-Col, Mobile Ultra-Slim) */}
      <section
        id="coach"
        aria-labelledby="about-heading"
        className="border-t border-white/[0.09] py-8 lg:py-10 scroll-mt-20 relative"
      >
        <div className="max-w-[880px] mx-auto px-4 sm:px-6">
          {/* Section Subheader */}
          <div className="text-center mb-5">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              EL ATLETA Y ENTRENADOR DETRÁS DEL MÉTODO
            </span>
            <h2
              id="about-heading"
              className="text-[26px] sm:text-[34px] font-extrabold tracking-[-0.04em] uppercase text-[#f3f0ec] leading-tight"
            >
              SOBRE MÍ & COACHING
            </h2>
          </div>

          {/* Premium Compact Card - 2 Columns on Desktop / Tablet, clean stacked on Mobile */}
          <div className="bg-[#121216] border border-white/[0.12] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] gap-5 lg:gap-6 items-center">
              
              {/* Left Column: Athlete Photo + Social Badges */}
              <div className="flex flex-col items-center">
                <div className="relative rounded-[14px] overflow-hidden border border-white/[0.12] w-full max-w-[240px] md:max-w-none aspect-[4/5] bg-[#0b0b0e] shadow-xl group">
                  <img
                    src={coach.image}
                    alt={`${coach.name} SW - Atleta y Entrenador de Calistenia`}
                    loading="lazy"
                    className="w-full h-full object-cover object-[50%_35%] filter contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/85 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono font-bold tracking-wider text-[#ef4255] bg-[#0b0b0e]/90 border border-white/10 px-2 py-0.5 rounded-md">
                    @{coach.instagram}
                  </span>
                </div>

                {/* Social Channels Pills (Under image) */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                  <a
                    href={coach.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-2.5 py-1 rounded-full text-[9px] font-bold transition-all"
                    aria-label={`Instagram de ${coach.name}`}
                  >
                    <InstagramIcon className="w-2.5 h-2.5 text-[#ef4255]" />
                    <span>@{coach.instagram}</span>
                  </a>

                  <a
                    href={coach.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-2.5 py-1 rounded-full text-[9px] font-bold transition-all"
                    aria-label={`TikTok de ${coach.name}`}
                  >
                    <TikTokIcon className="w-2.5 h-2.5 text-[#ef4255]" />
                    <span>TikTok</span>
                  </a>

                  <a
                    href={coach.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#191920] hover:bg-[#23232c] border border-white/[0.12] hover:border-[#ef4255] text-[#f4f1ed] px-2.5 py-1 rounded-full text-[9px] font-bold transition-all"
                    aria-label={`YouTube de ${coach.name}`}
                  >
                    <YouTubeIcon className="w-2.5 h-2.5 text-[#ef4255]" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Bio, Metrics, Features & CTA in single cohesive flow */}
              <div className="flex flex-col text-left">
                <div className="text-center md:text-left">
                  <h3 className="text-[20px] sm:text-[24px] font-extrabold uppercase tracking-[-0.03em] text-[#f3f0ec] mb-1.5">
                    SOY {coach.name.toUpperCase()}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[#b4b1be] leading-[1.65] mb-2">
                    {coach.bioP1}
                  </p>
                  {coach.bioP2 && (
                    <p className="text-[12px] sm:text-[13px] text-[#8e8c9b] leading-[1.65] mb-3 hidden sm:block">
                      {coach.bioP2}
                    </p>
                  )}
                </div>

                {/* 3 Metrics Strip - Compact */}
                <div className="grid grid-cols-3 gap-1.5 py-2.5 border-y border-white/[0.09] mb-3 text-center">
                  <div>
                    <strong className="block text-[16px] sm:text-[18px] font-extrabold text-[#f3f0ec] tracking-tight">
                      {metrics.metric1Val}
                    </strong>
                    <span className="text-[8px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                      {metrics.metric1Label}
                    </span>
                  </div>
                  <div className="border-x border-white/[0.09]">
                    <strong className="block text-[16px] sm:text-[18px] font-extrabold text-[#ef4255] tracking-tight">
                      {metrics.metric2Val}
                    </strong>
                    <span className="text-[8px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                      {metrics.metric2Label}
                    </span>
                  </div>
                  <div>
                    <strong className="block text-[16px] sm:text-[18px] font-extrabold text-[#f3f0ec] tracking-tight">
                      {metrics.metric3Val}
                    </strong>
                    <span className="text-[8px] text-[#8e8c9b] uppercase font-semibold tracking-wider">
                      {metrics.metric3Label}
                    </span>
                  </div>
                </div>

                {/* What Coaching Includes - Compact Feature Box */}
                <div className="bg-[#0e0e12] border border-white/[0.08] rounded-[10px] p-3 mb-3">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#ef4255] mb-1.5">
                    {coachingFeatures.heading}
                  </span>
                  <ul className="grid gap-1.5 text-[11px] sm:text-[12px] text-[#d0ceda] list-none p-0 m-0">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#ef4255] font-bold">✓</span>
                      <span><strong>{coachingFeatures.item1Title}</strong> {coachingFeatures.item1Desc}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#ef4255] font-bold">✓</span>
                      <span><strong>{coachingFeatures.item2Title}</strong> {coachingFeatures.item2Desc}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#ef4255] font-bold">✓</span>
                      <span><strong>{coachingFeatures.item3Title}</strong> {coachingFeatures.item3Desc}</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href={getWhatsAppLink(`Hola Jorge! Leí tu perfil en la web ${coach.brand} y quiero solicitar una valoración para empezar coaching 1 a 1 con vos.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jm-btn-primary w-full inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider shadow-lg"
                  >
                    <span>SOLICITAR VALORACIÓN 1 A 1 CON JORGE</span>
                    <span aria-hidden="true" className="ml-1.5">↗</span>
                  </a>
                  <small className="block text-center md:text-left text-[9px] text-[#8e8c9b] mt-1.5">
                    Atención directa y personalizada por WhatsApp · Sin compromiso
                  </small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Editorial FAQ Section */}
      <section
        id="faq"
        aria-labelledby="map-faq-title"
        className="border-t border-white/[0.09] py-8 lg:py-10 scroll-mt-20"
      >
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-5">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#ef4255] mb-1">
              PREGUNTAS FRECUENTES
            </span>
            <h2
              id="map-faq-title"
              className="text-[22px] sm:text-[28px] font-extrabold tracking-[-0.04em] text-[#f3f0ec] leading-tight"
            >
              Que la duda no te frene.
            </h2>
          </div>

          <div className="space-y-2">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-[#121216] border border-white/[0.1] rounded-[10px] p-3 sm:p-3.5 transition-colors hover:border-white/[0.2]"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-3 text-[12px] sm:text-[13px] font-semibold text-[#f3f0ec] list-none select-none">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#ef4255] text-[16px] font-bold leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                  >
                    +
                  </span>
                </summary>
                <p className="text-[11px] sm:text-[12px] text-[#b4b1be] mt-2 leading-[1.65] pt-2 border-t border-white/[0.06]">
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
