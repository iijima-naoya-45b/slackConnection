/**
 * @file PageContainer.tsx
 * @description ページコンテナコンポーネント
 * @component PageContainer
 */

import type { ComponentType, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer: ComponentType<PageContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className="min-h-screen relative">
      {/* メインのグラデーション背景 - より鮮やかな色に変更 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500" />

      {/* 装飾的な要素 - 光の効果を強調 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0)_100%)] opacity-70" />

      {/* コンテンツ */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};
