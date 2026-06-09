import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import { ContactPageSchema } from "@/src/components/StructuredData/PageSchemas";
import { buildPageMetadata } from "@/src/utils/pageMetadata";


export const metadata = buildPageMetadata({
  title: "Contact Radii Labs | Research, Platform, and Workflow Reviews",
  description:
    "Connect with Radii Labs for research reviews, product walkthroughs, partnership inquiries, and algorithmic trading workflow discussions.",
  path: "/contact",
});


export default function Contact() {
  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <section className="w-full min-h-[75vh] h-auto border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light"><LottieAnimation /></div>


        <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
          <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl">Talk to Radii Labs about research, routing, or execution controls</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-dark/75">
            Use this form for platform walkthrough requests, service discovery calls, broker workflow questions, and partnership inquiries.
          </p>
          <div className="mt-4 mb-8 space-y-2">
            <p className="font-medium text-lg">Request a platform walkthrough</p>
            <p className="font-medium text-lg">Get a strategy suitability call</p>
            <p className="font-medium text-lg">Partnership and enterprise inquiries</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
