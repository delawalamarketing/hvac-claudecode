Build a production-ready single-page marketing website for Delawala Marketing (HVAC division), deploying to hvac.delawalamarketing.com.
Project setup

Initialize a fresh Next.js 15 project: npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*"
Install shadcn/ui: npx shadcn@latest init (choose Neutral base color, CSS variables: yes)
Add components: npx shadcn@latest add button accordion dialog sheet
Install: lucide-react, react-calendly
Use Geist font via next/font (already default in Next 15)
TypeScript strict mode on
Mobile-first, fully responsive, test breakpoints at 375px / 768px / 1280px
Lighthouse target: 90+ Performance, Accessibility, SEO, Best Practices

File structure
app/
  layout.tsx          // metadata, fonts, JSON-LD schema
  page.tsx            // composes all sections
  globals.css         // Tailwind + CSS variables for brand colors
components/
  sections/
    header.tsx
    hero.tsx
    benefits.tsx
    how-it-works.tsx
    services.tsx
    pricing.tsx
    faq.tsx
    final-cta.tsx
    footer.tsx
    mobile-sticky-bar.tsx
  ui/                 // shadcn components
  calendly-modal.tsx  // reusable Calendly dialog wrapper
lib/
  constants.ts        // BRAND, NAV_LINKS, PHONE, CALENDLY_URL, etc.
  utils.ts            // shadcn cn() helper
public/
  images/             // placeholders
Centralize all strings, phone numbers, Calendly URL, and nav config in lib/constants.ts so the client can edit one file.
Brand tokens (add to globals.css and tailwind.config.ts)
--color-navy: #0B2340
--color-bg: #FAFAF7
--color-amber: #F97316
--color-text: #0F172A
--color-muted: #475569
Tailwind extension: colors: { navy, bg, amber, ... }. Body line-height 1.6, headline tracking-tight.
Constants (lib/constants.ts)
tsexport const BRAND = "Delawala Marketing";
export const PHONE_DISPLAY = "(705) 555-0123";
export const PHONE_TEL = "+17055550123";
export const EMAIL = "hello@delawalamarketing.com";
export const CALENDLY_URL = "https://calendly.com/delawala-marketing/hvac-audit";
export const SITE_URL = "https://hvac.delawalamarketing.com";
export const ADDRESS = "Barrie, ON, Canada";
Single CTA rule
Every button on the entire site opens the Calendly modal except the phone link (tel:). Implement once via a <CalendlyModal trigger={<Button>...</Button>} /> wrapper using shadcn Dialog + react-calendly InlineWidget.

Section specs
Header (sticky, blurs on scroll)

Left: "Delawala Marketing" wordmark + small amber "HVAC" pill badge
Desktop center: nav links (Benefits, How it works, Plans, FAQ) — anchor links with smooth scroll
Right: phone (tel: link with phone icon) + amber "Book free audit" button
Mobile: shadcn Sheet hamburger menu, phone icon, amber book button

Hero

H1: "Get more local HVAC customers — not more clicks."
Subhead: "We help Barrie & Simcoe County HVAC contractors book 8–12 furnace, AC, and heat pump installs every month using Google Ads, Local Services Ads, and automated follow-up."
Primary CTA: amber "Book a free 20-min audit"
Secondary: phone link with icon
Trust line: "Based in Barrie, ON · No long contracts · Free audit, no pitch"
Right side: next/image placeholder, alt="HVAC technician servicing a furnace in Barrie", aspect-ratio 4/5
Background: subtle navy→white gradient (very light)

Benefits (4-column grid, 1-col mobile)
Heading: "Built for the way HVAC contractors actually grow"
Cards (lucide icon + title + 1–2 sentence body):

More booked installs — Wrench — "We focus on furnace, AC, and heat pump leads — not vanity traffic."
Verified Google leads — BadgeCheck — "Local Services Ads and the Google Verified badge put you above your competitors."
Built for Simcoe County — MapPin — "Local rebate programs, cottage-country demand, and Barrie's seasonality — we know all of it."
Pay for results, not clicks — Target — "LSA and conversion-focused campaigns mean every dollar tracks back to booked jobs."

