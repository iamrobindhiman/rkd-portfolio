import type { Metadata } from "next";
import { SITE_URL } from "./site";

type MakePageMetadataInput = {
  /** Path beginning with /, e.g. "/about". Used for canonical and og:url. */
  path: string;
  /** Page title. Appears in <title> after root template, and in og:title / twitter:title verbatim. */
  title: string;
  /** 110-160 chars. Used as description, og:description, twitter:description. */
  description: string;
  /** Defaults to "website". Use "article" for blog-post-like pages. */
  type?: "website" | "article";
  /** ISO 8601 with timezone, only meaningful when type === "article". */
  publishedTime?: string;
  /** ISO 8601 with timezone, only meaningful when type === "article". */
  modifiedTime?: string;
};

/**
 * Returns a complete Next.js Metadata object with canonical, OG, and Twitter
 * fields wired from a small input. Use on every non-root page to avoid forgetting
 * og:url, canonical, or twitter card configuration.
 */
export function makePageMetadata({
  path,
  title,
  description,
  type = "website",
  publishedTime,
  modifiedTime,
}: MakePageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: "Robin Dhiman",
      title,
      description,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
