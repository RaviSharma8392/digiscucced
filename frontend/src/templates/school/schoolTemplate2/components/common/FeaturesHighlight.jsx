import React from "react";
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

/* ─────────────────────────────────────────────
   FeatureCard — reusable single card
   Props:
     icon       ReactNode  — any icon component
     title      string
     description string
     colorClass string     — Tailwind bg color class
     delay      string     — animation-delay (e.g. "0ms", "150ms")
───────────────────────────────────────────── */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  colorClass = "bg-[#5482F6]",
  delay = "0ms",
}) {
  return (
    <div
      className={`
        group relative flex flex-col items-center text-center
        ${colorClass} text-white
        px-8 py-12 lg:px-12 lg:py-14
        shadow-xl
        overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
      `}
      style={{ animationDelay: delay }}>
      {/* Subtle circle decoration behind icon */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-black/10 translate-y-10 -translate-x-10 group-hover:scale-125 transition-transform duration-500" />

      {/* Icon */}
      <div className="relative z-10 mb-6 p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
        <Icon className="w-14 h-14 text-white" strokeWidth={1.2} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl lg:text-2xl font-extrabold mb-4 tracking-wide leading-tight">
        {title}
      </h3>

      {/* Divider */}
      <div className="relative z-10 w-12 h-0.5 bg-white/50 mb-5 group-hover:w-20 transition-all duration-300" />

      {/* Description */}
      <p className="relative z-10 text-white/90 text-[14.5px] leading-relaxed font-normal max-w-xs">
        {description}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FeaturesHighlight — section with 3 cards
   Accepts a `features` prop to be fully reusable,
   falls back to default school features.
───────────────────────────────────────────── */
const defaultFeatures = [
  {
    title: "Challenging Academics",
    description:
      "At Shemford we provide a challenging and enriching curriculum and a supportive environment which are beneficial in achieving these goals.",
    colorClass: "bg-[#5482F6]",
    icon: AcademicCapIcon,
  },
  {
    title: "Extracurricular Activities",
    description:
      "We teach students Fine-Motor Skills, Patience, Respect, and How to be a part of the team by introducing them to various sports and other co-curricular activities.",
    colorClass: "bg-[#ACD365]",
    icon: ComputerDesktopIcon,
  },
  {
    title: "State-Of-The-Art Infrastructure",
    description:
      "While offering so many activities we also provide a good campus infrastructure with the state-of-the-art facilities required for students to pursue their dreams.",
    colorClass: "bg-[#FF6D6A]",
    icon: BuildingOffice2Icon,
  },
];

export default function FeaturesHighlight({
  features = defaultFeatures,
  className = "",
  overlap = true,
}) {
  return (
    <section
      className={`w-full relative pb-16 bg-white font-sans ${className}`}>
      <div
        className={`
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          relative z-10
          ${overlap ? "-mt-20 md:-mt-28" : "mt-0 pt-16"}
        `}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-0 shadow-2xl">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.colorClass}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
