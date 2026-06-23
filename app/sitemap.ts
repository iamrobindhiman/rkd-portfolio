import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/posts";

const BASE = "https://devrob.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/blog`, lastModified: new Date() },
    { url: `${BASE}/work`, lastModified: new Date() },
    { url: `${BASE}/services`, lastModified: new Date() },
    { url: `${BASE}/about`, lastModified: new Date() },
    ...posts,
  ];
}
