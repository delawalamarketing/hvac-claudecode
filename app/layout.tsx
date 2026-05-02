import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import {
  AREAS_SERVED,
  BRAND,
  EMAIL,
  FAQS,
  PHONE_TEL,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HVAC Marketing Barrie | Delawala Marketing",
    template: "%s | Delawala Marketing",
  },
  description:
    "We help Barrie & Simcoe County HVAC contractors book 8–12 furnace, AC, and heat pump installs every month. Free 20-min audit — no pitch.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: "HVAC Marketing Barrie | Delawala Marketing",
    description:
      "We help Barrie & Simcoe County HVAC contractors book 8–12 furnace, AC, and heat pump installs every month.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Marketing Barrie | Delawala Marketing",
    description:
      "We help Barrie & Simcoe County HVAC contractors book more installs every month.",
  },
  robots: { index: true, follow: true },
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
};

export const viewport: Viewport = {
  themeColor: "#0B2340",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#organization`,
  name: BRAND,
  url: SITE_URL,
  telephone: PHONE_TEL,
  email: EMAIL,
  priceRange: "$$",
  areaServed: AREAS_SERVED.map((a) => ({ "@type": "City", name: a })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barrie",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  description:
    "HVAC marketing agency for Barrie & Simcoe County contractors. Local Services Ads, Google Ads, and review automation for furnace, AC, and heat pump installs.",
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-bg text-text antialiased">
        {children}
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
