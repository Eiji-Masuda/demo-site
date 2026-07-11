# demo-site

**株式会社ひだまり珈琲**（架空企業）のコーポレートサイト。SiteLeapのデモ・営業用。

- Astro製の静的サイト。SiteLeapのチャットから「お知らせ追加」「営業時間変更」「画像差し替え」等のデモができる
- お知らせは `src/content/news/*.md`（frontmatter: title / date / category / thumbnail）

## 開発

```bash
npm ci
npm run dev     # http://localhost:4321
npm run build   # dist/ に静的出力
```
