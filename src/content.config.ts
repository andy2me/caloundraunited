import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Match Report', 'Training', 'Club', 'Off-Pitch', 'Health', 'Pre-Season']),
    excerpt: z.string(),
    author: z.string().default('By the bench'),
    readTime: z.string(),                          // e.g. "8 min read"
    heroLabel: z.string(),                         // placeholder caption until image is dropped in
    feature: z.boolean().default(false),           // first feature post on /news and /
    /** Optional path to a hero image under /public, e.g. "/assets/news/round06.jpg" */
    image: z.string().optional(),
    /** Optional YouTube embed URL (https://www.youtube.com/embed/<id>...). Replaces the hero image when set. */
    videoUrl: z.string().optional(),
  }),
});

export const collections = { news };
