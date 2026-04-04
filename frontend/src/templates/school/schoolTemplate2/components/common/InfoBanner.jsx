import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// ── Mock Data Configuration ──────────────────────────────────────────
const schemesData = {
  titleEn: "SCHEMES",
  titleHi: "योजनाएं",
  subLinks: [
    { label: "Rashtriya Ucchatar Shiksha Abhiyan", url: "#" },
    { label: "National Research Professorship", url: "#" },
    { label: "Malaviya Mission Teacher Training Programme", url: "#" },
  ],
  viewAllTextEn: "More Schemes",
  viewAllTextHi: "अधिक योजनाएं",
  viewAllUrl: "/schemes",
  featured: [
    {
      id: 1,
      title: "Samagra Shiksha",
      // Replace with actual logo paths in production
      logoUrl:
        "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/samagra.jpg",
      url: "#",
    },
    {
      id: 2,
      title: "PM Poshan Scheme",
      logoUrl:
        "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/mdm_schm.jpg",
      url: "#",
    },
    {
      id: 3,
      title: "Rashtriya Ucchatar Shiksha Abhiyan",
      logoUrl:
        "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/rusa_schm.jpg",
      url: "#",
    },
    {
      id: 4,
      title: "Unnat Bharat Abhiyan",
      logoUrl:
        "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/unnat-bharat.jpg",
      url: "#",
    },
  ],
};

// ── Main Component ───────────────────────────────────────────────────
export default function SchemesBanner({ data = schemesData }) {
  return (
    <section className="w-full bg-[#f1f3f6] py-10 px-4 sm:px-6 lg:px-14 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* ════ LEFT COLUMN: Text & Links ════ */}
        <div className="w-full lg:w-1/3 flex flex-col items-start text-left lg:border-r border-gray-300 lg:pr-10">
          <h2 className="about-school-sans text-3xl font-light text-[#1a1f5e] tracking-wide mb-3 flex flex-col">
            <span className="font-semibold">{data.titleEn}</span>
            <span className="text-xl font-medium opacity-80">
              {data.titleHi}
            </span>
          </h2>
          {/* Inline Pipe-Separated Links */}
          <div className="about-school-sans text-[15px] text-gray-600 leading-relaxed mb-4">
            {data.subLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.url}
                  className="hover:text-[#d35050] transition-colors duration-200">
                  {link.label}
                </a>
                {index < data.subLinks.length - 1 && (
                  <span className="mx-2 text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* More Schemes Link */}
          <a
            href={data.viewAllUrl}
            className="about-school-sans inline-flex items-center gap-1.5 text-[#1a1f5e] hover:text-[#d35050] font-semibold text-[15px] transition-colors group">
            {data.viewAllTextEn}{" "}
            <span className="opacity-50 font-normal mx-0.5">|</span>{" "}
            {data.viewAllTextHi}
            <ArrowRightIcon className="w-4 h-4 stroke-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ════ RIGHT COLUMN: Logos Grid ════ */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.featured.map((scheme) => (
            <a
              key={scheme.id}
              href={scheme.url}
              className="group flex flex-col items-center text-center gap-3">
              {/* Logo Box */}
              <div className="w-full aspect-[2/1] bg-white border border-gray-200 flex items-center justify-center  shadow-sm group-hover:shadow-md group-hover:border-[#1a1f5e]/30 transition-all duration-300">
                <img
                  src={scheme.logoUrl}
                  alt={scheme.title}
                  loading="lazy"
                  className="max-w-full max-h-full  group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title underneath */}
              <span className="about-school-sans text-[14px] font-medium text-gray-700 leading-snug group-hover:text-[#d35050] transition-colors">
                {scheme.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
