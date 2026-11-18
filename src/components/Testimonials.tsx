import React from 'react';
import { Star, Quote, Award, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos de Éxito Reales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            Atletas Que Ya Transformaron su Entrenamiento
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No nos creas a nosotros: mirá lo que dicen quienes aplicaron el J-METHOD tanto de forma online como presencial en Salta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:border-[#CCFF00]/40 transition-all duration-300"
            >
              <div>
                {/* Top Stars & Timeframe */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase bg-white/5 text-[#8E9AA7] px-2.5 py-1 rounded-full border border-white/5">
                    {t.timeframe}
                  </span>
                </div>

                {/* Result Pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.result}</span>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#CCFF00]/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
