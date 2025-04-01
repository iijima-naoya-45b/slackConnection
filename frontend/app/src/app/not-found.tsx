/**
 * @file not-found.tsx
 * @description カスタム404ページ
 */

import Link from "next/link";
import { GlassCard } from "./components/common/GlassCard";
import { PageContainer } from "./components/common/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center px-4">
        <GlassCard className="max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
          <Link
            href="/"
            className="inline-block bg-white/30 backdrop-blur-xl px-6 py-3 rounded-lg text-gray-800 hover:bg-white/40 transition-all duration-300 drop-shadow-sm"
          >
            トップページに戻る
          </Link>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
