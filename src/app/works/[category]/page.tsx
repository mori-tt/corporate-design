import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import {
  generateAllParams,
  isImageRequest,
} from "@/components/staticPageHelpers";
import {
  validCategories,
  isValidWorkCategory,
  categoryTitles,
  works,
} from "@/data/works";

// 静的生成の設定
export const dynamic = "force-static";
export const revalidate = false;

// パラメータの型
type PageProps = {
  params: Promise<{ category: string }>;
};

// 静的パス生成
export function generateStaticParams() {
  // 作品のslug一覧を取得
  const slugs = Object.keys(works);

  // すべての有効なカテゴリとslugをパラメータとして生成
  return generateAllParams({
    categories: [...validCategories, ...slugs],
    imagePatterns: ["opengraph-image", "twitter-image", "icon"],
    specialFiles: ["not-found"],
  });
}

// メタデータ生成
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // スラッグがworksオブジェクトに存在する場合、その作品のメタデータを返す
  if (works[category]) {
    const work = works[category];
    return {
      title: `${work.title} | Corporate Design`,
      description: work.description,
    };
  }

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
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合は空のdivを返す
  if (isImageRequest(category)) {
    return <div />;
  }

  // スラッグがworksオブジェクトに存在する場合またはカテゴリが有効な場合はCategoryPageを表示
  if (works[category] || isValidWorkCategory(category)) {
    return <CategoryPage category={category} />;
  }

  // それ以外の場合は404ページを表示
  return notFound();
}
