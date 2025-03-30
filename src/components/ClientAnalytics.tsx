"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

// GoogleAnalyticsを動的インポート（クライアントコンポーネント内で行う）
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  ssr: false,
});

export default function ClientAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  // RSC関連のエラーを抑制する
  useEffect(() => {
    // console.error をオーバーライドして特定のエラーをフィルタリング
    const originalConsoleError = console.error;
    console.error = (...args) => {
      // RSC関連のエラーの場合はスキップ
      const errorText = args.join(" ");
      if (
        errorText.includes("_rsc") ||
        errorText.includes(".txt?") ||
        errorText.includes("Failed to load resource: 404")
      ) {
        return;
      }
      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  if (!measurementId) return null;

  return <GoogleAnalytics measurementId={measurementId} />;
}
