import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostMeta, getAllPosts } from "@/lib/posts";
import { JsonLd } from "@/components/seo/JsonLd";
import ArticleToc from "@/components/blog/ArticleToc";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

const toIsoWithTz = (d: string): string =>
  d.includes("T") ? d : `${d}T00:00:00+05:30`;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return { title: "Not found" };
  const url = `https://devrob.in/blog/${slug}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Robin Dhiman",
      title: meta.title,
      description: meta.description,
      publishedTime: toIsoWithTz(meta.date),
      authors: ["Robin Dhiman"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  let Post;
  try {
    Post = (await import(`@/content/blog/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  const postUrl = `https://devrob.in/blog/${slug}`;

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <article className="rd-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.description,
          author: {
            "@type": "Person",
            "@id": "https://devrob.in/#person",
            name: "Robin Dhiman",
          },
          datePublished: toIsoWithTz(meta.date),
          dateModified: toIsoWithTz(meta.date),
          image: `${postUrl}/opengraph-image`,
          mainEntityOfPage: postUrl,
          publisher: {
            "@type": "Person",
            "@id": "https://devrob.in/#person",
            name: "Robin Dhiman",
          },
        }}
      />
      <div className="rd-article">
        <div className="rd-article-main">
          <Link href="/blog" className="rd-article-back">← writing</Link>
          <p className="rd-meta rd-meta--accent" style={{ marginTop: 22 }}>{`// ${meta.tags[0] ?? "Writing"}`}</p>
          <h1 className="rd-article-title">{meta.title}</h1>
          <div className="rd-article-byline">{meta.date} · {meta.readTime} · Robin Dhiman</div>

          <div className="prose" id="article-body">
            <Post />
          </div>

          <nav className="rd-article-nav" aria-label="More posts">
            {newer ? <Link href={`/blog/${newer.slug}`}>← {newer.title}</Link> : <span />}
            {older ? <Link href={`/blog/${older.slug}`}>{older.title} →</Link> : <span />}
          </nav>
        </div>
        <aside className="rd-article-toc">
          <ArticleToc />
        </aside>
      </div>
    </article>
  );
}
