import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// ── Mock Data (Bilingual) ─────────────────────────────────────────────
const sectionData = {
  vision: {
    titleEn: "Vision",
    titleHi: "परिकल्पना",
    points: [
      {
        en: "To impart knowledge and values to students through high-quality educational endeavors.",
        hi: "उच्च गुणवत्ता वाले शैक्षिक प्रयासों के माध्यम से छात्रों को ज्ञान और मूल्य प्रदान करना।",
      },
      {
        en: "To nurture talent, enthusiasm, and creativity for achieving excellence.",
        hi: "उत्कृष्टता प्राप्त करने के लिए प्रतिभा, उत्साह और रचनात्मकता का पोषण करना।",
      },
    ],
  },
  mission: {
    titleEn: "Mission",
    titleHi: "उद्देश्य",
    points: [
      {
        en: "To cater to the educational needs of children of transferable central government employees.",
        hi: "स्थानांतरणीय केंद्र सरकार के कर्मचारियों के बच्चों की शैक्षिक आवश्यकताओं को पूरा करना।",
      },
      {
        en: "To initiate and promote experimentation and innovations in education in collaboration with bodies like CBSE and NCERT.",
        hi: "सीबीएसई और एनसीईआरटी जैसे निकायों के सहयोग से शिक्षा में प्रयोग और नवाचारों को शुरू करना और बढ़ावा देना।",
      },
      {
        en: "To develop the spirit of national integration and create a sense of 'Indianness' among children.",
        hi: "राष्ट्रीय एकता की भावना का विकास करना और बच्चों में 'भारतीयता' की भावना पैदा करना।",
      },
    ],
  },
  message: {
    titleEn: "Message",
    titleHi: "संदेश",
    image:
      "https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2025/12/2025120532.jpeg", // Placeholder professional portrait
    nameEn: "Shri Vikas Gupta, IAS",
    nameHi: "श्री विकास गुप्ता, भा. प्र. से.",
    designationEn: "Commissioner",
    designationHi: "आयुक्त",
    greetingEn: "Dear Students, Teachers, and Parents,",
    greetingHi: "प्रिय विद्यार्थीगण, शिक्षकवृंद एवं अभिभावकगण,",
    textEn:
      "The extraordinary journey that began in 1963 with just 20 regimental schools has now evolved into a massive chain of 1289 Vidyalayas, illuminating the nation with the light of excellent education.",
    textHi:
      "संगठन की असाधारण यात्रा, जिसकी शुरुआत 1963 में मात्र 20 रेजिमेंटल स्कूलों से हुई थी, आज 1289 विद्यालयों की विशाल श्रृंखला में विकसित हो चुकी है, जो उत्कृष्ट शिक्षा की ज्योति से राष्ट्र को आलोकित कर रही है।",
  },
};

