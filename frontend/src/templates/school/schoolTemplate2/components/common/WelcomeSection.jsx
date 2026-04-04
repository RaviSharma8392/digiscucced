import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContentWithGridSection({
  sectionTitle = "Welcome To Our School",

  // Main featured content (Left side)
  mainFeature = {
    image:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop",
    text: "St. Joseph's Academy, located in the heart of the Doon Valley in a sprawling seventeen acres campus was established by the Patrician Brothers on 2nd March, 1934. Beginning with a vision to impart quality education and build strong character, the institution has grown into a premier educational hub.",
    linkLabel: "Read More",
    linkUrl: "#read-more",
  },

  // 2x2 Grid content (Right side)
  gridItems = [
    {
      title: "Principal's Message",
      image:
        "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=800&auto=format&fit=crop",
      url: "#",
    },
    {
      title: "Brothers Congregation",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      url: "#",
    },
    {
      title: "First Ranked Day School",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      url: "#",
    },
    {
      title: "The SJA Epistle",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      url: "#",
    },
  ],
}) {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#003A5D]">
            {sectionTitle}
          </h2>
          {/* Optional bottom accent line to match your previous designs */}
          <div className="w-20 h-1 bg-[#C9A84C] mx-auto rounded-full mt-4" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Large Image & Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-sm shadow-lg mb-8 group">
              <img
                src={mainFeature.image}
                alt={sectionTitle}
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Gold Accent Line at the bottom of the image */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#C9A84C]" />
            </div>

            <div className="pr-0 lg:pr-8">
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                {mainFeature.text}
              </p>

              {mainFeature.linkUrl && (
                <a
                  href={mainFeature.linkUrl}
                  className="inline-flex items-center gap-2 text-[#003A5D] font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors duration-200 group">
                  {mainFeature.linkLabel}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-center">
            {gridItems.map((item, index) => (
              <a
                key={index}
                href={
                  item.url ||
                  `#${item.title.replace(/\s+/g, "-").toLowerCase()}`
                }
                className="relative group overflow-hidden rounded-sm shadow-md aspect-[4/3] sm:aspect-square block">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Navy Overlay on Hover */}
                <div className="absolute inset-0 bg-[#003A5D]/20 group-hover:bg-[#003A5D]/40 transition-colors duration-300" />

                {/* Bottom Title Bar */}
                <div className="absolute bottom-0 left-0 w-full bg-[#003A5D] p-3.5 transform translate-y-0 transition-all duration-300 group-hover:bg-[#00263E]">
                  <h3 className="text-white text-sm font-serif font-semibold text-center tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
