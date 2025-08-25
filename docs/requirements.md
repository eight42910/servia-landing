# 要件定義 v1.0 - Servia 汎用サービス LP

**作成日**: 2025 年 8 月 25 日  
**対象プロジェクト**: servia-landing  
**技術スタック**: Next.js 14 (App Router) / TypeScript / Tailwind CSS / Vercel

---

## 0. プロジェクト概要

### 目的

小規模事業者向けに「無料相談/問い合わせ」を最短で獲得する LP

### KPI

- CVR（問い合わせ/無料相談ボタンのクリック率）
- スクロール完読率

### デザインテーマ

- Unsplash などのフリー素材や抽象イラストを利用
- 写真がなくても成立するクリーンデザイン
- モダンで信頼感のある UI

---

## 1. ターゲット・想定ペルソナ

### 対象業種

- 個人/小規模事業（教室、士業、サロン、店舗、コンサル）

### 抱える課題

- 集客が安定しない
- サイト更新が止まっている
- 何を改善すべきか不明

### 求める価値

- 短納期
- 運用の簡単さ
- 成果が測れること（クリック計測）

---

## 2. ユーザーフロー

```
広告/検索/SNS → Hero（価値訴求） → 課題共感 → 特徴 → 実績/声 → 料金 → FAQ → 最終CTA → 送信完了
```

---

## 3. 情報設計（セクション構成）

### メイン LP (`/`)

1. **Hero**: 見出し、補足文、CTA（Primary: 無料相談、Secondary: 料金）

   - Unsplash の Hero 画像（ビジネス会議 / チーム作業 / 抽象オフィス）

2. **Pain（課題共感）**: 3 つの課題提示

3. **Features（特徴）**: 3〜6 カード（アイコン+見出し+説明）

4. **Proof（実績/声）**: 3 カード（仮の声 + Unsplash 人物写真）

5. **Pricing（料金）**: 3 プラン（Starter/Standard/Pro）

6. **FAQ**: 5 項目

7. **Final CTA**: 無料相談誘導（営業時間/返信目安）

8. **Footer**: 会社情報/ポリシー/連絡先（ダミー）

### 問い合わせ (`/#contact`)

- 同一ページ内スクロール または `/contact`

---

## 4. コンテンツ要件（初期文言）

### Hero

- **見出し**: 「小さく始めて、確実に伸ばす。あなたの事業を前に。」
- **補足**: 「集客・運用・Web 改善をワンストップで。最短納期で、成果に直結する LP をご提供します。」

### 課題（例）

- 広告費をかけても問い合わせが増えない
- 更新が止まっている
- 優先度の判断が難しい

### 特徴（例）

- 目的起点の設計
- 更新が簡単
- 計測と改善
- 高速表示
- 安全運用

### 料金（例）

- **Starter**: 3 万円〜
- **Standard**: 5 万円〜
- **Pro**: 要見積

### FAQ（例）

- 素材なしでも可？
- WP 移行は可？
- 納期目安？

※ コピーは後で業種ごとに差し替え可能な"型"として記述。

---

## 5. 機能要件

### 問い合わせフォーム

- **バリデーション**: react-hook-form + zod
- **送信**: Formspree or `/api/contact` + Resend（メール通知）
- **スパム対策**: hidden honeypot、余裕あれば hCaptcha/Turnstile
- **完了 UI**: 成功メッセージ＋自動スクロール

### 計測

- **GA4 イベント**:
  - `cta_primary_click`
  - `cta_secondary_click`
  - `tel_click`
  - `line_click`
- **Vercel Web Analytics**有効化

### アクセシビリティ

- キーボード操作対応
- フォーカスリング
- alt 属性必須

---

## 6. 非機能要件

### パフォーマンス

- **Lighthouse**: 90+
- `next/image`で最適化
- Hero 画像は`priority`設定

### SEO

- `metadata`（title/desc/OGP）
- `next-sitemap`（sitemap.xml, robots.txt）
- 構造化データ（Organization/LocalBusiness）

### デプロイ

- Vercel（main push で自動デプロイ）

---

## 7. デザイン要件（デザイントークン）

### Colors

- **Primary**: `#2563EB`
- **Secondary**: `#7C3AED`
- **Accent**: `#F59E0B`
- **Neutral**: 900/600/100

