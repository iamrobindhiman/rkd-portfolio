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
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <nav className="font-mono text-xs mb-10">
        <Link href="/blog" className="text-[var(--muted-foreground)] hover:text-[var(--accent)]">
          ← Writing
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider text-[var(--muted-foreground)] mb-4">
          <span>{meta.date}</span>
          <span>·</span>
          <span>{meta.readTime}</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight tracking-tight">
          {meta.title}
        </h1>
        {meta.description && (
          <p className="mt-6 text-lg text-[var(--muted-foreground)]">{meta.description}</p>
        )}
      </header>

      <div className="prose">
        <Post />
      </div>
    </article>
  );
}
