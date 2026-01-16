import { Section } from "./ui/Section";
import { ArrowUpRight } from "lucide-react";

export function Results() {
    const stats = [
        { label: "Leads Generated", value: "15,000+", suffix: "Last Year" },
        { label: "Bookings Made", value: "4,200", suffix: "Confirmed" },
        { label: "Client Revenue", value: "₹2.5Cr+", suffix: "Generated" },
        { label: "Ad Spend Managed", value: "₹45L+", suffix: "Efficiently" },
    ];

    return (
        <Section id="results" background="light">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results, No Fluff</h2>
                    <p className="text-gray-600 max-w-xl">
                        Numbers speak louder than words. Here is what we have achieved for our partners.
                    </p>
                </div>
                <div className="hidden lg:block">
                    <span className="inline-flex items-center gap-2 text-[var(--secondary)] font-semibold">
                        View detailed case studies <ArrowUpRight className="w-4 h-4" />
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center lg:text-left">
                        <p className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-1">{stat.value}</p>
                        <p className="text-sm font-bold text-[var(--secondary)] mb-2 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-xs text-gray-400">{stat.suffix}</p>
                    </div>
                ))}
            </div>

            {/* Simple Before/After Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-center">Case Study: "Urban Glow Spa"</h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                            ❌ Before Working With Us
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>• 2-3 walk-ins per day</li>
                            <li>• Relied on frequent discounts</li>
                            <li>• No database of customers</li>
                            <li>• Wasting ₹20k/mo on 'likes'</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                        <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                            ✅ After 90 Days
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>• <strong>12-15 bookings per day</strong></li>
                            <li>• Full price packages sold</li>
                            <li>• 1,500+ Local Lead Database</li>
                            <li>• 4.8x Return on Ad Spend</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}
