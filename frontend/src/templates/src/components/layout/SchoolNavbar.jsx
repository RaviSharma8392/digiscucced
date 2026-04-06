import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

/* ───────────────── DEFAULT THEME ───────────────── */
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

/* ───────────────── DYNAMIC LINK HELPER ───────────────── */
function DynamicLink({
  to,
  isExternal,
  children,
  className,
  style,
  onClick,
  ...props
}) {
  const url = to || "#";
  const external = isExternal || /^https?:\/\//.test(url);

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onClick={onClick}
        {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link
      to={url}
      className={className}
      style={style}
      onClick={onClick}
      {...props}>
      {children}
    </Link>
  );
}

/* ───────────────── MAIN NAVBAR ───────────────── */
export default function SchoolNavbar({
  theme = {},
  logoUrlDesk,
  logoUrlMobile,
  navLinks = [],
  cta,
}) {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const activeTheme = { ...defaultTheme, ...theme };

  /* ── Scroll shadow ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu when route changes ── */
  useEffect(() => {
    setMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location.pathname]);

  /* ── Home path (logo click) ── */
  const homePath = navLinks?.[0]?.path || "/";

  return (
    <nav
      style={{
        backgroundColor: activeTheme.background,
        fontFamily: activeTheme.fontFamily,
      }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "border-b border-gray-100 py-4"
      }`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between gap-6">
        {/* ───────── LOGO ───────── */}
        <Link to={homePath} className="flex items-center shrink-0">
          {logoUrlDesk && (
            <img
              src={logoUrlDesk}
              alt="Logo"
              className="hidden lg:block h-12 w-auto object-contain"
            />
          )}

          {logoUrlMobile && (
            <img
              src={logoUrlMobile}
              alt="Logo"
              className="block lg:hidden h-10 w-auto object-contain"
            />
          )}

          {!logoUrlDesk && !logoUrlMobile && (
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: activeTheme.primary }}>
              S
            </div>
          )}
        </Link>

        {/* ───────── DESKTOP NAV ───────── */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          {navLinks.map((link, idx) => {
            const url = link.path ?? link.url ?? "/";
            const hasDropdown = link.subLinks?.length > 0;

            const isActive =
              location.pathname === url ||
              (url !== "/" && location.pathname.startsWith(url + "/"));

            return (
              <div key={idx} className="relative group">
                <DynamicLink
                  to={url}
                  isExternal={link.isExternal}
                  className="flex items-center gap-1 font-medium py-2 relative"
                  style={{
                    color: isActive ? activeTheme.textHover : activeTheme.text,
                  }}>
                  {link.label}

                  {link.badge && (
                    <span className="absolute -top-1 -right-4 bg-green-500 text-white text-[9px] px-1.5 py-[1px] rounded">
                      {link.badge}
                    </span>
                  )}

                  {hasDropdown && (
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
                  )}
                </DynamicLink>

                {/* Dropdown */}
                {hasDropdown && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div
                      className="w-56 shadow-xl rounded-xl border py-2"
                      style={{
                        backgroundColor: activeTheme.dropdownBackground,
                      }}>
                      {link.subLinks.map((sub, sIdx) => (
                        <DynamicLink
                          key={sIdx}
                          to={sub.path}
                          isExternal={sub.isExternal}
                          className="block px-5 py-2 text-sm hover:bg-gray-50"
                          style={{
                            color: activeTheme.dropdownText,
                          }}>
                          {sub.label}
                        </DynamicLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* CTA */}
          {cta?.label && (cta.link || cta.url) && (
            <DynamicLink
              to={cta.link || cta.url}
              isExternal={cta.isExternal}
              className="ml-4 font-semibold px-6 py-2.5 rounded-lg text-white shadow-md hover:opacity-90"
              style={{ backgroundColor: activeTheme.primary }}>
              {cta.label}
            </DynamicLink>
          )}
        </div>

        {/* ───────── MOBILE MENU BUTTON ───────── */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* ───────── MOBILE MENU ───────── */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
        style={{ backgroundColor: activeTheme.background }}>
        <div className="flex flex-col px-4 py-4">
          {navLinks.map((link, idx) => {
            const url = link.path ?? "/";
            const hasDropdown = link.subLinks?.length > 0;
            const open = activeMobileDropdown === idx;

            return (
              <div key={idx} className="border-b py-3">
                <div className="flex items-center justify-between">
                  <DynamicLink
                    to={url}
                    isExternal={link.isExternal}
                    onClick={() => !hasDropdown && setMenuOpen(false)}
                    className="font-medium">
                    {link.label}
                  </DynamicLink>

                  {hasDropdown && (
                    <button
                      onClick={() =>
                        setActiveMobileDropdown(open ? null : idx)
                      }>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasDropdown && open && (
                  <div className="flex flex-col pl-4 mt-2">
                    {link.subLinks.map((sub, sIdx) => (
                      <DynamicLink
                        key={sIdx}
                        to={sub.path}
                        isExternal={sub.isExternal}
                        onClick={() => setMenuOpen(false)}
                        className="py-2 text-sm">
                        {sub.label}
                      </DynamicLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {cta?.label && (cta.link || cta.url) && (
            <DynamicLink
              to={cta.link || cta.url}
              isExternal={cta.isExternal}
              onClick={() => setMenuOpen(false)}
              className="mt-6 text-center font-bold text-white px-6 py-3 rounded-xl"
              style={{ backgroundColor: activeTheme.primary }}>
              {cta.label}
            </DynamicLink>
          )}
        </div>
      </div>
    </nav>
  );
}
