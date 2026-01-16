import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/ui/Section";

export default function Terms() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Header />

            <Section className="pt-32 pb-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">1. Acceptance of Terms</h3>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Check back here for regular updates.
                        </p>

                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">2. Use License</h3>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on All Eyes On Spa's website for personal, non-commercial transitory viewing only.
                        </p>

                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">3. Disclaimer</h3>
                        <p>
                            The materials on All Eyes On Spa's website are provided on an 'as is' basis. All Eyes On Spa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h3 className="text-xl font-bold text-[var(--primary)] mt-8">4. Limitations</h3>
                        <p>
                            In no event shall All Eyes On Spa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on All Eyes On Spa's website.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
