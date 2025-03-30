"use client";

import dynamic from "next/dynamic";

// GoogleAnalyticsを動的インポート（クライアントコンポーネント内で行う）
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  ssr: false,
});

export default function ClientAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  if (!measurementId) return null;

  return <GoogleAnalytics measurementId={measurementId} />;
}
