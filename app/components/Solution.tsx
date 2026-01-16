import { Section } from "./ui/Section";
import { Target, Users, TrendingUp } from "lucide-react";

export function Solution() {
    const steps = [
        {
            icon: Target,
            title: "Targeted Ads",
            description: "We run high-converting Meta & Google ads targeting high-net-worth individuals nearby.",
        },
        {
            icon: Users,
            title: "Lead Filtering",
            description: "We filter out junk leads so you only talk to people ready to book a service.",
        },
        {
            icon: TrendingUp,
            title: "Automated Bookings",
            description: "Our systems follow up instantly on WhatsApp to secure the appointment for you.",
        },
    ];

    return (
        <Section id="solution">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The "All Eyes On Spa" <br />
                        <span className="text-[var(--secondary)]">Growth System</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        We don't just "run ads". We build a complete client acquisition engine for your wellness business.
                    </p>
                    <ul className="space-y-4">
                        {steps.map((step, index) => (
                            <li key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center mt-1">
                                    <step.icon className="w-5 h-5 text-[var(--secondary)]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--primary)]">{step.title}</h4>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 w-full bg-neutral-100 rounded-2xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for process graphic */}
                    <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                        [Infographic: Ads &rarr; Filter &rarr; Booking]
                    </div>
                </div>
            </div>
        </Section>
    );
}
