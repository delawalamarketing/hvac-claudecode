import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  MapPin,
  PhoneMissed,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";

export const BRAND = "Delawala Marketing";
export const PHONE_DISPLAY = "(416) 505-0358";
export const PHONE_TEL = "+14165050358";
export const EMAIL = "rizwan@delawalamarketing.com";
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/delawala-marketing/hvac-audit";
export const SITE_URL = "https://hvac.delawalamarketing.com";
export const ADDRESS_REGION = "Barrie, ON, Canada";
export const AREAS_SERVED = ["Barrie, ON", "Simcoe County, ON"];

export const NAV_LINKS = [
  { label: "Benefits", href: "#benefits" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Plans", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Benefit = { icon: LucideIcon; title: string; body: string };
export const BENEFITS: Benefit[] = [
  {
    icon: Wrench,
    title: "More booked installs",
    body: "We focus on furnace, AC, and heat pump leads — not vanity traffic.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Google leads",
    body: "Local Services Ads and the Google Verified badge put you above your competitors.",
  },
  {
    icon: MapPin,
    title: "Built for Simcoe County",
    body: "Local rebate programs, cottage-country demand, and Barrie's seasonality — we know all of it.",
  },
  {
    icon: Target,
    title: "Pay for results, not clicks",
    body: "LSA and conversion-focused campaigns mean every dollar tracks back to booked jobs.",
  },
];

export type Step = { title: string; body: string };
export const STEPS: Step[] = [
  {
    title: "Free 20-min audit",
    body: "We screen-share your Google Business Profile, LSA, website, and competitors. You leave with 3–5 specific fixes.",
  },
  {
    title: "Custom 90-day plan",
    body: "We map out exactly which campaigns to run, what budget you need, and what leads to expect.",
  },
  {
    title: "Launch in 14 days",
    body: "We build the landing pages, set up LSA, configure Google Ads, and turn on automation.",
  },
  {
    title: "Leads in week 3",
    body: "Most Growth-tier clients see their first booked job from our work within 21 days of launch.",
  },
];

export type Service = { icon: LucideIcon; title: string; body: string };
export const SERVICES: Service[] = [
  {
    icon: ShieldCheck,
    title: "Local Services Ads",
    body: "Setup, verification, and ongoing management of Google LSA.",
  },
  {
    icon: Search,
    title: "Google Ads management",
    body: "Furnace, AC, heat pump, and rebate-focused search campaigns.",
  },
  {
    icon: Building2,
    title: "Google Business Profile",
    body: "Optimization, posts, and review management.",
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    body: 'Rankings for "HVAC Barrie", "furnace repair near me", and service-area pages.',
  },
  {
    icon: Star,
    title: "Review automation",
    body: "Auto-text customers after every job; collect 5-star reviews on autopilot.",
  },
  {
    icon: PhoneMissed,
    title: "Missed-call text-back",
    body: "Recover the 30%+ of after-hours leads your competitors lose.",
  },
];

export type Plan = {
  name: string;
  price: string;
  setup?: string;
  bestFor: string;
  leadTarget: string;
  features: string[];
  highlight?: boolean;
  ctaVariant: "amber" | "ghost";
};

export const PLANS: Plan[] = [
  {
    name: "Foundation",
    price: "$1,500 CAD/mo",
    setup: "+ $2,500 setup",
    bestFor: "HVAC shops just getting found online",
    leadTarget: "4–6 qualified leads/month",
    features: [
      "Google Business Profile optimization",
      "Local Services Ads setup & management",
      "Review automation",
      "Missed-call text-back",
      "Monthly reporting",
    ],
    ctaVariant: "ghost",
  },
  {
    name: "Growth",
    price: "$4,500 CAD/mo",
    bestFor: "Established shops ready to grow installs",
    leadTarget: "8–12 qualified leads/month",
    features: [
      "Everything in Foundation",
      "Google Ads management (furnace, AC, heat pump)",
      "3 conversion-focused landing pages",
      "Rebate funnel (Greener Homes, HER+)",
      "Weekly check-ins",
    ],
    highlight: true,
    ctaVariant: "amber",
  },
  {
    name: "Scale",
    price: "$7,500 CAD/mo",
    bestFor: "Multi-truck operations dominating Simcoe",
    leadTarget: "15–25 qualified leads/month",
    features: [
      "Everything in Growth",
      "Local SEO + monthly content",
      "Meta Ads (retargeting + rebate campaigns)",
      "Full CRM + maintenance plan automation",
      "Bi-weekly strategy calls",
      "Dedicated account lead",
    ],
    ctaVariant: "ghost",
  },
];

export const PRICING_DISCLOSURE =
  "Ad spend (Google Ads, Meta, LSA) is paid directly to the platforms and is separate from management fees. We recommend $1,500–$5,000/month in ad spend depending on plan.";

export const LEAD_TARGET_FOOTNOTE =
  "Lead targets are goals, not guarantees. Actual results vary by service area, pricing, response time, and seasonality.";

export type FAQ = { q: string; a: string };
export const FAQS: FAQ[] = [
  {
    q: "Why HVAC only? Won't I get better service from a generalist agency?",
    a: "The opposite. We've studied HVAC buyer behaviour, rebate programs (Greener Homes, HER+, Home Renovation Savings), seasonal demand cycles, and the platforms your customers actually use. A generalist learns this on your dime. In our experience, furnace install lead costs on LSA tend to be much lower than typical home-services CPCs, AC install book rates land in the mid-twenties percent range, and maintenance plan members deliver multiples of the lifetime value of one-off jobs.",
  },
  {
    q: "How much does this actually cost — including ad spend?",
    a: "Management fees range from $1,500 to $7,500/month. Ad spend is separate and paid directly to Google or Meta — we recommend $1,500–$5,000/month based on your plan. A typical Growth client invests $4,500 management + $2,500 ad spend = $7,000/month all-in. One extra furnace install pays for it.",
  },
  {
    q: "Do you guarantee leads or results?",
    a: "No honest agency guarantees a specific lead number — too many variables (service area, pricing, response time, reviews, season). What we do guarantee: clear monthly reporting, no long-term lock-in after the 90-day initial term, and a documented playbook so you always know what we're doing and why.",
  },
  {
    q: "How long until I see leads?",
    a: "LSA and Google Ads typically produce qualified leads within 2–3 weeks of launch. Local SEO compounds over 3–6 months. Most Growth-tier clients see their first booked job from our work in week 3.",
  },
  {
    q: "Do I need a new website to work with you?",
    a: "Not always. If your current site converts, we'll keep it and build dedicated landing pages for ad campaigns. If it's outdated or slow, we'll recommend a rebuild. We'll tell you straight on the audit call.",
  },
  {
    q: "What's the difference between Google Ads and Local Services Ads?",
    a: "LSA shows at the very top of search with a Google Verified badge — you only pay when a customer calls or messages. Google Ads gives you more control over keywords, landing pages, and copy but charges per click. Most HVAC shops should run both.",
  },
  {
    q: "What happens on the free audit call?",
    a: "20 minutes, no pitch deck. We screen-share your Google Business Profile, LSA setup, website performance, and competitor positioning in Barrie/Simcoe. You leave with 3–5 specific things to fix — even if you never hire us.",
  },
  {
    q: "Are you based in Barrie?",
    a: "Yes. Local. We know cottage-country seasonality, Simcoe County rebate programs, and your customers' actual buying patterns. Happy to meet for coffee instead of Zoom.",
  },
  {
    q: "Can I cancel?",
    a: "After the 90-day initial term, all plans are month-to-month. 30 days written notice. No exit fees. You keep the website, ad accounts, and CRM data we built.",
  },
];

export const FOOTER_SERVICES = [
  "Local Services Ads",
  "Google Ads Management",
  "Google Business Profile",
  "Local SEO",
  "Review & Reputation",
  "Marketing Automation",
];

export const FOOTER_PLANS = [
  { label: "Foundation", href: "#pricing" },
  { label: "Growth", href: "#pricing" },
  { label: "Scale", href: "#pricing" },
  { label: "Book a free audit", href: "#book" },
];

export const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
