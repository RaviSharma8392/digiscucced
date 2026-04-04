import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// ── Mock Data ────────────────────────────────────────────────────────
const noticesData = [
  {
    id: 1,
    title: "AI Impact Summit: Panel Discussion 16 & 17 Feb 2026",
    date: "16/02/2026",
    path: "#",
  },
  {
    id: 2,
    title: "Scaling AI for Public Health Impact: Public-Private Partnership",
    date: "16/02/2026",
    path: "#",
  },
  {
    id: 3,
    title: "NHA Annual Report 2024-25",
    date: "14/01/2026",
    path: "#",
  },
  {
    id: 4,
    title: "Federated Intelligence Hackathon (The NHA-IITK-ICMR Hackathon)",
    date: "30/12/2025",
    path: "#",
  },
  {
    id: 5,
    title: "ABDM Newsletter - Digital Health Digest - April 2025 to June 2025",
    date: "02/12/2025",
    path: "#",
  },
  {
    id: 6,
    title:
      "National Health Authority Hosts 2-Day PM-JAY & ABDM National Review Meeting in Bhopal, Madhya Pradesh",
    date: "16/10/2025",
    path: "#",
  },
];

// ── Main Section ─────────────────────────────────────────────────────
export default function NoticesSection({ notices = noticesData }) {
  return (
    <section
      aria-labelledby="notices-heading"
      className="w-full bg-[#fcfbf9] py-20 px-4 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* --- HEADER --- */}
        <header className="mb-14 text-center flex flex-col items-center">
          <p className="about-school-sans text-gray-800 font-semibold text-lg md:text-xl uppercase tracking-wider mb-2">
            Important Updates
          </p>

          <h2
            id="notices-heading"
            className="about-school-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1a1f5e] leading-tight mb-2 flex flex-col gap-1">
            <span>Notice & Circulars</span>
            <span>सूचनाएँ एवं परिपत्र</span>
          </h2>

          {/* Red Swoosh */}
          <svg
            width="100"
            height="15"
            viewBox="0 0 100 15"
            fill="none"
            className="mt-3"
            aria-hidden="true">
            <path
              d="M2 12C25 4 60 2 95 10"
              stroke="#d35050"
              strokeWidth="4"
              strokeLinecap="round"
              className="about-school-swoosh-path"
            />
          </svg>
        </header>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {notices.map((notice) => (
            <a
              key={notice.id}
              href={notice.path}
              className="group flex flex-col justify-between bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              {/* Top: Icon + Title */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 mt-1">
                  <img
                    src="https://abdm.gov.in/static/media/icon-pdf.30469f2da27a376a45894a9965aef157.svg"
                    alt="PDF Icon"
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="about-school-sans text-[17px] font-bold text-[#1a1f5e] leading-snug group-hover:text-[#d35050] transition-colors duration-300">
                  {notice.title}
                </h3>
              </div>

              {/* Bottom: Date */}
              <div className="about-school-sans text-[14px] font-medium text-gray-400 mt-auto">
                Published Date : {notice.date}
              </div>
            </a>
          ))}
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <div className="mt-14 text-center">
          <a
            href="/all-notices"
            className="inline-flex items-center justify-center gap-3 bg-[#d35050] hover:bg-[#b03d3d] text-white px-8 py-3.5  font-about-school-sans font-bold text-lg transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200 group">
            <span className="about-school-sans">
              View All Notices{" "}
              <span className="font-normal opacity-80 mx-1">|</span> सभी सूचनाएं
              देखें
            </span>
            <ArrowRightIcon
              className="w-5 h-5 stroke-2 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
