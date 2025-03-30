import { ANALYTICS } from "@/constants/site";

/**
 * Google Search Console 検証用ファイル生成ルート
 *
 * 静的生成に対応したSearch Console検証ファイルを提供します
 * constants/site.tsのANALYTICS.VERIFICATION_CODEを使用して検証ファイルを生成します
 *
 * 使用方法:
 * 1. Google Search Consoleでサイト追加時に「HTMLファイル」による検証を選択
 * 2. 提供される検証コードをconstants/site.tsのANALYTICS.VERIFICATION_CODEに設定
 * 3. 提供されるファイル名に合わせてこのファイルのパスを変更 (デフォルトはgoogle-verification)
 *
 * 注意:
 * - 実際のデプロイ前に、正しい検証コードに更新することが重要です
 * - 静的生成のため、ビルド時の値が使用されます。変更後は再ビルドが必要です
 */

// 静的生成用の設定
export const dynamic = "force-static";
export const revalidate = false;

// シンプルなGETハンドラー
export async function GET() {
  // 検証コードが設定されている場合のみ正しいレスポンスを返す
  if (ANALYTICS.VERIFICATION_CODE) {
    return new Response(
      `google-site-verification: ${ANALYTICS.VERIFICATION_CODE}`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      }
    );
  }

  // 検証コードが設定されていない場合は404を返す
  return new Response("Verification code not set", { status: 404 });
}
