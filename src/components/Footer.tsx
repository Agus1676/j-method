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
import { COACH_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Skill Map', href: '#skill-map' },
    { name: 'Metodología', href: '#metodo' },
    { name: 'Skills', href: '#skills' },
    { name: 'Programas', href: '#programas' },
    { name: 'Sobre Jorge', href: '#coach' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#08090a] border-t border-white/10 pt-8 pb-24 md:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Compact Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          {/* Brand + Tagline + Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00] flex items-center justify-center text-black font-extrabold shadow-md shadow-[#CCFF00]/20">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-tight text-white leading-none">
                  J-METHOD
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#8E9AA7] mt-0.5">
                  CALISTHENICS COACH
                </span>
              </div>
            </div>

            <span className="hidden sm:inline text-slate-700">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={COACH_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#CCFF00] transition-colors"
                aria-label="Instagram @jorgedaniel_sw"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={COACH_DATA.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#CCFF00] transition-colors"
                aria-label="TikTok @jorgedaniel_sw"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={COACH_DATA.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#CCFF00] transition-colors"
                aria-label="YouTube @jorgedaniel_sw"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>

              <a
                href={COACH_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#CCFF00] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Inline Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#CCFF00] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Contact Inline Info */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Salta Capital</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <a
              href={COACH_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>{COACH_DATA.phoneDisplay}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <a
              href={`mailto:${COACH_DATA.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>{COACH_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* Micro Bottom Bar with Signature */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="text-center sm:text-left text-slate-400">
            © {new Date().getFullYear()} J-METHOD • Entrenador Jorge Daniel. Todos los derechos reservados.
          </p>

          {/* Firma con enlace al portafolio */}
          <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-white/5 border border-white/5 text-slate-300 shadow-sm">
            <span>Desarrollado por</span>
            <a
              href="https://agustinpollan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCFF00] hover:text-white font-bold transition-colors underline decoration-[#CCFF00]/40 hover:decoration-white"
            >
              Agustín Pollán
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">Argentina</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
