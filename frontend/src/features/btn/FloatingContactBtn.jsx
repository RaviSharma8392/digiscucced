import React from "react";
import { Link } from "react-router-dom";

const FloatingContactBtn = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-6 md:right-10 z-50 group overflow-hidden flex items-center justify-center bg-black text-white border border-white/30 px-8 py-[18px] shadow-2xl transition-all duration-300"
      aria-label="Contact Us">
      {/* The "Sweep" Background 
        Uses a custom cubic-bezier for a hyper-smooth, premium acceleration curve 
      */}
      <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>

      {/* Content Container */}
      <span className="relative z-10 flex items-center">
        {/* Button Text - Inverts to black on hover */}
        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white group-hover:text-black transition-colors duration-500">
          Contact Us
        </span>

        {/* Signature Arrow - Inverts and slides right */}
        <span className="ml-4 text-[13px] font-bold text-white group-hover:text-black transform group-hover:translate-x-2 transition-all duration-500">
          &gt;
        </span>
      </span>
    </Link>
  );
};

export default FloatingContactBtn;
