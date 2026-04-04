// config/aboutConfig.js

export const aboutConfig = {
  // ── 1. HERO SECTION ───────────────────────────────────────────────
  hero: {
    title: "Our Legacy of Excellence",
    subtitle: "Shaping tomorrow's leaders since 1995",
    // A striking, architectural campus building image
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
  },
  
  // ── 2. INTRO SECTION ──────────────────────────────────────────────
  intro: {
    heading: "A Tradition of Holistic Education",
    text: "Sunrise Public School was founded on a simple yet profound belief: that education should not merely fill the mind, but ignite a lifelong passion for discovery. For nearly three decades, we have provided an environment where academic rigor meets character development, creating a canvas for young minds to paint their futures.",
    // A high-contrast image of students or a library
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
  },

  // ── 3. MISSION & VISION ───────────────────────────────────────────
  missionVision: [
    {
      type: "Mission",
      title: "Empowering the Mind",
      text: "To provide a holistic educational ecosystem that nurtures intellectual curiosity, critical thinking, and a profound sense of global and social responsibility. We strive to build character as much as we build competence.",
    },
    {
      type: "Vision",
      title: "Leading the Future",
      text: "To be a global institution of educational excellence where every student is empowered to discover their true potential, challenge the status quo, and lead with unyielding integrity in a rapidly changing world.",
    }
  ],

  // ── 4. QUICK STATS ────────────────────────────────────────────────
  stats: [
    { number: "30+", label: "Years of Trust" },
    { number: "2,500+", label: "Active Students" },
    { number: "150+", label: "Expert Faculty" },
    { number: "100%", label: "Board Pass Rate" },
  ],

  // ── 5. ARCHITECTURAL TIMELINE ─────────────────────────────────────
  timeline: [
    { 
      year: "1995", 
      title: "The Foundation", 
      description: "Established in Moradabad with just 50 students in a single architectural block, driven by a vision to redefine local education." 
    },
    { 
      year: "2005", 
      title: "Senior Wing Addition", 
      description: "Expanded to include Class XI and XII, featuring state-of-the-art physics, chemistry, and computer science laboratories." 
    },
    { 
      year: "2015", 
      title: "Athletics Complex", 
      description: "Inaugurated our 5-acre dedicated sports complex, including an Olympic-sized swimming pool and professional indoor courts." 
    },
    { 
      year: "2026", 
      title: "Digital Campus Era", 
      description: "Achieved 100% smart-classroom integration and a fully digitized interactive curriculum to prepare students for the modern world." 
    },
  ],

  // ── 6. LEADERSHIP (Optional additions for the About Page) ─────────
  leadership: {
    heading: "Guided by Visionaries",
    profiles: [
      {
        name: "Dr. Rashmi Sinha",
        role: "Principal",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
        bio: "With over 25 years in educational leadership, Dr. Sinha believes in creating an environment where discipline meets empathy."
      },
      {
        name: "Mr. Anil Desai",
        role: "Chairman",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
        bio: "The visionary founder who laid the cornerstone of Sunrise Public School, dedicating his life to accessible, premium education."
      }
    ]
  }
};