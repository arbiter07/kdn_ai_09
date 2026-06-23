import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "9조 ESG 카드뉴스",
  description: "한전KDN 연수 9조 ESG 프로젝트"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
