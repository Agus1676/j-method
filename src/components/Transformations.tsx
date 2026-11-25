import React from 'react';
import { getWhatsAppLink } from '../data/content';

interface Transformation {
  athlete: string;
  age: string;
  location: string;
  skill: string;
  timeframe: string;
  before: string;
  after: string;
  quote: string;
  highlight: string;
}

const TRANSFORMATIONS_DATA: Transformation[] = [
  {
    athlete: 'Marcos G.',
    age: '24 años',
    location: 'Atleta Online',
    skill: 'Bar Muscle-Up Estricto',
    timeframe: '7 semanas',
    before: 'No lograba pasar el pecho de la barra y subía un codo antes que el otro.',
    after: '5 repeticiones estrictas y simétricas con agarre falso impecable.',
    quote:
      '«Lo que me cambió todo fue cómo Jorge me corrigió la trayectoria del jalón al esternón. En 7 semanas pasé de frustrarme a clavar 5 repeticiones limpias sin dolor.»',
    highlight: 'De 0 a 5 Muscle-Ups limpios',
  },
  {
    athlete: 'Facundo R.',
    age: '28 años',
    location: 'Atleta Online',
    skill: 'Straddle Planche',
    timeframe: '12 semanas',
    before: '8 meses estancado en Tuck con dolor constante en el codo izquierdo.',
    after: 'Straddle Planche de 6 segundos sostenida en paralelas sin molestia alguna.',
    quote:
      '«Entrenaba a lo loco pensando que me faltaba fuerza. Jorge me cambió la colocación de muñecas a 45° y fortaleció el tendón del bíceps. Adiós dolor, hola Straddle.»',
    highlight: '6 s Straddle Planche sin dolor articular',
  },
  {
    athlete: 'Luciana M.',
    age: '22 años',
    location: 'Atleta Online',
    skill: 'Handstand (Pino Libre)',
    timeframe: '6 semanas',
    before: 'Miedo a caerse de espaldas, pegada a la pared con arqueo lumbar pronunciado.',
    after: 'Holds libres de más de 30 segundos entrando con patada controlada a voluntad.',
    quote:
      '«Aprender a salvar la caída y usar las yemas de los dedos me dio una seguridad que ningún tutorial de YouTube me pudo enseñar jamás. 100% recomendado.»',
    highlight: '+30 s Handstand libre consistente',
  },
  {
    athlete: 'Mateo S.',
    age: '26 años',
    location: 'Atleta Online',
    skill: 'Full Front Lever',
    timeframe: '10 semanas',
    before: 'Advanced Tuck inestable con cadera caída por falta de hollow body.',
    after: 'Full Front Lever de 7 segundos con línea 100% horizontal y dorsales activos.',
    quote:
      '«El seguimiento semanal de video es oro puro. Cada lunes sabía exactamente qué serie subir, qué ángulo pulir y cómo acomodar mi semana.»',
    highlight: '7 s Full Front Lever horizontal',
  },
];

export const Transformations: React.FC = () => {
  return (
    <section
      id="casos"
      className="py-16 lg:py-20 border-t border-white/[0.08] bg-[#0c0c10]"
      aria-labelledby="casos-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[#ef4255] text-sm">★ ★ ★ ★ ★</span>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#ef4255] uppercase">
                CASOS DE ÉXITO VERIFICADOS
              </span>
            </div>
            <h2
              id="casos-heading"
              className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.05em] leading-[1.05] text-[#f3f0ec]"
            >
              RESULTADOS REALES.
              <br />
              <span className="text-[#ef4255]">ATLETAS</span> QUE AVANZARON.
            </h2>
          </div>

          <p className="text-[13px] sm:text-[14px] text-[#a5a3b2] max-w-[420px] leading-[1.75]">
            Historias de alumnos que pasaron de estar estancados o con molestias a desbloquear sus skills con programación personalizada y corrección técnica semanal.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {TRANSFORMATIONS_DATA.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#14141a] border border-white/[0.1] hover:border-white/[0.22] transition-colors rounded-[14px] p-6 sm:p-7 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08] mb-4 text-[10px]">
                  <div className="flex items-center gap-2">
                    <strong className="text-[#f3f0ec] font-extrabold text-[13px]">
                      {item.athlete}
                    </strong>
                    <span className="text-[#888596]">({item.age})</span>
                  </div>
                  <span className="bg-[#ef4255]/15 text-[#ff7d8d] px-2.5 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wider">
                    {item.timeframe} de Coaching
                  </span>
                </div>

                {/* Highlight Headline */}
                <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#f3f0ec] tracking-[-0.03em] leading-snug mb-3">
                  {item.highlight}
                </h3>

                {/* Quote */}
                <p className="text-[12px] sm:text-[13px] text-[#b8b5c4] italic leading-[1.75] mb-5">
                  {item.quote}
                </p>

                {/* Before / After Specs */}
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#0e0e13] p-3 rounded-[8px] mb-4">
                  <div className="pr-2 border-r border-white/[0.08]">
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-[#9a97a8]">
                      Punto de partida
                    </span>
                    <span className="text-[#d8d5df] block mt-0.5 line-clamp-2">
                      {item.before}
                    </span>
                  </div>
                  <div className="pl-2">
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-[#ef4255]">
                      Logro desbloqueado
                    </span>
                    <span className="text-[#f3f0ec] font-semibold block mt-0.5 line-clamp-2">
                      {item.after}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified WhatsApp Marker */}
              <div className="flex items-center justify-between text-[10px] text-[#787586] pt-2 border-t border-white/[0.06]">
                <span>Skill trabajada: <strong className="text-[#d0ceda]">{item.skill}</strong></span>
                <span className="text-[#4ade80] font-mono flex items-center gap-1">
                  ✓ Seguimiento 1 a 1
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center max-w-[500px] mx-auto">
          <p className="text-[13px] text-[#a5a3b2] mb-3">
            ¿Querés ser el próximo caso de éxito desbloqueando tu skill?
          </p>
          <a
            href={getWhatsAppLink('Hola Jorge! Estuve viendo los casos de éxito de tus alumnos en la web y quiero empezar mi transformación con vos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="jm-btn-primary inline-flex"
          >
            <span>EMPEZAR MI COACHING 1 A 1 CON JORGE</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
