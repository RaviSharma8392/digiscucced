/**
 * BusinessLayout.jsx
 *
 * Shared layout with Navbar, Footer, and FloatingContactBtn
 * Wraps all business template pages
 */

import { Outlet } from "react-router-dom";

export function BusinessLayout({ business }) {
  if (!business) {
    return <div>Loading...</div>;
  }

  const { theme = {} } = business;
  const primaryColor = theme.primary || "#0f3460";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav
        className="sticky top-0 z-40 py-4 shadow-md"
        style={{ backgroundColor: primaryColor }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          {business.logo && (
            <img
              src={business.logo}
              alt={business.name}
              className="h-12 w-auto"
            />
          )}

          {/* Brand Name */}
          <h1 className="text-white font-bold text-xl">{business.name}</h1>

          {/* Contact */}
          <div className="text-white">
            <a
              href={`tel:${business.contact?.phone}`}
              className="hover:opacity-80">
              {business.contact?.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet context={{ business }} />
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-white"
        style={{ backgroundColor: primaryColor }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <p className="opacity-80">{business.tagline}</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="opacity-80">{business.contact?.email}</p>
              <p className="opacity-80">{business.contact?.phone}</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <p className="opacity-80">{business.contact?.address}</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center opacity-80">
            <p>&copy; 2026 {business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow z-30"
        style={{ backgroundColor: theme.accent || "#e8a020" }}
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        title="Contact Us">
        <span className="text-white text-2xl">📞</span>
      </button>
    </div>
  );
}

export default BusinessLayout;
