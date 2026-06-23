export type Service = {
  id: string;
  name: string;        // buyer-facing visible name
  blurb: string;       // what · who · outcome (approved copy)
  serviceType: string; // schema.org Service.serviceType
};

export const services: Service[] = [
  {
    id: "magento-hyva",
    name: "Magento & Hyvä development",
    blurb:
      "Custom modules, full builds, and Hyvä storefront migrations — for teams on Magento 2 who need real backend depth, not bolted-on hacks. You get features that ship and survive the next upgrade.",
    serviceType: "Magento development",
  },
  {
    id: "performance",
    name: "Magento performance audits",
    blurb:
      "Your store got slower as the catalog and traffic grew. I trace the actual bottleneck — EAV loads, index bloat, N+1 queries, slow checkout — and fix it, with before/after numbers. For stores where speed is now costing conversions.",
    serviceType: "Performance optimization",
  },
  {
    id: "ai-discoverability",
    name: "Make your store findable by AI assistants",
    blurb:
      "Shoppers increasingly ask ChatGPT, Claude, and Perplexity what to buy. I make your catalog something those assistants can actually read and recommend — so your products show up in AI answers, not just Google. Implemented via the llms.txt standard.",
    serviceType: "AI discoverability",
  },
  {
    id: "contract",
    name: "Senior engineering, on contract",
    blurb:
      "Senior depth without adding headcount. I embed with your team for a sprint or a season — scoping, building, and unblocking the hard parts. For founders and teams who'd rather buy judgment than manage a hire.",
    serviceType: "Software engineering consulting",
  },
  {
    id: "php-ecommerce",
    name: "PHP & e-commerce — any stack",
    blurb:
      "Magento's the specialty, but the work isn't limited to it: Shopify themes and apps, WooCommerce/WordPress, Laravel, BigCommerce, and custom PHP — backend-heavy builds, integrations, and audits. For anyone who needs an engineer comfortable wherever their store actually lives.",
    serviceType: "Web development",
  },
];

export const SERVICES_TAGLINE = "Senior e-commerce engineer. Magento is my deep end.";
export const SERVICES_INTRO =
  "Fifteen years shipping production stores for real customers — Magento 2 and Hyvä first, but just as at home in Shopify, WooCommerce, Laravel, and plain PHP.";
export const SERVICES_HOW =
  "Remote-first from India (IST), comfortable across EU and US hours. A small number of engagements at a time, so each gets real attention. Most emails get a reply within a business day.";
export const SERVICES_EMAIL_HREF =
  "mailto:hello@devrob.in?subject=Project%20enquiry";
