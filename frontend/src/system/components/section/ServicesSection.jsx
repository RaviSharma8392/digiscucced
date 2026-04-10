import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Business Website Development",
    description:
      "Professional websites designed to attract customers and generate leads.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1400",
    link: "/services/website-development",
  },
  {
    id: 2,
    title: "Ad Banner Design",
    description:
      "High converting banners and creatives for digital marketing campaigns.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400",
    link: "/services/banner-design",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Strategic content and campaigns to grow your brand on social platforms.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400",
    link: "/services/social-media-marketing",
  },
  {
    id: 4,
    title: "Online Ads Management",
    description: "Targeted ad campaigns across Google and social platforms.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
    link: "/services/ads-management",
  },
  {
    id: 5,
    title: "Business Tax & Compliance",
    description: "GST filing and compliance solutions for growing businesses.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400",
    link: "/services/business-tax",
  },
  {
    id: 6,
    title: "Local SEO & Google Listing",
    description: "Improve search ranking and attract nearby customers.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400",
    link: "/services/local-seo",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={service.link}
      className="group bg-white  overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-2">
          Service
        </span>

        <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-6">{service.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-black group-hover:text-blue-600 transition">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm tracking-widest uppercase text-blue-600 mb-4">
          Our Capabilities
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          Services designed to grow your business
        </h2>

        <p className="text-gray-600 max-w-2xl mb-16">
          From websites to marketing and business automation, we help companies
          scale faster in the digital world.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
