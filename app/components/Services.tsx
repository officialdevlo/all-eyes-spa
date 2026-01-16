import { Section } from "./ui/Section";
import { MessageSquare, Layout, PieChart, MousePointerClick, Smartphone, Search } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: Layout,
            title: "Landing Page Design",
            description: "High-converting funnel pages designed specifically to sell spa packages and vouchers.",
        },
        {
            icon: MessageSquare,
            title: "WhatsApp Automation",
            description: "Instant replies and follow-ups so you never lose a lead even while you sleep.",
        },
        {
            icon: MousePointerClick,
            title: "Meta Ads (FB/Insta)",
            description: "Dominate your local area with eye-catching video and image ads on Instagram.",
        },
        {
            icon: Search,
            title: "Google Ads (PPC)",
            description: "Capture high-intent users searching for 'best spa near me' right now.",
        },
        {
            icon: Smartphone,
            title: "Lead Management CRM",
            description: "A simple mobile app to track every lead, status, and booking in one place.",
        },
        {
            icon: PieChart,
            title: "Revenue Tracking",
            description: "Weekly reports showing exactly how much money you made from our campaigns.",
        },
    ];

    return (
        <Section background="light" id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need To Scale</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We handle the tech and the marketing. You handle the guests.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-[var(--background)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                            <service.icon className="w-7 h-7 text-[var(--accent)] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
