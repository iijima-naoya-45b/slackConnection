/**
 * @file GlassCard.tsx
 * @description ガラスモーフィズムカードコンポーネント
 * @component GlassCard
 */

import type { ComponentType, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export const GlassCard: ComponentType<GlassCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 
        transition-all duration-300 ease-in-out
        hover:bg-white/20 hover:shadow-xl hover:border-white/30
        hover:scale-[1.02] hover:backdrop-blur-lg
        ${className}`}
    >
      {children}
    </div>
  );
};
