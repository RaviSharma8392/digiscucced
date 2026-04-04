import React from "react";

// ─────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Both the text list (left) and logo grid (right) are driven
// from this one array. Add/remove entries here only.
// ─────────────────────────────────────────────────────────
const linksData = [
  {
    id: 1,
    en: "MINISTRY OF EDUCATION",
    hi: "शिक्षा मंत्रालय",
    url: "https://www.education.gov.in",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",
    label: "Ministry of\nEducation",
  },
  {
    id: 2,
    en: "MINISTRY OF DEFENCE",
    hi: "रक्षा मंत्रालय",
    url: "https://mod.gov.in",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",
    label: "Ministry of\nDefence",
  },
  {
    id: 3,
    en: "NATIONAL TESTING AGENCY",
    hi: "राष्ट्रीय परीक्षण एजेंसी",
    url: "https://nta.ac.in",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NTA_logo.png/200px-NTA_logo.png",
    label: "National Testing\nAgency",
  },
  {
    id: 4,
    en: "SAINIK SCHOOL SOCIETY",
    hi: "सैनिक स्कूल सोसायटी",
    url: "https://sainikschoolsociety.in",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4f/Sainik_School_logo.png",
    label: "Sainik School\nSociety",
  },
  {
    id: 5,
    en: "PUNEET SAGAR ABHIYAN",
    hi: "पुनीत सागर अभियान",
    url: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",
    label: "Puneet Sagar\nAbhiyan",
  },
  {
    id: 6,
    en: "NATIONAL CADET CORPS",
    hi: "राष्ट्रीय कैडेट कोर",
    url: "https://indiancc.nic.in",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/86/NCC_Logo.png",
    label: "National Cadet\nCorps",
  },
  {
    id: 7,
    en: "EK BHARAT SHRESHTHA BHARAT",
    hi: "एक भारत श्रेष्ठ भारत",
    url: "https://ekbharat.gov.in",
    logo: "https://www.upsainikschool.org/assets/images/indiaportal.jpg",
    label: "Ek Bharat\nShreshtha Bharat",
  },
  {
    id: 8,
    en: "PREVENTION OF SEXUAL HARASSMENT (POSH ACT)",
    hi: "यौन उत्पीड़न की रोकथाम (पीओएसएच एक्ट)",
    url: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",
    label: "POSH Act",
  },
  {
    id: 9,
    en: "INFORMATION SECURITY EDUCATION AND AWARENESS",
    hi: "सूचना सुरक्षा शिक्षा और जागरूकता",
    url: "https://isea.app",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png",
    label: "ISEA",
  },
];

// ─────────────────────────────────────────────────────────
// Sub-components (unchanged visually)
// ─────────────────────────────────────────────────────────
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-gray-600 flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────
export default function UsefulLinksSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-14 font-sans">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* ── Left: Text link list ── */}
        <div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 leading-tight">
            Useful Website Links
          </h2>
          <p className="text-xl text-gray-800 mt-1 font-semibold">
            उपयोगी वेबसाइटों के लिंक
          </p>

          <div className="relative mt-2 mb-8">
            <svg
              width="80"
              height="12"
              viewBox="0 0 80 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 10C20 4 50 2 78 8"
                stroke="#b91c1c"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
            A curated list of valuable websites that provide helpful tools,
            resources, and information for various needs.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
            मूल्यवान वेबसाइटों की एक चयनित सूची जो विभिन्न आवश्यकताओं के लिए
            उपयोगी उपकरण, संसाधन और जानकारी प्रदान करती है.
          </p>

          <ul className="space-y-4">
            {linksData.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-gray-700 hover:text-blue-700 transition-colors group">
                  <GlobeIcon />
                  <span className="text-[14px] leading-snug">
                    <span className="font-medium">{link.en}</span>
                    <span className="text-gray-500"> - {link.hi}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Logo grid ── */}
        <div className="grid grid-cols-3 gap-y-10 py-4">
          {linksData.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-2 p-4 hover:scale-105 transition-transform duration-300 ${
                index % 3 !== 2 ? "border-r border-gray-100" : ""
              }`}>
              <img
                src={link.logo}
                alt={`${link.en} Logo`}
                className="max-h-16 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback shown on image error */}
              <div
                style={{ display: "none" }}
                className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-100 border border-gray-200">
                <span className="text-[9px] text-gray-500 text-center font-medium leading-tight px-1">
                  {link.en}
                </span>
              </div>
              <span className="text-[10px] text-gray-500 text-center leading-tight whitespace-pre-line">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
