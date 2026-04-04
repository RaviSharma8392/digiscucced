import React from "react";

const clientReviews = [
  {
    id: 1,
    imageUrl: "https://randomuser.me/api/portraits/women/43.jpg",
    quote:
      "DigiSucceed engineered our digital presence from the ground up. Within two quarters, our inbound lead pipeline transformed completely. Their strategic approach is unmatched.",
    author: "Elena Sharma",
    title: "Founder & CEO",
    company: "Apex Logistics",
  },
  {
    id: 2,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "They didn't just redesign our website; they overhauled our entire digital conversion funnel. The ROI we've seen on their ad campaigns outpaces any agency we've worked with.",
    author: "Marcus Singh",
    title: "Director of Operations",
    company: "Thorne Real Estate",
  },
  {
    id: 3,
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "From complex web architecture to automated Google Ads management, their team delivered flawlessly. A truly vital partner for any enterprise scaling online.",
    author: "Sarah Patel",
    title: "Head of Digital",
    company: "Nexis Technologies",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-slate-50 w-full py-24 px-6 lg:px-12 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-12 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-8 bg-blue-600"></div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
              Client Success
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight">
            Trusted by industry leaders.
          </h2>

          <p className="text-slate-600 mt-6 text-lg md:text-xl font-light">
            See how we have partnered with businesses to modernize their digital
            infrastructure, optimize their marketing, and scale revenue.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-white p-10 border border-slate-200 hover:border-blue-600 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
              {/* Decorative Large Quote Icon Background */}
              <span className="absolute top-6 right-8 text-8xl font-serif text-slate-100 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none select-none">
                "
              </span>

              {/* Top Section: Stars & Quote */}
              <div className="relative z-10 mb-10">
                {/* 5-Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 group-hover:text-slate-900 text-lg leading-relaxed font-light transition-colors duration-300">
                  {review.quote}
                </p>
              </div>

              {/* Bottom Section: Author Info */}
              <div className="relative z-10 flex items-center gap-5 pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors duration-300">
                <div className="relative">
                  <img
                    src={review.imageUrl}
                    alt={review.author}
                    className="w-14 h-14 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  {/* Subtle accent line on the image */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-600 border-2 border-white rounded-full"></div>
                </div>

                <div>
                  <h4 className="text-slate-900 text-base font-bold tracking-wide">
                    {review.author}
                  </h4>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mt-1">
                    {review.company}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {review.title}
                  </p>
                </div>
              </div>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
