import type { Metadata } from "next";
import { work } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work — Robin Dhiman",
  description:
    "Selected e-commerce engineering work by Robin Dhiman — Magento 2 storefronts at scale, Shopify builds, and open-source tooling.",
  alternates: { canonical: "https://devrob.in/work" },
};

export default function Work() {
  const items = [...work].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <div className="rd-page">
      <div className="rd-wrap">
        <p className="rd-meta rd-meta--accent">{"// Work"}</p>
        <h1 className="rd-h1" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>Selected work.</h1>
        <p className="rd-row-tags" style={{ marginTop: 14 }}>
          <span style={{ color: "var(--accent)" }}>→ </span>production storefronts at scale — Magento 2, Shopify &amp; open source
        </p>

        <div className="rd-work-grid">
          {items.map((w) => {
            const inner = (
              <>
                {w.href && <span className="rd-arr" aria-hidden>↗</span>}
                <div>
                  <p className="rd-meta">{[w.category, w.year].filter(Boolean).join(" · ")}</p>
                  <h2 className="rd-h3">{w.title}</h2>
                  <p className="rd-sub">{w.blurb}</p>
                </div>
                <div className="rd-row-tags" style={{ marginTop: 16 }}>{w.tags.join(" · ")}</div>
              </>
            );
            return w.href ? (
              <a
                key={w.id}
                href={w.href}
                target={w.external ? "_blank" : undefined}
                rel={w.external ? "noopener" : undefined}
                className="rd-tile rd-card"
              >
                {inner}
              </a>
            ) : (
              <div key={w.id} className="rd-tile rd-card">{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
