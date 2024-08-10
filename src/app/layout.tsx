import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김종한의 기술 블로그",
  description: "김종한의 기술 블로그입니다. 주로 프론트엔드 기술을 다룹니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
