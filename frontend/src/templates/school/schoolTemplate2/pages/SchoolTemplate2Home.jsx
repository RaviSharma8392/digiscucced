import React from "react";
import "../school.css";

// ─── Components ───────────────────────────────────────────────────────────────
import Header from "../components/common/Header";
import HeroBanner from "../components/HeroBanner";
import NewsHighlightsBanner from "../components/common/NewsHighlightsBanner";
import AboutSection from "../components/common/AboutSection";
import VisionMessageSection from "../components/common/VisionMessageSection";

import NoticesSection from "../components/common/NoticeCalendarSection"; // Assuming this is your updated Notices grid
import GallerySection from "../components/common/GallerySection";
import InfoBanner from "../components/common/InfoBanner";
import UsefulLinksSection from "../components/common/UsefulLinksSection";

const SCHOOL_DATA = {
  name: "G I C NAKUCHIYATAL",
  ministry: "Ministry Of Defence",
  gov: "Government Of India",
  leftLogo:
    "https://resources.finalsite.net/images/v1744976815/capitolhill/trzz6rrf7pjl2jrvvkup/logo.svg",
  rightLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Truncated for readability
  smallLogos: [
    "https://www.education.gov.in/sites/upload_files/mhrd/files/images/nkpa.png",
    "https://www.education.gov.in/sites/upload_files/mhrd/files/images/fit.png",
  ],
};

const NAV_ITEMS = [
  { id: 1, en: "Home", hi: "मुख्य पृष्ठ", url: "/" },
  {
    id: 2,
    en: "About Us",
    hi: "हमारे बारे में",
    children: [
      { label: "School History", url: "#" },
      { label: "Principal Message", url: "#" },
      { label: "Vision & Mission", url: "#" },
      { label: "Leadership", url: "#" },
    ],
  },
  {
    id: 3,
    en: "Academics",
    hi: "शैक्षिक",
    children: [
      { label: "Curriculum", url: "#" },
      { label: "Results", url: "#" },
      { label: "Time Table", url: "#" },
    ],
  },
  { id: 4, en: "Admission", hi: "प्रवेश", url: "#" },
  { id: 5, en: "Gallery", hi: "गैलरी", url: "#" },
  { id: 6, en: "Contact", hi: "संपर्क", url: "#" },
];

const HERO_BANNERS = {
  top: {
    src: "https://navodaya.gov.in/nvs/export/sites/nvs/nvs-school/ALMORA/images/IMG_20230815_114319.jpg_2098989505.jpg",
  },
  middle: {
    src: "https://sainikschoolsambalpur.edu.in/uploads/homeslider/maasaraswati.jpg",
  },
  bottom: {
    src: "https://sskunjpura.org/admin/logged/images/homeslider/c4ca4238a0b923820dcc509a6f75849bpariksha_pe_charcha.jpg",
    overlayText: "Join Our Community Today",
  },
};

const NEWS_DATA = {
  header: {
    title: { hi: "देखें क्या हो रहा है ?", en: "See what is happening?" },
    subtitle: {
      hi: "छात्रों के बारे में समाचार और कहानियाँ, और पूरे स्कूल में नवाचार",
      en: "News and stories about students, and innovation across the school",
    },
  },
  button: { hi: "सभी खबर देखें", en: "View All News" },
  items: [
    {
      id: 1,
      date: "03/09/2023",
      image:
        "https://cdnbbsr.s3waas.gov.in/s3kv04bbd74d4e6a0096a95cf6143f3d78/uploads/2024/09/2024090484.jpeg",
      titleHi:
        "एरीज नैनीताल के वैज्ञानिक श्री मोहित जोशी के साथ राष्ट्रीय अंतरिक्ष दिवस समारोह मनाया गया।",
      titleEn:
        "National Space Day was celebrated with ARIES Nainital Scientist Shri Mohit Joshi.",
      isFeatured: true,
    },
    {
      id: 2,
      date: "31/08/2023",
      image:
        "https://cdnbbsr.s3waas.gov.in/s3kv04bbd74d4e6a0096a95cf6143f3d78/uploads/2024/09/2024090433.jpeg",
      titleHi:
        "बैगलेस डे की शुरुआत विभिन्न क्षेत्रों में छात्रों के कौशल को बढ़ाने के लिए की गई थी।",
      titleEn:
        "Bagless Day was introduced to enhance students' skills in various fields.",
      isFeatured: false,
    },
    {
      id: 3,
      date: "02/09/2023",
      image:
        "https://cdnbbsr.s3waas.gov.in/s3kv04bbd74d4e6a0096a95cf6143f3d78/uploads/2024/09/2024090486.jpeg",
      titleHi:
        "साइबर हमलों और साइबर धोखाधड़ी के खतरों के मद्देनजर साइबर सुरक्षा पर प्रशिक्षण और जागरूकता कार्यक्रम।",
      titleEn:
        "Training and awareness program on cyber security in view of the threats of cyber attacks and fraud.",
      isFeatured: false,
    },
  ],
};

