import { getAllPosts, getPostBody } from "@/lib/posts";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const header = `# Robin Dhiman

> Senior web engineer with fifteen years in Magento 2, Hyvä, Shopify, WordPress, and Next.js. Currently shipping magento2-module-llms-txt — an open-source Magento 2 extension that makes product catalogs discoverable by AI assistants.

Portfolio: https://devrob.in
Writing index: https://devrob.in/blog
Contact: hello@devrob.in
GitHub: https://github.com/iamrobindhiman

---
`;

  const body = posts
    .map((p) => {
      const postBody = getPostBody(p.slug).trim();
      return `
# ${p.title}

_Published ${p.date} · ${p.readTime} · Robin Dhiman_
_URL: https://devrob.in/blog/${p.slug}_

${postBody}

---
`;
    })
    .join("\n");

  return new Response(header + body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
