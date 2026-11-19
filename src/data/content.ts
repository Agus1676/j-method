import { CoachProfile, SkillDefinition, TierDefinition, FaqItem, SkillId, SkillLevelId } from '../types';

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
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest: 'Entrada mínima: 8 fondos estrictos, 10 flexiones estrictas y 10 s de Planche Lean con buena protracción escapular y bloqueo de codos. No se exige Tuck Planche sólida.',
        focus: 'Acondicionamiento de tendón distal de bíceps, protracción bajo carga y primeros despejes en Tuck.'
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest: 'Encajás acá si controlás Advanced Tuck alrededor de 6–10 s de forma repetible, tenés una Tuck sólida, buena proyección de hombros y tolerás trabajo dinámico específico.',
        focus: 'Transición de Advanced Tuck a Half Lay / Straddle con cadera en línea y presses asistidos.'
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest: 'Encajás acá si ya tenés una Planche avanzada reproducible (Straddle sólida o Full con holds útiles) y podés entrenar presses y flexiones específicas con técnica estable.',
        focus: 'Consolidación de Full Planche, Planche Push-Ups y eficiencia de línea sin pérdida escapular.'
      }
    ]
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    shortDesc: 'Tracción y cuerpo en línea.',
    image: '/images/front-lever.webp',
    objectPosition: '50% 50%',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest: 'Entrada mínima: 10 dominadas estrictas, 8–10 scapular pull-ups controladas y buena capacidad de depresión/retracción escapular con brazos bloqueados.',
        focus: 'Tuck a Advanced Tuck sólido, control de palanca dorsal con codos a 0° y tensión abdominal.'
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest: 'Encajás acá si controlás Advanced Tuck Front Lever 8–12 s con línea estable y podés hacer dinámica específica en una regresión cercana. Progresión: Tuck → Adv. Tuck → Half Lay.',
        focus: 'Apertura de cadera hacia Half Lay / Straddle y Front Lever Raises con control excéntrico.'
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest: 'Encajás acá si ya tenés Full Front Lever reproducible o una Half Lay muy sólida y podés realizar dinámica específica manteniendo una línea y palanca limpias.',
        focus: 'Holds de Full Front Lever de 8–12 s, Front Lever Pull-Ups y Touch.'
      }
    ]
  },
  {
    id: 'handstand',
    name: 'Handstand',
    shortDesc: 'Equilibrio y control invertido.',
    image: '/images/handstand.webp',
    objectPosition: '50% 30%',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest: 'Entrada mínima: 4 Pike Push-Ups con técnica limpia, poder escalar a la pared hasta Handstand asistido (chest-to-wall) con control y conocer la patada de entrada.',
        focus: 'Alineación vertical sin arqueo lumbar, presión activa de dedos y entradas consistentes.'
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest: 'Entrada: poder mantener aproximadamente 10–15 s de Handstand libre de forma razonablemente consistente; no basta un récord aislado de suerte.',
        focus: 'Consistencia 30–45 s libre, corrección de hombro/cadera y primeros déficit HSPU.'
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest: 'Encajás acá si el Handstand libre es sólido y repetible en cualquier superficie y ya podés dedicar el trabajo principal a figuras/shapes, HSPU libres y presses.',
        focus: 'Straddle/Pike Press to Handstand, control de figuras y resistencia vertical avanzada.'
      }
    ]
  },
  {
    id: 'muscle-up',
    name: 'Muscle-Up',
    shortDesc: 'Altura, transición y técnica.',
    image: '/images/muscle-up.webp',
    objectPosition: '50% 40%',
    levels: [
      {
        id: 'principiante',
        label: 'Principiante',
        index: '01',
        entryTest: 'Entrada mínima: 8 dominadas estrictas, 8 fondos estrictos en barra o paralelas y 1–3 High Pull-Ups limpios llevando la barra al pecho bajo.',
        focus: 'Potencia de tirón explosivo en trayectoria "C" y mecánica de transición sin dolor de codos.'
      },
      {
        id: 'intermedio',
        label: 'Intermedio',
        index: '02',
        entryTest: 'Encajás acá si ya conseguiste algún Muscle-Up o estás muy cerca y el cuello de botella principal es altura de tirón, transición asimétrica o limpieza.',
        focus: 'Eliminar el kipping de rodillas, lograr series de 3–5 Muscle-Ups limpios y repetibles.'
      },
      {
        id: 'avanzado',
        label: 'Avanzado',
        index: '03',
        entryTest: 'Encajás acá si hacés Muscle-Ups estrictos, limpios y repetibles y querés mejorar altura (hacia la cadera), potencia sin balanceo, lastre y control lento.',
        focus: 'Strict Bar Muscle-Up sin inercia, Muscle-Up lastrado y transiciones de alta potencia.'
      }
    ]
  }
];

