import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import FAQSchema from "@/src/components/StructuredData/FAQSchema";

const faqs = [
    {
        question: "Can I trade INR pairs?",
        answer: "Yes. The platform supports INR currency pairs available through Indian exchanges, including USDINR, EURINR, GBPINR, and JPYINR.",
    },
    {
        question: "What about international pairs?",
        answer: "Eligible entities can discuss routing and execution workflows for major international currency pairs based on their broker access and compliance requirements.",
    },
];

export const metadata = {
    title: "Forex Algo Execution for Indian Traders",
    description: "Automate forex execution workflows for INR and global currency markets with broker-aware routing, latency controls, and risk management.",
    alternates: {
        canonical: "/forex-algo-execution-india",
    },
};

export default function ForexAlgoExecutionIndia() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Forex Algo Execution", url: "/forex-algo-execution-india" },
                ]}
            />
            <FAQSchema faqs={faqs} />
            <main className="w-full flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center bg-dark text-light relative overflow-hidden">
                <div className="z-10 px-5 md:px-10">
                    <h1 className="font-bold text-4xl md:text-6xl mb-4 leading-normal!">
                        Dominating Global Forex from India
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-light/80">
                        Connect to tier-1 liquidity providers and execute complex forex algorithms with Layr0 technology.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-accent text-light font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Request Access
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
                <Image
                    src="/images/forex-algo-execution-india.png"
                    alt="Forex Trading Globe connection"
                    fill
                    className="object-cover -z-10 opacity-40"
                    priority
                />
            </section>

            {/* Features & Outcomes */}
            <section className="py-20 px-5 md:px-20 w-full max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    The Forex Edge
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">24/5 Automated Operations</h3>
                        <p className="text-lg">
                            Forex never sleeps, and neither should your strategy. Our servers run 24/5 to capture opportunities in London, New York, and Asian sessions.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Cross-Currency Arbitrage</h3>
                        <p className="text-lg">
                            Identify and execute arbitrage opportunities between synthesized pairs and direct quotes across multiple liquidity venues.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
                        <p className="text-lg">
                            Built with Indian FEMA regulations in mind. Automated checks to ensure your exposure limits stay within compliant boundaries.
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
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-8">Upgrade Your FX Infrastructure</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-dark text-light font-bold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Contact FX Desk
                    </Link>
                </div>
            </section>
            </main>
        </>
    );
}
