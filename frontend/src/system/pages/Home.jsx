import { useState, useEffect } from "react";

const NAV_LINKS = [
  "Services",
  "Solutions",
  "Industries",
  "Insights",
  "Technologies",
];

// Etrynix Logo SVG - colorful interlocked rings matching the image
function EtrynixLogo({ size = "md" }) {
  const scale = size === "sm" ? 0.6 : size === "lg" ? 1.4 : 1;
  const w = Math.round(44 * scale);
  const h = Math.round(44 * scale);

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon: interlocked rings */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {/* Blue ring - left */}
        <path
          d="M8 22 C8 13 14 7 20 8 C14 10 12 16 14 22 C12 28 14 34 20 36 C14 37 8 31 8 22Z"
          fill="url(#blueGrad)"
        />
        <path
          d="M8 22 C8 14 13 9 19 9 C13 12 11 17 13 22 C11 27 13 32 19 35 C13 35 8 30 8 22Z"
          fill="url(#blueGrad2)"
          opacity="0.7"
        />
        <ellipse
          cx="14"
          cy="22"
          rx="8"
          ry="13"
          stroke="url(#blueGrad)"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Green ring - top */}
        <ellipse
          cx="22"
          cy="15"
          rx="10"
          ry="7"
          stroke="url(#greenGrad)"
          strokeWidth="3.5"
          fill="none"
          transform="rotate(-20 22 15)"
        />

        {/* Yellow arc - top */}
        <path
          d="M22 8 Q32 6 36 14"
          stroke="url(#yellowGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Red/orange arrow ring - bottom right */}
        <path
          d="M28 20 C34 20 38 25 36 31 C34 36 28 38 23 36 L25 33 C28 35 33 33 34 29 C35 25 32 22 28 22Z"
          fill="url(#redGrad)"
        />
        <polygon points="22,36 26,32 28,37" fill="url(#redGrad)" />
      </svg>

      {/* Text: E-t-r-y-n-i-x each letter colored */}
      <span
        className="font-black text-xl tracking-tight leading-none select-none"
        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
        <span style={{ color: "#4285F4" }}>E</span>
        <span style={{ color: "#EA4335" }}>t</span>
        <span style={{ color: "#FBBC05" }}>r</span>
        <span style={{ color: "#34A853" }}>y</span>
        <span style={{ color: "#4285F4" }}>n</span>
        <span style={{ color: "#EA4335" }}>i</span>
        <span style={{ color: "#34A853" }}>x</span>
      </span>

      <defs>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#1a56db" />
        </linearGradient>
        <linearGradient id="blueGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#4285F4" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34A853" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="yellowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FBBC05" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EA4335" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
    </div>
  );
}

