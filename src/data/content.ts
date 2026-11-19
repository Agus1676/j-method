import {
  CoachProfile,
  SkillDefinition,
  FaqItem,
  SkillId,
  SkillLevelId,
  BlockerId,
} from '../types';

export const COACH_DATA: CoachProfile = {
  name: "Jorge Daniel",
  brand: "J-METHOD",
  tagline: "Fuerza. Habilidades. Control.",
  location: "Salta Capital, Argentina · Online & Presencial",
  city: "Salta Capital",
  country: "Argentina",
  email: "jorgedanielotz@gmail.com",
  phoneRaw: "5493874667930",
  phoneDisplay: "+54 9 387 466-7930",
  whatsappUrl: "https://wa.me/5493874667930",
  instagram: "jorgedaniel_sw",
  instagramUrl: "https://www.instagram.com/jorgedaniel_sw/",
  tiktok: "jorgedaniel_sw",
  tiktokUrl: "https://www.tiktok.com/@jorgedaniel_sw",
  youtube: "jorgedaniel_sw",
  youtubeUrl: "https://www.youtube.com/@jorgedaniel_sw",
};

export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${COACH_DATA.phoneRaw}?text=${encodeURIComponent(message)}`;
};

export const SKILLS_CATALOG: SkillDefinition[] = [
  {
    id: 'planche',
    name: 'Planche',
    shortDesc: 'Empuje, fuerza y control.',
    image: '/images/planche.webp',
    objectPosition: '50% 58%',
    basePrescription:
      'Acondicionamiento de tendón distal de bíceps y muñecas, fortalecimiento de protracción escapular activa (Planche Lean) y construcción de fuerza base en fondos y empuje.',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest:
          'Entrada mínima: 8 fondos estrictos, 10 flexiones estrictas y 10 s de Planche Lean con buena protracción escapular y bloqueo de codos.',
        focus:
          'Consolidar Tuck Planche sólida con brazos a 0° de flexión, transferencia de centro de gravedad y primeros despejes controlados.',
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest:
          'Encajás acá si controlás Advanced Tuck alrededor de 6–10 s de forma repetible, tenés una Tuck sólida y buena proyección de hombros.',
        focus:
          'Apertura de cadera hacia Half Lay / Straddle Planche manteniendo protracción escapular y trabajo dinámico específico.',
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest:
          'Encajás acá si ya tenés una Planche avanzada reproducible (Straddle sólida o Full con holds útiles) y podés entrenar presses con técnica estable.',
        focus:
          'Holds limpios de Full Planche, Planche Push-Ups y eficiencia biomecánica en combinaciones de empuje.',
      },
    ],
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    shortDesc: 'Tracción y cuerpo en línea.',
    image: '/images/front-lever.webp',
    objectPosition: '50% 50%',
    basePrescription:
      'Construcción de fuerza de tracción vertical, control de depresión y retracción escapular con brazos rectos y fortalecimiento anti-extensión del core.',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest:
          'Entrada mínima: 10 dominadas estrictas, 8–10 scapular pull-ups controladas y buena capacidad de activación escapular con brazos bloqueados.',
        focus:
          'Dominio de Tuck a Advanced Tuck Front Lever con línea horizontal limpia y activación dorsal sin compensar con bíceps.',
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest:
          'Encajás acá si controlás Advanced Tuck Front Lever 8–12 s con línea estable y podés hacer dinámica específica en una regresión cercana.',
        focus:
          'Transición estructurada de Advanced Tuck a Half Lay y Full Front Lever, combinando holds isométricos y Front Lever Raises.',
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest:
          'Encajás acá si ya tenés Full Front Lever reproducible o una Half Lay muy sólida y podés realizar dinámica específica manteniendo la palanca.',
        focus:
          'Maximizar tiempo de retención en Full Front Lever, Front Lever Pull-Ups y Touch con control total.',
      },
    ],
  },
  {
    id: 'handstand',
    name: 'Handstand',
    shortDesc: 'Equilibrio y control invertido.',
    image: '/images/handstand.webp',
    objectPosition: '50% 30%',
    basePrescription:
      'Movilidad de flexión de hombro y muñecas, elevación escapular activa en vertical (Chest-to-Wall) y pérdida progresiva del miedo a la inversión.',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest:
          'Entrada mínima: 4 Pike Push-Ups con técnica limpia, poder escalar a la pared hasta Handstand asistido con control y conocer la patada de entrada.',
        focus:
          'Alineación vertical hombro-cadera-tobillo sin banana back, control con yemas de los dedos y entradas consistentes al equilibrio libre.',
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest:
          'Entrada: poder mantener aproximadamente 10–15 s de Handstand libre de forma razonablemente consistente; no basta un intento aislado.',
        focus:
          'Holds libres de 30–45 s repetibles, corrección de línea bajo fatiga y desarrollo de fuerza en Handstand Push-Ups.',
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest:
          'Encajás acá si el Handstand libre es sólido y repetible y ya podés dedicar el trabajo principal a figuras/shapes, HSPU libres y presses.',
        focus:
          'Straddle/Pike Press to Handstand, control de figuras avanzadas y transiciones de empuje vertical.',
      },
    ],
  },
  {
    id: 'muscle-up',
    name: 'Muscle-Up',
    shortDesc: 'Altura, transición y técnica.',
    image: '/images/muscle-up.webp',
    objectPosition: '50% 40%',
    basePrescription:
      'Desarrollo de fuerza en dominadas estrictas al pecho, fondos profundos en barra recta y acondicionamiento de codos y hombros para la transición.',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest:
          'Entrada mínima: 8 dominadas estrictas, 8 fondos estrictos y 1–3 High Pull-Ups limpios llevando la barra al pecho bajo.',
        focus:
          'Mecánica de tirón explosivo en trayectoria "C" y transición rápida de muñecas y codos por encima de la barra.',
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest:
          'Encajás acá si ya conseguiste algún Muscle-Up o estás muy cerca y el cuello de botella principal es altura de tirón, transición o limpieza.',
        focus:
          'Eliminar el kipping excesivo, simetría de ambos brazos en la subida y series sólidas de 3 a 5 repeticiones limpias.',
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest:
          'Encajás acá si hacés Muscle-Ups estrictos, limpios y repetibles y querés mejorar altura, potencia, lastre y calidad de transición.',
        focus:
          'Strict Bar Muscle-Up sin balanceo, Muscle-Up lastrado y dominio de altura hacia la cadera.',
      },
    ],
  },
];

export const SKILL_LABELS: Record<SkillId, string> = {
  planche: 'Planche',
  'front-lever': 'Front Lever',
  handstand: 'Handstand',
  'muscle-up': 'Muscle-Up',
};

export const LEVEL_LABELS: Record<SkillLevelId, string> = {
  base: 'Construyendo la base',
  principiante: 'Nivel Principiante',
  intermedio: 'Nivel Intermedio',
  avanzado: 'Nivel Avanzado',
};

export const BLOCKER_OPTIONS: {
  id: BlockerId;
  label: string;
  desc: string;
  solution: string;
}[] = [
  {
    id: 'fuerza',
    label: 'Me falta fuerza específica o base',
    desc: 'Siento que la progresión todavía me pesa demasiado o pierdo la postura rápido.',
    solution:
      'Programación de sobrecarga progresiva en básicos e isometrías submáximas para construir tensión real sin forzar tendones.',
  },
  {
    id: 'tecnica',
    label: 'No sé cómo corregir mi técnica',
    desc: 'Entreno pero no sé si mi línea escapular, cadera o bloqueo de codos son correctos.',
    solution:
      'Revisión técnica en video serie por serie con Jorge Daniel para ajustar postura, palanca y activación escapular.',
  },
  {
    id: 'programacion',
    label: 'No sé cómo estructurar mi semana',
    desc: 'Hago ejercicios sueltos sin saber cuántas series, descansos o cuándo avanzar.',
    solution:
      'Planificación semanal individualizada con volumen, frecuencia e intensidad medidos según tu disponibilidad.',
  },
  {
    id: 'estancamiento',
    label: 'Llevo meses estancado/a o con molestias',
    desc: 'Entreno constante pero no logro pasar al siguiente nivel de la skill.',
    solution:
      'Diagnóstico del eslabón débil, ajuste de estímulo/descanso y progresiones intermedias para destrabar el avance.',
  },
];

export const METHOD_STEPS = [
  {
    number: '01',
    title: 'Un plan que encaja con vos.',
    desc: 'Tu nivel actual, tus objetivos y los días que podés entrenar. La estructura se adapta a tu realidad y equipamiento.',
  },
  {
    number: '02',
    title: 'Correcciones que entendés.',
    desc: 'Revisamos tu técnica en video (o en vivo en Salta) para que sepas exactamente qué cambiar en la siguiente sesión.',
  },
  {
    number: '03',
    title: 'Seguimiento para ajustar.',
    desc: 'Tu respuesta al entrenamiento guía el siguiente paso. Medimos, revisamos y ajustamos cargas cada semana.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Sirve el coaching si todavía estoy empezando desde cero?',
    answer:
      'Sí. Si todavía no cumplís el nivel Principiante en una skill, armamos tu bloque de construcción de base para ganar fuerza en dominadas, fondos, empuje y control escapular sin riesgo de lesión.',
  },
  {
    question: '¿Cómo funciona la revisión técnica en el Coaching Online 1 a 1?',
    answer:
      'Grabás tus series principales con el celular y se las enviás a Jorge por WhatsApp. Recibís correcciones puntuales sobre tu línea, bloqueo articular y posición escapular para aplicar en tu siguiente entrenamiento.',
  },
  {
    question: '¿Dónde se realizan los entrenamientos presenciales?',
    answer:
      'Las sesiones presenciales se realizan en Salta Capital, Argentina. Coordinamos días y horarios directamente por WhatsApp para trabajar técnica, fuerza y progresiones en vivo.',
  },
  {
    question: '¿Tiene algún costo completar el diagnóstico inicial en la web?',
    answer:
      'No. El diagnóstico interactivo de 3 pasos es 100% gratuito y sin registro. Te permite ubicar tu nivel técnico y enviarle tu ficha directamente a Jorge para recibir tu propuesta de entrenamiento.',
  },
];
