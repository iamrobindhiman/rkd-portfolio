import { ImageResponse } from "next/og";
import { getPostMeta } from "@/lib/posts";

export const alt = "Blog post by Robin Dhiman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Params) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  const title = meta?.title ?? "Writing by Robin Dhiman";
  const date = meta?.date ?? "";
  const readTime = meta?.readTime ?? "";
  const bylineParts = [date, readTime, "Robin Dhiman"].filter(Boolean);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#666",
            letterSpacing: "0.05em",
          }}
        >
          devrob.in / blog
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "95%" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#000000",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #000",
            paddingTop: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 22,
              color: "#000",
              letterSpacing: "0.04em",
            }}
          >
            {bylineParts.join(" · ")}
          </div>
          <div style={{ display: "flex", width: 20, height: 20, background: "#0032FF" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
