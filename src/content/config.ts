import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  // This should match with the folder name in the content folder.
  // This is the collection name that will be used in the frontmatter of the posts.
  posts: postCollection,
};
