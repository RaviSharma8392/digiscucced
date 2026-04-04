import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({
  title = "The new way to create a website",
  subtitle = "Go from words to a business-ready site that's entirely yours to shape, on the first hybrid website builder.",
  primaryText = "Get Started",
  primaryLink = "/builder",
  subText = "Start for free. No credit card required.",
}) => {
  return (
    <section className="relative w-full pt-20 flex flex-col items-center overflow-hidden bg-gradient-to-b from-slate-50 to-[#f0f4f8] font-sans">
      {/* Background ambient glow matching the image */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/40 blur-[100px] z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-[100px] z-0 pointer-events-none"></div>

      {/* --- Top Text & CTA Section --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-12 mb-16">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
          {subtitle}
        </p>

        {/* CTA Button & Subtext */}
        <div className="flex flex-col items-center gap-3">
          <Link
            to={primaryLink}
            className="px-10 py-4 bg-[#1a65f8] hover:bg-[#1554d4] text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            {primaryText}
          </Link>
          <span className="text-slate-500 text-sm">{subText}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
