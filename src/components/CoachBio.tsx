import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  MessageCircle, 
  ChevronDown,
  HelpCircle,
  Award
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon, TikTokIcon } from './SocialIcons';
import { COACH_DATA, FAQ_DATA, getWhatsAppLink } from '../data/content';

export const CoachBio: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="coach" className="py-12 md:py-16 relative bg-[#0c0e10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Coach Bio Card (Left 7 cols) */}
          <div className="md:col-span-7 glass-panel rounded-2xl border border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#1E2328] to-[#121518] p-1 border border-[#CCFF00]/40 flex-shrink-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80"
                  alt="Jorge Daniel - Coach de Calistenia"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#CCFF00] font-bold block">
                  ENTRENADOR & ATLETA SW
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-black text-white">
                  Jorge Daniel
                </h2>
                <span className="text-xs text-slate-400 font-mono">
                  @jorgedaniel_sw
                </span>
                <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-1">
                  <MapPin className="w-3 h-3 text-[#CCFF00]" />
                  <span>Salta Capital, Argentina</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Creé el método <strong className="text-white">J-METHOD</strong> para que atletas de cualquier nivel puedan desbloquear Handstand, Muscle-Up, Front Lever y Planche sin lesionarse muñecas ni hombros, a través de corrección técnica 1 a 1 en video.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mb-6">
              <a
                href={COACH_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#CCFF00] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={COACH_DATA.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#CCFF00] transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>TikTok</span>
              </a>

              <a
                href={COACH_DATA.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#CCFF00] transition-colors"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={getWhatsAppLink('Hola Jorge! Quiero que me asesores para empezar con el J-METHOD.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#CCFF00] text-black font-extrabold text-xs hover:bg-[#bbf000] transition-all shadow-md shadow-[#CCFF00]/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Hablar con Jorge por WhatsApp</span>
              </a>

              <a
                href={`mailto:${COACH_DATA.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>{COACH_DATA.email}</span>
              </a>
            </div>
          </div>

          {/* FAQ Compact (Right 5 cols) */}
          <div id="faq" className="md:col-span-5 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <HelpCircle className="w-4 h-4 text-[#CCFF00]" />
              <span>Dudas Frecuentes</span>
            </div>

            {FAQ_DATA.slice(0, 4).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-xl border border-white/10 overflow-hidden text-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-2 font-semibold text-slate-200 hover:text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#CCFF00] flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
