/**
 * @file page.tsx
 * @description フッター関連ページの動的ルーティング
 * @component FooterPage
 */

import type { ComponentType } from "react";
import { GlassCard } from "../components/common/GlassCard";
import { PageContainer } from "../components/common/PageContainer";
import Link from "next/link";

type FooterPageProps = {
  params: {
    footer: string;
  };
};

const FooterPage: ComponentType<FooterPageProps> = ({ params }) => {
  const { footer } = params;

  // ページコンテンツの定義
  const pageContents = {
    "privacy-policy": {
      title: "プライバシーポリシー",
      content: (
        <>
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
                1. はじめに
              </h2>
              <p className="text-gray-700">
                本プライバシーポリシーは、株式会社〇〇（以下「当社」）が提供するサービス（以下「本サービス」）における、ユーザーの個人情報の取り扱いについて定めるものです。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                2. 収集する情報
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、本サービスの提供にあたり、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>氏名、メールアドレス等の個人情報</li>
                <li>利用状況やアクセスログ</li>
                <li>お問い合わせ内容</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                3. 情報の利用目的
              </h2>
              <p className="text-gray-700">
                収集した情報は、以下の目的で利用されます：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                <li>本サービスの提供・改善</li>
                <li>ユーザーサポート</li>
                <li>新機能の開発</li>
                <li>セキュリティ対策</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                4. 情報の共有
              </h2>
              <p className="text-gray-700">
                当社は、法令に基づく場合を除き、事前の同意なく第三者と個人情報を共有することはありません。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                5. セキュリティ対策
              </h2>
              <p className="text-gray-700">
                当社は、個人情報の漏洩、滅失またはき損の防止その他個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                6. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-700">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本サービス上で公開された時点で効力を生じるものとします。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                7. お問い合わせ
              </h2>
              <p className="text-gray-700">
                本プライバシーポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください：
              </p>
              <p className="text-gray-700 mt-2">privacy@example.com</p>
            </GlassCard>
          </div>
        </>
      ),
    },
    "terms-of-service": {
      title: "利用規約",
      content: (
        <>
          <GlassCard className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
              利用規約
            </h1>
            <p className="text-gray-600 text-center mb-8">
              最終更新日: {new Date().toLocaleDateString("ja-JP")}
            </p>
          </GlassCard>

          <div className="space-y-8">
            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                1. はじめに
              </h2>
              <p className="text-gray-700 mb-4">
                本利用規約（以下「本規約」）は、株式会社〇〇（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
              </p>
              <p className="text-gray-700">
                本サービスを利用する際は、本規約に同意していただく必要があります。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                2. 定義
              </h2>
              <p className="text-gray-700 mb-4">
                本規約において使用する用語の定義は、以下の通りとします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  「ユーザー」とは、本サービスを利用する全ての方を指します
                </li>
                <li>
                  「コンテンツ」とは、本サービス上で提供される全ての情報を指します
                </li>
                <li>
                  「投稿」とは、ユーザーが本サービス上で行う全ての行為を指します
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                3. 利用規約の変更
              </h2>
              <p className="text-gray-700">
                当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。本規約の変更後、本サービスの利用を開始した場合には、変更後の本規約に同意したものとみなします。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                4. 禁止事項
              </h2>
              <p className="text-gray-700 mb-4">
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>
                  当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                </li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                5. 本サービスの提供の停止等
              </h2>
              <p className="text-gray-700">
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                <li>
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </li>
                <li>
                  地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                6. 利用制限および登録抹消
              </h2>
              <p className="text-gray-700">
                当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>
                  その他、当社が本サービスの利用を適当でないと判断した場合
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                7. 保証の否認および免責事項
              </h2>
              <p className="text-gray-700">
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                8. サービス内容の変更等
              </h2>
              <p className="text-gray-700">
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                9. 利用規約の解釈
              </h2>
              <p className="text-gray-700">
                本規約の解釈にあたっては、法の一般原則に従うものとします。本規約の一部が無効または執行不能と判断された場合でも、本規約の他の部分は有効に継続するものとします。
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                10. 準拠法・裁判管轄
              </h2>
              <p className="text-gray-700">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </GlassCard>
          </div>
        </>
      ),
    },
    sitemap: {
      title: "サイトマップ",
      content: (
        <>
          <GlassCard className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
              サイトマップ
            </h1>
          </GlassCard>

          <div className="space-y-8">
            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                メインページ
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    トップページ
                  </Link>
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                フッター関連
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    サイトマップ
                  </Link>
                </li>
              </ul>
            </GlassCard>
          </div>
        </>
      ),
    },
  };

  const pageContent = pageContents[footer as keyof typeof pageContents];

  if (!pageContent) {
    return (
      <PageContainer className="py-12">
        <div className="max-w-4xl mx-auto px-4 relative">
          <GlassCard>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
              404 - ページが見つかりません
            </h1>
            <p className="text-gray-700 text-center mb-8">
              お探しのページは存在しないか、移動または削除された可能性があります。
            </p>
            <p className="text-gray-700 text-center mb-8">
              または、まだ作成されていない可能性があります。
            </p>
            <div className="text-center">
              <Link
                href="/"
                className="inline-block bg-white/30 backdrop-blur-xl px-6 py-3 rounded-lg text-gray-800 hover:bg-white/40 transition-all duration-300 drop-shadow-sm"
              >
                トップページに戻る
              </Link>
            </div>
          </GlassCard>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="py-12">
      <div className="max-w-4xl mx-auto px-4 relative">
        {pageContent.content}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-white/30 backdrop-blur-xl px-6 py-3 rounded-lg text-gray-800 hover:bg-white/40 transition-all duration-300 drop-shadow-sm"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default FooterPage;
