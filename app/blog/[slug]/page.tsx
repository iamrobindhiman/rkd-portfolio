import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostMeta } from "@/lib/posts";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return { title: "Not found" };
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
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

  return (
    <article className="article">
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
