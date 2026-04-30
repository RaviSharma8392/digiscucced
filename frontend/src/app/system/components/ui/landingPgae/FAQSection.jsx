import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection({ faqSchema }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            className="max-w-4xl mx-auto px-6 py-24"
            aria-labelledby="faq-heading"
            id="faq"
        >
            {/* Heading */}
            <div className="text-center mb-14">
                <h2
                    id="faq-heading"
                    className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
                >
                    Frequently asked questions
                </h2>
                <p className="mt-3 text-slate-600 text-lg">
                    Everything you need to know before getting started.
                </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
                {faqSchema.mainEntity.map((item, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <div
                            key={i}
                            className={`border rounded-xl transition-all duration-300 ${isOpen
                                    ? "border-slate-300 shadow-sm bg-white"
                                    : "border-slate-200 bg-white hover:border-slate-300"
                                }`}
                        >
                            {/* Question */}
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between text-left px-5 py-4"
                            >
                                <span className="text-[16px] font-medium text-slate-900">
                                    {item.name}
                                </span>

                                <ChevronDownIcon
                                    className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-5 pb-5 text-slate-600 leading-relaxed text-[15px]">
                                        {item.acceptedAnswer.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}