"use client";

import * as React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCalendlyLead } from "@/lib/calendly-tracking";

type CalendlyModalProps = {
  trigger: React.ReactNode;
  url?: string;
};

export function CalendlyModal({ trigger, url = CALENDLY_URL }: CalendlyModalProps) {
  const [open, setOpen] = React.useState(false);

  useCalendlyEventListener({
    onEventScheduled: () => {
      trackCalendlyLead();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-[90vh] max-h-[820px] w-[95vw] max-w-3xl overflow-hidden p-0 sm:w-[90vw]">
        <DialogTitle className="sr-only">Book a free 20-minute HVAC marketing audit</DialogTitle>
        <DialogDescription className="sr-only">
          Schedule a Calendly meeting with Delawala Marketing.
        </DialogDescription>
        {open ? (
          <div className="h-full w-full">
            <InlineWidget
              url={url}
              styles={{ height: "100%", width: "100%", minHeight: "640px" }}
              pageSettings={{
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                hideGdprBanner: true,
                primaryColor: "0b2340",
              }}
            />
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
