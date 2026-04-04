import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    category: "SERVICE",
    title: "Business Website Development",
    description:
      "Professional websites designed to attract customers and generate leads.",
    variant: "image",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1400",
    link: "/services/website-development",
  },
  {
    id: 2,
    category: "SERVICE",
    title: "Ad Banner Design",
    description:
      "High converting banners and creatives for digital marketing campaigns.",
    variant: "dark",
    link: "/services/banner-design",
  },
  {
    id: 3,
    category: "SERVICE",
    title: "Social Media Marketing",
    description:
      "Strategic content and campaigns to grow your brand on social platforms.",
    variant: "light",
    link: "/services/social-media-marketing",
  },
  {
    id: 4,
    category: "SERVICE",
    title: "Online Ads Management",
    description: "Targeted ad campaigns across Google and social platforms.",
    variant: "image",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
    link: "/services/ads-management",
  },
  {
    id: 5,
    category: "SERVICE",
    title: "Business Tax & Compliance",
    description: "GST filing and compliance solutions for growing businesses.",
    variant: "dark",
    link: "/services/business-tax",
  },
  {
    id: 6,
    category: "SERVICE",
    title: "Local SEO & Google Listing",
    description: "Improve search ranking and attract nearby customers.",
    variant: "light",
    link: "/services/local-seo",
  },
];

const ServiceCard = ({ service }) => {
  const isImage = service.variant === "image";
  const isLight = service.variant === "light";

  return (
    <Link
      to={service.link}
      className={`group relative flex flex-col justify-between p-8 h-[380px] rounded-lg overflow-hidden transition duration-500 hover:-translate-y-2 ${
        isLight ? "bg-gray-100 text-black" : "bg-neutral-900 text-white"
      }`}>
      {/* Background Image */}
      {isImage && (
        <>
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        <span className="text-xs uppercase tracking-widest opacity-80">
          {service.category}
        </span>

        <h3 className="text-2xl font-semibold mt-3 leading-tight">
          {service.title}
        </h3>

        <p className="text-sm opacity-80 mt-4 max-w-sm">
          {service.description}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 flex items-center justify-between mt-6">
        <span className="text-sm font-semibold uppercase tracking-wider">
          Learn More
        </span>

        <svg
          className="w-5 h-5 transform group-hover:translate-x-2 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Our Capabilities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Services designed to grow your business
          </h2>

          <p className="text-gray-400 mt-4">
            From websites to marketing and business automation, we help
            companies scale faster in the digital world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
