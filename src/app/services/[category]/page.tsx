import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import {
  generateAllParams,
  isImageRequest,
} from "@/components/staticPageHelpers";
import {
  services,
  isValidServiceCategory,
  ServiceCategory,
} from "@/data/services";

// 静的生成設定
export const dynamic = "force-static";
export const revalidate = false;

// 画像パターンの定義
const imagePatterns = [".jpg"];
const specialFiles = ["logo.svg"];

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  return generateAllParams({
    categories: Object.keys(services),
    imagePatterns,
    specialFiles,
  });
}

// パラメータの型定義
type PageProps = {
  params: Promise<{ category: string }>;
};

// メタデータ生成
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合はデフォルトのメタデータを返す
  if (isImageRequest(category)) {
    return {
      title: "DESIGN STUDIO",
      description: "DESIGN STUDIOのサービス",
    };
  }

  // 有効なカテゴリかチェック
  if (!isValidServiceCategory(category)) {
    return {
      title: "サービスが見つかりません | DESIGN STUDIO",
      description: "お探しのサービスは存在しません。",
    };
  }

  return {
    title: `${services[category as ServiceCategory].title} | DESIGN STUDIO`,
    description: `DESIGN STUDIOの${
      services[category as ServiceCategory].title
    }サービスについてご紹介します。`,
  };
}

// ページコンポーネント
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  // 画像リクエストの場合は何も返さない
  if (isImageRequest(category)) {
    return null;
  }

  // 有効なカテゴリかチェック
  if (!isValidServiceCategory(category)) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
