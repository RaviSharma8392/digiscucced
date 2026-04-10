import React from "react";

const processSteps = [
  {
    num: "01",
    title: "Strategic Planning",
    desc: "We analyze your business goals and market trends to build a solid foundation for your digital product.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Our expert designers craft intuitive user interfaces and immersive user experiences that resonate with your brand.",
  },
  {
    num: "03",
    title: "Development",
    desc: "We write clean, scalable code using the latest technologies to bring your application to life.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "We ensure everything works perfectly across all devices with rigorous testing.",
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "We deploy your product and provide ongoing support for long-term growth.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm tracking-widest uppercase text-blue-600 mb-4">
          Our Process
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          How we build digital products
        </h2>

        <p className="text-gray-600 max-w-2xl mb-20">
          A structured, proven process to design, develop, and scale
          high-performing digital solutions for modern businesses.
        </p>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 ml-4">
          {processSteps.map((step, index) => (
            <div key={index} className="mb-12 ml-6 group">
              {/* Dot */}
              <span className="absolute -left-[9px] w-4 h-4 bg-blue-600 rounded-full"></span>

              {/* Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
                {/* Step Number */}
                <span className="text-sm text-blue-600 font-semibold">
                  Step {step.num}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mt-2 mb-3 group-hover:text-blue-600 transition">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
