import React, { useState } from "react";

const Header = ({
  address = "7882 Longbranch Rd Wooster, New York",
  email = "Email Us ami@example.com",
  phone = "+(84) 4130 0555",
  buttonText = "BOOK YOUR STAY",
  onBookClick,
  navLinks = [
    { name: "HOME", hasDropdown: true },
    { name: "ABOUT HOMESTAY", hasDropdown: true },
    { name: "ROOMS", hasDropdown: true },
    { name: "GALLERY", hasDropdown: false },
    { name: "NEWS", hasDropdown: false },
    { name: "PAGES", hasDropdown: true },
    { name: "CONTACT", hasDropdown: false },
  ],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans relative z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-3 lg:py-4 px-4 lg:px-8 relative z-20">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Left Side: Hamburger (Mobile) & Contact Info (Desktop) */}
          <div className="flex-1 lg:w-1/3 flex items-center justify-start gap-6">
            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-[#C59D6F] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 border rounded-full border-[#C59D6F] text-[#C59D6F]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"
                    />
                  </svg>
                </div>
                <p className="text-xs xl:text-sm text-gray-500 leading-snug max-w-[160px]">
                  {address}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 border rounded-full border-[#C59D6F] text-[#C59D6F]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                    />
                  </svg>
                </div>
                <p className="text-xs xl:text-sm text-gray-500">{email}</p>
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 lg:w-1/3 flex justify-center">
            <img
              src="https://demo2.themelexus.com/amihomestay/wp-content/uploads/2019/08/logo.svg"
              alt="Ami Homestay"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Right Side: Phone (Desktop) & CTA Button */}
          <div className="flex-1 lg:w-1/3 flex items-center justify-end gap-3 lg:gap-5">
            <div className="hidden xl:block text-lg font-serif tracking-wide text-[#C59D6F] whitespace-nowrap">
              {phone}
            </div>

            <button
              onClick={onBookClick}
              className="bg-[#D1A67B] hover:bg-[#b58b60] text-white text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 transition rounded-sm whitespace-nowrap">
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-[#413C38] w-full">
        <div className="max-w-[1400px] mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center py-4 gap-6 xl:gap-10">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-1 text-[11px] xl:text-xs font-bold text-white uppercase tracking-[0.12em] hover:text-[#C59D6F] transition">
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className="w-3 h-3 text-gray-400 group-hover:text-[#C59D6F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden bg-[#413C38] w-full absolute left-0 right-0 transition-all duration-300 ease-in-out z-10 ${
          isMobileMenuOpen
            ? "max-h-[400px] opacity-100 visible border-t border-gray-700"
            : "max-h-0 opacity-0 invisible"
        }`}>
        <ul className="flex flex-col py-2 px-4">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="border-b border-gray-600 last:border-b-0">
              <a
                href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between py-4 text-xs sm:text-sm font-bold text-white uppercase tracking-[0.12em] hover:text-[#C59D6F] transition"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
            </li>
          ))}

          {/* Mobile Extra Info (Phone) */}
          <li className="pt-4 pb-2">
            <div className="flex flex-col gap-2 text-center">
              <span className="text-gray-400 text-xs">Call Us:</span>
              <span className="text-[#C59D6F] font-serif text-lg">{phone}</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
