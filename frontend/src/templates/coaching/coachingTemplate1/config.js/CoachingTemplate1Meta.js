export const template1NavFooterMeta = {
  brand: {
    name: "Vidyamandir",       // Default business name
    sub: "Coaching Institute", // Default tagline
    logoUrl: "/logo.png",      // Default logo
  },
  topBar: {
    phone: "+91-9876543210",
    email: "info@vidyamandir.in",
  },
  nav: {
    links: [
      { label: "Home", url: "/" },
      { label: "Courses", url: "/courses" },
      { label: "Faculty", url: "/faculty" },
      { label: "Results", url: "/results" },
      { label: "Contact", url: "/contact" },
    ],
  },
  footer: {
    desc: "India's most trusted coaching institute for JEE, NEET, and UPSC",
    copyright: "© 2025 Vidyamandir Coaching Institute",
    cols: [
      { title: "Courses", links: ["JEE Main & Advanced", "NEET UG"] },
      { title: "Quick Links", links: ["Results 2024", "Scholarship Test"] },
      { title: "Contact", links: ["+91-9876543210", "info@vidyamandir.in"] },
    ],
  },
};