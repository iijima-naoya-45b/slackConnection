/**
 * @file Footer.tsx
 * @description フッターコンポーネント
 * @component Footer
 */

import type { ComponentType } from "react";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

export const Footer: ComponentType<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-gray-900 text-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-xl font-bold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-gray-300">
                  機能一覧
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-300">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h3 className="text-xl font-bold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-gray-300">
                  利用ガイド
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-300">
                  サポートセンター
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300 mb-4">ご質問やご相談はこちらから</p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
