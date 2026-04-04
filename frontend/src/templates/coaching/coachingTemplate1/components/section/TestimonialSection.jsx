import React, { useState, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight, Play, Quote, Star } from "lucide-react";

// ─── FALLBACK DATA ────────────────────────────────────────────────────
const defaultTestimonials = [
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
  {
    id: 4,
    name: "Rohan Gupta",
    exam: "JEE Advanced",
    rank: "AIR 11",
    quote:
      "The mock tests and weekly assessments kept me sharp and exam-ready throughout my preparation journey.",
    image:
      "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FTestimonialsSection%2Fimage_mobile%2FUtkarsh.webp&w=384&q=90",
  },
  {
    id: 5,
    name: "Sneha Patel",
    exam: "JEE Main",
    rank: "AIR 7",
    quote:
      "The faculty here genuinely cares about every student's progress. I never felt alone in my preparation.",
    image:
      "https://www.aakash.ac.in/_next/image?url=https%3A%2F%2Fd28cs5wqm3s0uy.cloudfront.net%2FAAKASH_V2%2FTestimonialsSection%2Fimage_mobile%2FAvika.webp&w=384&q=90",
  },
];

const handleImageError = (e) => {
  e.currentTarget.src =
    "https://placehold.co/600x800/00bbf0/ffffff?text=Student";
};

// ─── FEATURED CARD (Large Left Card) ─────────────────────────────────
const FeaturedCard = memo(({ student }) => (
  <div className="relative h-full min-h-[480px] rounded-2xl overflow-hidden shadow-2xl group">
    <img
      src={
        student?.image ||
        "https://placehold.co/600x800/00bbf0/ffffff?text=Student"
      }
      alt={student?.name}
      onError={handleImageError}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />

    {/* Deep Navy gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c2a] via-[#0d1c2a]/50 to-transparent" />

    {/* Exam badge */}
    {student?.exam && (
      <div className="absolute top-5 left-5 px-3 py-1 rounded-sm bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-white">
        {student.exam}
      </div>
    )}

    {/* Rank badge */}
    {student?.rank && (
      <div className="absolute top-5 right-5 px-4 py-1.5 rounded-sm bg-[#00bbf0] text-white text-sm font-black shadow-lg shadow-[#00bbf0]/30">
        {student.rank}
      </div>
    )}

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
      <Quote className="w-10 h-10 text-[#00bbf0] mb-4 opacity-90" />
      <p className="text-white/95 text-base sm:text-lg leading-relaxed italic mb-6 line-clamp-3">
        "{student?.quote}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-xl leading-tight mb-1">
            {student?.name}
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#00bbf0] text-[#00bbf0]" />
            ))}
          </div>
        </div>

        <button
          aria-label={`Play ${student?.name} story`}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#00bbf0] text-white text-sm font-bold shadow-lg shadow-[#00bbf0]/25 hover:bg-[#00aed6] transition-all active:scale-95">
          <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <Play className="w-3 h-3 fill-[#00bbf0] text-[#00bbf0] ml-0.5" />
          </span>
          Watch
        </button>
      </div>
    </div>
  </div>
));

FeaturedCard.displayName = "FeaturedCard";

// ─── SMALL CARD (Side List) ───────────────────────────────────────────
const SmallCard = memo(({ student, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`relative flex gap-4 items-start p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
      isActive
        ? "bg-[#00bbf0] border-[#00bbf0] shadow-xl shadow-[#00bbf0]/20 scale-[1.02]"
        : "bg-white border-slate-100 hover:border-[#00bbf0]/30 hover:shadow-md"
    }`}>
    {/* Avatar */}
    <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-sm">
      <img
        src={
          student?.image || "https://placehold.co/100x100/00bbf0/ffffff?text=S"
        }
        alt={student?.name}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Text */}
    <div className="flex-1 min-w-0 py-1">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <p
          className={`font-bold text-[15px] truncate ${isActive ? "text-white" : "text-slate-900"}`}>
          {student?.name}
        </p>
        {student?.rank && (
          <span
            className={`shrink-0 text-xs font-black px-2.5 py-0.5 rounded-sm ${
              isActive
                ? "bg-white text-[#00bbf0]"
                : "bg-[#f0f9ff] text-[#00bbf0]"
            }`}>
            {student.rank}
          </span>
        )}
      </div>

      <p
        className={`text-xs leading-relaxed line-clamp-2 ${
          isActive ? "text-white/90" : "text-slate-500"
        }`}>
        "{student?.quote}"
      </p>
    </div>

    {/* Active indicator bar */}
    {isActive && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-[#0d1c2a] rounded-r-full" />
    )}
  </div>
));

SmallCard.displayName = "SmallCard";

// ─── MAIN COMPONENT ───────────────────────────────────────────────────
export default function TestimonialSection({
  testimonials = defaultTestimonials,
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const total = testimonials?.length || 0;

  const prev = useCallback(
    () => setActiveIdx((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setActiveIdx((i) => (i + 1) % total), [total]);

  // SAFEGUARD: Empty State
  if (!total) {
    return (
      <section className="py-16 bg-[#fcfdfd] font-[Inter,sans-serif]">
        <div className="max-w-7xl mx-auto px-4 text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl">
          <p className="text-slate-400 font-medium">
            Student stories coming soon.
          </p>
        </div>
      </section>
    );
  }

  // Show 3 small cards alongside featured (next 3 after active)
  const sideCards = [1, 2, 3].map((offset) => ({
    student: testimonials[(activeIdx + offset) % total],
    originalIdx: (activeIdx + offset) % total,
  }));

  return (
    <section className="py-16 sm:py-24 bg-[#fcfdfd] font-[Inter,sans-serif] border-t border-slate-100">
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
            Our Students,{" "}
            <span className="text-[#00bbf0] font-extrabold">Top Ranks</span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: "#6b7280",
            }}>
            Experience the unique blend of pedagogy, practice, and personalized
            mentorship.
          </p>
        </div>

        {/* ── MAIN LAYOUT: Featured + Side cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8">
          {/* Left: Side cards */}
          <div className="flex flex-col gap-4">
            {sideCards.map(({ student, originalIdx }) => (
              <SmallCard
                key={student?.id || originalIdx}
                student={student}
                isActive={originalIdx === activeIdx}
                onClick={() => setActiveIdx(originalIdx)}
              />
            ))}
          </div>

          {/* Right: Featured card */}
          <div className="order-first lg:order-last">
            <FeaturedCard student={testimonials[activeIdx]} />
          </div>
        </div>

        {/* ── BOTTOM NAVIGATION (Centered) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14">
          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#00bbf0] hover:text-[#00bbf0] transition-all active:scale-95 shadow-sm">
              <ChevronLeft className="w-6 h-6 stroke-[2]" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 px-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "w-8 h-2.5 bg-[#00bbf0]"
                      : "w-2.5 h-2.5 bg-slate-200 hover:bg-[#00bbf0]/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-12 h-12 rounded-full border-2 border-[#00bbf0] bg-[#00bbf0] flex items-center justify-center text-white hover:bg-[#00aed6] hover:border-[#00aed6] transition-all active:scale-95 shadow-md shadow-[#00bbf0]/20">
              <ChevronRight className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
