import React from "react";
import { Link } from "react-router-dom";

// --- B2B ENGAGEMENT DATA ---
const engagementModels = [
  {
    tier: "01",
    name: "Starter",
    price: "₹500",
    term: "Per Month",
    description:
      "Basic digital presence for small local businesses to start appearing online and collect customer leads.",
    deliverables: [
      "1 Page Business Website",
      "Business Banner & Basic Design",
      "Contact / WhatsApp Integration",
      "Google Business Setup Help",
      "Basic Hosting & Maintenance",
    ],
    isPrimary: false,
  },
  {
    tier: "02",
    name: "Growth",
    price: "₹1000",
    term: "Per Month",
    description:
      "Ideal for growing businesses that want a professional website and better online visibility.",
    deliverables: [
      "3–5 Page Business Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Social Media Links Integration",
      "Lead Form + WhatsApp Chat",
      "Monthly Updates & Support",
    ],
    isPrimary: true,
  },
  {
    tier: "03",
    name: "Pro Business",
    price: "₹1500",
    term: "Per Month",
    description:
      "Complete digital solution for businesses wanting continuous growth and customer acquisition.",
    deliverables: [
      "Custom Website (5+ Pages)",
      "Advanced SEO Optimization",
      "Lead Generation System",
      "Social Media Page Setup",
      "Priority Support & Maintenance",
      "Monthly Performance Report",
    ],
    isPrimary: false,
  },
];

const EngagementModels = () => {
  return (
    <section className="bg-black w-full py-24 px-6 sm:px-8 lg:px-12 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Background Corporate Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Executive Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white text-2xl font-light tracking-widest">
                &gt;
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Partnership Models
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Engagement frameworks.
            </h2>
          </div>

          <div className="max-w-md pb-2">
            <p className="text-base text-gray-400 font-light leading-relaxed">
              Transparent, scalable investment tiers designed to integrate
              seamlessly with your operational roadmap.
            </p>
          </div>
        </div>

        {/* The Matrix Grid - Flawless on Mobile & Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-white/10">
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-10 sm:p-12 lg:p-14 border-r border-b border-white/10 transition-all duration-500 min-h-[650px] ${
                model.isPrimary
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-[#0a0a0a]"
              }`}>
              {/* Massive Background Numeral */}
              <div
                className={`absolute top-8 right-8 text-[8rem] font-black leading-none select-none pointer-events-none transition-colors duration-500 ${
                  model.isPrimary
                    ? "text-black/5"
                    : "text-white/5 group-hover:text-white/10"
                }`}>
                {model.tier}
              </div>

              {/* Top: Header & Investment */}
              <div className="relative z-10">
                {model.isPrimary && (
                  <div className="inline-block mb-8 border border-black px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                    Recommended Architecture
                  </div>
                )}

                <h3 className="text-3xl font-bold tracking-tight mb-6">
                  {model.name}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-10 h-[60px] ${model.isPrimary ? "text-gray-800" : "text-gray-400"}`}>
                  {model.description}
                </p>

                <div className="flex flex-col mb-12">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-50">
                    Investment
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-light tracking-tighter">
                      {model.price}
                    </span>
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium tracking-wide ${model.isPrimary ? "text-gray-600" : "text-gray-500"}`}>
                    {model.term}
                  </span>
                </div>
              </div>

              {/* Middle: Divider */}
              <div
                className={`w-full h-[1px] mb-10 relative z-10 ${model.isPrimary ? "bg-black/10" : "bg-white/10"}`}></div>

              {/* Bottom: Deliverables & Action */}
              <div className="relative z-10 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-60">
                  Key Deliverables
                </span>

                <ul className="space-y-5 mb-12 flex-grow">
                  {model.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      {/* Architectural Bullet Point */}
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${model.isPrimary ? "bg-blue-600" : "bg-blue-500"}`}></span>
                      <span
                        className={`text-sm font-medium tracking-wide ${model.isPrimary ? "text-gray-900" : "text-gray-300"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Brutalist Button */}
                <Link
                  to="/contact"
                  className={`group/btn flex items-center justify-between px-8 py-5 border transition-all duration-300 w-full mt-auto ${
                    model.isPrimary
                      ? "border-black bg-transparent text-black hover:bg-black hover:text-white"
                      : "border-white/30 bg-transparent text-white hover:bg-white hover:text-black hover:border-white"
                  }`}>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                    Initiate Engagement
                  </span>
                  <span className="text-sm font-bold transform group-hover/btn:translate-x-2 transition-transform duration-300">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
