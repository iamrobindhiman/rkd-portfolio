// SEO / AI-discoverability preservation gate.
// Fetches each route from a running server and asserts the markers that make
// the site visible to Google + AI crawlers are present. Fails (exit 1) on any regression.
//   usage: node scripts/seo-preservation-check.mjs [baseURL]   (default http://localhost:3000)
import { readdirSync } from "node:fs";
import { join } from "node:path";

const BASE = process.argv[2] || process.env.SEO_BASE || "http://localhost:3000";
const BLOG_DIR = join(process.cwd(), "content", "blog");

const slugs = readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
  .map((f) => f.replace(/\.mdx$/, ""));

const fails = [];
const ok = (c, m) => { if (!c) fails.push(m); };

async function getHtml(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) { fails.push(`${path} → HTTP ${res.status}`); return ""; }
  return res.text();
}

// HTML pages must carry the full discoverability set
async function checkPage(path, { jsonLdTypes = [], needArticle = false } = {}) {
  const html = await getHtml(path);
  if (!html) return;
  ok(/<link[^>]+rel=["']canonical["']/i.test(html), `${path}: missing <link rel=canonical>`);
  ok(/<meta[^>]+property=["']og:title["']/i.test(html), `${path}: missing og:title`);
  ok(/<meta[^>]+property=["']og:image["']/i.test(html), `${path}: missing og:image`);
  ok(/<meta[^>]+name=["']twitter:card["']/i.test(html), `${path}: missing twitter:card`);
  ok(/<script[^>]+type=["']application\/ld\+json["']/i.test(html), `${path}: missing JSON-LD`);
  for (const t of jsonLdTypes) ok(html.includes(`"${t}"`), `${path}: missing JSON-LD @type ${t}`);
  ok(/<h1[\s>]/i.test(html), `${path}: missing <h1>`);
  ok(/<main[\s>]/i.test(html) && /<header[\s>]/i.test(html) && /<footer[\s>]/i.test(html),
     `${path}: missing a semantic landmark (main/header/footer)`);
  if (needArticle) ok(/<article[\s>]/i.test(html), `${path}: missing <article>`);
}

// Plain-text discovery files must serve 200
async function check200(path) {
  const res = await fetch(BASE + path);
  ok(res.ok, `${path} → HTTP ${res.status} (expected 200)`);
}

console.log(`[seo-check] base=${BASE}  posts=${slugs.length}`);
await checkPage("/", { jsonLdTypes: ["Person", "WebSite"] });
await checkPage("/blog");
await checkPage("/work");
await checkPage("/about");
if (slugs[0]) await checkPage(`/blog/${slugs[0]}`, { jsonLdTypes: ["Article"], needArticle: true });
for (const p of ["/sitemap.xml", "/robots.txt", "/llms.txt", "/llms-full.txt"]) await check200(p);

if (fails.length) {
  console.error(`\n[seo-check] FAILED — ${fails.length} regression(s):`);
  for (const f of fails) console.error("  ✗ " + f);
  process.exit(1);
}
console.log("[seo-check] ✓ all discoverability markers present");
