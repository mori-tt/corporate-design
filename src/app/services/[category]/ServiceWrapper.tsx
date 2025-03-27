"use client";

import { notFound } from "next/navigation";
import ServiceContent from "./ServiceContent";

// サービスカテゴリのリスト
const serviceCategories = ["web", "branding", "ui", "graphic", "motion"];

interface ServiceWrapperProps {
  category: string;
}

export default function ServiceWrapper({ category }: ServiceWrapperProps) {
  // 有効なカテゴリかチェック
  if (!serviceCategories.includes(category)) {
    notFound();
  }

  return <ServiceContent category={category} />;
}
