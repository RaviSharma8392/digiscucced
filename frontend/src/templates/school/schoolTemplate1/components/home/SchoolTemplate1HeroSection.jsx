import { Link } from "react-router-dom";

export default function SchoolTemplate1HeroSection({
  hero = {},
  affiliation = "",
  colors = {},
  variant = 2, // Pass 1, 2, or 3 to instantly change the layout
}) {
  const primary = colors?.primary || "#0f3460";
  const accent = colors?.accent || "#e8a020";

  const {
    badge = "",
    titleStart = "",
    highlightWord = "",
    titleEnd = "",
    description = "",
    primaryBtn,
    secondaryBtn,
    image,
  } = hero || {};

  const heroImage =
    image ||
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop";

  // --- REUSABLE MICRO-COMPONENTS ---
  // To keep the code clean across 3 variants, we define the inner content once.

  const Badges = () => (
    <div
      className={`flex flex-wrap items-center gap-3 mb-6 ${variant === 2 ? "justify-center" : ""}`}>
      {badge && (
        <span
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm"
          style={{ backgroundColor: accent, color: "#1a0a00" }}>
          ✦ {badge}
        </span>
      )}
      {affiliation && (
        <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full text-white border border-white/30 uppercase tracking-widest backdrop-blur-sm">
          {affiliation}
        </span>
      )}
    </div>
  );

  const Title = () => (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.15] mb-6 drop-shadow-md">
      {titleStart && <span>{titleStart} </span>}
      {highlightWord && (
        <span className="relative inline-block" style={{ color: accent }}>
          {highlightWord}
          <svg
            className="absolute w-full h-3 -bottom-1 left-0 opacity-80"
            viewBox="0 0 100 10"
            preserveAspectRatio="none">
            <path
              d="M0 5 Q 50 10 100 5"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      {titleEnd && <span> {titleEnd}</span>}
    </h1>
  );

  const Buttons = () => (
    <div
      className={`flex flex-col sm:flex-row gap-4 sm:gap-5 ${variant === 2 ? "justify-center" : ""}`}>
      {primaryBtn && (
        <Link
          to={primaryBtn.path}
          className="group relative inline-flex items-center justify-center text-sm sm:text-base font-bold px-8 py-3.5 rounded-lg overflow-hidden transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
          style={{ backgroundColor: accent, color: primary }}>
          <span className="relative z-10">{primaryBtn.label}</span>
        </Link>
      )}
      {secondaryBtn && (
        <Link
          to={secondaryBtn.path}
          className="inline-flex items-center justify-center text-sm sm:text-base font-bold px-8 py-3.5 rounded-lg text-white transition-all hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm"
          style={{ border: `2px solid ${accent}` }}>
          {secondaryBtn.label}
        </Link>
      )}
    </div>
  );

  // ==========================================
  // VARIANT 1: The Modern Split (Angled Cut)
  // ==========================================
  if (variant === 1) {
    return (
      <section
        className="relative w-full flex flex-col lg:flex-row overflow-hidden"
        style={{ backgroundColor: primary }}>
        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 w-full lg:w-1/2 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full lg:w-[55%] px-6 py-16 sm:px-12 lg:px-16 lg:py-28 xl:px-24 flex flex-col justify-center">
          <Badges />
          <Title />
          {description && (
            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
              {description}
            </p>
          )}
          <Buttons />
        </div>

        {/* Image */}
        <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[52%] h-[350px] sm:h-[450px] lg:h-auto">
          <img
            src={heroImage}
            alt="School Campus"
            className="w-full h-full object-cover object-center lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: `linear-gradient(to bottom, ${primary} 0%, transparent 20%, transparent 70%, ${primary} 100%)`,
            }}
          />
        </div>
      </section>
    );
  }

  // ==========================================
  // VARIANT 2: The Grand Centered (Classic)
  // ==========================================
  if (variant === 2) {
    return (
      <section className="relative w-full min-h-[550px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="School Campus"
            className="w-full h-full object-cover object-center"
          />
          {/* Solid Color Overlay using Primary Color */}
          <div
            className="absolute inset-0 opacity-85 mix-blend-multiply"
            style={{ backgroundColor: primary }}
          />
          {/* Gradient for extra text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center text-center">
          <Badges />
          <Title />
          {description && (
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light drop-shadow-sm">
              {description}
            </p>
          )}
          <Buttons />
        </div>
      </section>
    );
  }

  // ==========================================
  // VARIANT 3: The Floating Card (Elegant)
  // ==========================================
  if (variant === 3) {
    return (
      <section
        className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
        style={{ backgroundColor: primary }}>
        {/* Image on Right / Full on Mobile */}
        <div className="absolute inset-0 lg:left-[30%]">
          <img
            src={heroImage}
            alt="School Campus"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: `linear-gradient(to right, ${primary} 10%, transparent 100%)`,
            }}
          />
          {/* Desktop gradient fade */}
          <div
            className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-transparent opacity-90"
            style={{ "--primary": primary }}
          />
        </div>

        {/* Floating Card Content */}
        <div className="relative z-10 w-full max-w-3xl px-6 py-16 lg:px-12 xl:px-20">
          <div
            className="p-8 sm:p-10 lg:p-12 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
            style={{ backgroundColor: `${primary}E6` }}>
            {" "}
            {/* E6 adds 90% opacity to the hex color */}
            <Badges />
            <Title />
            {description && (
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 font-light">
                {description}
              </p>
            )}
            <Buttons />
          </div>
        </div>
      </section>
    );
  }

  return null;
}
