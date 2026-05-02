"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Globe, Linkedin } from "lucide-react";
import {
  ADDRESS_REGION,
  BRAND,
  EMAIL,
  FOOTER_COMPANY,
  FOOTER_PLANS,
  FOOTER_SERVICES,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

type Column = {
  title: string;
  items: { label: string; href?: string }[];
};

const SERVICE_COLUMN: Column = {
  title: "Services",
  items: FOOTER_SERVICES.map((s) => ({ label: s, href: "#services" })),
};

const PLANS_COLUMN: Column = {
  title: "Plans",
  items: FOOTER_PLANS,
};

const COMPANY_COLUMN: Column = {
  title: "Company",
  items: FOOTER_COMPANY,
};

function MobileColumn({ col }: { col: Column }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left text-sm font-bold uppercase tracking-wider text-amber"
      >
        {col.title}
        <ChevronDown
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <ul
        className={cn(
          "grid overflow-hidden transition-all duration-300",
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <li className="min-h-0">
          <ul className="space-y-2 pb-2">
            {col.items.map((it) => (
              <li key={it.label}>
                {it.href ? (
                  <Link
                    href={it.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {it.label}
                  </Link>
                ) : (
                  <span className="text-sm text-white/70">{it.label}</span>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

function DesktopColumn({ col }: { col: Column }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber">{col.title}</h3>
      <ul className="mt-5 space-y-3">
        {col.items.map((it) => (
          <li key={it.label}>
            {it.href ? (
              <Link
                href={it.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {it.label}
              </Link>
            ) : (
              <span className="text-sm text-white/70">{it.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* Desktop / tablet grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">{BRAND}</span>
              <span className="rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                HVAC
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Marketing built for Barrie HVAC contractors.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              <li>{ADDRESS_REGION}</li>
              <li>
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="transition-colors hover:text-white"
                >
                  {PHONE_DISPLAY}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </Link>
              </li>
            </ul>
          </div>
          <DesktopColumn col={SERVICE_COLUMN} />
          <DesktopColumn col={PLANS_COLUMN} />
          <DesktopColumn col={COMPANY_COLUMN} />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">{BRAND}</span>
              <span className="rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                HVAC
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Marketing built for Barrie HVAC contractors.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              <li>{ADDRESS_REGION}</li>
              <li>
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="transition-colors hover:text-white"
                >
                  {PHONE_DISPLAY}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <MobileColumn col={SERVICE_COLUMN} />
            <MobileColumn col={PLANS_COLUMN} />
            <MobileColumn col={COMPANY_COLUMN} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {BRAND}. Proudly based in Barrie, ON.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="grid size-9 place-items-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-amber hover:text-white"
            >
              <Linkedin className="size-4" />
            </Link>
            <Link
              href="#"
              aria-label="Google Business Profile"
              className="grid size-9 place-items-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-amber hover:text-white"
            >
              <Globe className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
