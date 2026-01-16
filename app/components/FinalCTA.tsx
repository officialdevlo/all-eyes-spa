import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

export function FinalCTA() {
    return (
        <Section className="bg-[var(--primary)] text-gray-700 text-center">
            <div className="max-w-4xl mx-auto py-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Ready To Fill Your Spa With <br />
                    <span className="text-[var(--accent)]">High-Paying Clients?</span>
                </h2>
                <p className="text-xl text-black/80 mb-10">
                    Stop guessing. Start growing. Join 50+ spa owners who scaled with us in 2024.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-10" href="https://wa.me/918887048276?text=Hi%2C%20I%20want%20to%20book%20a%20strategy%20call.">
                        Book Your Strategy Call
                    </Button>
                    <Button size="lg" variant="outline" className="border-black text-black hover:bg-white hover:text-gray-500" href="https://wa.me/918887048276?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services.">
                        Message on WhatsApp
                    </Button>
                </div>
            </div>
        </Section>
    );
}
