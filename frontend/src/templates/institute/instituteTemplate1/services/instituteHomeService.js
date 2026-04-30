import { fetchPageData } from "../../../../core/manifest/manifestLoader";

const HOME_DATA_DEFAULTS = {
  theme: {
    primary: "#1E3A8A",
    accent: "#DC2626",
    background: "#ffffff",
    text: "#1f2937",
  },
  hero: {
    title: "", // Falls back to business Name if empty
    tagline: "Empowering Your Future with Digital Skills",
    bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    primaryBtn: { label: "Join Now", path: "/contact" },
    secondaryBtn: { label: "View Courses", path: "/courses" }
  },
  about: {
    heading: "Transforming Students Into Industry Experts",
    description: "Welcome to our institute, an ISO certified training center dedicated to providing high-quality computer education. Realize your potential with interactive classrooms, real-world projects, and highly experienced faculty ready to launch your career.",
    image1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    yearsOfExcellence: "10+",
    mission: "Provide accessible, skill-oriented education to everyone.",
    vision: "To be the leading IT training institution globally."
  },
  features: [
    { icon: "GraduationCap", title: "Certified Courses", desc: "Get highly recognized industry certificates." },
    { icon: "Users", title: "Expert Trainers", desc: "Learn from experienced industry professionals." },
    { icon: "LayoutDashboard", title: "Practical Learning", desc: "100% lab-based practical assignments." },
    { icon: "Briefcase", title: "Job Assistance", desc: "Dedicated placement cell for successful careers." },
    { icon: "Clock", title: "Flexible Batches", desc: "Morning, evening, and weekend batches available." },
    { icon: "CheckCircle2", title: "Live Projects", desc: "Work on real-world industry applications." }
  ],
  courses: [
    { title: "Advanced Web Development", duration: "6 Months", level: "Beginner to Pro", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
    { title: "Data Science & AI", duration: "8 Months", level: "Intermediate", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { title: "Basic Computer Literacy", duration: "3 Months", level: "Beginner", img: "https://images.unsplash.com/photo-1588702545922-e64e529de9d2?q=80&w=2070&auto=format&fit=crop" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
  ],
  testimonials: [
    { name: "Rahul S.", role: "Web Developer", review: "The digital marketing course completely changed my career trajectory.", avatar: "https://xsgames.co/randomusers/assets/avatars/male/23.jpg" },
    { name: "Sneha P.", role: "Data Analyst", review: "Incredible faculty and an amazing environment.", avatar: "https://xsgames.co/randomusers/assets/avatars/female/24.jpg" }
  ]
};

export async function getInstituteHomeData(slug) {
  if (!slug) return HOME_DATA_DEFAULTS;

  try {
    const data = await fetchPageData(slug, "home");
    if (!data) return HOME_DATA_DEFAULTS;

    return {
      ...HOME_DATA_DEFAULTS,
      ...data,
      theme: { ...HOME_DATA_DEFAULTS.theme, ...(data.theme || {}) },
      hero: { ...HOME_DATA_DEFAULTS.hero, ...(data.hero || {}) },
      about: { ...HOME_DATA_DEFAULTS.about, ...(data.about || {}) },
      features: data.features?.length > 0 ? data.features : HOME_DATA_DEFAULTS.features,
      courses: data.courses?.length > 0 ? data.courses : HOME_DATA_DEFAULTS.courses,
      gallery: data.gallery?.length > 0 ? data.gallery : HOME_DATA_DEFAULTS.gallery,
      testimonials: data.testimonials?.length > 0 ? data.testimonials : HOME_DATA_DEFAULTS.testimonials,
    };
  } catch (err) {
    console.error(`[InstituteHomeService] Error loading data for "${slug}":`, err);
    return HOME_DATA_DEFAULTS;
  }
}
