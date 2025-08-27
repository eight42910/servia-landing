// Pain points data for Servia landing page

export interface IPainPoint {
  title: string;
  description: string;
  iconType: 'target' | 'clock' | 'alert';
}

export const painPoints: IPainPoint[] = [
  {
    title: '広告費をかけても問い合わせが増えない',
    description:
      'Google広告やSNS広告に投資しているのに、なかなか問い合わせに繋がらない。費用対効果が見えず、このまま続けるべきか悩んでいる。',
    iconType: 'target',
  },
  {
    title: 'サイト更新が止まっている',
    description:
      'ホームページを作ったものの、更新方法が分からない。情報が古いままで、お客様に不信感を与えているのではないかと心配。',
    iconType: 'clock',
  },
  {
    title: '何を改善すべきか分からない',
    description:
      'アクセス数は確認できるが、どこを改善すれば問い合わせが増えるのか判断できない。専門知識がなく、優先順位をつけられない。',
    iconType: 'alert',
  },
];
