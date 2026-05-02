import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import { Reveal } from "@/components/reveal";
import { LEAD_TARGET_FOOTNOTE, PLANS, PRICING_DISCLOSURE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem]">
            Pick the plan that fits where you are
          </h2>
          <p className="mt-4 text-base text-muted-fg sm:text-lg">
            All plans go month-to-month after a 90-day initial term. No long contracts.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-7">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="flex">
              <article
                className={cn(
                  "relative flex w-full flex-col rounded-2xl border bg-white p-7 transition-all duration-300 sm:p-8",
                  plan.highlight
                    ? "border-amber shadow-lg ring-1 ring-amber/40 lg:scale-105 lg:shadow-xl"
                    : "border-border hover:-translate-y-0.5 hover:shadow-md",
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular
                  </span>
                )}

                <header>
                  <h3 className="text-xl font-bold tracking-tight text-navy">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-fg">{plan.bestFor}</p>
                </header>

                <div className="mt-6">
                  <p className="text-3xl font-bold tracking-tight text-navy sm:text-[2rem]">
                    {plan.price}
                  </p>
                  {plan.setup && (
                    <p className="mt-1 text-sm text-muted-fg">{plan.setup}</p>
                  )}
                  <p className="mt-3 inline-flex items-center rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber-600">
                    Target: {plan.leadTarget}
                  </p>
                </div>

                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-text">
                      <Check className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <CalendlyModal
                    trigger={
                      <Button
                        variant={plan.ctaVariant === "amber" ? "amber" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        Book free audit
                      </Button>
                    }
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-2 text-center text-xs text-muted-fg">
          <p>{PRICING_DISCLOSURE}</p>
          <p>{LEAD_TARGET_FOOTNOTE}</p>
        </div>
      </div>
    </section>
  );
}
