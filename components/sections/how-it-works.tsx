import { Reveal } from "@/components/reveal";
import { STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem]">
            Marketing Done Right. For HVAC Companies in Barrie.
          </h2>
          <p className="mt-4 text-base text-muted-fg sm:text-lg">
            We’ve built the exact system we would want if we owned an HVAC business. Transparent pricing, clear communication, and a focus on real ROI — not vanity metrics.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-14 lg:space-y-20">
          {STEPS.map((step, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal as="li" key={step.title}>
                <article
                  className={cn(
                    "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
                  )}
                >
                  <div
                    className={cn(
                      "lg:col-span-6",
                      reverse ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        aria-hidden
                        className="grid size-12 shrink-0 place-items-center rounded-full bg-navy text-base font-bold text-white shadow-md sm:size-14 sm:text-lg"
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-fg">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "lg:col-span-6",
                      reverse ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <div
                      aria-hidden
                      className="relative aspect-[5/3] overflow-hidden rounded-xl bg-gradient-to-br from-navy/5 via-bg to-amber/10 ring-1 ring-border"
                    >
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="text-7xl font-black tracking-tight text-navy/10 sm:text-8xl">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
