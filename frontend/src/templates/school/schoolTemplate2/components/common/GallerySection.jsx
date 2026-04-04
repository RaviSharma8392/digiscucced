import React, { useState } from "react";
import {
  PhotoIcon,
  VideoCameraIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon as PlaySolid } from "@heroicons/react/24/solid";

// ══════════════════════════════════════════════════════════════════════════════
//  Mock Data Fallback
// ══════════════════════════════════════════════════════════════════════════════
const defaultGalleryItems = [
  {
    id: 1,
    type: "photo",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    title: "Annual Day Celebration",
  },
  {
    id: 2,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
    title: "Sports Meet Highlights",
  },
  {
    id: 3,
    type: "photo",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    title: "Science Exhibition",
  },
  {
    id: 4,
    type: "photo",
    src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop",
    title: "Cultural Program",
  },
  {
    id: 5,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop",
    title: "Republic Day Parade",
  },
  {
    id: 6,
    type: "photo",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    title: "Alumni Meet 2023",
  },
];

// ══════════════════════════════════════════════════════════════════════════════
//  Simple Gallery Card (Removed complex hover overlays/animations for performance)
// ══════════════════════════════════════════════════════════════════════════════
function GalleryCard({ item }) {
  const isVideo = item.type === "video";
  const displaySrc = isVideo ? item.thumb : item.src;

  return (
    <a
      href={item.src} // Just link directly to the source instead of a heavy modal
      target="_blank"
      rel="noopener noreferrer"
      className="relative -xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 bg-white group block">
      {/* Image */}
      <div className="aspect-[4/3] bg-gray-100 relative">
        <img
          src={displaySrc}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />

        {/* Simple Play Badge for Videos */}
        {isVideo && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d35050]/90 -full p-3 shadow-lg">
            <PlaySolid className="w-8 h-8 text-white" />
          </div>
        )}
      </div>

      {/* Title Bar */}
      <div className="p-4 border-t border-gray-100">
        <h3 className="about-school-sans text-gray-800 text-[15px] font-bold leading-tight truncate">
          {item.title}
        </h3>
        <p className="about-school-sans text-gray-500 text-[13px] mt-1">
          {isVideo ? "Video" : "Photo"}
        </p>
      </div>
    </a>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
//  Main Section
// ══════════════════════════════════════════════════════════════════════════════

const FILTERS = [
  { key: "all", labelEn: "All", labelHi: "सभी", Icon: null },
  { key: "photo", labelEn: "Photos", labelHi: "तस्वीरें", Icon: PhotoIcon },
  { key: "video", labelEn: "Videos", labelHi: "वीडियो", Icon: VideoCameraIcon },
];

export default function GallerySection({
  items = defaultGalleryItems,
  viewAllUrl = "/gallery",
}) {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <section
      aria-labelledby="gallery-heading"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* ── Section Header ── */}
        <header className="mb-10 text-center flex flex-col items-center">
          <p className="about-school-sans text-gray-600 font-semibold text-lg uppercase tracking-wider mb-2">
            Our Memories
          </p>

          <h2
            id="gallery-heading"
            className="about-school-serif text-3xl sm:text-4xl font-bold text-[#1a1f5e] leading-tight flex flex-col gap-1 mb-2">
            <span>Media Gallery</span>
            <span>मीडिया गैलरी</span>
          </h2>

          <svg
            width="80"
            height="12"
            viewBox="0 0 100 15"
            fill="none"
            className="mt-2"
            aria-hidden="true">
            <path
              d="M2 12C25 4 60 2 95 10"
              stroke="#d35050"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </header>

        {/* ── Simple Filter Tabs ── */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {FILTERS.map(({ key, labelEn, labelHi, Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`about-school-sans flex items-center gap-1.5 px-4 py-2  text-[14px] font-bold transition-colors border
                ${
                  filter === key
                    ? "bg-[#1a1f5e] text-white border-[#1a1f5e]"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}>
              {Icon && <Icon className="w-4 h-4" />}
              <span>{labelEn}</span>
              <span className="opacity-50 mx-0.5">|</span>
              <span className="opacity-80">{labelHi}</span>
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-500 about-school-sans">
            No media found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((item) => (
              <GalleryCard key={`gal-${item.id}`} item={item} />
            ))}
          </div>
        )}

        {/* ── View All Button ── */}
        <div className="mt-12 text-center">
          <a
            href={viewAllUrl}
            className="inline-flex items-center gap-2 bg-[#d35050] hover:bg-[#b03d3d] text-white px-6 py-3  font-about-school-sans font-bold text-[15px] transition-colors">
            View All Gallery <span className="opacity-70 mx-1">|</span> संपूर्ण
            गैलरी
            <ArrowRightIcon className="w-4 h-4 stroke-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
