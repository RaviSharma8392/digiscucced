import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ logo, name, tagline = "Under the aegis of Dyal Singh Library Trust Society", ribbonText = "Imparting Knowledge Since 1954", mainLinks, contact, socials, actionButton }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Default data perfectly matching the screenshot design
  // const navData = data || {
  //   brand: {
  //     name: "Dyal Singh Public Library",
  //     tagline: "Under the aegis of Dyal Singh Library Trust Society",
  //     logo: "https://dspl.org.in/assets/images/logo.png", // Replace with your actual logo
  //     ribbonText: "Imparting Knowledge Since 1954",
  //   },
  //   actionButton: {
  //     label: "Online Library Catalogue",
  //     url: "https://catalogue.example.com",
  //   },
  //   socials: {
  //     facebook: "https://facebook.com",
  //     twitter: "https://twitter.com",
  //     instagram: "https://instagram.com",
  //   },
  //   mainLinks: [
  //     { label: "Home", path: "/" },
  //     { label: "About Us", path: "/about" },
  //     { label: "Membership", path: "/membership" },
  //     { label: "New Arrivals", path: "/new-arrivals" },
  //     { label: "E-Book", path: "/e-book" },
  //     { label: "Gallery", path: "/gallery" },
  //     { label: "Contact Us", path: "/contact" },
  //   ],
  //   contact: {
  //     phone: "+91-11-2323-4907",
  //     email: "dyalsinghpubliclibrary@gmail.com",
  //   },
  // };

  return (
    <header className="w-full font-sans shadow-md" role="banner">

      {/* --- TOP TIER: Branding & Actions --- */}
      <div className="relative bg-[#a0c5d6] overflow-hidden border-b border-[#8fb4c5]">

        {/* Subtle Background Pattern (Optional CSS overlay) */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#1e4862_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-5 relative z-10 flex items-center justify-between">

          {/* Left: Logo & Titles */}
          <div className="flex items-center gap-3 lg:gap-4">
            {logo && (
              <img
                src={logo}
                alt={`${name} Logo`}
                className="h-12 w-12 lg:h-20 lg:w-20 object-contain drop-shadow-sm"
              />
            )}
            <div className="flex flex-col justify-center">
              <h1 className="text-xl lg:text-3xl font-serif text-[#1e4862] tracking-tight">
                {name}
              </h1>
              <p className="text-xs lg:text-[15px] text-[#255a7a] font-serif italic mt-0.5">
                {tagline}
              </p>
            </div>
          </div>

          {/* Center: Decorative Ribbon (Hidden on small screens) */}
          <div className="hidden xl:flex items-center justify-center relative mt-2">
            {/* Left Tail */}
            <div className="absolute -left-10 w-12 h-8 bg-[#153a51] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,25%_50%)]"></div>
            {/* Main Ribbon Body */}
            <div className="bg-[#1e4862] text-white px-8 py-1.5 text-lg font-serif font-medium relative z-10 shadow-md">
              {ribbonText}
            </div>
            {/* Right Tail */}
            <div className="absolute -right-10 w-12 h-8 bg-[#153a51] [clip-path:polygon(0_0,100%_0,75%_50%,100%_100%,0_100%)]"></div>

            {/* Ribbon Folds (Shadows) */}
            <div className="absolute -bottom-2 left-0 border-t-[8px] border-t-[#0d2230] border-l-[8px] border-l-transparent z-0"></div>
            <div className="absolute -bottom-2 right-0 border-t-[8px] border-t-[#0d2230] border-r-[8px] border-r-transparent z-0"></div>
          </div>

          {/* Right: CTA & Socials (Hidden on mobile, moved to hamburger) */}
          <div className="hidden lg:flex flex-col items-end gap-3">
            <a
              href={actionButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbd25a] hover:bg-[#eabf45] text-[#1e4862] px-5 py-1.5 rounded-full flex gap-2 items-center text-sm font-semibold transition-colors shadow-sm ring-2 ring-[#fbd25a]/50"
            >
              {actionButton.label} <ExternalLink size={16} />
            </a>

            <div className="flex gap-2.5">
              {socials.facebook && (
                <a href={socials.facebook} aria-label="Facebook" className="bg-[#1877F2] text-white p-1.5 rounded-full hover:scale-110 transition-transform shadow-sm">
                  <Facebook size={16} fill="currentColor" />
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} aria-label="Twitter" className="bg-[#1DA1F2] text-white p-1.5 rounded-full hover:scale-110 transition-transform shadow-sm">
                  <Twitter size={16} fill="currentColor" />
                </a>
              )}
              {socials.instagram && (
                <a href={socials.instagram} aria-label="Instagram" className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white p-1.5 rounded-full hover:scale-110 transition-transform shadow-sm">
                  <Instagram size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#1e4862] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* --- BOTTOM TIER: Navigation & Contact --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between py-0">
            <nav aria-label="Main Navigation" className="flex items-center gap-1 xl:gap-4">
              {mainLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={idx}
                    to={link.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3 xl:px-4 py-4 text-[15px] font-bold transition-colors ${isActive ? "text-[#1e4862]" : "text-[#335970] hover:text-[#1e4862]"
                      }`}
                  >
                    {link.label}
                    {/* Active Underline Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1e4862] rounded-t-md"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Info */}
            <div className="flex items-center gap-4 text-sm font-semibold text-[#4a6b7c]">
              <span className="flex items-center gap-1.5">
                <Phone size={16} className="text-[#1e4862]" /> {contact.phone}
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <Mail size={16} className="text-[#1e4862]" /> {contact.email}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* --- MOBILE DRAWER MENU --- */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px] opacity-100 border-b border-gray-200" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-6 space-y-6">

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-2">
            {mainLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-bold transition-colors ${isActive ? "bg-[#eaf3f8] text-[#1e4862]" : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <hr className="border-gray-100" />

          {/* Mobile Contact & CTA */}
          <div className="space-y-4 px-4">
            <div className="flex flex-col gap-3 text-sm font-semibold text-gray-600">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2">
                <Phone size={18} className="text-[#1e4862]" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2">
                <Mail size={18} className="text-[#1e4862]" /> {contact.email}
              </a>
            </div>

            <a
              href={actionButton.url}
              className="flex justify-center items-center gap-2 w-full bg-[#fbd25a] text-[#1e4862] px-4 py-3 rounded-xl font-bold mt-4"
            >
              {actionButton.label} <ExternalLink size={18} />
            </a>

            <div className="flex gap-4 justify-center pt-4">
              {socials.facebook && (
                <a href={socials.facebook} className="bg-[#1877F2] text-white p-2 rounded-full"><Facebook size={20} fill="currentColor" /></a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} className="bg-[#1DA1F2] text-white p-2 rounded-full"><Twitter size={20} fill="currentColor" /></a>
              )}
              {socials.instagram && (
                <a href={socials.instagram} className="bg-pink-600 text-white p-2 rounded-full"><Instagram size={20} /></a>
              )}
            </div>
          </div>

        </div>
      </div>

    </header>
  );
}