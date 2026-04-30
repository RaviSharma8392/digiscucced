import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursesSection({ slug, courses = [] }) {

  const sectionBgColor = "#2b88c4";
  const cardHeadBgColor = "#bfe0f7";
  const linkColor = "#0A3370";

  // ✅ Fallback (important)
  const fallbackCourses = [
    {
      title: "Computer Courses",
      bullets: [
        "Basic Computer Training",
        "MS Office & Internet",
        "Practical Learning"
      ]
    }
  ];

  // ✅ Normalize incoming data
  const displayCourses = (courses?.length ? courses : fallbackCourses).map((course) => ({
    title: course.title || "Course",
    bullets:
      course.bullets ||
      course.points ||
      course.description?.split(".") ||
      []
  }));

  return (
    <section className="py-20" style={{ backgroundColor: sectionBgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl uppercase text-white tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            POPULAR COURSES
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2px] shadow-lg flex flex-col overflow-hidden"
              style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >

              {/* HEADER */}
              <div
                className="py-6 px-4 text-center border-b border-white"
                style={{ backgroundColor: cardHeadBgColor }}
              >
                <h3
                  className="text-[22px] font-bold uppercase tracking-tight text-black"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {course.title}
                </h3>
              </div>

              {/* BODY */}
              <div className="p-6 md:p-8 flex-grow">
                <ul className="space-y-6">
                  {course.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-4 text-[14px] text-black font-sans leading-relaxed"
                    >
                      <GraduationCap
                        size={18}
                        className="mt-0.5 shrink-0 text-[#333] fill-[#777]"
                      />
                      <span className="font-medium text-gray-800">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOOTER */}
              <div className="border-t border-gray-200 mt-auto">
                <Link
                  to={`/${slug}/courses`}
                  className="block w-full py-4 text-center font-bold text-sm tracking-wide uppercase transition-opacity"
                  style={{ color: linkColor }}
                  onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                  onMouseLeave={(e) => (e.target.style.opacity = 1)}
                >
                  Check More
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}