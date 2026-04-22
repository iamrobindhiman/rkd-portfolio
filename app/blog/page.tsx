import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical notes on e-commerce engineering — Magento 2, Hyvä, Next.js — by Robin Dhiman. Lessons from fifteen years of shipping production systems.",
  alternates: { canonical: "https://devrob.in/blog" },
  openGraph: {
    type: "website",
    url: "https://devrob.in/blog",
    siteName: "Robin Dhiman",
    title: "Writing — Robin Dhiman",
    description:
      "Technical notes on e-commerce engineering — Magento 2, Hyvä, Next.js — by Robin Dhiman. Lessons from fifteen years of shipping production systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing — Robin Dhiman",
    description:
      "Technical notes on e-commerce engineering — Magento 2, Hyvä, Next.js — by Robin Dhiman. Lessons from fifteen years of shipping production systems.",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="page" style={{ padding: "clamp(4rem, 8vw, 7rem) var(--pad-x)" }}>
      <span className="secnum" style={{ display: "block", marginBottom: 12 }}>03 / Writing</span>
      <h1 className="display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
        Notes from the work<span className="accent">.</span>
      </h1>
      <p style={{ marginTop: 24, color: "var(--body)", fontSize: 17, maxWidth: "36em" }}>
        Mostly e-commerce engineering — sometimes the meta-work of being a developer for a long time.
      </p>

      <div className="post-list" style={{ marginTop: 64 }}>
        {posts.length === 0 ? (
          <div style={{ padding: "22px 0", color: "var(--mute)", fontFamily: "var(--fm)", fontSize: 12 }}>
            No posts yet.
          </div>
        ) : (
          posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
              <span className="pnum">{String(i + 1).padStart(3, "0")}</span>
              <span className="date">{post.date}</span>
              <span className="title">{post.title}</span>
              <span className="read">{post.readTime}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
