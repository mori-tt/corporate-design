import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import {
  generateAllParams,
  isImageRequest,
} from "@/components/helpers/pageHelpers";
import {
  validCategories,
  isValidWorkCategory,
  categoryTitles,
} from "@/data/works";

// 静的生成の設定
export const dynamic = "force-static";
export const revalidate = false;

// 静的パス生成
export async function generateStaticParams() {
  return generateAllParams({
    categories: validCategories,
    imagePatterns: ["opengraph-image", "twitter-image", "icon"],
    specialFiles: ["not-found"],
  });
}

// メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 有効なカテゴリの場合はメタデータを返す
  if (isValidWorkCategory(category)) {
    return {
      title: `${categoryTitles[category] || category} | Corporate Design`,
      description: `${
        categoryTitles[category] || category
      }に関する実績とプロジェクト事例をご紹介します。`,
    };
  }

  // 特殊ファイル（not-found等）の場合もメタデータを返す
  if (category === "not-found") {
    return {
      title: "Not Found | Corporate Design",
      description: "ページが見つかりませんでした。",
    };
  }

  // 無効なカテゴリの場合はデフォルトを返す
  return {
    title: "Works | Corporate Design",
    description: "私たちの実績とプロジェクト事例をご紹介します。",
  };
}

// ページコンポーネント
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合は空のdivを返す
  if (isImageRequest(category)) {
    return <div />;
  }

  // カテゴリが有効な場合はCategoryPageを表示
  if (isValidWorkCategory(category)) {
    return <CategoryPage category={category} />;
  }

  // それ以外の場合は404ページを表示
  return notFound();
}
