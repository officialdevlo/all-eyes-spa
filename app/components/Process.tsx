import { Section } from "./ui/Section";

export function Process() {
    const steps = [
        { number: "01", title: "Audit & Strategy", desc: "We analyze your current presence and offers." },
        { number: "02", title: "Setup & Launch", desc: "We build your ads and landing pages." },
        { number: "03", title: "Lead Influx", desc: "Leads start flowing into your WhatsApp." },
        { number: "04", title: "Scale Up", desc: "We optimize for lower costs and more volume." },
    ];

    return (
        <Section id="process" background="dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-white/60">Simple 4-step process to get started.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative group">
                        <div className="text-7xl font-bold text-white/5 absolute -top-4 -left-2 z-0 group-hover:text-[var(--accent)]/10 transition-colors">
                            {step.number}
                        </div>
                        <div className="relative z-10 pl-4 border-l-2 border-[var(--gray-800)] group-hover:border-[var(--accent)] transition-colors py-2">
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-white/60">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
