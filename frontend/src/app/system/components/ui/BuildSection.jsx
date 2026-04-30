import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

// Data extracted for clean component logic
const STEPS = [
    {
        id: "1",
        title: "1. Start with a stunning theme",
        desc: "Our layouts make it simple to get started. Fresh designs make it easy to make a beautiful, responsive website for any industry."
    },
    {
        id: "2",
        title: "2. Customize with your own content",
        desc: "Add and customize sections. Choose font pairings, add images, and customize with your own text to make your website your own."
    },
    {
        id: "3",
        title: "3. Be found online",
        desc: "Grow your audience with your perfect domain name, SEO tools, social media and third party features."
    }
];

export default function BuildSection() {
    return (
        // The light off-white background matching the image
        <section className="w-full bg-[#fafafa] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            <div className="max-w-[1200px] mx-auto">

                {/* Main Heading positioned at the top left */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-12 lg:mb-16">
                    Dream it, build it.
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LEFT COLUMN: THE VISUAL COMPOSITION --- */}
                    <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center">

                        {/* Background Collage of Templates (Simulated) */}
                        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 opacity-90 p-4 lg:p-0">
                            {[
                                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
                                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
                                "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80",
                                "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&q=80",
                                "https://images.unsplash.com/photo-1481481365942-8858d2ab6937?w=400&q=80",
                                "https://images.unsplash.com/photo-1507238692062-5a042e9719ce?w=400&q=80"
                            ].map((img, i) => (
                                <div key={i} className="w-full h-24 sm:h-32 lg:h-40 bg-white shadow-sm border border-slate-200 overflow-hidden">
                                    <img src={img} alt="Template placeholder" className="w-full h-full object-cover opacity-80" />
                                </div>
                            ))}
                        </div>

                        {/* Foreground Mobile Mockup */}
                        {/* Adding heavy shadows and border to mimic a real device overlapping the templates */}
                        <div className="relative z-10 w-[220px] sm:w-[260px] h-[450px] sm:h-[520px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-[6px] sm:border-[8px] border-slate-900 overflow-hidden transform -translate-y-4">
                            {/* Inner content of the phone */}
                            <div className="w-full h-full bg-slate-900 relative flex flex-col">
                                {/* Top mock header */}
                                <div className="h-10 w-full flex items-center justify-between px-4 text-white/80 text-[10px] tracking-widest">
                                    <span>CLUSTER</span>
                                    <span>☰</span>
                                </div>
                                {/* Mobile Hero Image area */}
                                <div className="flex-1 relative flex items-center justify-center p-4">
                                    {/* Swapped with a space/nebula placeholder to match your screenshot's vibe */}
                                    <img
                                        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80"
                                        alt="Mobile theme design"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                                    />
                                    <div className="relative z-10 text-center text-white">
                                        <p className="text-[8px] uppercase tracking-[0.2em] mb-2 opacity-80">Welcome to Cluster</p>
                                        <h3 className="text-xl font-bold leading-tight mb-4">INNOVATION<br />YOU CAN<br />TRUST</h3>
                                        <button className="border border-white/50 px-4 py-1.5 text-[10px] rounded-sm hover:bg-white hover:text-black transition-colors">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                                {/* Bottom white content area */}
                                <div className="h-[30%] bg-white w-full p-5">
                                    <h4 className="font-bold text-sm mb-2 text-slate-900">CONTACT US</h4>
                                    <div className="w-full h-1.5 bg-slate-200 rounded mb-1.5"></div>
                                    <div className="w-5/6 h-1.5 bg-slate-200 rounded mb-1.5"></div>
                                    <div className="w-4/6 h-1.5 bg-slate-200 rounded mb-4"></div>
                                    <div className="w-full h-6 border border-slate-300 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT COLUMN: THE TEXT LIST --- */}
                    <div className="flex flex-col justify-center">
                        <ol className="space-y-10 lg:space-y-12">
                            {STEPS.map((step) => (
                                <li key={step.id}>
                                    <h3 className="text-[20px] font-semibold text-[#333333] mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-[15.5px] text-[#555555] leading-[1.6] font-medium max-w-lg">
                                        {step.desc}
                                    </p>
                                </li>
                            ))}
                        </ol>

                        {/* CTA Link matching the distinct blue dashed/solid bottom border look */}
                        <div className="mt-10 lg:mt-12">
                            <a
                                href="#"
                                className="inline-flex items-center text-[#0060df] font-medium text-[16px] group"
                            >
                                <span className="border-b-[1.5px] border-[#0060df] pb-0.5 group-hover:border-transparent transition-colors">
                                    Make Free Website Now
                                </span>
                                <ChevronRightIcon className="w-5 h-5 ml-0.5 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}