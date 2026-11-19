export type SkillId = 'planche' | 'front-lever' | 'handstand' | 'muscle-up';
export type SkillLevelId = 'base' | 'principiante' | 'intermedio' | 'avanzado';
export type SupportMode = 'autonomy' | 'review';
export type TierId = 'individual' | 'duo' | 'complete';

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
}

export interface SkillDefinition {
  id: SkillId;
  name: string;
  shortDesc: string;
  image: string;
  objectPosition: string;
  levels: {
    id: Exclude<SkillLevelId, 'base'>;
    label: string;
    index: string;
    entryTest: string;
    focus: string;
  }[];
}

export interface TierDefinition {
  id: TierId;
  name: string;
  label: string;
  count: number;
  priceArs: string;
  priceUsd: string;
  savingNote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
