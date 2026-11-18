import React from 'react';
import { 
  Zap, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle,
  ArrowUp
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon, TikTokIcon } from './SocialIcons';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090a] border-t border-white/10 pt-16 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#CCFF00] flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-[#CCFF00]/20">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight text-white">
                  J-METHOD
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E9AA7] -mt-1">
                  CALISTHENICS COACHING
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Sistema de entrenamiento de Calistenia y Street Workout basado en progresiones biomecánicas y corrección técnica individual para desbloquear tus skills sin lesionarte.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COACH_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors"
                aria-label="Instagram @jorgedaniel_sw"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={COACH_DATA.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors"
                aria-label="TikTok @jorgedaniel_sw"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href={COACH_DATA.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors"
                aria-label="YouTube @jorgedaniel_sw"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>

              <a
                href={COACH_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#skill-map" className="hover:text-[#CCFF00] transition-colors">
                  Skill Map (Test de Nivel)
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#CCFF00] transition-colors">
                  Los 3 Pilares del Método
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#CCFF00] transition-colors">
                  Matriz de Skills
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#CCFF00] transition-colors">
                  Planes & Precios
                </a>
              </li>
              <li>
                <a href="#coach" className="hover:text-[#CCFF00] transition-colors">
                  Sobre Jorge Daniel
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#CCFF00] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Skills Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Habilidades Clave
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Handstand (Pino Libre)</li>
              <li>Bar Muscle-Up Estricto</li>
              <li>Front Lever Isométrico</li>
              <li>Straddle & Full Planche</li>
              <li>Dominadas & Fondos Lastrados</li>
              <li>Acondicionamiento Articular</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <span>Salta Capital, Argentina</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <a href={COACH_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COACH_DATA.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COACH_DATA.email}`} className="hover:text-white transition-colors break-all">
                  {COACH_DATA.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5 flex items-center justify-center font-bold">@</span>
                <a href={COACH_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @{COACH_DATA.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} J-METHOD • Entrenador Jorge Daniel. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span>Salta Capital, Argentina</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
