import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "JupJup",
  description: "찍고, 줍고, 즐기는 나만의 영어 단어장",
  icons: {
    icon: "/jupjup_logo.jpg", // 탭에 뜨는 아이콘(파비콘) 설정
  },
};

export default function RootLayout({ children } : { children: ReactNode}) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header/>

        <main className="flex flex-1 px-4 sm:px-6 md:px-8 bg-[#FAFAFA] rounded-2xl overflow-hidden text-gray-800 justify-center items-center max-w-full max-h-full">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
