import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "AI Trading Tutorial | Radii Labs",
    description: "Learn how to download, activate, and use our AI-based trading software. Follow our step-by-step guide to transition from emotional to disciplined trading.",
};

const TutorialPage = () => {
    return (
        <main className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-20 lg:px-32">
            <section className="w-full max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-dark mb-8 text-center">
                    AI Trading <span className="text-accent">Tutorial</span>
                </h1>

                <p className="text-lg md:text-xl text-dark/80 mb-16 text-center max-w-2xl mx-auto">
                    Welcome to the comprehensive guide for our AI-based automated trading system. Follow these steps to set up your environment and start trading with data-backed precision.
                </p>

                <div className="space-y-16">
                    {/* Step 1: Download */}
                    <section id="download" className="group">
                        <div className="flex items-start gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-light font-bold text-xl group-hover:scale-110 transition-transform">
                                1
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 capitalize">
                                    Access the Console {"&"} Download
                                </h2>
                                <p className="text-base md:text-lg text-dark/70 mb-4">
                                    All software downloads and deployment tools are hosted on our secure console subdomain. Use the CLI mainframe interface to download the latest version of the trading core.
                                </p>
                                <Link
                                    href="https://console.radii.in/"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-dark text-light rounded-full font-semibold hover:bg-accent hover:text-light transition-colors"
                                >
                                    Go to Console
                                    <Image src="/svgs/cli_mainframe_logo_blue.svg" alt="CLI" width={20} height={20} className="invert" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Step 2: Activation */}
                    <section id="activation" className="group">
                        <div className="flex items-start gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-light font-bold text-xl group-hover:scale-110 transition-transform">
                                2
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 capitalize">
                                    Activate the Product
                                </h2>
                                <p className="text-base md:text-lg text-dark/70">
                                    Once downloaded, run the installer. During the initial setup, you will be prompted to activate your product. Ensure you have a stable internet connection for the activation server handshake.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Step 3: Licensing */}
                    <section id="license" className="group">
                        <div className="flex items-start gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-light font-bold text-xl group-hover:scale-110 transition-transform">
                                3
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 capitalize">
                                    Get Your Trading License
                                </h2>
                                <p className="text-base md:text-lg text-dark/70 mb-4">
                                    To execute live trades, you need a valid AI Trading license. You can manage and renew your licenses directly from your profile dashboard.
                                </p>
                                <Link
                                    href="/contact"
                                    className="text-accent font-semibold hover:underline"
                                >
                                    Contact Support for Enterprise Licenses {"\u2192"}
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Step 4: AI Trading */}
                    <section id="usage" className="group">
                        <div className="flex items-start gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-light font-bold text-xl group-hover:scale-110 transition-transform">
                                4
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 capitalize">
                                    Start AI Trading
                                </h2>
                                <p className="text-base md:text-lg text-dark/70">
                                    Configure your risk parameters and select from our Patent Pending algorithms. Move from emotional trading to disciplined, data-backed execution with proven success rates of above 80%.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Video Guide */}
                    <section id="video" className="mt-20">
                        <h2 className="text-3xl font-bold text-dark mb-8 text-center capitalize">
                            Video walkthrough
                        </h2>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-dark/10">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/videoseries?list=PLtzex4luYqGZvhkuZDXH2k5uL8SbgeCkU"
                                title="AI Trading Tutorial Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </section>
                </div>

                <div className="mt-24 p-8 bg-accent/10 rounded-2xl border border-accent/20 text-center">
                    <h3 className="text-2xl font-bold text-dark mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-dark/70 mb-6">
                        Our support team is available 24/7 to help you with your setup and license queries.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-accent text-light font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Contact Support
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default TutorialPage;
