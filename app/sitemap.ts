import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/posts";

const BASE = "https://rkd.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/blog`, lastModified: new Date() },
    ...posts,
  ];
}
