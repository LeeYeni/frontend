import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "영어 학습 도우미",
    template: "영어 학습 도우미"
  },
  description: "LLM과 영어 단어를 쉽게 암기하는 공간"
};

export default function RootLayout({ children } : { children: ReactNode}) {
  return (
    <html lang="ko">
      <body className="h-screen flex flex-col">
        <Header/>

        <main className="flex flex-1 px-4 sm:px-6 md:px-8 bg-[#FAFAFA] justify-center items-center max-w-full max-h-full">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
