import { Section } from "./ui/Section";
import { XCircle } from "lucide-react";

export function Problem() {
    const problems = [
        {
            title: "Fake & Low-Quality Leads",
            description: "Tired of calling numbers that don't exist or people who say 'I never clicked that'?",
        },
        {
            title: "Zero Follow-up System",
            description: "Leads inquire but ghost you because you don't have an instant response system in place.",
        },
        {
            title: "Wasted Ad Budget",
            description: "Boosting posts on Instagram without a strategy is just burning cash with no ROI.",
        },
        {
            title: "Unpredictable Bookings",
            description: "Some days are busy, some are empty. You lack a system that brings consistent footfall.",
        },
    ];

    return (
        <Section background="light" id="problems">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Is Your Spa <span className="text-red-500">Struggling</span> With This?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Most spa owners are excellent at providing services but struggle with getting consistent clients. Sound familiar?
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {problems.map((problem, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                            <XCircle className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--primary)]">{problem.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {problem.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
