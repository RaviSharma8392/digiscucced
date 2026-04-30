import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const PRICING_PLANS = [
    {
        name: "STARTER",
        price: "500",
        regularPrice: "₹1,000",
        discount: "50% OFF",
        features: [
            "Professional 1-page website",
            "Mobile-first responsive design",
            "WhatsApp & call integration",
            "Google visibility setup"
        ],
        isPopular: false,
        isCustom: false,
        buttonText: "Select Starter Plan"
    },
    {
        name: "GROWTH",
        price: "999",
        regularPrice: "₹2,500",
        discount: "60% OFF",
        features: [
            "Up to 5 pages",
            "SEO optimization",
            "Lead forms + WhatsApp",
            "Monthly updates",
            "Custom domain setup"
        ],
        isPopular: true,
        isCustom: false,
        buttonText: "Select Growth Plan"
    },
    {
        name: "PRO",
        price: "1999",
        regularPrice: "₹4,000",
        discount: "50% OFF",
        features: [
            "Up to 10 pages",
            "Advanced SEO",
            "Lead generation setup",
            "Priority support",
            "Strategy guidance"
        ],
        isPopular: false,
        isCustom: false,
        buttonText: "Select Pro Plan"
    },
    {
        name: "CUSTOM",
        price: null,
        regularPrice: null,
        discount: "TAILORED",
        features: [
            "Custom UI/UX (no templates)",
            "Advanced features & integrations",
            "Scalable architecture",
            "Performance & SEO optimized",
            "Built around your requirements"
        ],
        isPopular: false,
        isCustom: true,
        buttonText: "Request Custom Quote"
    },
];

const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

const getWhatsAppLink = (planName, isCustom) => {
    const message = isCustom
        ? "Hi, I want a custom website solution for my business."
        : `Hi, I am interested in the ${planName} plan.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export default function PricingSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-200" aria-labelledby="pricing-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h2 id="pricing-heading" className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Transparent Pricing. Built for Growth.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Choose the right plan for your business. Upgrade anytime as you grow.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
                    {PRICING_PLANS.map((plan, i) => {
                        const active = plan.isPopular;
                        const custom = plan.isCustom;

                        return (
                            <article
                                key={i}
                                className={`relative bg-white flex flex-col h-full border ${active
                                        ? "border-slate-300 shadow-xl z-10 scale-105"
                                        : "border-slate-200 shadow-sm"
                                    }`}
                            >
                                {/* Orange Ribbon for Popular Plan */}
                                {active && (
                                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                                        <div className="absolute top-6 -right-8 bg-[#f97316] text-white text-[11px] font-bold uppercase py-1.5 w-40 text-center rotate-45 shadow-md">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="p-8 flex-grow flex flex-col">
                                    {/* Plan Title */}
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest text-center mb-6">
                                        {plan.name}
                                    </h3>

                                    {/* Pricing & Discount */}
                                    <div className="text-center mb-6">
                                        {custom ? (
                                            <div className="flex justify-center items-center h-[48px] mb-2">
                                                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">Custom</span>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center items-end text-slate-900 mb-2">
                                                <span className="text-4xl font-extrabold tracking-tight">₹{plan.price}</span>
                                                <span className="text-lg font-medium text-slate-900 ml-1 mb-1">/mo</span>
                                            </div>
                                        )}

                                        {/* Yellow Discount Badges */}
                                        <div className="flex flex-col items-center space-y-1 min-h-[44px]">
                                            <span className="bg-[#fde047] text-black text-[12px] font-bold px-3 py-1 rounded-sm shadow-sm">
                                                {plan.discount}
                                            </span>
                                            {!custom && (
                                                <span className="text-[13px] text-slate-500 line-through">
                                                    Regularly {plan.regularPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Call to Action Button */}
                                    <div className="mb-8">
                                        <a
                                            href={getWhatsAppLink(plan.name, custom)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full"
                                            aria-label={`Select ${plan.name} plan`}
                                        >
                                            <button
                                                className={`w-full py-2.5 px-4 rounded font-semibold text-sm transition-all duration-200 border-2 ${active
                                                        ? "bg-[#2563eb] border-[#2563eb] text-white hover:bg-blue-700 hover:border-blue-700"
                                                        : "bg-white border-[#2563eb] text-[#2563eb] hover:bg-blue-50"
                                                    }`}
                                            >
                                                {plan.buttonText}
                                            </button>
                                        </a>
                                    </div>

                                    {/* Feature List */}
                                    <ul className="space-y-0 text-[14px] flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                // Yellow alternating highlight exactly like the image
                                                className={`flex items-start gap-3 px-2 py-2 ${idx % 2 !== 0 ? 'bg-[#fef08a]/60' : ''}`}
                                            >
                                                <CheckIcon className="w-5 h-5 text-[#3b82f6] flex-shrink-0" aria-hidden="true" />
                                                <span className="text-slate-800 leading-snug">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}