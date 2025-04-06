/**
 * @file Header.tsx
 * @description ヘッダーコンポーネント
 * @component Header
 */

"use client";
import Link from "next/link";
import type { ComponentType } from "react";

import Login from "../common/Login";
import Logout from "../common/Logout";
import { useSession } from "next-auth/react";

type HeaderProps = {
  // 将来的にpropsが必要になった場合に追加
};

export const Header: ComponentType<HeaderProps> = () => {
  const { data: session, status } = useSession();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            {status === "authenticated" ? (
              <div>
                <p>セッションの期限：{session.expires}</p>
                <p>ようこそ、{session.user?.name}さん</p>
                <img
                  src={session.user?.image ?? ``}
                  alt=""
                  style={{ borderRadius: "50px" }}
                />
                <div>
                  <Logout />
                </div>
              </div>
            ) : (
              <Login />
            )}
          </div>
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-purple-200 transition-colors"
          >
            SlackConnection
          </Link>
          <nav className="flex space-x-4">
            <Link
              href="/auth/signin"
              className="text-white hover:text-purple-200 transition-colors"
            ></Link>

            <Link
              href="/auth/signin"
              className="text-white hover:text-purple-200 transition-colors"
            >
              新規作成
            </Link>
            <Link
              href="/login"
              className="text-white hover:text-purple-200 transition-colors"
            >
              ログイン
            </Link>
            <Link
              href="/features"
              className="text-white hover:text-purple-200 transition-colors"
            >
              機能
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-purple-200 transition-colors"
            >
              料金
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-purple-200 transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
