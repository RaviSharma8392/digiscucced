// ============================================================
// COACHING HOMEPAGE — LIGHT THEME & PREMIUM DESIGN
// ============================================================

const siteConfig = {
  brand: {
    name: "Elevate",
    tagline: "Coaching",
    logo: "⚡",
    accentColor: "#2563EB", // Trustworthy Royal Blue
    primaryColor: "#FFFFFF", // Clean White
    secondaryColor: "#F8FAFC", // Very soft slate for alternating sections
    textColor: "#0F172A", // Deep charcoal for high readability
    mutedColor: "#64748B", // Medium slate for secondary text
    cardBg: "#FFFFFF", // White cards
    fontDisplay: "'Playfair Display', serif",
    fontBody: "'DM Sans', sans-serif",
  },

  hero: {
    badge: "Trusted by 2,000+ Professionals",
    headline: ["Transform Your", "Career.", "Life.", "Mindset."],
    subheadline:
      "Elite coaching programs designed to unlock your full potential — personally and professionally.",
    primaryCta: { label: "Book Free Session", href: "#contact" },
    secondaryCta: { label: "See Results", href: "#testimonials" },
    stats: [
      { value: "2,000+", label: "Clients Coached" },
      { value: "94%", label: "Goal Achievement" },
      { value: "8 yrs", label: "Experience" },
      { value: "4.9★", label: "Average Rating" },
    ],
  },

  about: {
    label: "About the Coach",
    name: "Sarah Mitchell",
    title: "ICF Certified Executive Coach",
    bio: "With over 8 years of experience guiding Fortune 500 leaders and ambitious entrepreneurs, I blend neuroscience-backed techniques with real-world business strategy to create breakthroughs that last.",
    credentials: [
      "ICF PCC Certified",
      "Harvard Leadership Program",
      "NLP Master Practitioner",
      "Mindfulness-Based Coach",
    ],
    image: null, // Replace with actual image URL
  },

  programs: {
    label: "Programs",
    heading: "Choose Your Path",
    subheading: "Every program is tailored to your unique goals and timeline.",
    items: [
      {
        icon: "🚀",
        name: "Career Accelerator",
        duration: "12 Weeks",
        price: "$2,400",
        description:
          "Fast-track your promotion, pivot industries, or land your dream role with a clear strategic roadmap.",
        features: [
          "Weekly 1:1 sessions",
          "Resume & LinkedIn audit",
          "Salary negotiation coaching",
          "Career roadmap blueprint",
        ],
        highlight: false,
      },
      {
        icon: "👑",
        name: "Executive Presence",
        duration: "6 Months",
        price: "$5,800",
        description:
          "Step into leadership with confidence. Build influence, communication mastery, and executive gravitas.",
        features: [
          "Bi-weekly deep sessions",
          "360° leadership assessment",
          "Public speaking coaching",
          "Personal brand strategy",
        ],
        highlight: true,
        badge: "Most Popular",
      },
      {
        icon: "🌱",
        name: "Life by Design",
        duration: "8 Weeks",
        price: "$1,600",
        description:
          "Redesign your life from the inside out. Clarity, purpose, and a life that genuinely excites you.",
        features: [
          "Weekly coaching calls",
          "Values clarification work",
          "Habit design system",
          "Accountability check-ins",
        ],
        highlight: false,
      },
    ],
  },

  process: {
    label: "How It Works",
    heading: "Your Journey to Transformation",
    steps: [
      {
        number: "01",
        title: "Discovery Call",
        description:
          "A free 30-minute session to explore your goals, challenges, and whether we're the right fit.",
      },
      {
        number: "02",
        title: "Custom Roadmap",
        description:
          "Together we build a personalized coaching plan aligned with your specific outcomes.",
      },
      {
        number: "03",
        title: "Deep Coaching",
        description:
          "Regular sessions using proven frameworks to create real, measurable change in your life.",
      },
      {
        number: "04",
        title: "Lasting Results",
        description:
          "You walk away with new skills, mindsets, and a foundation for continued growth.",
      },
    ],
  },

  testimonials: {
    label: "Results",
    heading: "Real People. Real Results.",
    items: [
      {
        quote:
          "Within 3 months I landed a VP role I'd been chasing for 5 years. Sarah's coaching was the turning point.",
        name: "James Okonkwo",
        role: "VP of Product, Stripe",
        avatar: "JO",
      },
      {
        quote:
          "I came in burned out and directionless. I left with a clear vision and the courage to build my own firm.",
        name: "Priya Sharma",
        role: "Founder, Lumina Ventures",
        avatar: "PS",
      },
      {
        quote:
          "The executive presence program completely transformed how I show up in the boardroom. Priceless.",
        name: "Marcus Reed",
        role: "CFO, TechNova Inc.",
        avatar: "MR",
      },
    ],
  },

  contact: {
    label: "Get Started",
    heading: "Book Your Free Discovery Call",
    subheading:
      "No pressure. Just a conversation about where you are and where you want to go.",
    fields: [
      { id: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "jane@example.com",
      },
      {
        id: "goal",
        label: "Primary Goal",
        type: "select",
        options: [
          "Career Advancement",
          "Leadership Development",
          "Life Clarity & Purpose",
          "Business Growth",
          "Other",
        ],
      },
      {
        id: "message",
        label: "Tell me a bit about you",
        type: "textarea",
        placeholder: "What's your biggest challenge right now?",
      },
    ],
    submitLabel: "Request My Free Session",
  },

  footer: {
    tagline: "Empowering lives, one conversation at a time.",
    links: ["Privacy Policy", "Terms of Service", "Contact"],
    social: [
      { label: "LinkedIn", icon: "in" },
      { label: "Instagram", icon: "ig" },
      { label: "Twitter", icon: "tw" },
    ],
  },
};

