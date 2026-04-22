import fs from "node:fs";
import path from "node:path";

/**
 * IndexNow submission script for devrob.in.
 *
 * IndexNow (https://www.indexnow.org/) lets site owners push URL changes
 * directly to Bing / Yandex / Naver / Seznam instead of waiting for crawl.
 * One submission to api.indexnow.org fans out across the consortium.
 *
 * The key below is not a secret — the protocol's authentication model is
 * "prove you control the domain by publishing the key at /<key>.txt."
 * Anyone who reads the key file can submit URLs for devrob.in, but the
 * endpoint validates that every URL belongs to the host, so misuse is
 * limited to triggering re-crawls of our own pages. Safe to commit.
 *
 * Run: npm run indexnow
 * Bypass reachability check: INDEXNOW_FORCE=1 npm run indexnow
 */

const SITE_URL = "https://devrob.in";
const INDEXNOW_KEY = "6be16d0e2eeb809978c9f3525ad5f86f";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function collectPostSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

async function verifyKeyFile() {
  try {
    const res = await fetch(KEY_LOCATION);
    if (!res.ok) {
      console.error(`[indexnow] Key file at ${KEY_LOCATION} returned ${res.status}.`);
      console.error("  IndexNow will reject the submission. Deploy first, or use INDEXNOW_FORCE=1.");
      return false;
    }
    const body = (await res.text()).trim();
    if (body !== INDEXNOW_KEY) {
      console.error(`[indexnow] Key file content mismatch. Expected '${INDEXNOW_KEY}', got '${body}'.`);
      return false;
    }
    console.log(`[indexnow] Key file verified at ${KEY_LOCATION}`);
    return true;
  } catch (err) {
    console.error(`[indexnow] Could not reach key file: ${err.message}`);
    return false;
  }
}

async function main() {
  const urls = [
    SITE_URL,
    `${SITE_URL}/blog`,
    ...collectPostSlugs().map((slug) => `${SITE_URL}/blog/${slug}`),
    `${SITE_URL}/llms.txt`,
    `${SITE_URL}/llms-full.txt`,
  ];

  if (process.env.INDEXNOW_FORCE !== "1") {
    const ok = await verifyKeyFile();
    if (!ok) process.exit(1);
  }

  console.log(`[indexnow] Submitting ${urls.length} URL(s):`);
  urls.forEach((u) => console.log(`  ${u}`));

  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  console.log(`\n[indexnow] Response: ${res.status} ${res.statusText}`);
  if (text) console.log(text);

  // Per IndexNow spec: 200 = accepted, 202 = accepted-pending, others = error
  if (res.ok || res.status === 202) {
    console.log("\n[indexnow] Submission accepted. Bing / Yandex / Naver / Seznam will re-crawl.");
    process.exit(0);
  }
  console.error("\n[indexnow] Submission failed.");
  process.exit(1);
}

main().catch((err) => {
  console.error(`[indexnow] Unexpected error: ${err.message}`);
  process.exit(1);
});
