import React, { useState } from "react";

const faqData = [
  {
    question: "What kind of businesses or teams do you typically work with?",
    answer:
      "We work with a wide range of businesses, from early-stage startups to established enterprise teams across various industries.",
  },
  {
    question: "Can we start with a smaller engagement or pilot before scaling?",
    answer:
      "Absolutely. We often recommend starting with a pilot project to ensure our team and processes align perfectly with your needs.",
  },
  {
    question: "How does the software development outsourcing process work?",
    answer:
      "Our process begins with a thorough discovery phase, followed by agile development sprints, regular check-ins, and rigorous quality assurance.",
  },
  {
    question: "Does Invoidea cover all stages of the SDLC?",
    answer:
      "Yes, we handle everything from initial concept and UI/UX design to development, testing, deployment, and ongoing maintenance.",
  },
  {
    question: "What is your preferred development methodology?",
    answer:
      "We primarily utilize Agile methodologies, particularly Scrum, to ensure flexibility, transparency, and rapid delivery of value.",
  },
  {
    question: "Can your custom software scale as my business grows?",
    answer:
      "Yes, we build software with scalability in mind, using modern cloud-native architectures that can easily grow alongside your business.",
  },
  {
    question: "Do you develop software for both mobile & web platforms?",
    answer:
      "We have dedicated teams for both native/cross-platform mobile development (iOS & Android) and responsive web application development.",
  },
  {
    question: "Are your development practices globally compliant?",
    answer:
      "We adhere to international coding standards and data protection regulations like GDPR to ensure your software is secure and compliant.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fcfcfd] py-16 font-sans">
      <div className="max-w-7xl  mx-auto">
        {/* Header Section */}
        <div className=" justify-between items-center mb-12">
          <p className="text-blue-500 font-medium tracking-wide text-sm uppercase mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-slate-900 tracking-tight">
            Got Questions? We've Got Answers{" "}
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                <span className="text-gray-700 font-medium pr-4">
                  {faq.question}
                </span>
                <span className="text-gray-400 flex-shrink-0">
                  {openIndex === index ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {/* Expandable Answer */}
              <div
                className={`px-6 text-gray-500 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
