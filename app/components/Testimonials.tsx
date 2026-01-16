import { Section } from "./ui/Section";
import { Star } from "lucide-react";

export function Testimonials() {
    const reviews = [
        {
            name: "Priya Sharma",
            role: "Owner, Aura Wellness, Mumbai",
            text: "I was skeptical about agencies, but All Eyes On Spa actually delivered. We went from empty weekdays to fully booked slots in just 3 weeks.",
            stars: 5,
        },
        {
            name: "Rahul Verma",
            role: "Founder, Zen Retreat, Bangalore",
            text: "The lead quality is unmatched. These aren't just random clicks, they are real people looking for massages. The WhatsApp automation is a lifesaver.",
            stars: 5,
        },
        {
            name: "Anjali Mehta",
            role: "Director, Thai Bliss, Delhi",
            text: "Professional team, great support, and transparent reporting. Finally found a marketing partner who understands the spa business.",
            stars: 5,
        },
    ];

    return (
        <Section id="testimonials">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Take Our Word For It</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Hear from spa owners who transformed their business with us.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                        <div className="flex gap-1 mb-4">
                            {[...Array(review.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                        <div>
                            <p className="font-bold text-[var(--primary)]">{review.name}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">{review.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
