import Link from "next/link";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "田中 健太",
    position: "代表取締役 / クリエイティブディレクター",
    bio: "UI/UXデザインとブランド戦略の専門家。10年以上の経験を持ち、数々の企業のブランド価値向上に貢献。",
    image: "/team/member1.jpg",
  },
  {
    name: "佐藤 美咲",
    position: "アートディレクター",
    bio: "デジタルとプリントの両方に精通したデザイナー。洗練された美的感覚で、プロジェクトに新しい視点をもたらします。",
    image: "/team/member2.jpg",
  },
  {
    name: "鈴木 大輔",
    position: "シニアWebデザイナー",
    bio: "最新のWebデザイントレンドに精通し、ユーザー体験を最優先としたデザインを得意とします。",
    image: "/team/member3.jpg",
  },
  {
    name: "伊藤 由美",
    position: "UIデザイナー",
    bio: "ユーザビリティとアクセシビリティを重視したUI設計が強み。使いやすさと美しさを両立したデザインを追求します。",
    image: "/team/member4.jpg",
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社 DESIGN STUDIO" },
  { label: "設立", value: "2015年4月" },
  { label: "代表者", value: "田中 健太" },
  { label: "所在地", value: "東京都渋谷区神宮前5-xx-xx" },
  {
    label: "事業内容",
    value: "Webデザイン、ブランディング、UI/UXデザイン、グラフィックデザイン",
  },
  { label: "従業員数", value: "18名（2023年4月現在）" },
];

const historyItems = [
  { year: "2015年", event: "東京都渋谷区にて「DESIGN STUDIO」を創業" },
  { year: "2016年", event: "法人化し「株式会社 DESIGN STUDIO」へ移行" },
  { year: "2018年", event: "事業拡大に伴い、現オフィスへ移転" },
  {
    year: "2019年",
    event: "デザインアワードにて「Best Digital Agency」を受賞",
  },
  { year: "2021年", event: "UI/UXデザイン部門を強化、チーム拡大" },
  { year: "2023年", event: "年間100プロジェクト達成の節目を迎える" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">私たちについて</h1>
            <p className="text-lg text-neutral-600">
              クリエイティブな発想と確かな技術で、お客様のビジョンを実現します。
              DESIGN STUDIOの企業理念と歩みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">企業理念</h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              私たちDESIGN
              STUDIOは、「デザインの力でビジネスの可能性を広げる」という理念のもと、
              クライアント様のビジネス成長を支援するパートナーとして活動しています。
            </p>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              単なる見た目の美しさだけでなく、使いやすさや目的達成のための戦略的なデザインを提供することで、
              真の価値を生み出すデザインを追求しています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">ミッション</h3>
                <p className="text-neutral-600">
                  デザインを通じて、社会に新しい価値を創造する
                </p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-bold mb-2">ビジョン</h3>
                <p className="text-neutral-600">
                  常に革新的で、人々の生活を豊かにするデザインを追求する
                </p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-xl font-bold mb-2">バリュー</h3>
                <p className="text-neutral-600">
                  創造性、誠実さ、協調性を大切にする企業文化
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            チームメンバー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {member.position}
                  </p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">会社概要</h2>
              <div className="space-y-4">
                {companyInfo.map((item, index) => (
                  <div key={index} className="border-b border-neutral-200 pb-4">
                    <h3 className="text-sm text-neutral-500 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">沿革</h2>
              <div className="space-y-6">
                {historyItems.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-24 flex-shrink-0 font-medium">
                      {item.year}
                    </div>
                    <div className="flex-grow border-l-2 border-neutral-200 pl-6 pb-6 relative">
                      <div className="absolute w-3 h-3 bg-black rounded-full -left-[7px] top-2"></div>
                      <p className="text-lg">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">オフィス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <img
                src="/office/office.jpg"
                alt="DESIGN STUDIOオフィス"
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">クリエイティブな空間</h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                私たちのオフィスは、クリエイティビティを刺激する開放的な空間となっています。
                チームメンバーが最高のパフォーマンスを発揮できるよう、快適な環境づくりを重視しています。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-xl mr-4">📍</div>
                  <p>東京都渋谷区神宮前5-xx-xx</p>
                </div>
                <div className="flex items-start">
                  <div className="text-xl mr-4">🚆</div>
                  <p>原宿駅から徒歩5分 / 表参道駅から徒歩8分</p>
                </div>
                <div className="flex items-start">
                  <div className="text-xl mr-4">📞</div>
                  <p>03-xxxx-xxxx（平日 10:00-19:00）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">お問い合わせはこちら</h2>
          <p className="text-lg mb-8 text-neutral-600 max-w-3xl mx-auto">
            プロジェクトのご相談やお見積りは、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-neutral-800">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
