import React from "react";

const WelcomeSection = ({
  subheading = "SOME WORD ABOUT US",
  heading = "WELCOME HOME!",
  boldDescription = "Ami Homestay is located in seclusion amidst three hills in Coorg in the State of Karnataka.",
  regularDescription = "Escape from the hustle and hassle of your everyday routine and come away to the Ami Homestay, where a serene world awaits you. Throw off all your worries and slip into the scenic, relaxed atmosphere and be pampered and rejuvenated...",
  mainImageUrl = "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
  insetImageUrl = "https://images.unsplash.com/photo-1576013551627-11971f368ca6?q=80&w=2070&auto=format&fit=crop",
  buttonText = "EXPLORE MORE",
  onExploreClick,
  features = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      text: "CONSISTENTLY HIGH GUEST SATISFACTION SINCE 2012",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      text: "TOP RANKED VALUE HOMESTAY IN NEW YORK, USA",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 lg:px-8 bg-white overflow-hidden">
      {/* Optional: Topographical background pattern could be applied to the section here */}

      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Left Column: Images */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] sm:min-h-[500px] lg:min-h-full mb-16 lg:mb-0">
          {/* Main Large Image */}
          <div className="w-[85%] sm:w-[80%] h-full">
            <img
              src={mainImageUrl}
              alt="People hiking in nature"
              className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute bottom-[-10%] right-[5%] sm:right-[10%] lg:right-[-5%] w-[55%] sm:w-[50%] shadow-2xl z-10">
            <img
              src={insetImageUrl}
              alt="Swimming pool view"
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 bg-[#FCFAF6] p-8 sm:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative z-0 mt-8 lg:mt-0 lg:-ml-8">
          {/* Subheading */}
          <span className="text-[#C59D6F] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {subheading}
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#3C3835] mb-8">
            {heading}
          </h2>

          {/* Bold Description */}
          <p className="text-[#3C3835] font-bold text-sm md:text-base leading-relaxed mb-6">
            {boldDescription}
          </p>

          {/* Regular Description */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12">
            {regularDescription}
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-8 mb-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center sm:items-start sm:flex-row gap-4 text-center sm:text-left">
                <div className="flex-shrink-0">{feature.icon}</div>
                <p className="text-[#3C3835] font-serif font-bold text-[11px] md:text-xs uppercase tracking-wider mt-1 sm:mt-2">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <button
              onClick={onExploreClick}
              className="bg-[#D1A67B] hover:bg-[#b58b60] text-white text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider py-3 sm:py-3.5 px-6 sm:px-8 transition-colors duration-300 rounded-sm flex items-center gap-2 w-fit mx-auto sm:mx-0">
              {buttonText} <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
