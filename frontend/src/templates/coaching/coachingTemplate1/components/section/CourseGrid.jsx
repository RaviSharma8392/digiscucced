import React from "react";
import {
  Calendar,
  Users,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  PenTool,
} from "lucide-react";

// ─── MOCK DATA ───
const data = [
  // ... (keep your existing mock data here)
];

export default function CourseGrid({ courses = data }) {
  // 1. SAFEGUARD: Handle Image Loading Errors
  const handleImageError = (e) => {
    // Replaces broken image with a fallback placeholder (or your logo)
    e.currentTarget.src =
      "https://placehold.co/600x400/00bbf0/ffffff?text=Course+Image";
  };

  return (
    <section className="relative bg-[#f7fbff] py-14 sm:py-18 md:py-24 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-[40px] mb-4 tracking-tight"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              color: "#0d1c2a",
            }}>
            Explore Our
            <span className="text-[#00bbf0] font-extrabold">
              {" "}
              Top Programs{" "}
            </span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", color: "#6b7280" }}>
            Choose from a wide range of programs designed to help you excel
          </p>
        </div>

        {/* 2. SAFEGUARD: Empty State / Null Check */}
        {!courses || courses.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-white">
            <p className="text-gray-500 font-medium">
              No courses are currently available.
            </p>
          </div>
        ) : (
          /* Grid Section */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {courses.map((c, i) => (
              <article
                key={c?.id || i}
                className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
                {/* Slanted Image Header */}
                <div className="relative h-52 w-full bg-[#00bbf0] overflow-hidden">
                  <div
                    className="absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                    }}>
                    <img
                      src={
                        c?.image ||
                        "https://placehold.co/600x400/00bbf0/ffffff?text=Course"
                      } // 3. SAFEGUARD: Missing Image URL
                      alt={c?.name || "Course"}
                      onError={handleImageError} // Attach the error handler
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col px-8 pb-8 pt-6">
                  {/* 4. SAFEGUARD: Fallback text if data is missing */}
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-3 group-hover:text-[#00bbf0] transition-colors">
                    {c?.name || "Upcoming Program"}
                  </h3>

                  <div className="w-12 h-1 bg-[#00bbf0] mb-6 rounded-full" />

                  <p className="text-[15px] leading-relaxed text-gray-600 mb-8 flex-1 line-clamp-4">
                    {c?.description || "Description will be updated soon."}
                  </p>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-4">
                    <button className="flex-[2] bg-[#00bbf0] text-white py-3 px-4 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-[#00aed6] active:scale-95 transition-all shadow-md hover:shadow-lg">
                      Register Now
                    </button>
                    <button className="flex-1 border-2 border-[#00bbf0] text-[#00bbf0] py-3 px-4 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-[#00bbf0] hover:text-white active:scale-95 transition-all">
                      Enquiry
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
