/**
 * manifests/gic-nakuchiyatal.js
 * GIC Nakuchiyatal — schoolTemplate2
 */

const gicNakuchiyatal = {
  slug: "gic-nakuchiyatal",
  template: "schoolTemplate2",

  topBar: {
    welcomeMessage: "Welcome to Rajkiya Inter College, Nakuchiyatal",
    social: {
      facebook: "https://facebook.com/",
      instagram: "https://instagram.com/",
      portal: "https://login.com",
    },
    affiliationNo: "XXXXXXX",
    schoolCode: "XXXXX",
    location: "Nakuchiyatal, Nainital (UTTARAKHAND)",
  },

  contact: {
    phone: "+91-5942-247XXX",
    email: "gic.nakuchiyatal@up.gov.in",
    enquiryText: "Call Us To Enquire More",
  },

  theme: {
    primary: "#f5a623",
    accent: "#d4a017",
    background: "#ffffff",
    text: "#1e293b",
  },

  branding: {
    name: "Rajkiya Inter College",
    tagline: "Nakuchiyatal",
    logo: "https://www.theshivalikinternationalhld.org/webroot/images/newlogo.png",
  },

  navigation: [
    { label: "ABOUT US",        path: "/about",           icon: "InformationCircleIcon" },
    { label: "INFRASTRUCTURE",  path: "/infrastructure",  icon: "BuildingOfficeIcon" },
    {
      label: "ACADEMICS",
      path: "/academics",
      icon: "AcademicCapIcon",
      children: [
        { label: "Middle School", path: "/academics/middle" },
        { label: "High School",   path: "/academics/high" },
        { label: "Intermediate",  path: "/academics/intermediate" },
      ],
    },
    { label: "BEYOND ACADEMICS", path: "/beyond-academics", icon: "SparklesIcon" },
    { label: "ADMISSION",        path: "/admission",        icon: "DocumentTextIcon" },
    { label: "CAREER",           path: "/career",           icon: "BriefcaseIcon" },
    { label: "GALLERY",          path: "/gallery",          icon: "PhotoIcon" },
    { label: "FAQ",              path: "/faq",              icon: "QuestionMarkCircleIcon" },
    { label: "CONTACT US",       path: "/contact",          icon: "PhoneIcon" },
  ],

  footer: {
    text: "© 2026 Rajkiya Inter College, Nakuchiyatal. All rights reserved.",
    sections: [
      {
        title: "Quick Links",
        links: ["About", "Admissions", "Academics", "Gallery"],
      },
      {
        title: "Contact",
        links: [
          "Nakuchiyatal, Nainital",
          "+91-5942-247XXX",
          "gic.nakuchiyatal@up.gov.in",
        ],
      },
    ],
  },
};

export default gicNakuchiyatal;