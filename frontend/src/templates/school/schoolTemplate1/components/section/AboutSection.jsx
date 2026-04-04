/**
 * AboutSection.jsx
 *
 * 5 layout variants, all config-driven via props.
 * Theme (primary, accent) comes from schoolConfig.
 * Content (tag, heading, image, highlights, timeline) comes from aboutSectionConfig.
 *
 * Usage:
 *   <AboutSection about={aboutSectionConfig} colors={schoolConfig.theme} variant={1} />
 *
 * Variants:
 *   1 → Modern Heritage    – offset-frame image, floating badge, 2-col grid
 *   2 → Ivy League Arch    – arch-shaped portrait, white card highlights
 *   3 → Editorial Overlap  – image + overlapping content card, dark right block
 *   4 → Dark Impact        – full dark bg, image strip, stat counters
 *   5 → Timeline Split     – portrait left, school milestone timeline right
 */

import { Link } from "react-router-dom";

// ─────────────────────────────────────────────
// Micro-components (shared across variants)
// ─────────────────────────────────────────────

const CheckIcon = ({ accent }) => (
  <div
    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
    style={{ background: `${accent}22` }}>
    <svg className="w-3 h-3" fill="none" stroke={accent} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

// ─────────────────────────────────────────────
// VARIANT 1 — Modern Heritage
// Offset-frame image, floating years badge, 2-col grid
// Best for: clean, contemporary schools
// ─────────────────────────────────────────────
function V1ModernHeritage({ about, primary, accent }) {
  const {
    tag,
    heading,
    description,
    highlights,
    years,
    yearsLabel,
    image,
    ctaLabel,
    ctaPath,
  } = about;

  return (
    <section className="px-6 py-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
        {/* Image with offset frame + floating badge */}
        <div className="relative max-w-md mx-auto lg:max-w-full lg:mx-0">
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 border-2 rounded-3xl pointer-events-none"
            style={{ borderColor: accent }}
          />
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src={image}
              alt="School"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          {years && (
            <div className="absolute -bottom-6 -left-5 z-20 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: `${primary}12` }}>
                🏫
              </div>
              <div>
                <div
                  className="font-extrabold text-3xl"
                  style={{
                    color: accent,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                  {years}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                  {yearsLabel}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="pt-6 lg:pt-0">
          {tag && (
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-0.5" style={{ background: accent }} />
              <span
                className="text-xs font-bold uppercase tracking-[.22em]"
                style={{ color: accent }}>
                {tag}
              </span>
            </div>
          )}
          <h2
            className="text-4xl md:text-5xl font-black mb-5 leading-tight text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {heading}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckIcon accent={accent} />
                <span className="text-slate-700 font-medium text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
          {ctaPath && (
            <Link
              to={ctaPath}
              className="group inline-flex items-center text-sm font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              style={{ background: primary, color: "#fff" }}>
              {ctaLabel}
              <ArrowIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VARIANT 2 — Ivy League Arch
// Arch-shaped portrait, card-style highlights list
// Best for: premium / elite schools
// ─────────────────────────────────────────────
function V2IvyLeagueArch({ about, primary, accent }) {
  const {
    tag,
    heading,
    description,
    highlights,
    years,
    yearsLabel,
    image,
    ctaLabel,
    ctaPath,
  } = about;

  return (
    <section className="px-6 py-28" style={{ background: `${primary}06` }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Content — 5 cols */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          {tag && (
            <div
              className="text-xs font-bold uppercase tracking-[.22em] mb-4"
              style={{ color: accent }}>
              {tag}
            </div>
          )}
          <h2
            className="text-4xl md:text-5xl font-black mb-5 leading-tight text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {heading}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8 font-light">
            {description}
          </p>
          <ul className="space-y-3 mb-8">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-slate-700 font-semibold text-sm">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: accent }}
                />
                {item}
              </li>
            ))}
          </ul>
          {ctaPath && (
            <Link
              to={ctaPath}
              className="group inline-flex items-center text-sm font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all"
              style={{ background: accent, color: primary }}>
              {ctaLabel}
              <ArrowIcon />
            </Link>
          )}
        </div>

        {/* Arch image — 7 cols */}
        <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-end">
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            <div
              className="absolute inset-0 blur-3xl opacity-15 translate-x-4 translate-y-4"
              style={{ background: primary }}
            />
            <div className="relative z-10 w-full aspect-[3/4] rounded-t-[9999px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={image}
                alt="School"
                className="w-full h-full object-cover"
              />
            </div>
            {years && (
              <div
                className="absolute bottom-12 -left-12 z-20 bg-white p-5 rounded-2xl shadow-xl border-l-4"
                style={{ borderColor: accent }}>
                <div
                  className="font-black text-5xl"
                  style={{
                    color: primary,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                  {years}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  {yearsLabel}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VARIANT 3 — Editorial Overlap
// Large image with overlapping card, dark side panel
// Best for: modern/design-forward schools
// ─────────────────────────────────────────────
function V3EditorialOverlap({ about, primary, accent }) {
  const {
    tag,
    heading,
    description,
    highlights,
    years,
    yearsLabel,
    image,
    ctaLabel,
    ctaPath,
  } = about;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/3 h-full hidden lg:block"
        style={{ background: primary }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-0">
        {/* Image */}
        <div className="w-full lg:w-3/5 relative">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt="School"
              className="w-full h-full object-cover"
            />
          </div>
          {years && (
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: accent }}
              />
              <span
                className="font-black text-base"
                style={{
                  color: primary,
                  fontFamily: "'Playfair Display', serif",
                }}>
                {years}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {yearsLabel}
              </span>
            </div>
          )}
        </div>

        {/* Overlapping card */}
        <div className="w-full lg:w-2/5 mt-[-48px] lg:mt-0 lg:ml-[-80px] relative z-10">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_20px_56px_rgba(0,0,0,.15)] border border-slate-50">
            {tag && (
              <div className="text-xs font-black uppercase tracking-[.25em] mb-4 text-slate-400">
                {tag}
              </div>
            )}
            <h2
              className="text-3xl font-black mb-5 text-slate-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {heading}
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              {description}
            </p>
            <div className="space-y-3.5 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100 flex-shrink-0"
                    style={{ color: primary }}>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {ctaPath && (
              <Link
                to={ctaPath}
                className="group flex w-full justify-center items-center text-sm font-bold px-8 py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md"
                style={{ background: accent, color: primary }}>
                {ctaLabel}
                <ArrowIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VARIANT 4 — Dark Impact
// Full-width dark bg, image strip, large stat counters
// Best for: high-performing / sports-focused schools
// Props: about.stats = [{ num, label }] (optional, falls back to years)
// ─────────────────────────────────────────────
function V4DarkImpact({ about, primary, accent }) {
  const {
    tag,
    heading,
    description,
    images = [], // array of { src, alt } for the strip
    stats = [], // array of { num, label }
    ctaLabel,
    ctaPath,
  } = about;

  return (
    <section
      className="px-6 py-20 relative overflow-hidden"
      style={{ background: primary }}>
      {/* Decorative rings */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ border: `40px solid ${accent}18` }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: `24px solid rgba(255,255,255,.06)` }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top: heading + description */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
          <div className="flex-1">
            {tag && (
              <div
                className="text-xs font-bold uppercase tracking-[.22em] mb-3"
                style={{ color: accent }}>
                {tag}
              </div>
            )}
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {heading}
            </h2>
          </div>
          <div className="lg:w-72">
            <p className="text-white/65 text-sm leading-relaxed font-light mb-5">
              {description}
            </p>
            {ctaPath && (
              <Link
                to={ctaPath}
                className="group inline-flex items-center text-sm font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all"
                style={{ background: accent, color: primary }}>
                {ctaLabel}
                <ArrowIcon />
              </Link>
            )}
          </div>
        </div>

        {/* Image strip */}
        {images.length > 0 && (
          <div className="flex gap-3 mb-10">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-1 h-24 rounded-xl overflow-hidden"
                style={{ border: "0.5px solid rgba(255,255,255,.12)" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <div
            className={`grid gap-4 grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)}`}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 transition-all hover:bg-white/20"
                style={{
                  background: "rgba(255,255,255,.09)",
                  border: "0.5px solid rgba(255,255,255,.12)",
                }}>
                <div
                  className="font-black text-4xl leading-none mb-2"
                  style={{
                    color: accent,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                  {s.num}
                </div>
                <div className="text-xs text-white/55 font-medium leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VARIANT 5 — Timeline Split
// Portrait image left, milestone timeline right
// Best for: established schools with history to tell
// Props: about.timeline = [{ year, title, desc }]
// ─────────────────────────────────────────────
function V5TimelineSplit({ about, primary, accent }) {
  const {
    tag,
    heading,
    description,
    years,
    yearsLabel,
    image,
    timeline = [],
    ctaLabel,
    ctaPath,
  } = about;

  return (
    <section className="px-6 py-20 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left: image + years card — 2 cols */}
        <div className="lg:col-span-2">
          {tag && (
            <div
              className="text-xs font-bold uppercase tracking-[.22em] mb-4"
              style={{ color: accent }}>
              {tag}
            </div>
          )}
          <h2
            className="text-4xl font-black text-slate-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {heading}
          </h2>
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-5">
            <img
              src={image}
              alt="School"
              className="w-full h-full object-cover"
            />
          </div>
          {years && (
            <div
              className="bg-white rounded-2xl p-5 shadow-md"
              style={{ borderLeft: `4px solid ${accent}` }}>
              <div
                className="text-5xl font-black leading-none"
                style={{
                  color: primary,
                  fontFamily: "'Playfair Display', serif",
                }}>
                {years}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">
                {yearsLabel}
              </div>
            </div>
          )}
        </div>

        {/* Right: description + timeline — 3 cols */}
        <div className="lg:col-span-3 pt-0 lg:pt-14">
          <p className="text-slate-500 text-base leading-relaxed mb-10 font-light">
            {description}
          </p>

          <div className="flex flex-col">
            {timeline.map((event, i) => (
              <div key={i} className="flex gap-4 pb-8 last:pb-0 relative">
                {/* Dot + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-3 h-3 rounded-full border-2 border-white shadow mt-1 flex-shrink-0"
                    style={{
                      background: accent,
                      boxShadow: `0 0 0 2px ${accent}`,
                    }}
                  />
                  {i < timeline.length - 1 && (
                    <div
                      className="flex-1 w-0.5 mt-1.5"
                      style={{
                        background: `linear-gradient(to bottom, ${accent}, ${accent}28)`,
                      }}
                    />
                  )}
                </div>
                {/* Event content */}
                <div className="flex-1">
                  <div
                    className="text-xs font-bold tracking-wider mb-1"
                    style={{ color: accent }}>
                    {event.year}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    {event.title}
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {event.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {ctaPath && (
            <Link
              to={ctaPath}
              className="group inline-flex items-center text-sm font-bold px-8 py-4 rounded-xl mt-6 hover:-translate-y-0.5 hover:shadow-lg transition-all"
              style={{ background: primary, color: "#fff" }}>
              {ctaLabel}
              <ArrowIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Main export — routes to the correct variant
// ─────────────────────────────────────────────
export default function AboutSection({ about = {}, colors = {}, variant = 1 }) {
  const primary = colors?.primary || "#0f3460";
  const accent = colors?.accent || "#e8a020";

  const props = { about, primary, accent };

  if (variant === 1) return <V1ModernHeritage {...props} />;
  if (variant === 2) return <V2IvyLeagueArch {...props} />;
  if (variant === 3) return <V3EditorialOverlap {...props} />;
  if (variant === 4) return <V4DarkImpact {...props} />;
  if (variant === 5) return <V5TimelineSplit {...props} />;

  return null;
}
