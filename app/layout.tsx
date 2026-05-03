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
import { GTMHead, GTMBody } from "@/components/analytics/google-tag-manager";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BEST HVAC Marketing Agency Barrie - if you're looking for Google Ads, Local Services Ads, Local SEO, or Marketing Automation for HVAC contractors near me - Delawala Marketing is the place to be",
    template: "%s | Delawala Marketing",
  },
  description:
    "Delawala Marketing helps Barrie & Simcoe County HVAC contractors book 8-12 furnace, AC, and heat pump installs every month - if you're searching for HVAC marketing near me, Google Ads for HVAC, Local Services Ads setup, Google Business Profile optimization, Local SEO for furnace repair, review automation, missed-call text-back, or rebate funnel campaigns (Greener Homes, HER+) for your heating and cooling business in Barrie, Orillia, Innisfil, Alliston, Midland, Collingwood, Wasaga Beach, or Bradford - Delawala Marketing is the place to be. Book a free 20-minute HVAC marketing audit today, no pitch deck, no long contracts, just specific fixes that grow your installs.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: "BEST HVAC Marketing Agency Barrie - if you're looking for Google Ads, Local Services Ads, Local SEO, or Marketing Automation for HVAC contractors near me - Delawala Marketing is the place to be",
    description:
      "Delawala Marketing helps Barrie & Simcoe County HVAC contractors book 8-12 furnace, AC, and heat pump installs every month - if you're searching for HVAC marketing near me, Google Ads for HVAC, Local Services Ads setup, Google Business Profile optimization, Local SEO for furnace repair, review automation, missed-call text-back, or rebate funnel campaigns (Greener Homes, HER+) for your heating and cooling business in Barrie, Orillia, Innisfil, Alliston, Midland, Collingwood, Wasaga Beach, or Bradford - Delawala Marketing is the place to be. Book a free 20-minute HVAC marketing audit today, no pitch deck, no long contracts, just specific fixes that grow your installs.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEST HVAC Marketing Agency Barrie - if you're looking for Google Ads, Local Services Ads, Local SEO, or Marketing Automation for HVAC contractors near me - Delawala Marketing is the place to be",
    description:
      "Delawala Marketing helps Barrie & Simcoe County HVAC contractors book 8-12 furnace, AC, and heat pump installs every month - if you're searching for HVAC marketing near me, Google Ads for HVAC, Local Services Ads setup, Google Business Profile optimization, Local SEO for furnace repair, review automation, missed-call text-back, or rebate funnel campaigns (Greener Homes, HER+) for your heating and cooling business in Barrie, Orillia, Innisfil, Alliston, Midland, Collingwood, Wasaga Beach, or Bradford - Delawala Marketing is the place to be. Book a free 20-minute HVAC marketing audit today, no pitch deck, no long contracts, just specific fixes that grow your installs.",
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
    "Top rated HVAC marketing agency in Barrie, ON. Specializing in Google Ads, Local Services Ads, and automated follow-ups to get more furnace, AC, and heat pump installs every month for HVAC contractors in Barrie and Simcoe County.",
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
        <GTMHead />
        <MetaPixel />
        <GoogleAnalytics />
      </head>
      <body className="bg-bg text-text antialiased">
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
