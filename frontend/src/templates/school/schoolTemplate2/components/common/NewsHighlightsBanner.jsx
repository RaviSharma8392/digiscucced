import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// ==========================================
// 1. SUB-COMPONENTS
// ==========================================

const FeaturedNewsCard = ({ item }) => (
  <article className="lg:col-span-2 relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[380px] md:h-[460px] group cursor-pointer border border-gray-200">
    <img
      src={item.image}
      alt={item.titleEn}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {/* Dark gradient overlay matching the image */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
      {/* Large Sans-Serif Date */}
      <time
        dateTime={item.date}
        className="about-school-sans font-bold text-white text-2xl md:text-3xl tracking-wide mb-3 block drop-shadow-md">
        {item.date}
      </time>

      {/* Hindi Description (Serif) */}
      <p className="about-school-serif text-gray-100 text-[15px] md:text-base leading-relaxed line-clamp-2 mb-2">
        {item.titleHi}
      </p>

      {/* English Description (Sans-Serif) */}
      <p className="about-school-sans text-gray-300 text-sm md:text-[15px] leading-relaxed line-clamp-2">
        {item.titleEn}
      </p>
    </div>
  </article>
);

const StandardNewsCard = ({ item }) => (
  <article className="lg:col-span-1 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 flex flex-col group h-full cursor-pointer">
    <div className="h-56 overflow-hidden flex-shrink-0 relative">
      <img
        src={item.image}
        alt={item.titleEn}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
    </div>

    <div className="p-5 md:p-6 flex flex-col flex-grow bg-white">
      {/* Large Sans-Serif Date (Black, like in the image) */}
      <time
        dateTime={item.date}
        className="about-school-sans font-bold text-gray-900 text-xl md:text-2xl tracking-wide mb-3 block">
        {item.date}
      </time>

      {/* Hindi Description (Serif) */}
      <p className="about-school-serif text-gray-800 text-[15px] leading-relaxed line-clamp-3">
        {item.titleHi}
      </p>

      {/* English Description (Sans-Serif, separated by a light border) */}
      <p className="about-school-sans text-gray-500 text-sm leading-relaxed mt-3 border-t border-gray-100 pt-3 line-clamp-2">
        {item.titleEn}
      </p>
    </div>
  </article>
);

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

export default function NewsHighlightsBanner({ data, onViewAllClick }) {
  if (!data || !data.items) return null;

  return (
    <section
      aria-labelledby="news-heading"
      className="w-full max-w-[1400px] mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* HEADER */}
      <header className="mb-10 text-left">
        {/* Subtitle with both Hindi and English */}
        <div className="mb-4">
          <p className="about-school-sans text-gray-800 font-semibold text-lg md:text-xl">
            {data.header.subtitle.hi}
          </p>
          <p className="about-school-sans text-gray-500 font-medium text-sm md:text-base mt-1">
            {data.header.subtitle.en}
          </p>
        </div>

        {/* Semantic Fix: Combined into one H2 for screen readers */}
        <h2
          id="news-heading"
          className="about-school-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1a1f5e] leading-tight mb-2 flex flex-col gap-1">
          <span>{data.header.title.en}</span>
          <span>{data.header.title.hi}</span>
        </h2>

        {/* Red swoosh underline */}
        <svg
          width="100"
          height="15"
          viewBox="0 0 100 15"
          fill="none"
          className="mb-8"
          aria-hidden="true">
          <path
            d="M2 12C25 4 60 2 95 10"
            stroke="#d35050"
            strokeWidth="4"
            strokeLinecap="round"
            className="about-school-swoosh-path"
          />
        </svg>
      </header>

      {/* NEWS GRID: 1 Large Left, 2 Smaller Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {data.items.map((item) =>
          item.isFeatured ? (
            <FeaturedNewsCard key={`featured-${item.id}`} item={item} />
          ) : (
            <StandardNewsCard key={`standard-${item.id}`} item={item} />
          ),
        )}
      </div>

      {/* BUTTON */}
      <div className="mt-14 text-center">
        <button
          onClick={onViewAllClick}
          className="inline-flex items-center justify-center gap-3 bg-[#d35050] hover:bg-[#b03d3d] text-white px-8 py-3.5 rounded font-about-school-sans font-bold text-lg transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200">
          <span className="about-school-sans">
            {data.button.hi} | {data.button.en}
          </span>
          <ArrowRightIcon className="w-5 h-5 stroke-2" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
