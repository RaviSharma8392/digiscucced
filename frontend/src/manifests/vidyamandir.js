

const vidyamandir = {
  slug: "vidyamandir",
  template: "coachingTemplate1",

  contact: {
    phone: "+91-9876543210",
    email: "info@vidyamandir.in",
  },

  theme: {
    primary: "#1d3557",
    accent: "#e63946",
    background: "#ffffff",
    text: "#1f2937",
  },

  branding: {
    name: "Vidyamandir Classes",
    tagline: "IIT & NEET Coaching",
    logo: "https://www.samyakonline.net/theme/img/logo.png",
  },

  navigation: [
    { label: "Home", path: "/" },
    {
      label: "Courses",
      path: "/courses",
      children: [
        { label: "JEE Main",     path: "/courses/jee-main" },
        { label: "JEE Advanced", path: "/courses/jee-advanced" },
        { label: "NEET",         path: "/courses/neet" },
        { label: "Foundation",   path: "/courses/foundation" },
      ],
    },
    { label: "Faculty",  path: "/faculty" },
    { label: "Results",  path: "/results", badge: "New" },
    { label: "Gallery",  path: "/gallery" },
    { label: "Contact",  path: "/contact" },
  ],

  footer: {
    text: "© 2025 Vidyamandir Classes. All rights reserved.",
    sections: [
      {
        title: "About",
        links: ["About Us", "Blog", "News", "Privacy Policy", "Careers"],
      },
      {
        title: "Support",
        links: ["Refund Policy", "Terms & Conditions", "Contact Us"],
      },
    ],
  },
};

export default vidyamandir;