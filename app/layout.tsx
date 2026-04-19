import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rkd.dev"),
  title: {
    default: "Robin Dhiman — Senior web engineer",
    template: "%s · Robin Dhiman",
  },
  description:
    "Robin Dhiman. Senior web engineer. Fifteen years. Magento 2, Shopify, WordPress, Next.js. Currently shipping magento2-module-llms-txt.",
  openGraph: {
    title: "Robin Dhiman — Senior web engineer",
    description: "Senior web engineer. Magento 2, Shopify, WordPress, Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
