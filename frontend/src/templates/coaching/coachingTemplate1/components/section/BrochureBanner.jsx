import React from "react";
import { ArrowDownToLine } from "lucide-react";

export default function BrochureBanner() {
  return (
    <section className="py-8 sm:py-12 bg-[#fcfdfd] font-[Inter,sans-serif]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container */}
        <div className="relative bg-[#f0f7ff] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between border border-[#e0efff] shadow-sm">
          {/* Left: Content Section */}
          <div className="flex-1 p-8 sm:p-10 lg:p-14 relative z-10 w-full">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0d1c2a] mb-3 leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif" }}>
              Discover the Aakash Advantage
            </h2>

            <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8 max-w-xl">
              Download the brochure to explore our programs, academic approach,
              and student support in detail
            </p>

            <button className="inline-flex items-center gap-2.5 bg-[#3da9fc] hover:bg-[#2896ea] text-white font-bold text-[15px] px-6 py-3.5 rounded-md shadow-sm transition-all active:scale-95 group">
              Download Brochure
              <ArrowDownToLine
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          {/* Right: Image Section */}
          <div className="w-full md:w-[45%] h-[200px] md:h-auto min-h-[250px] sm:min-h-[300px] relative flex items-end justify-end self-stretch overflow-hidden">
            {/* NOTE: Replace this generic image src with the exact transparent PNG 
              URL of the 3D girl character from your assets. 
            */}
            <img
              src="https://www.aakash.ac.in/_next/image?url=%2Fimages%2Fhomepage%2FbrochureImgDesk.avif&w=640&q=90"
              alt="Student Brochure"
              loading="lazy"
              className="absolute bottom-0 right-0 lg:-right-4 w-[85%] md:w-[120%] max-w-[380px] object-contain object-bottom pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
