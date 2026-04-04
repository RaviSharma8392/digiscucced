export const siteManifests = {
  // ─────────────────────────────────────
  // 1. VIDYAMANDIR (COACHING)
  // ─────────────────────────────────────
  vidyamandir: {
    slug: "vidyamandir",
    template: "coachingTemplate1",

    contact: {
      phone: "+91-9876543210",
      email: "info@vidyamandir.in",
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
      sections: [
        {
          title: "About",
          links: ["About us", "Blog", "News", "Privacy policy", "Careers"],
        },
        {
          title: "Support",
          links: ["Refund policy", "Terms & Conditions", "Contact us"],
        },
      ],
    },
  },

  // ─────────────────────────────────────
  // 2. SUNRISE SCHOOL
  // ─────────────────────────────────────
  "sunrise-public-school": {
    slug: "sunrise",
    template: "schoolTemplate1",

    contact: {
      phone: "+91-9123456789",
      email: "info@sunriseschool.in",
    },

    theme: {
      primary: "#003366",
      accent: "#DC2626",
      background: "#ffffff",
      text: "#1f2937",
    },

    branding: {
      name: "Sunrise Public School",
      tagline: "CBSE Affiliated School",
      logo: "/006eeb6c-439f-441e-a8e3-42021dfe09fh.png",
    },

    navigation: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      {
        label: "Admission",
        path: "/admission",
        children: [
          { label: "Process", path: "/admission/process" },
          { label: "Fees", path: "/admission/fees" },
        ],
      },
      {
        label: "Academics",
        path: "/academics",
        children: [
          { label: "Curriculum", path: "/academics/curriculum" },
          { label: "Faculty", path: "/academics/faculty" },
        ],
      },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
    ],

    footer: {
      text: "© 2025 Sunrise Public School",
      sections: [
        {
          title: "Quick Links",
          links: ["About", "Admissions", "Gallery"],
        },
        {
          title: "Contact",
          links: ["+91-9123456789", "info@sunriseschool.in"],
        },
      ],
    },
  },

  // ─────────────────────────────────────
  // 3. SI SUCCEED INSTITUTE
  // ─────────────────────────────────────
  "si-succeed-computer-institute": {
    slug: "si-succeed-computer-institute",
    template: "schoolTemplate1",

    contact: {
      phone: "+91-0000000000",
      email: "sisucceedinstitute@gmail.com",
    },

    branding: {
      name: "SI Succeed Computer Institute",
      tagline: "Professional Computer & IT Training",
      logo: "/006eeb6c-439f-441e-a8e3-42021dfe09fh.png",
    },

    navigation: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      {
        label: "Courses",
        path: "/courses",
        children: [
          { label: "ADCA", path: "/courses/adca" },
          { label: "Tally", path: "/courses/tally" },
          { label: "MS Office", path: "/courses/ms-office" },
          { label: "Web Design", path: "/courses/web-design" },
          { label: "Digital Marketing", path: "/courses/digital-marketing" },
        ],
      },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
    ],

    footer: {
      text: "© 2025 SI Succeed Computer Institute",
      sections: [
        {
          title: "Institute",
          links: ["About", "Courses", "Gallery"],
        },
        {
          title: "Location",
          links: ["Haldwani, Uttarakhand", "Near MBPG College"],s
        },
      ],
    },
  },

  // ─────────────────────────────────────
  // 4. RIC NAKUCHIYATAL
  // ─────────────────────────────────────
  "ric-nakuchiyatal": {
    slug: "ric-nakuchiyatal",
    template: "schoolTemplate1",

    contact: {
      phone: "+91-5942-247XXX",
      email: "gic.nakuchiyatal@up.gov.in",
    },

    theme: {
      primary: "#1a4731",
      accent: "#d4a017",
      background: "#ffffff",
      text: "#1e293b",
    },

    branding: {
      name: "Rajkiya Inter College, Nakuchiyatal",
      tagline: "Gyan Ki Roshni, Pahad Ki Shakti",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emblem_of_Uttarakhand.svg/800px-Emblem_of_Uttarakhand.svg.png",
    },

    navigation: [
      { label: "Home", path: "/school" },
      { label: "About", path: "/school/about" },
      { label: "Admissions", path: "/school/admissions" },
      {
        label: "Academics",
        path: "/school/academics",
        children: [
          { label: "Middle School", path: "/school/academics/middle" },
          { label: "High School", path: "/school/academics/high" },
          { label: "Intermediate", path: "/school/academics/intermediate" },
        ],
      },
      { label: "Gallery", path: "/school/gallery" },
      { label: "Contact", path: "/contact" },
    ],

    footer: {
      text: "© 2026 Rajkiya Inter College, Nakuchiyatal",
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
  },
};