import { Button } from "./ui/Button";
import { CheckCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[var(--secondary)]/5 to-transparent rounded-l-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                            </span>
                            #1 Lead Generation for Spas
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            We Help Spa Owners Get <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]">
                                10–50 Daily Verified Leads
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Stop wasting money on empty clicks. We provide a <strong>done-for-you</strong> system
                            to fill your appointment calendar with high-paying clients.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-[var(--secondary)]/20">
                                Get Free Demo Leads
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto" href="https://wa.me/911234567890">
                                WhatsApp Us
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[var(--secondary)]" />
                                <span>Verified Numbers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[var(--secondary)]" />
                                <span>Exclusive Leads</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[var(--secondary)]" />
                                <span>Pay Per Result</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Graphic */}
                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-white">
                            {/* Placeholder for realistic image */}
                            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                                [Premium Spa Image / Dashboard Mockup]
                            </div>
                            {/* 
                  NOTE: In production, use next/image here. 
                  Example: <Image src="/hero-spa.jpg" alt="Luxury Spa" fill className="object-cover" />
               */}
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow hidden md:flex">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                25+
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">New Bookings Today</p>
                                <p className="font-bold text-[var(--primary)]">Revenue: ₹12,500</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
