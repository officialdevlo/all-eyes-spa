import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export default function About() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Header />

            <Section className="pt-32 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-[var(--secondary)]">Us</span></h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We are not a generic agency. We are a dedicated growth partner for the spa and wellness industry.
                </p>
            </Section>

            <Section background="white">
                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
                    <p>
                        Founded in 2024, <strong>All Eyes On Spa</strong> was born out of a simple observation: Spa owners are incredible at healing others but often struggle to heal their own business's cash flow.
                    </p>
                    <p>
                        You see marketing agencies promising the moon but delivering "leads" that never pick up the phone. We decided to change that.
                    </p>
                    <p>
                        Our mission is simple: To help 500 spa owners across India add ₹10 Lakhs in annual revenue through predictable, automated lead generation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-[var(--primary)] text-white p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">Our Values</h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Transparency above all.</li>
                                <li>Results, not excuses.</li>
                                <li>Exclusive partnerships.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl flex items-center justify-center">
                            <p className="font-heading text-3xl font-bold text-center">
                                "Your Growth is Our Growth."
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to work with specialists?</h2>
                <Button size="lg" href="/">Back to Home</Button>
            </Section>

            <Footer />
        </main>
    );
}