export default function VisionMessageSection() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2  overflow-hidden ">
        {/* ========================================== */}
        {/* LEFT PANEL: VISION & MISSION               */}
        {/* ========================================== */}
        <div className="bg-[#fafafa] p-8 md:p-12 lg:p-14 flex flex-col justify-start">
          {/* --- VISION --- */}
          <div className="mb-12">
            <h2 className="about-school-serif text-3xl md:text-4xl font-bold text-[#1a1f5e] leading-tight flex flex-col gap-1 mb-2">
              <span>{sectionData.vision.titleHi}</span>
              <span className="text-xl md:text-2xl opacity-70">
                {sectionData.vision.titleEn}
              </span>
            </h2>
            <svg
              width="80"
              height="12"
              viewBox="0 0 100 15"
              fill="none"
              className="mb-6">
              <path
                d="M2 12C25 4 60 2 95 10"
                stroke="#d35050"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <ul className="space-y-5">
              {sectionData.vision.points.map((point, index) => (
                <li key={`vision-${index}`} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5  bg-[#d35050] flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="about-school-serif text-[15px] md:text-[16px] text-gray-800 font-medium leading-relaxed">
                      {point.hi}
                    </span>
                    <span className="about-school-sans text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
                      {point.en}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* --- MISSION --- */}
          <div className="mb-10">
            <h2 className="about-school-serif text-3xl md:text-4xl font-bold text-[#1a1f5e] leading-tight flex flex-col gap-1 mb-2">
              <span>{sectionData.mission.titleHi}</span>
              <span className="text-xl md:text-2xl opacity-70">
                {sectionData.mission.titleEn}
              </span>
            </h2>
            <svg
              width="80"
              height="12"
              viewBox="0 0 100 15"
              fill="none"
              className="mb-6">
              <path
                d="M2 12C25 4 60 2 95 10"
                stroke="#d35050"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <ul className="space-y-5">
              {sectionData.mission.points.map((point, index) => (
                <li key={`mission-${index}`} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d35050] flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="about-school-serif text-[15px] md:text-[16px] text-gray-800 font-medium leading-relaxed">
                      {point.hi}
                    </span>
                    <span className="about-school-sans text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
                      {point.en}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Left Panel Button */}
          <div className="mt-auto pt-4">
            <a
              href="#read-more-vision"
              className="inline-flex items-center gap-2 bg-[#1a1f5e] hover:bg-[#323880] text-white px-6 py-2.5 rounded font-about-school-sans font-bold text-sm tracking-wide transition-colors duration-300">
              और पढ़ें | Read More
            </a>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT PANEL: OFFICIAL MESSAGE              */}
        {/* ========================================== */}
        <div className="bg-[#f5f3fa] p-8 md:p-12 lg:p-14 flex flex-col items-center text-center justify-between ">
          {/* Header */}
          <div className="w-full flex flex-col items-center">
            <h2 className="about-school-serif text-3xl md:text-4xl font-bold text-[#1a1f5e] leading-tight flex flex-col gap-1 mb-2">
              <span>{sectionData.message.titleHi}</span>
              <span className="text-xl md:text-2xl opacity-70">
                {sectionData.message.titleEn}
              </span>
            </h2>
            <svg
              width="80"
              height="12"
              viewBox="0 0 100 15"
              fill="none"
              className="mb-8">
              <path
                d="M2 12C25 4 60 2 95 10"
                stroke="#d35050"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Circular Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[6px] border-white shadow-xl mb-8 group">
            <img
              src={sectionData.message.image}
              alt={sectionData.message.nameEn}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Name & Title */}
          <div className="mb-8">
            <h3 className="about-school-serif text-xl md:text-2xl font-bold text-[#1a1f5e] mb-1">
              {sectionData.message.nameHi}, {sectionData.message.designationHi}
            </h3>
            <p className="about-school-sans text-[15px] font-bold text-[#d35050] tracking-widest uppercase">
              {sectionData.message.nameEn} | {sectionData.message.designationEn}
            </p>
          </div>

          {/* Message Content */}
          <div className="max-w-xl space-y-5 mb-10">
            {/* Greetings */}
            <div>
              <p className="about-school-serif font-bold text-gray-800 text-[15px] mb-1">
                {sectionData.message.greetingHi}
              </p>
              <p className="about-school-sans font-semibold text-gray-500 text-[14px]">
                {sectionData.message.greetingEn}
              </p>
            </div>

            {/* Body */}
            <div className="bg-white/50 p-6 rounded-xl shadow-sm border border-white">
              <p className="about-school-serif text-gray-700 text-[15px] md:text-[16px] leading-relaxed mb-4 font-medium">
                {sectionData.message.textHi}
              </p>
              <p className="about-school-sans text-gray-500 text-[14px] md:text-[15px] leading-relaxed italic border-t border-gray-200/60 pt-4">
                "{sectionData.message.textEn}"
              </p>
            </div>
          </div>

          {/* Right Panel Button */}
          <div className="mt-auto">
            <a
              href="#read-more-message"
              className="inline-flex items-center gap-2 bg-[#1a1f5e] hover:bg-[#323880] text-white px-6 py-2.5 rounded font-about-school-sans font-bold text-sm tracking-wide transition-colors duration-300">
              और पढ़ें | Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