const ABOUT_DATA = {
  backgroundImage:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2069&auto=format&fit=crop",
  headingEn: "About Sainik School Sambalpur",
  headingHi: "सैनिक स्कूल सम्बलपुर के बारे में",
  bodyEn:
    "Sainik School Sambalpur is a premier residential institution established in 1962 under the aegis of the Ministry of Defence, Government of India. Spread across a sprawling 100-acre campus, the school nurtures young minds to become future officers of the Indian Armed Forces. It follows the CBSE curriculum and places equal emphasis on academics, physical fitness, and character building.",
  bodyHi:
    "सैनिक स्कूल सम्बलपुर की स्थापना 1962 में रक्षा मंत्रालय, भारत सरकार के तत्वावधान में की गई थी। 100 एकड़ के विशाल परिसर में फैला यह विद्यालय युवाओं को भारतीय सशस्त्र बलों के भविष्य के अधिकारी बनने हेतु तैयार करता है। यह विद्यालय सीबीएसई पाठ्यक्रम का अनुसरण करते हुए शिक्षा, शारीरिक दक्षता एवं चरित्र निर्माण पर समान बल देता है।",
  readMoreUrl: "/about",
  stats: [
    {
      icon: "academic",
      value: "62+",
      labelEn: "Years of Excellence",
      labelHi: "उत्कृष्टता के वर्ष",
    },
    {
      icon: "users",
      value: "900+",
      labelEn: "Students Enrolled",
      labelHi: "नामांकित छात्र",
    },
    {
      icon: "trophy",
      value: "250+",
      labelEn: "NDA Selections",
      labelHi: "एनडीए चयन",
    },
    {
      icon: "building",
      value: "100",
      labelEn: "Acres Campus",
      labelHi: "एकड़ परिसर",
    },
  ],
};

const NOTICES_DATA = [
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
  { id: 3, title: "NHA Annual Report 2024-25", date: "14/01/2026", path: "#" },
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
      "National Health Authority Hosts 2-Day PM-JAY & ABDM National Review Meeting",
    date: "16/10/2025",
    path: "#",
  },
];

const FEATURES_DATA = [
  "Inquiry-led learning with modern labs",
  "Strong student support and mentoring system",
  "International exchange programs",
  "Career readiness workshops",
];

// ══════════════════════════════════════════════════════════════════════════════
//  PAGE COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

const SchoolTemplate2Home = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans flex flex-col">
      {/* 1. HEADER */}
      <Header schoolData={SCHOOL_DATA} navItems={NAV_ITEMS} />

      <main className="flex-grow">
        {/* 2. HERO BANNER (Top) */}
        <HeroBanner src={HERO_BANNERS.top.src} />

        {/* 3. NEWS TICKER */}
        <NewsHighlightsBanner data={NEWS_DATA} />

        {/* 4. ABOUT & IMPACT */}
        <AboutSection data={ABOUT_DATA} />
        <VisionMessageSection />

        {/* 5. HERO BANNER (Middle Break) */}
        <HeroBanner src={HERO_BANNERS.middle.src} />

        {/* 7. NOTICES / CIRCULARS */}
        <div className="bg-white">
          <NoticesSection notices={NOTICES_DATA} />
        </div>

        {/* 8. COMMUNITY & ACHIEVEMENTS */}
        <GallerySection />

        {/* 9. HERO CTA (Bottom) */}
        <HeroBanner
          src={HERO_BANNERS.bottom.src}
          overlayText={HERO_BANNERS.bottom.overlayText}
        />
      </main>

      {/* 10. FOOTER ELEMENTS */}
      <footer>
        <InfoBanner />
        <UsefulLinksSection />
      </footer>
    </div>
  );
};

export default SchoolTemplate2Home;
