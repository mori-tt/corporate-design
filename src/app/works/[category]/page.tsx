import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";

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

// パラメータの型を定義
type CategoryParam = {
  category: string;
};

// 静的生成のためのパラメータ
export function generateStaticParams() {
  // カテゴリページのパラメータ
  const categoryParams: CategoryParam[] = validCategories.map((category) => ({
    category,
  }));

  // 画像パスのパラメータ - すべてのプロジェクトのすべての画像パターン
  const imageParams: CategoryParam[] = [];
  validCategories.forEach((category) => {
    imagePatterns.forEach((pattern) => {
      imageParams.push({
        category: `${category}${pattern}`,
      });
    });
  });

  return [...categoryParams, ...imageParams];
}

type PageProps = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CategoryPageWrapper({ params }: PageProps) {
  // 画像リクエストの場合は404を返さない
  if (params.category.endsWith(".jpg")) {
    return null;
  }

  // カテゴリが有効でない場合は404を返す
  if (!validCategories.includes(params.category)) {
    notFound();
  }

  return <CategoryPage category={params.category} />;
}
