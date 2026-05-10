import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    /** Optional last-edit date — set when the post is updated after publication */
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Primary citation URL (e.g. ΦΕΚ, ΥΠΕΝ press release) */
    source: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    section: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, docs };
