/**
 * @file page.tsx
 * @description メインページコンポーネント
 * @component Home
 */

import React from "react";
import { Header } from "./components/layout/Header";
import { Features } from "./components/features/Features";
import { Footer } from "./components/layout/Footer";
import { PageContainer } from "./components/common/PageContainer";

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <Features />
      <Footer />
    </PageContainer>
  );
};

export default Home;
