"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { CalendlyModal } from "@/components/calendly-modal";
import { BRAND, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-bg/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${BRAND} home`}>
          <span className="text-base font-semibold tracking-tight text-navy sm:text-lg">
            {BRAND}
          </span>
          <span className="rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
            HVAC
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-navy/80 transition-colors hover:text-amber-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-amber-600"
          >
            <Phone className="size-4" aria-hidden />
            <span>{PHONE_DISPLAY}</span>
          </Link>
          <CalendlyModal trigger={<Button variant="amber">Book free audit</Button>} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="grid size-10 place-items-center rounded-md text-navy hover:bg-navy/5"
          >
            <Phone className="size-5" />
          </Link>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="grid size-10 place-items-center rounded-md text-navy hover:bg-navy/5"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 max-w-full p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mb-8 flex items-center gap-2">
                <span className="text-base font-semibold text-navy">{BRAND}</span>
                <span className="rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  HVAC
                </span>
              </div>
              <nav>
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 px-3 text-sm font-medium text-navy"
                >
                  <Phone className="size-4" />
                  {PHONE_DISPLAY}
                </Link>
                <CalendlyModal
                  trigger={
                    <Button
                      variant="amber"
                      size="lg"
                      onClick={() => setMenuOpen(false)}
                      className="w-full"
                    >
                      Book free audit
                    </Button>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
