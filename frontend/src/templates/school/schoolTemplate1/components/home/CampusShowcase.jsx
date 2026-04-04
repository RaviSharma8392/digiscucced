import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function CampusShowcase({ config = {}, theme = {} }) {
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
    eyebrow = "Campus Life",
    title = "Explore Our Campus in Sector 10, Dwarka",
    subtitle = "Where every corner sparks curiosity — arts, labs, sports & more.",
    linkText = "Take the Tour",
    linkUrl = "#",
    location = "Sector 10, Dwarka, New Delhi",
  } = config.header || {};

  const images = config.images || [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=600",
      alt: "Dance & Performing Arts",
      label: "Performing Arts",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
      alt: "Student studying",
      label: "Library",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
      alt: "Students in cafeteria",
      label: "Cafeteria",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
      alt: "Music class",
      label: "Music Room",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      alt: "Science lab",
      label: "Science Labs",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
      alt: "Sports & Yoga",
      label: "Sports & Yoga",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
      alt: "Student reading",
      label: "Reading Lounge",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
      alt: "Art class",
      label: "Art Studio",
    },
  ];

  // ─── Inline styles built from theme ──────────────────────────────
  const sectionStyle = {
    fontFamily: t.fontFamily,
    background: t.background,
    borderTop: `1px solid ${t.border}`,
    borderBottom: `1px solid ${t.border}`,
  };

  const panelStyle = {
    background: t.primary, // solid brand-navy panel
  };

  const eyebrowStyle = {
    color: t.primaryHover, // Red accent — punchy contrast on navy
    letterSpacing: "0.18em",
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "uppercase",
  };

  const titleStyle = {
    color: t.footerText, // White on dark panel
    lineHeight: 1.25,
  };

  const subtitleStyle = {
    color: t.footerMuted,
    fontSize: "0.9rem",
    lineHeight: 1.6,
  };

  const dividerStyle = {
    background: t.primaryHover,
    height: "3px",
    width: "40px",
    borderRadius: "2px",
    margin: "1.25rem 0",
  };

  const locationStyle = {
    color: t.footerMuted,
    fontSize: "0.78rem",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginTop: "1rem",
  };

  const ctaStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "2rem",
    padding: "0.65rem 1.5rem",
    background: t.primaryHover,
    color: t.footerText,
    fontWeight: 700,
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "3px",
    transition: "background 0.25s, transform 0.2s",
  };

  return (
    <section
      style={sectionStyle}
      className="flex flex-col lg:flex-row w-full overflow-hidden">
      {/* ── LEFT: Brand panel ───────────────────────────────────── */}
      <div
        style={panelStyle}
        className="w-full lg:w-[34%] xl:w-[30%] flex flex-col justify-center p-12 lg:p-14 xl:p-16 shrink-0 relative">
        {/* Subtle geometric accent – top-right corner dot grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "120px",
            height: "120px",
            opacity: 0.07,
            backgroundImage: `radial-gradient(${t.footerText} 1.5px, transparent 1.5px)`,
            backgroundSize: "14px 14px",
          }}
        />

        <p style={eyebrowStyle}>{eyebrow}</p>

        <div style={dividerStyle} />

        <h2 style={titleStyle} className="text-2xl md:text-3xl font-bold">
          {title}
        </h2>

        <p style={subtitleStyle} className="mt-4">
          {subtitle}
        </p>

        <p style={locationStyle}>
          <MapPin size={13} />
          {location}
        </p>

        <a
          href={linkUrl}
          style={ctaStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = t.footerBg;
            e.currentTarget.style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = t.primaryHover;
            e.currentTarget.style.transform = "translateX(0)";
          }}>
          {linkText}
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>

      {/* ── RIGHT: Image grid ────────────────────────────────────── */}
      <div
        className="w-full lg:w-[66%] xl:w-[70%] grid grid-cols-2 md:grid-cols-4"
        style={{ gap: "3px", background: t.border, padding: "3px" }}>
        {images.map((img, idx) => (
          <div
            key={img.id || idx}
            className="relative w-full overflow-hidden group cursor-pointer"
            style={{
              aspectRatio: "4/5",
              background: t.border,
            }}>
            {/* Photo */}
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt || `Campus highlight ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-xs uppercase tracking-widest"
                style={{ color: t.footerMuted }}>
                No Image
              </div>
            )}

            {/* Hover overlay – gradient from bottom */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
              style={{
                background: `linear-gradient(to top, ${t.primary}ee 0%, transparent 55%)`,
              }}
            />

            {/* Label – slides up on hover */}
            {img.label && (
              <span
                className="absolute bottom-0 left-0 right-0 px-3 py-2
                           translate-y-full group-hover:translate-y-0
                           transition-transform duration-350 ease-out"
                style={{
                  color: t.footerText,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: t.fontFamily,
                }}>
                {img.label}
              </span>
            )}

            {/* Number badge */}
            <span
              className="absolute top-2 left-2 w-5 h-5 flex items-center justify-center
                         text-[0.6rem] font-bold rounded-sm
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: t.primaryHover,
                color: t.footerText,
              }}>
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
