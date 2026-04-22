import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const writing = posts.length
    ? posts
        .map(
          (p) =>
            `- [${p.title}](https://devrob.in/blog/${p.slug}): ${p.description}`,
        )
        .join("\n")
    : "- No posts yet.";

  const content = `# Robin Dhiman

> Senior web engineer with fifteen years in Magento 2, Hyvä, Shopify, WordPress, and Next.js. Currently shipping magento2-module-llms-txt — an open-source Magento 2 extension that makes product catalogs discoverable by AI assistants like ChatGPT, Claude, and Perplexity.

## About

- [Home](https://devrob.in): portfolio, work, and writing by Robin Dhiman.
- [Writing](https://devrob.in/blog): technical notes on e-commerce engineering.

## Current work

- [magento2-module-llms-txt on GitHub](https://github.com/iamrobindhiman/magento2-module-llms-txt): open-source Magento 2 module that generates llms.txt and llms-full.txt files for product catalogs. Multi-store, multi-language, inventory-aware, niche-adaptive.
- [rkd/module-llms-txt on Packagist](https://packagist.org/packages/rkd/module-llms-txt): composer package for the module.

## Writing

${writing}

## Optional

- [llms-full.txt](https://devrob.in/llms-full.txt): full plain-text content of every post on this site, assembled for AI ingestion.

## Contact

- Email: hello@devrob.in
- GitHub: https://github.com/iamrobindhiman
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
