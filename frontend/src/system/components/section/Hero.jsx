import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/tech-bg.jpg')", // replace with your image
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Small Tag */}
        <p className="text-orange-400 text-sm tracking-widest uppercase mb-4">
          Web Designing Company in India
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight mb-6">
          Where Innovation Meets Imagination
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg mb-8">
          We deliver smart, scalable web & marketing solutions that help your
          business grow online. From websites to Google Business management — we
          handle everything.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Primary Button */}
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium transition">
            Our Services
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium transition">
            Talk To Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
