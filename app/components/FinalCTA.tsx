import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

export function FinalCTA() {
    return (
        <Section className="bg-[var(--primary)] text-white text-center">
            <div className="max-w-4xl mx-auto py-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Ready To Fill Your Spa With <br />
                    <span className="text-[var(--accent)]">High-Paying Clients?</span>
                </h2>
                <p className="text-xl text-white/80 mb-10">
                    Stop guessing. Start growing. Join 50+ spa owners who scaled with us in 2024.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-10">
                        Book Your Strategy Call
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        Message on WhatsApp
                    </Button>
                </div>
            </div>
        </Section>
    );
}
