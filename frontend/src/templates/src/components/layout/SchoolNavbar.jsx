import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── DEFAULT THEME ──────────────────────────────
const defaultTheme = {
  primary: "#003366",
  background: "#ffffff",
  text: "#1f2937",
  textHover: "#003366",
  dropdownBackground: "#ffffff",
  dropdownText: "#4b5563",
  dropdownTextHover: "#003366",
  mobileDropdownBorder: "#f3f4f6",
  fontFamily: "'Inter', sans-serif",
};

// ─── DEFAULT NAV LINKS ─────────────────────────
const defaultNavLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Courses",
    path: "/courses",
    badge: "New", // Dynamic Badge Support
    subLinks: [
      { label: "JEE Mains", path: "/courses/jee" },
      { label: "NEET", path: "/courses/neet" },
    ],
  },
  {
    label: "Student Portal",
    path: "https://portal.example.com",
    isExternal: true,
  }, // Dynamic External Link Support
];

// ─── HELPER: DYNAMIC LINK ───────────────────────
// Automatically switches between <Link> (internal) and <a> (external)
const DynamicLink = ({
  to,
  isExternal,
  children,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const url = to || "#";
  const external = isExternal || url.startsWith("http");

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link
      to={url}
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}>
      {children}
    </Link>
  );
};

