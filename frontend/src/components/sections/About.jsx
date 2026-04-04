/**
 * About.jsx
 *
 * Reusable about section component
 * Works across all templates
 */

export function AboutSection({ data, theme = {} }) {
  if (!data) return null;

  const { tag, heading, description, image, highlights = [] } = data;

  const accentColor = theme.accent || "#e8a020";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          {image && (
            <div className="relative">
              <img
                src={image}
                alt="About"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Right: Content */}
          <div>
            {/* Tag */}
            {tag && (
              <div
                className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: accentColor }}>
                {tag}
              </div>
            )}

            {/* Heading */}
            {heading && (
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                {heading}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {description}
              </p>
            )}

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1"
                      style={{ backgroundColor: accentColor }}>
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
