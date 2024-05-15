import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET({ site }: APIContext) {
  if (!site) {
    throw new Error("site address is missing");
  }
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: site,
    // @ts-ignore type mismatch issue: https://github.com/withastro/docs/issues/6551
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
