import { defineCollection, z } from 'astro:content';

// お知らせ（news）コレクション。SiteLeap のAIが更新依頼に応じて記事を追加・編集する主対象。
// 1記事 = 1 Markdown ファイル（src/content/news/*.md）
const news = defineCollection({
  type: 'content',
  schema: z.object({
    /** 記事タイトル */
    title: z.string(),
    /** 掲載日（YYYY-MM-DD）。一覧の並び順と表示日付に使用 */
    date: z.date(),
    /** カテゴリ（例: お知らせ / 新商品 / キャンペーン） */
    category: z.string().default('お知らせ'),
    /** サムネイル画像パス（/img/news/... 等）。未指定時はプレースホルダ */
    thumbnail: z.string().optional(),
    /** 下書き（true の記事はビルドに含めない） */
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
