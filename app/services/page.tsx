import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  services,
  SERVICES_TAGLINE,
  SERVICES_INTRO,
  SERVICES_HOW,
  SERVICES_EMAIL_HREF,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Robin Dhiman",
  description:
    "Hire Robin Dhiman: Magento 2 & Hyvä development, performance audits, AI discoverability, senior contract engineering, and PHP/e-commerce builds across Shopify, WooCommerce, Laravel & more.",
  alternates: { canonical: "https://devrob.in/services" },
  openGraph: {
    title: "Services — Robin Dhiman",
    description:
      "Magento specialist and senior PHP/e-commerce engineer, available for select engagements.",
    url: "https://devrob.in/services",
    type: "website",
  },
};

export default function Services() {
  return (
    <div className="rd-page">
      <div className="rd-wrap">
        <p className="rd-meta rd-meta--accent">{"// Services"}</p>
        <h1 className="rd-h1" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
          {SERVICES_TAGLINE}
        </h1>
        <p className="rd-sub" style={{ marginTop: 14, maxWidth: "60ch" }}>
          {SERVICES_INTRO}
        </p>

        <div className="rd-work-grid" style={{ marginTop: 40 }}>
          {services.map((s) => (
            <div key={s.id} className="rd-tile rd-card">
              <div>
                <h2 className="rd-h3">{s.name}</h2>
                <p className="rd-sub">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 48 }}>
          <p className="rd-meta rd-meta--accent">{"// How I work"}</p>
          <p className="rd-sub" style={{ marginTop: 12, maxWidth: "60ch" }}>
            {SERVICES_HOW}
          </p>
          <p className="rd-row-tags" style={{ marginTop: 24 }}>
            <a className="rd-navlink" href={SERVICES_EMAIL_HREF}>
              Tell me what you&rsquo;re dealing with <span aria-hidden="true">→</span> hello@devrob.in
            </a>
          </p>
          <p className="rd-sub" style={{ marginTop: 16 }}>
            More context:{" "}
            <Link className="rd-navlink" href="/work">selected work</Link> ·{" "}
            <Link className="rd-navlink" href="/blog">writing</Link>
          </p>
        </section>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://devrob.in/services#webpage",
              url: "https://devrob.in/services",
              name: "Services — Robin Dhiman",
              isPartOf: { "@id": "https://devrob.in/#website" },
              about: { "@id": "https://devrob.in/#person" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://devrob.in" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://devrob.in/services" },
              ],
            },
            {
              "@type": "Person",
              "@id": "https://devrob.in/#person",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: services.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    description: s.blurb,
                    serviceType: s.serviceType,
                    provider: { "@id": "https://devrob.in/#person" },
                  },
                })),
              },
            },
          ],
        }}
      />
    </div>
  );
}
