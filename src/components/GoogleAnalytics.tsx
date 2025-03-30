"use client";

import Script from "next/script";

/**
 * Google Analytics (GA4) 実装用コンポーネント
 * - 測定IDを取得してGTAGスクリプトを読み込みます
 * - 静的生成に対応しています
 *
 * @param {string} measurementId - Google Analytics測定ID (G-XXXXXXXXXX)
 * @returns JSX.Element - Scriptタグを含むコンポーネント
 *
 * 注意事項:
 * - 静的生成環境では、ページ遷移のトラッキングには制限があります
 * - SPAでのルート変更時のイベント発火には追加の実装が必要です
 *
 * @example
 * // 使用例 (実際の測定IDに置き換えてください)
 * <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
 */
export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  // 測定IDが設定されていない場合は何も表示しない
  if (!measurementId) return null;

  return (
    <>
      {/* Google Analytics スクリプト */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            send_page_view: true,
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
