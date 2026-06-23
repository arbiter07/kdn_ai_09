import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9조 ESG 카드뉴스",
  description: "9조 ESG 프로젝트 준비 페이지"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

