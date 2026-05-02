# Implementation Kickstart — Delawala HVAC Marketing Site

Single-page marketing site for Delawala Marketing's HVAC division, deploying to **hvac.delawalamarketing.com**. This document is the build runbook — every decision is locked.

---

## 1. Locked configuration

| Key | Value |
|---|---|
| Brand | Delawala Marketing (HVAC division) |
| Domain | `hvac.delawalamarketing.com` |
| Phone (tel) | `+14165050358` |
| Phone (display) | `(416) 505-0358` |
| Email | `rizwan@delawalamarketing.com` |
| Address | Service-area only — Barrie & Simcoe County, ON, Canada |
| Calendly | `https://calendly.com/delawala-marketing/hvac-audit` |
| Site URL | `https://hvac.delawalamarketing.com` |
| Currency | CAD |
| Locale | en-CA (English only) |

### Brand tokens

```
--color-navy:  #0B2340
--color-bg:    #FAFAF7
--color-amber: #F97316
--color-text:  #0F172A
--color-muted: #475569
```

Body line-height `1.6`, headlines `tracking-tight`, font **Geist Sans** via the `geist` package.

---

## 2. Tech stack

- **Next.js 15** (App Router, TypeScript strict)
- **Tailwind v4** (CSS-first `@theme` config — no `tailwind.config.ts`)
- **shadcn/ui** — `button`, `accordion`, `dialog`, `sheet`
- **lucide-react** — icons
- **react-calendly** — Calendly InlineWidget
- **geist** — font package
- **Node 20 LTS** (`.nvmrc`)
- **npm** (package manager)
- **Prettier** + `prettier-plugin-tailwindcss`
- No framer-motion, no other animation libs

---

## 3. File tree

```
app/
  layout.tsx              fonts, metadata, JSON-LD (LocalBusiness + FAQPage), analytics
  page.tsx                composes all sections
  globals.css             Tailwind v4 @theme tokens, motion-safe utilities, scroll-behavior
  opengraph-image.tsx     dynamic OG (1200x630, navy bg + wordmark)
  icon.png                -> alias for /apple-icon.png (favicon)
  apple-icon.png          existing asset
  sitemap.ts
  robots.ts
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx        noindex
  terms/page.tsx          noindex
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
  ui/                     shadcn primitives
  calendly-modal.tsx      Dialog wrapper, lazy-mounts InlineWidget on open
  reveal.tsx              IntersectionObserver fade-up wrapper
  analytics/
    google-analytics.tsx  no-op unless NEXT_PUBLIC_GA_ID is set
    meta-pixel.tsx        no-op unless NEXT_PUBLIC_META_PIXEL_ID is set
lib/
  constants.ts            BRAND, PHONE_*, EMAIL, CALENDLY_URL, SITE_URL, NAV_LINKS, services/plans/faqs data
  calendly-tracking.ts    postMessage listener -> GA + Meta Lead events
  utils.ts                cn()
public/
  hero-image.png          existing
  apple-icon.png          existing (root, drives favicon + apple-touch + OG)
.env.example
.nvmrc
.prettierrc
next.config.ts
README.md
```

---

## 4. Build phases

### Phase 0 — Scaffold (≈5 min)

```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*"
npx shadcn@latest init               # Neutral base, CSS variables: yes
npx shadcn@latest add button accordion dialog sheet
npm i lucide-react react-calendly geist
npm i -D prettier prettier-plugin-tailwindcss
```

Move existing `apple-icon.png` and `hero-image.png` into the project (root for icon convention; `public/` for hero).

Add `.nvmrc` (`20`), `.prettierrc`, `engines.node ">=20"` in `package.json`.

### Phase 1 — Foundation

1. **`app/globals.css`** — Tailwind v4 `@theme` block with brand tokens, base body styles, `scroll-behavior: smooth`, `scroll-margin-top` for anchored sections, `motion-safe`/`motion-reduce` utilities.
2. **`lib/constants.ts`** — single source of truth. Includes:
   - `BRAND`, `PHONE_DISPLAY`, `PHONE_TEL`, `EMAIL`, `CALENDLY_URL`, `SITE_URL`, `ADDRESS_REGION`
   - `NAV_LINKS` array
   - `BENEFITS`, `SERVICES`, `STEPS`, `PLANS`, `FAQS` data arrays
