"use client";

/**
 * NextDoc
 * @file error.tsx
 * @description 認証エラーページ
 */

import React from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">認証エラー</h1>
      <p className="text-lg mb-4">エラーが発生しました</p>
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ホームに戻る
      </button>
    </div>
  );
};

export default ErrorPage;
