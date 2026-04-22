import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
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
    title: "Robin Dhiman — Senior web engineer",
    description:
      "Senior web engineer. Magento 2, Shopify, WordPress, Next.js. Shipping magento2-module-llms-txt.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Dhiman — Senior web engineer",
    description: "Senior web engineer. Fifteen years. Magento 2, Shopify, Next.js.",
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
                sameAs: ["https://github.com/iamrobindhiman"],
                jobTitle: "Senior web engineer",
                knowsAbout: ["Magento 2", "Hyvä", "PHP", "Next.js", "E-commerce"],
                email: "mailto:hello@devrob.in",
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
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
