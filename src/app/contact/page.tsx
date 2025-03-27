import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="text-black" />,
    title: "所在地",
    content: (
      <>
        〒150-0002
        <br />
        東京都渋谷区渋谷＊＊＊＊＊
        <br />
        ＊＊＊ビル3F
      </>
    ),
  },
  {
    icon: <Phone className="text-black" />,
    title: "お電話",
    content: (
      <>
        03-1234-5678
        <br />
        ※平日9:00-18:00
      </>
    ),
  },
  // {
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="text-black"
  //     >
  //       <rect width="20" height="16" x="2" y="4" rx="2" />
  //       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  //     </svg>
  //   ),
  //   title: "メール",
  //   content: "info@designstudio.jp",
  // },
];

export const metadata = {
  title: "お問い合わせ | DESIGN STUDIO",
  description:
    "DESIGN STUDIOへのお問い合わせページ。プロジェクトについてのご相談やお見積もり依頼は、お気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-lg text-neutral-600">
              プロジェクトについてのご相談やお見積もり依頼は、お気軽にお問い合わせください。
              専門スタッフが丁寧にご対応いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 bg-black text-white">
                <h2 className="text-xl font-semibold mb-6">DESIGN STUDIO</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="text-white mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-medium mb-2">{info.title}</h3>
                        <div className="text-white/80">{info.content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mt-8 mb-4">ソーシャルメディア</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-white/80 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold mb-6 text-center">
                  お問い合わせフォーム
                </h2>
                <p className="text-neutral-600 mb-6 text-center">
                  下記のボタンをクリックし、お問い合わせフォームからご連絡ください。
                  <br />
                  24時間以内に担当者からご連絡いたします。
                </p>
                <a
                  href="https://forms.gle/exampleFormLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md"
                >
                  <Button className="w-full bg-black hover:bg-neutral-800">
                    お問い合わせフォームを開く
                  </Button>
                </a>

                <div className="mt-8 text-sm text-neutral-500 text-center">
                  ※フォームが開かない場合は、お電話またはメールにてご連絡ください。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">よくあるご質問</h2>
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  見積もりは無料ですか？
                </h3>
                <p className="text-neutral-600">
                  はい、お見積もりは無料で承っております。プロジェクトの規模や内容に応じて、詳細なお見積もりをご提案いたします。
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  納期はどのくらいかかりますか？
                </h3>
                <p className="text-neutral-600">
                  プロジェクトの内容や規模によって異なりますが、一般的なウェブサイト制作は約4〜8週間、ロゴデザインは約2〜3週間程度です。詳細はお問い合わせください。
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  対応エリアはどこまでですか？
                </h3>
                <p className="text-neutral-600">
                  オンラインでの打ち合わせも可能なため、日本全国どこからでもご依頼いただけます。海外のお客様にも対応しております。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
