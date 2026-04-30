export default function TeacherTestimonial({ achievers = [] }) {
  if (!achievers || achievers.length === 0) return null;
  return (
    <div className="teacher-testimonial">
      {/* TOP ACHIEVER */}
      <div className="mb-14">
        {achievers.slice(0, 1).map((student) => (
          <div
            key={student.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-8 grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-[6px] border-[#c9a227]">
                <img
                  src={student.image}
                  alt={student.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#d35050] font-bold mb-2">
                {student.rank}
              </p>

              <h3 className="about-school-serif text-3xl font-bold text-[#1a1f5e]">
                {student.nameEn}
              </h3>

              <p className="about-school-sans text-gray-500 mb-4">{student.nameHi}</p>

              <div className="space-y-2 text-[#1a1f5e] font-semibold">
                <p>Score: {student.score}</p>
                <p>{student.stream}</p>
                <p>{student.school}</p>
              </div>

              <p className="mt-4 text-gray-700 font-medium">
                {student.achievementEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* OTHER ACHIEVERS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievers.slice(1).map((student) => (
          <div
            key={student.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={student.image}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold text-[#1a1f5e]">{student.nameEn}</h3>
                <p className="text-gray-500 text-sm">{student.score}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 font-semibold mb-1">
              {student.stream}
            </p>

            <p className="text-sm text-gray-500">{student.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
