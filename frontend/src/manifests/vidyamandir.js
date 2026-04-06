const vidyamandir = {
  slug: "vidyamandir",
  template: "coachingTemplate1",

  brand: {
    name: "Vidyamandir Classes",
    tagline: "IIT & NEET Coaching",
    logo: "https://www.samyakonline.net/theme/img/logo.png",
  },

  theme: {
    primary: "#1d3557",
    accent: "#e63946",
  },

  contact: {
    phone: "+91-9876543210",
    email: "info@vidyamandir.in",
  },

  nav: [
    { label: "Home", path: "/" },
    {
      label: "Courses",
      path: "/courses",
      children: [
        { label: "JEE Main", path: "/courses/jee-main" },
        { label: "JEE Advanced", path: "/courses/jee-advanced" },
        { label: "NEET", path: "/courses/neet" },
        { label: "Foundation", path: "/courses/foundation" },
      ],
    },
    { label: "Faculty", path: "/faculty" },
    { label: "Results", path: "/results", badge: "New" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ],

  footer: {
    text: "© 2025 Vidyamandir Classes",
    links: [
      { label: "About", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Privacy", path: "/privacy" },
      { label: "Terms", path: "/terms" },
    ],
  },
};

export default vidyamandir;