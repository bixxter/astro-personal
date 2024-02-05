import { defineCollection, z, reference } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  blog,
};
