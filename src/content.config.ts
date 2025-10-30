// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    social: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/experience" }),
  schema: z.object({
    draft: z.boolean(),
    area: z.string(),
    topics: z.array(z.string()),
    rowStart: z.number().optional(),
    rowEnd: z.number().optional(),
    order: z.number(),
  })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/data"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'experience': experienceCollection,
};