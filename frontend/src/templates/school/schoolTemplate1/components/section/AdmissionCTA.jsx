import React from "react";
import { Link } from "react-router-dom";

export default function AdmissionCTA({ cta = {}, colors = {} }) {
  // Safe fallbacks matching your config
  const {
    heading = "Begin Your Child's Journey With Us",
    subtext = "Admissions for the upcoming academic session are now open. Seats fill fast — secure yours today.",
    primaryBtn,
    secondaryBtn,
  } = cta;

  const primary = colors.primary || "#0f3460";
  const accent = colors.accent || "#e8a020";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Deep, rich gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${primary} 0%, #06152a 100%)`,
        }}>
        {/* Subtle geometric background texture (sharp lines) */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
        {/* Dark overlay to ensure text readability over the grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center text-center">
        {/* Sharp Accent Line */}
        <div className="w-16 h-1 mb-8" style={{ backgroundColor: accent }} />

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 uppercase">
          {heading}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-12">
          {subtext}
        </p>

        {/* Buttons Array */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 justify-center">
          {primaryBtn && (
            <Link
              to={primaryBtn.path}
              className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              style={{
                backgroundColor: accent,
                color: primary,
              }}>
              {primaryBtn.label}
              <span className="ml-3 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}

          {secondaryBtn && (
            <Link
              to={secondaryBtn.path}
              className="group inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white border-2"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
              }}
              // React's inline styles don't support pseudo-classes like :hover easily,
              // so we use Tailwind's group-hover for the text color change
              onMouseEnter={(e) => {
                e.currentTarget.style.color = primary;
                e.currentTarget.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}>
              {secondaryBtn.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
