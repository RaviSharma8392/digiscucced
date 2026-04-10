import { useState, useEffect, useRef } from "react";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

const projects = [
  {
    id: "01",
    title: "Sunrise Academy",
    subtitle: "School Website Development",
    category: "Education",
    year: "2024",
    color: "#0ea5e9",
    bg: "#0c1a2e",
    desc: "A comprehensive school website built to streamline admissions, showcase academics, and connect parents, students, and staff under one digital roof.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    features: [
      "Online admission portal",
      "Academic calendar",
      "Gallery & events",
      "Mobile-first design",
    ],
    result:
      "42% increase in online admission inquiries within the first month of launch.",
    tag: "EDU",
  },
  {
    id: "02",
    title: "Himalayan Bites",
    subtitle: "Local Restaurant Business Website",
    category: "Food & Hospitality",
    year: "2024",
    color: "#f97316",
    bg: "#1a0e05",
    desc: "A bold, appetite-inspiring website for a Haldwani-based restaurant — built to showcase the menu, take reservations, and convert foot traffic to digital orders.",
    tech: ["React", "CSS3", "WhatsApp API", "Google Maps"],
    features: [
      "Digital menu with categories",
      "Table booking form",
      "Google Maps integration",
      "WhatsApp order button",
    ],
    result:
      "Restaurant reported a 3× increase in weekend reservations within 6 weeks.",
    tag: "BIZ",
  },
  {
    id: "03",
    title: "Uttarakhand Law College",
    subtitle: "Educational Institution Portal",
    category: "Higher Education",
    year: "2024",
    color: "#8b5cf6",
    bg: "#120d1e",
    desc: "A professional institutional portal for a law college — handling course listings, faculty pages, notices, and student resources in a single, authoritative platform.",
    tech: ["WordPress", "Elementor Pro", "MySQL", "cPanel"],
    features: [
      "Course & faculty directory",
      "Notice board module",
      "Downloadable resources",
      "SEO-optimized structure",
    ],
    result:
      "Institution ranked on the first page of Google for local search terms within 60 days.",
    tag: "EDU",
  },
  {
    id: "04",
    title: "Arjun Photography",
    subtitle: "Creative Portfolio Website",
    category: "Portfolio & Creative",
    year: "2025",
    color: "#10b981",
    bg: "#051510",
    desc: "An immersive, minimal portfolio for a professional photographer — designed to let the work breathe, with a lightning-fast gallery and smooth client inquiry flow.",
    tech: ["Next.js", "Framer Motion", "Cloudinary", "Resend"],
    features: [
      "Masonry photo gallery",
      "Project case studies",
      "Client inquiry form",
      "99/100 PageSpeed score",
    ],
    result:
      "Photographer received 5 new international client inquiries within the first two weeks.",
    tag: "FOLIO",
  },
  {
    id: "05",
    title: "MediCare Clinic",
    subtitle: "Healthcare Business Website",
    category: "Healthcare",
    year: "2025",
    color: "#06b6d4",
    bg: "#061518",
    desc: "A clean, trust-building website for a multi-specialty clinic — featuring doctor profiles, service pages, and an online appointment booking system.",
    tech: ["React", "Node.js", "Tailwind CSS", "Netlify"],
    features: [
      "Doctor directory",
      "Online appointment booking",
      "Service & specialty pages",
      "Structured SEO schema",
    ],
    result:
      "Clinic reduced phone-in appointment load by 35% as online bookings scaled up.",
    tag: "BIZ",
  },
];

const industries = [
  {
    icon: "🏫",
    label: "Schools & Colleges",
    desc: "Admission portals, academic calendars, faculty pages, and parent communication systems.",
  },
  {
    icon: "🏪",
    label: "Small Businesses",
    desc: "Lead-generating websites for shops, studios, clinics, and service-based businesses.",
  },
  {
    icon: "🏙️",
    label: "Local Organizations",
    desc: "NGOs, trusts, and community organizations with a need for credible digital identity.",
  },
  {
    icon: "🚀",
    label: "Startups",
    desc: "Fast-launching MVPs and landing pages that communicate value and convert visitors.",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery & requirements",
    desc: "We begin every project with a deep-dive into your goals, audience, and competitive landscape. No assumptions — just clarity.",
  },
  {
    num: "02",
    title: "UI/UX design & planning",
    desc: "Wireframes, mood boards, and design mockups are crafted before a single line of code is written. You approve the vision first.",
  },
  {
    num: "03",
    title: "Development & testing",
    desc: "Clean, performant code built on modern frameworks. Rigorous cross-device and browser testing before anything goes live.",
  },
  {
    num: "04",
    title: "Launch & deployment",
    desc: "We handle hosting setup, domain configuration, and a smooth go-live — with zero downtime and full handover documentation.",
  },
  {
    num: "05",
    title: "Ongoing support",
    desc: "Post-launch, we remain your digital partner — available for updates, new features, and performance monitoring.",
  },
];

