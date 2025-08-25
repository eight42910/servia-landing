export interface IMenuItem {
  text: string;
  url: string;
}

export interface IBenefit {
  title: string;
  description: string;
  imageSrc: string;
  bullets: IBenefitBullet[];
}

export interface IBenefitBullet {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface IPricing {
  name: string;
  price: number | string;
  features: string[];
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface ITestimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export interface IStats {
  title: string;
  icon: JSX.Element;
  description: string;
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}

// === Servia LP 専用型定義 ===

// Hero セクション
export interface IHero {
  heading: string;
  subheading: string;
  ctaPrimary: {
    text: string;
    url: string;
  };
  ctaSecondary: {
    text: string;
    url: string;
  };
  heroImageSrc: string;
}

// Pain（課題共感）セクション
export interface IPain {
  title: string;
  description: string;
  icon: JSX.Element;
}

// Features セクション（既存 IBenefit を拡張）
export interface IFeature {
  title: string;
  description: string;
  icon: JSX.Element;
  imageSrc?: string;
}

// Proof（実績/声）セクション（既存 ITestimonial を拡張）
export interface IProof {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  rating?: number;
}

// 問い合わせフォーム
export interface IContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot?: string; // スパム対策用
}

// CTA ボタン
export interface ICTA {
  text: string;
  url: string;
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: JSX.Element;
}

// Final CTA セクション
export interface IFinalCTA {
  title: string;
  description: string;
  businessHours: string;
  responseTime: string;
  cta: ICTA;
}

// GA4 イベント
export interface IGA4Event {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
