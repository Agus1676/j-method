import React from 'react';
import { Zap, ArrowUp } from 'lucide-react';
import { InstagramIcon, YouTubeIcon, TikTokIcon } from './SocialIcons';
import { COACH_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090a] border-t border-white/10 py-5 pb-20 md:pb-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Brand & Rights */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#CCFF00] flex items-center justify-center text-black font-extrabold text-xs">
              <Zap className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-heading font-black text-white text-sm">
              J-METHOD
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} Jorge Daniel. Salta Capital, Argentina.
            </span>
          </div>

          {/* Signature with portfolio link */}
          <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-white/5 border border-white/5 text-[11px]">
            <span className="text-slate-400">Desarrollado por</span>
            <a
              href="https://agustinpollan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCFF00] hover:text-white font-bold transition-colors underline decoration-[#CCFF00]/40 hover:decoration-white"
            >
              Agustín Pollán
            </a>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-3">
            <a
              href={COACH_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#CCFF00] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={COACH_DATA.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#CCFF00] transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-3 h-3" />
            </a>
            <a
              href={COACH_DATA.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#CCFF00] transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-1"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
