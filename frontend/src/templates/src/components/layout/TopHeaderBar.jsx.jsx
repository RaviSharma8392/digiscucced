import { Link } from "react-router-dom";

export default function TopHeaderBar({
  contact = {},
  theme = {},
  announcement = "Admissions open for Academic Year 2026-27! Apply today.",
  variant = 1,
}) {
  const phone = contact?.phone || "+91 98765 43210";
  const email = contact?.email || "admissions@school.edu";

  const primary = theme?.primary || "#0f3460";
  const accent = theme?.accent || "#e8a020";

  // --- REUSABLE SVG ICONS (No external libraries needed) ---
  const PhoneIcon = () => (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );

  const MailIcon = () => (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  const SocialIcons = () => (
    <div className="flex items-center gap-3">
      <a
        href="#"
        className="hover:text-[var(--accent)] transition-colors"
        style={{ "--accent": accent }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>
      <a
        href="#"
        className="hover:text-[var(--accent)] transition-colors"
        style={{ "--accent": accent }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </div>
  );

  // ==========================================
  // VARIANT 1: Classic Academic (Clean & Trustworthy)
  // ==========================================
  if (variant === 1) {
    return (
      <div
        className="w-full text-[12px] sm:text-[13px] font-medium tracking-wide hidden sm:block border-b border-white/10"
        style={{ backgroundColor: primary, color: "#e2e8f0" }}>
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            {phone && (
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                <span style={{ color: accent }}>
                  <PhoneIcon />
                </span>
                <span>{phone}</span>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                <span style={{ color: accent }}>
                  <MailIcon />
                </span>
                <span>{email}</span>
              </div>
            )}
          </div>

          {/* Right: Quick Links & Socials */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-white/70">
              <Link
                to="/careers"
                className="hover:text-white transition-colors">
                Careers
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <Link to="/alumni" className="hover:text-white transition-colors">
                Alumni
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <Link to="/portal" className="hover:text-white transition-colors">
                Parent Portal
              </Link>
            </div>
            <div className="w-px h-4 bg-white/20 hidden md:block" />
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 2: The Action Banner (Highlights an Announcement)
  // ==========================================
  if (variant === 2) {
    return (
      <div
        className="w-full text-xs sm:text-sm font-semibold relative overflow-hidden"
        style={{ backgroundColor: primary, color: "#fff" }}>
        {/* Subtle accent gradient background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row items-center justify-center sm:justify-between relative z-10">
          {/* Left: Phone only on desktop to save space */}
          <div className="hidden lg:flex items-center gap-2 text-white/90">
            <PhoneIcon /> {phone}
          </div>

          {/* Center: The Announcement */}
          <div className="flex items-center gap-2 text-center">
            <span
              className="animate-pulse shadow-sm rounded-full w-2 h-2"
              style={{ backgroundColor: accent }}
            />
            <span className="tracking-wide">{announcement}</span>
            <Link
              to="/admissions"
              className="underline decoration-white/50 hover:decoration-white transition-all ml-1"
              style={{ color: accent }}>
              Click Here
            </Link>
          </div>

          {/* Right: Socials only on desktop */}
          <div className="hidden lg:block">
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 3: Modern Minimalist (Thin & Elegant)
  // ==========================================
  if (variant === 3) {
    return (
      <div className="w-full text-[12px] hidden md:block border-b border-slate-200 bg-slate-50 text-slate-600">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5 font-medium">
            <span className="uppercase tracking-widest text-[10px] font-bold text-slate-400">
              Contact Us
            </span>
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors"
                style={{ "--primary": primary }}>
                <PhoneIcon /> {phone}
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors"
                style={{ "--primary": primary }}>
                <MailIcon /> {email}
              </a>
            )}
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
