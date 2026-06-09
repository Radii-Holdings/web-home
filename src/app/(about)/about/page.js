import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import { AboutPageSchema } from "@/src/components/StructuredData/PageSchemas";
import { buildPageMetadata } from "@/src/utils/pageMetadata";

export const metadata = buildPageMetadata({
  title: "About Radii Labs | Quant Research and Execution Workflows",
  description:
    "Learn how Radii Labs approaches quantitative research, broker-aware execution workflows, and trading risk controls for Indian and global market operators.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <AboutCoverSection />
      <Skills />
      <section className="w-full border-b-2 border-solid border-dark px-5 py-12 text-dark xs:px-10 sm:px-12 md:px-16 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold md:text-4xl">How we work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-dark/15 bg-light p-6">
              <h3 className="text-xl font-bold">Research first</h3>
              <p className="mt-3 leading-7 text-dark/75">
                We start with hypotheses, data quality, cost assumptions, and failure modes before a workflow is positioned as execution-ready.
              </p>
            </div>
            <div className="rounded-2xl border border-dark/15 bg-light p-6">
              <h3 className="text-xl font-bold">Execution aware</h3>
              <p className="mt-3 leading-7 text-dark/75">
                Broker access, routing rules, approval steps, and operational controls are treated as part of the product decision, not an afterthought.
              </p>
            </div>
            <div className="rounded-2xl border border-dark/15 bg-light p-6">
              <h3 className="text-xl font-bold">Risk clear</h3>
              <p className="mt-3 leading-7 text-dark/75">
                We avoid unsupported return claims. Radii Labs focuses on workflow discipline, monitoring, and guardrails for teams working with live-market risk.
              </p>
            </div>
          </div>
          <p className="mt-10 text-lg leading-8 text-dark/75">
            If you want a review of a broker workflow, research process, or execution control setup, reach us{" "}
            <Link href="/contact" className="font-semibold underline underline-offset-4">
              here
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
