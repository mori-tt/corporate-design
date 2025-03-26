import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DESIGN STUDIO | モダンでクリエイティブなデザイン会社",
  description:
    "最先端のデザインで企業の成長をサポートするデザイン会社。Webデザイン、UIデザイン、ブランディングなど幅広いサービスを提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
