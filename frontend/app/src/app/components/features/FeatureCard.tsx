/**
 * @file FeatureCard.tsx
 * @description 機能カードコンポーネント
 * @component FeatureCard
 */

import type { ComponentType } from "react";
import { GlassCard } from "../common/GlassCard";
import Image from "next/image";

type FeatureCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  priority?: boolean;
};

export const FeatureCard: ComponentType<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  features,
  priority = false,
}) => {
  return (
    <GlassCard>
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
        {title}
      </h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </GlassCard>
  );
};
