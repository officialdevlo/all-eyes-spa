import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Header />

            <Section className="pt-32 pb-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Support</h1>
                    <p className="text-xl text-gray-600">
                        Have questions about our plans? Need help with your account? We're here.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-[var(--primary)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                                <p className="text-gray-600 mb-2">Mon-Sun from 10am to 7pm.</p>
                                <a href="tel:+918887048276" className="text-[var(--secondary)] font-semibold hover:underline " target="_blank">
                                    +91 888 704 8276
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-[var(--primary)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Whatsapp Us</h3>
                                <p className="text-gray-600 mb-2">Mon-Sun from 10am to 7pm.</p>
                                <a href="https://wa.me/918887048276?text=Hi%2C%20I%20need%20support%20with%20my%20account." target="_blank" className="text-[var(--secondary)] font-semibold hover:underline">
                                    +91 888 704 8276
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-[var(--primary)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Office</h3>
                                <p className="text-gray-600">
                                    123, Noida sector 52,<br />
                                    Uttar Pradesh, India.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="you@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
