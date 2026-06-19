import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Robin Dhiman",
  description:
    "Robin Dhiman — senior Magento 2 and e-commerce engineer with fifteen years shipping production storefronts, focused on performance, security, and AI-legible catalogs.",
  alternates: { canonical: "https://devrob.in/about" },
};

export default function About() {
  return (
    <div className="rd-page">
      <div className="rd-wrap">
        <p className="rd-meta rd-meta--accent">{"// About"}</p>
        <h1 className="rd-h1">About.</h1>
        <p className="rd-lede">
          A fuller story, photo, and timeline are on the way in the redesign. For now: senior Magento&nbsp;2 &amp;
          e-commerce engineer, fifteen years shipping production storefronts.
        </p>
      </div>
    </div>
  );
}
