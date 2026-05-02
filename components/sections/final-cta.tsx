import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import { Reveal } from "@/components/reveal";

export function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-amber py-20 text-white sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(11,35,64,0.25),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Grow Your HVAC Business in Barrie?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            20 minutes. No time wasting BS. Just specific fixes for your HVAC business that get real results.
          </p>
          <div className="mt-9 flex justify-center">
            <CalendlyModal
              trigger={
                <Button variant="white" size="xl" className="shadow-lg">
                  Book your free audit
                </Button>
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
