import { Section } from "./ui/Section";
import { Plus } from "lucide-react";

export function FAQ() {
    const faqs = [
        {
            question: "How much ad budget do I need?",
            answer: "We recommend starting with ₹500-₹1000 per day to see significant results.",
        },
        {
            question: "Do you guarantee leads?",
            answer: "Yes, our Growth and Scale plans come with a minimum lead guarantee.",
        },
        {
            question: "What if I don't have a website?",
            answer: "No problem! We build high-converting landing pages for you included in the package.",
        },
        {
            question: "Are these leads exclusive?",
            answer: "Absolutely. We never share your leads with another spa in your area.",
        },
    ];

    return (
        <Section id="faq">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked <br />Questions</h2>
                    <p className="text-gray-600 mb-8">
                        Everything you need to know about the product and billing. <br />Can't find the answer you're looking for?
                        <a href="#" className="font-bold text-[var(--accent)] ml-1 underline decoration-2 underline-offset-2">Chat to our team</a>.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="group border-b border-gray-200 pb-4">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h4 className="font-bold text-lg text-[var(--primary)]">{faq.question}</h4>
                                <Plus className="w-5 h-5 text-gray-400 group-hover:text-[var(--accent)] transition-colors" />
                            </div>
                            <p className="mt-2 text-gray-600 pr-8 hidden group-hover:block transition-all">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
