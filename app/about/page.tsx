import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Robin Dhiman",
  description:
    "Robin Dhiman — Adobe Commerce certified e-commerce architect with 14+ years shipping production Magento storefronts, now building tooling that makes catalogs legible to AI.",
  alternates: { canonical: "https://devrob.in/about" },
};

const timeline = [
  {
    period: "2024 → now",
    role: "Open source · RKD LlmsTxt",
    detail: "Building the module that makes Magento catalogs discoverable by AI shopping assistants — and most of what I write about here.",
  },
  {
    period: "2014 → present",
    role: "Tech Lead · Magento Developer — FAB Web Studio",
    detail: "Own technical delivery and lead a team of 5–6 across front- and back-end. Magento 1→2 migrations, multi-store B2B catalogs, Shopify private apps and 35+ store builds, WooCommerce, a .NET→BigCommerce replatform, and a Laravel inventory system syncing eBay, TradeMe & Shopify.",
  },
  {
    period: "2019 – 2020",
    role: "Magento Full-Stack Developer — Limegrove (Tallinn, EU)",
    detail: "Secondment delivering Adobe Commerce / Magento 2 for EU footwear, streetwear and consumer-electronics brands — custom modules, REST/GraphQL, Luma + Hyvä storefronts, multi-store and performance work.",
  },
  {
    period: "2012 – 2014",
    role: "Junior Web Developer — RV Technologies",
    detail: "Shopify themes and Liquid alongside custom PHP. Where the e-commerce foundation got laid.",
  },
  {
    period: "2008 – 2012",
    role: "B.Tech, Computer Science — Punjab Technical University",
    detail: "",
  },
];

export default function About() {
  return (
    <div className="rd-page">
      <div className="rd-wrap">
        <p className="rd-meta rd-meta--accent">{"// About"}</p>
        <h1 className="rd-h1" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>Robin Dhiman.</h1>

        <div className="rd-about-grid">
          <div className="rd-tile rd-about-photo">
            <Image
              src="/robin-about.jpg"
              alt="Robin Dhiman snorkelling off the coast of Sri Lanka"
              width={1200}
              height={1200}
              className="rd-about-img"
              priority
              sizes="(max-width: 760px) 100vw, 320px"
            />
          </div>
          <div className="rd-tile rd-tile--accent rd-about-bio">
            <p>
              I&rsquo;m an e-commerce architect with <strong>14+ years</strong> building storefronts
              that hold up under real traffic. Adobe Commerce certified, Tech Lead at FAB Web Studio —
              I own technical delivery and lead a small team across front- and back-end.
            </p>
            <p>
              My work lives in Magento&nbsp;2 / Adobe Commerce, Hyvä and headless&nbsp;/&nbsp;PWA, with
              Shopify private apps and Laravel systems when the job calls for it. Multi-store builds,
              B2B catalogs at scale, ERP and payment integrations — the parts that break at 2&nbsp;a.m.
            </p>
            <p>
              Lately I&rsquo;m pointed at a new problem: making catalogs <strong>legible to AI shopping
              agents</strong>. That&rsquo;s where my open-source RKD&nbsp;LlmsTxt module came from.
            </p>
            <p className="rd-about-coda">Off the clock, you&rsquo;ll find me underwater somewhere warm.</p>
          </div>
        </div>

        <p className="rd-meta rd-meta--accent" style={{ marginTop: 52 }}>{"// Timeline"}</p>
        <ol className="rd-tl">
          {timeline.map((t) => (
            <li className="rd-tl-item" key={t.role}>
              <span className="rd-tl-period">{t.period}</span>
              <div className="rd-tl-body">
                <h2 className="rd-tl-role">{t.role}</h2>
                {t.detail && <p className="rd-tl-detail">{t.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
