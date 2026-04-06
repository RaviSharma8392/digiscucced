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

  const primary = colors?.primary || "#0f3460"; // background
  const accent = colors?.accent || "#e8a020"; // badge/contrast
  const textColor = colors?.text || "#f8fafc";

  // Duplicate array for seamless scroll
  const tickerItems = [...notices, ...notices];

  // Render each notice
  const renderNotice = (notice, i) => {
    const text = typeof notice === "string" ? notice : notice.text;
    const link = typeof notice === "string" ? null : notice.link;

    const content = (
      <span className="flex items-center gap-2 whitespace-nowrap font-medium text-sm sm:text-base">
        {text}
        <svg
          className="w-3 h-3 opacity-50"
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

    return link ? (
      <Link
        key={i}
        to={link}
        className="hover:underline hover:opacity-80 transition-opacity underline-offset-2">
        {content}
      </Link>
    ) : (
      <div key={i}>{content}</div>
    );
  };

  // Inject keyframes & fade effect
  const styles = `
    @keyframes scrollTicker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .ticker-container:hover .ticker-track {
      animation-play-state: paused;
    }
    .fade-edges {
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
  `;

  return (
    <div className="w-full">
      <style>{styles}</style>
      <div
        className="relative flex items-center overflow-hidden ticker-container"
        style={{
          backgroundColor: primary,
          color: textColor,
          height: "3rem",
        }}>
        {/* Badge */}
        <div
          className="flex-shrink-0 flex items-center px-4 sm:px-6 h-full font-bold text-xs sm:text-sm uppercase tracking-widest"
          style={{
            backgroundColor: accent,
            color: primary,
          }}>
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/30 opacity-70"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black/80"></span>
          </span>
          Latest Updates
        </div>

        {/* Scrolling Notices */}
        <div className="flex-1 overflow-hidden fade-edges">
          <div
            className="flex gap-8 w-max ticker-track"
            style={{
              animation: "scrollTicker 45s linear infinite",
            }}>
            {tickerItems.map(renderNotice)}
          </div>
        </div>
      </div>
    </div>
  );
}
