// config/school.config.js

export const schoolConfig = {
  school: {
    name: "Sunrise Public School",
    city: "Surat",

    tagline: "Shaping Tomorrow's Leaders Today",
    established: 1995,
    affiliation: "CBSE",
    logo: "https://www.theasianschool.net/blog/wp-content/uploads/2025/04/The-Asian-school-LOGO11zon-1.png",

    contact: {
      phone: "+91-9876543210",
      email: "info@sunriseschool.edu.in",
      address: "123 Civil Lines, Moradabad, UP – 244001",
      hours: "Mon–Sat: 8:00 AM – 3:30 PM",
    },
  },

  

  theme: {
    primary: "#0f3460",
    accent: "#e8a020",
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

    cta: {
      label: "Apply Now",
      link: "/admissions",
    },
  },

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

    primaryBtn: {
      label: "Apply for Admission",
      path: "/admissions",
    },

    secondaryBtn: {
      label: "Virtual Tour →",
      path: "/about",
    },

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
    image: "https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg",

    cta: {
      label: "Learn More About Us →",
      path: "/about",
    },
  },

  
  programs: [
  {
    id: 1,
    icon: "🌱",
    title: "Pre-Primary (Nursery–KG)",
    description:
      "Play-based learning fostering curiosity, creativity, and social development in a nurturing environment.",
    meta: "Age: 3–5 years · 4 sections",
    image: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671449-13368.jpg"
  },
  {
    id: 2,
    icon: "📚",
    title: "Primary (Classes I–V)",
    description:
      "Strong foundational skills in language, mathematics, and sciences through activity-based pedagogy.",
    meta: "Age: 6–11 years · 5 sections/class",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  }
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

    primaryBtn: {
      label: "Download Prospectus",
      path: "/admissions",
    },

    secondaryBtn: {
      label: "Schedule a Visit",
      path: "/contact",
    },
  },
};

/**
 * aboutSectionConfig.js
 *
 * School-specific content for AboutSection.
 * Theme (colors) comes from schoolConfig.js — NOT here.
 *
 * VARIANT GUIDE:
 *   variant 1 — needs: tag, heading, description, highlights, years, yearsLabel, image, ctaLabel, ctaPath
 *   variant 2 — same as V1
 *   variant 3 — same as V1
 *   variant 4 — needs: tag, heading, description, images[], stats[], ctaLabel, ctaPath
 *   variant 5 — needs: tag, heading, description, years, yearsLabel, image, timeline[], ctaLabel, ctaPath
 *
 * All fields are optional — sensible fallbacks exist in the component.
 */

export const aboutSectionConfig = {

  // ── Shared fields (used by V1, V2, V3, V5) ────────────────────────────────
  // SOURCE: schoolConfig.about
  tag:         "Who We Are",
  heading:     "Building Excellence Since 1995",
  description: "Sunrise Public School has been a cornerstone of quality education in Moradabad for three decades. Our campus blends state-of-the-art infrastructure with a warm, nurturing environment where every child can thrive.",

  // Bullet highlights (V1, V2, V3)
  // SOURCE: schoolConfig.about.highlights
  highlights: [
    "CBSE Affiliated (Code: 2100XXX) — Grades Nursery to XII",
    "Smart classrooms, STEM labs, and a fully-equipped library",
    "Dedicated sports complex with coaching across 10+ disciplines",
    "Safe, inclusive campus with CCTV and GPS-tracked transport",
  ],

  // Years badge (V1, V2, V3, V5)
  // SOURCE: schoolConfig.about.years / yearsLabel
  years:      "30+",
  yearsLabel: "Years of Trust",

  // Main image (V1, V2, V3, V5)
  // SOURCE: schoolConfig.about.image
  image: "https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg",

  // CTA button
  // SOURCE: schoolConfig.about.cta
  ctaLabel: "Learn More About Us",
  ctaPath:  "/about",

  // ── Variant 4 only ─────────────────────────────────────────────────────────
  // Image strip — pull from schoolConfig.gallery.images
  images: [
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585",
      alt: "Annual Sports Day",
    },
    {
      src: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671449-13367.jpg",
      alt: "Science Lab",
    },
    {
      src: "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13374.jpg",
      alt: "Library",
    },
  ],

  // Stat counters — pulled from schoolConfig.stats
  stats: [
    { num: "2,400+", label: "Students enrolled" },
    { num: "120+",   label: "Expert faculty members" },
    { num: "30+",    label: "Years of excellence" },
    { num: "100%",   label: "Board pass rate" },
  ],

  // ── Variant 5 only ─────────────────────────────────────────────────────────
  // School milestone timeline — derived from schoolConfig.school.established (1995)
  timeline: [
    {
      year:  "1995",
      title: "School Founded",
      desc:  "Established in Civil Lines, Moradabad with a mission to deliver quality CBSE education.",
    },
    {
      year:  "2003",
      title: "Senior Secondary Wing Added",
      desc:  "Expanded to Class XI–XII with Science and Commerce streams, serving the city's senior students.",
    },
    {
      year:  "2012",
      title: "State Board Excellence Award",
      desc:  "Recognised among top CBSE schools in Uttar Pradesh for consistent academic results.",
    },
    {
      year:  "2020",
      title: "Smart Campus Upgrade",
      desc:  "Launched STEM labs, digital smart classrooms, and GPS-tracked transport fleet across all routes.",
    },
    {
      year:  "2025",
      title: "100% Board Pass Rate — 30th Year",
      desc:  "Milestone year: all Class X & XII students cleared board exams. Admissions open for 2026–27.",
    },
  ],
};


export const poweredBy = {
  name:    "SchoolStack",
  tagline: "The school website platform built for India",
  url:     "https://schoolstack.in",
};