"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const CHIPS = ["All", "Magento", "Performance", "Security", "AI"];

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  const [chip, setChip] = useState("All");
  const filtered =
    chip === "All"
      ? posts
      : posts.filter((p) => p.tags.some((t) => t.toLowerCase().includes(chip.toLowerCase())));

  return (
    <>
      <div className="rd-chips">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            className={"rd-chip" + (c === chip ? " is-on" : "")}
            aria-pressed={c === chip}
            onClick={() => setChip(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="rd-index">
        {filtered.length === 0 ? (
          <p className="rd-index-empty">No posts in this filter yet.</p>
        ) : (
          filtered.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rd-row">
              <div className="rd-row-date">
                {p.date}
                <span>{p.readTime}</span>
              </div>
              <div className="rd-row-main">
                <h2 className="rd-row-title">{p.title}</h2>
                <p className="rd-row-sub">{p.description}</p>
                <div className="rd-row-tags">{p.tags.join(" · ")}</div>
              </div>
              <span className="rd-row-arr" aria-hidden>↗</span>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
