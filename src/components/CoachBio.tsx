import React from 'react';
import { 
  MapPin, 
  Mail, 
  Award, 
  CheckCircle, 
  MessageCircle
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon, TikTokIcon } from './SocialIcons';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const CoachBio: React.FC = () => {
  return (
    <section id="coach" className="py-24 relative overflow-hidden bg-[#0c0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
          {/* Neon Glow Corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Photo / Athlete Badge Representation */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-tr from-[#1E2328] via-[#2A3138] to-[#121518] p-1.5 border-2 border-[#CCFF00]/40 shadow-2xl relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                    alt="Jorge Daniel - Coach de Calistenia"
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#CCFF00]">
                      @jorgedaniel_sw
                    </span>
                  </div>
                </div>
                {/* Floating mini badge */}
                <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full bg-[#CCFF00] text-black text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Coach J-METHOD</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-[#CCFF00]" />
                <span>Salta Capital, Argentina</span>
              </div>

              {/* Social Channels Pills */}
              <div className="flex items-center gap-3">
                <a
                  href={COACH_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#CCFF00] hover:border-[#CCFF00] hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href={COACH_DATA.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#CCFF00] hover:border-[#CCFF00] hover:bg-white/10 transition-all"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>

                <a
                  href={COACH_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#CCFF00] hover:border-[#CCFF00] hover:bg-white/10 transition-all"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Col: Biography & Philosophy */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-mono tracking-widest text-[#CCFF00] font-bold block mb-2">
                CONOCÉ A TU COACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
                Jorge Daniel <span className="text-slate-400 text-xl font-normal">(@jorgedaniel_sw)</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                ¡Hola! Soy Jorge Daniel, atleta y entrenador de Street Workout y Calistenia. Creé el sistema <strong className="text-white">J-METHOD</strong> luego de comprobar que el 90% de quienes empiezan en este deporte abandonan o se lesionan por falta de una metodología progresiva real.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Mi enfoque une la <strong className="text-[#CCFF00]">biomecánica aplicada</strong>, el fortalecimiento de tendones y la retroalimentación técnica individual. No importa si hoy no te sale ni una dominada o si estás a un paso del Front Lever: mi trabajo es darte el mapa exacto para que alcances tu máximo nivel físico sin perder meses dando vueltas.
              </p>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                  <span>Atleta y Entrenador de Calistenia</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                  <span>Clases Presenciales en Salta Capital</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                  <span>Coaching Online para Todo el Mundo</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                  <span>Soporte Directo por WhatsApp</span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={getWhatsAppLink('Hola Jorge! Estuve leyendo sobre tu trayectoria y me gustaría que me asesores para empezar a entrenar.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#CCFF00] text-black font-extrabold text-sm hover:bg-[#bbf000] transition-all shadow-lg shadow-[#CCFF00]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Escribirle a Jorge por WhatsApp</span>
                </a>

                <a
                  href={`mailto:${COACH_DATA.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#CCFF00]" />
                  <span>{COACH_DATA.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
