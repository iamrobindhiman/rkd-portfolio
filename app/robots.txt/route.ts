export const dynamic = "force-static";

export async function GET() {
  const body = `User-Agent: *
Allow: /

Sitemap: https://devrob.in/sitemap.xml

# LLMs.txt - AI Product Discovery
# https://llmstxt.org/
# LLMs.txt: https://devrob.in/llms.txt
# LLMs-full.txt: https://devrob.in/llms-full.txt
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
