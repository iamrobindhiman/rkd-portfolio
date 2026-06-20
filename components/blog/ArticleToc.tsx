"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string; sub: boolean };

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ArticleToc() {
  const [items, setItems] = useState<Heading[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const root = document.getElementById("article-body");
    if (!root) return;
    const els = Array.from(root.querySelectorAll("h2, h3")) as HTMLElement[];
    const list: Heading[] = els
      .map((h) => {
        if (!h.id) h.id = slugify(h.textContent || "");
        return { id: h.id, text: h.textContent || "", sub: h.tagName === "H3" };
      })
      .filter((h) => h.text);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(list);
    if (list.length < 2) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );
    els.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, []);

  if (items.length < 2) return null;

  return (
    <nav className="rd-toc" aria-label="On this page">
      <p className="rd-meta">{"// on this page"}</p>
      <ul>
        {items.map((it) => (
          <li key={it.id} className={"rd-toc-item" + (it.sub ? " is-sub" : "") + (active === it.id ? " is-active" : "")}>
            <a
              href={"#" + it.id}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", "#" + it.id);
              }}
            >
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
