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
    /** Optional homepage-hero overrides used when this post is tied to the
     *  most-recent played fixture. The score line is derived from the
     *  fixture result; these provide the human prose around it. */
    heroOpponent: z.string().optional(),  // short display name, e.g. "Currimundi"
    heroTagline: z.string().optional(),   // 2-3 word emphasis, e.g. "Lessons banked."
    heroLede: z.string().optional(),      // 1-2 sentence summary under the title
  }),
});

export const collections = { news };
