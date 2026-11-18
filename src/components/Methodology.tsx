import React from 'react';
import { Target, TrendingUp, Video, CheckCircle, Zap } from 'lucide-react';
import { METHOD_PILLARS } from '../data/content';

export const Methodology: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-7 h-7 text-[#CCFF00]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-[#CCFF00]" />;
      case 'Video':
        return <Video className="w-7 h-7 text-[#CCFF00]" />;
      default:
        return <Zap className="w-7 h-7 text-[#CCFF00]" />;
    }
  };

  return (
    <section id="metodo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
            <span>La Fórmula del Éxito</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-5">
            Por Qué el <span className="text-[#CCFF00]">J-METHOD</span> Funciona Donde Otros Fracasan
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            La mayoría de las personas se estancan en calistenia porque intentan skills avanzadas sin acondicionar tendones ni entender la palanca. Nuestro sistema se basa en 3 pilares innegociables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METHOD_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-[#CCFF00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent Step Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-heading font-black text-4xl text-white/20 group-hover:text-[#CCFF00]/40 transition-colors">
                    {pillar.step}
                  </span>
                </div>

                <div className="text-xs uppercase font-mono tracking-widest text-[#CCFF00] mb-2 font-semibold">
                  {pillar.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom pill */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                <span>{pillar.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
