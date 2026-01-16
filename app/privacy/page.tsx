import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/ui/Section";

export default function Privacy() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Header />

            <Section className="pt-32 pb-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-sm text-gray-500 mb-8">Last Updated: January 1, 2025</p>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p>
                            At All Eyes On Spa, accessible from https://alleyesonspa.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by All Eyes On Spa and how we use it.
                        </p>

                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">Information We Collect</h3>
                        <p>
                            We only collect information you voluntarily provide to us, such as name, email address, and phone number when you fill out a form or contact us via WhatsApp.
                        </p>

                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">How We Use Your Information</h3>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Communicate with you, either directly or through one of our partners</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">Log Files</h3>
                        <p>
                            All Eyes On Spa follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
