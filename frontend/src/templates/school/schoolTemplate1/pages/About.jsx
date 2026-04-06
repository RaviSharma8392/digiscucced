import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAboutData } from "../services/aboutService";

// ── Icons ────────────────────────────────────────────────────────────────────
const MissionIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const VisionIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const icons = [MissionIcon, VisionIcon];

// ── Eyebrow ──────────────────────────────────────────────────────────────────
function Eyebrow({ label, accent, dark = false }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span
        className="w-5 h-0.5"
        style={{ background: dark ? `${accent}80` : accent }}
      />
      <span
        className="text-xs font-bold uppercase tracking-[.22em]"
        style={{ color: dark ? `${accent}cc` : accent }}>
        {label}
      </span>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function SchoolTemplate1AboutPage({ business }) {
  const { slug: slugFromUrl } = useParams();

  const theme = business?.theme ?? {};
  const metaData = business?.metaData ?? {};
  const slug = business?.slug ?? slugFromUrl ?? "";
  const primary = theme.primary || "#0f3460";
  const accent = theme.accent || "#e8a020";

  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getAboutData({ businessId: business?.id, slug }).then((data) => {
      if (!cancelled) {
        setAbout(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [business?.id, slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: accent, borderTopColor: "transparent" }}
        />
      </div>
    );

  const { hero, intro, missionVision, stats, timeline, leadership } = about;

  return (
    <main
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif", color: "#1e293b" }}>
      {/* 1. HERO */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ height: 300 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,20,46,.72)" }}
        />
        <div
          className="absolute top-0 inset-x-0 h-[5px] z-10"
          style={{ background: accent }}
        />
        <div className="relative z-10 px-10 max-w-5xl">
          <Eyebrow label={hero.subtitle} accent={accent} dark />
          <h1
            className="text-5xl font-black text-white leading-[1.08]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {hero.title}
          </h1>
          <p
            className="text-xs mt-2.5 font-light tracking-wide"
            style={{ color: "rgba(255,255,255,.5)" }}>
            {metaData.name}
            {metaData.established && (
              <> &nbsp;·&nbsp; Est. {metaData.established}</>
            )}
            {metaData.affiliation && <> &nbsp;·&nbsp; {metaData.affiliation}</>}
          </p>
        </div>
      </section>

      {/* 2. BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-10 pt-5">
        <nav
          className="flex items-center gap-1.5 text-xs"
          style={{ color: "#94a3b8" }}>
          <Link
            to={`/${slug}`}
            className="hover:text-slate-600 transition-colors"
            style={{ color: "#94a3b8" }}>
            Home
          </Link>
          <span style={{ fontSize: "10px" }}>›</span>
          <span className="font-semibold" style={{ color: primary }}>
            About Us
          </span>
        </nav>
      </div>

      {/* 3. INTRO SPLIT */}
      <section className="max-w-6xl mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow label="Who We Are" accent={accent} />
          <h2
            className="text-4xl font-bold leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0f1a30",
            }}>
            {intro.heading}
          </h2>
          <p
            className="text-sm leading-relaxed font-light mb-4"
            style={{ color: "#5a5a7a" }}>
            {intro.text}
          </p>
          {intro.text2 && (
            <p
              className="text-sm leading-relaxed font-light mb-6"
              style={{ color: "#5a5a7a" }}>
              {intro.text2}
            </p>
          )}
          <div
            className="w-12 h-[3px] rounded-full"
            style={{ background: accent }}
          />
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{
              transform: "translate(12px,12px)",
              border: `2px solid ${accent}`,
            }}
          />
          <div
            className="relative z-10 w-full rounded-[20px] overflow-hidden"
            style={{
              aspectRatio: "4/3",
              boxShadow: "0 24px 56px rgba(0,0,0,.18)",
            }}>
            <img
              src={intro.image}
              alt={`${metaData.name} campus`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {intro.years && (
            <div
              className="absolute z-20 bg-white rounded-2xl flex items-center gap-3"
              style={{
                bottom: "-20px",
                left: "-20px",
                padding: "14px 18px",
                boxShadow: "0 12px 40px rgba(0,0,0,.12)",
                border: "0.5px solid #f0eee8",
              }}>
              <p
                className="font-black leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "30px",
                  color: accent,
                }}>
                {intro.years}
              </p>
              <p
                className="text-[9px] font-bold uppercase tracking-[.12em] leading-snug"
                style={{ color: "#9a9ab0" }}>
                Years of
                <br />
                Trust
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      {missionVision.length > 0 && (
        <section
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderTop: "0.5px solid rgba(0,0,0,.1)",
            borderBottom: "0.5px solid rgba(0,0,0,.1)",
          }}>
          {missionVision.map((item, i) => {
            const isDark = i === 0;
            const Icon = icons[i] ?? MissionIcon;
            return (
              <div
                key={i}
                className="relative px-14 py-16 overflow-hidden"
                style={{
                  background: isDark ? primary : "#f8f6f2",
                  borderRight: isDark ? "0.5px solid rgba(0,0,0,.08)" : "none",
                }}>
                <div
                  className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full pointer-events-none"
                  style={{ border: `32px solid ${accent}10` }}
                />
                <Eyebrow
                  label={`Our ${item.type}`}
                  accent={accent}
                  dark={isDark}
                />
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5"
                  style={{
                    background: isDark ? `${accent}20` : `${primary}12`,
                    color: isDark ? accent : primary,
                  }}>
                  <Icon />
                </div>
                <h3
                  className="text-3xl font-bold mb-4 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#fff" : "#0f1a30",
                  }}>
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{
                    color: isDark ? "rgba(255,255,255,.72)" : "#5a5a7a",
                  }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </section>
      )}

      {/* 5. STATS */}
      {stats.length > 0 && (
        <section
          className="relative py-16 px-10 overflow-hidden"
          style={{ background: "#0f1a30" }}>
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ border: `40px solid ${accent}08` }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <Eyebrow label="By the numbers" accent={accent} dark />
            <h2
              className="text-3xl font-bold text-white mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {metaData.name || "School"} in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative rounded-[20px] px-6 py-7 overflow-hidden transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "0.5px solid rgba(255,255,255,.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.12)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.querySelector(".stat-bar").style.transform =
                      "scaleX(1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.06)";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.querySelector(".stat-bar").style.transform =
                      "scaleX(0)";
                  }}>
                  <div
                    className="stat-bar absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                    style={{
                      background: accent,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform .3s",
                    }}
                  />
                  <p
                    className="font-black leading-none mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "42px",
                      color: accent,
                    }}>
                    {stat.number}
                  </p>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[.1em]"
                    style={{ color: "rgba(255,255,255,.4)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. TIMELINE */}
      {timeline.length > 0 && (
        <section className="max-w-3xl mx-auto px-10 py-20">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-0.5" style={{ background: accent }} />
              <span
                className="text-xs font-bold uppercase tracking-[.22em]"
                style={{ color: accent }}>
                Our Journey
              </span>
              <span className="w-6 h-0.5" style={{ background: accent }} />
            </div>
            <h2
              className="text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0f1a30",
              }}>
              Milestones That Shaped Us
            </h2>
          </div>
          <div className="flex flex-col">
            {timeline.map((event, i) => (
              <div
                key={i}
                className="flex gap-6"
                style={{ paddingBottom: i < timeline.length - 1 ? "28px" : 0 }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{
                      background: accent,
                      border: "3px solid #fff",
                      boxShadow: `0 0 0 3px ${accent}`,
                      marginTop: "4px",
                    }}
                  />
                  {i < timeline.length - 1 && (
                    <div
                      className="flex-1 w-0.5 mt-1.5"
                      style={{ background: `${accent}33` }}
                    />
                  )}
                </div>
                <div
                  className="flex-1 bg-white rounded-2xl p-5 border transition-all duration-200"
                  style={{ borderColor: "rgba(0,0,0,.08)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 28px rgba(15,52,96,.1)`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = `${primary}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,.08)";
                  }}>
                  <span
                    className="inline-flex items-center rounded-full mb-2.5 font-bold text-sm"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      padding: "2px 12px",
                      background: `${accent}15`,
                      border: `0.5px solid ${accent}40`,
                      color: accent,
                    }}>
                    {event.year}
                  </span>
                  <p
                    className="font-semibold text-sm mb-1.5"
                    style={{ color: "#0f1a30" }}>
                    {event.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed font-light"
                    style={{ color: "#64748b" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. LEADERSHIP */}
      {leadership?.profiles?.length > 0 && (
        <section
          className="max-w-6xl mx-auto px-10 py-20"
          style={{ borderTop: "0.5px solid rgba(0,0,0,.07)" }}>
          <div className="text-center mb-14">
            <Eyebrow label="Our Team" accent={accent} />
            <h2
              className="text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0f1a30",
              }}>
              {leadership.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.profiles.map((person, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border transition-all duration-200"
                style={{ borderColor: "rgba(0,0,0,.08)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(15,52,96,.1)`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}>
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: "1/1" }}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div
                    className="w-8 h-[3px] rounded-full mb-3"
                    style={{ background: accent }}
                  />
                  <p
                    className="font-bold text-base mb-0.5"
                    style={{ color: "#0f1a30" }}>
                    {person.name}
                  </p>
                  <p
                    className="text-xs font-bold uppercase tracking-[.1em] mb-3"
                    style={{ color: accent }}>
                    {person.role}
                  </p>
                  <p
                    className="text-xs leading-relaxed font-light"
                    style={{ color: "#64748b" }}>
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
