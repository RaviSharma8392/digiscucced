import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

/* ─── CSS injected once ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@500;600;700&display=swap');

  :root {
    --navy:         #1a1f5e;
    --saffron:      #f5820a;
    --india-green:  #138808;
    --crimson:      #8b0000;
    --gold:         #c9a227;
    --cream:        #fdf8ef;
    --light-saffron:#fef3e2;
  }

  .hdr-root { font-family: 'Rajdhani', sans-serif; }
  .hdr-root h1, .hdr-root h2 { font-family: 'Libre Baskerville', serif; }

  /* Tricolor bar slide-in */
  @keyframes triSlide {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  .tricolor-bar span { transform-origin: left; animation: triSlide 0.9s cubic-bezier(.22,1,.36,1) both; }
  .tricolor-bar span:nth-child(1) { animation-delay: 0s; }
  .tricolor-bar span:nth-child(2) { animation-delay: 0.12s; }
  .tricolor-bar span:nth-child(3) { animation-delay: 0.24s; }

  /* Header fade-down */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hdr-content { animation: fadeDown 0.6s ease both 0.3s; }

  /* Nav underline */
  .hdr-nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: 0; height: 2px;
    background: var(--saffron);
    transition: width 0.25s ease;
  }
  .hdr-nav-link:hover::after { width: 100%; }

  /* Dropdown */
  .hdr-dropdown {
    opacity: 0;
    transform: translateY(8px);
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .hdr-nav-group:hover .hdr-dropdown,
  .hdr-nav-group:focus-within .hdr-dropdown {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  /* Mobile slide */
  @keyframes slideDown {
    from { opacity: 0; max-height: 0; }
    to   { opacity: 1; max-height: 600px; }
  }
  .hdr-mobile-nav { animation: slideDown 0.35s ease both; overflow: hidden; }

  /* Chakra spin */
  @keyframes chakraSpin {
    from { transform: translateX(-50%) rotate(0deg); }
    to   { transform: translateX(-50%) rotate(360deg); }
  }
  .hdr-chakra { animation: chakraSpin 60s linear infinite; }

  /* Gold shimmer */
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  .hdr-shimmer {
    background: linear-gradient(90deg, var(--navy) 30%, var(--gold) 50%, var(--navy) 70%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite 1.5s;
  }
`;

/* ─── StyleInjector — renders once ─── */
let styleInjected = false;
function StyleInjector() {
  useEffect(() => {
    if (styleInjected) return;
    styleInjected = true;
    const el = document.createElement("style");
    el.textContent = STYLES;
    document.head.appendChild(el);
  }, []);
  return null;
}

/* ─── SafeImg — graceful fallback ─── */
function SafeImg({ src, alt = "", className = "" }) {
  const [err, setErr] = useState(false);
  const fallback = `https://placehold.co/120x120/1a1f5e/ffffff?text=${encodeURIComponent(alt || "Logo")}`;
  return (
    <img
      src={err ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setErr(true)}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Header — fully data-driven via props
   
   Props:
   ┌─ schoolData  {object}
   │   ├─ name        string          School name (required)
   │   ├─ ministry    string          e.g. "Ministry of Defence"
   │   ├─ gov         string          e.g. "Government of India"
   │   ├─ leftLogo    string (URL)    Logo shown left of title
   │   ├─ rightLogo   string (URL)    Logo shown right of title
   │   └─ smallLogos  string[]        Small logos above title
   │
   └─ navItems   {NavItem[]}
       ├─ id       string|number      Unique key
       ├─ en       string             Label (English)
       ├─ hi       string?            Label (Hindi / subtitle)
       ├─ url      string?            href (default "#")
       └─ children {DropdownItem[]}?
           ├─ label  string
           └─ url    string?
   ───────────────────────────────────────────────────────────── */
export default function Header({ schoolData = {}, navItems = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StyleInjector />

      <header
        className={`hdr-root w-full sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-2xl" : "shadow-md"
        }`}
        style={{ background: "var(--cream)" }}>
        {/* ── Tricolor bar ── */}
        <div className="tricolor-bar flex h-1.25 w-full overflow-hidden">
          <span
            className="flex-1 block"
            style={{ background: "var(--saffron)" }}
          />
          <span className="flex-1 block bg-white" />
          <span
            className="flex-1 block"
            style={{ background: "var(--india-green)" }}
          />
        </div>

        {/* ── Background decorations ── */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ zIndex: 0 }}>
          {/* Dot grid */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hdr-dots"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#1a1f5e" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hdr-dots)" />
          </svg>
          {/* Chakra watermark */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg"
            className="hdr-chakra absolute w-85 left-1/2 -translate-x-1/2 top-4 opacity-[0.04]"
            alt=""
          />
        </div>

        {/* ── Main content ── */}
        <div className="hdr-content relative z-10 max-w-360 mx-auto px-4 sm:px-6 py-4">
          {/* ── Identity row ── */}
          <div className="flex items-center gap-4">
            {/* Left logo */}
            {schoolData.leftLogo && (
              <SafeImg
                src={schoolData.leftLogo}
                alt="Left Logo"
                className="w-16 sm:w-20 md:w-24 h-auto object-contain flex-shrink-0 drop-shadow-sm"
              />
            )}

            {/* Centre block */}
            <div className="flex-1 text-center">
              {/* Small logos row */}
              {schoolData.smallLogos?.length > 0 && (
                <div className="flex justify-center gap-3 mb-2">
                  {schoolData.smallLogos.map((logo, i) => (
                    <SafeImg
                      key={i}
                      src={logo}
                      className="h-7 sm:h-9 object-contain opacity-90"
                    />
                  ))}
                </div>
              )}

              {/* School name */}
              <h1 className="hdr-shimmer text-[1.1rem] sm:text-[1.5rem] md:text-[1.9rem] font-bold uppercase tracking-wide leading-tight">
                {schoolData.name || "Sainik School"}
              </h1>

              {/* Ministry */}
              {schoolData.ministry && (
                <h2
                  className="text-[0.7rem] sm:text-sm md:text-base font-semibold uppercase tracking-widest mt-0.5"
                  style={{
                    color: "var(--crimson)",
                    fontFamily: "'Rajdhani', sans-serif",
                  }}>
                  {schoolData.ministry}
                </h2>
              )}

              {/* Gov line */}
              {schoolData.gov && (
                <p
                  className="text-[0.65rem] sm:text-xs md:text-sm font-medium mt-0.5"
                  style={{ color: "var(--navy)", opacity: 0.75 }}>
                  {schoolData.gov}
                </p>
              )}

              {/* Gold divider */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <span
                  className="h-px w-16 sm:w-24"
                  style={{ background: "var(--gold)", opacity: 0.6 }}
                />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="#c9a227"
                    strokeWidth="1.5"
                  />
                  <circle cx="6" cy="6" r="2" fill="#c9a227" />
                </svg>
                <span
                  className="h-px w-16 sm:w-24"
                  style={{ background: "var(--gold)", opacity: 0.6 }}
                />
              </div>
            </div>

            {/* Right logo */}
            {schoolData.rightLogo && (
              <SafeImg
                src={schoolData.rightLogo}
                alt="School Logo"
                className="w-16 sm:w-20 md:w-24 h-auto object-contain flex-shrink-0 drop-shadow-sm hidden sm:block"
              />
            )}

            {/* Mobile hamburger (Heroicons) */}
            <button
              className="sm:hidden ml-1 p-2 rounded-md transition-colors"
              style={{ color: "var(--navy)" }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu">
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* ── Desktop nav ── */}
          {navItems.length > 0 && (
            <nav className="hidden sm:block mt-4">
              <div
                className="rounded-lg px-4 py-2"
                style={{ background: "var(--navy)" }}>
                <ul className="flex justify-center flex-wrap gap-1">
                  {navItems.map((item) => (
                    <li key={item.id} className="hdr-nav-group relative">
                      <a
                        href={item.url || "#"}
                        className="hdr-nav-link relative flex items-center gap-1 px-3 py-1.5 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer">
                        <div className="text-center">
                          <div
                            className="font-semibold text-[0.78rem] tracking-wide uppercase"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                            {item.en}
                          </div>
                          {item.hi && (
                            <div className="text-[0.6rem] text-white/55 leading-tight">
                              {item.hi}
                            </div>
                          )}
                        </div>
                        {item.children && (
                          <ChevronDownIcon className="w-3.5 h-3.5 opacity-70 mt-0.5 flex-shrink-0" />
                        )}
                      </a>

                      {/* Dropdown */}
                      {item.children && (
                        <ul
                          className="hdr-dropdown absolute left-0 top-full mt-2 w-52 rounded-lg overflow-hidden z-50"
                          style={{
                            background: "white",
                            boxShadow: "0 8px 32px rgba(26,31,94,0.18)",
                            border: "1px solid rgba(26,31,94,0.08)",
                          }}>
                          {item.children.map((child, i) => (
                            <li key={i}>
                              <a
                                href={child.url || "#"}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-[#fef3e2]"
                                style={{
                                  color: "var(--navy)",
                                  fontFamily: "'Rajdhani', sans-serif",
                                  fontWeight: 600,
                                }}>
                                <span
                                  className="w-1 h-1 rounded-full flex-shrink-0"
                                  style={{ background: "var(--saffron)" }}
                                />
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}

          {/* ── Mobile nav ── */}
          {mobileOpen && navItems.length > 0 && (
            <div
              className="hdr-mobile-nav sm:hidden mt-4  overflow-hidden"
              style={{ border: "1px solid rgba(26,31,94,0.12)" }}>
              <ul className="divide-y divide-gray-100">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url || "#"}
                      className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-[#fef3e2]"
                      style={{ color: "var(--navy)" }}
                      onClick={() => setMobileOpen(false)}>
                      <div>
                        <div
                          className="font-bold text-sm uppercase tracking-wide"
                          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                          {item.en}
                        </div>
                        {item.hi && (
                          <div
                            className="text-xs mt-0.5"
                            style={{ color: "var(--navy)", opacity: 0.5 }}>
                            {item.hi}
                          </div>
                        )}
                      </div>
                      {item.children && (
                        <ChevronDownIcon
                          className="w-4 h-4"
                          style={{ color: "var(--saffron)" }}
                        />
                      )}
                    </a>

                    {/* Mobile children */}
                    {item.children && (
                      <ul className="bg-gray-50 pl-6">
                        {item.children.map((child, i) => (
                          <li key={i}>
                            <a
                              href={child.url || "#"}
                              className="block px-4 py-2 text-sm border-l-2"
                              style={{
                                color: "var(--navy)",
                                borderColor: "var(--saffron)",
                                fontFamily: "'Rajdhani', sans-serif",
                                fontWeight: 600,
                              }}
                              onClick={() => setMobileOpen(false)}>
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Bottom gold line ── */}
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
          }}
        />
      </header>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Usage example — copy this into your page/app file:

   import Header from "./Header";

   const SCHOOL_DATA = {
     name:       "Sainik School Gopalganj",
     ministry:   "Ministry of Defence",
     gov:        "Government of India",
     leftLogo:   "https://example.com/left-logo.png",
     rightLogo:  "https://example.com/school-logo.png",
     smallLogos: [],          // optional extra logos above the title
   };

   const NAV_ITEMS = [
     { id: 1,  en: "Home",        hi: "होम",        url: "/" },
     { id: 2,  en: "About",       hi: "हमारे बारे",  url: "/about",
       children: [
         { label: "History",    url: "/about/history" },
         { label: "Vision",     url: "/about/vision"  },
         { label: "Leadership", url: "/about/leadership" },
       ]
     },
     { id: 3,  en: "Admissions", hi: "प्रवेश",      url: "/admissions" },
     { id: 4,  en: "Academics",  hi: "शिक्षा",      url: "/academics" },
     { id: 5,  en: "Gallery",    hi: "गैलरी",       url: "/gallery" },
     { id: 6,  en: "Contact",    hi: "संपर्क",       url: "/contact" },
   ];

   export default function App() {
     return <Header schoolData={SCHOOL_DATA} navItems={NAV_ITEMS} />;
   }
   ───────────────────────────────────────────────────────────── */
