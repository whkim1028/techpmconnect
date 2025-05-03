import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테크 PM 커넥트 - 기술 기반 PM 커뮤니티",
  description:
    "기술 기반 PM을 지향하는 사람들이 모인 커뮤니티. 최신 IT 동향, 채용 정보, 역량진단, 네트워킹, 커리어 상담을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