// ─── MAIN NAVBAR ────────────────────────────────
export default function SchoolNavbar({
  theme = defaultTheme,
  logoUrlMobile,
  logoUrlDesk,
  navLinks = defaultNavLinks,
  cta, // { label: string, link: string, isExternal: boolean }
}) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const activeTheme = { ...defaultTheme, ...theme };

  // ── Scroll shadow effect ──
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile menu on route change ──
  useEffect(() => {
    setMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location.pathname]);

  return (
    <nav
      style={{
        backgroundColor: activeTheme.background,
        fontFamily: activeTheme.fontFamily,
      }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "border-b border-gray-100 py-4"
      }`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* ── LOGO ── */}
        <Link to="/" className="shrink-0 flex items-center z-10 relative">
          {logoUrlDesk && (
            <div className="hidden lg:block h-12 max-h-12 max-w-[200px]">
              <img
                src={logoUrlDesk}
                alt="School Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          )}
          {logoUrlMobile && (
            <div className="block lg:hidden h-10 max-h-10 max-w-[150px]">
              <img
                src={logoUrlMobile}
                alt="School Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          )}
          {!logoUrlDesk && !logoUrlMobile && (
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm"
              style={{ backgroundColor: activeTheme.primary }}>
              S
            </div>
          )}
        </Link>

        {/* ── DESKTOP NAVIGATION ── */}
        {/* FIXED: Removed overflow-x-auto to prevent dropdowns from getting cut off */}
        <div className="hidden lg:flex items-center justify-end flex-1 gap-5 xl:gap-8">
          {navLinks.map((link, idx) => {
            const url = link.path || link.url || "/";
            const isActive =
              location.pathname === url ||
              (url !== "/" && location.pathname.startsWith(url + "/"));
            const hasDropdown = link.subLinks?.length > 0;

            return (
              <div key={idx} className="relative group flex-shrink-0">
                <DynamicLink
                  to={url}
                  isExternal={link.isExternal}
                  className="flex items-center gap-1 font-medium transition-colors duration-200 py-2 relative"
                  style={{
                    color: isActive ? activeTheme.textHover : activeTheme.text,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = activeTheme.textHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive
                      ? activeTheme.textHover
                      : activeTheme.text)
                  }>
                  {link.label}

                  {/* Dynamic Badge Support */}
                  {link.badge && (
                    <span className="absolute -top-1.5 -right-5 bg-green-500 text-white text-[9px] font-bold px-1.5 py-[1px] rounded-[3px] leading-none tracking-wider">
                      {link.badge}
                    </span>
                  )}

                  {hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </DynamicLink>

                {/* Desktop Dropdown */}
                {hasDropdown && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div
                      className="w-56 shadow-xl rounded-xl border border-gray-100 overflow-hidden flex flex-col py-2"
                      style={{
                        backgroundColor: activeTheme.dropdownBackground,
                      }}>
                      {link.subLinks.map((sub, sIdx) => (
                        <DynamicLink
                          key={sIdx}
                          to={sub.path || sub.url}
                          isExternal={sub.isExternal}
                          className="px-5 py-2.5 text-[14px] font-medium transition-colors duration-200 hover:bg-gray-50"
                          style={{ color: activeTheme.dropdownText }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color =
                              activeTheme.dropdownTextHover)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              activeTheme.dropdownText)
                          }>
                          {sub.label}
                        </DynamicLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Desktop CTA Button */}
          {cta && cta.label && (cta.link || cta.url) && (
            <DynamicLink
              to={cta.link || cta.url}
              isExternal={cta.isExternal}
              className="ml-2 font-semibold px-6 py-2.5 rounded-lg text-white shadow-md transition-transform active:scale-95 hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: activeTheme.primary }}>
              {cta.label}
            </DynamicLink>
          )}
        </div>

        {/* ── MOBILE MENU BUTTON ── */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors relative z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: activeTheme.text }}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <div
        className={`lg:hidden absolute top-full w-full left-0 transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl border-t border-gray-100 ${
          menuOpen
            ? "max-h-[calc(100vh-80px)] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
        style={{ backgroundColor: activeTheme.background }}>
        <div className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link, idx) => {
            const url = link.path || link.url || "/";
            const isActive = location.pathname === url;
            const hasDropdown = link.subLinks?.length > 0;
            const isDropdownOpen = activeMobileDropdown === idx;

            return (
              <div
                key={idx}
                className="flex flex-col border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between py-3 px-2">
                  <DynamicLink
                    to={url}
                    isExternal={link.isExternal}
                    onClick={() => !hasDropdown && setMenuOpen(false)}
                    className="font-medium text-[16px] flex items-center gap-2"
                    style={{
                      color: isActive
                        ? activeTheme.textHover
                        : activeTheme.text,
                    }}>
                    {link.label}
                    {link.badge && (
                      <span className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-[1px] rounded-[3px]">
                        {link.badge}
                      </span>
                    )}
                  </DynamicLink>

                  {hasDropdown && (
                    <button
                      onClick={() =>
                        setActiveMobileDropdown(isDropdownOpen ? null : idx)
                      }
                      className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                      style={{ color: activeTheme.text }}>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {hasDropdown && (
                  <div
                    className={`flex flex-col pl-4 border-l-2 transition-all duration-300 overflow-hidden ml-2 ${
                      isDropdownOpen ? "max-h-96 pb-3" : "max-h-0"
                    }`}
                    style={{ borderColor: activeTheme.mobileDropdownBorder }}>
                    {link.subLinks.map((sub, sIdx) => (
                      <DynamicLink
                        key={sIdx}
                        to={sub.path || sub.url}
                        isExternal={sub.isExternal}
                        onClick={() => setMenuOpen(false)}
                        className="py-2.5 text-[15px] font-medium transition-colors duration-200"
                        style={{ color: activeTheme.dropdownText }}>
                        {sub.label}
                      </DynamicLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          {cta && cta.label && (cta.link || cta.url) && (
            <DynamicLink
              to={cta.link || cta.url}
              isExternal={cta.isExternal}
              onClick={() => setMenuOpen(false)}
              className="mt-6 text-center font-bold text-white px-6 py-3.5 mx-2 mb-4 rounded-xl shadow-md transition-transform active:scale-95"
              style={{ backgroundColor: activeTheme.primary }}>
              {cta.label}
            </DynamicLink>
          )}
        </div>
      </div>
    </nav>
  );
}