// ============================================================
// STYLES (UPDATED FOR LIGHT THEME)
// ============================================================
const createStyles = (cfg) => `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --accent: ${cfg.accentColor};
    --primary: ${cfg.primaryColor};
    --secondary: ${cfg.secondaryColor};
    --text: ${cfg.textColor};
    --muted: ${cfg.mutedColor};
    --card: ${cfg.cardBg};
    --font-display: ${cfg.fontDisplay};
    --font-body: ${cfg.fontBody};
    --radius: 16px;
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--primary);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 60px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: var(--transition);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.5rem; font-weight: 700;
    color: var(--text); text-decoration: none;
    display: flex; align-items: center; gap: 8px;
  }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 32px; list-style: none; align-items: center;}
  .nav-links a {
    color: var(--muted); text-decoration: none;
    font-size: 0.95rem; font-weight: 500;
    transition: color var(--transition);
    letter-spacing: 0.01em;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-cta {
    background: var(--accent); color: #fff !important;
    padding: 10px 24px; border-radius: 50px;
    font-weight: 600 !important; box-shadow: 0 4px 14px rgba(37,99,235,0.2);
  }
  .nav-cta:hover { background: #1D4ED8 !important; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.3); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    padding: 140px 60px 80px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; top: -200px; right: -200px;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero::after {
    content: '';
    position: absolute; bottom: -100px; left: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(248,250,252,1) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2);
    color: var(--accent); padding: 6px 18px; border-radius: 50px;
    font-size: 0.82rem; font-weight: 700; letter-spacing: 0.05em;
    margin-bottom: 32px; width: fit-content;
    animation: fadeInUp 0.6s ease both;
  }
  .hero-badge::before { content: '✦'; font-size: 0.7rem; }
  .hero-headline {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 900; line-height: 1.1;
    margin-bottom: 24px;
    max-width: 800px; color: var(--text);
  }
  .hero-headline .rotating-word {
    color: var(--accent);
    display: inline-block;
    animation: wordCycle 4s infinite;
  }
  .hero-sub {
    font-size: 1.2rem; color: var(--muted);
    max-width: 560px; margin-bottom: 44px; font-weight: 400;
    line-height: 1.8;
    animation: fadeInUp 0.6s 0.3s ease both;
  }
  .hero-actions {
    display: flex; gap: 16px; flex-wrap: wrap;
    animation: fadeInUp 0.6s 0.4s ease both;
  }
  .btn-primary {
    background: var(--accent); color: #fff;
    padding: 16px 36px; border-radius: 50px;
    font-weight: 600; font-size: 1rem;
    text-decoration: none; border: none; cursor: pointer;
    transition: transform var(--transition), box-shadow var(--transition);
    box-shadow: 0 8px 24px rgba(37,99,235,0.25);
    letter-spacing: 0.01em;
    display: inline-block;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(37,99,235,0.35); background: #1D4ED8; }
  .btn-ghost {
    background: transparent; color: var(--text);
    padding: 16px 36px; border-radius: 50px;
    font-weight: 600; font-size: 1rem;
    text-decoration: none; border: 1px solid rgba(15,23,42,0.15);
    cursor: pointer; transition: all var(--transition);
    letter-spacing: 0.01em;
    display: inline-block;
  }
  .btn-ghost:hover { border-color: var(--text); background: rgba(0,0,0,0.02); }
  .hero-stats {
    display: flex; gap: 48px; margin-top: 72px; flex-wrap: wrap;
    padding-top: 48px; border-top: 1px solid rgba(0,0,0,0.06);
    animation: fadeInUp 0.6s 0.6s ease both;
  }
  .stat-item { text-align: left; }
  .stat-value {
    font-family: var(--font-display);
    font-size: 2.2rem; font-weight: 700; color: var(--text);
    line-height: 1;
  }
  .stat-label { font-size: 0.85rem; color: var(--muted); margin-top: 8px; font-weight: 500; }

  /* SECTION BASE */
  section { padding: 100px 60px; }
  .section-label {
    font-size: 0.8rem; font-weight: 700; letter-spacing: 0.15em;
    color: var(--accent); text-transform: uppercase; margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .section-label::before { content: ''; width: 24px; height: 2px; background: var(--accent); }
  .section-heading {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 800;
    line-height: 1.15; color: var(--text);
  }
  .section-sub { color: var(--muted); font-size: 1.1rem; margin-top: 16px; max-width: 560px; line-height: 1.7; }

  /* ABOUT */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    align-items: center; margin-top: 64px;
  }
  .about-img-wrap {
    aspect-ratio: 3/4; border-radius: 24px; overflow: hidden;
    background: var(--secondary);
    display: flex; align-items: center; justify-content: center;
    font-size: 6rem; position: relative; border: 1px solid rgba(0,0,0,0.04);
  }
  .about-img-wrap::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.03));
  }
  .about-name {
    font-family: var(--font-display);
    font-size: 2.2rem; font-weight: 700; margin-bottom: 6px; color: var(--text);
  }
  .about-title { color: var(--accent); font-size: 0.95rem; font-weight: 700; margin-bottom: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
  .about-bio { color: var(--muted); line-height: 1.9; margin-bottom: 32px; font-size: 1.05rem; }
  .credentials-grid { display: flex; flex-wrap: wrap; gap: 12px; }
  .credential-tag {
    padding: 10px 18px; border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.08);
    font-size: 0.85rem; color: var(--text); font-weight: 600;
    background: var(--primary); box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }

  /* PROGRAMS */
  #programs { background: var(--secondary); }
  .programs-header { display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 64px; }
  .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .program-card {
    background: var(--card); border-radius: var(--radius);
    padding: 40px; border: 1px solid rgba(0,0,0,0.05);
    position: relative; transition: transform var(--transition), box-shadow var(--transition);
    display: flex; flex-direction: column;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  }
  .program-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
  .program-card.featured {
    border-color: rgba(37,99,235,0.3);
    background: linear-gradient(160deg, rgba(37,99,235,0.02) 0%, var(--card) 40%);
    box-shadow: 0 8px 30px rgba(37,99,235,0.08);
  }
  .program-badge {
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
    background: var(--accent); color: #fff;
    padding: 6px 20px; border-radius: 50px; font-size: 0.75rem; font-weight: 700;
    white-space: nowrap; letter-spacing: 0.05em; text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(37,99,235,0.2);
  }
  .program-icon { font-size: 2.5rem; margin-bottom: 20px; }
  .program-name { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .program-meta { display: flex; gap: 16px; margin-bottom: 20px; align-items: center; }
  .program-duration { font-size: 0.85rem; color: var(--muted); font-weight: 600; }
  .program-price { color: var(--accent); font-weight: 800; font-size: 1.1rem; }
  .program-desc { color: var(--muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 32px; }
  .program-features { list-style: none; flex: 1; margin-bottom: 32px; }
  .program-features li {
    padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.04);
    font-size: 0.9rem; color: var(--text); font-weight: 500;
    display: flex; align-items: center; gap: 12px;
  }
  .program-features li:last-child { border-bottom: none; }
  .program-features li::before { content: '✓'; color: var(--accent); font-weight: 800; font-size: 0.9rem; }
  .program-cta {
    margin-top: auto; text-align: center;
    padding: 14px; border-radius: 50px; font-weight: 600; font-size: 0.95rem;
    cursor: pointer; border: none; transition: all var(--transition);
    text-decoration: none; display: block;
  }
  .program-card.featured .program-cta { background: var(--accent); color: #fff; }
  .program-card.featured .program-cta:hover { background: #1D4ED8; }
  .program-card:not(.featured) .program-cta { background: transparent; color: var(--text); border: 1px solid rgba(0,0,0,0.15); }
  .program-card:not(.featured) .program-cta:hover { background: rgba(0,0,0,0.03); border-color: var(--text); }

  /* PROCESS */
  .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-top: 64px; }
  .process-step { position: relative; padding-left: 0; }
  .step-number {
    font-family: var(--font-display); font-size: 4rem; font-weight: 900;
    color: rgba(37,99,235,0.1); line-height: 1; margin-bottom: 16px;
  }
  .step-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; color: var(--text); }
  .step-desc { color: var(--muted); font-size: 0.95rem; line-height: 1.7; }
  .step-connector {
    position: absolute; top: 32px; right: -20px;
    width: 40px; height: 1px; background: rgba(0,0,0,0.08);
  }

  /* TESTIMONIALS */
  #testimonials { background: var(--secondary); }
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 64px; }
  .testimonial-card {
    background: var(--card); border-radius: var(--radius);
    padding: 40px; border: 1px solid rgba(0,0,0,0.04);
    position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.02);
  }
  .testimonial-card::before {
    content: '"'; font-family: var(--font-display);
    font-size: 6rem; color: var(--accent); opacity: 0.1;
    position: absolute; top: 10px; right: 24px; line-height: 1;
  }
  .testimonial-quote { color: var(--text); font-size: 1rem; line-height: 1.8; margin-bottom: 32px; font-weight: 500; }
  .testimonial-author { display: flex; align-items: center; gap: 16px; }
  .avatar {
    width: 48px; height: 48px; border-radius: 50%;
    background: rgba(37,99,235,0.1);
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.9rem; color: var(--accent);
    flex-shrink: 0; border: 1px solid rgba(37,99,235,0.2);
  }
  .author-name { font-weight: 700; font-size: 0.95rem; color: var(--text); }
  .author-role { color: var(--muted); font-size: 0.8rem; font-weight: 500; }

  /* CONTACT */
  .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; margin-top: 64px; align-items: start; }
  .contact-info h3 { font-family: var(--font-display); font-size: 2rem; font-weight: 700; margin-bottom: 16px; color: var(--text); }
  .contact-info p { color: var(--muted); line-height: 1.8; font-size: 1.05rem; }
  .form-group { margin-bottom: 24px; }
  .form-label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 10px; color: var(--text); }
  .form-input, .form-select, .form-textarea {
    width: 100%; padding: 16px 20px;
    background: #fff; border: 1px solid rgba(0,0,0,0.1);
    border-radius: 12px; color: var(--text); font-family: var(--font-body); font-size: 0.95rem;
    transition: all var(--transition);
    outline: none; appearance: none; box-shadow: 0 2px 8px rgba(0,0,0,0.01);
  }
  .form-input::placeholder, .form-textarea::placeholder { color: #A0AEC0; }
  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: var(--accent); box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
  }
  .form-textarea { resize: vertical; min-height: 140px; }
  .form-select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; background-size: 16px; }
  .form-submit {
    width: 100%; padding: 18px; border-radius: 50px; border: none;
    background: var(--accent); color: #fff; font-weight: 700;
    font-size: 1.05rem; cursor: pointer; font-family: var(--font-body);
    transition: transform var(--transition), box-shadow var(--transition);
    box-shadow: 0 8px 24px rgba(37,99,235,0.25); margin-top: 10px;
  }
  .form-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(37,99,235,0.35); background: #1D4ED8;}

  /* FOOTER */
  footer {
    padding: 60px; background: var(--secondary);
    border-top: 1px solid rgba(0,0,0,0.05);
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 32px;
  }
  .footer-brand { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--text); }
  .footer-brand span { color: var(--accent); }
  .footer-tag { color: var(--muted); font-size: 0.9rem; margin-top: 6px; }
  .footer-links { display: flex; gap: 32px; list-style: none; }
  .footer-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color var(--transition); }
  .footer-links a:hover { color: var(--accent); }
  .footer-social { display: flex; gap: 12px; }
  .social-btn {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1); background: #fff;
    display: flex; align-items: center; justify-content: center;
    color: var(--text); font-size: 0.8rem; font-weight: 700; cursor: pointer;
    transition: all var(--transition); text-transform: uppercase;
  }
  .social-btn:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05);}

  /* ANIMATIONS */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wordCycle {
    0%, 20%   { opacity: 1; transform: translateY(0); }
    25%, 95%  { opacity: 1; transform: translateY(0); }
    100%      { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fadeInUp 0.7s ease both; }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    nav { padding: 16px 32px; }
    .hero, section { padding-left: 32px; padding-right: 32px; }
    .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 48px; }
    .programs-grid { grid-template-columns: 1fr 1fr; }
    .process-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .nav-links { display: none; }
    .programs-grid, .testimonials-grid, .process-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 32px; }
    footer { flex-direction: column; align-items: flex-start; }
    .hero-headline { font-size: 2.5rem; }
  }
`;

