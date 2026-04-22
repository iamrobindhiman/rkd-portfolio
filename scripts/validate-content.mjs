import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const DESC_MIN = 110;
const DESC_MAX = 160;
const TITLE_WARN_MAX = 60;
const REQUIRED_FIELDS = ["title", "description", "date", "readTime", "tags"];
const SLUG_REGEX = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

if (process.env.SKIP_CONTENT_VALIDATION === "1") {
  console.log("[content validator] SKIP_CONTENT_VALIDATION=1 — skipping checks.");
  process.exit(0);
}

if (!fs.existsSync(CONTENT_DIR)) {
  console.log("[content validator] No content/blog directory — nothing to validate.");
  process.exit(0);
}

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

if (files.length === 0) {
  console.log("[content validator] No posts to validate.");
  process.exit(0);
}

const errors = [];
const warnings = [];

for (const file of files) {
  const filePath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  const fileErrors = [];
  const fileWarnings = [];

  const slug = file.replace(/\.mdx$/, "");
  if (!SLUG_REGEX.test(slug)) {
    fileErrors.push(`filename slug '${slug}' should be lowercase kebab-case (letters, digits, hyphens)`);
  }

  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    const isEmpty =
      value === undefined ||
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0);
    if (isEmpty) {
      fileErrors.push(`missing required frontmatter field: ${field}`);
    }
  }

  if (typeof data.description === "string") {
    const len = data.description.length;
    if (len < DESC_MIN || len > DESC_MAX) {
      fileErrors.push(`description is ${len} chars; must be ${DESC_MIN}-${DESC_MAX}`);
    }
  }

  if (typeof data.title === "string" && data.title.length > TITLE_WARN_MAX) {
    fileWarnings.push(
      `title is ${data.title.length} chars; optimal is ≤${TITLE_WARN_MAX} (OG previews may truncate)`,
    );
  }

  if (typeof data.date === "string") {
    if (!DATE_REGEX.test(data.date)) {
      fileErrors.push(`date '${data.date}' must be YYYY-MM-DD`);
    } else if (Number.isNaN(Date.parse(data.date))) {
      fileErrors.push(`date '${data.date}' is not a valid calendar date`);
    }
  } else if (data.date instanceof Date) {
    fileErrors.push(
      `date must be a quoted string 'YYYY-MM-DD', not a YAML date literal`,
    );
  }

  if (data.tags !== undefined && !Array.isArray(data.tags)) {
    fileErrors.push("tags must be an array");
  }

  if (fileErrors.length || fileWarnings.length) {
    console.log(`\n  ${file}`);
    for (const e of fileErrors) {
      console.log(`    ERROR  ${e}`);
      errors.push(`${file}: ${e}`);
    }
    for (const w of fileWarnings) {
      console.log(`    WARN   ${w}`);
      warnings.push(`${file}: ${w}`);
    }
  }
}

console.log(`\n[content validator] ${files.length} file(s) checked.`);
console.log(`  ${errors.length} error(s), ${warnings.length} warning(s).`);

if (errors.length > 0) {
  console.log(`\nValidation failed. See errors above.`);
  console.log(`Emergency bypass: SKIP_CONTENT_VALIDATION=1 npm run build`);
  process.exit(1);
}

console.log(`\nAll posts pass content requirements.\n`);
process.exit(0);
