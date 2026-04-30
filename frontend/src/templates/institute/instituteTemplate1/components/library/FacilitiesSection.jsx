import React from 'react';
import {
    ShieldCheck, Zap, Wind, Users, CheckCircle, Droplets, BookOpen, Wifi
} from 'lucide-react';

export default function FacilitiesSection({ facilities = [] }) {
    // If no data is passed, we shouldn't render an empty section
    if (!facilities || facilities.length === 0) return null;

    // Helper function to generate a custom CSS "illustration" based on the facility name
    const getIllustration = (facilityName) => {
        const name = facilityName.toLowerCase();

        // Default illustration configuration
        let config = {
            Icon: CheckCircle,
            bgGradient: "from-blue-100 to-indigo-50",
            blobColor: "bg-blue-200/50",
            iconColor: "text-blue-600",
            accentColor: "bg-indigo-400"
        };

        if (name.includes("silence") || name.includes("silent")) {
            config = { Icon: ShieldCheck, bgGradient: "from-emerald-100 to-teal-50", blobColor: "bg-emerald-200/50", iconColor: "text-emerald-600", accentColor: "bg-teal-400" };
        } else if (name.includes("electric") || name.includes("light")) {
            config = { Icon: Zap, bgGradient: "from-amber-100 to-orange-50", blobColor: "bg-amber-200/50", iconColor: "text-amber-500", accentColor: "bg-orange-400" };
        } else if (name.includes("fan") || name.includes("ac") || name.includes("air")) {
            config = { Icon: Wind, bgGradient: "from-sky-100 to-cyan-50", blobColor: "bg-sky-200/50", iconColor: "text-sky-500", accentColor: "bg-cyan-400" };
        } else if (name.includes("competitiv") || name.includes("environment")) {
            config = { Icon: Users, bgGradient: "from-purple-100 to-fuchsia-50", blobColor: "bg-purple-200/50", iconColor: "text-purple-600", accentColor: "bg-fuchsia-400" };
        } else if (name.includes("water") || name.includes("drinking") || name.includes("ro")) {
            config = { Icon: Droplets, bgGradient: "from-blue-100 to-cyan-50", blobColor: "bg-blue-200/50", iconColor: "text-blue-500", accentColor: "bg-cyan-400" };
        } else if (name.includes("wifi") || name.includes("internet")) {
            config = { Icon: Wifi, bgGradient: "from-rose-100 to-pink-50", blobColor: "bg-rose-200/50", iconColor: "text-rose-500", accentColor: "bg-pink-400" };
        } else if (name.includes("book") || name.includes("seat") || name.includes("desk")) {
            config = { Icon: BookOpen, bgGradient: "from-indigo-100 to-violet-50", blobColor: "bg-indigo-200/50", iconColor: "text-indigo-600", accentColor: "bg-violet-400" };
        }

        const { Icon, bgGradient, blobColor, iconColor, accentColor } = config;

        return (
            <div className="relative w-32 h-32 mx-auto mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">
                {/* Layer 1: Soft Abstract Background Blob */}
                <div className={`absolute inset-0 ${blobColor} rounded-[40%] blur-md transform rotate-12 group-hover:rotate-45 transition-all duration-700`}></div>

                {/* Layer 2: Main Gradient Circle */}
                <div className={`absolute inset-2 bg-gradient-to-br ${bgGradient} rounded-full shadow-inner flex items-center justify-center border border-white/60`}>
                    {/* Layer 3: The Icon */}
                    <Icon className={`w-12 h-12 ${iconColor} drop-shadow-sm transform group-hover:-translate-y-1 transition-transform duration-500`} />
                </div>

                {/* Layer 4: Floating Decorative Accents */}
                <div className={`absolute top-0 right-4 w-3 h-3 ${accentColor} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                <div className={`absolute bottom-2 left-2 w-2 h-2 ${accentColor} rounded-full animate-ping opacity-75`} style={{ animationDuration: '3s' }}></div>
            </div>
        );
    };

    return (
        <section
            aria-labelledby="facilities-heading"
            className="bg-white py-24 lg:py-32 px-4 border-y border-slate-200/60 relative overflow-hidden"
        >
            {/* Subtle Background Grid & Gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* SEO-Optimized Header */}
                <header className="text-center mb-20 md:mb-28">
                    <span className="text-[#245e75] font-black tracking-widest uppercase text-sm mb-4 block">
                        Premium Amenities
                    </span>
                    <h2 id="facilities-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight">
                        Core Facilities
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#245e75] to-[#458da8] mx-auto mt-8 rounded-full"></div>
                </header>

                {/* Semantic List for SEO */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
                    {facilities.map((fac, idx) => (
                        <li
                            key={idx}
                            className="group flex flex-col items-center text-center bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200/50 cursor-default relative overflow-hidden"
                        >
                            {/* Top animated border highlight */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#245e75] to-[#458da8] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

                            {/* Custom CSS Illustration */}
                            {getIllustration(fac)}

                            {/* Text Content */}
                            <h3 className="font-serif font-bold text-slate-800 text-xl md:text-2xl tracking-wide mb-3">
                                {fac}
                            </h3>

                            {/* Decorative line below text */}
                            <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-[#245e75] transition-all duration-500"></div>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}