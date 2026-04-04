
export const siteManifests = {

  // ─────────────────────────────────────
  // 1. VIDYAMANDIR COACHING
  // ─────────────────────────────────────
  vidyamandir: {
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
  },

  // ─────────────────────────────────────
  // 2. SUNRISE PUBLIC SCHOOL
  // ─────────────────────────────────────
  "sunrise-public-school": {
    slug: "sunrise-public-school",
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
      text: "© 2025 Sunrise Public School. All rights reserved.",
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
  // 3. SI SUCCEED COMPUTER INSTITUTE
  // ─────────────────────────────────────
  "si-succeed-computer-institute": {
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
  },

  // ─────────────────────────────────────
  // 4. RIC NAKUCHIYATAL (Template 1)
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
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Admissions", path: "/admissions" },
      {
        label: "Academics",
        path: "/academics",
        children: [
          { label: "Middle School", path: "/academics/middle" },
          { label: "High School", path: "/academics/high" },
          { label: "Intermediate", path: "/academics/intermediate" },
        ],
      },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
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
  },

  // ─────────────────────────────────────
  // 5. GIC NAKUCHIYATAL (Template 2)
  // ─────────────────────────────────────
  "gic-nakuchiyatal": {
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
  { label: "ABOUT US", path: "/about", icon: "InformationCircleIcon" },
  { label: "INFRASTRUCTURE", path: "/infrastructure", icon: "BuildingOfficeIcon" },
  {
    label: "ACADEMICS",
    path: "/academics",
    icon: "AcademicCapIcon",
    children: [
      { label: "Middle School", path: "/academics/middle" },
      { label: "High School", path: "/academics/high" },
      { label: "Intermediate", path: "/academics/intermediate" },
    ],
  },
  { label: "BEYOND ACADEMICS", path: "/beyond-academics", icon: "SparklesIcon" },
  { label: "ADMISSION", path: "/admission", icon: "DocumentTextIcon" },
  { label: "CAREER", path: "/career", icon: "BriefcaseIcon" },
  { label: "GALLERY", path: "/gallery", icon: "PhotoIcon" },
  { label: "FAQ", path: "/faq", icon: "QuestionMarkCircleIcon" },
  { label: "CONTACT US", path: "/contact", icon: "PhoneIcon" },
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
  },

};