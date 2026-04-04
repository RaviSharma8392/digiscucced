import React, { useState, useMemo } from "react";
import { ZoomIn, X, ImageIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

// ─── MOCK DATA (High-Quality Education Placeholders) ───────────────
const categories = ["All", "Campus", "Classrooms", "Events", "Achievers"];

const galleryData = [
  {
    id: 1,
    category: "Campus",
    title: "Main Academic Block",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "Classrooms",
    title: "Smart Interactive Labs",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "Achievers",
    title: "Felicitation Ceremony 2024",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: "Events",
    title: "Annual Science Exhibition",
    src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: "Campus",
    title: "Library & Study Zones",
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: "Classrooms",
    title: "Doubt Solving Sessions",
    src: "https://images.unsplash.com/photo-1427504494785-319ce5154e83?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    category: "Events",
    title: "Sports Meet",
    src: "https://images.unsplash.com/photo-1546422904-90eab23c3d4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    category: "Achievers",
    title: "Top Rankers with Directors",
    src: "https://images.unsplash.com/photo-1523580494112-071d311fa80d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function GalleryPage({ business }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const siteName = business?.metaData?.name || "Institute";
  const slug = business?.slug || "";

  const pageTitle = `${siteName} Gallery`;
  const description = `Explore student achievements, campus life, and classroom moments at ${siteName}.`;

  const siteUrl = `${window.location.origin}/${slug}/gallery`;

  // Filter images based on the active category
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#fcfdfd] font-[Inter,sans-serif]">
      <Helmet key={siteUrl}>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      {/* ── HERO HEADER ── */}
      <div className="bg-[#0d1c2a] py-20 px-4 text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#00bbf0]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-6 backdrop-blur-sm border border-white/20">
            <ImageIcon className="w-5 h-5 text-[#00bbf0]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Roboto Slab', serif" }}>
            Life at <span className="text-[#00bbf0]">Aakash</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Take a visual tour of our state-of-the-art campus, vibrant student
            life, and the moments that define our legacy.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* ── FILTER TABS ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#00bbf0] text-white shadow-lg shadow-[#00bbf0]/30 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#00bbf0] hover:text-[#00bbf0]"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* ── IMAGE GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 animate-[fadeIn_0.5s_ease-out]">
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c2a]/90 via-[#0d1c2a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[#00bbf0] text-xs font-bold uppercase tracking-widest mb-1.5 drop-shadow-md">
                  {img.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  {img.title}
                </h3>
              </div>

              {/* Floating Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#00bbf0] hover:scale-110">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (If a category has no images) */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* ── FULL SCREEN LIGHTBOX ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] bg-[#0d1c2a]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)} // Click outside to close
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#ef6461] rounded-full flex items-center justify-center text-white transition-colors duration-300 z-50">
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking the image
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-[#00bbf0]/20 text-[#00bbf0] rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                {selectedImage.category}
              </span>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Roboto Slab', serif" }}>
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Basic Tailwind Animation Keyframe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </div>
  );
}
