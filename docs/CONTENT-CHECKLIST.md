# Content checklist

Quick reference for what makes a post or page ship-ready. The post half of this is enforced by `scripts/validate-content.mjs`, which runs automatically on every `npm run build` via the `prebuild` npm lifecycle script. A failing check stops the build.

---

## New blog post

### 1. Copy the template

```bash
cp content/blog/_TEMPLATE.mdx content/blog/<your-kebab-case-slug>.mdx
```

Filenames must be lowercase kebab-case, e.g. `paginating-magento-catalogs-without-offset.mdx`. Files starting with `_` are treated as templates and ignored.

### 2. Fill the frontmatter

All five fields are required. The validator will fail the build if any are missing or malformed.

| Field | Rule | Validator severity |
|-------|------|--------------------|
| `title` | Short, descriptive | warn if >60 chars |
| `description` | **110-160 chars** | error outside range |
| `date` | Quoted string `"YYYY-MM-DD"` | error if malformed |
| `readTime` | Non-empty string, e.g. `"6 min"` | error if empty |
| `tags` | Non-empty array of strings | error if empty or non-array |

Why the description range: under 110 chars LinkedIn's Post Inspector warns, and OG validators flag descriptions as "short." Over 160 chars Google truncates in search snippets.

### 3. Write the body

- Open with a hook paragraph — a concrete problem, no marketing
- Use `##` for section headings (the post title renders as H1 automatically)
- External refs under `## Further reading` at the end
- Pure markdown — no JSX imports, no custom components
- Verify claims before shipping — no fabricated numbers, version refs, or attributions

### 4. Check before pushing

```bash
npm run validate:content   # manual run
npm run build              # runs validator via prebuild, then full Next build
```

### 5. What happens automatically once the post is valid

- **OG image** generated per-post via `app/blog/[slug]/opengraph-image.tsx`
- **Article JSON-LD** emitted with IST-timezoned dates
- **Canonical, og:url, og:type=article, twitter card** auto-set in `generateMetadata()`
- **/llms.txt, /llms-full.txt, /sitemap.xml** all include the post
- **_Last updated_** line in /llms.txt advances to the newest post's date

---

## New page (non-post)

Any route under `app/` that renders a page should export metadata via the shared helper:

```ts
import { makePageMetadata } from "@/lib/seo";

export const metadata = makePageMetadata({
  path: "/about",
  title: "About",
  description: "110-160 char description. Same rules as post descriptions.",
});
```

The helper populates `canonical`, `openGraph.{type,url,siteName,title,description}`, and `twitter.{card,title,description}` from those three inputs. For article-like pages, pass `type: "article"` and include `publishedTime` / `modifiedTime` with timezone.

Don't hand-write `openGraph` blocks on new pages — the helper is the single source of truth so nothing can be forgotten.

---

## Emergency bypass

If something is truly urgent and the validator is blocking a ship:

```bash
SKIP_CONTENT_VALIDATION=1 npm run build
```

Do NOT push with the flag set on Vercel. Fix the content instead; bypass is for local emergencies only.

---

## Why this exists

Twelve AI-consumer findings during the 2026-04-22 SEO audit would have been prevented if this validator and template had existed from day one. Each future post carries the same risks: a short description, a missing tag, a bad date, a slug with spaces. Automating the checks means the mistakes never reach production.

When the rules evolve (new fields, new length thresholds), update:
- `scripts/validate-content.mjs` for the enforcement
- `content/blog/_TEMPLATE.mdx` for the author UX
- This file for the human reference
