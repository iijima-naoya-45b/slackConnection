/**
 * @file featureData.ts
 * @description 機能データの定義
 */

export type FeatureData = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  priority?: boolean;
};

export const features: FeatureData[] = [
  {
    imageSrc: "https://placehold.jp/150x150.png",
    imageAlt: "Slack連携イメージ",
    title: "Slack連携",
    description: "Slackとシームレスに連携し、チャンネルやメッセージを簡単に管理できます。",
    features: [
      "チャンネル一覧の表示",
      "メッセージの送受信",
      "リアルタイム通知",
      "ファイル共有",
    ],
    priority: true,
  },
  {
    imageSrc: "https://placehold.jp/150x150.png",
    imageAlt: "メッセージ管理イメージ",
    title: "メッセージ管理",
    description: "メッセージを効率的に管理し、重要な情報を見逃しません。",
    features: [
      "メッセージの検索",
      "スレッド管理",
      "ブックマーク機能",
      "メンション管理",
    ],
  },
  {
    imageSrc: "https://placehold.jp/150x150.png",
    imageAlt: "チームコラボレーションイメージ",
    title: "チームコラボレーション",
    description: "チームメンバーと効率的にコミュニケーションを取り、プロジェクトを円滑に進めます。",
    features: [
      "チームチャンネル管理",
      "タスク管理",
      "カレンダー連携",
      "ファイル共有",
    ],
  },
  {
    imageSrc: "https://placehold.jp/150x150.png",
    imageAlt: "カスタマイズ設定イメージ",
    title: "カスタマイズ設定",
    description: "あなたのニーズに合わせて、表示や通知をカスタマイズできます。",
    features: [
      "テーマカスタマイズ",
      "通知設定",
      "ショートカット設定",
      "表示項目の調整",
    ],
  },
  {
    imageSrc: "https://placehold.jp/150x150.png",
    imageAlt: "セキュリティイメージ",
    title: "セキュリティ",
    description: "企業レベルのセキュリティで、データを安全に保護します。",
    features: [
      "暗号化通信",
      "アクセス制御",
      "監査ログ",
      "バックアップ",
    ],
  },
  {
    imageSrc: "https://placehold.jp/150x150.png",
    imageAlt: "分析・レポートイメージ",
    title: "分析・レポート",
    description: "コミュニケーションの分析とレポートで、チームの生産性を向上させます。",
    features: [
      "アクティビティ分析",
      "レスポンス時間分析",
      "カスタムレポート",
      "データエクスポート",
    ],
  },
];