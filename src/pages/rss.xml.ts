import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET({ site }: APIContext) {
  if (!site) {
    throw new Error("site address is missing");
  }

  const posts = await getCollection("posts");

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: site,
    // @ts-ignore type mismatch issue: https://github.com/withastro/docs/issues/6551
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
