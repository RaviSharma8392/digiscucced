import React, { useState, useCallback, memo, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Services", hasSub: true },
  { name: "Solutions", hasSub: false },
  { name: "Industries", hasSub: false },
  { name: "Insights", hasSub: false },
  { name: "Technologies", hasSub: true },
];
/* 🔗 ENHANCED NAV LINK */
const NavLink = memo(({ children, to, hasSubmenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="relative group list-none">
      <Link
        to={to}
        className={`text-[15px] font-medium transition-all duration-300 py-2 flex items-center gap-1
        ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`}>
        {children}
        {hasSubmenu && (
          <ChevronDownIcon className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
        )}
      </Link>

      {/* Modern Underline - starts from center */}
      <span
        className={`absolute left-1/2 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 rounded-full -translate-x-1/2
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      />

      {/* Example Hover Dropdown (Invisible by default) */}
      {hasSubmenu && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-2 rounded-xl z-50">
          <Link
            to="/web-dev"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg">
            Web Development
          </Link>
          <Link
            to="/app-dev"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg">
            App Development
          </Link>
        </div>
      )}
    </li>
  );
});

NavLink.displayName = "NavLink";

const Navbar = ({ logoUrl = "/etrynixNewLogo.png" }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`w-full sticky top-0 z-[100] transition-all duration-500
      ${scrolled ? "py-3 bg-white/90 backdrop-blur-lg shadow-sm" : "py-5 bg-white"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoUrl}
            alt="Logo"
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={`/${item.name.toLowerCase()}`}
              hasSubmenu={item.hasSub}>
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* CTA BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2.5 text-[15px] font-semibold text-orange-500 border border-orange-400 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
            Free Consultation
          </button>
        </div>
        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu">
          {open ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU (Responsive Full Screen) */}
      <div
        className={`lg:hidden fixed inset-0 top-[64px] bg-white transition-all duration-500 ease-in-out z-40
  ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>
        <div className="px-5 py-6 flex flex-col h-full">
          {/* NAV ITEMS */}
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`transition-all duration-500 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-orange-500 flex justify-between items-center">
                  {item.name}
                  <span className="text-orange-500 text-xs sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <div className="mt-auto pb-6 flex flex-col gap-3">
            <div className="h-[1px] bg-gray-100 w-full mb-4"></div>

            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
              Get in touch
            </p>

            <Link
              to="/contact"
              className="text-lg sm:text-xl font-bold text-gray-900 break-all">
              hello@etrynix.com
            </Link>
          </div>
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

export default memo(Navbar);
