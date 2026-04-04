import React from "react";

export default function CampusGallery({ gallery = {}, theme = {} }) {
  // Safe fallbacks
  const primary = theme.primary || "#0f3460";
  const accent = theme.accent || "#e8a020";

  // If no images are provided, don't render the section
  if (!gallery?.images || gallery.images.length === 0) return null;

  // Take exactly 7 images for this specific architectural layout
  const displayImages = gallery.images.slice(0, 7);

  // Helper function to create the perfect 7-piece mosaic grid
  const getMosaicClasses = (index) => {
    switch (index) {
      case 0:
        // Huge 2x2 feature block (Top Left)
        return "md:col-span-2 md:row-span-2";
      case 1:
      case 2:
        // Standard squares (Top Right & Mid Right)
        return "col-span-1 row-span-1";
      case 3:
        // Wide rectangle (Bottom Left)
        return "md:col-span-2 row-span-1";
      case 4:
        // Standard square (Bottom Right)
        return "col-span-1 row-span-1";
      case 5:
        // Standard square (Bottom Left)
        return "col-span-1 row-span-1";
      case 6:
        // Wide rectangle (Bottom Right)
        return "md:col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-white w-full overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span
              className="w-12 h-[2px]"
              style={{ backgroundColor: accent }}
            />
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: accent }}>
              Campus Life
            </span>
            <span
              className="w-12 h-[2px]"
              style={{ backgroundColor: accent }}
            />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
            style={{ color: primary }}>
            {gallery.heading || "Campus Highlights"}
          </h2>
        </div>

        {/* ── Sharp Editorial Grid (7 Items) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 auto-rows-[250px] sm:auto-rows-[300px]">
          {displayImages.map((img, i) => (
            <div
              key={img.id || i}
              className={`group relative overflow-hidden bg-slate-100 cursor-pointer ${getMosaicClasses(i)}`}>
              {/* Image with slow, cinematic scale on hover */}
              <img
                src={img.src}
                alt={img.alt || `Gallery Image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Harsh Color Overlay */}
              {/* Replaces your JS background switch. Smoothly fades in the primary color */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out"
                style={{ backgroundColor: primary }}
              />

              {/* Text & Accents Hover Panel */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {/* Animated Sharp Accent Line */}
                <div
                  className="w-0 h-1 mb-4 transition-all duration-700 delay-100 group-hover:w-16 shadow-lg"
                  style={{ backgroundColor: accent }}
                />

                <h3 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wider drop-shadow-md">
                  {img.alt || "Campus Highlight"}
                </h3>

                {/* Optional subtle interactive cue */}
                <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em] mt-3 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
