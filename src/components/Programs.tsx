import React from 'react';
import { Check, MessageCircle, Sparkles, Flame } from 'lucide-react';
import { PLANS_DATA, getWhatsAppLink } from '../data/content';

export const Programs: React.FC = () => {
  return (
    <section id="programas" className="py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>Planes de Entrenamiento</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
            Elegí Cómo Entrenar con el <span className="text-[#CCFF00]">J-METHOD</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Programas autoguiados, coaching 1 a 1 online o clases presenciales en Salta Capital.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {PLANS_DATA.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 relative ${
                  isPopular
                    ? 'glass-panel border-2 border-[#CCFF00] shadow-xl shadow-[#CCFF00]/10 md:-translate-y-2'
                    : 'glass-panel border border-white/10 hover:border-white/20'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#CCFF00] text-black font-extrabold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>MÁS ELEGIDO</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E9AA7] font-semibold block mb-0.5">
                      {plan.badge || 'PLAN'}
                    </span>
                    <h3 className="text-xl font-heading font-black text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black font-heading text-white">
                        {plan.price}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        / {plan.billingPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isPopular ? 'bg-[#CCFF00]/20 text-[#CCFF00]' : 'bg-white/10 text-white'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs text-slate-300 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={getWhatsAppLink(plan.whatsappPreset)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-[#CCFF00] text-black hover:bg-[#bbf000] shadow-md shadow-[#CCFF00]/20'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
