import React from "react";

export default function Testimonials({ config = {}, colors = {} }) {
  // Fallbacks to your premium Navy and Red/Gold theme
  const primary = colors?.primary || "#002855";
  const accent = colors?.accent || "#F59E0B";

  const testimonials = config.testimonials || [
    {
      id: 1,
      quote:
        "The dedication of the faculty here is unmatched. They don't just teach the syllabus — they instil a genuine love for learning. My daughter has transformed into a confident, inquisitive young leader in just two years.",
      author: "Priya Sharma",
      role: "Parent of Class IX Student",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Sunrise gave me the academic foundation and extracurricular exposure I needed. The critical thinking skills I built here are truly invaluable.",
      author: "Rahul Verma",
      role: "Alumnus, Batch of 2021",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "We moved to Moradabad three years ago — finding the right school was our biggest worry. Sunrise put every fear to rest instantly. Highly recommended.",
      author: "Anita & Rajeev Desai",
      role: "Parents of Class V Student",
      image: null,
      rating: 5,
    },
  ];

  // Helper component for the 5-star rating
  const Stars = ({ count }) => (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count || 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={accent}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="px-6 py-20 bg-slate-50 font-sans w-full">
      <div className="max-w-7xl mx-auto">
        {/* Simple, Centered Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: primary }}>
            What Our Community Says
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>

        {/* Clean, Uniform 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => {
            const initials = item.author.charAt(0).toUpperCase();

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between">
                {/* Subtle Quote Icon in the background */}
                <div
                  className="absolute top-6 right-6 text-6xl font-serif leading-none opacity-5 pointer-events-none"
                  style={{ color: primary }}>
                  &rdquo;
                </div>

                <div>
                  <Stars count={item.rating} />

                  <p className="text-slate-600 text-base leading-relaxed mb-8 relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Block */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden font-bold text-lg text-white"
                    style={{ backgroundColor: primary }}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      initials
                    )}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h4
                      className="font-bold text-base leading-tight"
                      style={{ color: primary }}>
                      {item.author}
                    </h4>
                    <p className="text-sm text-slate-500 mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
