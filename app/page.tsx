import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { MobileStickyBar } from "@/components/sections/mobile-sticky-bar";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Services />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
