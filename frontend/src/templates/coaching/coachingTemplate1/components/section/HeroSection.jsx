import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection({ config = {} }) {
  const { slides = [] } = config;

  if (!slides.length) return null;

  const total = slides.length;
  const [cur, setCur] = useState(0);

  const goTo = useCallback(
    (n) => setCur(((n % total) + total) % total),
    [total],
  );
  const next = useCallback(() => goTo(cur + 1), [cur, goTo]);
  const prev = useCallback(() => goTo(cur - 1), [cur, goTo]);

  return (
    <section className="w-full mt-4 md:mt-8 px-4 max-w-360 mx-auto">
      <div className="relative overflow-hidden shadow-2xl bg-black group">
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] bg-[#001f3e]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                cur === i
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 pointer-events-none"
              }`}>
              <img
                src={slide.image}
                alt={`Banner ${i + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-full text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none"
          aria-label="Previous">
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-full text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none"
          aria-label="Next">
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                cur === i
                  ? "w-6 md:w-10 bg-white"
                  : "w-1.5 md:w-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
