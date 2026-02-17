import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Quant Research Services India | Radii Labs",
    description: "Outsource your quantitative research requirements. We build mathematical models, backtest strategies, and provide data-driven market intelligence.",
};

export default function QuantResearchServicesIndia() {
    return (
        <main className="w-full flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center bg-dark text-light relative overflow-hidden">
                <div className="z-10 px-5 md:px-10">
                    <h1 className="font-bold text-4xl md:text-6xl mb-4 leading-normal!">
                        Data-Driven Intelligence for Modern Markets
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-light/80">
                        Leverage our quantitative research team to build, validate, and optimize your trading hypotheses.
                    </p>

                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
                <Image
                    src="/images/quant-research-services-india.png"
                    alt="Quant Analyst Workspace"
                    fill
                    className="object-cover -z-10 opacity-40"
                    priority
                />
            </section>

            {/* Features & Outcomes */}
            <section className="py-20 px-5 md:px-20 w-full max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Research as a Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Signal Generation</h3>
                        <p className="text-lg">
                            We develop custom signals based on alternative data, statistical arbitrage, and machine learning models tailored to your asset class.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Rigorous Backtesting</h3>
                        <p className="text-lg">
                            Avoid overfitting. Our backtesting engines account for slippage, commission, and market impact to give you realistic performance expectations.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Portfolio Optimization</h3>
                        <p className="text-lg">
                            Use Mean-Variance Optimization and Risk Parity logic to allocate capital efficiently across your strategies and assets.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-accent/5 dark:bg-accentDark/5 w-full">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="mb-10 text-center">
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-3 bg-accent dark:bg-accentDark text-light font-bold rounded-full border border-dark dark:border-light hover:scale-105 transition-transform"
                        >
                            Consult a Quant
                        </Link>
                    </div>
                    <div className="space-y-6">
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">Who owns the IP?</summary>
                            <p className="mt-4">For custom consulting engagements, the strategy intellectual property (IP) belongs to the client.</p>
                        </details>
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">What asset classes do you cover?</summary>
                            <p className="mt-4">We specialize in Equities, Futures, Options, and FX markets.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-8">Start Your Research Project</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-dark text-light dark:bg-light dark:text-dark font-bold rounded-full border border-dark dark:border-light hover:scale-105 transition-transform"
                    >
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