// ============================================================
// COMPONENT
// ============================================================
import { useState, useEffect } from "react";

export default function CoachingHomepage({ config = siteConfig }) {
  const {
    brand,
    hero,
    about,
    programs,
    process,
    testimonials,
    contact,
    footer,
  } = config;
  const [wordIdx, setWordIdx] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % hero.headline.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hero.headline]);

  const handleField = (id, val) => setFormData((p) => ({ ...p, [id]: val }));

  return (
    <>
      <style>{createStyles(brand)}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          {brand.logo} {brand.name}
          <span>.{brand.tagline}</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#programs">Programs</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#testimonials">Results</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Book Session
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-badge">{hero.badge}</div>
        <h1 className="hero-headline fade-in">
          {hero.headline[0]}
          <br />
          <span className="rotating-word">{hero.headline[wordIdx]}</span>
        </h1>
        <p className="hero-sub">{hero.subheadline}</p>
        <div className="hero-actions">
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </div>
        <div className="hero-stats">
          {hero.stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">{about.label}</div>
        <div className="about-grid">
          <div className="about-img-wrap">👩‍💼</div>
          <div>
            <div className="about-name">{about.name}</div>
            <div className="about-title">{about.title}</div>
            <p className="about-bio">{about.bio}</p>
            <div className="credentials-grid">
              {about.credentials.map((c, i) => (
                <span className="credential-tag" key={i}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs">
        <div className="programs-header">
          <div className="section-label">{programs.label}</div>
          <h2 className="section-heading">{programs.heading}</h2>
          <p className="section-sub">{programs.subheading}</p>
        </div>
        <div className="programs-grid">
          {programs.items.map((p, i) => (
            <div
              className={`program-card${p.highlight ? " featured" : ""}`}
              key={i}>
              {p.badge && <div className="program-badge">{p.badge}</div>}
              <div className="program-icon">{p.icon}</div>
              <div className="program-name">{p.name}</div>
              <div className="program-meta">
                <span className="program-duration">⏱ {p.duration}</span>
                <span className="program-price">{p.price}</span>
              </div>
              <p className="program-desc">{p.description}</p>
              <ul className="program-features">
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="program-cta">
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="section-label">{process.label}</div>
        <h2 className="section-heading">{process.heading}</h2>
        <div className="process-grid">
          {process.steps.map((s, i) => (
            <div className="process-step" key={i}>
              {i < process.steps.length - 1 && (
                <div className="step-connector" />
              )}
              <div className="step-number">{s.number}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-label">{testimonials.label}</div>
        <h2 className="section-heading">{testimonials.heading}</h2>
        <div className="testimonials-grid">
          {testimonials.items.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label">{contact.label}</div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="section-heading">{contact.heading}</h3>
            <p style={{ marginTop: 16 }}>{contact.subheading}</p>
          </div>
          <div>
            {contact.fields.map((field) => (
              <div className="form-group" key={field.id}>
                <label className="form-label">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    className="form-textarea"
                    placeholder={field.placeholder}
                    onChange={(e) => handleField(field.id, e.target.value)}
                  />
                ) : field.type === "select" ? (
                  <select
                    className="form-select"
                    onChange={(e) => handleField(field.id, e.target.value)}>
                    <option value="" disabled selected hidden>
                      Select an option
                    </option>
                    {field.options.map((o, i) => (
                      <option key={i} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="form-input"
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={(e) => handleField(field.id, e.target.value)}
                  />
                )}
              </div>
            ))}
            <button
              className="form-submit"
              onClick={() =>
                alert("Form submitted!\n" + JSON.stringify(formData, null, 2))
              }>
              {contact.submitLabel}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="footer-brand">
            {brand.logo} {brand.name}
            <span>.{brand.tagline}</span>
          </div>
          <div className="footer-tag">{footer.tagline}</div>
        </div>
        <ul className="footer-links">
          {footer.links.map((l, i) => (
            <li key={i}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>
        <div className="footer-social">
          {footer.social.map((s, i) => (
            <button key={i} className="social-btn" title={s.label}>
              {s.icon}
            </button>
          ))}
        </div>
      </footer>
    </>
  );
}
