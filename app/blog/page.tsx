import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import WritingList from "@/components/writing/WritingList";

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
    <div className="rd-page">
      <div className="rd-wrap">
        <h1 className="rd-h1" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>Writing.</h1>
        <p className="rd-row-tags" style={{ marginTop: 14 }}>
          <span style={{ color: "var(--accent)" }}>→ </span>
          {`ls -t ~/writing  ·  ${posts.length} notes on Magento, performance, security & AI`}
        </p>
        <WritingList posts={posts} />
      </div>
    </div>
  );
}
