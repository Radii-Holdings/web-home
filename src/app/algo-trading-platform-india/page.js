import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/src/components/Contact/ContactForm";

export const metadata = {
    title: "Algo Trading Platform India | Radii Labs",
    description: "Automate your trading strategies with Radii Labs' advanced algorithmic platform for Indian markets. Backtest, deploy, and execute with precision.",
};

export default function AlgoTradingPlatformIndia() {
    return (
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
                        className="inline-block px-8 py-4 bg-accent dark:bg-accentDark text-light font-bold rounded-full hover:scale-105 transition-transform"
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
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Zero Latency Drag</h3>
                        <p className="text-lg">
                            Execute orders in milliseconds. Our infrastructure is co-located to ensure your strategy hits the market price you want, not the one you get after delay.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Risk-First Architecture</h3>
                        <p className="text-lg">
                            Embed hard stops, trailing losses, and position sizing rules directly into the code. Remove emotional overriding from the equation.
                        </p>
                    </div>
                    <div className="p-8 border border-dark/20 dark:border-light/20 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Multi-Leg Strategy Support</h3>
                        <p className="text-lg">
                            Handle complex option spreads (Straddles, Strangles, Iron Condors) with automated adjustments and leg-by-leg execution monitoring.
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
                            <summary className="font-semibold text-xl cursor-pointer">What brokers do you support?</summary>
                            <p className="mt-4">We support major Indian brokers including Zerodha, Angel One, 5Paisa, and Interactive Brokers via API integration.</p>
                        </details>
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">Do I need to know Python?</summary>
                            <p className="mt-4">No. Our platform offers a no-code strategy builder, but we also provide full Python access for advanced quants.</p>
                        </details>
                        <details className="p-6 bg-light dark:bg-dark rounded-lg shadow-sm">
                            <summary className="font-semibold text-xl cursor-pointer">Is historical data included?</summary>
                            <p className="mt-4">Yes, we provide tick-by-tick historical data for backtesting your strategies before going live.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to Professionalize Your Trading?</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-dark text-light dark:bg-light dark:text-dark font-bold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Talk to our Team
                    </Link>
                    <Link
                        href="https://console.radii.in/"
                        target="_blank"
                        className="px-8 py-4 border border-dark dark:border-light font-bold rounded-full hover:bg-dark/10 dark:hover:bg-light/10 transition-colors"
                    >
                        Launch Console
                    </Link>
                </div>
            </section>
        </main>
    );
}
