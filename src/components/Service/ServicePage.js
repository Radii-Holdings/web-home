import Image from "next/image";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import FAQSchema from "@/src/components/StructuredData/FAQSchema";
import TrackedLink from "@/src/components/Analytics/TrackedLink";

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    {eyebrow ? (
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-3xl font-bold text-dark md:text-5xl">{title}</h2>
    {description ? (
      <p className="mt-4 text-base leading-7 text-dark/70 md:text-lg">
        {description}
      </p>
    ) : null}
  </div>
);

const serviceJsonLd = (page) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: page.heroTitle,
  description: page.metaDescription,
  areaServed: ["India", "Global"],
  provider: {
    "@type": "Organization",
    name: "Radii Labs",
    url: "https://www.radii.in",
  },
  serviceType: page.label,
});

export default function ServicePage({ page }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: page.label, url: `/${page.slug}` },
        ]}
      />
      <FAQSchema faqs={page.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(page)) }}
      />
      <main className="w-full text-dark">
        <section className="relative flex min-h-[72vh] w-full items-center justify-center overflow-hidden bg-dark px-5 py-24 text-center text-light md:px-10">
          <Image
            src={page.image}
            alt={page.imageAlt}
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-light/75">
              {page.eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {page.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-light/85 md:text-2xl">
              {page.heroLead}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink
                href="/contact"
                eventParams={{
                  cta_location: "service_hero",
                  page_slug: page.slug,
                  cta_label: page.primaryCta,
                }}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-bold text-light transition hover:bg-accent/90"
              >
                {page.primaryCta}
              </TrackedLink>
              <TrackedLink
                href={page.secondaryHref}
                eventParams={{
                  cta_location: "service_hero_secondary",
                  page_slug: page.slug,
                  cta_label: page.secondaryCta,
                }}
                className="inline-flex items-center justify-center rounded-lg border border-light/70 px-6 py-3 font-bold text-light transition hover:bg-light hover:text-dark"
              >
                {page.secondaryCta}
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="w-full px-5 py-20 md:px-20">
          <SectionHeading
            eyebrow="Search intent fit"
            title="Built for the query users are actually searching"
            description="Each page now names the broker, workflow, and risk problem clearly, so Google has stronger title, heading, and body text to match against commercial searches."
          />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {page.proofPoints.map((point) => (
              <div key={point.title} className="rounded-lg border border-dark/15 p-6">
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="mt-3 leading-7 text-dark/70">{point.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-accent/5 px-5 py-20 md:px-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">
                Who this is for
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">
                Clear audience signals for buyers and Google
              </h2>
              <p className="mt-5 leading-7 text-dark/70">
                The page now explains who should click, what the workflow covers,
                and which operational checks matter before any trading system is
                used with live capital.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {page.audience.map((item) => (
                <div key={item} className="rounded-lg border border-dark/10 bg-light p-5">
                  <p className="font-medium leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-5 py-20 md:px-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Supported workflow"
                title="Broker and integration coverage"
                description="Broker names are visible on-page because commercial searches often include specific broker intent."
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {page.supportedBrokers.map((broker) => (
                  <div key={broker} className="rounded-lg border border-dark/15 px-4 py-3 font-semibold">
                    {broker}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Risk controls"
                title="Controls before execution"
                description="Trust-heavy finance pages need to show the limits, checks, and assumptions behind a product workflow."
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {page.riskControls.map((control) => (
                  <div key={control} className="rounded-lg bg-dark px-4 py-3 font-semibold text-light">
                    {control}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-dark px-5 py-20 text-light md:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-light/60">
                Demo workflow
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">
                What the demo should prove
              </h2>
              <p className="mt-5 leading-7 text-light/75">
                The demo path gives sales and Search Console testing one clear
                promise: show the actual workflow from idea to controlled execution.
              </p>
            </div>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {page.workflow.map((step, index) => (
                <li key={step} className="rounded-lg border border-light/20 p-5">
                  <span className="text-sm font-bold text-light/50">
                    Step {index + 1}
                  </span>
                  <p className="mt-2 text-lg font-semibold">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="w-full px-5 py-20 md:px-20">
          <div className="mx-auto max-w-5xl rounded-lg border border-dark/15 p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-accent">
              Fair comparison
            </p>
            <h2 className="text-3xl font-bold">{page.comparison.title}</h2>
            <p className="mt-5 text-lg leading-8 text-dark/75">
              {page.comparison.text}
            </p>
          </div>
        </section>

        <section className="w-full bg-accent/5 px-5 py-20 md:px-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="Frequently asked questions" />
            <div className="space-y-5">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-dark/10 bg-light p-6">
                  <summary className="cursor-pointer text-xl font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-7 text-dark/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-5 py-20 text-center md:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="rounded-lg border border-dark/15 bg-light p-5 text-sm leading-6 text-dark/65">
              {page.disclaimer}
            </p>
            <h2 className="mt-12 text-3xl font-bold md:text-5xl">
              Ready to review the workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-dark/70">
              Bring the broker, strategy, and risk-control questions you want answered.
            </p>
            <TrackedLink
              href="/contact"
              eventParams={{
                cta_location: "service_footer",
                page_slug: page.slug,
                cta_label: page.primaryCta,
              }}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-dark px-8 py-4 font-bold text-light transition hover:bg-dark/85"
            >
              {page.primaryCta}
            </TrackedLink>
          </div>
        </section>
      </main>
    </>
  );
}
