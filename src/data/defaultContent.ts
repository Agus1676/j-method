import { SiteContent } from '../types';

export const DEFAULT_CONTENT: SiteContent = {
  coach: {
    name: "Jorge Daniel",
    brand: "J-METHOD",
    tagline: "Fuerza. Habilidades. Control.",
    location: "Coaching 100% Online · Sin Fronteras",
    city: "Online Global",
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
    image: "/images/hero.webp",
    heroImage1: "/images/front-lever.webp",
    heroImage2: "/images/muscle-up.webp",
    bioP1: "Soy atleta y entrenador de calistenia y street workout. Llevo más de 6 años entrenando y guiando a atletas de todo el mundo mediante coaching 1 a 1 online, ayudándolos a construir fuerza real, perfeccionar su técnica y desbloquear sus habilidades sin lesionarse.",
    bioP2: "Mis primeras habilidades también fueron intentos, caídas y estancamientos. Hoy mi trabajo con vos es ahorrarte años de ensayo y error con decisiones claras: qué corregir en cada serie, qué progresiones usar y cómo organizar tu semana.",
  },
  hero: {
    eyebrow: "COACHING DE CALISTENIA 1:1 · ONLINE & GLOBAL",
    title1: "TU SIGUIENTE",
    titleHighlight: "NIVEL.",
    title2: "CON UN PLAN.",
    description: "Dejá de improvisar tus entrenamientos. Trabajá tu fuerza y tus skills con programación individualizada, revisión técnica y seguimiento semanal.",
    guaranteeText: "Valoración técnica inicial gratuita · Sin compromiso",
    athleteQuoteTitle: "Entrenás vos. Te acompaño yo.",
    athleteQuoteSubtitle: "Jorge Daniel (@jorgedaniel_sw) · Coach de calistenia",
  },
  metrics: {
    metric1Val: "+6 AÑOS",
    metric1Label: "Entrenando",
    metric2Val: "100% ONLINE",
    metric2Label: "Seguimiento",
    metric3Val: "1 A 1",
    metric3Label: "Personalizado",
  },
  coachingFeatures: {
    heading: "¿QUÉ INCLUYE EL COACHING 1 A 1?",
    item1Title: "Plan individualizado:",
    item1Desc: "Rutinas adaptadas a tu nivel, días y equipamiento.",
    item2Title: "Revisión técnica en video:",
    item2Desc: "Mandás tus series por WhatsApp y Jorge te devuelve correcciones precisas de palancas y codos.",
    item3Title: "Ajustes semanales:",
    item3Desc: "Progresión de cargas y prevención activa de lesiones y tendinitis.",
  },
  skills: [
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
            'Encajás acá si controlás Handstand libre de más de 30 s con total calma, podés corregir alineación sobre la marcha y querés desarrollar fuerza avanzada.',
          focus:
            'Handstand Push-Ups estrictos en suelo y paralelas, transiciones a Straddle y preparación de Press to Handstand.',
        },
      ],
    },
    {
      id: 'muscle-up',
      name: 'Muscle-Up',
      shortDesc: 'Potencia y aceleración.',
      image: '/images/muscle-up.webp',
      objectPosition: '50% 40%',
      basePrescription:
        'Desarrollo de dominada explosiva con trayectoria al esternón/cintura, fortalecimiento de fondos profundos en barra y acondicionamiento de rotadores.',
      levels: [
        {
          id: 'principiante',
          label: 'Principiante',
          index: '01',
          entryTest:
            'Entrada mínima: 8 dominadas estrictas completas, 8 fondos profundos en barra recta y capacidad de traccionar explosivo al pecho.',
          focus:
            'Desarrollo del tirón explosivo, trayectoria en "C", timing de rodillas y primeros intentos de transición simétrica con banda o impulso medido.',
        },
        {
          id: 'intermedio',
          label: 'Intermedio',
          index: '02',
          entryTest:
            'Encajás acá si ya lográs 1–2 Muscle-Ups pero dependés de balanceo o subís con codos asimétricos y querés limpiar la técnica.',
          focus:
            'Eliminación de asimetrías («subida en pollo»), paso limpio de muñecas sobre la barra y series consistentes de 3–5 repeticiones estrictas.',
        },
        {
          id: 'avanzado',
          label: 'Avanzado',
          index: '03',
          entryTest:
            'Encajás acá si tenés Muscle-Up estricto y limpio repetible (3–5 reps) y querés sumar lastre o encadenar con otras habilidades.',
          focus:
            'Muscle-Up estricto con lastre, dominada a la cintura (high pull-up) y fluidez en combos sobre la barra.',
        },
      ],
    },
  ],
  faq: [
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
      question: '¿Desde qué país puedo empezar el coaching online?',
      answer:
        'Podés entrenar desde cualquier lugar del mundo. El sistema es 100% online y se adapta a tus horarios, tu gimnasio o tu parque de calistenia local con seguimiento directo y personalizado por WhatsApp.',
    },
  ],
};
