/**
 * @file layout.tsx
 * @description ルートレイアウトコンポーネント
 * @component RootLayout
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SlackConnection",
  description:
    "Slackとシームレスに連携し、チームのコミュニケーションを効率化します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
