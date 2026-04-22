import { getAllPosts } from "@/lib/posts";
import { SITE_BLURB, SITE_LINKS, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const lastUpdated =
    posts[0]?.date ?? new Date().toISOString().slice(0, 10);

  const writing = posts.length
    ? posts
        .map(
          (p) =>
            `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`,
        )
        .join("\n")
    : "- No posts yet.";

  const content = `# Robin Dhiman

> ${SITE_BLURB}

_Last updated: ${lastUpdated}_

## About

- [Home](${SITE_URL}): portfolio, work, and writing by Robin Dhiman.
- [Writing](${SITE_URL}/blog): technical notes on e-commerce engineering.

## Current work

- [magento2-module-llms-txt on GitHub](https://github.com/iamrobindhiman/magento2-module-llms-txt): solves the fact that most Magento stores are invisible to AI search — crawlers rate-limit long before reaching deep product pages. The module emits a spec-compliant llms.txt index and an llms-full.txt content dump so agents ingest the catalog in one request. Multi-store, multi-language, inventory-aware (out-of-stock filtered at SQL level), and niche-adaptive (admin picks which product attributes to expose for apparel vs. electronics vs. food).
- [rkd/module-llms-txt on Packagist](https://packagist.org/packages/rkd/module-llms-txt): composer package for the module.

## Writing

${writing}

## Services

Available for select engagements. Focus areas: Magento 2 / Hyvä, WordPress, Shopify, Laravel, and Next.js — backend-heavy builds and audits, AI-discoverability retrofits for existing stores, and senior contract or consulting where depth matters more than seat count. Remote-first, India-based (IST); comfortable with EU and US working hours.

To discuss: email ${SITE_LINKS.email} with a short description of the problem. Typical response within one business day.

## FAQ

### What is llms.txt?

A proposed standard (https://llmstxt.org/) for publishing a plain-text index of a website's important pages so AI assistants can discover structured content without crawling every URL. Think robots.txt, but for LLM ingestion.

### What does magento2-module-llms-txt do?

It reads a Magento 2 catalog (products, categories, CMS pages) and writes two files: llms.txt (a short index) and llms-full.txt (the full content dump). Both regenerate on a cron schedule or manually via CLI, admin button, or REST API.

### How is this different from an XML sitemap?

A sitemap lists URLs for search crawlers to fetch. llms.txt is the content itself, pre-formatted for LLM ingestion — so an AI agent does not need to render every product page to understand the catalog.

### Where can I install the module?

Via Composer: \`composer require rkd/module-llms-txt\`. Full README: https://github.com/iamrobindhiman/magento2-module-llms-txt.

## Full content for AI ingestion

- [llms-full.txt](${SITE_URL}/llms-full.txt): full plain-text content of every post on this site, assembled for AI ingestion.

## Contact

- Email: ${SITE_LINKS.email}
- GitHub: ${SITE_LINKS.github}
- LinkedIn: ${SITE_LINKS.linkedin}
- X: ${SITE_LINKS.x}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
