import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  // State to track which accordion item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data extracted from the image (with placeholder answers added)
  const faqs = [
    {
      question:
        "How long does it take to deliver a pre-built application or website?",
      answer:
        "Delivery times vary depending on the complexity of the project, but typically range from 1 to 3 weeks for pre-built solutions.",
    },
    {
      question: "Do you provide the complete source code after development?",
      answer:
        "Yes, upon project completion and final payment, we hand over the complete source code and intellectual property rights to you.",
    },
    {
      question:
        "What's the difference between a pre-built and a custom development project?",
      answer:
        "Pre-built projects use existing templates and architectures to speed up delivery, while custom development is built from scratch tailored specifically to your unique business logic.",
    },
    {
      question: "Do you provide maintenance and support after delivery?",
      answer:
        "We offer 30 days of free technical support post-delivery. Extended maintenance contracts are also available depending on your needs.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "Our tech stack primarily includes React, Next.js, Node.js, Python, Tailwind CSS, and various modern database solutions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Background uses a very light gray with a subtle texture feel
    <div className="min-h-screen bg-[#F5F6F6] py-20 px-6 md:px-12 lg:px-24 font-sans flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* Left Column - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#0f172a] leading-tight sticky top-24">
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* Right Column - Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-200">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none group">
                  <div className="flex items-center gap-4 pr-4">
                    {/* The small black vertical dash */}
                    <div className="h-4 w-1 bg-black rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-[15px] text-gray-800">
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron Icon */}
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {/* Accordion Content (Answer) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
                  <div className="overflow-hidden">
                    <p className="pb-5 pl-9 pr-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
