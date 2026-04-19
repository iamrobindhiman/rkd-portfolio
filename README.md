# Robin Dhiman — Portfolio

Personal portfolio + blog for Robin Dhiman (senior web engineer, e-commerce focus).

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · MDX · Shiki · next-themes

**Design system:** Playful Geometric — warm cream base, violet/pink/amber/mint accents, hard "pop" shadows, sticker cards.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing a blog post

1. Create a new file at `content/blog/your-post-slug.mdx`
2. Add frontmatter:

```mdx
---
title: "Your post title"
description: "Short summary for SEO and the blog index."
date: "2026-04-19"
readTime: "6 min"
tags: ["Magento 2", "PHP"]
---

Your markdown here. Code fences with language get full syntax highlighting via Shiki at build time.
```

3. Save. The post appears on `/blog` automatically and at `/blog/your-post-slug`.

## Deploying to Vercel

1. Push this repo to GitHub: `gh repo create iamrobindhiman/portfolio --public --source=. --push`
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, deploy — no config needed.
3. Add your custom domain in Vercel → Settings → Domains.

Set `metadataBase` in `app/layout.tsx` to your final production URL.

## Project layout

```
app/                    # App Router pages (home, blog index, [slug], sitemap, robots)
components/
  layout/               # Nav, Footer
  ui/                   # PopButton, StickerCard
  ThemeProvider.tsx     # next-themes wrapper
  ThemeToggle.tsx       # Sun/Moon toggle
content/blog/           # MDX blog posts
lib/posts.ts            # MDX frontmatter reader
app/globals.css         # Design tokens + .prose reading-mode styles
```

## Placeholders to replace

- The bottom two work cards on the home page (headless rebuild, WooCommerce optimisation) are placeholder copy — replace with real case studies when ready.
- `metadataBase` defaults to `https://rkd.dev` — update when you pick a real domain.
- Contact email `hi@rkd.dev` throughout — replace with your preferred contact address.

## License

Content under `content/` © Robin Dhiman. Code under MIT.
