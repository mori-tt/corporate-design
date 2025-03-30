import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";
import { generateAllParams, isImageRequest } from "@/utils/staticPageHelpers";
import {
  services,
  isValidServiceCategory,
  ServiceCategory,
} from "@/data/services";
import { SITE_NAME } from "@/constants/site";
import {
  createDetailMetadata,
  createImageRequestMetadata,
} from "@/utils/metadata";

// 静的生成設定
export const dynamic = "force-static";
export const revalidate = false;

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  return generateAllParams({
    categories: Object.keys(services),
    imagePatterns: [".jpg"],
    specialFiles: ["logo.svg"],
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
    return createImageRequestMetadata(SITE_NAME);
  }

  // 有効なカテゴリかチェック
  if (!isValidServiceCategory(category)) {
    return createDetailMetadata(
      "サービスが見つかりません",
      "お探しのサービスは存在しません。",
      SITE_NAME
    );
  }

  return createDetailMetadata(
    services[category as ServiceCategory].title,
    `DESIGN STUDIOの${
      services[category as ServiceCategory].title
    }サービスについてご紹介します。`,
    SITE_NAME
  );
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
