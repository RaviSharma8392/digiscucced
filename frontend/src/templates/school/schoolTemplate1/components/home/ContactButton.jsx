/**
 * FloatingContact.jsx
 *
 * Fixed bottom-right floating action buttons:
 *   1. WhatsApp  — green pill, expands label on hover, pulse ring, notification dot
 *   2. Call Us   — primary-color pill, expands label on hover
 *   3. Scroll ↑  — small ghost circle with tooltip, scrolls to top
 *
 * Props:
 *   colors  — { primary, accent } from schoolConfig.theme
 *   contact — { phone } from schoolConfig.school.contact
 *   waMessage — optional pre-filled WhatsApp message string
 */

import { useState, useEffect } from "react";

export default function FloatingContact({
  colors = {},
  contact = {},
  waMessage = "Hello! I am inquiring about admissions for the upcoming session.",
}) {
  const primary = colors.primary || "#0f3460";
  const accent = colors.accent || "#e8a020";

  const phone = contact.phone || "+91-9876543210";
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const waNumber = cleanPhone.replace("+", "");
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const callHref = `tel:${cleanPhone}`;

  // Show scroll-to-top only after user scrolls down 200px
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ── Shared pill button styles ─────────────────────────────────────────────
  const btnBase = {
    display: "flex",
    alignItems: "center",
    borderRadius: "999px",
    overflow: "hidden",
    textDecoration: "none",
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,0,0,.18), 0 1px 4px rgba(0,0,0,.10)",
    transition: "transform .2s, box-shadow .2s",
  };

  return (
    <div
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-3 items-end pointer-events-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── 1. WhatsApp ──────────────────────────────────────────────────── */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group"
        style={btnBase}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 10px 32px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(0,0,0,.18), 0 1px 4px rgba(0,0,0,.10)";
        }}>
        {/* Icon capsule — green + pulse ring */}
        <div
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: 52, height: 52, background: "#25D366" }}>
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: "#25D366",
              opacity: 0.35,
              animationDuration: "2s",
            }}
          />
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#fff"
            className="relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {/* Notification dot */}
          <span
            className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ background: "#ef4444", border: "2px solid #fff" }}
          />
        </div>

        {/* Expanding label */}
        <span
          className="overflow-hidden whitespace-nowrap text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-in-out"
          style={{
            background: "#22c55e",
            height: 52,
            lineHeight: "52px",
            maxWidth: 0,
            padding: 0,
          }}
          ref={(el) => {
            if (!el) return;
            el.closest("a").addEventListener("mouseenter", () => {
              el.style.maxWidth = "140px";
              el.style.padding = "0 20px 0 6px";
            });
            el.closest("a").addEventListener("mouseleave", () => {
              el.style.maxWidth = "0";
              el.style.padding = "0";
            });
          }}>
          Chat With Us
        </span>
      </a>

      {/* ── 2. Call Us ───────────────────────────────────────────────────── */}
      <a
        href={callHref}
        className="pointer-events-auto group"
        style={btnBase}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 10px 32px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(0,0,0,.18), 0 1px 4px rgba(0,0,0,.10)";
        }}>
        {/* Icon capsule */}
        <div
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: 52, height: 52, background: primary }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12 19.79 19.79 0 01.1 3.4 2 2 0 012.1 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.08 8.96a16 16 0 006.96 6.96l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>

        {/* Expanding label */}
        <span
          className="overflow-hidden whitespace-nowrap text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-in-out"
          style={{
            background: primary,
            height: 52,
            lineHeight: "52px",
            maxWidth: 0,
            padding: 0,
          }}
          ref={(el) => {
            if (!el) return;
            el.closest("a").addEventListener("mouseenter", () => {
              el.style.maxWidth = "120px";
              el.style.padding = "0 20px 0 6px";
            });
            el.closest("a").addEventListener("mouseleave", () => {
              el.style.maxWidth = "0";
              el.style.padding = "0";
            });
          }}>
          Call Us
        </span>
      </a>

      {/* ── 3. Scroll to top ─────────────────────────────────────────────── */}
      {showScroll && (
        <div className="pointer-events-auto relative group">
          {/* Tooltip */}
          <span
            className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            style={{ background: `${primary}ee` }}>
            Back to top
          </span>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,.95)",
              border: `0.5px solid rgba(0,0,0,.1)`,
              boxShadow: "0 2px 12px rgba(0,0,0,.14)",
              color: primary,
            }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
