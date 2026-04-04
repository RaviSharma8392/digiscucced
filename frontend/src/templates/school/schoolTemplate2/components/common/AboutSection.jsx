import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// It's best practice to pass data as props to make components reusable,
// but leaving it here to match your current file structure.
const aboutData = {
  subtitleEn: "WELCOME TO OUR SCHOOL",
  subtitleHi: "(हमारे विद्यालय में आपका स्वागत है)",
  titleEn: "Government Inter College Nakuchiyatal",
  titleHi: "राजकीय इंटर कॉलेज नाकुचियाताल",

  descriptionEn:
    "Government Inter College Nakuchiyatal is a well-known government educational institution located in Nakuchiyatal in the Nainital district of Uttarakhand. The school is committed to providing quality and affordable education to students from nearby rural and semi-urban areas. With experienced teachers, a disciplined learning environment, and emphasis on academic and extracurricular development, the institution works to shape responsible and capable citizens.",

  descriptionHi:
    "राजकीय इंटर कॉलेज नाकुचियाताल उत्तराखंड के नैनीताल जिले के नाकुचियाताल क्षेत्र में स्थित एक प्रसिद्ध सरकारी शैक्षणिक संस्थान है। यह विद्यालय आसपास के ग्रामीण और अर्ध-शहरी क्षेत्रों के विद्यार्थियों को गुणवत्तापूर्ण और सुलभ शिक्षा प्रदान करने के लिए समर्पित है। अनुभवी शिक्षकों, अनुशासित वातावरण और शैक्षणिक तथा सह-पाठ्यक्रम गतिविधियों पर विशेष ध्यान देकर यह संस्था जिम्मेदार और सक्षम नागरिकों का निर्माण करने का प्रयास करती है।",

  mainImage:
    "https://content.jdmagicbox.com/v2/comp/nainital/z9/9999p5942.5942.250704015252.z3z9/catalogue/gps-devtanda-supi-nainital-schools-8b0fy5ehus.jpg",
};

export default function AboutSchoolSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative w-full bg-white py-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute -top-32 -left-32 w-96 h-96 border border-gray-200 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute top-16 left-10 w-24 h-24 about-school-dots-green opacity-40 rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="relative z-10 text-left">
          {/* Subtitle with both Hindi and English */}
          <div className="mb-4">
            <p className="about-school-sans text-gray-800 font-semibold text-lg md:text-xl uppercase tracking-wider">
              {aboutData.subtitleEn}
            </p>
            <p className="about-school-sans text-gray-500 font-medium text-sm md:text-base mt-1">
              {aboutData.subtitleHi}
            </p>
          </div>

          {/* Semantic Fix: Combined into one H2 for screen readers */}
          <h2
            id="about-heading"
            className="about-school-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1a1f5e] leading-tight mb-2 flex flex-col gap-1">
            <span>{aboutData.titleEn}</span>
            <span>{aboutData.titleHi}</span>
          </h2>

          {/* Red Swoosh */}
          <svg
            width="100"
            height="15"
            viewBox="0 0 100 15"
            fill="none"
            className="mb-8"
            aria-hidden="true">
            <path
              d="M2 12C25 4 60 2 95 10"
              stroke="#d35050" /* Matched to the News section red */
              strokeWidth="4"
              strokeLinecap="round"
              className="about-school-swoosh-path"
            />
          </svg>

          {/* Descriptions */}
          <div className="space-y-4 mb-10">
            {/* English Description (Sans-Serif) */}
            <p className="about-school-sans text-gray-700 text-[16px] md:text-[17px] leading-relaxed font-medium">
              {aboutData.descriptionEn}
            </p>

            {/* Hindi Description (Serif, separated slightly) */}
            <p className="about-school-serif text-gray-600 text-[15px] md:text-base leading-relaxed border-t border-gray-100 pt-4">
              {aboutData.descriptionHi}
            </p>
          </div>

          {/* Button */}
          <a
            href="#discover"
            className="inline-flex items-center justify-center gap-3 bg-[#d35050] hover:bg-[#b03d3d] text-white px-8 py-3.5 rounded font-about-school-sans font-bold text-lg transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200 group">
            <span className="about-school-sans">
              Discover More | अधिक जानें
            </span>
            <ArrowRightIcon
              className="w-5 h-5 stroke-2 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-full min-h-[450px] mt-12 lg:mt-0 flex items-center justify-center px-4">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-100/60 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

          {/* Dot decorations */}
          <div className="absolute -top-4 right-0 lg:-right-8 w-32 h-32 about-school-dots-green opacity-80 pointer-events-none z-0" />
          <div className="absolute -bottom-8 left-0 lg:-left-8 w-32 h-32 about-school-dots-red opacity-80 pointer-events-none z-0" />

          {/* Frame layers */}
          <div className="absolute w-[85%] max-w-md aspect-[4/5] border-2 border-[#d35050]/30 rounded-2xl translate-x-5 translate-y-5 lg:translate-x-8 lg:translate-y-8 pointer-events-none z-0" />
          <div className="absolute w-[85%] max-w-md aspect-[4/5] bg-gray-50 rounded-2xl -translate-x-4 -translate-y-4 lg:-translate-x-6 lg:-translate-y-6 pointer-events-none z-0" />

          {/* Main Image */}
          <div className="relative z-10 w-[85%] max-w-md rounded-2xl overflow-hidden shadow-xl border-4 lg:border-8 border-white group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

            <img
              src={aboutData.mainImage}
              alt={aboutData.titleEn}
              loading="lazy"
              className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
