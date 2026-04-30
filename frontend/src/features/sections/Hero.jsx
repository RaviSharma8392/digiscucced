/**
 * Hero.jsx
 *
 * Reusable hero section component
 * Works across all templates
 */

export function HeroSection({ data, theme = {} }) {
  if (!data) return null;

  const { badge, title, description, image, ctas = [] } = data;

  const primaryColor = theme.primary || "#0f3460";
  const accentColor = theme.accent || "#e8a020";

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: theme.background }}>
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 max-w-4xl text-center text-white">
          {/* Badge */}
          {badge && (
            <div
              className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ backgroundColor: accentColor, color: "#fff" }}>
              {badge}
            </div>
          )}

          {/* Title */}
          {title && (
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {ctas.map((cta, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (cta.path) window.location.href = cta.path;
                  }}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition ${
                    cta.type === "primary"
                      ? `text-white hover:opacity-90`
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor:
                      cta.type === "primary" ? primaryColor : "white",
                  }}>
                  {cta.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
