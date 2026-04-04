/**
 * admissionsPageConfig.js
 *
 * PURPOSE:
 * School-specific content for the AdmissionsPage.
 * Theme (colors, fonts) comes from schoolConfig.js — do NOT duplicate it here.
 *
 * SCALE NOTE:
 * For 100–200 schools, keep this structure strictly identical across all schools.
 * Only change the string values, arrays, and image URLs.
 */

export const admissionsPageConfig = {

  // ─── HERO SECTION ──────────────────────────────────────────────────────────
  hero: {
    badge:       "Admissions Open 2026–27",
    heading:     "Shape Their Future with World-Class Education",
    description: "Discover a nurturing environment where curiosity meets excellence. We are now accepting applications for the upcoming academic year, Nursery to Class XII.",
    // Using a premium Unsplash image for the background
    image:       "https://myschool-assets.s3.ap-south-1.amazonaws.com/uploads/2uNSjO9cE5OwjzT3OxNOKDr2HLzF10m0qYjUZRsO.jpg", 
    primaryBtn:  { label: "Apply Online Now", path: "/apply" },
    secondaryBtn:{ label: "Download Prospectus", path: "/brochure.pdf" },
  },

  // ─── ADMISSION INFO SECTION ────────────────────────────────────────────────
  admissionInfo: {
    heading:     "Why Choose Our Institution?",
    description: "We believe in holistic development, blending rigorous academics with sports, arts, and character building. Our admissions process is designed to find students and families who share our vision for educational excellence.",

    // Upgraded to sound like premium benefits rather than just rules
    highlights: [
      "Globally recognized curriculum with a focus on STEM and Arts",
      "Low student-to-teacher ratio (1:15) for personalized attention",
      "State-of-the-art campus with smart classrooms and modern labs",
      "Extensive extracurricular programs including robotics, debate, and athletics",
      "Dedicated university placement counseling starting from Class IX",
      "Safe, secure, and inclusive campus environment with 24/7 monitoring"
    ],
  },

  // ─── PROCESS STEPS ─────────────────────────────────────────────────────────
  admissionProcess: {
    enabled: true,
    heading: "Your Journey Begins Here",
    steps: [
      { step: "01", title: "Online Application",    desc: "Fill out our secure online application form and pay the initial registration fee." },
      { step: "02", title: "Campus Tour",           desc: "Schedule a guided tour to experience our facilities and meet our incredible faculty." },
      { step: "03", title: "Student Interaction",   desc: "A relaxed, grade-appropriate assessment and conversation to understand your child's needs." },
      { step: "04", title: "Welcome to the Family", desc: "Receive your formal offer letter and complete enrollment to secure your seat." },
    ],
  },

  // ─── CAMPUS GALLERY ────────────────────────────────────────────────────────
  gallery: {
    heading: "Experience Our Campus",
    images: [
      { id: 1, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/uploads/2uNSjO9cE5OwjzT3OxNOKDr2HLzF10m0qYjUZRsO.jpg", alt: "Modern Library & Resource Center" },
      { id: 2, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/uploads/gUD8mKmDoibj6ehEOqrm2pkNvgtkr15eSpdFcEo7.jpg", alt: "Advanced Science Laboratories" },
      { id: 3, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/uploads/76bRXBiJFlsdWgdGMRFbrnzKODKZEczA6RVqEnue.jpg", alt: "Championship Sports Grounds" },
      { id: 4, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/uploads/gUD8mKmDoibj6ehEOqrm2pkNvgtkr15eSpdFcEo7.jpg", alt: "Interactive Smart Classrooms" },
      { id: 5, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/uploads/CPeCoY4f9tyPUKzBomgOUXhFqmWZPXFpKraMmMJm.jpg", alt: "Student Collaboration Spaces" },
      { id: 6, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/all_media/Xnkrm74Fw8Mv0IqbcoIuLQJ1M6O5nVdvoCsMM9Tx.jpg", alt: "Vibrant Campus Life" },
            { id: 7, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/all_media/Lev3zWlJkzcWm9gBw33TWugHQsWjZyKvTxj1wDcd.jpg", alt: "Vibrant Campus Life" },
      { id: 8, src: "https://myschool-assets.s3.ap-south-1.amazonaws.com/all_media/6xQ1G1XIM7OMdLAyKxRGOhIEkD2YP6befEdmHcQf.jpg", alt: "Modern Library & Resource Center" },

    ],
  },

  // ─── FEES OVERVIEW ─────────────────────────────────────────────────────────
  feesOverview: {
    enabled: true,
    heading: "Investment in Their Future",
    note:    "Fees are payable in quarterly installments. Transport and uniform costs are additional.",
    rows: [
      { label: "Registration Fee (One-time)",  amount: "₹ 2,500" },
      { label: "Admission Fee (One-time)",     amount: "₹ 25,000" },
      { label: "Tuition Fee (Quarterly)",      amount: "₹ 18,000" },
      { label: "Technology & Lab Fee (Annual)",amount: "₹ 5,000" },
      // The word "Total" triggers the special bold highlighting in our React component!
      { label: "Estimated Annual Total",       amount: "₹ 1,04,500" }, 
    ],
  },

  // ─── CALL TO ACTION SECTION ────────────────────────────────────────────────
  admissionCTA: {
    heading:     "Secure Your Child's Seat Today",
    subtext:     "Due to our commitment to small class sizes, seats fill up quickly. Submit your application early to ensure a spot for the upcoming academic year.",
    primaryBtn:  { label: "Start Application",  path: "/apply" },
    secondaryBtn:{ label: "Request Callback",   path: "/contact" },
  },

  // ─── CONTACT SECTION ───────────────────────────────────────────────────────
  admissionsContact: {
    heading:   "Admissions Office",
    intro:     "Have questions? Our dedicated admissions counselors are here to guide you through every step of the enrollment process.",
    phone:     "+91 98765 43210",
    email:     "admissions@premiumacademy.edu.in",
    address:   "Admissions Block, 123 Education Boulevard, Tech Park – 560001",
    hours:     "Monday – Saturday: 8:30 AM to 4:00 PM",
  },

  // ─── SEO / PAGE META ───────────────────────────────────────────────────────
  meta: {
    title:       "Admissions 2026–27 | Premium Academy",
    description: "Apply now for admissions at Premium Academy. Offering world-class education from Nursery to Class XII. Secure your child's future today.",
  },
};