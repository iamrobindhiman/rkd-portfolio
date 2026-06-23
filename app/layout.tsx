import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import CommandPalette from "@/components/search/CommandPalette";
import { getSearchIndex } from "@/lib/searchIndex";
import { services } from "@/lib/services";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://devrob.in"),
  title: {
    default: "Robin Dhiman — Senior web engineer",
    template: "%s · Robin Dhiman",
  },
  description:
    "Robin Dhiman. Senior web engineer. Fifteen years. Magento 2, Shopify, WordPress, Next.js. Currently shipping magento2-module-llms-txt.",
  keywords: [
    "Robin Dhiman",
    "Magento 2 developer",
    "senior web engineer",
    "llms.txt Magento",
    "Hyvä developer",
    "PHP engineer",
    "Next.js developer",
  ],
  authors: [{ name: "Robin Dhiman", url: "https://devrob.in" }],
  creator: "Robin Dhiman",
  publisher: "Robin Dhiman",
  alternates: {
    canonical: "https://devrob.in",
  },
  openGraph: {
    type: "website",
    url: "https://devrob.in",
    siteName: "Robin Dhiman",
    title: "Robin Dhiman — Senior web engineer · Magento 2 · Next.js",
    description:
      "Senior web engineer with fifteen years in Magento 2, Shopify, WordPress, and Next.js. Currently shipping magento2-module-llms-txt for AI discoverability.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Dhiman — Senior web engineer · Magento 2 · Next.js",
    description:
      "Senior web engineer with fifteen years in Magento 2, Shopify, WordPress, and Next.js. Currently shipping magento2-module-llms-txt for AI discoverability.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        {/* Loaded site-wide from the root layout (not a single page), so the
            no-page-custom-font rule's premise doesn't apply. preconnect above +
            these <link>s let the preload scanner discover the fonts. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700,401,501&f[]=fragment-mono@400,401&display=swap"
        />
        <meta property="og:logo" content="https://devrob.in/logo" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://devrob.in/#person",
                name: "Robin Dhiman",
                url: "https://devrob.in",
                image: "https://devrob.in/robin.jpg",
                sameAs: [
                  "https://github.com/iamrobindhiman",
                  "https://www.linkedin.com/in/iamrobindhiman/",
                  "https://x.com/IAmRobinDhiman",
                ],
                email: "mailto:hello@devrob.in",
                description:
                  "Senior e-commerce engineer with fifteen years building production stores. Magento 2 / Hyvä specialist, working across Shopify, WooCommerce, Laravel, BigCommerce, and custom PHP.",
                jobTitle: "Senior web engineer",
                knowsAbout: [
                  "Magento 2", "Hyvä", "PHP", "Shopify", "WooCommerce",
                  "WordPress", "Laravel", "BigCommerce", "Next.js",
                  "E-commerce", "Performance optimization", "AI discoverability",
                ],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Web engineer",
                  occupationalCategory: "15-1254.00",
                },
                areaServed: "Worldwide",
                makesOffer: services.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    description: s.blurb,
                    serviceType: s.serviceType,
                  },
                })),
              },
              {
                "@type": "WebSite",
                "@id": "https://devrob.in/#website",
                url: "https://devrob.in",
                name: "Robin Dhiman",
                publisher: { "@id": "https://devrob.in/#person" },
                inLanguage: "en-US",
              },
            ],
          }}
        />
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <CommandPalette items={getSearchIndex()} />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
