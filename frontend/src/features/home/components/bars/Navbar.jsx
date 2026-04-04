import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ChevronDown = () => (
  <svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const navItems = [
  { name: "Home", path: "/" },
  { name: "Who we are", path: "/who-we-are" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "Newsroom", path: "/newsroom" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeClass = "text-white border-b-2 border-white";

  const normalClass = "text-gray-300 hover:text-white";

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-3xl font-semibold tracking-tight">ds</span>

          <div className="flex flex-col text-[10px] uppercase tracking-widest border-l border-gray-700 pl-3">
            <span>Digi</span>
            <span>Succeed</span>
            <span>Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-sm font-medium transition ${isActive ? activeClass : normalClass}`
              }>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/contact"
            className="group flex items-center gap-3 border border-white px-5 py-3 rounded-md hover:bg-white hover:text-black transition">
            <span className="text-xs uppercase tracking-widest font-semibold">
              Partner With Us
            </span>

            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            {mobileOpen ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111] border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white text-base">
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-white px-5 py-3 text-center hover:bg-white hover:text-black transition">
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
