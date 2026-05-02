import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BRAND, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  const updated = "May 2026";
  return (
    <>
      <Header />
      <main className="bg-bg pt-32 pb-20 sm:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-fg">Last updated: {updated}</p>

          <div className="prose prose-base mt-8 max-w-none space-y-6 text-text">
            <section>
              <h2 className="text-xl font-semibold text-navy">1. Services</h2>
              <p className="mt-2 text-muted-fg">
                {BRAND} provides marketing services to HVAC contractors, including paid media
                management (Google Ads, Local Services Ads, Meta), SEO, landing page development,
                and marketing automation. The specific scope is defined in your signed engagement
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">2. Term and cancellation</h2>
              <p className="mt-2 text-muted-fg">
                Engagements begin with a 90-day initial term. After that, agreements continue
                month-to-month and may be cancelled with 30 days' written notice. No exit fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">3. Fees and ad spend</h2>
              <p className="mt-2 text-muted-fg">
                Management fees are billed monthly in advance. Ad spend on platforms (Google,
                Meta, LSA) is paid directly to those platforms by you and is separate from our
                management fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">4. No guarantee of results</h2>
              <p className="mt-2 text-muted-fg">
                Lead targets are goals, not guarantees. Results depend on factors outside our
                control, including service area, pricing, response time, reviews, and seasonal
                demand. We commit to clear reporting and honest communication.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">5. Ownership</h2>
              <p className="mt-2 text-muted-fg">
                You own all websites, ad accounts, CRM data, and assets created or configured for
                your business under your engagement. You retain access on cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">6. Liability</h2>
              <p className="mt-2 text-muted-fg">
                Our maximum liability for any claim arising out of an engagement is limited to
                the management fees you paid us in the three months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">7. Governing law</h2>
              <p className="mt-2 text-muted-fg">
                These terms are governed by the laws of the Province of Ontario, Canada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Contact</h2>
              <p className="mt-2 text-muted-fg">
                Questions about these terms? Email{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium text-amber-600 underline">
                  {EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
