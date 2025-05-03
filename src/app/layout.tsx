import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테크 PM 커넥트",
  description: "기술 기반 PM으로의 전환, 지금이 적기입니다",
  openGraph: {
    title: "테크 PM 커넥트",
    description: "기술 기반 PM으로의 전환, 지금이 적기입니다",
    url: "https://techpmconnect.netlify.app/",
    siteName: "테크 PM 커넥트",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "테크 PM 커넥트",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "테크 PM 커넥트",
    description: "기술 기반 PM으로의 전환, 지금이 적기입니다",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
