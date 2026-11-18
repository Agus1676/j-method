import React from 'react';
import { Check, MessageCircle, Star, Sparkles, Shield, Flame } from 'lucide-react';
import { PLANS_DATA, getWhatsAppLink } from '../data/content';

export const Programs: React.FC = () => {
  return (
    <section id="programas" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#CCFF00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Modalidades de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            Elegí Cómo Querés Entrenar Con el <span className="text-[#CCFF00]">J-METHOD</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Opciones autoguiadas, acompañamiento online individual desde cualquier parte del mundo o entrenamiento presencial exclusivo en Salta Capital.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS_DATA.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'glass-panel border-2 border-[#CCFF00] shadow-2xl shadow-[#CCFF00]/15 lg:-translate-y-3'
                    : 'glass-panel border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#CCFF00] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#CCFF00]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="mb-6">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#8E9AA7] font-semibold block mb-1">
                      {plan.badge && !isPopular ? plan.badge : 'PLAN ENTRENAMIENTO'}
                    </span>
                    <h3 className="text-2xl font-heading font-black text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black font-heading text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        / {plan.billingPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      ¿Qué incluye el plan?
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isPopular ? 'bg-[#CCFF00]/20 text-[#CCFF00]' : 'bg-white/10 text-white'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={getWhatsAppLink(plan.whatsappPreset)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 ${
                      isPopular
                        ? 'bg-[#CCFF00] text-black hover:bg-[#bbf000] shadow-xl shadow-[#CCFF00]/20 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-2xl mx-auto p-5 rounded-2xl glass-panel border border-white/10 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <Shield className="w-5 h-5 text-[#CCFF00] flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-300">
            <strong>Compromiso J-METHOD:</strong> Si en tus primeros 14 días sentís que la metodología o el feedback no cumplen con tus expectativas, podés cancelar tu suscripción sin vueltas.
          </p>
        </div>
      </div>
    </section>
  );
};