3. **`lib/utils.ts`** — `cn()` helper (shadcn default).
4. **`lib/calendly-tracking.ts`** — listens for `calendly.event_scheduled` postMessage; fires `gtag('event', 'generate_lead')` and `fbq('track', 'Lead')` when available.

### Phase 2 — Shared components

1. **`components/calendly-modal.tsx`** — shadcn `Dialog` wrapper, accepts `trigger` prop, lazy-mounts `<InlineWidget />` only when `open === true`. Wires `useCalendlyEventListener` for analytics.
2. **`components/reveal.tsx`** — IntersectionObserver hook component, applies fade-up on first viewport entry, gated on `prefers-reduced-motion`.
3. **`components/analytics/google-analytics.tsx`** — uses `next/script`, only renders when `NEXT_PUBLIC_GA_ID` set.
4. **`components/analytics/meta-pixel.tsx`** — same pattern with `NEXT_PUBLIC_META_PIXEL_ID`.

### Phase 3 — Sections (build in this order)

1. **Header** — sticky, backdrop-blur on scroll past 12px. Desktop: wordmark + amber HVAC pill, center nav, phone + amber CTA. Mobile/tablet (≤ md): Sheet hamburger, phone icon, amber CTA.
2. **Hero** — H1, subhead, primary Calendly CTA, secondary phone link, trust line. Right column: `next/image` of `hero-image.png` with `priority`, `sizes`, aspect 4/5. Subtle navy→white gradient bg.
3. **Benefits** — 4-col desktop / 2-col tablet / 1-col mobile. Each card uses Reveal wrapper with stagger delay.
4. **How it works** — 4 alternating image/text rows desktop, stacked tablet/mobile. Numbered navy circles.
5. **Services** — 3×2 desktop, 2-col tablet, 1-col mobile.
6. **Pricing** — 3 tier cards, Growth scaled `lg:scale-105` with amber border + "Most Popular" pill. Disclosure under cards. Targets footnote: "Targets, not guarantees. Actual results vary by service area, pricing, and seasonality."
7. **FAQ** — shadcn Accordion `type="single" collapsible`, Plus/Minus icon override. Soften statistics in Q1 (remove specific CPL/book-rate/LTV numbers, replace with qualitative framing). Centered "Still have questions?" CTA below.
8. **Final CTA band** — full-width amber, white CTA opens Calendly modal.
9. **Footer** — navy bg, 4 cols desktop, accordion mobile/tablet. Bottom bar: copyright + LinkedIn + Globe (GBP) icons.
10. **MobileStickyBar** — phone (ghost) + amber Book CTA. IntersectionObserver on hero — slides up when hero exits viewport. `pb-[env(safe-area-inset-bottom)]`. Hidden on `md+`.

### Phase 4 — Stub pages

- **`/about`** — 2 paragraphs: who Delawala Marketing is, why HVAC-only, Barrie roots. Reuses Header + Footer.
- **`/contact`** — phone, email (mailto), Calendly CTA, service-area note. No form.
- **`/privacy`** — short PIPEDA-aligned template (data collected, cookies/analytics, contact info).
- **`/terms`** — short ToS template (service description, billing, no guarantees, governing law: Ontario).
- Privacy + Terms get `metadata.robots = { index: false, follow: true }`.

### Phase 5 — Metadata, schema, OG

1. **`app/layout.tsx`** — metadata block per PROMPT.md. JSON-LD scripts:
   - `LocalBusiness`: name, telephone, email, url, `areaServed: ["Barrie, ON", "Simcoe County, ON"]`, `priceRange: "$$"`, `sameAs: []` (placeholder for LinkedIn/GBP).
   - `FAQPage`: mirrors the 9 FAQ Q&A pairs.
2. **`app/opengraph-image.tsx`** — Next 15 dynamic OG via `ImageResponse`, navy bg + wordmark + tagline, 1200×630.
3. **`app/sitemap.ts`** — list `/`, `/about`, `/contact` (omit privacy/terms).
4. **`app/robots.ts`** — allow all, sitemap reference.

### Phase 6 — Config & infra

