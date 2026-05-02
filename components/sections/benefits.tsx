import { Reveal } from "@/components/reveal";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="benefits" className="bg-bg py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem]">
            Marketing Automation Built for the way HVAC contractors actually grow in Barrie
          </h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal as="li" key={b.title} delay={i * 80}>
                <article className="group h-full rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-md">
                  <div className="mb-5 grid size-11 place-items-center rounded-lg bg-amber/10 text-amber transition-colors group-hover:bg-amber group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-navy sm:text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-fg sm:text-[15px]">
                    {b.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
