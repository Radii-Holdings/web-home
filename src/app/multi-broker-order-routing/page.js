import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import FAQSchema from "@/src/components/StructuredData/FAQSchema";

const faqs = [
    {
        question: "Does this add latency?",
        answer: "The routing layer is designed to keep additional latency low while improving reliability, broker redundancy, and execution control.",
    },
    {
        question: "Is it compatible with manual trading?",
        answer: "Yes. Teams can use a hybrid workflow where manual orders and automated strategies pass through the same broker-aware routing infrastructure.",
    },
];

export const metadata = {
    title: "Multi-Broker Order Routing for Trading Teams",
    description: "Route orders across multiple brokers from one execution layer to improve redundancy, reporting, and broker-aware trading operations.",
    alternates: {
        canonical: "/multi-broker-order-routing",
    },
};

export default function MultiBrokerOrderRouting() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Multi-Broker Order Routing", url: "/multi-broker-order-routing" },
                ]}
            />
            <FAQSchema faqs={faqs} />
            <main className="w-full flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center bg-dark text-light relative overflow-hidden">
                <div className="z-10 px-5 md:px-10">
                    <h1 className="font-bold text-4xl md:text-6xl mb-4 leading-normal!">
                        Unified Execution, Multiple Counterparties
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-light/80">
                        Route orders intelligently across Zerodha, Angel One, Interactive Brokers, and more from one central engine.
                    </p>

                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
                <Image
                    src="/images/multi-broker-order-routing.png"
                    alt="Multi Broker Routing Network"
                    fill
                    className="object-cover -z-10 opacity-40"
                    priority
                />
            </section>

            {/* Features & Outcomes */}
            <section className="py-20 px-5 md:px-20 w-full max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Why Centralize Routing?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Redundancy & Uptime</h3>
                        <p className="text-lg">
                            If one broker&apos;s API goes down, our system automatically reroutes or halts orders based on your configuration, protecting you from technical failures.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Smart Order Routing</h3>
                        <p className="text-lg">
                            Configure rules to send specific strategies to specific brokers based on margin benefits, commission structures, or execution speed.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Consolidated Reporting</h3>
                        <p className="text-lg">
                            View your net P&L and exposure across all accounts in a single dashboard, rather than toggling between multiple broker apps.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-accent/5 w-full">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="p-6 bg-light rounded-lg shadow-sm">
                                <summary className="font-semibold text-xl cursor-pointer">{faq.question}</summary>
                                <p className="mt-4">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            href="https://console.radii.in/"
                            className="inline-block px-6 py-3 bg-accent text-light font-bold rounded-full border border-dark hover:scale-105 transition-transform"
                        >
                            Start Trading Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-8">Unify Your Trading Operations</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-dark text-light font-bold rounded-full border border-dark hover:scale-105 transition-transform"
                    >
                        Discuss Integration
                    </Link>
                </div>
            </section>
            </main>
        </>
    );
}
