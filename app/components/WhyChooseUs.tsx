import { Section } from "./ui/Section";
import { ShieldCheck, HeartHandshake, Gem, Clock } from "lucide-react";

export function WhyChooseUs() {
    const reasons = [
        {
            icon: Gem,
            title: "Spa & Salon Specialists",
            description: "We don't work with dentists, gyms, or plumbers. We ONLY understand the spa industry.",
        },
        {
            icon: ShieldCheck,
            title: "Exclusive Leads",
            description: "We never sell the same lead to your competitor. Your leads are yours alone.",
        },
        {
            icon: HeartHandshake,
            title: "No Long-Term Contracts",
            description: "We believe in earning your trust every month. No locking you in.",
        },
        {
            icon: Clock,
            title: "Fast Setup",
            description: "Launch your campaigns in less than 48 hours and start getting leads this week.",
        },
    ];

    return (
        <Section>
            <div className="bg-[var(--primary)] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        We operate differently than 99% of "agencies" out there.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <reason.icon className="w-8 h-8 text-[var(--accent)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
