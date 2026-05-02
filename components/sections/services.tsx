import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="bg-bg py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem]">
            Everything you need to dominate local HVAC search
          </h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal as="li" key={s.title} delay={i * 60}>
                <article className="group flex h-full gap-4 rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-md">
                  <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-fg">{s.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
