import React from "react";

export default function FinalCTA() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900">
            {/* Subtle Futuristic Radial Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900 to-slate-900"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

                {/* HEADLINE */}
                <h2 className="text-4xl md:text-5xl  text-white tracking-tight mb-6">
                    Ready to Grow Your Local Business?
                </h2>

                {/* SUBTEXT */}
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                    From setup to launch, we create your complete business website starting at just <strong className="text-white font-semibold">₹500/month</strong>.
                    Get found on Google, receive WhatsApp inquiries, and beat the competition.
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

                    {/* Primary CTA - Premium Crimson Red */}
                    <a
                        href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20a%20website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-rose-600 text-white px-8 py-4  text-lg  text-center transition-all duration-300 shadow-lg shadow-rose-600/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-600/40 w-full sm:w-auto flex justify-center items-center gap-3"
                    >
                        {/* Hover Shine Effect */}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                        </span>

                        <span className="relative z-10">🚀 Get My Website Now</span>
                    </a>

                    {/* Secondary Link */}
                    <a
                        href="#demo"
                        className="text-slate-300 font-medium hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                        See How It Works
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                </div>

                {/* TRUST BADGES / REASSURANCE */}
                <p className="mt-10 text-sm text-slate-400 font-medium flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <span>✔ No technical skills required</span>
                    <span>✔ No massive upfront costs</span>
                    <span>✔ Delivered fast</span>
                </p>

            </div>
        </section>
    );
}