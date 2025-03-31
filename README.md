# デザイン会社のコーポレートサイト

このプロジェクトは、デザイン会社向けのコーポレートサイトです。モダンで洗練された UI/UX を提供し、企業のブランドイメージを効果的に伝えることを目的としています。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org) - React ベースの高速なウェブアプリケーションフレームワーク
- **言語**: [TypeScript](https://www.typescriptlang.org) - 型安全な JavaScript スーパーセット
- **デザインシステム**: [shadcn ui](https://ui.shadcn.com/) - 美しく再利用可能なコンポーネント
- **スタイリング**: [TailwindCSS](https://tailwindcss.com) - ユーティリティファーストの CSS フレームワーク

## 主な機能

- 高速なページ表示を実現する静的生成
- 洗練された UI コンポーネントによるモダンなデザイン
- レスポンシブデザインによる多様なデバイス対応
- SEO 最適化された構造
- Next.js の先進機能を活用した柔軟なルーティングとパフォーマンス向上

## 開発ガイド

### 前提条件

- Node.js 20.0.0 以上
- npm または yarn

### インストール

依存関係をインストールするには、以下のコマンドを実行してください。

````bash
npm install

### 開発サーバの起動

ローカル環境で開発サーバを起動するには、以下のコマンドを実行してください。

```bash
npm run dev

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスすると、サイトを確認できます。

## デプロイガイド

このプロジェクトは GitHub Pages へのデプロイを前提とした静的サイト生成を採用しています。

### 静的サイトの生成

Next.js の静的生成機能を使用してサイトをビルドします:

```bash
npm run build
````

最新の Next.js では、`next export` は非推奨となり、`next build` 時に自動的に静的ファイルが生成されます。ビルド後、プロジェクトルートに「out」フォルダが生成されます。

### ローカルでの静的サイトの確認

生成された静的サイトをローカルで確認するには、以下のコマンドを実行してください：

```bash
npx serve out
```

通常は http://localhost:5000 などの URL でサイトを確認できます。

### GitHub Pages へのデプロイ

このプロジェクトは「out」フォルダの内容を GitHub Pages にデプロイする設計です:

1. リポジトリに「gh-pages」ブランチを作成
2. 「out」フォルダの内容を「gh-pages」ブランチにプッシュ
3. GitHub のリポジトリ設定で GitHub Pages を有効化し、「gh-pages」ブランチをデプロイ元として選択

#### 自動デプロイ (オプション)

GitHub Actions を使った自動デプロイも設定しています。`.github/workflows/nextjs.yml` ファイルを作成し、ワークフローを定義しています:

```

## 追加リソース

- [Next.js ドキュメント](https://nextjs.org/docs)
- [shadcn ui ドキュメント](https://ui.shadcn.com/docs)
- [TailwindCSS ドキュメント](https://tailwindcss.com/docs)
```