export const SKILL_LABELS: Record<SkillId, string> = {
  'planche': 'Planche',
  'front-lever': 'Front Lever',
  'handstand': 'Handstand',
  'muscle-up': 'Muscle-Up',
};

export const LEVEL_LABELS: Record<SkillLevelId, string> = {
  'base': 'Construir la base',
  'principiante': 'Principiante',
  'intermedio': 'Intermedio',
  'avanzado': 'Avanzado',
};

export const J_METHOD_TIERS: TierDefinition[] = [
  {
    id: 'individual',
    name: 'Individual',
    label: '1 SKILL',
    count: 1,
    priceArs: '$24.900',
    priceUsd: '25 USD',
  },
  {
    id: 'duo',
    name: 'Duo',
    label: '2 SKILLS',
    count: 2,
    priceArs: '$42.900',
    priceUsd: '42 USD',
    savingNote: 'Ahorrás $6.900 · Ideal empuje + tracción',
  },
  {
    id: 'complete',
    name: 'Complete',
    label: '4 SKILLS',
    count: 4,
    priceArs: '$74.900',
    priceUsd: '72 USD',
    savingNote: 'Sistema completo · Las 4 rutas J-Method',
  }
];

export const GUIDE_SECTIONS = [
  {
    number: '01',
    title: 'Criterios de entrada reales (Sin autoengaño)',
    content: 'El mayor error en calistenia es entrenar una progresión para la que tus tendones y escápulas aún no tienen fuerza estructural. Un hold de 2 segundos temblando y con los codos doblados no es un nivel consolidado: en J-METHOD ubicamos tu nivel según lo que podés repetir con línea limpia en al menos 3 series.'
  },
  {
    number: '02',
    title: 'Regla de Prioridad: Máximo 2 Skills Simultáneas',
    content: 'Si intentás progresar al mismo tiempo en Planche, Front Lever, Handstand, Muscle-Up y básicos pesados, tu sistema nervioso y tus codos colapsan en la semana 3. La estructura óptima combina 1 prioridad de empuje (ej. Planche o Handstand) + 1 prioridad de tracción (ej. Front Lever o Muscle-Up).'
  },
  {
    number: '03',
    title: 'Estructura Semanal por Bloques de 8 Semanas',
    content: 'Semanas 1–2: Acumulación y control técnico (RIR 2, foco en línea y activación escapular). Semanas 3–6: Sobrecarga específica (aumento de segundos por serie o reducción de palanca/asistencia). Semana 7: Pico de especificidad. Semana 8: Descarga activa y test de validación de nivel.'
  },
  {
    number: '04',
    title: 'Cuándo Mantener, Avanzar o Ajustar',
    content: 'Avanzá de progresión solo cuando completes el volumen objetivo con técnica limpia en dos sesiones consecutivas. Si aparece molestia en muñeca, epitróclea (codo interno) o porción larga del bíceps, no fuerces el ángulo: regresá medio escalón y priorizá isometrías submáximas.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Sirve el Skill Map si todavía no me sale la skill?',
    answer: 'Sí. Justamente está diseñado para orientarte desde antes de dominarla. Leé el criterio de entrada de cada nivel; si todavía no cumplís el de Principiante, elegí «Estoy construyendo la base» y empezamos desde el acondicionamiento exacto.'
  },
  {
    question: '¿El diagnóstico del Skill Map y la guía tienen costo?',
    answer: 'No. Podés usar el mapa interactivo de 3 pasos y leer la guía práctica gratis, sin dejar tarjeta ni registrarte. Si después elegís un programa J-Method o el Coaching 1 a 1 con Jorge, ves todos los detalles antes de decidir.'
  },
  {
    question: '¿Cuál es la diferencia entre el programa J-Method y el Coaching 1 a 1?',
    answer: 'El programa J-Method es un bloque estructurado autoguiado de 8 semanas por skill y nivel para entrenar a tu ritmo. El Coaching 1 a 1 (Online o Presencial en Salta Capital) suma programación 100% a medida, corrección técnica semanal de tus videos por WhatsApp y ajustes continuos con Jorge Daniel.'
  },
  {
    question: '¿Cómo funcionan las clases presenciales en Salta Capital?',
    answer: 'Si estás en Salta Capital podés entrenar de forma presencial con Jorge Daniel. Coordinamos los días disponibles por WhatsApp para trabajar técnica en vivo, correcciones posturales inmediatas y planificación semanal.'
  }
];
