import React from "react";
import {
  ShieldCheckIcon,
  WifiIcon,
  SparklesIcon, // Used as a placeholder for Washer/Dryer
  HeartIcon, // Used as a placeholder for Pet Care
} from "@heroicons/react/24/outline";

// --- Reusable Sub-component ---
const FeatureCard = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col items-center text-center px-2">
      {/* Icon Container with Circular Border */}
      <div className="flex items-center justify-center w-16 h-16 mb-5 border border-[#e8dfd8] rounded-full">
        <Icon
          className="w-7 h-7 text-[#cfa474]"
          strokeWidth={1.2}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-sm font-bold tracking-widest text-[#1a1a1a] uppercase">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500 max-w-[250px]">
        {description}
      </p>
    </div>
  );
};

// --- Main Section Component ---
export default function FeaturedFacilities() {
  // Data array makes it easy to add or remove features in the future
  const facilitiesData = [
    {
      title: "24/7 Security",
      description:
        "We take safety seriously through our dedicated team that stands watch.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Free Wifi",
      description:
        "All rooms have good high speed Wi-Fi connectivity. watch. 24/7.",
      icon: WifiIcon,
    },
    {
      title: "Washer Dryer",
      description:
        "With three workout facilities, it's easy to stay active all year.watch. 24/7.",
      icon: SparklesIcon,
    },
    {
      title: "Animal & Pet Care",
      description:
        "Everyday chores made easier equals more time for living.watch. 24/7.",
      icon: HeartIcon,
    },
  ];

  return (
    <section className="w-full py-24 bg-[#faf8f5]">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Headers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-3 text-4xl font-serif tracking-wide text-[#1a1a1a] uppercase">
            Featured Facilities
          </h2>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#cfa474] uppercase">
            Everything you need right at home
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {facilitiesData.map((facility, index) => (
            <FeatureCard
              key={index}
              title={facility.title}
              description={facility.description}
              Icon={facility.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
