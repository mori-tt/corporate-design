import { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス | DESIGN STUDIO",
  description:
    "DESIGN STUDIOが提供するサービスのご紹介。Webデザイン、UIデザイン、ブランディング、マーケティングなど幅広いデザインサービスで企業の成長をサポートします。",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
