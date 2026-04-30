import { Link } from "react-router-dom";

export default function GallerySection({ theme, gallery = {} }) {
  const primaryColor = theme?.primary || "#1E3A8A";
  const accentColor = theme?.accent || "#DC2626";

  const title = gallery?.title || "Our Institute Environment";
  const subtitle =
    gallery?.subtitle || "Explore our classrooms and training spaces";
  const images = gallery?.images || [];

  // ✅ Safe title split
  const words = title.split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const firstPart = words.join(" ");

  // ❌ No images → don't render
  if (!images.length) return null;

  return (
    <section
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
      aria-label="Institute Gallery"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-slate-800 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4
            className="font-bold tracking-wider uppercase mb-3 text-sm"
            style={{ color: accentColor }}
          >
            Gallery
          </h4>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {firstPart}{" "}
            {lastWord && (
              <span style={{ color: accentColor }}>{lastWord}</span>
            )}
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">

          {/* Main Image */}
          {images[0] && (
            <div className="col-span-2 row-span-2 relative group rounded-2xl overflow-hidden">
              <img
                src={images[0]}
                alt={`${title} main view`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                <span
                  className="text-sm md:text-base font-semibold px-6 py-2 rounded-full shadow-lg"
                  style={{ backgroundColor: accentColor, color: "#fff" }}
                >
                  Our Campus
                </span>
              </div>
            </div>
          )}

          {/* Other Images */}
          {images.slice(1, 7).map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`${title} image ${idx + 2}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-xs md:text-sm font-semibold bg-black/60 px-3 py-1 rounded-full">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {gallery?.cta?.label && (
          <div className="text-center mt-16">
            <Link
              to={gallery.cta.link || "#"}
              className="inline-block px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all"
              style={{ backgroundColor: primaryColor }}
            >
              {gallery.cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}