How it works (4 alternating image/text rows on desktop, stacked mobile)
Heading: "From audit to booked jobs in 3 weeks"
Subhead: "A simple process. No mystery, no fluff."
Each step: numbered navy circle, title, body, image placeholder.

Free 20-min audit — "We screen-share your Google Business Profile, LSA, website, and competitors. You leave with 3–5 specific fixes."
Custom 90-day plan — "We map out exactly which campaigns to run, what budget you need, and what leads to expect."
Launch in 14 days — "We build the landing pages, set up LSA, configure Google Ads, and turn on automation."
Leads in week 3 — "Most Growth-tier clients see their first booked job from our work within 21 days of launch."

Services (3×2 desktop, 1×6 mobile)
Heading: "Everything you need to dominate local HVAC search"
Cards (lucide icon + title + 1-line):

Local Services Ads (ShieldCheck) — Setup, verification, and ongoing management of Google LSA.
Google Ads management (Search) — Furnace, AC, heat pump, and rebate-focused search campaigns.
Google Business Profile (Building2) — Optimization, posts, and review management.
Local SEO (TrendingUp) — Rankings for "HVAC Barrie", "furnace repair near me", and service-area pages.
Review automation (Star) — Auto-text customers after every job; collect 5-star reviews on autopilot.
Missed-call text-back (PhoneMissed) — Recover the 30%+ of after-hours leads your competitors lose.

Pricing (3 tier cards)
Heading: "Pick the plan that fits where you are"
Subhead: "All plans go month-to-month after a 90-day initial term. No long contracts."
Foundation — $1,500 CAD/mo + $2,500 setup

Best for: HVAC shops just getting found online
Lead target: 4–6 qualified leads/month
Features: Google Business Profile optimization · Local Services Ads setup & management · Review automation · Missed-call text-back · Monthly reporting
CTA: ghost "Book free audit"

Growth ⭐ Most Popular (amber border, "Most Popular" pill, slight shadow, scale slightly larger on desktop) — $4,500 CAD/mo

Best for: Established shops ready to grow installs
Lead target: 8–12 qualified leads/month
Features: Everything in Foundation · Google Ads management (furnace, AC, heat pump) · 3 conversion-focused landing pages · Rebate funnel (Greener Homes, HER+) · Weekly check-ins
CTA: amber filled "Book free audit"

Scale — $7,500 CAD/mo

Best for: Multi-truck operations dominating Simcoe
Lead target: 15–25 qualified leads/month
Features: Everything in Growth · Local SEO + monthly content · Meta Ads (retargeting + rebate campaigns) · Full CRM + maintenance plan automation · Bi-weekly strategy calls · Dedicated account lead
CTA: ghost "Book free audit"

Disclosure under cards (small muted text): "Ad spend (Google Ads, Meta, LSA) is paid directly to the platforms and is separate from management fees. We recommend $1,500–$5,000/month in ad spend depending on plan."
FAQ (shadcn Accordion type="single" collapsible)
Heading: "Questions before you book?"
Subhead: "Quick answers to what HVAC owners ask us most."
Use Plus/Minus lucide icons (override default chevron).

Why HVAC only? Won't I get better service from a generalist agency? — The opposite. We've studied HVAC buyer behaviour, rebate programs (Greener Homes, HER+, Home Renovation Savings), seasonal demand cycles, and the platforms your customers actually use. A generalist learns this on your dime. We already know furnace install CPLs in Ontario run $80–$150 on LSA, that AC install book rates average 24%, and that maintenance plan members deliver 2.3× the lifetime value.
How much does this actually cost — including ad spend? — Management fees range from $1,500 to $7,500/month. Ad spend is separate and paid directly to Google or Meta — we recommend $1,500–$5,000/month based on your plan. A typical Growth client invests $4,500 management + $2,500 ad spend = $7,000/month all-in. One extra furnace install pays for it.
Do you guarantee leads or results? — No honest agency guarantees a specific lead number — too many variables (service area, pricing, response time, reviews, season). What we do guarantee: clear monthly reporting, no long-term lock-in after the 90-day initial term, and a documented playbook so you always know what we're doing and why.
How long until I see leads? — LSA and Google Ads typically produce qualified leads within 2–3 weeks of launch. Local SEO compounds over 3–6 months. Most Growth-tier clients see their first booked job from our work in week 3.
Do I need a new website to work with you? — Not always. If your current site converts, we'll keep it and build dedicated landing pages for ad campaigns. If it's outdated or slow, we'll recommend a rebuild. We'll tell you straight on the audit call.
What's the difference between Google Ads and Local Services Ads? — LSA shows at the very top of search with a Google Verified badge — you only pay when a customer calls or messages. Google Ads gives you more control over keywords, landing pages, and copy but charges per click. Most HVAC shops should run both.
What happens on the free audit call? — 20 minutes, no pitch deck. We screen-share your Google Business Profile, LSA setup, website performance, and competitor positioning in Barrie/Simcoe. You leave with 3–5 specific things to fix — even if you never hire us.
Are you based in Barrie? — Yes. Local. We know cottage-country seasonality, Simcoe County rebate programs, and your customers' actual buying patterns. Happy to meet for coffee instead of Zoom.
Can I cancel? — After the 90-day initial term, all plans are month-to-month. 30 days written notice. No exit fees. You keep the website, ad accounts, and CRM data we built.

