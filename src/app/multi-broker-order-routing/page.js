import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Multi Broker Order Routing | Radii Labs",
    description: "Seamlessly route orders across multiple brokers from a single interface. Optimize execution quality and diversify counterparty risk.",
};

export default function MultiBrokerOrderRouting() {
    return (
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
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Redundancy & Uptime</h3>
                        <p className="text-lg">
                            If one broker's API goes down, our system automatically reroutes or halts orders based on your configuration, protecting you from technical failures.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Smart Order Routing</h3>
                        <p className="text-lg">
                            Configure rules to send specific strategies to specific brokers based on margin benefits, commission structures, or execution speed.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Consolidated Reporting</h3>
                        <p className="text-lg">
                            View your net P&L and exposure across all accounts in a single dashboard, rather than toggling between multiple broker apps.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-accent/5 dark:bg-accentDark/5 w-full">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">Does this add latency?</summary>
                            <p className="mt-4">Our routing engine adds negligible microsecond latency, far outweighed by the benefits of reliability and optimization.</p>
                        </details>
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">Is it compatible with manual trading?</summary>
                            <p className="mt-4">Yes, you can use our hybrid terminal to place manual orders that are routed through the same smart infrastructure.</p>
                        </details>
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            href="https://console.radii.in/"
                            className="inline-block px-6 py-3 bg-accent dark:bg-accentDark text-light font-bold rounded-full border border-dark dark:border-light hover:scale-105 transition-transform"
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
                        className="px-6 py-3 bg-dark text-light dark:bg-light dark:text-dark font-bold rounded-full border border-dark dark:border-light hover:scale-105 transition-transform"
                    >
                        Discuss Integration
                    </Link>
                </div>
            </section>
        </main>
    );
}
