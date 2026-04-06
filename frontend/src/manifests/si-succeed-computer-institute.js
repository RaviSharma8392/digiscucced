/**
 * manifests/si-succeed-computer-institute.js
 */

const siSucceedComputerInstitute = {
  slug: "si-succeed-computer-institute",
  template: "schoolTemplate1",

  brand: {
    name: "SI Succeed Computer Institute",
    tagline: "Professional Computer & IT Training",
    logo: "/006eeb6c-439f-441e-a8e3-42021dfe09fh.png",
  },

  theme: {
    primary: "#0f3460",
    accent: "#e94560",
    background: "#ffffff",
    text: "#1f2937",
  },

  contact: {
    phone: "+91-0000000000",
    email: "sisucceedinstitute@gmail.com",
  },

  /* Navigation uses relative paths */
  nav: [
    { label: "Home", path: "" },

    { label: "About", path: "about" },

    {
      label: "Courses",
      path: "courses",
      subLinks: [
        { label: "ADCA", path: "courses/adca" },
        { label: "Tally", path: "courses/tally" },
        { label: "MS Office", path: "courses/ms-office" },
        { label: "Web Design", path: "courses/web-design" },
        { label: "Digital Marketing", path: "courses/digital-marketing" },
      ],
    },

    { label: "Gallery", path: "gallery" },

    { label: "Contact", path: "contact" },
  ],

  footer: {
    text: "© 2025 SI Succeed Computer Institute",

    links: [
      { label: "About", path: "about" },
      { label: "Courses", path: "courses" },
      { label: "Gallery", path: "gallery" },
      { label: "Contact", path: "contact" },
    ],
  },
};

export default siSucceedComputerInstitute;
