import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import FAQSchema from "@/src/components/StructuredData/FAQSchema";

const faqs = [
    {
        question: "What brokers do you support?",
        answer: "We support major Indian brokers including Zerodha, Angel One, 5Paisa, and Interactive Brokers through API integrations.",
    },
    {
        question: "Do I need to know Python?",
        answer: "No. The platform supports no-code strategy workflows, while advanced teams can use Python for custom research and execution logic.",
    },
    {
        question: "Is historical data included?",
        answer: "Historical data can be used for backtesting strategies before deployment, including checks for slippage, costs, and risk rules.",
    },
];

export const metadata = {
    title: "Algo Trading Platform for Indian Brokers",
    description: "Build, backtest, and deploy rules-based trading strategies across Indian brokers with Radii Labs' algorithmic execution platform.",
    alternates: {
        canonical: "/algo-trading-platform-india",
    },
};

export default function AlgoTradingPlatformIndia() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Algo Trading Platform", url: "/algo-trading-platform-india" },
                ]}
            />
            <FAQSchema faqs={faqs} />
            <main className="w-full flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center bg-dark text-light relative overflow-hidden">
                <div className="z-10 px-5 md:px-10">
                    <h1 className="font-bold text-4xl md:text-6xl mb-4 leading-normal!">
                        India&apos;s Premier Algorithmic Trading Platform
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-light/80">
                        From concept to execution—automate your edge in Nifty, BankNifty, and Stocks.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-accent text-light font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Book a Demo
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
                <Image
                    src="/images/algo-trading-platform-india.png"
                    alt="Algo Trading Platform Interface"
                    fill
                    className="object-cover -z-10 opacity-40"
                    priority
                />
            </section>

            {/* Features & Outcomes */}
            <section className="py-20 px-5 md:px-20 w-full max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Why Automated Execution Wins
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Zero Latency Drag</h3>
                        <p className="text-lg">
                            Execute orders in milliseconds. Our infrastructure is co-located to ensure your strategy hits the market price you want, not the one you get after delay.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Risk-First Architecture</h3>
                        <p className="text-lg">
                            Embed hard stops, trailing losses, and position sizing rules directly into the code. Remove emotional overriding from the equation.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Multi-Leg Strategy Support</h3>
                        <p className="text-lg">
                            Handle complex option spreads (Straddles, Strangles, Iron Condors) with automated adjustments and leg-by-leg execution monitoring.
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
                <h2 className="text-4xl font-bold mb-8">Ready to Professionalize Your Trading?</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-dark text-light font-bold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Talk to our Team
                    </Link>
                    <Link
                        href="https://console.radii.in/"
                        target="_blank"
                        className="px-8 py-4 border border-dark font-bold rounded-full hover:bg-dark/10 transition-colors"
                    >
                        Launch Console
                    </Link>
                </div>
            </section>
            </main>
        </>
    );
}
