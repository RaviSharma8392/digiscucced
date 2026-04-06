// ─────────────────────────────────────────────────────────────
//  SCHOOL HOME SERVICE
//  Provides school data by slug with caching and global config merge
// ─────────────────────────────────────────────────────────────

import { schoolConfig } from "../config/schoolConfig.js";

const schoolRegistry = {
  // ── 1. Sunrise Public School ────────────────────────────────
  "si-succeed-computer-institute": {
    notices: [
      "Annual Sports Day on 28 March 2026",
      "Result of Class X & XII Board Exams declared — 100% Pass Rate",
      "Admissions Open for 2026–27 Session — Limited Seats Available",
      "Parent–Teacher Meeting scheduled for 5 April 2026",
      "Science Exhibition 2026 on 20 April — Classes VI to XII",
    ],

    hero: {
      badge: "Admissions Open 2026–27",
      highlightWord: "Tomorrow's",
      description:
        "A premier CBSE-affiliated school committed to holistic education — blending academics, arts, and athletics to develop confident, compassionate individuals.",
      primaryBtn: { label: "Apply for Admission", path: "/admissions" },
      secondaryBtn: { label: "Virtual Tour →", path: "/about" },
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    },

    stats: [
      { value: "2,400+", label: "Students Enrolled" },
      { value: "120+", label: "Expert Faculty" },
      { value: "30+", label: "Years of Excellence" },
      { value: "100%", label: "Board Pass Rate" },
    ],

    about: {
      tag: "Who We Are",
      heading: "Building Excellence Since 1995",
      description:
        "Sunrise Public School has been a cornerstone of quality education in Moradabad for three decades. Our campus blends state-of-the-art infrastructure with a warm, nurturing environment where every child can thrive.",
      highlights: [
        "CBSE Affiliated (Code: 2100XXX) — Grades Nursery to XII",
        "Smart classrooms, STEM labs, and a fully-equipped library",
        "Dedicated sports complex with coaching across 10+ disciplines",
        "Safe, inclusive campus with CCTV and GPS-tracked transport",
      ],
      years: "30+",
      yearsLabel: "Years of Trust",
      image:
        "https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg",
      cta: { label: "Learn More About Us →", path: "/about" },
    },

    programs: [
      {
        id: 1,
        icon: "🌱",
        title: "Pre-Primary (Nursery–KG)",
        description:
          "Play-based learning fostering curiosity, creativity, and social development in a nurturing environment.",
        meta: "Age: 3–5 years · 4 sections",
        image:
          "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671449-13368.jpg",
      },
      {
        id: 2,
        icon: "📚",
        title: "Primary (Classes I–V)",
        description:
          "Strong foundational skills in language, mathematics, and sciences through activity-based pedagogy.",
        meta: "Age: 6–11 years · 5 sections/class",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      },
    ],

    events: [
      {
        id: 1,
        day: "28",
        month: "Mar",
        title: "Annual Sports Day 2026",
        detail: "Main Ground · 9:00 AM onwards · Parents welcome",
        tag: "Sports",
      },
      {
        id: 2,
        day: "05",
        month: "Apr",
        title: "Parent–Teacher Meeting",
        detail: "All classrooms · 10:00 AM – 1:00 PM · Mandatory",
        tag: "Academic",
      },
    ],

    principal: {
      name: "Dr. Rashmi Sinha",
      title: "Principal, Sunrise Public School",
      initials: "RS",
      photo: null,
      quote:
        "Education is not the filling of a pail, but the lighting of a fire. At Sunrise, we light that fire in every child.",
    },

    gallery: {
      header: {
        title: "Campus Highlights",
        subtitle: "A glimpse into life at our school",
      },
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1562774053-701939374585",
          alt: "Annual Sports Day",
          category: "Sports",
          size: "large",
        },
        {
          id: 2,
          src: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671449-13367.jpg",
          alt: "Science Lab",
          category: "Academics",
        },
        {
          id: 3,
          src: "https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg",
          alt: "Graduation Ceremony",
          category: "Events",
          size: "wide",
        },
        {
          id: 4,
          src: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13374.jpg",
          alt: "Library",
          category: "Facilities",
          size: "tall",
        },
      ],
    },

    admissionCTA: {
      heading: "Begin Your Child's Journey With Us",
      subtext:
        "Admissions for the 2026–27 academic session are now open. Seats fill fast — secure yours today.",
      primaryBtn: { label: "Download Prospectus", path: "/admissions" },
      secondaryBtn: { label: "Schedule a Visit", path: "/contact" },
    },
  },

  // ── 2. RIC Nakuchiyatal ───────────────────────────────────────
  "ric-nakuchiyatal": {
    school: {
      name: "Rajkiya Inter College, Nakuchiyatal",
      city: "Nakuchiyatal",
      tagline: "Gyan Ki Roshni, Pahad Ki Shakti",
      established: 1972,
      affiliation: "UP Board (UPMSP)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emblem_of_Uttarakhand.svg/800px-Emblem_of_Uttarakhand.svg.png",
      contact: {
        phone: "+91-5942-247XXX",
        email: "gic.nakuchiyatal@up.gov.in",
        address: "Nakuchiyatal, Nainital District, Uttarakhand – 263136",
        hours: "Mon–Sat: 9:00 AM – 4:00 PM",
      },
    },

    theme: {
      primary: "#1a4731",
      accent: "#d4a017",
      background: "#ffffff",
      text: "#1e293b",
    },

    navigation: {
      links: [
        { label: "Home", path: "/school" },
        { label: "About", path: "/school/about" },
        { label: "Admissions", path: "/school/admissions" },
        { label: "Academics", path: "/school/academics" },
        { label: "Contact", path: "/contact" },
      ],
      cta: { label: "Apply Now", link: "/admissions" },
    },

    notices: [
      "Admissions Open for Session 2026–27 — Class 9 & 11 | Limited Seats",
      "UP Board Class 10 & 12 Results Declared — College achieves 94% Pass Rate",
      "Annual Prize Distribution Ceremony on 15 April 2026 — All Students to Attend",
      "NSS Camp & Environmental Drive — Nakuchiyatal Lake Cleanup on 22 April 2026",
      "Scholarship Applications for SC/ST/OBC Students — Last Date: 30 April 2026",
    ],

    hero: {
      badge: "Admissions Open 2026–27",
      highlightWord: "Pahad Ki",
      description:
        "A premier government inter college nestled in the pristine hills of Nakuchiyatal, Nainital — nurturing young minds of Uttarakhand with quality education, values, and a deep connection to nature.",
      primaryBtn: { label: "Apply for Admission", path: "/admissions" },
      secondaryBtn: { label: "Know Our College →", path: "/about" },
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    },

    stats: [
      { value: "800+", label: "Students Enrolled" },
      { value: "35+", label: "Dedicated Faculty" },
      { value: "50+", label: "Years of Service" },
      { value: "94%", label: "UP Board Pass Rate" },
    ],

    about: {
      tag: "Who We Are",
      heading: "Rooted in Hills, Rising in Excellence",
      description:
        "Rajkiya Inter College, Nakuchiyatal has served the students of this beautiful lake town and surrounding villages for over five decades. Situated at an altitude of 1,938 metres, our campus offers a serene and focused learning environment — away from the noise, close to nature.",
      highlights: [
        "UP Board Affiliated (UPMSP) — Classes 6 to 12 (Science, Arts & Commerce)",
        "Well-stocked library with 5,000+ books, periodicals & digital resources",
        "NCC, NSS & Eco-Club — active outdoor and community programs",
        "Free education for girls under Mukhyamantri Kanya Sumangala Yojana",
        "Transport connectivity from Bhimtal, Nainital & surrounding villages",
      ],
      years: "50+",
      yearsLabel: "Years of Trust",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      cta: { label: "Learn More About Us →", path: "/about" },
    },

    programs: [
      {
        id: 1,
        icon: "📖",
        title: "Middle School (Classes 6–8)",
        description:
          "Strong foundational education in Hindi, Mathematics, Science, Social Studies and Sanskrit — building the base for higher studies.",
        meta: "Age: 11–14 years · 3 sections/class",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?fm=jpg&q=60&w=800",
      },
      {
        id: 2,
        icon: "🔬",
        title: "High School (Classes 9–10)",
        description:
          "UPMSP curriculum with Science and Mathematics labs. Preparing students for UP Board examinations with rigorous academic training.",
        meta: "Age: 14–16 years · UP Board",
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?fm=jpg&q=60&w=800",
      },
      {
        id: 3,
        icon: "🎓",
        title: "Intermediate Science (Classes 11–12)",
        description:
          "Physics, Chemistry, Biology and Mathematics streams — guiding students toward engineering, medical and science careers.",
        meta: "PCM · PCB · UP Board",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=800",
      },
      {
        id: 4,
        icon: "📊",
        title: "Intermediate Arts & Commerce (Classes 11–12)",
        description:
          "History, Political Science, Geography, Economics and Accountancy streams for students inclined toward humanities and commerce.",
        meta: "Arts · Commerce · UP Board",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fm=jpg&q=60&w=800",
      },
    ],

    events: [
      {
        id: 1,
        day: "15",
        month: "Apr",
        title: "Annual Prize Distribution 2026",
        detail: "College Ground · 10:00 AM · Parents & Guardians Welcome",
        tag: "Cultural",
      },
      {
        id: 2,
        day: "22",
        month: "Apr",
        title: "NSS Lake Cleanup Drive — Nakuchiyatal",
        detail: "Nakuchiyatal Lakeside · 8:00 AM · Earth Day Special",
        tag: "NSS",
      },
      {
        id: 3,
        day: "05",
        month: "May",
        title: "Science Exhibition & Model Competition",
        detail: "College Hall · 9:00 AM – 2:00 PM · Classes 9–12",
        tag: "Academic",
      },
    ],

    principal: {
      name: "Dr. Rajendra Singh Bisht",
      title: "Principal, RIC Nakuchiyatal",
      initials: "RB",
      photo: null,
      quote:
        "The mountains teach us patience, perseverance and perspective. Our students carry these values as they step into a larger world — strong roots, open skies.",
    },

    gallery: {
      header: {
        title: "Life at RIC Nakuchiyatal",
        subtitle: "Where learning meets the hills",
      },
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
          alt: "Nakuchiyatal Lake View",
          category: "Campus",
          size: "large",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
          alt: "Science Lab",
          category: "Academics",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
          alt: "Himalayan Campus",
          category: "Campus",
          size: "wide",
        },
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
          alt: "Students in Classroom",
          category: "Academics",
          size: "tall",
        },
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
          alt: "Annual Function",
          category: "Events",
        },
      ],
    },

    admissionCTA: {
      heading: "Give Your Child the Gift of Hill Education",
      subtext:
        "Admissions for 2026–27 session are now open for Classes 6, 9 and 11. Government institution — quality education, zero tuition fees for eligible students.",
      primaryBtn: { label: "Download Admission Form", path: "/admissions" },
      secondaryBtn: { label: "Visit Us", path: "/contact" },
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  CACHE LAYER — no changes needed below this line
// ─────────────────────────────────────────────────────────────

const cache = new Map();

export async function getSchoolHomeData(slug) {
  if (!slug) throw new Error("Missing school slug");

  if (cache.has(slug)) return cache.get(slug);

  const registryConfig = schoolRegistry[slug];

  if (!registryConfig) {
    throw new Error(
      `School not found: "${slug}". Available slugs: [${Object.keys(
        schoolRegistry,
      ).join(", ")}]`,
    );
  }

  const config = { ...schoolConfig, ...registryConfig };
  cache.set(slug, config);
  return config;
}

export function getAllSchoolSlugs() {
  return Object.keys(schoolRegistry);
}
