export default function StatsBar({
  stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "10k+", label: "Happy Alumni" },
    { value: "50+", label: "Expert Faculty" },
    { value: "100%", label: "Passing Rate" },
  ],
  colors = {},
  variant = 1,
}) {
  if (!stats || stats.length === 0) return null;

  const primary = colors?.primary || "#0f3460";
  const accent = colors?.accent || "#e8a020";

  // ==========================================
  // VARIANT 1: Solid Brand Bar (High Contrast & Premium)
  // Best used to separate the Hero section from the About section
  // ==========================================
  if (variant === 1) {
    return (
      <div
        className="w-full relative z-20"
        style={{ backgroundColor: primary }}>
        {/* Subtle top/bottom borders for depth */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/20" />

        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center px-4 pt-6 lg:pt-0 first:pt-0 flex flex-col items-center justify-center group">
                <div
                  className="font-extrabold text-4xl sm:text-5xl tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: accent }}>
                  {stat.value}
                </div>
                <div className="text-[13px] sm:text-[14px] font-medium text-white/80 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 2: Floating Glass Cards (Modern & Trendy)
  // Best used right below the Hero Section (it will visually overlap it)
  // ==========================================
  if (variant === 2) {
    return (
      <div className="w-full relative z-30 px-6 sm:px-10 -mt-10 sm:-mt-16 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div
                  className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2 drop-shadow-sm"
                  style={{ color: primary }}>
                  {stat.value}
                </div>
                <div
                  className="w-8 h-1 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: accent }}
                />
                <div className="text-[12px] sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 3: The Golden Accent Bar (Upgraded Original)
  // Best used for a bold pop of color mid-page
  // ==========================================
  if (variant === 3) {
    return (
      <div
        className="w-full py-8 sm:py-10 px-6 shadow-inner"
        style={{ backgroundColor: accent }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center px-4 flex flex-col items-center border-slate-900/10 md:border-r last:border-0">
                <div className="font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tighter drop-shadow-sm mb-1">
                  {stat.value}
                </div>
                <div className="text-[12px] sm:text-[13px] font-bold text-slate-800/70 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
