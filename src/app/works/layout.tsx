import { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績 | DESIGN STUDIO",
  description:
    "DESIGN STUDIOの実績紹介。様々な業種・業界のクライアント様と協力し、ビジネスの成長と成功を支援してきた実績をご紹介します。",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
