import { getAllPosts, getPostBody } from "@/lib/posts";
import { SITE_BLURB, SITE_LINKS, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const header = `# Robin Dhiman

> ${SITE_BLURB}

Portfolio: ${SITE_URL}
Writing index: ${SITE_URL}/blog
Contact: ${SITE_LINKS.email}
GitHub: ${SITE_LINKS.github}
LinkedIn: ${SITE_LINKS.linkedin}
X: ${SITE_LINKS.x}

---

Below: the full plain-text content of every post on devrob.in, newest first. Each entry begins with the post title as an H1, followed by a byline line (date · read time · author) and the post's canonical URL.

---
`;

  const body = posts
    .map((p) => {
      const postBody = getPostBody(p.slug).trim();
      return `
# ${p.title}

_Published ${p.date} · ${p.readTime} · Robin Dhiman_
_URL: ${SITE_URL}/blog/${p.slug}_

${postBody}

---
`;
    })
    .join("\n");

  return new Response(header + body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
