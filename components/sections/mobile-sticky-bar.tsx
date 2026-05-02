"use client";

import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileStickyBar() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 shadow-lg backdrop-blur-md transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <Link
          href={`tel:${PHONE_TEL}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-navy/20 px-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="size-4" />
          Call
        </Link>
        <CalendlyModal
          trigger={
            <Button variant="amber" size="lg" className="h-12 w-full">
              Book audit
            </Button>
          }
        />
      </div>
    </div>
  );
}
