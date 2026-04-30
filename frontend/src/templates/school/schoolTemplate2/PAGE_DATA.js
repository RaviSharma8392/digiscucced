export const PAGE_DATA = {
  school: {
    name: "G I C NAKUCHIYATAL",
    ministry: "Ministry Of Defence",
    gov: "Government Of India",
    leftLogo:
      "https://cdnbbsr.s3waas.gov.in/s3kv04348ba46bde957f52cf388cf6f0bc/uploads/2023/04/2023042118.svg",
    rightLogo: "data:image/jpeg;base64,...",
    smallLogos: [
      "https://www.education.gov.in/sites/upload_files/mhrd/files/images/nkpa.png",
      "https://www.education.gov.in/sites/upload_files/mhrd/files/images/fit.png",
    ],
  },

  nav: [
    { id: 1, en: "Home", hi: "मुख्य पृष्ठ", url: "/" },
    {
      id: 2,
      en: "About Us",
      hi: "हमारे बारे में",
      children: [
        { label: "School History", url: "#" },
        { label: "Principal Message", url: "#" },
      ],
    },
    { id: 3, en: "Academics", hi: "शैक्षिक" },
    { id: 4, en: "Admission", hi: "प्रवेश" },
    { id: 5, en: "Gallery", hi: "गैलरी" },
    { id: 6, en: "Contact", hi: "संपर्क" },
  ],

  hero: {
    top: {
      src: "https://www.education.gov.in/sites/education.gov.in/themes/nexus/images/slides/buildathon2025-bnr.jpg",
    },
    middle: {
      src: "https://sainikschoolsambalpur.edu.in/uploads/homeslider/maasaraswati.jpg",
    },
    bottom: {
      src: "https://sskunjpura.org/admin/logged/images/homeslider/pariksha_pe_charcha.jpg",
      overlayText: "Join Our Community Today",
    },
  },

  features: [
    "Inquiry-led learning with modern labs",
    "Strong student support system",
    "International exchange programs",
    "Career readiness workshops",
  ],

  notices: [],
  calendar: [],
};