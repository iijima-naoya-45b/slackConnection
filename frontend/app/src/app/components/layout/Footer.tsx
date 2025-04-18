"use client";
/**
 * @file Footer.tsx
 * @description フッターコンポーネント
 * @component Footer
 */

import React from "react";
import Link from "next/link";

async function createPost() {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Sample Post",
        content: "This is a sample post content.",
      }),
    });

    if (response.ok) {
      const post = await response.json();
      console.log("Post created:", post);
    } else {
      console.error("Failed to create post:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

type FooterProps = {};

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
      <button onClick={createPost}>Create Post</button>
    </footer>
  );
};
