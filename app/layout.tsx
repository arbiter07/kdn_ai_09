import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한전KDN ESG 이야기",
  description: "한전KDN ESG 카드뉴스와 영상 프로젝트"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
