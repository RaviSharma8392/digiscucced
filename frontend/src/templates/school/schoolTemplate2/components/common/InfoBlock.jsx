import React from "react";

const InfoBlock = () => {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left Side: Quote Block */}
        <div className="w-full md:w-1/2 bg-[#f8f8f8] p-10 lg:p-20 flex items-center">
          <p className="text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed max-w-lg">
            <span className="block mb-2">Education</span>
            Is The Passport To The Future,
            <br />
            For Tomorrow Belongs To Those
            <br />
            Who Prepare For It Today.
          </p>
        </div>

        {/* Right Side: Yellow Information Block */}
        {/* We use negative margins on desktop to create that overlapping/extended look */}
        <div className="w-full md:w-1/2 bg-[#FFC107] p-10 lg:p-16 text-white relative z-10 md:-ml-4 md:mt-8 shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-wide uppercase mb-6 drop-shadow-sm">
            Aurum The Global School
          </h2>

          <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-10 font-medium">
            Aurum means gold, the valuable asset that glows and grows day by
            day. The Global stands for the plenary family of human beings and
            together we are ingrained and commend the ambience, heart and soul
            of our school.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-2.5 border border-white text-white font-semibold hover:bg-white hover:text-[#FFC107] transition-colors duration-300">
            <span className="text-xl leading-none">&raquo;</span> Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
