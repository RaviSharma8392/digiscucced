// services/homeService.js

const staticHomeData = {
  active:true,
 heroConfig : {
  slides: [
    {
      image:
        "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FmarketingBanner%2Fimg%2F5464x1820-1_2_1771391996036.webp&w=3840&q=90",
    },
    {
      image:
        "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FmarketingBanner%2Fimg%2F5464x1820_16_1773032761815.webp&w=3840&q=90",
    },
    {
      image:
        "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FmarketingBanner%2Fimg%2F5464x1820px_20_1773633595226.webp&w=3840&q=90",
    },
  ],
},
  statsStrip: [
    { label: "Students", value: "5000+" },
    { label: "Selections", value: "1200+" },
    { label: "Years Experience", value: "15+" },
    { label: "Expert Faculty", value: "50+" },
  ],
  whyUs: [
    { title: "Expert Faculty", desc: "IITians and doctors as mentors" },
    { title: "Proven Results", desc: "1200+ selections in JEE & NEET" },
    { title: "Small Batches", desc: "Personal attention to every student" },
  ],
   faculty : [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    subject: "Physics",
    qualification: "Ph.D. Physics, IIT Delhi",
    experience: "18+ Years Experience",
    image:
      "https://asset.allen.in/3fdda48b-e7ec-4d5f-8b68-201168f85001/sc/image_preview_extra_large/secondaryContent.png?__ar__=1.41&__name__=Tanmay%20Jagga%20164%20x%20116%20-%20Web%20(1)",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    subject: "Chemistry",
    qualification: "M.Sc. Gold Medalist",
    experience: "12+ Years Experience",
    image: "https://asset.allen.in/13555a5d-109f-4ff7-9eff-15a497995a68/sc/image_preview_extra_large/secondaryContent.png?__ar__=1.41&__name__=Charuvrat%20Bains%20164%20x%20116%20-%20Web",
  },
  {
    id: 3,
    name: "Vikram Singh",
    subject: "Mathematics",
    qualification: "B.Tech, IIT Bombay",
    experience: "15+ Years Experience",
    image:"https://asset.allen.in/d91b6e6c-8a8e-471f-93fe-5ac1983cadfc/sc/image_preview_extra_large/secondaryContent.png?__ar__=1.41&__name__=Pragya%20Poonia%20164%20x%20116%20-%20Web"  },
  {
    id: 4,
    name: "Dr. Priya Verma",
    subject: "Biology",
    qualification: "MBBS, MD",
    experience: "10+ Years Experience",
    image:"https://asset.allen.in/f6ac0607-e066-4892-bf63-d845ccb15c30/sc/image_preview_extra_large/secondaryContent.png?__ar__=1.41&__name__=Chirag%20Singh_164%20x%20116%20-%20Web"  },
],
  courses: [
    {
      name: "Two Year Integrated Course for NEET",
      description:
        "This comprehensive 2-year program is designed for Class 11 students aiming for NEET 2027. It covers genetics, human physiology, structural organization, and psychological preparation for the exam.",
      image:
        "https://www.aakash.ac.in/_next/image?url=%2Fimages%2FaakashJourney%2FpeopleTalking.avif&w=640&q=90",
    },
    {
      name: "One Year Integrated Course for JEE",
      description:
        "Focused on Class 12 students, this interdisciplinary subject course explores advanced physics, mathematics, and chemistry concepts to build strong foundations for IIT-JEE.",
      image:
        "https://www.aakash.ac.in/_next/image?url=%2Fimages%2FaakashJourney%2Fgirl_Laptop.avif&w=750&q=90",
    },
    {
      name: "Repeater Course for NEET 2026",
      description:
        "A rank-booster scientific study program for 12th passed students focusing on intensive test series, social causes of errors, and consequences of human behavior during exams.",
      image:
        "https://www.aakash.ac.in/_next/image?url=%2Fimages%2Fhomepage%2FbrochureImgDesk.avif&w=640&q=90",
    },
    {
      name: "Foundation Course for Olympiads",
      description:
        "Designed for Class 9 & 10, this scientific study of basic life sciences, social behavior, and mathematical logic helps build early momentum for NTSE and Olympiads.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=900",
    },
  ],
  testimonials : [
  {
    id: 1,
    name: "Utkarsh Awadhiya",
    exam: "NEET-UG",
    rank: "AIR 2",
    quote:
      "The structured test series and immediate doubt-clearing sessions helped me build ultimate confidence before the final exam.",
    image:
      "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FTestimonialsSection%2Fimage_mobile%2FUtkarsh.webp&w=384&q=90",
  },
  {
    id: 2,
    name: "Krishang Joshi",
    exam: "NEET-UG",
    rank: "AIR 3",
    quote:
      "Consistent practice, expert mentorship, and smart test analysis were the core pillars of my rank preparation.",
    image:
      "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FTestimonialsSection%2Fimage_mobile%2FKrishang%2B%2BJoshi.webp&w=384&q=90",
  },
  {
    id: 3,
    name: "Avika Aggarwal",
    exam: "NEET-UG",
    rank: "AIR 5",
    quote:
      "The comprehensive study modules and personalized attention from faculty ensured my basic concepts were crystal clear.",
    image:
      "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FTestimonialsSection%2Fimage_mobile%2FAvika.webp&w=384&q=90",
  },
],
  ctaBanner: {
    title: "Start Your Journey Today",
    subtitle: "Limited seats available for 2025 batch",
    ctaText: "Apply Now",
    ctaUrl: "admissions",
  },
};

// ─── Swap this function body when API is ready ────────────────────────
// export async function getHomeData(slug) {
//   const res = await fetch(`/api/business/${slug}/home`);
//   return res.json();
// }

export async function getHomeData(slug) {
  return staticHomeData;
}