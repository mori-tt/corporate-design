import { Metadata } from "next";
import ServiceWrapper from "./ServiceWrapper";

// 静的生成設定
export const dynamic = "force-static";

// サービスカテゴリのリスト
const serviceCategories = ["web", "branding", "ui", "graphic", "motion"];

// サービス名とタイトルの対応
const serviceTitles: Record<string, string> = {
  web: "Webデザイン",
  branding: "ブランディング",
  ui: "UI/UXデザイン",
  graphic: "グラフィックデザイン",
  motion: "モーションデザイン",
};

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    category,
  }));
}

// メタデータ生成
export async function generateMetadata(
  props: {
    params: Promise<{ category: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const category = params.category;

  // 有効なカテゴリかチェック
  if (!serviceCategories.includes(category)) {
    return {
      title: "サービスが見つかりません | DESIGN STUDIO",
      description: "お探しのサービスは存在しません。",
    };
  }

  return {
    title: `${serviceTitles[category]} | DESIGN STUDIO`,
    description: `DESIGN STUDIOの${serviceTitles[category]}サービスについてご紹介します。`,
  };
}

// ページコンポーネント - 別コンポーネントに委譲
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <ServiceWrapper category={category} />;
}
