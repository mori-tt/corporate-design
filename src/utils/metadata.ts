import { Metadata } from "next";
import { PageMetadata } from "@/types/common";

/**
 * ベースとなるメタデータを生成する
 * @param options メタデータのオプション
 * @returns 生成されたメタデータ
 */
export function createMetadata(options: PageMetadata): Metadata {
  const { title, description } = options;

  return {
    title,
    description,
  };
}

/**
 * カテゴリページ用のメタデータを生成する
 * @param category カテゴリ名
 * @param categoryTitle カテゴリの表示名
 * @param baseSiteTitle サイトのベースタイトル
 * @param templateFn 説明文のテンプレート関数
 * @returns 生成されたメタデータ
 */
export function createCategoryMetadata(
  category: string,
  categoryTitle: string,
  baseSiteTitle: string,
  templateFn: (categoryTitle: string) => string
): Metadata {
  return {
    title: `${categoryTitle} | ${baseSiteTitle}`,
    description: templateFn(categoryTitle),
  };
}

/**
 * 詳細ページ用のメタデータを生成する
 * @param title タイトル
 * @param description 説明文
 * @param baseSiteTitle サイトのベースタイトル
 * @returns 生成されたメタデータ
 */
export function createDetailMetadata(
  title: string,
  description: string,
  baseSiteTitle: string
): Metadata {
  return {
    title: `${title} | ${baseSiteTitle}`,
    description,
  };
}

/**
 * 404ページなどの特殊ページ用のメタデータを生成する
 * @param title タイトル
 * @param description 説明文
 * @param baseSiteTitle サイトのベースタイトル
 * @returns 生成されたメタデータ
 */
export function createSpecialMetadata(
  title: string,
  description: string,
  baseSiteTitle: string
): Metadata {
  return {
    title: `${title} | ${baseSiteTitle}`,
    description,
  };
}

/**
 * 画像リクエスト用のデフォルトメタデータを生成する
 * @param baseSiteTitle サイトのベースタイトル
 * @returns 生成されたメタデータ
 */
export function createImageRequestMetadata(baseSiteTitle: string): Metadata {
  return {
    title: baseSiteTitle,
    description: `${baseSiteTitle}のイメージ`,
  };
}
