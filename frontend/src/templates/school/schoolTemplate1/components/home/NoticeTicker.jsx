import { Link } from "react-router-dom";

export default function NoticeTicker({
  notices = [
    "Admissions open for Academic Year 2026-27.",
    "Annual Sports Meet scheduled for next Friday.",
    "School will remain closed on Monday for a public holiday.",
  ],
  colors = {},
  variant = 1,
}) {
  if (!notices || notices.length === 0) return null;

  const primary = colors?.primary || "#0f3460";
  const accent = colors?.accent || "#e8a020";

  // Duplicate the array to create the infinite seamless loop
  const tickerItems = [...notices, ...notices];

  // Helper to render individual notice items (supports strings or objects with links)
  const renderNotice = (notice, i) => {
    const text = typeof notice === "string" ? notice : notice.text;
    const link = typeof notice === "string" ? null : notice.link;

    const content = (
      <span className="flex items-center gap-4 text-[13px] sm:text-[14px] font-medium tracking-wide">
        {text}
        {/* Elegant Separator Icon */}
        <svg
          className="w-3.5 h-3.5 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: accent }}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </span>
    );

    return (
      <div key={i} className="flex-shrink-0">
        {link ? (
          <Link
            to={link}
            className="hover:underline hover:opacity-80 transition-opacity decoration-white/50 underline-offset-4">
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    );
  };

  // --- STYLES ---
  // We inject the keyframes and hover-pause logic here to ensure it works
  // on any Tailwind setup without modifying tailwind.config.js
  const styles = `
    @keyframes scrollTicker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .ticker-container:hover .ticker-track {
      animation-play-state: paused;
    }
    .fade-edges {
      -webkit-mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);
      mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);
    }
  `;

  // ==========================================
  // VARIANT 1: The "Newsroom" (Dark, Bold, High Contrast)
  // ==========================================
  if (variant === 1) {
    return (
      <div
        className="w-full border-y border-white/10 shadow-inner"
        style={{ backgroundColor: primary, color: "#f8fafc" }}>
        <style>{styles}</style>
        <div className="max-w-[1400px] mx-auto flex items-center h-11 sm:h-12 ticker-container">
          {/* Badge */}
          <div
            className="flex-shrink-0 flex items-center h-full px-4 sm:px-6 relative z-10"
            style={{ backgroundColor: accent, color: primary }}>
            <div className="flex items-center gap-2 font-bold text-[11px] sm:text-[12px] uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black/80"></span>
              </span>
              Latest Updates
            </div>
            {/* Angled cut effect on the badge */}
            <div
              className="absolute top-0 -right-4 w-4 h-full hidden sm:block"
              style={{
                backgroundColor: accent,
                clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
              }}
            />
          </div>

          {/* Scrolling Track */}
          <div className="flex-1 overflow-hidden h-full flex items-center fade-edges ml-2 sm:ml-6">
            <div
              className="flex gap-8 sm:gap-12 w-max ticker-track cursor-default"
              style={{ animation: "scrollTicker 40s linear infinite" }}>
              {tickerItems.map((notice, i) => renderNotice(notice, i))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 2: Clean & Subtle (Light, Minimalist)
  // ==========================================
  if (variant === 2) {
    return (
      <div className="w-full bg-white border-b border-slate-200 text-slate-700">
        <style>{styles}</style>
        <div className="max-w-[1400px] mx-auto flex items-center h-10 sm:h-11 px-4 sm:px-6 ticker-container">
          <div className="flex-shrink-0 flex items-center gap-2 font-bold text-[11px] uppercase tracking-wider text-red-600 mr-4 sm:mr-6 border-r border-slate-200 pr-4 sm:pr-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            Notice
          </div>

          <div className="flex-1 overflow-hidden h-full flex items-center fade-edges">
            <div
              className="flex gap-10 w-max ticker-track"
              style={{ animation: "scrollTicker 35s linear infinite" }}>
              {tickerItems.map((notice, i) => renderNotice(notice, i))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 3: The Floating Pill (Modern, Card-like)
  // ==========================================
  if (variant === 3) {
    return (
      <div className="w-full py-3 px-4 sm:px-6 bg-slate-50">
        <style>{styles}</style>
        <div className="max-w-5xl mx-auto flex items-center h-12 bg-white rounded-full shadow-sm border border-slate-200 overflow-hidden ticker-container">
          <div
            className="flex-shrink-0 flex items-center h-full px-6 font-bold text-[11px] sm:text-xs uppercase tracking-widest text-white z-10 shadow-md"
            style={{ backgroundColor: primary }}>
            Updates
          </div>

          <div className="flex-1 overflow-hidden h-full flex items-center fade-edges ml-4">
            <div
              className="flex gap-8 w-max ticker-track text-slate-700"
              style={{ animation: "scrollTicker 45s linear infinite" }}>
              {tickerItems.map((notice, i) => renderNotice(notice, i))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
