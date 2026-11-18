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

export interface SkillItem {
  id: string;
  name: string;
  level: string;
  tag: string;
  description: string;
  prerequisites: string[];
  stages: {
    stage: string;
    title: string;
    desc: string;
  }[];
  keyTip: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  price: string;
  billingPeriod: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  whatsappPreset: string;
}

export interface Testimonial {
  name: string;
  role: string;
  result: string;
  skill: string;
  quote: string;
  image: string;
  timeframe: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description?: string;
    icon?: string;
    value: string;
  }[];
}
