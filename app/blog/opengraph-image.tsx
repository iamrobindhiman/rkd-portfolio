import { ImageResponse } from "next/og";

export const alt = "Writing — Robin Dhiman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div style={{ display: "flex" }}>
          <div style={{ width: 32, height: 32, background: "#0032FF" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: "#000000",
            }}
          >
            Writing.
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#333",
              marginTop: 18,
              letterSpacing: "-0.01em",
            }}
          >
            Notes on Magento, performance, security &amp; AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #000",
            paddingTop: 22,
            fontFamily: "monospace",
            fontSize: 24,
            color: "#000",
            letterSpacing: "0.04em",
          }}
        >
          <div style={{ display: "flex" }}>devrob.in/blog</div>
          <div style={{ display: "flex", color: "#666" }}>Robin Dhiman</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
