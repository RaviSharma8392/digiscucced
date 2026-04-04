import React from "react";
import { Link } from "react-router-dom";
import { schoolConfig } from "../config/schoolConfig"; // Adjust path if needed

// ── Default data ─────────────────────────────────────────────────────────────
const defaultQuickFees = [
  { label: "Nursery – KG", amount: "₹45,000", period: "Per year" },
  { label: "Class I – V", amount: "₹52,000", period: "Per year" },
  { label: "Class VI – VIII", amount: "₹58,000", period: "Per year" },
  { label: "Class IX – X", amount: "₹65,000", period: "Per year" },
  { label: "Class XI – XII", amount: "₹72,000", period: "Per year" },
];

const defaultDocuments = [
  {
    id: 1,
    title: "Fee Structure 2025–2026",
    subtitle: "Annual fee schedule — all classes & streams",
    session: "2025–26",
    link: "/fee-2025-26.pdf",
    isNew: false,
  },
  {
    id: 2,
    title: "Fee Structure 2026–2027",
    subtitle: "Annual fee schedule — all classes & streams",
    session: "2026–27",
    link: "/fee-2026-27.pdf",
    isNew: true,
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const EyeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function FeeStructurePage({
  quickFees = defaultQuickFees,
  documents = defaultDocuments,
  heroImage,
  notice,
}) {
  const { school = {}, theme = {} } = schoolConfig || {};
  const primary = theme.primary || "#0f3460";
  const accent = theme.accent || "#e8a020";
  const bgImg =
    heroImage ||
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=75";

  const defaultNotice = `The above fee structure is indicative. Exact fee details — including transport, uniform, and activity charges — are shared during the admission interaction. For queries, contact the admissions office at ${school.contact?.phone || "+91-9876543210"}.`;

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ── 1. HERO BANNER ───────────────────────────────────────────────── */}
      <section className="relative h-64 sm:h-80 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a142e]/90 to-[#0a142e]/60" />
        <div
          className="absolute top-0 left-0 right-0 h-1.5 z-10"
          style={{ backgroundColor: accent }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px]" style={{ backgroundColor: accent }} />
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: accent }}>
              Transparency & Accessibility
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Fee Structure
          </h1>
          <p className="text-sm sm:text-base font-light text-white/70">
            {school.name || "Our School"} • CBSE Affiliated • Academic Year
            2026–27
          </p>
        </div>
      </section>

      {/* ── 2. BREADCRUMBS ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link to="/" className="hover:text-slate-800 transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link
            to="/admissions"
            className="hover:text-slate-800 transition-colors">
            Admission
          </Link>
          <span>›</span>
          <span className="font-bold" style={{ color: primary }}>
            Fee Structure
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10 pb-20 space-y-16">
        {/* ── 3. QUICK FEE CARDS ──────────────────────────────────────── */}
        {quickFees?.length > 0 && (
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {quickFees.map((fee, i) => (
                <div
                  key={i}
                  className="group relative bg-white p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Top Animated Bar */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{ backgroundColor: accent }}
                  />
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    {fee.label}
                  </p>
                  <p
                    className="text-3xl font-black mb-1"
                    style={{
                      color: primary,
                      fontFamily: "'Playfair Display', serif",
                    }}>
                    {fee.amount}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {fee.period}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 4. DOCUMENT TABLE ───────────────────────────────────────── */}
        {documents?.length > 0 && (
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-6 h-1 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-slate-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Official Fee Documents
                  </h2>
                </div>
              </div>
              <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-md">
                Updated March 2026
              </span>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: primary }}>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-[0.15em] text-white/70 text-center w-20">
                      S.No.
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                      Documents / Information
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                      Session
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-[0.15em] text-white/70 text-center w-36">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {documents.map((doc, i) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 text-center font-bold text-slate-300 font-serif text-lg">
                        {doc.id}
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-slate-800">
                            {doc.title}
                          </span>
                          {doc.isNew && (
                            <span
                              className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider border"
                              style={{
                                backgroundColor: `${accent}15`,
                                color: "#b45309",
                                borderColor: `${accent}40`,
                              }}>
                              <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{ backgroundColor: accent }}
                              />
                              New
                            </span>
                          )}
                        </div>
                        {doc.subtitle && (
                          <div className="text-xs text-slate-500 mt-1">
                            {doc.subtitle}
                          </div>
                        )}
                      </td>
                      <td className="py-5 px-6">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: `${primary}15`,
                            color: primary,
                          }}>
                          {doc.session}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                          style={{ backgroundColor: primary }}>
                          <EyeIcon /> View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── 5. NOTICE CARD ──────────────────────────────────────────── */}
        {/* Uses logical OR (||) so it falls back to default if notice is empty/null */}
        {(notice || defaultNotice) && (
          <section>
            <div
              className="flex items-start gap-4 p-6 sm:p-8 bg-slate-100 border-l-4"
              style={{ borderColor: primary }}>
              <div
                className="w-12 h-12 rounded-none flex items-center justify-center flex-shrink-0 bg-white shadow-sm"
                style={{ color: primary }}>
                <InfoIcon />
              </div>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-wider mb-2"
                  style={{ color: primary }}>
                  Important Note
                </p>
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {notice || defaultNotice}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 6. HELP STRIP ───────────────────────────────────────────── */}
        <section>
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 shadow-2xl"
            style={{ backgroundColor: primary }}>
            <div className="text-center md:text-left">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Need more information?
              </h3>
              <p className="text-sm font-light text-white/70">
                Our admissions team is available Mon–Sat, 9 AM to 3 PM to answer
                all your queries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                to="/admissions"
                className="flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-lg"
                style={{ backgroundColor: accent, color: primary }}>
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white border-2 transition-colors hover:bg-white hover:text-slate-900"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
