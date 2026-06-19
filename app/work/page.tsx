import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Robin Dhiman",
  description:
    "Selected e-commerce engineering work by Robin Dhiman — Magento 2 storefronts at scale, Shopify builds, and open-source tooling.",
  alternates: { canonical: "https://devrob.in/work" },
};

export default function Work() {
  return (
    <div className="rd-page">
      <div className="rd-wrap">
        <p className="rd-meta rd-meta--accent">{"// Work"}</p>
        <h1 className="rd-h1">Selected work.</h1>
        <p className="rd-lede">
          The full project archive is being rebuilt in the new design. For now, the highlights live on the home page.
        </p>
      </div>
    </div>
  );
}
