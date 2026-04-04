import React, { memo } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

// ─── FALLBACK DATA ────────────────────────────────────────────────────
const defaultFaculty = [
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
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: 3,
    name: "Vikram Singh",
    subject: "Mathematics",
    qualification: "B.Tech, IIT Bombay",
    experience: "15+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: 4,
    name: "Dr. Priya Verma",
    subject: "Biology",
    qualification: "MBBS, MD",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500",
  },
];

// ─── PREMIUM SUBJECT COLORS ──────────────────────────────────────────
const subjectColors = {
  Physics: { bg: "#0d1c2a", light: "#f1f5f9" }, // Deep Navy
  Chemistry: { bg: "#ef6461", light: "#fff1f0" }, // Warm Coral Red
  Mathematics: { bg: "#00bbf0", light: "#e0f7fd" }, // Brand Cyan
  Biology: { bg: "#059669", light: "#ecfdf5" }, // Emerald Green
};

const getColor = (subject) =>
  subjectColors[subject] || { bg: "#00bbf0", light: "#e0f7fd" }; // Default to Cyan

const handleImageError = (e) => {
  e.currentTarget.src =
    "https://placehold.co/400x500/00bbf0/ffffff?text=Faculty";
};

// ─── SINGLE CARD COMPONENT ────────────────────────────────────────────
const FacultyCard = memo(({ faculty }) => {
  const color = getColor(faculty?.subject);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,187,240,0.08)] hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-[280px] w-full overflow-hidden bg-slate-50">
        <img
          src={
            faculty?.image ||
            "https://placehold.co/400x500/00bbf0/ffffff?text=Faculty"
          }
          alt={faculty?.name || "Faculty Member"}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Floating Subject Badge */}
        {faculty?.subject && (
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm"
            style={{ backgroundColor: color.bg }}>
            {faculty.subject}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="text-[22px] font-bold text-slate-900 mb-5 group-hover:text-[#00bbf0] transition-colors leading-tight tracking-tight">
          {faculty?.name || "Faculty Name"}
        </h3>

        <div className="space-y-4 flex-1">
          {/* Qualification */}
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
              style={{ backgroundColor: color.light }}>
              <GraduationCap
                className="w-4 h-4"
                style={{ color: color.bg }}
                strokeWidth={2}
              />
            </div>
            <span className="text-[15px] text-slate-600 leading-snug mt-1">
              {faculty?.qualification || "Qualification details"}
            </span>
          </div>

          {/* Experience */}
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
              style={{ backgroundColor: color.light }}>
              <Briefcase
                className="w-4 h-4"
                style={{ color: color.bg }}
                strokeWidth={2}
              />
            </div>
            <span className="text-[15px] font-semibold text-slate-700 leading-snug mt-1">
              {faculty?.experience || "Experience details"}
            </span>
          </div>
        </div>

        {/* Expanding Bottom Accent Bar */}
        <div
          className="mt-8 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: color.bg }}
        />
      </div>

      {/* Left Hover Color Strip (Optional, adds nice tech feel) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: color.bg }}
      />
    </article>
  );
});

FacultyCard.displayName = "FacultyCard";

// ─── MAIN SECTION COMPONENT ───────────────────────────────────────────
export default function FacultySection({ faculty = defaultFaculty }) {
  // SAFEGUARD: Empty State
  if (!faculty || faculty.length === 0) {
    return (
      <section className="py-16 bg-[#fcfdfd] font-[Inter,sans-serif]">
        <div className="max-w-7xl mx-auto px-4 text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
          <p className="text-slate-400 font-medium">
            Faculty profiles coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-[#fcfdfd] border-t border-slate-100 font-[Inter,sans-serif]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── CENTERED HEADER ── */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-[40px] mb-4 tracking-tight leading-tight"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              color: "#0d1c2a",
            }}>
            Learn from{" "}
            <span className="text-[#00bbf0] font-extrabold">
              India's Best Faculty
            </span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: "#6b7280",
            }}>
            Our elite educators are Ex-IITians, Doctors, and industry experts
            dedicated to your success.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((f, i) => (
            <FacultyCard key={f?.id || i} faculty={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
