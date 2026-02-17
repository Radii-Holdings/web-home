import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Risk Managed Trading Automation | Radii Labs",
    description: "Protect your capital with automated risk management. Set hard stops, trailing losses, and position sizing rules that execute without emotion.",
};

export default function RiskManagedTradingAutomation() {
    return (
        <main className="w-full flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center bg-dark text-light relative overflow-hidden">
                <div className="z-10 px-5 md:px-10">
                    <h1 className="font-bold text-4xl md:text-6xl mb-4 leading-normal!">
                        Automated Discipline, Every Trade
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-light/80">
                        Eliminate emotional errors. Let our risk engine handle your stops, targets, and sizing with mathematical precision.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-accent dark:bg-accentDark text-light font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Secure Your Capital
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
                <Image
                    src="/images/risk-managed-trading-automation.png"
                    alt="Secure Trading Shield"
                    fill
                    className="object-cover -z-10 opacity-40"
                    priority
                />
            </section>

            {/* Features & Outcomes */}
            <section className="py-20 px-5 md:px-20 w-full max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    The Safety Net You Can't Ignore
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Hard Stop Enforcement</h3>
                        <p className="text-lg">
                            Set max loss limits per day or per trade. If hit, the system automatically flattens positions and locks trading to prevent revenge trading.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Dynamic Position Sizing</h3>
                        <p className="text-lg">
                            Automatically calculate lot size based on account balance and stop distance, ensuring you never risk more than X% of equity on a single trade.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Volatility Adjustments</h3>
                        <p className="text-lg">
                            Smart stops that widen during high volatility (IV spikes) and tighten during calm periods, keeping you in the trade longer when it matters.
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
                            <summary className="font-semibold text-xl cursor-pointer">Can I override the system?</summary>
                            <p className="mt-4">You can set "Manager Approval" modes, but for maximum discipline, we recommend "Hard Lock" mode where rules cannot be bypassed intra-day.</p>
                        </details>
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">Does it work with existing strategies?</summary>
                            <p className="mt-4">Yes, our risk layer sits on top of any strategy, whether manual or automated, acting as a final gatekeeper.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-8">Trade Without Fear</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-dark text-light dark:bg-light dark:text-dark font-bold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Demo Risk Engine
                    </Link>
                </div>
            </section>
        </main>
    );
}
