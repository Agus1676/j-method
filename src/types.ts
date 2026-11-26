export type SkillId = 'planche' | 'front-lever' | 'handstand' | 'muscle-up';
export type SkillLevelId = 'base' | 'principiante' | 'intermedio' | 'avanzado';
export type BlockerId = 'fuerza' | 'tecnica' | 'programacion' | 'estancamiento';
export type ModalityId = 'online' | 'intensivo';

export interface CoachProfile {
  name: string;
  brand: string;
  tagline: string;
  location: string;
  city: string;
  country: string;
  email: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappUrl: string;
  instagram: string;
  instagramUrl: string;
  tiktok: string;
  tiktokUrl: string;
  youtube: string;
  youtubeUrl: string;
  image: string;
  heroImage1: string;
  heroImage2: string;
  bioP1: string;
  bioP2: string;
}

export interface SkillDefinition {
  id: SkillId;
  name: string;
  shortDesc: string;
  image: string;
  objectPosition: string;
  basePrescription: string;
  levels: {
    id: Exclude<SkillLevelId, 'base'>;
    label: string;
    index: string;
    entryTest: string;
    focus: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  coach: CoachProfile;
  hero: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    description: string;
    guaranteeText: string;
    athleteQuoteTitle: string;
    athleteQuoteSubtitle: string;
  };
  metrics: {
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
  };
  coachingFeatures: {
    heading: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  skills: SkillDefinition[];
  faq: FaqItem[];
}
