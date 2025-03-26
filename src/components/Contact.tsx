import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-neutral-600">
            プロジェクトについてのご相談やお見積もり依頼は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 bg-black text-white">
              <h3 className="text-xl font-semibold mb-4">お問い合わせ先</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
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
                    className="mr-3 flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-medium">所在地</p>
                    <address className="not-italic mt-1">
                      〒150-0002
                      <br />
                      東京都渋谷区渋谷1-1-1
                      <br />
                      デザインビル 5F
                    </address>
                  </div>
                </li>
                <li className="flex items-start">
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
                    className="mr-3 flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p className="mt-1">03-1234-5678</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-8 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-6 text-center">
                お問い合わせフォーム
              </h3>
              <p className="text-neutral-600 mb-6 text-center">
                下記のボタンをクリックし、お問い合わせフォームにてご連絡ください。
              </p>
              <a
                href="https://forms.gle/exampleFormLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black hover:bg-neutral-800">
                  お問い合わせフォームを開く
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
