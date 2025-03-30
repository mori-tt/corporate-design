/**
 * サイト全体の共通定数
 */

/**
 * サイト名
 */
export const SITE_NAME: string = "DESIGN STUDIO";

/**
 * サイトのベースURL
 * デプロイする際に実際のドメインに変更が必要です
 */
export const BASE_URL: string = "https://mori-tt.github.io/corporate-design/";

/**
 * サイトの基本情報
 */
export const SITE_BASE_INFO = {
  title: SITE_NAME,
  description: "モダンでクリエイティブなデザイン会社",
  fullDescription:
    "最先端のデザインで企業の成長をサポートするデザイン会社。Webデザイン、UIデザイン、ブランディングなど幅広いサービスを提供しています。",
};

/**
 * サービスセクション
 */
export const SERVICES_SECTION = {
  title: "サービス",
  description:
    "DESIGN STUDIOが提供するサービスのご紹介。Webデザイン、UIデザイン、ブランディング、マーケティングなど幅広いデザインサービスで企業の成長をサポートします。",
};

/**
 * 実績セクション
 */
export const WORKS_SECTION = {
  title: "実績",
  description:
    "DESIGN STUDIOの実績紹介。様々な業種・業界のクライアント様と協力し、ビジネスの成長と成功を支援してきた実績をご紹介します。",
};

/**
 * 会社情報セクション
 */
export const COMPANY_SECTION = {
  title: "会社情報",
  description:
    "DESIGN STUDIOの会社情報。私たちの理念やミッション、ビジョンをご紹介します。",
};

/**
 * お問い合わせセクション
 */
export const CONTACT_SECTION = {
  title: "お問い合わせ",
  description:
    "DESIGN STUDIOへのお問い合わせ。プロジェクトのご相談や見積もりのご依頼など、お気軽にお問い合わせください。",
};

/**
 * 特殊ページ
 */
export const SPECIAL_PAGES = {
  notFound: {
    title: "Not Found",
    description: "ページが見つかりませんでした。",
  },
};

/**
 * Google Analytics 測定ID
 * GA4の測定IDを設定してください (G-XXXXXXXXXX形式)
 * 実際に使用する際は適切なIDを設定してください
 * 例: 'G-XXXXXXXXXX'
 */
export const GA_MEASUREMENT_ID: string = "";

/**
 * Google Search Console検証コード
 * Search Consoleから提供される検証コードを設定します
 * 実際に使用する際は適切なコードを設定してください
 * 例: 'google-site-verification=XXXXXXXXXXXXXXXXXXXX'
 */
export const GSC_VERIFICATION_CODE: string = "";

/**
 * アナリティクス設定をまとめたオブジェクト
 */
export const ANALYTICS = {
  MEASUREMENT_ID: GA_MEASUREMENT_ID,
  VERIFICATION_CODE: GSC_VERIFICATION_CODE,
  VERIFICATION_PATH: "/google-verification",
};