function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#020b18]" />
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-20 right-32 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[80px]" />
      {/* Colorful glow blobs matching logo colors */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-green-500/4 rounded-full blur-[60px]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse">
            <line
              x1="0"
              y1="30"
              x2="40"
              y2="30"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <line
              x1="80"
              y1="30"
              x2="120"
              y2="30"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <line
              x1="40"
              y1="0"
              x2="40"
              y2="30"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <line
              x1="80"
              y1="30"
              x2="80"
              y2="60"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <line
              x1="60"
              y1="60"
              x2="60"
              y2="120"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <line
              x1="40"
              y1="30"
              x2="80"
              y2="30"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <line
              x1="60"
              y1="60"
              x2="80"
              y2="60"
              stroke="#1e5fa8"
              strokeWidth="0.8"
            />
            <circle cx="40" cy="30" r="2" fill="#2d7dd2" />
            <circle cx="80" cy="30" r="2" fill="#2d7dd2" />
            <circle cx="60" cy="60" r="2" fill="#2d7dd2" />
            <circle cx="80" cy="60" r="1.5" fill="#1e5fa8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="60%"
          y1="0"
          x2="100%"
          y2="40%"
          stroke="#0ea5e9"
          strokeWidth="1"
          strokeDasharray="8,16"
          opacity="0.5">
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="100"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="30%"
          y1="100%"
          x2="80%"
          y2="30%"
          stroke="#38bdf8"
          strokeWidth="0.8"
          strokeDasharray="6,20"
          opacity="0.4">
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="80"
            dur="6s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="0"
          y1="60%"
          x2="50%"
          y2="10%"
          stroke="#0284c7"
          strokeWidth="0.6"
          strokeDasharray="4,24"
          opacity="0.3">
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="60"
            dur="8s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#010d1a] border-b border-blue-900/30 text-xs text-gray-400 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">🇮🇳 +91 98765 43210</span>
          <span className="flex items-center gap-1.5">🇺🇸 +1 205 465 0505</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            hello@etrynix.com
          </span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "f", color: "#4285F4" },
            { label: "▶", color: "#EA4335" },
            { label: "in", color: "#34A853" },
            { label: "ig", color: "#FBBC05" },
          ].map(({ label, color }, i) => (
            <button
              key={i}
              className="w-6 h-6 rounded border border-gray-700/50 flex items-center justify-center text-[10px] transition-all hover:border-gray-500"
              style={{ color }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-blue-900/20 ${scrolled ? "bg-[#010d1a]/95 backdrop-blur-md shadow-lg shadow-blue-950/30" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <EtrynixLogo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors font-medium group">
                {link}
                <svg
                  className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all shadow-lg"
              style={{
                background: "linear-gradient(135deg, #4285F4, #34A853)",
              }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Let's Talk
            </button>
            <button
              className="px-4 py-2 rounded-full border text-sm font-semibold transition-all hover:bg-orange-500/10"
              style={{ borderColor: "#EA4335", color: "#EA4335" }}>
              Free Consultation!
            </button>
            {/* Hamburger */}
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#010d1a] border-t border-blue-900/20 px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="block w-full text-left text-sm text-gray-300 hover:text-white py-2 border-b border-blue-900/20 transition-colors">
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const words = ["Innovation", "Excellence", "Imagination"];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const wordColors = ["#4285F4", "#34A853", "#EA4335"];

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTyped(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length)
            setTimeout(() => setDeleting(true), 1800);
          else setCharIdx((c) => c + 1);
        } else {
          setTyped(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
            setCharIdx(0);
          } else setCharIdx((c) => c - 1);
        }
      },
      deleting ? 60 : 80,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#FBBC05" + "40",
              background: "#FBBC0508",
              color: "#FBBC05",
            }}>
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#FBBC05" }}
            />
            Web Development Agency
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl xl:text-7xl font-black leading-[1.05] text-white">
              Where <span style={{ color: wordColors[wordIdx] }}>{typed}</span>
              <span
                className="inline-block w-0.5 h-12 xl:h-16 ml-1 animate-pulse align-middle"
                style={{ background: wordColors[wordIdx] }}
              />
            </h1>
            <h1 className="text-5xl xl:text-7xl font-black leading-[1.05] text-white mt-1">
              Meets Results
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            We deliver smart, scalable, enterprise-ready web & mobile solutions
            that turn your ideas into a powerful digital experience. Trusted by
            businesses across India and globally.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 py-4 border-y border-blue-900/30">
            {[
              ["150+", "Projects", "#4285F4"],
              ["50+", "Clients", "#34A853"],
              ["4.9★", "Rating", "#FBBC05"],
            ].map(([num, label, color]) => (
              <div key={label}>
                <div className="text-2xl font-black" style={{ color }}>
                  {num}
                </div>
                <div className="text-xs text-gray-500 font-medium">{label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-all shadow-lg active:scale-95 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
              }}>
              Our Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm transition-all hover:bg-red-500/10"
              style={{ border: "1.5px solid #EA4335", color: "#EA4335" }}>
              Talk To Experts
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>

          {/* Trust */}
          <div className="flex items-center gap-4 pt-2 flex-wrap">
            <span className="text-xs text-gray-600 font-medium">
              TRUSTED BY
            </span>
            {[
              { label: "Google Partner", color: "#4285F4" },
              { label: "ISO Certified", color: "#34A853" },
              { label: "AWS Partner", color: "#FBBC05" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="text-xs border rounded px-2 py-1"
                style={{ borderColor: color + "40", color }}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Floating dashboard card */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div
            className="absolute w-80 h-80 rounded-full blur-[60px]"
            style={{ background: "#4285F420" }}
          />

          {/* Main card */}
          <div className="relative w-80 rounded-2xl border border-blue-800/40 bg-[#050e1e]/80 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-gray-500 font-medium tracking-wide">
                PROJECT OVERVIEW
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ color: "#34A853", background: "#34A85315" }}>
                ● Live
              </span>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "Performance",
                  value: 98,
                  from: "#4285F4",
                  to: "#34A853",
                },
                {
                  label: "SEO Score",
                  value: 96,
                  from: "#FBBC05",
                  to: "#EA4335",
                },
                {
                  label: "Accessibility",
                  value: 100,
                  from: "#34A853",
                  to: "#4285F4",
                },
              ].map(({ label, value, from, to }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-white font-bold">{value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-800">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${value}%`,
                        background: `linear-gradient(90deg, ${from}, ${to})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/30 flex items-center justify-between">
              <div className="flex -space-x-2">
                {["#4285F4", "#EA4335", "#34A853", "#FBBC05"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: c + "25",
                      borderColor: c + "80",
                    }}>
                    <span style={{ color: c }}>U</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">+12 team members</span>
            </div>
          </div>

          {/* Mini floating cards */}
          <div className="absolute -top-6 -left-6 bg-[#050e1e]/90 border border-blue-800/30 rounded-xl p-3 backdrop-blur-md">
            <div className="text-xs text-gray-500 mb-1">Delivery</div>
            <div className="text-lg font-black text-white">On Time</div>
            <div className="text-xs font-semibold" style={{ color: "#34A853" }}>
              ✓ 100%
            </div>
          </div>

          <div
            className="absolute -bottom-6 -right-4 bg-[#050e1e]/90 border rounded-xl p-3 backdrop-blur-md"
            style={{ borderColor: "#FBBC0530" }}>
            <div className="text-xs text-gray-500 mb-1">Client Rating</div>
            <div className="text-lg font-black" style={{ color: "#FBBC05" }}>
              4.9 / 5
            </div>
            <div className="flex gap-0.5 text-xs" style={{ color: "#FBBC05" }}>
              ★★★★★
            </div>
          </div>
        </div>
      </div>

      {/* Service pills */}
      <div className="relative z-10 border-t border-blue-900/20 bg-[#020b18]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
          <span className="text-xs text-gray-600 font-medium whitespace-nowrap shrink-0">
            WE BUILD →
          </span>
          {[
            { label: "Web Design", color: "#4285F4" },
            { label: "Mobile Apps", color: "#EA4335" },
            { label: "E-Commerce", color: "#34A853" },
            { label: "React / Next.js", color: "#FBBC05" },
            { label: "Firebase", color: "#4285F4" },
            { label: "SEO & Performance", color: "#EA4335" },
            { label: "UI/UX Design", color: "#34A853" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className="whitespace-nowrap text-xs cursor-pointer font-medium px-3 py-1.5 rounded-full border transition-all hover:bg-white/5"
              style={{ borderColor: color + "30", color: "#9ca3af" }}
              onMouseEnter={(e) => {
                e.target.style.color = color;
                e.target.style.borderColor = color + "60";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#9ca3af";
                e.target.style.borderColor = color + "30";
              }}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "🌐",
      title: "Web Design & Development",
      desc: "Custom, responsive websites built with React, Next.js and modern tech stacks.",
      color: "#4285F4",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Cross-platform apps with React Native — iOS and Android from one codebase.",
      color: "#EA4335",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      desc: "Full-stack online stores with Firebase, Stripe, and inventory management.",
      color: "#34A853",
    },
    {
      icon: "🤖",
      title: "AI-Powered Products",
      desc: "Integrate AI into your workflows — chatbots, automation, smart dashboards.",
      color: "#FBBC05",
    },
    {
      icon: "🔍",
      title: "SEO & Performance",
      desc: "Make your site rank higher and load faster with proven optimization strategies.",
      color: "#4285F4",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "User-centered design with Figma — wireframes to polished prototypes.",
      color: "#EA4335",
    },
  ];

  return (
    <section className="relative bg-[#020b18] py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#FBBC05" }}>
            What We Offer
          </span>
          <h2 className="text-4xl xl:text-5xl font-black text-white">
            Services Built to{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #4285F4, #34A853, #EA4335)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Scale
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            From startup landing pages to enterprise platforms — we've got the
            expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon, title, desc, color }) => (
            <div
              key={title}
              className="group relative rounded-2xl border bg-[#050e1e]/60 p-6 cursor-pointer transition-all duration-300 hover:bg-[#060f20]/90 hover:-translate-y-1"
              style={{ borderColor: color + "25" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = color + "60")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = color + "25")
              }>
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-base font-bold mb-2" style={{ color }}>
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              <div
                className="mt-5 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color }}>
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#010d1a] border-t border-blue-900/20 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <EtrynixLogo size="sm" />
          <p className="text-xs text-gray-600 mt-2">
            Building digital experiences for India & beyond.
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-gray-600">
          {[
            { label: "Privacy", color: "#4285F4" },
            { label: "Terms", color: "#EA4335" },
            { label: "Sitemap", color: "#34A853" },
            { label: "Contact", color: "#FBBC05" },
          ].map(({ label, color }) => (
            <button
              key={label}
              className="transition-colors hover:text-gray-300"
              onMouseEnter={(e) => (e.target.style.color = color)}
              onMouseLeave={(e) => (e.target.style.color = "#4b5563")}>
              {label}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-700">
          © 2025 Etrynix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function EtrynixHomepage() {
  return (
    <div className="min-h-screen bg-[#020b18] font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
