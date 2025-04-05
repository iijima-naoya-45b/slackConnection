/**
 * @file Features.tsx
 * @description 機能紹介セクションコンポーネント
 * @component Features
 */

import type { ComponentType } from "react";
import { FeatureCard } from "./FeatureCard";
import { features } from "./featureData";

type FeaturesProps = {};

export const Features: ComponentType<FeaturesProps> = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-lg py-3">
          主な機能
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
