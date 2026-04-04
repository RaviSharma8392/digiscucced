import React, { useState, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from "lucide-react";

export default function GalleryStrip({ config = {}, theme = {} }) {
  // ─── Theme tokens ────────────────────────────────────────────────
  const t = {
    primary: theme.primary || "#003366",
    background: theme.background || "#ffffff",
    text: theme.text || "#1f2937",
    textHover: theme.textHover || "#003366",
    fontFamily: theme.fontFamily || "'Inter', sans-serif",
    footerBg: theme.footerBg || "#002855",
    footerText: theme.footerText || "#ffffff",
    footerMuted: theme.footerMuted || "#9ca3af",
    primaryHover: theme.primaryHover || "#DC2626",
    border: theme.border || "#e5e7eb",
    whatsapp: theme.whatsapp || "#25D366",
  };

  // ─── Config ──────────────────────────────────────────────────────
  const {
    eyebrow = "Visual Stories",
    title = "Campus Gallery",
    subtitle = "Moments that define us — captured in every frame.",
    linkText = "View Full Gallery",
    linkUrl = "#",
  } = config?.header || {};

  const defaultImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900",
      alt: "Students in cafeteria",
      label: "Campus Life",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=900",
      alt: "Science laboratory",
      label: "Science Lab",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=900",
      alt: "Art and craft session",
      label: "Art Studio",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=900",
      alt: "Yoga on the grounds",
      label: "Sports & Yoga",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=900",
      alt: "Annual day dance",
      label: "Performing Arts",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900",
      alt: "Music rehearsal",
      label: "Music Room",
    },
  ];

  const images = config?.images?.length > 0 ? config.images : defaultImages;

  // ─── Lightbox state ───────────────────────────────────────────────
  const [activeIdx, setActiveIdx] = useState(null);

  const openAt = (i) => setActiveIdx(i);
  const close = () => setActiveIdx(null);
  const prev = useCallback(
    () => setActiveIdx((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setActiveIdx((i) => (i + 1) % images.length),
    [images.length],
  );

  // keyboard nav
  React.useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, next, prev]);

  return (
    <>
      <section
        style={{ backgroundColor: t.background, fontFamily: t.fontFamily }}
        className="px-6 py-20 lg:py-28 w-full">
        <div className="max-w-7xl mx-auto">
          {/* ── HEADER ──────────────────────────────────────────── */}
          <div className="flex flex-col items-center text-center mb-14">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest"
              style={{
                background: `${t.primary}12`,
                color: t.primary,
                border: `1px solid ${t.primary}22`,
              }}>
              <Images size={13} />
              {eyebrow}
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{
                color: t.primary,
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.2,
              }}>
              {title}
            </h2>

            {/* Accent underline */}
            <div
              style={{
                width: "48px",
                height: "4px",
                background: t.primaryHover,
                borderRadius: "2px",
                margin: "0 auto 1.25rem",
              }}
            />

            <p
              className="max-w-lg text-base leading-relaxed"
              style={{ color: t.footerMuted }}>
              {subtitle}
            </p>
          </div>

          {/* ── MOSAIC GRID ─────────────────────────────────────── */}
          {/* Row 1: 1 tall (span-2-rows) + 2 standard */}
          {/* Row 2: 3 standard */}
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto",
              background: t.border,
            }}>
            {images.slice(0, 6).map((img, idx) => {
              // First image is tall (spans 2 rows)
              const isFeatured = idx === 0;
              return (
                <div
                  key={img.id || idx}
                  onClick={() => openAt(idx)}
                  className="relative overflow-hidden cursor-pointer group"
                  style={{
                    gridRow: isFeatured ? "span 2" : "span 1",
                    aspectRatio: isFeatured ? "3/4" : "4/3",
                    background: t.border,
                  }}>
                  {/* Image */}
                  {img.src ? (
                    <img
                      src={img.src}
                      alt={img.alt || `Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      style={{ display: "block" }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-sm"
                      style={{ color: t.footerMuted }}>
                      No Image
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                    style={{
                      background: `linear-gradient(to top, ${t.primary}d9 0%, ${t.primary}44 50%, transparent 75%)`,
                    }}
                  />

                  {/* Label + zoom icon */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 flex items-end justify-between">
                    {img.label && (
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{
                          color: t.footerText,
                          fontFamily: t.fontFamily,
                        }}>
                        {img.label}
                      </span>
                    )}
                    <ZoomIn
                      size={18}
                      strokeWidth={2}
                      style={{
                        color: t.footerText,
                        opacity: 0.85,
                        flexShrink: 0,
                        marginLeft: "auto",
                      }}
                    />
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <span
                      className="absolute top-3 left-3 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest rounded-sm"
                      style={{
                        background: t.primaryHover,
                        color: t.footerText,
                      }}>
                      Featured
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── CTA BUTTON ──────────────────────────────────────── */}
          <div className="flex justify-center mt-12">
            <a
              href={linkUrl}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-250"
              style={{
                border: `2px solid ${t.primary}`,
                color: t.primary,
                background: "transparent",
                fontFamily: t.fontFamily,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = t.primary;
                e.currentTarget.style.color = t.footerText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = t.primary;
              }}>
              {linkText}
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ────────────────────────────────────────────── */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={close}>
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-5 right-5 p-2 transition-opacity duration-200 hover:opacity-60"
            style={{ color: t.footerText }}>
            <X size={28} strokeWidth={1.8} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 p-3 transition-opacity duration-200 hover:opacity-60"
            style={{ color: t.footerText }}>
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>

          {/* Image + caption */}
          <div
            className="flex flex-col items-center px-16"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "900px", width: "100%" }}>
            <img
              src={images[activeIdx].src}
              alt={images[activeIdx].alt}
              className="max-h-[80vh] w-full object-contain"
              style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.6)" }}
            />
            <div className="mt-5 flex items-center gap-4">
              {images[activeIdx].label && (
                <span
                  className="px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest rounded-sm"
                  style={{ background: t.primaryHover, color: t.footerText }}>
                  {images[activeIdx].label}
                </span>
              )}
              <p
                className="text-sm font-light tracking-wide"
                style={{ color: t.footerMuted }}>
                {images[activeIdx].alt}
              </p>
              <span
                className="text-xs ml-auto"
                style={{ color: t.footerMuted }}>
                {activeIdx + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 p-3 transition-opacity duration-200 hover:opacity-60"
            style={{ color: t.footerText }}>
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  openAt(i);
                }}
                style={{
                  width: i === activeIdx ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === activeIdx ? t.primaryHover : t.footerMuted,
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
