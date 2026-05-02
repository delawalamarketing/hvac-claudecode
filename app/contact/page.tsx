import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import {
  ADDRESS_REGION,
  AREAS_SERVED,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Delawala Marketing — book a free 20-minute HVAC audit, call us, or send an email.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-bg pt-32 pb-20 sm:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in fill-mode-both duration-500">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">Contact</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Let's talk about your HVAC business.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-fg sm:text-lg">
              The fastest way to start is to book the free 20-minute audit. If you'd rather call
              or email first, all our details are below — we typically reply same-day on
              weekdays.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-white p-6">
                <div className="mb-3 grid size-10 place-items-center rounded-lg bg-amber/10 text-amber">
                  <Phone className="size-5" />
                </div>
                <h2 className="text-base font-semibold text-navy">Call</h2>
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="mt-1 block text-base text-text hover:text-amber-600"
                >
                  {PHONE_DISPLAY}
                </Link>
                <p className="mt-1 text-sm text-muted-fg">Mon–Fri, 9am–6pm ET</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6">
                <div className="mb-3 grid size-10 place-items-center rounded-lg bg-amber/10 text-amber">
                  <Mail className="size-5" />
                </div>
                <h2 className="text-base font-semibold text-navy">Email</h2>
                <Link
                  href={`mailto:${EMAIL}`}
                  className="mt-1 block break-all text-base text-text hover:text-amber-600"
                >
                  {EMAIL}
                </Link>
                <p className="mt-1 text-sm text-muted-fg">Same-day reply, weekdays</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                <div className="mb-3 grid size-10 place-items-center rounded-lg bg-amber/10 text-amber">
                  <MapPin className="size-5" />
                </div>
                <h2 className="text-base font-semibold text-navy">Service area</h2>
                <p className="mt-1 text-base text-text">{ADDRESS_REGION}</p>
                <p className="mt-1 text-sm text-muted-fg">
                  Serving {AREAS_SERVED.join(" · ")} and surrounding communities.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <CalendlyModal
                trigger={<Button variant="amber" size="lg">Book a free 20-min audit</Button>}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
