import { getAllPosts } from "./posts";
import { work } from "./work";

export type SearchItem = {
  label: string;
  href: string;
  kind: "Page" | "Writing" | "Work";
  external?: boolean;
};

export function getSearchIndex(): SearchItem[] {
  const pages: SearchItem[] = [
    { label: "Home", href: "/", kind: "Page" },
    { label: "Writing", href: "/blog", kind: "Page" },
    { label: "Work", href: "/work", kind: "Page" },
    { label: "About", href: "/about", kind: "Page" },
  ];
  const posts: SearchItem[] = getAllPosts().map((p) => ({
    label: p.title,
    href: `/blog/${p.slug}`,
    kind: "Writing",
  }));
  const works: SearchItem[] = work
    .filter((w) => w.href)
    .map((w) => ({ label: w.title, href: w.href!, kind: "Work", external: w.external }));
  return [...pages, ...posts, ...works];
}