1. **`next.config.ts`** — image config; security headers (`X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`).
2. **`.env.example`**:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/delawala-marketing/hvac-audit
   NEXT_PUBLIC_GA_ID=
   NEXT_PUBLIC_META_PIXEL_ID=
   ```
3. **`README.md`** — editing constants, deploying to Vercel, DNS (CNAME `hvac` → `cname.vercel-dns.com`), setting GA + Meta IDs, Calendly event setup.

---

## 5. Animation inventory

All gated behind `prefers-reduced-motion: reduce`.

| Element | Animation |
|---|---|
| Header | backdrop-blur + bg fade-in past 12px scroll |
| Hero text | fade-up, 200ms stagger (H1 → sub → CTA → trust) |
| Hero image | fade-in only (no slide — protects LCP) |
| Section enter | fade + 8px slide-up on viewport entry, 500ms ease-out, once |
| Cards (Benefits / Services / Pricing) | hover lift `-translate-y-0.5` + shadow, 200ms |
| Pricing Growth tier | persistent `lg:scale-105`, amber border |
| FAQ chevron | Plus → Minus rotate 150ms |
| Mobile sticky bar | slide up from bottom 250ms when hero exits |
| Anchor nav | CSS smooth scroll + `scroll-margin-top` |
| Stub pages | 200ms fade on mount |

---

## 6. Responsive breakpoints

| Width | Layout notes |
|---|---|
| 375px (mobile) | Single column. Sheet menu. Sticky bottom bar. Footer accordion. Pricing stacked, Growth still highlighted. |
| 768px (tablet) | 2-col Benefits, 2-col Services, How-it-works stacked, pricing stacked. Sheet menu still. Sticky bottom bar still. |
| 1280px (desktop) | Full nav, 4-col Benefits, 3-col Services, alternating How-it-works rows, 3-col pricing with Growth scaled. No bottom bar. |

Validate each breakpoint in browser dev tools after build.

---

## 7. Verification checklist

Run before declaring complete:

- [ ] `npm run build` — zero type/lint errors
- [ ] `npm run dev` — visual pass at 375 / 768 / 1280
- [ ] All non-phone CTAs open Calendly modal
- [ ] Phone link initiates dial on mobile
- [ ] `tel:` and `mailto:` work
- [ ] Sticky header blurs after scroll
- [ ] Mobile sticky bar slides in past hero
- [ ] FAQ accordion opens one at a time
- [ ] All stub pages render and link back via header/footer
- [ ] Privacy + Terms have `noindex`
- [ ] LocalBusiness + FAQPage JSON-LD present in page source
- [ ] OG image renders at `/opengraph-image`
- [ ] Sitemap renders at `/sitemap.xml`, robots at `/robots.txt`
- [ ] `prefers-reduced-motion: reduce` disables fade-ups (test via DevTools rendering pane)
- [ ] Lighthouse on production build: 90+ Performance / Accessibility / SEO / Best Practices
- [ ] Color contrast: amber buttons use white text only on large/bold; body amber text avoided
- [ ] Hero image has `priority`; LCP element confirmed in Lighthouse trace
- [ ] No console errors / warnings

---

## 8. Deployment

1. Push to GitHub.
2. Import to Vercel, framework auto-detected.
3. Add env vars in Vercel: `NEXT_PUBLIC_CALENDLY_URL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.
4. Add domain `hvac.delawalamarketing.com` in Vercel project.
5. DNS at registrar: CNAME `hvac` → `cname.vercel-dns.com`.
6. Wait for SSL provisioning (auto).
7. Smoke-test production URL against the verification checklist.

---

## 9. Out of scope (per PROMPT.md)

Carousels, testimonials, live chat, cookie banner, multiple CTA destinations, framer-motion, stock-photo handshake imagery.

---

## 10. Build order summary

```
0. Scaffold + deps
1. globals.css + constants.ts + utils.ts + calendly-tracking.ts
2. CalendlyModal + Reveal + Analytics components
3. Header → Hero → Benefits → HowItWorks → Services → Pricing → FAQ → FinalCTA → Footer → MobileStickyBar
4. Stub pages (about, contact, privacy, terms)
5. layout.tsx metadata + JSON-LD, opengraph-image.tsx, sitemap.ts, robots.ts
6. next.config.ts, .env.example, README.md
7. Build + verify + deploy
```
