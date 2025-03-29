import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import {
  generateCategoryParams,
  generateImageParams,
  generateSpecialFileParams,
  isImageRequest,
} from "@/components/staticPageHelpers";

// 静的生成設定
export const dynamic = "force-static";
export const revalidate = false;

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

// 画像パターンの定義
const imagePatterns = [
  ".jpg", // メイン画像と同様のパターンを使用
];

// 特別なファイル（SVGなど）
const specialFiles = ["logo.svg"];

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  // カテゴリページのパラメータ
  const categoryParams = generateCategoryParams(serviceCategories);

  // 画像パスのパラメータ
  const imageParams = generateImageParams(serviceCategories, imagePatterns);

  // 特別なファイル用のパラメータ
  const specialFileParams = generateSpecialFileParams(specialFiles);

  return [...categoryParams, ...imageParams, ...specialFileParams];
}

// メタデータ生成
export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const category = params.category;

  // 画像リクエストの場合はデフォルトのメタデータを返す
  if (isImageRequest(category)) {
    return {
      title: "DESIGN STUDIO",
      description: "DESIGN STUDIOのサービス",
    };
  }

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

// ページコンポーネント
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // 画像リクエストの場合は何も返さない
  if (isImageRequest(category)) {
    return null;
  }

  // 有効なカテゴリかチェック
  if (!serviceCategories.includes(category)) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