Below FAQ: centered small CTA — "Still have questions? Book a free 20-min audit →"
Final CTA band (full-width amber)

H2: "Ready to see what's possible?"
Subhead: "20 minutes. No pitch deck. Just specific fixes for your HVAC business."
Large white button: "Book your free audit"

Footer (navy bg, 4 cols desktop, accordion mobile)
Column 1 — Brand: wordmark · "Marketing built for Barrie HVAC contractors." · Barrie, ON, Canada · phone (clickable) · email (clickable)
Column 2 — Services: Local Services Ads · Google Ads Management · Google Business Profile · Local SEO · Review & Reputation · Marketing Automation
Column 3 — Plans: Foundation · Growth · Scale · Book a free audit
Column 4 — Company: About · Contact · Privacy Policy · Terms of Service
Headings amber, links muted white, hover white. Bottom bar above thin divider:

Left: "© 2025 Delawala Marketing. Proudly based in Barrie, ON."
Right: lucide Linkedin + Globe (Google Business Profile) icons

Mobile sticky bottom bar
Appears after scrolling past hero. Two equal-width buttons: phone (ghost) + "Book audit" (amber). Hide on desktop.

SEO & metadata (in app/layout.tsx)
tsexport const metadata = {
  title: "HVAC Marketing Barrie | Delawala Marketing",
  description: "We help Barrie & Simcoe County HVAC contractors book 8–12 furnace, AC, and heat pump installs every month. Free 20-min audit — no pitch.",
  metadataBase: new URL("https://hvac.delawalamarketing.com"),
  openGraph: { /* same title/desc, og image placeholder /og.png */ },
  alternates: { canonical: "https://hvac.delawalamarketing.com" },
  robots: { index: true, follow: true },
};
Add JSON-LD LocalBusiness schema in layout <script type="application/ld+json"> with name, address (Barrie, ON, CA), telephone, url.
Interactions

Smooth scroll on anchor nav (scroll-behavior: smooth in globals)
Sticky mobile bar appears after IntersectionObserver on hero exits viewport
Subtle fade-in/slide-up on scroll using Tailwind + IntersectionObserver hook (no framer-motion)
All CTAs open Calendly modal (single shared component)

Do NOT include

Carousels, testimonials, live chat, cookie banner
Multiple CTA destinations
Heavy animation libraries
Stock-photo handshake imagery (use neutral gray placeholders with descriptive alt text)


Build steps

Scaffold the project and install dependencies above.
Configure Tailwind tokens and globals.
Build lib/constants.ts first.
Build components/calendly-modal.tsx and shared Button variants.
Build sections in order: Header → Hero → Benefits → HowItWorks → Services → Pricing → FAQ → FinalCTA → Footer → MobileStickyBar.
Wire app/page.tsx and app/layout.tsx with metadata + JSON-LD.
Run npm run build and fix any type/lint errors.
Run npm run dev and verify mobile (375px) and desktop layouts.
Add a README.md with: how to edit lib/constants.ts, how to deploy to Vercel, how to connect hvac.delawalamarketing.com (CNAME to cname.vercel-dns.com).