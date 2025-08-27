import { IBenefit } from '@/types';
export const features: IBenefit[] = [
  {
    title: '目的起点の設計',
    description:
      'お客様のビジネス目標を明確にし、成果に直結するLP設計を行います。見た目だけでなく、確実に問い合わせが増える構造を作り上げます。',
    bullets: [
      {
        title: 'ターゲット分析',
        description:
          'お客様の理想顧客を徹底分析し、響くメッセージを設計します。',
        iconName: 'target',
      },
      {
        title: 'CVR最適化',
        description:
          'コンバージョン率向上のための導線設計とCTA配置を行います。',
        iconName: 'trending-up',
      },
      {
        title: '競合差別化',
        description:
          '競合他社との差別化ポイントを明確にし、独自性を訴求します。',
        iconName: 'bar-chart',
      },
    ],
    imageSrc: '/images/features/strategy-meeting.webp',
  },
  {
    title: '更新が簡単',
    description:
      '専門知識がなくても安心。直感的な管理画面で、お客様ご自身で簡単にコンテンツを更新できるシステムを構築します。',
    bullets: [
      {
        title: 'ノーコード編集',
        description:
          'プログラミング知識不要で、文章や画像を簡単に更新できます。',
        iconName: 'edit',
      },
      {
        title: 'レスポンシブ対応',
        description:
          'PCもスマホも自動で最適表示。デバイスを選ばず美しく表示されます。',
        iconName: 'monitor',
      },
      {
        title: '運用サポート',
        description:
          '更新方法のレクチャーから継続的なサポートまで万全の体制です。',
        iconName: 'settings',
      },
    ],
    imageSrc: '/images/features/workspace-laptop.webp',
  },
  {
    title: '計測と改善',
    description:
      'データに基づく継続的な改善で、成果を最大化。アクセス解析から改善提案まで、数字で見える化された運用をご提供します。',
    bullets: [
      {
        title: '詳細レポート',
        description:
          'アクセス数、問い合わせ率など重要指標を分かりやすくレポート。',
        iconName: 'bar-chart',
      },
      {
        title: 'A/Bテスト',
        description: '複数パターンの効果測定で、より高い成果を追求します。',
        iconName: 'trending-up',
      },
      {
        title: '改善提案',
        description: 'データ分析結果に基づく具体的な改善案を定期的にご提案。',
        iconName: 'zap',
      },
    ],
    imageSrc: '/images/features/data-analytics.webp',
  },
];
