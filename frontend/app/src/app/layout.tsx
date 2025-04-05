import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import NextAuthProvider from "@/provider/NextAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xxxxxxx",
  description: "xxxxxxx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
