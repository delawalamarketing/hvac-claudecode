import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BRAND, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  const updated = "May 2026";
  return (
    <>
      <Header />
      <main className="bg-bg pt-32 pb-20 sm:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-fg">Last updated: {updated}</p>

          <div className="prose prose-base mt-8 max-w-none space-y-6 text-text">
            <section>
              <h2 className="text-xl font-semibold text-navy">Who we are</h2>
              <p className="mt-2 text-muted-fg">
                {BRAND} ("we", "us") operates this website to market our HVAC marketing
                services. This policy explains what information we collect and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">What we collect</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-fg">
                <li>
                  Information you provide directly — name, email, phone, business details when
                  you book a call or contact us.
                </li>
                <li>
                  Standard analytics data — pages visited, device type, referrer, and approximate
                  location (via Google Analytics, with IP anonymisation enabled).
                </li>
                <li>
                  Conversion events — when you complete a Calendly booking, we record that as a
                  lead event in Google Analytics and Meta.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">How we use it</h2>
              <p className="mt-2 text-muted-fg">
                We use this information to schedule meetings, follow up on enquiries, and improve
                our marketing. We do not sell or rent your information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Cookies and tracking</h2>
              <p className="mt-2 text-muted-fg">
                We use first-party and third-party cookies for analytics (Google Analytics) and
                conversion measurement (Meta Pixel). You can opt out by adjusting your browser
                settings or installing a tracking-blocking extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Your rights (PIPEDA)</h2>
              <p className="mt-2 text-muted-fg">
                Under Canada's Personal Information Protection and Electronic Documents Act, you
                may request access to, correction of, or deletion of your personal information at
                any time. Contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium text-amber-600 underline">
                  {EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Changes</h2>
              <p className="mt-2 text-muted-fg">
                We may update this policy. The "last updated" date above will reflect any
                changes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
