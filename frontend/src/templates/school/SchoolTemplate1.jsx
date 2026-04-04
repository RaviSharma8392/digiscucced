/**
 * SchoolTemplate1.jsx
 *
 * Template component for school business type
 * Presentation-only - receives all data via props
 * No hardcoded data
 */

import { HeroSection } from "../sections/Hero";
import { AboutSection } from "../sections/About";
import { StatsSection } from "../sections/Stats";
import { TemplateLayout } from "../../layouts/TemplateLayout";

export function SchoolTemplate1({ data }) {
  if (!data) {
    return <div className="text-center py-20">Loading school data...</div>;
  }

  const { theme, hero, about, stats } = data;

  return (
    <TemplateLayout theme={theme}>
      {/* Hero Section */}
      <HeroSection data={hero} theme={theme} />

      {/* Hero CTA */}
      {hero?.ctas && (
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {hero.ctas.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.path || "#"}
                  className="px-6 py-3 rounded-lg font-bold transition hover:opacity-80"
                  style={{
                    backgroundColor:
                      cta.type === "primary" ? theme.primary : "transparent",
                    color: cta.type === "primary" ? "#fff" : theme.primary,
                    border:
                      cta.type === "secondary"
                        ? `2px solid ${theme.primary}`
                        : "none",
                  }}>
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      {stats && <StatsSection data={stats} theme={theme} />}

      {/* About Section */}
      {about && <AboutSection data={about} theme={theme} />}

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-8">
            Ready to start your journey? Contact us today!
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${data.contact?.email}`}
                className="text-blue-600 hover:underline">
                {data.contact?.email}
              </a>
            </p>
            <p className="text-lg">
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${data.contact?.phone}`}
                className="text-blue-600 hover:underline">
                {data.contact?.phone}
              </a>
            </p>
            <p className="text-lg text-gray-700">{data.contact?.address}</p>
          </div>
        </div>
      </section>
    </TemplateLayout>
  );
}

export default SchoolTemplate1;
