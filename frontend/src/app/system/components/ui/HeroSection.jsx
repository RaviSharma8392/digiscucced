import React from "react";
import {
    ShoppingCartIcon,
    CalendarDaysIcon,
    ChatBubbleBottomCenterTextIcon,
    ShieldCheckIcon
} from "@heroicons/react/24/outline";

const FEATURES = [
    {
        icon: <ShoppingCartIcon className="w-5 h-5" aria-hidden="true" />,
        text: "Ecommerce-ready website"
    },
    {
        icon: <CalendarDaysIcon className="w-5 h-5" aria-hidden="true" />,
        text: "Online booking system"
    },
    {
        icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5" aria-hidden="true" />,
        text: "WhatsApp integration"
    },
    {
        icon: <ShieldCheckIcon className="w-5 h-5" aria-hidden="true" />,
        text: "Fast, secure & SEO optimized"
    }
];

export default function HeroSection() {
    return (
        <section
            className="w-full bg-gradient-to-b from-slate-50 to-white py-6 lg:py-10 overflow-hidden"
            aria-label="Hero — Website development for local businesses in India"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* ── IMAGE ── */}
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md">
                        {/* Decorative blur layer — hidden from a11y */}
                        <div
                            className="absolute -inset-4 bg-blue-100/40  blur-xl"
                            aria-hidden="true"
                        />

                        {/*
                            SEO notes:
                            - loading="eager" on hero image so it counts toward LCP
                            - fetchpriority="high" tells browser to load this first
                            - width/height prevent layout shift (CLS)
                            - alt contains primary keyword naturally
                        */}
                        <img
                            src="/banner.png"
                            alt="Professional website development for small businesses in India — salons, clinics, gyms, retail shops"
                            width={600}
                            height={500}
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                            className="relative w-full h-auto object-cover shadow-2xl"
                        />
                    </div>
                </div>

                {/* ── CONTENT ── */}
                <div className="order-1 lg:order-2">

                    {/*
                        H1 — most important SEO element on the page.
                        Rules followed:
                        - Contains primary keyword: "website for local businesses in India"
                        - Contains price signal: ₹500/month
                        - One H1 per page only — HeroSection is always rendered first
                        - Do NOT put an H1 in any other component on this page
                    */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl  text-slate-900 leading-tight tracking-tight">
                        Affordable Website for Local Businesses in India — Starting at{" "}
                        <span className="text-orange-400 ">₹500/month</span>
                    </h1>

                    {/*
                        H2 — secondary keyword variation.
                        Includes "Google" and "WhatsApp" — both high-intent signals
                        for the Indian SMB audience.
                    */}
                    <h2 className="text-base sm:text-lg text-orange-400  mt-3 font-semibold">
                        Get More Customers from Google &amp; WhatsApp
                    </h2>

                    {/*
                        Body copy — naturally includes:
                        - "salons, clinics, gyms, shops" → long-tail local keyword coverage
                        - "Google" → reinforces search intent
                        - Conversational tone matches how users actually search
                    */}
                    <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-lg">
                        Customers search online before visiting any business — hotels, clinics,
                        salons, gyms, or shops. If your business is not visible on Google, you are
                        losing potential customers every day. We build fast, mobile-friendly
                        websites that drive real calls, bookings, and walk-ins.
                    </p>

                    {/*
                        Feature list — use <ul> with <li> (not <div>).
                        Screen readers and Google both parse list semantics.
                        aria-label on <ul> gives it meaning without adding visible text.
                    */}
                    <ul
                        className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
                        aria-label="What's included in every Etrynix website"
                    >
                        {FEATURES.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 bg-white border border-slate-200  px-4 py-3 shadow-sm hover:shadow-md transition"
                            >
                                <span className="text-orange-400  flex-shrink-0">
                                    {item.icon}
                                </span>
                                <span className="text-sm text-slate-700 font-medium">
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* ── CTA ── */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:items-center">
                        {/* WhatsApp CTA Button
        Features: Premium shine effect on hover, SVG icon, animated shadow
    */}
                        <a
                            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20a%20website%20for%20my%20business"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Etrynix on WhatsApp to get a website for your business"
                            className="group relative overflow-hidden bg-emerald-600 text-white px-8 py-3.5 text-sm font-bold text-center transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-600/40 flex items-center justify-center gap-2.5"
                        >


                            {/* WhatsApp SVG Icon */}
                            <svg
                                className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.4 0 .02 5.38.02 12.03c0 2.12.55 4.18 1.6 6l-1.7 6.2 6.35-1.66a11.94 11.94 0 005.79 1.48h.01c6.66 0 12.04-5.38 12.04-12.03 0-3.21-1.25-6.23-3.59-8.54zM12.07 21.3h-.01a9.96 9.96 0 01-5.07-1.39l-.36-.21-3.77.98 1-3.68-.23-.38a9.94 9.94 0 01-1.52-5.33c0-5.51 4.49-10 10-10 2.67 0 5.17 1.04 7.07 2.93a9.93 9.93 0 012.93 7.07c0 5.51-4.49 10-10 10zm5.53-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.2 3.07c.15.2 2.07 3.17 5.02 4.45.7.3 1.25.48 1.68.62.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                            </svg>

                            <span className="relative z-10 tracking-wide">Talk on WhatsApp</span>
                        </a>

                        {/* Trust & Pricing Text */}
                        <div className="flex flex-col text-sm text-slate-500 font-medium sm:border-l-2 sm:border-slate-200 sm:pl-5">
                            <strong className="text-slate-800 text-base flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Starting at ₹500/month
                            </strong>
                            <span className="mt-1">No setup cost • Cancel anytime</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}