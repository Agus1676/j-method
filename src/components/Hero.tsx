import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Flame, Star, Award, Compass } from 'lucide-react';
import { COACH_DATA, getWhatsAppLink } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Neon Gradients & Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[350px] bg-[#CCFF00]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#CCFF00]/30 mb-8 animate-fadeIn">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CCFF00]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase">
              J-METHOD • Calistenia & Coaching por Jorge Daniel
            </span>
            <span className="hidden sm:inline text-xs text-[#8E9AA7] border-l border-white/10 pl-2">
              Salta Capital & Online
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl tracking-tight text-white leading-[1.08] mb-6">
            Desbloqueá tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#a3ff20] to-emerald-400">Skills</span> y Construí un Físico Imponente Sin Lesiones.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Dejá de adivinar en YouTube o romperte los hombros. El sistema estructurado de progresiones biomecánicas de <strong className="text-white font-semibold">Jorge Daniel (@jorgedaniel_sw)</strong> para dominar Handstand, Muscle-Up, Front Lever y Planche.
          </p>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#skill-map"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#CCFF00] text-black font-extrabold text-base hover:bg-[#bbf000] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#CCFF00]/25 group"
            >
              <Compass className="w-5 h-5 text-black group-hover:rotate-45 transition-transform" />
              <span>Hacer Test de Nivel Gratis (Skill Map)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={getWhatsAppLink('Hola Jorge! Estuve viendo la web de J-METHOD y quiero consultar por los cupos de coaching online / presencial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl glass-panel border border-white/15 text-white font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#CCFF00] fill-current" />
              <span>Hablar con Jorge por WhatsApp</span>
            </a>
          </div>

          {/* Trust bullet features */}
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-400 mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
              <span>Evaluación inicial 100% personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
              <span>Corrección técnica en video semanal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
              <span>Apto Parque, Gym o Casa</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/5 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black font-heading text-[#CCFF00] mb-1">
              8 Semanas
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Por Bloque de Progresión
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/5 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1">
              +500
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Atletas y Alumnos Guiados
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/5 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black font-heading text-[#CCFF00] mb-1">
              1 a 1
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Feedback Directo en Video
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/5 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1">
              4.9 / 5
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
              <span>Satisfacción en Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
