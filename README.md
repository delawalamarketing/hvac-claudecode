# Delawala HVAC Marketing Site

Single-page marketing site for Delawala Marketing's HVAC division. Built with Next.js 15 (App Router), Tailwind CSS v4, shadcn/ui, and TypeScript.

Production target: **hvac.delawalamarketing.com**

---

## Quick start

```bash
nvm use            # uses .nvmrc → Node 20
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Editing site content

Almost all text, navigation, services, plans, and FAQs are centralised in:

- `lib/constants.ts` — phone, email, Calendly URL, brand strings, navigation, benefits, services, plans, FAQs, footer columns

Brand colours and tokens live in `app/globals.css`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose | Required? |
|---|---|---|
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly event link used by the modal | Optional (defaults to constant) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) | Optional |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID | Optional |

When the GA / Meta IDs are blank, the analytics scripts do not render. Calendly bookings automatically fire `gtag('event', 'generate_lead')` and `fbq('track', 'Lead')` when the corresponding scripts are loaded.

## Scripts

```bash
npm run dev          # dev server
npm run build        # production build
npm run start        # serve production build
npm run lint         # ESLint
npm run format       # Prettier write
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, **Import Project** → select the repo. Framework auto-detects as Next.js.
3. Add environment variables under **Project → Settings → Environment Variables**:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_META_PIXEL_ID`
4. Deploy.

### Connecting `hvac.delawalamarketing.com`

1. In Vercel: **Project → Settings → Domains** → add `hvac.delawalamarketing.com`.
2. At your DNS provider for `delawalamarketing.com`, add a `CNAME`:
   - **Name**: `hvac`
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: default (auto)
3. Wait for SSL provisioning (usually < 2 minutes).

## Routes

| Path | Description |
|---|---|
| `/` | Marketing landing page |
| `/about` | Company background |
| `/contact` | Contact details + Calendly CTA |
| `/privacy` | Privacy policy (noindex) |
| `/terms` | Terms of service (noindex) |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots |
| `/opengraph-image` | Dynamically generated OG image |

## Tech notes

- **Tailwind v4** uses CSS-first configuration via `@theme inline` in `app/globals.css`. There is no `tailwind.config.ts`.
- **Animations** are CSS + IntersectionObserver only (no framer-motion). All scroll-triggered animations go through `components/reveal.tsx` and respect `prefers-reduced-motion`.
- **Calendly** — every CTA except `tel:` links opens a shadcn Dialog containing `react-calendly`'s `InlineWidget`. The widget is mounted only on open.
- **Icons** — `lucide-react`.
- **Font** — Geist Sans via the `geist` npm package.
- **Logo / favicon / apple icon** — `app/icon.png` and `app/apple-icon.png` use Next 15's file conventions.
- **OG image** — `app/opengraph-image.tsx` is rendered at the edge with `next/og`.

## Accessibility

- Mobile-first, validated at 375 / 768 / 1280 breakpoints.
- WCAG-aware focus rings on all interactive elements.
- `prefers-reduced-motion` disables all scroll/fade animations.
- Mobile sticky bar respects `env(safe-area-inset-bottom)` on iOS.
