/**
 * 静的ページ生成のためのヘルパーユーティリティ
 */

// パラメータの型を定義
export type CategoryParam = {
  category: string;
};

/**
 * カテゴリパラメータを生成する
 * @param categories 対象のカテゴリリスト
 * @returns カテゴリページのパラメータ配列
 */
export function generateCategoryParams(categories: string[]): CategoryParam[] {
  return categories.map((category) => ({
    category,
  }));
}

/**
 * 画像パスのパラメータを生成する
 * @param categories 対象のカテゴリリスト
 * @param patterns 画像パターンのリスト（例: [".jpg", "-hero.jpg"]）
 * @returns 画像パスのパラメータ配列
 */
export function generateImageParams(
  categories: string[],
  patterns: string[]
): CategoryParam[] {
  const imageParams: CategoryParam[] = [];
  categories.forEach((category) => {
    patterns.forEach((pattern) => {
      imageParams.push({
        category: `${category}${pattern}`,
      });
    });
  });
  return imageParams;
}

/**
 * 特別なファイルのパラメータを生成する
 * @param files 対象のファイル名リスト（例: ["logo.svg"]）
 * @returns 特別なファイルのパラメータ配列
 */
export function generateSpecialFileParams(files: string[]): CategoryParam[] {
  return files.map((file) => ({
    category: file,
  }));
}

/**
 * 画像リクエストかどうかを判定する
 * @param path リクエストパス
 * @returns 画像リクエストならtrue
 */
export function isImageRequest(path: string): boolean {
  return (
    path.endsWith(".jpg") ||
    path.endsWith(".jpeg") ||
    path.endsWith(".png") ||
    path.endsWith(".svg") ||
    path.endsWith(".gif") ||
    path.endsWith(".webp")
  );
}