### Typography

- **フォント**: Inter / Noto Sans JP
- **Hero**: Bold tracking-tight
- **本文**: Regular leading-relaxed

### Layout

- **コンテナ**: `max-w-7xl mx-auto px-6`
- **セクション**: `py-24`

### Components

- Button/Card/Accordion/Input/Textarea（shadcn/ui）

### 装飾

- `rounded-lg/xl`
- `shadow-card/elevate`
- `bg-gradient-to-b`

---

## 8. コンポーネント分割

```
src/components/
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   └── container.tsx
├── sections/
│   ├── hero.tsx
│   ├── pain.tsx
│   ├── features.tsx
│   ├── proof.tsx
│   ├── pricing-table.tsx
│   ├── faq.tsx
│   ├── final-cta.tsx
│   └── contact-form.tsx
└── common/
    ├── section-title.tsx
    └── icon.tsx
```

---

## 9. 受入基準（Definition of Done）

- [ ] Hero〜Final CTA まで表示、レスポンシブ良好
- [ ] 問い合わせフォーム送信・バリデーション正常動作
- [ ] GA4 イベント発火確認
- [ ] Lighthouse モバイルで 90 点以上
- [ ] metadata/OGP/sitemap/robots 設定済み
- [ ] Vercel 公開 URL で主要 CTA がタップしやすい
- [ ] README に使い方・拡張計画を記載

---

## 10. アウトオブスコープ

- 多言語化
- ブログ機能
- 会員機能
- 決済機能
- 外部 CRM 連携
- 凝ったアニメーション

---

## 11. バックログ（次段階候補）

- 構造化データの追加（LocalBusiness）
- スクロール深度/セクション可視イベントの計測
- CTA の AB テスト（位置/色/文言）
- レポート自動生成（週次メール）

---

## 12. 実装チケット

### 📋 Phase 1: 基盤整備

- [ ] **#001**: プロジェクト設定更新（package.json 名前変更、必要依存関係追加）
- [ ] **#002**: デザイントークン設定（Tailwind config 更新）
- [ ] **#003**: 型定義整備（types.ts 更新）

### 🎨 Phase 2: コンテンツ更新

- [ ] **#004**: Hero セクション文言・画像更新
- [ ] **#005**: Pain/課題共感セクション新規作成
- [ ] **#006**: Features 更新（既存 Benefits → Features）
- [ ] **#007**: Proof/実績セクション更新（既存 Testimonials 更新）
- [ ] **#008**: Pricing 更新（3 プラン構成）
- [ ] **#009**: FAQ 更新
- [ ] **#010**: Final CTA 追加

### ⚙️ Phase 3: 機能実装

- [ ] **#011**: 問い合わせフォーム実装（react-hook-form + zod）
- [ ] **#012**: GA4 イベント計測実装
- [ ] **#013**: SEO 設定（metadata, sitemap）
- [ ] **#014**: パフォーマンス最適化

### 🚀 Phase 4: デプロイ・検証

- [ ] **#015**: Vercel 設定・デプロイ
- [ ] **#016**: 受入テスト実施
- [ ] **#017**: README 更新

---

## 13. 開発指示テンプレート（Cursor 用）

### Hero 実装

```
目的：要件定義v1のHeroセクションを実装。
条件：
- /components/sections/hero.tsx を作成
- Containerを使い、左右2カラム（lg以上）
- 左：見出し/補足/CTA×2（primary/outline）
- 右：UnsplashのHero画像を next/image で表示
- Tailwindトークンを使用
- レスポンシブ（sm:1カラム, lg:2カラム）
```

### フォーム実装

```
目的：問い合わせフォームの実装。
条件：
- react-hook-form + zod
- name/email/message（必須）
- FormspreeにPOST、成功/失敗時にトースト表示
- hidden honeypotを設置
```

### GA4 イベント

```
目的：CTAクリックのイベントを実装。
条件：
- gtagをlayoutに注入（環境変数GA4_ID）
- '#cta-primary' クリックで 'cta_primary_click'
- '#cta-secondary' クリックで 'cta_secondary_click'
```

---

**次のステップ**: Hero 用の Unsplash 候補画像選定 → Phase 1 チケットから実装開始
