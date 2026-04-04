/**
 * AdmissionsPage.jsx
 *
 * Sections (all driven by config, all optional):
 *   1. Hero            — full-bleed image, badge, headline, two CTAs
 *   2. Why Choose Us   — eyebrow + heading left, highlight cards right
 *   3. How to Apply    — dark primary bg, 4-step numbered process
 *   4. Campus Gallery  — masonry-style image grid with hover overlays
 *   5. Fee Structure   — clean table with accent header
 *   6. Split CTA       — dark left (CTA), white right (contact details)
 *   7. Mini Footer     — copyright only (full footer in SchoolFooter.jsx)
 *
 * Reads from:
 *   schoolConfig.theme  → colors
 *   schoolConfig.school → name, contact
 *   admissionsPageConfig → all content
 */

import { Link } from "react-router-dom";
import { schoolConfig } from "../config/schoolConfig";
import { admissionsPageConfig } from "../config/admissionsPageConfig";
import CampusGallery from "../../../src/components/admision/CampusGallery";

export default function AdmissionsPage() {
  const school = schoolConfig?.school || {};
  const theme = schoolConfig?.theme || {
    primary: "#0f3460",
    accent: "#e8a020",
  };

  const {
    hero = {},
    admissionInfo = {},
    admissionProcess = { enabled: false, steps: [] },
    gallery = { images: [] },
    feesOverview = { enabled: false, rows: [] },
    admissionCTA = {},
    admissionsContact,
  } = admissionsPageConfig || {};

  const contact = admissionsContact ?? school.contact ?? {};

  // ── Icon helpers ───────────────────────────────────────────────────────────
  const CheckCircle = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ContactIcon = ({ path }) => (
    <div
      className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
      style={{
        background: `${theme.primary}12`,
        border: `0.5px solid ${theme.primary}18`,
      }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme.primary}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d={path} />
      </svg>
    </div>
  );

  return (
    <main
      className="w-full overflow-hidden"
      style={{
        background: theme.background,
        color: theme.text,
        fontFamily: "'DM Sans', sans-serif",
      }}>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center min-h-[85vh] px-6 py-24 text-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"})`,
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,20,46,.72)" }}
        />
        {/* Gold top stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-[5px] z-10"
          style={{ background: theme.accent }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {hero.badge && (
            <div className="flex justify-center mb-7">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] px-5 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,.1)",
                  border: "0.5px solid rgba(255,255,255,.25)",
                  color: "#fff",
                }}>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: theme.accent }}
                />
                {hero.badge}
              </span>
            </div>
          )}

          <h1
            className="text-5xl sm:text-6xl font-black text-white leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {hero.heading || "Admissions Open"}
          </h1>

          <p className="text-lg text-white/80 leading-relaxed font-light mb-10 max-w-xl mx-auto">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {hero.primaryBtn && (
              <Link
                to={hero.primaryBtn.path}
                className="px-10 py-4 rounded-xl font-bold text-sm tracking-wide transition-all hover:-translate-y-1"
                style={{
                  background: theme.accent,
                  color: "#1a0800",
                  boxShadow: `0 8px 32px ${theme.accent}44`,
                }}>
                {hero.primaryBtn.label}
              </Link>
            )}
            {hero.secondaryBtn && (
              <Link
                to={hero.secondaryBtn.path}
                className="px-10 py-4 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-1 hover:bg-white/10"
                style={{ border: `1.5px solid ${theme.accent}99` }}>
                {hero.secondaryBtn.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#f8f6f2" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-5 h-0.5"
                style={{ background: theme.accent }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[.22em]"
                style={{ color: theme.accent }}>
                Admission Information
              </span>
            </div>
            <h2
              className="text-4xl font-bold leading-tight mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0f1a30",
              }}>
              {admissionInfo.heading || "Why Choose Us?"}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              {admissionInfo.description}
            </p>
          </div>

          {/* Right — highlight cards */}
          {admissionInfo.highlights?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {admissionInfo.highlights.map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-5 flex items-start gap-3 border transition-all duration-250"
                  style={{ borderColor: "rgba(0,0,0,.07)", cursor: "default" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = `0 12px 32px rgba(15,52,96,.1)`;
                    e.currentTarget.querySelector(".hl-bar").style.width =
                      "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.querySelector(".hl-bar").style.width = "0";
                  }}>
                  {/* Hover accent bar */}
                  <div
                    className="hl-bar absolute bottom-0 left-0 h-[2px] rounded-b-2xl transition-all duration-350"
                    style={{ width: 0, background: theme.accent }}
                  />
                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${theme.primary}10`,
                      color: theme.primary,
                    }}>
                    <CheckCircle />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-snug pt-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. ADMISSION PROCESS ─────────────────────────────────────────── */}
      {admissionProcess?.enabled && admissionProcess.steps?.length > 0 && (
        <section
          className="relative py-20 px-6 overflow-hidden"
          style={{ background: theme.primary }}>
          {/* Decorative rings */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
            style={{ border: `32px solid ${theme.accent}10` }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full pointer-events-none"
            style={{ border: `24px solid rgba(255,255,255,.05)` }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span
                  className="w-5 h-0.5"
                  style={{ background: `${theme.accent}80` }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-[.22em]"
                  style={{ color: `${theme.accent}cc` }}>
                  Your Journey Begins
                </span>
                <span
                  className="w-5 h-0.5"
                  style={{ background: `${theme.accent}80` }}
                />
              </div>
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {admissionProcess.heading || "How to Apply"}
              </h2>
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Connecting line (desktop) */}
              <div
                className="hidden md:block absolute top-7 left-[13%] right-[13%] h-px"
                style={{ background: "rgba(255,255,255,.12)" }}
              />

              {admissionProcess.steps.map((s, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center text-center group">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg mb-5 transition-transform duration-200 group-hover:scale-110"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: theme.accent,
                      color: theme.primary,
                      boxShadow: `0 0 0 8px ${theme.accent}18`,
                    }}>
                    {s.step || String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p
                    className="text-xs font-light leading-relaxed"
                    style={{ color: "rgba(255,255,255,.6)" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. CAMPUS GALLERY ────────────────────────────────────────────── */}
      {/* {gallery?.images?.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span
                  className="w-5 h-0.5"
                  style={{ background: theme.accent }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-[.22em]"
                  style={{ color: theme.accent }}>
                  Campus Life
                </span>
                <span
                  className="w-5 h-0.5"
                  style={{ background: theme.accent }}
                />
              </div>
              <h2
                className="text-4xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0f1a30",
                }}>
                {gallery.heading || "Campus Highlights"}
              </h2>
            </div>

            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: "repeat(3,1fr)",
                gridTemplateRows: "200px 200px",
              }}>
              {gallery.images.slice(0, 7).map((img, i) => (
                <div
                  key={img.id || i}
                  className="relative overflow-hidden"
                  style={{ gridColumn: i === 0 ? "1 / 3" : undefined }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: "scale(1)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.07)";
                      e.currentTarget.nextSibling.style.background =
                        "rgba(15,52,96,.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.nextSibling.style.background =
                        "transparent";
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-end p-4 transition-all duration-300"
                    style={{ background: "transparent" }}>
                    <span
                      className="text-white text-xs font-semibold opacity-0 transition-opacity duration-300"
                      ref={(el) =>
                        el &&
                        ((el.closest(".relative").onmouseenter = () =>
                          (el.style.opacity = "1")),
                        (el.closest(".relative").onmouseleave = () =>
                          (el.style.opacity = "0")))
                      }>
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}
      {/* ── 4. CAMPUS GALLERY ────────────────────────────────────────────── */}
      {gallery?.images?.length > 0 && (
        <section className="py-24 px-4 sm:px-6 bg-white w-full overflow-hidden">
          <div className="max-w-[90rem] mx-auto">
            {/* Header */}
            <div className="text-center mb-16 flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span
                  className="w-12 h-[2px]"
                  style={{ backgroundColor: theme.accent }}
                />
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em]"
                  style={{ color: theme.accent }}>
                  Campus Life
                </span>
                <span
                  className="w-12 h-[2px]"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: theme.primary || "#0f1a30",
                }}>
                {gallery.heading || "Campus Highlights"}
              </h2>
            </div>

            {/* Editorial Grid for 7 Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 auto-rows-[250px] sm:auto-rows-[300px]">
              {gallery.images.slice(0, 7).map((img, i) => (
                <div
                  key={img.id || i}
                  className={`group relative overflow-hidden bg-slate-100 cursor-pointer ${
                    /* Layout logic: 1st image is huge (2x2), 5th and 7th stretch wide, rest are standard squares */
                    i === 0
                      ? "md:col-span-2 md:row-span-2"
                      : i === 4 || i === 6
                        ? "md:col-span-2 row-span-1"
                        : "col-span-1 row-span-1"
                  }`}>
                  {/* Image with slow zoom */}
                  <img
                    src={img.src}
                    alt={img.alt || `Gallery Image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Deep Color Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out"
                    style={{ backgroundColor: theme.primary || "#0f3460" }}
                  />

                  {/* Hover Text & Accents */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {/* Animated Sharp Accent Line */}
                    <div
                      className="w-0 h-1 mb-4 transition-all duration-700 delay-100 group-hover:w-16 shadow-lg"
                      style={{ backgroundColor: theme.accent }}
                    />
                    <span className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wider drop-shadow-md">
                      {img.alt || "Campus Highlight"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. FEE STRUCTURE ─────────────────────────────────────────────── */}
      {feesOverview?.enabled && feesOverview.rows?.length > 0 && (
        <section className="py-20 px-6" style={{ background: "#f8f6f2" }}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span
                className="w-5 h-0.5"
                style={{ background: theme.accent }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[.22em]"
                style={{ color: theme.accent }}>
                Transparent Pricing
              </span>
              <span
                className="w-5 h-0.5"
                style={{ background: theme.accent }}
              />
            </div>
            <h2
              className="text-4xl font-bold mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0f1a30",
              }}>
              {feesOverview.heading || "Fee Structure"}
            </h2>

            <div
              className="bg-white rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(0,0,0,.08)" }}>
              {/* Table header */}
              <div
                className="flex justify-between px-6 py-4"
                style={{ background: theme.primary }}>
                <span className="text-xs font-bold uppercase tracking-[.15em] text-white/70">
                  Class / Category
                </span>
                <span className="text-xs font-bold uppercase tracking-[.15em] text-white/70">
                  Annual Fee
                </span>
              </div>

              {feesOverview.rows.map((row, i) => {
                const isTotal = row.label?.toLowerCase().includes("total");
                return (
                  <div
                    key={i}
                    className="flex justify-between items-center px-6 py-4 transition-colors"
                    style={{
                      borderBottom:
                        i < feesOverview.rows.length - 1
                          ? "0.5px solid rgba(0,0,0,.06)"
                          : "none",
                      background: isTotal ? `${theme.accent}08` : "transparent",
                      borderTop: isTotal
                        ? `1px solid ${theme.accent}44`
                        : undefined,
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      if (!isTotal)
                        e.currentTarget.style.background = "#fafaf8";
                    }}
                    onMouseLeave={(e) => {
                      if (!isTotal)
                        e.currentTarget.style.background = "transparent";
                    }}>
                    <span
                      className="font-medium"
                      style={{
                        fontSize: isTotal ? "15px" : "14px",
                        fontWeight: isTotal ? "700" : "500",
                        color: isTotal ? "#0f1a30" : "#334155",
                      }}>
                      {row.label}
                    </span>
                    <span
                      className="font-bold"
                      style={{
                        fontSize: isTotal ? "20px" : "16px",
                        color: isTotal ? theme.primary : theme.accent,
                      }}>
                      {row.amount}
                    </span>
                  </div>
                );
              })}
            </div>

            {feesOverview.note && (
              <p className="mt-4 text-xs" style={{ color: "#94a3b8" }}>
                {feesOverview.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── 6. SPLIT CTA + CONTACT ───────────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row min-h-[480px]">
        {/* Left — CTA */}
        <div
          className="relative flex-1 flex flex-col justify-center px-10 py-16 lg:px-16 overflow-hidden"
          style={{ background: theme.primary }}>
          <div
            className="absolute -top-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ border: `40px solid ${theme.accent}10` }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ border: `28px solid rgba(255,255,255,.05)` }}
          />
          <div className="relative z-10 max-w-sm">
            <h2
              className="text-3xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {admissionCTA.heading || "Secure Your Seat Today"}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed font-light mb-8">
              {admissionCTA.subtext}
            </p>
            <div className="flex flex-wrap gap-3">
              {admissionCTA.primaryBtn && (
                <Link
                  to={admissionCTA.primaryBtn.path}
                  className="px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: theme.accent,
                    color: "#1a0800",
                    boxShadow: `0 6px 20px ${theme.accent}44`,
                  }}>
                  {admissionCTA.primaryBtn.label}
                </Link>
              )}
              {admissionCTA.secondaryBtn && (
                <Link
                  to={admissionCTA.secondaryBtn.path}
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,.3)" }}>
                  {admissionCTA.secondaryBtn.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right — Contact */}
        <div className="flex-1 flex flex-col justify-center bg-white px-10 py-16 lg:px-16">
          <div className="max-w-sm">
            <p
              className="text-xs font-bold uppercase tracking-[.22em] mb-2"
              style={{ color: "#94a3b8" }}>
              {contact.heading ?? "Contact Admissions"}
            </p>
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0f1a30",
              }}>
              Admissions Office
            </h2>
            {contact.intro && (
              <p className="text-sm text-slate-500 font-light mb-8 leading-relaxed">
                {contact.intro}
              </p>
            )}

            <div className="flex flex-col gap-5 mt-6">
              {contact.phone && (
                <div className="flex items-center gap-4">
                  <ContactIcon path="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12 19.79 19.79 0 01.1 3.4 2 2 0 012.1 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.08 8.96a16 16 0 006.96 6.96l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[.12em] mb-1"
                      style={{ color: "#94a3b8" }}>
                      Direct Line
                    </p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="font-semibold text-base"
                      style={{ color: "#0f1a30" }}>
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-4">
                  <ContactIcon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[.12em] mb-1"
                      style={{ color: "#94a3b8" }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-semibold text-sm"
                      style={{ color: "#0f1a30" }}>
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
              {contact.hours && (
                <div className="flex items-center gap-4">
                  <ContactIcon path="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" />
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[.12em] mb-1"
                      style={{ color: "#94a3b8" }}>
                      Office Hours
                    </p>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#0f1a30" }}>
                      {contact.hours}
                    </p>
                  </div>
                </div>
              )}
              {contact.address && (
                <div className="flex items-center gap-4">
                  <ContactIcon path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 100 6 3 3 0 000-6z" />
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[.12em] mb-1"
                      style={{ color: "#94a3b8" }}>
                      Address
                    </p>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#0f1a30" }}>
                      {contact.address}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
