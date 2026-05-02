"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-navy/[0.04] via-bg to-bg pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both text-4xl font-bold tracking-tight text-navy duration-700 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Get more local HVAC customers — <span className="text-amber">not more clicks.</span>
          </h1>
          <p
            className="mt-5 max-w-2xl animate-in fade-in slide-in-from-bottom-2 fill-mode-both text-base text-muted-fg delay-150 duration-700 sm:text-lg"
            style={{ animationDelay: "150ms" }}
          >
            We help Barrie & Simcoe County HVAC contractors book 8–12 furnace, AC, and heat pump
            installs every month using Google Ads, Local Services Ads, and automated follow-up.
          </p>
          <div
            className="mt-8 flex animate-in flex-col gap-3 fade-in slide-in-from-bottom-2 fill-mode-both duration-700 sm:flex-row sm:items-center"
            style={{ animationDelay: "300ms" }}
          >
            <CalendlyModal
              trigger={
                <Button variant="amber" size="xl" className="w-full sm:w-auto">
                  Book a free 20-min audit
                </Button>
              }
            />
            <Link
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-3 text-base font-medium text-navy transition-colors hover:text-amber-600"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </Link>
          </div>
          <p
            className="mt-6 animate-in fade-in fill-mode-both text-sm text-muted-fg duration-700"
            style={{ animationDelay: "450ms" }}
          >
            Based in Barrie, ON · No long contracts · Free audit, no pitch
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-navy/5 shadow-xl ring-1 ring-navy/10 lg:max-w-none">
            <Image
              src="/hero-image.png"
              alt="HVAC technician servicing a furnace in Barrie"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 ring-1 ring-inset ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
