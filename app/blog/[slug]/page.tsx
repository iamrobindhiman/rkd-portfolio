import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostMeta } from "@/lib/posts";
import { JsonLd } from "@/components/seo/JsonLd";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

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
      publishedTime: meta.date,
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

  return (
    <article className="article">
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
          datePublished: meta.date,
          dateModified: meta.date,
          image: `${postUrl}/opengraph-image`,
          mainEntityOfPage: postUrl,
          publisher: {
            "@type": "Person",
            "@id": "https://devrob.in/#person",
            name: "Robin Dhiman",
          },
        }}
      />
      <div className="narrow">
        <nav className="breadcrumb">
          <Link href="/blog">← Writing</Link>
        </nav>
        <h1>{meta.title}</h1>
        <div className="byline">
          <span>{meta.date}</span>
          <span>·</span>
          <span>{meta.readTime}</span>
          <span>·</span>
          <span>Robin Dhiman</span>
        </div>

        <div className="prose">
          <Post />
        </div>
      </div>
    </article>
  );
}