const qualities = [
  { label: "Responsive design", value: 100, color: "#0ea5e9" },
  { label: "Performance (PageSpeed)", value: 95, color: "#10b981" },
  { label: "SEO-ready structure", value: 98, color: "#8b5cf6" },
  { label: "Scalable architecture", value: 92, color: "#f97316" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimWrap({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}>
      {children}
    </div>
  );
}

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);
  const proj = projects[activeProject];

  return (
    <main
      style={{
        background: "#09090b",
        color: "#e4e4e7",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflowX: "hidden",
      }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "100px 48px 80px",
          maxWidth: 1100,
          margin: "0 auto",
        }}>
        <AnimWrap>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}>
            <div style={{ width: 28, height: 1, background: "#0ea5e9" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0ea5e9",
              }}>
              Our portfolio
            </span>
          </div>
        </AnimWrap>
        <AnimWrap delay={80}>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.06,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}>
            Work that speaks
            <br />
            <span style={{ color: "#0ea5e9" }}>for itself.</span>
          </h1>
        </AnimWrap>
        <AnimWrap delay={160}>
          <p
            style={{
              fontSize: 17,
              color: "#71717a",
              lineHeight: 1.75,
              maxWidth: 580,
              marginBottom: 48,
            }}>
            At Digi Succeed Services, every project is a commitment — to craft,
            to performance, and to the goals of the businesses and institutions
            we serve. Browse our work below and see what's possible.
          </p>
        </AnimWrap>
        <AnimWrap delay={220}>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              ["30+", "Projects delivered"],
              ["25+", "Happy clients"],
              ["5+", "Industries"],
              ["100%", "On-time delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}>
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#52525b",
                    marginTop: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </AnimWrap>
        {/* decorative grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 340,
            height: 340,
            opacity: 0.035,
            pointerEvents: "none",
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
          }}
        />
      </section>
      <div style={{ borderTop: "1px solid #18181b" }} />
      {/* ── FEATURED PROJECTS INTERACTIVE ── */}
      <section
        style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <AnimWrap>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}>
            <div style={{ width: 28, height: 1, background: "#0ea5e9" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0ea5e9",
              }}>
              Featured work
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 48,
            }}>
            Projects we're proud of.
          </h2>
        </AnimWrap>

        {/* Project selector tabs */}
        <AnimWrap delay={60}>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 40,
            }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(i)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  background: activeProject === i ? p.color : "transparent",
                  color: activeProject === i ? "#fff" : "#52525b",
                  border: `1px solid ${activeProject === i ? p.color : "#27272a"}`,
                  transition: "all 0.2s",
                }}>
                {p.id} — {p.subtitle.split(" ")[0]} {p.subtitle.split(" ")[1]}
              </button>
            ))}
          </div>
        </AnimWrap>

        {/* Active project detail */}
        <div
          key={proj.id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            background: "#18181b",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #27272a",
            animation: "fadeSlide 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}>
          {/* Left: visual card */}
          <div
            style={{
              background: proj.bg,
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 380,
            }}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 32,
                }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    color: proj.color,
                    background: `${proj.color}18`,
                    border: `1px solid ${proj.color}33`,
                    borderRadius: 4,
                    padding: "4px 10px",
                  }}>
                  {proj.tag}
                </span>
                <span style={{ fontSize: 12, color: "#52525b" }}>
                  {proj.year}
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#52525b",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                {proj.category}
              </div>
              <h3
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}>
                {proj.title}
              </h3>
              <div style={{ fontSize: 13, color: "#71717a", fontWeight: 500 }}>
                {proj.subtitle}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginTop: 32,
              }}>
              {proj.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#a1a1aa",
                  }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: details */}
          <div style={{ background: "#111113", padding: "40px" }}>
            <p
              style={{
                fontSize: 14,
                color: "#71717a",
                lineHeight: 1.75,
                marginBottom: 28,
              }}>
              {proj.desc}
            </p>

            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#52525b",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}>
                Key features
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {proj.features.map((f) => (
                  <div
                    key={f}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: proj.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 13, color: "#a1a1aa" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${proj.color}0d`,
                border: `1px solid ${proj.color}22`,
                borderRadius: 8,
                padding: "16px 18px",
              }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: proj.color,
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}>
                Result
              </div>
              <p style={{ fontSize: 13, color: "#d4d4d8", lineHeight: 1.65 }}>
                {proj.result}
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`@keyframes fadeSlide{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div style={{ borderTop: "1px solid #18181b" }} />
      {/* ── INDUSTRIES ── */}
      <section
        style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <AnimWrap>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}>
            <div style={{ width: 28, height: 1, background: "#0ea5e9" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0ea5e9",
              }}>
              Industries
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}>
            Sectors we serve.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#71717a",
              lineHeight: 1.7,
              maxWidth: 540,
              marginBottom: 48,
            }}>
            Our work spans multiple industries. Each sector has unique digital
            needs — and we understand them all.
          </p>
        </AnimWrap>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}>
          {industries.map((ind, i) => (
            <AnimWrap key={ind.label} delay={i * 70}>
              <div
                style={{
                  background: "#111113",
                  border: "1px solid #27272a",
                  borderRadius: 12,
                  padding: "28px 24px",
                  height: "100%",
                }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 8,
                  }}>
                  {ind.label}
                </div>
                <div
                  style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65 }}>
                  {ind.desc}
                </div>
              </div>
            </AnimWrap>
          ))}
        </div>
      </section>
      <div style={{ borderTop: "1px solid #18181b" }} />
      {/* ── PROCESS ── */}
      <section
        style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <AnimWrap>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}>
            <div style={{ width: 28, height: 1, background: "#0ea5e9" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0ea5e9",
              }}>
              How we work
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}>
            Our development process.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#71717a",
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 52,
            }}>
            Every project follows a structured, transparent workflow — so you
            always know what's happening and what's coming next.
          </p>
        </AnimWrap>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 2,
            background: "#18181b",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid #27272a",
          }}>
          {process.map((step, i) => (
            <AnimWrap key={step.num} delay={i * 70}>
              <div
                style={{
                  background: "#0c0c0e",
                  padding: "28px 22px",
                  height: "100%",
                  position: "relative",
                }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#0ea5e9",
                    letterSpacing: "0.1em",
                    marginBottom: 12,
                  }}>
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}>
                  {step.title}
                </div>
                <div
                  style={{ fontSize: 12, color: "#52525b", lineHeight: 1.65 }}>
                  {step.desc}
                </div>
                {i < process.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: -1,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 2,
                      height: 40,
                      background: "#0ea5e920",
                      display: "none",
                    }}
                  />
                )}
              </div>
            </AnimWrap>
          ))}
        </div>
      </section>
      <div style={{ borderTop: "1px solid #18181b" }} />
      {/* ── QUALITY & RESULTS ── */}
      <section
        style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}>
          <AnimWrap>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}>
              <div style={{ width: 28, height: 1, background: "#0ea5e9" }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#0ea5e9",
                }}>
                Quality standards
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,36px)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}>
              Built to perform.
              <br />
              Built to last.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#71717a",
                lineHeight: 1.75,
                marginBottom: 32,
              }}>
              Every website we deliver is held to a strict standard — not just
              in how it looks, but in how it loads, ranks, and scales. We don't
              consider a project complete until it performs at its best.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {[
                ["Responsive", "All screen sizes, always"],
                ["Fast", "Sub-2s load targets"],
                ["SEO-ready", "Structured from day one"],
              ].map(([t, s]) => (
                <div key={t}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: 4,
                    }}>
                    {t}
                  </div>
                  <div style={{ fontSize: 12, color: "#52525b" }}>{s}</div>
                </div>
              ))}
            </div>
          </AnimWrap>
          <AnimWrap delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {qualities.map((q, i) => (
                <div key={q.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 7,
                    }}>
                    <span style={{ fontSize: 13, color: "#a1a1aa" }}>
                      {q.label}
                    </span>
                    <span
                      style={{ fontSize: 13, fontWeight: 600, color: q.color }}>
                      <CountUp target={q.value} suffix="%" />
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      background: "#27272a",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${q.value}%`,
                        background: q.color,
                        borderRadius: 3,
                        transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimWrap>
        </div>
      </section>
      <div style={{ borderTop: "1px solid #18181b" }} />
      {/* ── CTA ── */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "96px 48px",
          textAlign: "center",
        }}>
        <AnimWrap>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#0ea5e9",
              marginBottom: 20,
            }}>
            Start your project
          </div>
          <h2
            style={{
              fontSize: "clamp(30px,5vw,52px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 18,
            }}>
            Ready to build something
            <br />
            <span style={{ color: "#0ea5e9" }}>remarkable?</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#71717a",
              lineHeight: 1.75,
              maxWidth: 500,
              margin: "0 auto 40px",
            }}>
            Whether you're launching a new business, upgrading an outdated site,
            or building a school portal from scratch — Digi Succeed Services is
            your digital partner from day one.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <a
              href="/contact"
              style={{
                background: "#0ea5e9",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}>
              Start a project →
            </a>
            <a
              href="/services"
              style={{
                background: "transparent",
                color: "#a1a1aa",
                padding: "13px 28px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid #27272a",
              }}>
              View our services
            </a>
          </div>
          <p style={{ fontSize: 12, color: "#3f3f46", marginTop: 24 }}>
            Based in Haldwani, Uttarakhand · Serving clients across India
          </p>
        </AnimWrap>
      </section>
      <ContactSection /> <FAQSection />
    </main>
  );
}
