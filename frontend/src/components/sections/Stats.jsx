/**
 * Stats.jsx
 *
 * Reusable stats/metrics section component
 * Displays key metrics in a grid format
 */

export function StatsSection({ data = [], theme = {} }) {
  if (!data || data.length === 0) return null;

  const primaryColor = theme.primary || "#0f3460";
  const accentColor = theme.accent || "#e8a020";

  return (
    <section className="py-16" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              {/* Value */}
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: accentColor }}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
