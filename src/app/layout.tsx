import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import Starfield from "@/components/ui/Starfield";
import WorldDotsDefs from "@/components/ui/WorldDotsDefs";
import { siteConfig } from "@/data/site";

const title = "第1回 模擬防災国連 | MWCDRR 2027 TOKYO";
const description =
  "2027年春、東京で開催予定の第1回模擬防災国連。各国代表として防災・災害リスク削減・国際協力について議論する、若者向けシミュレーション型国際会議です。";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | MWCDRR",
  },
  description,
  keywords: ["模擬防災国連", "MWCDRR", "模擬国連", "防災", "災害リスク削減", "国際会議", "中高生", "大学生", "JYRAC"],
  authors: [{ name: siteConfig.organizer, url: siteConfig.organizerUrl }],
  creator: siteConfig.organizer,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: "MWCDRR",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MWCDRR / Model World Conference on Disaster Risk Reduction — 2027 Spring, Tokyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "96x96" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05030C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&family=Noto+Sans+JP:wght@300;400;500;700&family=Zen+Kaku+Gothic+New:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* JavaScript が無効な環境でも本文が読めるようにする */}
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-soft focus:px-5 focus:py-2 focus:font-display focus:text-sm focus:text-ink"
        >
          本文へスキップ
        </a>
        <div aria-hidden className="cosmos-backdrop" />
        <Starfield />
        <WorldDotsDefs />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
