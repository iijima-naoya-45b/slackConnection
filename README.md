KPI 確認アプリケーションの概要

このアプリケーションは、Slack と連携して KPI（重要業績評価指標）を確認するためのツールです。 Rails と Next.js を使用して、ユーザーに直感的でインタラクティブなインターフェースを提供します。 ユーザーは、Slack を通じてリアルタイムで KPI データを取得し、分析することができます。

主な仕様:
Rails をバックエンドとして使用し、データ管理と API の提供を行います。
Next.js をフロントエンドとして使用し、ユーザーに動的なダッシュボードを提供します。
Slack API を使用してメッセージを送受信
KPI データの取得と表示
ユーザーごとのカスタマイズ可能なダッシュボード
定期的な KPI レポートの自動生成と配信

制限事項:
Slack API の利用には、適切な認証情報が必要です。
KPI データの取得元は、事前に設定されたデータソースに限定されます。
大量のデータを扱う場合、パフォーマンスに影響が出る可能性があります。
Rails と Next.js の統合には、適切な設定とデプロイが必要です。

| 基本設計項目     | 説明                                                                        |
| ---------------- | --------------------------------------------------------------------------- |
| データベース設計 | KPI データを効率的に保存するためのスキーマ設計                              |
| テーブル定義書   | 各テーブルのカラム、データ型、制約条件を詳細に記載                          |
| API 設計         | Rails を用いた RESTful API の設計                                           |
| OpenAPI 仕様書   | 各エンドポイントの詳細、リクエスト/レスポンスのフォーマット、認証情報を記載 |
| UI/UX 設計       | Next.js を用いたユーザーインターフェースのデザイン                          |
| ワイヤーフレーム | 各画面のレイアウトとユーザーインタラクションを視覚化                        |
| 認証設計         | Slack API との安全な認証フローの設計                                        |
| OAuth フロー     | 認証プロセスのステップと必要なスコープを詳細に記載                          |

使用技術:

## ◼︎ 使用技術・バージョン管理

[![言語バッジ](https://img.shields.io/badge/-Ruby-CC342D.svg?logo=ruby&style=flat-square&logoColor=white)](https://www.ruby-lang.org/)
[![フレームワークバッジ](https://img.shields.io/badge/-Ruby%20on%20Rails-CC0000.svg?logo=ruby-on-rails&style=flat-square&logoColor=white)](https://rubyonrails.org/)
[![Dockerバッジ](https://img.shields.io/badge/-Docker-2496ED.svg?logo=docker&style=flat-square&logoColor=white)](https://www.docker.com/)
[![HTMLバッジ](https://img.shields.io/badge/-HTML5-E34F26.svg?logo=html5&style=flat-square&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML)
[![CSSバッジ](https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&style=flat-square&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Next.jsバッジ](https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=flat-square&logoColor=white)](https://nextjs.org/)
[![Nginxバッジ](https://img.shields.io/badge/-Nginx-009639.svg?logo=nginx&style=flat-square&logoColor=white)](https://www.nginx.com/)
| 技術 | 用途 |
|----------------|------------------------------------------|
| Rails | バックエンド開発、API 提供 |
| Next.js | フロントエンド開発、UI/UX 設計 |
| Slack API | メッセージの送受信、KPI データの取得 |
| PostgreSQL | データベース管理、KPI データの保存 |
| OpenAPI/Swagger| API 仕様書の作成、エンドポイントの定義 |
| OAuth | 認証フローの実装、セキュリティの確保 |
| Tailwind CSS | スタイリング、レスポンシブデザインの実装 |
