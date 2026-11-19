import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Compass, 
  ArrowLeft, 
  RotateCcw, 
  MessageCircle, 
  Sparkles, 
  Target, 
  Clock, 
  Flame 
} from 'lucide-react';
import { QUIZ_QUESTIONS, getWhatsAppLink } from '../data/content';

export const SkillMapQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((currentStep + (isCompleted ? 1 : 0)) / totalQuestions) * 100);

  const handleSelectOption = (value: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(updatedAnswers);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#CCFF00', '#53b500', '#ffffff']
      });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const generateWhatsAppReport = () => {
    const goalText = QUIZ_QUESTIONS[0].options.find(o => o.value === answers.goal)?.label || answers.goal;
    const expText = QUIZ_QUESTIONS[1].options.find(o => o.value === answers.experience)?.label || answers.experience;
    const skillText = answers.target_skill || 'Calistenia General';
    const envText = QUIZ_QUESTIONS[3].options.find(o => o.value === answers.environment)?.label || answers.environment;

    const message = `Hola Jorge! Completé el *Skill Map J-METHOD*:
🎯 *Meta:* ${goalText}
💪 *Nivel:* ${expText}
🔥 *Skill:* ${skillText}
📍 *Lugar:* ${envText}

¿En qué bloque me recomendás arrancar y qué cupo tenés disponible?`;

    return getWhatsAppLink(message);
  };

  return (
    <section id="skill-map" className="py-10 md:py-14 relative bg-[#0e1114]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/25 text-[#CCFF00] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Test Diagnóstico Gratuito</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
            Descubrí tu <span className="text-[#CCFF00]">Skill Map</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            4 preguntas rápidas para identificar tu punto de partida biomecánico.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="glass-panel rounded-2xl border border-white/10 p-5 sm:p-8 shadow-xl relative">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-1.5">
              <span>{isCompleted ? 'Diagnóstico Completado' : `Paso ${currentStep + 1} de ${totalQuestions}`}</span>
              <span className="text-[#CCFF00] font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#CCFF00] to-emerald-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {!isCompleted ? (
            <div>
              {/* Question */}
              <div className="mb-5">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                  {currentQuestion.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelectOption(option.value)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-150 ${
                        isSelected
                          ? 'bg-[#CCFF00]/15 border-[#CCFF00] text-white'
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-xs sm:text-sm">
                          {option.label}
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-[#CCFF00] bg-[#CCFF00]' : 'border-slate-500'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                      </div>
                      {option.description && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          {option.description}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Back */}
              {currentStep > 0 && (
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Pregunta anterior</span>
                </button>
              )}
            </div>
          ) : (
            /* Result */
            <div className="text-center animate-fadeIn py-2">
              <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 text-[#CCFF00] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#CCFF00]/20">
                <Sparkles className="w-6 h-6 fill-current" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#CCFF00] block mb-1">
                Resultado Listo
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-2">
                Tu Ruta: <span className="text-[#CCFF00]">{answers.target_skill || 'Calistenia'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-5">
                Detectamos que tu clave de avance es el acondicionamiento biomecánico y la corrección técnica semanal en video.
              </p>

              {/* Mini Diagnostic Breakdown */}
              <div className="grid grid-cols-3 gap-2.5 text-left mb-6">
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1 mb-0.5">
                    <Target className="w-3 h-3 text-[#CCFF00]" />
                    <span>Fase</span>
                  </div>
                  <div className="text-xs font-bold text-white">Bloque 1</div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1 mb-0.5">
                    <Clock className="w-3 h-3 text-[#CCFF00]" />
                    <span>Tiempo</span>
                  </div>
                  <div className="text-xs font-bold text-[#CCFF00]">6-8 Semanas</div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1 mb-0.5">
                    <Flame className="w-3 h-3 text-[#CCFF00]" />
                    <span>Método</span>
                  </div>
                  <div className="text-xs font-bold text-white">Video 1 a 1</div>
                </div>
              </div>

              {/* Action */}
              <a
                href={generateWhatsAppReport()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#CCFF00] text-black font-extrabold text-sm hover:bg-[#bbf000] transition-all shadow-lg shadow-[#CCFF00]/25"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enviar mi diagnóstico a Jorge por WhatsApp</span>
              </a>

              <div className="mt-3">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Repetir test</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
