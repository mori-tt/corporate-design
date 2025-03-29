/**
 * ページ生成に関する共通ヘルパー関数
 */

// パラメータの型定義
export type CategoryParam = {
  category: string;
};

// 設定オプションの型
export interface PageConfig {
  categories: string[];
  imagePatterns: string[];
  specialFiles?: string[];
}

/**
 * すべてのパラメータを生成する
 * @param config ページ設定オプション
 * @returns 生成されたパラメータの配列
 */
export function generateAllParams(config: PageConfig): CategoryParam[] {
  const { categories, imagePatterns, specialFiles = [] } = config;

  // カテゴリパラメータ
  const categoryParams = categories.map((category) => ({ category }));

  // 画像パスのパラメータ
  const imageParams: CategoryParam[] = [];
  categories.forEach((category) => {
    imagePatterns.forEach((pattern) => {
      imageParams.push({ category: `${category}${pattern}` });
    });
  });

  // 特別ファイルのパラメータ
  const specialParams = specialFiles.map((file) => ({ category: file }));

  return [...categoryParams, ...imageParams, ...specialParams];
}

/**
 * 画像リクエストかどうかを判定する
 * @param path リクエストパス
 * @returns 画像リクエストならtrue
 */
export function isImageRequest(path: string): boolean {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".svg", ".gif", ".webp"];
  return imageExtensions.some((ext) => path.endsWith(ext));
}
