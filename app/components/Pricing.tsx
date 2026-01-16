import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { Check } from "lucide-react";

export function Pricing() {
    const plans = [
        {
            name: "Starter",
            description: "Perfect for new spas getting started.",
            price: "₹15,000",
            features: [
                "Meta Ads Management",
                "Landing Page Setup",
                "Up to 5 Leads/Day",
                "Basic WhatsApp Script",
            ],
            cta: "Start Scaling",
            href: "https://wa.me/918887048276?text=Hi%2C%20I%20am%20interested%20in%20the%20Starter%20Plan%20for%20my%20spa."
        },
        {
            name: "Growth",
            description: "For spas ready to dominate.",
            price: "₹25,000",
            popular: true,
            features: [
                "Meta + Google Ads",
                "Custom Lead Filtering",
                "Up to 15 Leads/Day",
                "Automated Follow-ups",
                "CRM Integration",
            ],
            cta: "Get Growth Plan",
            href: "https://wa.me/918887048276?text=Hi%2C%20I%20am%20interested%20in%20the%20Growth%20Plan%20for%20my%20spa."
        },
        {
            name: "Scale",
            description: "Multiple locations & franchises.",
            price: "Custom",
            features: [
                "Omnichannel Strategy",
                "Dedicated Account Manager",
                "30+ Leads/Day",
                "24/7 Support",
                "Revenue Guarantee Model",
            ],
            cta: "Contact Us",
            href: "https://wa.me/918887048276?text=Hi%2C%20I%20want%20to%20discuss%20the%20Scale%20Plan%20for%20my%20franchise."
        },
    ];

    return (
        <Section id="pricing" background="light">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    No hidden fees. Just results.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl border bg-white flex flex-col items-start relative ${plan.popular ? "border-[var(--accent)] shadow-xl ring-2 ring-[var(--accent)] ring-offset-2 scale-105 z-10" : "border-gray-200 shadow-sm"
                            }`}
                    >
                        {plan.popular && (
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{plan.description}</p>

                        <div className="text-3xl font-bold text-[var(--primary)] mb-8">
                            {plan.price}<span className="text-base font-normal text-gray-400">/mo</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1 w-full">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-700">
                                    <Check className="w-5 h-5 text-[var(--secondary)] flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button className="w-full" variant={plan.popular ? "primary" : "outline"} href={plan.href}>
                            {plan.cta}
                        </Button>
                    </div>
                ))}
            </div>
        </Section>
    );
}
