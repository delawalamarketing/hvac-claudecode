import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/calendly-modal";
import { Reveal } from "@/components/reveal";
import { FAQS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="bg-bg py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem]">
            Answers to Common Marketing Questions from HVAC Contractors in Barrie
          </h2>
          <p className="mt-4 text-base text-muted-fg sm:text-lg">
            We get asked these questions a lot. Here are the straightforward answers.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <CalendlyModal
            trigger={
              <Button variant="ghost" className="group">
                Still have questions? Book a free 20-min audit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
