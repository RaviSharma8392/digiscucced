/**
 * manifests/si-succeed-computer-institute.js
 * SI Succeed Computer Institute — schoolTemplate1
 */

const siSucceedComputerInstitute = {
  slug: "si-succeed-computer-institute",
  template: "schoolTemplate1",

  contact: {
    phone: "+91-0000000000",
    email: "sisucceedinstitute@gmail.com",
  },

  theme: {
    primary: "#0f3460",
    accent: "#e94560",
    background: "#ffffff",
    text: "#1e293b",
  },

  branding: {
    name: "SI Succeed Computer Institute",
    tagline: "Professional Computer & IT Training",
    logo: "/006eeb6c-439f-441e-a8e3-42021dfe09fh.png",
  },

  navigation: [
    { label: "Home",  path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Courses",
      path: "/courses",
      children: [
        { label: "ADCA",              path: "/courses/adca" },
        { label: "Tally",             path: "/courses/tally" },
        { label: "MS Office",         path: "/courses/ms-office" },
        { label: "Web Design",        path: "/courses/web-design" },
        { label: "Digital Marketing", path: "/courses/digital-marketing" },
      ],
    },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ],

  footer: {
    text: "© 2025 SI Succeed Computer Institute. All rights reserved.",
    sections: [
      {
        title: "Institute",
        links: ["About", "Courses", "Gallery"],
      },
      {
        title: "Location",
        links: ["Haldwani, Uttarakhand", "Near MBPG College"],
      },
    ],
  },
};

export default siSucceedComputerInstitute;