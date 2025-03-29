import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import {
  generateCategoryParams,
  generateImageParams,
  isImageRequest,
} from "@/components/staticPageHelpers";

// 静的生成設定
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "実績 | DESIGN STUDIO",
  description: "DESIGN STUDIOの実績一覧をご覧いただけます。",
};

// プロジェクトIDとその画像パスの完全なリスト
const validCategories = [
  "web-design",
  "branding",
  "ui-ux",
  "graphic",
  "motion",
  "natural-food-branding",
  "green-app-ui",
  "able-corp-website",
  "urban-style-branding",
  "tech-innovation-website",
  "health-app-ux",
];

// プロジェクト詳細ページで使用する画像のパターン
const imagePatterns = [
  ".jpg", // メイン画像
  "-1.jpg", // ギャラリー画像1
  "-2.jpg", // ギャラリー画像2
  "-3.jpg", // ギャラリー画像3
];

// 静的生成のためのパラメータ
export async function generateStaticParams() {
  // カテゴリページのパラメータ
  const categoryParams = generateCategoryParams(validCategories);

  // 画像パスのパラメータ
  const imageParams = generateImageParams(validCategories, imagePatterns);

  return [...categoryParams, ...imageParams];
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // 画像リクエストの場合は404を返さない
  if (isImageRequest(category)) {
    return null;
  }

  // カテゴリが有効でない場合は404を返す
  if (!validCategories.includes(category)) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
