import { CoachProfile, SkillItem, PlanItem, Testimonial, FaqItem, QuizQuestion } from '../types';

export const COACH_DATA: CoachProfile = {
  name: "Jorge Daniel",
  brand: "J-METHOD",
  tagline: "Desbloqueá tus Skills de Calistenia y Construí un Físico Imponente",
  location: "Salta Capital, Argentina (Presencial & Online Global)",
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

export const METHOD_PILLARS = [
  {
    step: "01",
    title: "Biomecánica y Progresiones Claras",
    subtitle: "Cero improvisación",
    description: "Cada articulación y cadena muscular cuenta. Dejamos de lado las rutinas genéricas de internet y aplicamos criterios de progresión milimétricos para avanzar de nivel sin dañar hombros, muñecas ni codos.",
    icon: "Target",
    highlight: "100% libre de sobrecargas lesivas"
  },
  {
    step: "02",
    title: "Sobrecarga Progresiva Inteligente",
    subtitle: "Fuerza real y estética",
    description: "Periodización por bloques de entrenamiento (4 a 8 semanas). Ajustamos el volumen, la frecuencia y la intensidad exacta para que desbloquees tus skills mientras construís masa muscular y densidad real.",
    icon: "TrendingUp",
    highlight: "Máxima ganancia de fuerza relativa"
  },
  {
    step: "03",
    title: "Feedback Técnico en Video 1 a 1",
    subtitle: "Acompañamiento directo",
    description: "Me enviás tus grabaciones de las series clave y las analizo ángulo por ángulo. Corregimos puntos ciegos, escapulares y de palanca para que cada sesión rinda el triple y ganes seguridad total.",
    icon: "Video",
    highlight: "Respuesta personalizada por WhatsApp"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "handstand",
    name: "Handstand (Pino)",
    level: "Fuerza Básica - Equilibrio",
    tag: "Fundamento Esencial",
    description: "La base del equilibrio vertical, control escapular y fuerza de hombros. Aprendé a pararte de manos de forma sólida, sin banana back y con alineación perfecta.",
    prerequisites: ["30s Plancha Hollow Body", "Flexiones Pike limpias", "Movilidad de muñecas"],
    stages: [
      { stage: "Fase 1", title: "Acondicionamiento Articular", desc: "Fortalecimiento de flexores de muñeca, dedos y serrato anterior." },
      { stage: "Fase 2", title: "Chest-to-Wall Hold", desc: "Alineación pélvica, empuje activo de hombros y pérdida del miedo a caer." },
      { stage: "Fase 3", title: "Despegues y Kick-ups", desc: "Entradas controladas con tijera y balanceo con yemas de los dedos." },
      { stage: "Fase 4", title: "Consistencia Freestanding", desc: "Retención de 20s a 60s constantes en cualquier superficie." }
    ],
    keyTip: "El equilibrio no está en los hombros, sino en la micro-presión de las yemas de los dedos contra el suelo."
  },
  {
    id: "muscle-up",
    name: "Bar Muscle-Up",
    level: "Intermedio - Tracción Explosiva",
    tag: "Poder y Fluidez",
    description: "La transición suprema que conecta la dominada con el fondo en barra. Eliminá los kippings desprolijos y lográ un Muscle-Up estricto y explosivo.",
    prerequisites: ["12 Dominadas estrictas al pecho", "15 Fondos en barra recta", "Pull-ups con aceleración"],
    stages: [
      { stage: "Fase 1", title: "High Pull-up (Al esternón)", desc: "Tracción vertical con intención explosiva y trayectoria en 'C'." },
      { stage: "Fase 2", title: "Transición y Agarre Falso", desc: "Rotación rápida de muñecas sin balanceo descontrolado." },
      { stage: "Fase 3", title: "Fondo sobre Barra (Straight Bar)", desc: "Estabilidad del core en la posición de recepción superior." },
      { stage: "Fase 4", title: "Muscle-Up Limpio y Estricto", desc: "Subida sincronizada de ambos codos sin kicking asimétrico." }
    ],
    keyTip: "No busques subir pegado a la barra: proyectá el pecho hacia atrás para dejar espacio a la transición de los codos."
  },
  {
    id: "front-lever",
    name: "Front Lever",
    level: "Avanzado - Tensión Completa",
    tag: "Tensión Isométrica",
    description: "Dominá la posición horizontal suspendido de la barra. Demanda fuerza dorsal extrema, core de acero y retracción escapular activa.",
    prerequisites: ["Dominadas pesadas o lastradas (+25kg)", "Dragon Flags de core sólidos", "Control de depresión escapular"],
    stages: [
      { stage: "Fase 1", title: "Tuck Front Lever", desc: "Rodillas al pecho, brazos rectos y bloqueo de dorsales activo." },
      { stage: "Fase 2", title: "Advanced Tuck Front Lever", desc: "Apertura a 90 grados de cadera y alineación de torso paralela." },
      { stage: "Fase 3", title: "Straddle / One Leg Lever", desc: "Aumento de la palanca manteniendo la pelvis neutra y horizontal." },
      { stage: "Fase 4", title: "Full Front Lever Hold", desc: "Cuerpo como una tabla rígida sostenido de 5 a 12 segundos." }
    ],
    keyTip: "Los brazos deben actuar como palancas rígidas; si doblás los codos, el dorsal pierde su ventaja biomecánica."
  },
  {
    id: "planche",
    name: "Full / Straddle Planche",
    level: "Elite - Empuje Isométrico",
    tag: "La Skill Reina",
    description: "El santo grial de la calistenia y la gimnasia de fuerza. Desafía la gravedad elevando el cuerpo horizontalmente mediante un empuje brutal de hombros y bíceps.",
    prerequisites: ["Fondos lastrados pesados", "Handstand push-ups a pared", "Acondicionamiento de tendones de bíceps"],
    stages: [
      { stage: "Fase 1", title: "Planche Lean & Pseudo Pushups", desc: "Ángulo de inclinación anterior y protracción escapular máxima." },
      { stage: "Fase 2", title: "Tuck Planche", desc: "Despegue de pies con rodillas al pecho y espalda redondeada alta." },
      { stage: "Fase 3", title: "Advanced Tuck / Straddle", desc: "Extensión progresiva de piernas manteniendo la cadera a la altura de hombros." },
      { stage: "Fase 4", title: "Straddle / Full Planche", desc: "Línea horizontal perfecta sin arqueo lumbar." }
    ],
    keyTip: "La fuerza de tendones se adapta más lento que el músculo: la paciencia y el descanso planificado son innegociables."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "goal",
    title: "¿Cuál es tu objetivo primordial hoy?",
    subtitle: "Seleccioná lo que más querés transformar en los próximos 60-90 días.",
    options: [
      { value: "skills", label: "Desbloquear Skills Específicas", description: "Handstand, Muscle-Up, Front Lever o Planche sin estancarme" },
      { value: "fuerza-masa", label: "Ganar Fuerza Relativa y Masa Muscular", description: "Un físico denso, atlético y funcional sin usar máquinas aburridas" },
      { value: "definir", label: "Definir y Mejorar Composición Corporal", description: "Bajar grasa corporal para que los ejercicios pesen menos y se noten los músculos" },
      { value: "desde-cero", label: "Empezar Calistenia desde Cero de Forma Segura", description: "Aprender la técnica correcta sin lesionarme muñecas ni hombros" }
    ]
  },
  {
    id: "experience",
    title: "¿Cuál es tu nivel actual en básicos?",
    subtitle: "Esto determina en qué bloque de progresión del J-METHOD te conviene iniciar.",
    options: [
      { value: "principiante", label: "0 a 5 Dominadas / 0 a 10 Flexiones", description: "Nivel Inicial: Necesitamos cimentar la fuerza de empuje y tracción básica." },
      { value: "intermedio", label: "6 a 12 Dominadas / Fondos sólidos", description: "Nivel Intermedio: Listo para transiciones explosivas y primeros isométricos." },
      { value: "avanzado", label: "+15 Dominadas / Entreno con lastre", description: "Nivel Avanzado: Busco optimizar palancas complejas (Front Lever, Planche)." }
    ]
  },
  {
    id: "target_skill",
    title: "¿Qué skill te obsesiona desbloquear primero?",
    subtitle: "Elegí la meta que querés celebrar con tu video en redes.",
    options: [
      { value: "Handstand", label: "Pino / Handstand Libre", description: "Aprender a pararte de manos con equilibrio de acero." },
      { value: "Muscle-Up", label: "Muscle-Up Estricto en Barra", description: "Subir con potencia limpia por encima de la barra." },
      { value: "Front-Lever", label: "Front Lever Horizontal", description: "Tensión dorsal total suspendido como una tabla." },
      { value: "Planche", label: "Straddle o Full Planche", description: "El desafío supremo de empuje y estética corporal." }
    ]
  },
  {
    id: "environment",
    title: "¿Dónde realizás tus entrenamientos?",
    subtitle: "Adaptamos las progresiones exactas a tu disponibilidad de material.",
    options: [
      { value: "parque", label: "Parque de Calistenia / Barras al Aire Libre", description: "Tengo acceso a barras de dominadas, paralelas y piso." },
      { value: "gimnasio", label: "Gimnasio Convencional", description: "Cuento con barras, poleas, mancuernas y zonas funcionales." },
      { value: "casa", label: "En Casa con Barra y/o Anillas", description: "Entrenamiento eficiente en mi propio espacio." }
    ]
  }
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: "blueprint",
    name: "Skill Blueprint Autoguiado",
    badge: "Acceso Inmediato",
    price: "$ 19.900",
    billingPeriod: "pago único (ARS) / 25 USD",
    description: "La guía estructurada paso a paso para dominar tu skill elegida por bloques de 8 semanas, a tu propio ritmo.",
    popular: false,
    features: [
      "Ebook interactivo + video librería HD de progresiones",
      "Criterios exactos de superación de nivel (cuándo avanzar)",
      "Rutina de calentamiento y salud articular específica",
      "Calculadora de volumen y descansos recomendados",
      "Actualizaciones de por vida del blueprint"
    ],
    ctaText: "Elegir Blueprint",
    whatsappPreset: "Hola Jorge! Me interesa adquirir el Skill Blueprint autoguiado del J-METHOD. ¿Cómo hago para comenzar?"
  },
  {
    id: "coaching-online",
    name: "Coaching Online 1 a 1",
    badge: "MÁS POPULAR / CUPOS LIMITADOS",
    price: "$ 38.500",
    billingPeriod: "por mes (ARS) / 45 USD",
    description: "Mi acompañamiento total, directo e individualizado. Tu rutina a medida con revisión técnica semanal en video.",
    popular: true,
    features: [
      "Plan de entrenamiento 100% personalizado según tus metas y equipo",
      "Análisis y corrección técnica semanal en video por WhatsApp",
      "Ajustes continuos de volumen, intensidad y descansos",
      "Pautas de nutrición deportiva enfocadas en fuerza y recomposición",
      "Contacto directo con Jorge Daniel (@jorgedaniel_sw)",
      "Resolución de dudas prioritarias vía WhatsApp de lunes a sábado"
    ],
    ctaText: "Postular al Coaching 1 a 1",
    whatsappPreset: "Hola Jorge! Quiero postular al Coaching Online 1 a 1 del J-METHOD para que lleves mi entrenamiento y revise mis videos de técnica."
  },
  {
    id: "presencial-salta",
    name: "Coaching Presencial Salta",
    badge: "Salta Capital",
    price: "Consultar",
    billingPeriod: "según frecuencia semanal",
    description: "Entrená conmigo cara a cara en Salta Capital. Corrección postural en vivo, spots de seguridad y técnica milimétrica.",
    popular: false,
    features: [
      "Sesiones presenciales 1 a 1 o grupos ultra reducidos en Salta Capital",
      "Corrección biomecánica en tiempo real y asistencia manual de skills",
      "Uso de material especializado (parallettes, bandas, anillas, magnesio)",
      "Plan complementario para tus días fuera del horario presencial",
      "Acceso directo a la comunidad de atletas de Salta"
    ],
    ctaText: "Consultar Horarios en Salta",
    whatsappPreset: "Hola Jorge! Vivo en Salta Capital y quiero consultar por las clases presenciales del J-METHOD. ¿Qué días y horarios tenés disponibles?"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Marcos Villanueva",
    role: "Atleta Online (Córdoba)",
    result: "Handstand 35s sólido + Primer Muscle-Up",
    skill: "Handstand & Muscle-Up",
    quote: "Llevaba 1 año y medio intentando el handstand por mi cuenta y siempre me caía por la banana back. Con las correcciones en video de Jorge entendí en 3 semanas la colocación de la pelvis y el empuje de dedos. Ahora lo clavo en cualquier lado.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    timeframe: "8 Semanas de Coaching"
  },
  {
    name: "Facundo Romero",
    role: "Entrenamiento Presencial (Salta Capital)",
    result: "Straddle Front Lever + Recomposición",
    skill: "Front Lever",
    quote: "Tener a Jorge corrigiéndome en vivo en Salta fue el cambio total. No solo desbloqueé el Front Lever sin molestias en codos, sino que gané una densidad en la espalda que jamás logré en el gimnasio común. Es un crack explicando.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    timeframe: "3 Meses Presencial"
  },
  {
    name: "Lucas Benítez",
    role: "Atleta Online (Buenos Aires)",
    result: "+20kg en Dominadas + Muscle-Up Limpio",
    skill: "Fuerza y Muscle-Up",
    quote: "La atención personalizada de Jorge por WhatsApp no tiene comparación. Le mandaba mis series y me marcaba exactamente el grado del codo donde perdía potencia. El J-METHOD es directo al grano sin humo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    timeframe: "10 Semanas Online"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿Necesito experiencia previa para sumarme al J-METHOD?",
    answer: "No, para nada. El método está diseñado tanto para personas que no hacen ni una dominada como para atletas intermedios estancados. Cada plan se programa respetando tus palancas y fuerza inicial para que avances con total seguridad."
  },
  {
    question: "¿Cómo funciona la corrección técnica si estoy lejos o entreno online?",
    answer: "Es súper simple y ágil: en tus días de entrenamiento te grabás con tu celular en 1 o 2 series clave y me las enviás por WhatsApp. Yo analizo tu ángulo, rango de movimiento y postura, y te devuelvo un feedback detallado en audio o video con las indicaciones exactas."
  },
  {
    question: "¿Qué equipamiento necesito para entrenar?",
    answer: "Podés entrenar en un parque de calistenia, en un gimnasio tradicional o incluso en tu casa si tenés una barra fija o un par de anillas. El programa se adapta al 100% al lugar y material que tengas a disposición."
  },
  {
    question: "¿Cómo y cuándo se abonan los planes?",
    answer: "Si estás en Argentina podés abonar mediante transferencia bancaria o Mercado Pago. Para atletas del exterior de cualquier país aceptamos pagos seguros mediante PayPal o Stripe en USD."
  },
  {
    question: "¿Las clases presenciales en Salta Capital en qué zona se realizan?",
    answer: "Las sesiones presenciales en Salta Capital se coordinan en puntos de entrenamiento y parques equipados de la ciudad. Escribime por WhatsApp para pasarte las ubicaciones exactas y disponibilidad horaria de la semana."
  },
  {
    question: "¿En cuánto tiempo veré mis primeros resultados en las skills?",
    answer: "La mayoría de nuestros atletas experimentan un salto brutal en fuerza y técnica en las primeras 3 a 4 semanas al eliminar compensaciones ineficientes. Los desbloqueos consolidados de skills suelen darse entre las 6 y 12 semanas siguiendo el plan con constancia."
  }
];
