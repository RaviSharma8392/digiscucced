import React, { useState, useCallback, memo, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const NavLink = memo(({ children, to = "#" }) => (
  <li className="relative group list-none">
    <Link
      to={to}
      className="text-gray-700 font-medium text-[15px] hover:text-[#0ea5c6] transition-colors py-2 block">
      {children}
    </Link>
    {/* Underline animation */}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0ea5c6] transition-all duration-300 group-hover:w-full"></span>
  </li>
));

NavLink.displayName = "NavLink";

const Navbar = ({ logoUrl = "/logo.png" }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Useful for closing menu on route change

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    "Services",
    "Solutions",
    "Industries",
    "Insights",
    "Technologies",
  ];

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col">
      {/* 🔝 TOP BAR (Hidden on Mobile) */}
      <div className="hidden md:flex w-full bg-slate-900 text-gray-300 text-xs py-2 px-6 justify-between items-center">
        <div className="flex items-center gap-6 font-medium">
          <span className="hover:text-white transition-colors cursor-pointer">
            🇮🇳 +91 7292 050505
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            🇺🇸 +1 205 465 0505
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            ✉️ hello@invoided.com
          </span>
        </div>

        <div className="flex items-center gap-5 text-sm font-bold">
          <span className="cursor-pointer hover:text-[#0ea5c6] transition-colors">
            FB
          </span>
          <span className="cursor-pointer hover:text-[#0ea5c6] transition-colors">
            YT
          </span>
          <span className="cursor-pointer hover:text-[#0ea5c6] transition-colors">
            IN
          </span>
          <span className="cursor-pointer hover:text-[#0ea5c6] transition-colors">
            IG
          </span>
        </div>
      </div>

      {/* 🔽 MAIN NAVBAR */}
      <nav className="w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center z-10">
            <img
              src={logoUrl}
              alt="Company Logo"
              className="h-8 sm:h-10 lg:h-12 object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-8 m-0 p-0">
            {navItems.map((item) => (
              <NavLink key={item} to={`/${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          {/* <div className="hidden lg:flex items-center gap-4">
            <button className="bg-[#0ea5c6] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0c8ba6] hover:shadow-md transition-all active:scale-95">
              Let’s Talk AI
            </button>
            <button className="border-2 border-orange-400 text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors active:scale-95">
              Free Consultation
            </button>
          </div> */}

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0ea5c6]/50 transition-colors z-10"
            onClick={toggleMenu}
            aria-label="Toggle Navigation">
            {open ? (
              <XMarkIcon className="w-7 h-7 text-gray-800" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-gray-800" />
            )}
          </button>
        </div>

        {/* 📱 MOBILE MENU DROPDOWN */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top ${
            open
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          }`}>
          <div className="px-4 py-6 flex flex-col max-h-[80vh] overflow-y-auto">
            {/* Mobile Links */}
            <ul className="flex flex-col mb-6">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-gray-50 last:border-none">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block text-gray-800 font-medium py-4 px-2 hover:bg-gray-50 hover:text-[#0ea5c6] transition-colors rounded-md">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Buttons */}
            {/* <div className="flex flex-col gap-3 px-2">
              <button className="w-full bg-[#0ea5c6] text-white py-3.5 rounded-lg font-semibold shadow-sm hover:bg-[#0c8ba6] transition-colors">
                Let’s Talk AI
              </button>
              <button className="w-full border-2 border-orange-400 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Get a Free Consultation
              </button>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
