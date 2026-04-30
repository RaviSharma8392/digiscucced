import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function RulesSection({ rules }) {
    if (!rules?.length) return null;

    return (
        <section
            aria-labelledby="rules-heading"
            className="py-24 lg:py-32 bg-[#f8fbfd] relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#eaf3f8] to-transparent opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#fbd25a]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* LEFT COLUMN: Sticky Header (The "Why") */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e4862] to-[#153a51] shadow-xl shadow-[#1e4862]/20 mb-8 relative">
                                {/* Gold Accent Dot */}
                                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#fbd25a] rounded-full border-2 border-[#f8fbfd]"></div>
                                <ShieldAlert className="text-white w-8 h-8" aria-hidden="true" />
                            </div>

                            <h2
                                id="rules-heading"
                                className="text-4xl lg:text-5xl font-serif font-bold text-[#1e4862] tracking-tight leading-[1.1] mb-6"
                            >
                                Code of <br className="hidden lg:block" />
                                Conduct
                            </h2>

                            <p className="text-lg text-[#4a6b7c] leading-relaxed mb-8">
                                To maintain a sanctuary of focus and intellectual growth, we ask all members to strictly adhere to these non-negotiable guidelines.
                            </p>

                            <div className="hidden lg:flex items-center gap-3 text-sm font-bold text-[#1e4862] uppercase tracking-widest bg-[#eaf3f8] w-max px-4 py-2 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-[#fbd25a]" />
                                {rules.length} Guidelines
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Timeline (The "What") */}
                    <div className="lg:w-2/3">
                        <div className="relative border-l-[3px] border-[#a0c5d6]/30 ml-4 md:ml-6 pb-4">

                            {rules.map((rule, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-10 md:pl-16 pb-12 group"
                                >
                                    {/* Timeline Dot (Animated on hover) */}
                                    <div className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-white border-[4px] border-[#a0c5d6] group-hover:border-[#fbd25a] group-hover:bg-[#1e4862] transition-all duration-500 z-10 shadow-sm"></div>

                                    {/* Rule Card */}
                                    <div className="relative bg-white p-8 md:p-10 rounded-2xl md:rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-[#1e4862]/10 border border-slate-100 hover:border-[#a0c5d6]/50 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-1">

                                        {/* Left Accent Bar on Hover */}
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#fbd25a] transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></div>

                                        {/* Watermark Number */}
                                        <span
                                            className="absolute -right-4 -bottom-8 text-[8rem] font-black text-[#eaf3f8] group-hover:text-[#f8fbfd] transition-colors duration-500 select-none pointer-events-none z-0"
                                            aria-hidden="true"
                                        >
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>

                                        <div className="relative z-10 flex flex-col gap-4">
                                            {/* Small Top Label */}
                                            <span className="text-xs font-black text-[#a0c5d6] uppercase tracking-widest group-hover:text-[#1e4862] transition-colors duration-300">
                                                Rule No. {String(idx + 1).padStart(2, '0')}
                                            </span>

                                            {/* Actual Rule Text */}
                                            <p className="text-[#335970] font-medium text-lg md:text-xl leading-relaxed group-hover:text-[#1e4862] transition-colors duration-300">
                                                {rule}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}

                            {/* Bottom timeline terminator */}
                            <div className="absolute left-[-7px] bottom-0 w-3 h-3 rounded-full bg-[#a0c5d6]/30"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}