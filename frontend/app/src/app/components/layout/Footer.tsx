/**
 * @file Footer.tsx
 * @description フッターコンポーネント
 * @component Footer
 */

import React from "react";
import Link from "next/link";

type FooterProps = {
  // 将来的にpropsが必要になった場合に追加
};

export const Footer: React.ComponentType<FooterProps> = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              SlackConnection
            </h3>
            <p className="text-gray-600">
              Slackとシームレスに連携し、チームのコミュニケーションを効率化します。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-gray-900"
                >
                  機能
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  料金
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">その他</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-gray-900"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-600 hover:text-gray-900"
                >
                  サイトマップ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} SlackConnection. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
