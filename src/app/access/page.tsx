import Link from "next/link";
import { Button } from "@/components/ui/button";
import GoogleMapWrapper from "./GoogleMapWrapper";

const accessInfo = [
  {
    icon: (
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
        className="text-black"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "所在地",
    content: (
      <>
        〒150-0002
        <br />
        東京都渋谷区渋谷1-1-1
        <br />
        デザインビル 5F
      </>
    ),
  },
  {
    icon: (
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
        className="text-black"
      >
        <path d="M5.2 22h13.6a2 2 0 0 0 2-1.6L22 7H2l1.2 13.4a2 2 0 0 0 2 1.6Z" />
        <path d="M6 7V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "営業時間",
    content: (
      <>
        平日: 9:00 - 18:00
        <br />
        土日祝: 休業
      </>
    ),
  },
  {
    icon: (
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
        className="text-black"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "お電話",
    content: (
      <>
        03-1234-5678
        <br />
        ※平日9:00-18:00
      </>
    ),
  },
  {
    icon: (
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
        className="text-black"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "メール",
    content: "info@designstudio.jp",
  },
];

const transportationInfo = [
  {
    type: "電車",
    routes: [
      "JR山手線「渋谷駅」ハチ公口より徒歩5分",
      "東京メトロ銀座線「渋谷駅」より徒歩7分",
      "東急田園都市線「渋谷駅」より徒歩8分",
    ],
  },
  {
    type: "バス",
    routes: ["渋谷駅西口バスターミナルより徒歩3分"],
  },
  {
    type: "車",
    routes: [
      "首都高速3号渋谷線「渋谷出口」より5分",
      "近隣にコインパーキングあり",
    ],
  },
];

export const metadata = {
  title: "アクセス | DESIGN STUDIO",
  description:
    "DESIGN STUDIOへのアクセス方法。渋谷駅から徒歩5分の好立地にオフィスを構えています。お気軽にお越しください。",
};

export default function AccessPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">アクセス</h1>
            <p className="text-lg text-neutral-600">
              DESIGN
              STUDIOは、渋谷駅から徒歩5分の好立地にオフィスを構えています。
              打ち合わせやご相談の際は、お気軽にお越しください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">会社情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {accessInfo.map((info, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="mr-2">{info.icon}</div>
                        <h3 className="font-semibold">{info.title}</h3>
                      </div>
                      <div className="text-neutral-600 pl-9">
                        {info.content}
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6">交通アクセス</h2>
                {transportationInfo.map((transport, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold mb-2">
                      {transport.type}でお越しの場合
                    </h3>
                    <ul className="list-disc pl-5 text-neutral-600">
                      {transport.routes.map((route, idx) => (
                        <li key={idx} className="mb-1">
                          {route}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="h-full min-h-[400px] bg-neutral-100 rounded-xl overflow-hidden">
                <GoogleMapWrapper />
              </div>
            </div>

            <div className="border-t pt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">お問い合わせ</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
                ご訪問前に事前のご連絡をいただけますと、スムーズにご案内できます。
                お問い合わせやご質問は、下記のボタンからお気軽にご連絡ください。
              </p>
              <Link href="/contact">
                <Button className="bg-black hover:bg-neutral-800">
                  お問い合わせフォーム
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
