type CalendlyEventName =
  | "calendly.event_scheduled"
  | "calendly.profile_page_viewed"
  | "calendly.event_type_viewed"
  | "calendly.date_and_time_selected";

type CalendlyMessage = { event?: CalendlyEventName; payload?: unknown };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function isCalendlyEvent(e: MessageEvent): e is MessageEvent<CalendlyMessage> {
  return (
    typeof e.origin === "string" &&
    e.origin.indexOf("https://calendly.com") === 0 &&
    !!e.data &&
    typeof (e.data as CalendlyMessage).event === "string" &&
    (e.data as CalendlyMessage).event!.indexOf("calendly.") === 0
  );
}

export function trackCalendlyLead() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: "calendly_booking",
    });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}
