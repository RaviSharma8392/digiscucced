import React from "react";
import { GraduationCap, ArrowUpRight, ArrowRight } from "lucide-react";

export default function ProgramsGrids({ programs = {}, theme = {} }) {
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
  const header = programs?.header || {
    eyebrow: "Programs & Activities",
    title: "Learning Beyond Books",
    description:
      "We believe education extends beyond textbooks — helping students discover their talents, teamwork, and leadership skills through vibrant extracurricular opportunities.",
    linkText: "Explore All Programs",
    linkUrl: "#",
  };

  const items = programs?.items || [
    {
      id: 1,
      title: "Co-Curricular Activities",
      subtitle: "Encouraging creativity and confidence",
      tag: "Creative",
      image:
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Sports & Fitness",
      subtitle: "Building discipline, teamwork, and agility",
      tag: "Athletics",
      image:
        "https://images.unsplash.com/photo-1588506149592-7f724391e600?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Music & Performing Arts",
      subtitle: "Inspiring responsibility and empathy",
      tag: "Arts",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Leadership & Social Initiatives",
      subtitle: "Empowering the leaders of tomorrow",
      tag: "Leadership",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section
      style={{ backgroundColor: t.background, fontFamily: t.fontFamily }}
      className="px-6 py-20 lg:py-28 w-full">
      <div className="max-w-7xl mx-auto">
        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
          {/* Left: Eyebrow + Title */}
          <div className="max-w-lg">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest"
              style={{
                background: `${t.primary}12`,
                color: t.primary,
                border: `1px solid ${t.primary}22`,
              }}>
              <GraduationCap size={14} />
              {header.eyebrow}
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{
                color: t.primary,
                fontFamily: "'Playfair Display', serif",
              }}>
              {header.title}
            </h2>

            {/* Accent underline */}
            <div
              style={{
                width: "48px",
                height: "4px",
                background: t.primaryHover,
                borderRadius: "2px",
                marginTop: "1.25rem",
              }}
            />
          </div>

          {/* Right: Description + CTA */}
          <div className="max-w-md md:pb-2">
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: t.footerMuted, fontSize: "0.95rem" }}>
              {header.description}
            </p>

            <a
              href={header.linkUrl}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group transition-colors duration-200"
              style={{ color: t.primaryHover }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.primary)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = t.primaryHover)
              }>
              {header.linkText}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: `1px solid ${t.border}`, marginBottom: "3.5rem" }}
        />

        {/* ── GRID ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {items.map((item, idx) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              {/* Image */}
              <div
                className="relative w-full aspect-square overflow-hidden mb-5"
                style={{ background: t.border }}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(to top, ${t.primary}cc 0%, transparent 60%)`,
                  }}
                />

                {/* Tag badge */}
                {item.tag && (
                  <span
                    className="absolute top-3 left-3 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-widest rounded-sm"
                    style={{
                      background: t.primaryHover,
                      color: t.footerText,
                      fontFamily: t.fontFamily,
                    }}>
                    {item.tag}
                  </span>
                )}

                {/* Index number – bottom right on hover */}
                <span
                  className="absolute bottom-3 right-3 text-[0.65rem] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: t.footerText, letterSpacing: "0.1em" }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col">
                <h3
                  className="text-lg font-bold mb-1.5 leading-snug transition-colors duration-200 group-hover:opacity-80"
                  style={{
                    color: t.primary,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: t.footerMuted }}>
                  {item.subtitle}
                </p>

                {/* Inline arrow link */}
                <span
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: t.primaryHover }}>
                  Discover
                  <ArrowRight size={12} strokeWidth={2.5} />
                </span>
              </div>

              {/* Bottom border accent – animates in on hover */}
              <div
                className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: t.primaryHover }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
