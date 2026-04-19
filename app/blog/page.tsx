import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes from e-commerce engineering by Robin Dhiman.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <p className="text-xs font-mono tracking-widest uppercase text-[var(--accent)] mb-4">Writing</p>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
        Notes from the work<span className="text-[var(--accent)]">.</span>
      </h1>
      <p className="mt-6 text-[var(--muted-foreground)] text-lg max-w-2xl">
        Mostly e-commerce engineering — sometimes the meta-work of being a developer for a long time.
      </p>

      <div className="mt-16 border-t-2 border-[var(--border)]">
        {posts.length === 0 ? (
          <p className="py-10 text-[var(--muted-foreground)] font-mono text-sm">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-7 border-b-2 border-[var(--border)] group hover:pl-2 transition-[padding] duration-200"
            >
              <div className="flex items-center gap-3 mb-2 font-mono text-[11px] tracking-wider text-[var(--muted-foreground)]">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              {post.description && (
                <p className="mt-2 text-[var(--muted-foreground)] max-w-2xl">{post.description}</p>
              )}
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md border-2 border-[var(--border)] bg-[var(--muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
