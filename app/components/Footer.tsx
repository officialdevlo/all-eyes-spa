import Link from "next/link";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[var(--primary)] text-white border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

                    <div className="col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight font-heading mb-6 block">
                            All Eyes On <span className="text-[var(--accent)]">Spa</span>
                        </Link>
                        <p className="text-white/60 max-w-sm leading-relaxed mb-8">
                            We help spa & wellness owners scale their revenue through data-driven ad strategies and automated lead follow-ups.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#results" className="hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 text-center text-white/40 text-sm">
                    <p>© {new Date().getFullYear()} All Eyes On Spa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
