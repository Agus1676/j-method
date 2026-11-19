import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, Star, Compass } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden">
      {/* Background Neon Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-[#CCFF00]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#CCFF00]/30 mb-5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
          </span>
          <span className="text-[11px] font-bold tracking-wider text-white uppercase">
            J-METHOD • Coaching Calistenia
          </span>
          <span className="text-[11px] text-[#CCFF00] border-l border-white/10 pl-2">
            Salta & Online
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight mb-4">
          Desbloqueá tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-emerald-400">Skills de Calistenia</span> Sin Lesiones.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
          Handstand, Muscle-Up, Front Lever y Planche. El método de <strong className="text-white">Jorge Daniel (@jorgedaniel_sw)</strong> basado en biomecánica y feedback 1 a 1 en video por WhatsApp.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="#skill-map"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#CCFF00] text-black font-extrabold text-sm hover:bg-[#bbf000] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#CCFF00]/25 group"
          >
            <Compass className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            <span>Hacer Skill Map Gratis</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={getWhatsAppLink('Hola Jorge! Quiero consultar por los cupos de coaching online / presencial.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl glass-panel border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#CCFF00] fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

        {/* Compact Stats */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 px-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="text-[#CCFF00] font-bold">+500</span> Atletas
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="text-[#CCFF00] font-bold">8 Semanas</span> por Bloque
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="text-[#CCFF00] font-bold">1 a 1</span> Feedback Semanal
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[#CCFF00] text-[#CCFF00]" />
            <span className="font-bold text-white">4.9/5</span> Calificación
          </div>
        </div>
      </div>
    </section>
  );
};
