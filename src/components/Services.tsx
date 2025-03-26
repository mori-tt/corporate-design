import Link from "next/link";
import { Button } from "./ui/button";

const ServiceCard = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-4 text-black group-hover:bg-black group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link href={href}>
        <Button
          variant="link"
          className="p-0 h-auto text-black hover:text-neutral-700"
        >
          詳細を見る &rarr;
        </Button>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">サービス</h2>
          <p className="text-lg text-neutral-600">
            クライアントのビジョンを実現するための包括的なデザインサービスを提供しています。
            私たちの専門知識とクリエイティブな思考で、あらゆるプロジェクトを成功に導きます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Webデザイン"
            description="魅力的で使いやすいWebサイトで、訪問者を顧客に変える効果的なデザインを提供します。"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            }
            href="/services/web"
          />
          <ServiceCard
            title="UI/UXデザイン"
            description="ユーザーのニーズを理解し、直感的で美しいインターフェースを設計します。"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            }
            href="/services/ui"
          />
          <ServiceCard
            title="ブランディング"
            description="強力なブランドアイデンティティを構築し、競合から際立つための戦略を提供します。"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" />
                <path d="M14 6.5v10" />
                <path d="M10 7.5v10" />
                <path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" />
                <path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" />
              </svg>
            }
            href="/services/branding"
          />
          <ServiceCard
            title="グラフィックデザイン"
            description="デザインの視覚的な要素を作成し、ブランドのイメージを固める専門家です。"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.5 3H12H8C6.34 3 5 4.34 5 6v15c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9.5L13.5 3Z" />
                <path d="M13 3v7h7" />
              </svg>
            }
            href="/services/graphic"
          />
          <ServiceCard
            title="モーションデザイン"
            description="モーショングラフィックを使用して、ブランドのイメージを固める専門家です。"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M5 12h14" />
              </svg>
            }
            href="/services/motion"
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-neutral-100"
            >
              すべてのサービスを見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
