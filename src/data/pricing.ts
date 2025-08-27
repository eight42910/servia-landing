import { IPricing } from '@/types';

export const tiers: IPricing[] = [
  {
    name: 'Starter',
    price: '3万円〜',
    features: [
      'シンプルなLP制作',
      '基本的なレスポンシブ対応',
      'お問い合わせフォーム',
      'アクセス解析設定',
      'メールサポート',
    ],
  },
  {
    name: 'Standard',
    price: '5万円〜',
    features: [
      'プロフェッショナルLP制作',
      '高度なデザインカスタマイズ',
      'A/Bテスト機能',
      'SEO最適化',
      'GA4詳細レポート',
      '電話・メールサポート',
    ],
  },
  {
    name: 'Pro',
    price: '要見積',
    features: [
      'フルカスタムLP制作',
      '複数ページ対応',
      'CRM連携',
      '高度な計測・分析',
      '継続的な運用サポート',
      '専属担当者によるサポート',
    ],
  },
];
