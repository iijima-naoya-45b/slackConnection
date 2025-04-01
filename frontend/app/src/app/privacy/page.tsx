/**
 * @file page.tsx
 * @description プライバシーポリシーページコンポーネント
 * @component PrivacyPolicy
 */

import React from "react";
import { GlassCard } from "../components/common/GlassCard";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden py-12">
      {/* 背景の装飾的な要素 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)] opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <GlassCard className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
            プライバシーポリシー
          </h1>
          <p className="text-gray-600 text-center mb-8">
            最終更新日: {new Date().toLocaleDateString("ja-JP")}
          </p>
        </GlassCard>

        <div className="space-y-8">
          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
              1. 個人情報の収集について
            </h2>
            <p className="text-gray-700 mb-4">
              当社は、サービスの提供にあたり、以下の個人情報を収集する場合があります：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>その他、サービス利用に必要な情報</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
              2. 個人情報の利用目的
            </h2>
            <p className="text-gray-700 mb-4">
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>サービスの提供及び運営</li>
              <li>お問い合わせ対応</li>
              <li>サービスの改善及び新機能の開発</li>
              <li>マーケティング活動（ユーザーの同意がある場合）</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
              3. 個人情報の管理
            </h2>
            <p className="text-gray-700">
              当社は、個人情報の漏洩、滅失、き損の防止その他個人情報の安全管理のために、セキュリティ対策を実施し、個人情報の適切な管理に努めます。
            </p>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
              4. 個人情報の第三者提供
            </h2>
            <p className="text-gray-700">
              当社は、法令に基づく場合を除き、事前の同意なく第三者に個人情報を提供することはありません。
            </p>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
              5. お問い合わせ
            </h2>
            <p className="text-gray-700">
              プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
            </p>
            <p className="text-gray-700 mt-2">Email: privacy@example.com</p>
          </GlassCard>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-white/30 backdrop-blur-xl px-6 py-3 rounded-lg text-gray-800 hover:bg-white/40 transition-all duration-300 drop-shadow-sm"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
