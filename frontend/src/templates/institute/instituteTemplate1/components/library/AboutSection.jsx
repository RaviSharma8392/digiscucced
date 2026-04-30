import React from 'react';
import { BookOpenCheck } from 'lucide-react';

export default function RulesSection({ rules }) {
    if (!rules?.length) return null;

    return (
        <section
            aria-labelledby="rules-heading"
            className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60"
        >
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER: Structured & Academic --- */}
                <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-[#1e4862] pb-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpenCheck className="w-6 h-6 text-[#fbd25a]" aria-hidden="true" />
                            <span className="text-[#1e4862] font-bold tracking-widest uppercase text-sm">
                                Code of Conduct
                            </span>
                        </div>
                        <h2
                            id="rules-heading"
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1e4862] tracking-tight leading-[1.1]"
                        >
                            Library Rules & Guidelines
                        </h2>
                    </div>

                    <div className="md:w-1/3 text-slate-600 font-medium text-lg border-l-4 border-[#fbd25a] pl-6 py-1">
                        Strict adherence to these guidelines ensures a disciplined, distraction-free environment for all enrolled learners.
                    </div>
                </header>

                {/* --- GRID: Clean, Functional, High-Contrast --- */}
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16" aria-label="Library rules">
                    {rules.map((rule, idx) => (
                        <li
                            key={idx}
                            className="group flex flex-col"
                        >
                            {/* Number Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <span
                                    className="flex items-center justify-center w-10 h-10 bg-[#1e4862] text-white font-serif font-bold text-lg rounded-sm"
                                    aria-hidden="true"
                                >
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="h-[2px] flex-grow bg-slate-100 group-hover:bg-[#fbd25a] transition-colors duration-300"></div>
                            </div>

                            {/* Rule Text */}
                            <div className="bg-[#f8fbfd] p-6 sm:p-8 rounded-lg border border-slate-100 h-full group-hover:shadow-lg group-hover:border-[#a0c5d6]/50 transition-all duration-300">
                                <p className="text-[#335970] font-medium text-lg leading-relaxed">
                                    {rule}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
}