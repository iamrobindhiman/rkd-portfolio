export type WorkItem = {
  id: string;
  title: string;
  year: string;
  category?: string;
  blurb: string;
  tags: string[];
  href?: string;
  external?: boolean;
  featured: boolean;
  badge?: string;
};

export const work: WorkItem[] = [
  {
    id: "W-001",
    title: "magento2-module-llms-txt",
    year: "2026",
    category: "open source",
    blurb:
      "Open-source module that publishes spec-compliant llms.txt for Magento 2 stores, so AI assistants can read the catalog. Built because nothing in the ecosystem did it properly.",
    tags: ["Magento 2", "PHP 8", "Composer"],
    href: "https://github.com/iamrobindhiman/magento2-module-llms-txt",
    external: true,
    featured: true,
    badge: "Featured",
  },
  {
    id: "W-002",
    title: "Ballzy",
    year: "2020–2024",
    category: "European footwear retail",
    blurb:
      "Multi-country Magento 2 build connected to a Next.js headless storefront through GraphQL and real-time revalidation. Six languages, five country stores, one codebase.",
    tags: ["Magento 2", "Next.js", "GraphQL", "PHP 8"],
    featured: true,
  },
  {
    id: "W-003",
    title: "Miterassa",
    year: "2022–2024",
    category: "consumer electronics",
    blurb:
      "Magento 2 build for an Estonian electronics retailer. Custom Sony authorized-dealer subsystem routes product and brand data through a parallel storefront layered on the main catalog.",
    tags: ["Magento 2", "Elasticsearch", "PHP 8"],
    featured: true,
  },
  {
    id: "W-004",
    title: "Skechers",
    year: "2023",
    blurb:
      "EU Magento 2 multi-store across four markets (ET · EN · LV · LT). Omnibus-directive price compliance, Fastly-backed caching.",
    tags: ["Magento 2", "Fastly"],
    featured: false,
  },
  {
    id: "W-005",
    title: "CCWB",
    year: "2022",
    blurb:
      "WordPress organizational site for a Chicago community-wealth group. Role-based content, custom post types.",
    tags: ["WordPress", "PHP"],
    href: "https://ccwbe.org/",
    external: true,
    featured: false,
  },
  {
    id: "W-006",
    title: "Matsuda",
    year: "2024",
    blurb:
      "Shopify storefront for a premium Japanese eyewear brand. Modular section system reconfigurable per layout and breakpoint, built against a strict 9-pixel baseline grid that every line of text locks into.",
    tags: ["Shopify", "Liquid", "SCSS"],
    href: "https://www.matsuda.com/en-in",
    external: true,
    featured: false,
  },
  {
    id: "W-007",
    title: "Mini Wander",
    year: "2023",
    blurb:
      "Shopify storefront for a baby-essentials brand. Custom theme, category structure, checkout.",
    tags: ["Shopify", "Liquid"],
    href: "https://mini-wander.com/",
    external: true,
    featured: false,
  },
  {
    id: "W-008",
    title: "Breakup-Artist",
    year: "2025",
    blurb: "Five-page Webflow build from design handoff, no custom code.",
    tags: ["Webflow"],
    href: "https://breakup-artist.webflow.io/",
    external: true,
    featured: false,
  },
  {
    id: "W-009",
    title: "PecOnline",
    year: "2025",
    blurb:
      "Laravel portal for an Australian car-parts company. Two-way inventory and order sync across Shopify, eBay, and TradeMe — one dashboard for stock, purchasing, and fulfillment.",
    tags: ["Laravel", "Filament", "PHP 8", "MySQL"],
    featured: false,
  },
];
