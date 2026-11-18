import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  RotateCcw, 
  MessageCircle, 
  Sparkles, 
  Award, 
  Clock, 
  Flame, 
  Target, 
  Calendar 
} from 'lucide-react';
import { QUIZ_QUESTIONS, COACH_DATA, getWhatsAppLink } from '../data/content';

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
      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
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

  // Generate WhatsApp Message with diagnostic results
  const generateWhatsAppReport = () => {
    const goalText = QUIZ_QUESTIONS[0].options.find(o => o.value === answers.goal)?.label || answers.goal;
    const expText = QUIZ_QUESTIONS[1].options.find(o => o.value === answers.experience)?.label || answers.experience;
    const skillText = answers.target_skill || 'Calistenia General';
    const envText = QUIZ_QUESTIONS[3].options.find(o => o.value === answers.environment)?.label || answers.environment;

    const message = `Hola Jorge! Completé el *Skill Map del J-METHOD* y este es mi diagnóstico:
🎯 *Objetivo:* ${goalText}
💪 *Nivel de Básicos:* ${expText}
🔥 *Skill que busco desbloquear:* ${skillText}
📍 *Lugar de entrenamiento:* ${envText}

Quiero que revises mi caso para saber en qué bloque del método debería arrancar y ver disponibilidad para el Coaching. ¿Cómo seguimos?`;

    return getWhatsAppLink(message);
  };

  return (
    <section id="skill-map" className="py-24 relative overflow-hidden bg-[#0e1114]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/25 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            <span>Herramienta Interactiva Gratuita</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
            Descubrí tu <span className="text-[#CCFF00]">Skill Map</span> J-METHOD
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Respondé 4 preguntas clave para identificar exactamente en qué nivel biomecánico estás y cuál es la hoja de ruta que necesitás para desbloquear tu próxima skill.
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 mb-2">
              <span>{isCompleted ? 'Diagnóstico Completo' : `Pregunta ${currentStep + 1} de ${totalQuestions}`}</span>
              <span className="text-[#CCFF00] font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-[#CCFF00] to-emerald-400 rounded-full transition-all duration-500 ease-out shadow-sm shadow-[#CCFF00]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {!isCompleted ? (
            <div>
              {/* Question Title */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                  {currentQuestion.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelectOption(option.value)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-200 relative group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#CCFF00]/15 border-[#CCFF00] shadow-lg shadow-[#CCFF00]/15'
                          : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className={`font-semibold text-base sm:text-lg transition-colors ${
                          isSelected ? 'text-[#CCFF00]' : 'text-white group-hover:text-white'
                        }`}>
                          {option.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected ? 'border-[#CCFF00] bg-[#CCFF00]' : 'border-slate-500 group-hover:border-slate-400'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                        </div>
                      </div>
                      {option.description && (
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {option.description}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Back */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${
                    currentStep === 0 
                      ? 'text-slate-600 cursor-not-allowed' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="text-xs text-slate-500 hidden sm:inline">
                  Toca una opción para continuar
                </span>
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 text-[#CCFF00] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#CCFF00]/20">
                <Sparkles className="w-8 h-8 fill-current" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#CCFF00] block mb-2">
                Diagnóstico Listo
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-black text-white mb-3">
                Tu Hoja de Ruta J-METHOD Recomendada
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8">
                En base a tus respuestas, detectamos que tu mayor acelerador es la optimización de palancas para tu skill objetivo: <strong className="text-[#CCFF00]">{answers.target_skill || 'Calistenia'}</strong>.
              </p>

              {/* Diagnostic Card Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Target className="w-4 h-4 text-[#CCFF00]" />
                    <span>Fase Inicial</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Bloque de Adaptación
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Salud articular + volumen base
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Clock className="w-4 h-4 text-[#CCFF00]" />
                    <span>Tiempo Estimado</span>
                  </div>
                  <div className="text-base font-bold text-[#CCFF00]">
                    6 a 8 Semanas
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Para consolidar progresión
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Flame className="w-4 h-4 text-[#CCFF00]" />
                    <span>Clave del J-Method</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Feedback en Video
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Para corregir ángulos por WhatsApp
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action with Presets */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#CCFF00]/10 to-transparent border border-[#CCFF00]/30 mb-8">
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  ¿Querés que Jorge Daniel revise tu diagnóstico personalmente?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Enviále tus resultados por WhatsApp con un solo clic. Te responderá indicándote qué ejercicios te convienen y si hay cupo disponible.
                </p>

                <a
                  href={generateWhatsAppReport()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#CCFF00] text-black font-extrabold text-base hover:bg-[#bbf000] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#CCFF00]/30"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar mi diagnóstico a Jorge por WhatsApp</span>
                </a>
              </div>

              {/* Restart button */}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reiniciar Test de Nivel</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
