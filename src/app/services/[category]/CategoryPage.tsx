"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Palette,
  Award,
  PenTool,
  Film,
  Scissors,
  MessageSquare,
  Users,
  ClipboardEdit,
  Pipette,
  Layers,
  Clapperboard,
  Play,
  Upload,
} from "lucide-react";

// サービス詳細のデータ
const services = {
  web: {
    title: "Webデザイン",
    description: "企業のブランド価値を高めるWebサイトの企画から制作まで",
    image: "/services/web-design.jpg",
    features: ["レスポンシブデザイン", "SEO対策", "高速な読み込み速度"],
    process: [
      {
        title: "要件定義と調査",
        icon: <ClipboardEdit size={24} />,
        description:
          "プロジェクトの目標、ターゲットユーザー、技術要件を明確にし、競合分析を行います。",
      },
      {
        title: "ワイヤーフレーム・プロトタイプ作成",
        icon: <PenTool size={24} />,
        description:
          "サイト構造とユーザーフローを視覚化し、インタラクティブなプロトタイプで体験を検証します。",
      },
      {
        title: "ビジュアルデザイン",
        icon: <Palette size={24} />,
        description:
          "ブランドアイデンティティに沿ったデザインシステムを構築し、魅力的なビジュアルに落とし込みます。",
      },
      {
        title: "フィードバックと修正",
        icon: <MessageSquare size={24} />,
        description:
          "クライアントからのフィードバックを反映し、デザインを改善します。必要に応じてA/Bテストも実施します。",
      },
    ],
    benefits: [
      {
        title: "ブランド価値の向上",
        description: "魅力的なWebサイトで、企業のブランド価値を高めます。",
      },
      {
        title: "ユーザー体験の改善",
        description: "使いやすく、直感的なインターフェースを提供します。",
      },
      {
        title: "ビジネス成長の促進",
        description:
          "効果的なWebマーケティングで、ビジネスの成長をサポートします。",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    icon: <Globe size={24} />,
  },
  branding: {
    title: "ブランディング",
    description: "企業のブランド価値を高める戦略立案と実行",
    image: "/services/branding.jpg",
    features: ["ブランドアイデンティティ設計", "ブランドガイドライン作成"],
    process: [
      {
        title: "ブランド戦略とリサーチ",
        icon: <ClipboardEdit size={24} />,
        description:
          "市場分析、競合調査、ターゲットオーディエンスの理解を通じて、ブランドの方向性を定義します。",
      },
      {
        title: "コンセプト開発",
        icon: <PenTool size={24} />,
        description:
          "ブランドストーリー、コアバリュー、パーソナリティを開発し、独自のポジショニングを確立します。",
      },
      {
        title: "ビジュアルアイデンティティ制作",
        icon: <Palette size={24} />,
        description:
          "ロゴ、カラースキーム、タイポグラフィなど、ブランドの視覚的要素をデザインします。",
      },
      {
        title: "ブランドガイドライン作成",
        icon: <MessageSquare size={24} />,
        description:
          "ブランドの一貫性を保つための包括的なガイドラインを作成し、適用例を示します。",
      },
    ],
    benefits: [
      {
        title: "ブランド認知度の向上",
        description: "効果的なブランド戦略で、認知度を高めます。",
      },
      {
        title: "顧客ロイヤリティの向上",
        description: "強力なブランドで、顧客との関係を強化します。",
      },
      {
        title: "市場競争力の強化",
        description: "差別化されたブランドで、競争優位性を確立します。",
      },
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Miro", "Brand Guidelines"],
    icon: <Award size={24} />,
  },
  ui: {
    title: "UI/UXデザイン",
    description: "ユーザー体験を重視したインターフェースデザイン",
    image: "/services/ui-ux.jpg",
    features: [
      "ワイヤーフレーム作成",
      "プロトタイプ制作",
      "ユーザビリティテスト",
    ],
    process: [
      {
        title: "ユーザーリサーチ",
        icon: <ClipboardEdit size={24} />,
        description:
          "ユーザーの行動パターン、ニーズ、課題を理解するために調査を実施します。",
      },
      {
        title: "情報設計とワイヤーフレーム",
        icon: <Layers size={24} />,
        description:
          "ユーザーフローを設計し、低解像度のワイヤーフレームで構造を視覚化します。",
      },
      {
        title: "UIデザイン",
        icon: <Pipette size={24} />,
        description:
          "視覚的要素やインタラクションを設計し、一貫性のあるUIシステムを構築します。",
      },
      {
        title: "ユーザーテスト",
        icon: <Users size={24} />,
        description:
          "実際のユーザーにプロトタイプを試してもらい、フィードバックを収集して改善点を特定します。",
      },
    ],
    benefits: [
      {
        title: "ユーザー満足度の向上",
        description: "使いやすく、魅力的なインターフェースを提供します。",
      },
      {
        title: "コンバージョン率の改善",
        description: "効果的なUI/UXで、目標達成率を高めます。",
      },
      {
        title: "開発効率の向上",
        description: "明確な設計で、開発プロセスを効率化します。",
      },
    ],
    technologies: ["Figma", "Adobe XD", "InVision", "Maze", "Hotjar"],
    icon: <Palette size={24} />,
  },
  graphic: {
    title: "グラフィックデザイン",
    description: "ブランドの視覚的表現を制作",
    image: "/services/graphic.jpg",
    features: ["パンフレットデザイン", "ポスター制作", "パッケージデザイン"],
    process: [
      {
        title: "デザイン調査",
        icon: <ClipboardEdit size={24} />,
        description:
          "目的、ターゲット、競合分析を通じて、効果的なデザイン方向性を決定します。",
      },
      {
        title: "コンセプト開発",
        icon: <PenTool size={24} />,
        description:
          "複数のデザインコンセプトをスケッチし、クライアントと方向性を確認します。",
      },
      {
        title: "デザイン制作",
        icon: <Scissors size={24} />,
        description:
          "選択されたコンセプトをもとに、詳細なデザインを制作し、素材を整理します。",
      },
      {
        title: "修正とファイナライズ",
        icon: <MessageSquare size={24} />,
        description:
          "クライアントのフィードバックを反映し、最終的なデザインを完成させます。",
      },
    ],
    benefits: [
      {
        title: "ブランドの一貫性",
        description:
          "すべての視覚的要素で一貫したブランドイメージを構築します。",
      },
      {
        title: "メッセージの明確化",
        description: "視覚的に情報を整理し、メッセージを明確に伝えます。",
      },
      {
        title: "記憶に残る印象",
        description: "独自のビジュアルで、長期的な印象を残します。",
      },
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Affinity Designer",
    ],
    icon: <PenTool size={24} />,
  },
  motion: {
    title: "モーションデザイン",
    description: "動きのあるビジュアルで魅力的なコンテンツを制作",
    image: "/services/motion.jpg",
    features: [
      "アニメーションロゴ",
      "プロモーションビデオ",
      "インタラクティブコンテンツ",
    ],
    process: [
      {
        title: "コンセプト策定",
        icon: <ClipboardEdit size={24} />,
        description:
          "目的、メッセージ、ターゲットを明確にし、ムードボードやコンセプトスケッチを作成します。",
      },
      {
        title: "ストーリーボード作成",
        icon: <Clapperboard size={24} />,
        description:
          "シーンごとの流れや動きを視覚化し、全体の構成を計画します。",
      },
      {
        title: "アニメーション制作",
        icon: <Play size={24} />,
        description:
          "キーフレームを設定し、動きのタイミングやイージングを調整しながらアニメーションを制作します。",
      },
      {
        title: "サウンドと効果の追加",
        icon: <Upload size={24} />,
        description:
          "音楽やサウンドエフェクトを追加し、視覚効果と組み合わせて完成度を高めます。",
      },
    ],
    benefits: [
      {
        title: "注目度の向上",
        description: "動きのあるコンテンツで、ユーザーの注目を集めます。",
      },
      {
        title: "複雑な情報の伝達",
        description: "アニメーションで、複雑な情報をわかりやすく伝えます。",
      },
      {
        title: "エンゲージメントの向上",
        description: "インタラクティブな要素で、ユーザーの関与を高めます。",
      },
    ],
    technologies: [
      "Adobe After Effects",
      "Cinema 4D",
      "Blender",
      "Lottie",
      "GSAP",
    ],
    icon: <Film size={24} />,
  },
};

type CategoryPageProps = {
  category: string;
};

export default function CategoryPage({ category }: CategoryPageProps) {
  const service = services[category as keyof typeof services];

  if (!service) {
    return <div>サービスが見つかりません</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-50 to-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#f0f0f0,transparent)]"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#e0e0e0,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-neutral-700 mb-8">
                {service.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-neutral-800">
                  お問い合わせ
                </Button>
              </Link>
            </div>

            {/* サービスに合わせた画像を表示 */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <img
                  src={`/services/${category}-hero.jpg`}
                  alt={service.title}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="p-6 bg-neutral-50 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-4">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">メリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">制作プロセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 bg-neutral-50 rounded-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">使用技術</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <div
                key={tech}
                className="px-6 py-2 bg-white rounded-full shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせはこちら
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお見積りは、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-100"
            >
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
