import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import { ADDRESS_REGION, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `${BRAND} is a Barrie-based marketing agency built exclusively for HVAC contractors in Simcoe County and across Ontario.`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-bg pt-32 pb-20 sm:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in fill-mode-both duration-500">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber">
              About
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Marketing built for HVAC, by people who know HVAC.
            </h1>

            <div className="prose prose-lg mt-8 max-w-none text-base leading-relaxed text-text sm:text-lg">
              <p>
                {BRAND} is a Barrie-based marketing agency built exclusively for HVAC
                contractors. We don't take dental clients. We don't take roofers. We don't take
                lawyers. The only businesses we help are the furnace, AC, and heat pump installers
                who keep Simcoe County warm in January and cool in July.
              </p>
              <p className="mt-5">
                Why so narrow? Because HVAC has its own rebate programs (Greener Homes, HER+,
                Home Renovation Savings), its own seasonal demand cycles, its own buyer
                psychology — and most agencies learn all of that on a contractor's dime. We
                already know what an LSA-qualified furnace lead looks like, how to build a heat
                pump rebate funnel that actually converts, and why the first 60 seconds after a
                missed call decide whether you book the install or your competitor does.
              </p>
              <p className="mt-5">
                We're based in {ADDRESS_REGION}. We work month-to-month after a 90-day initial
                term. We tell you straight when something isn't working. And we'd rather lose a
                client than oversell results we can't deliver.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CalendlyModal
                trigger={<Button variant="amber" size="lg">Book a free 20-min audit</Button>}
              />
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
