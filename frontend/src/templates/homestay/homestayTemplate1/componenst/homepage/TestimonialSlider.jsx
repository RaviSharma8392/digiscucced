import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

export default function TestimonialSlider() {
  // Array of testimonials to make the slider functional
  const testimonials = [
    {
      id: 1,
      rating: 4,
      quote:
        "If you are a lover of nature and appreciate its tranquility then this is the place for you.",
      name: "Prahalad Atreyya",
      source: "Trip Advisor",
      // Using a placeholder image similar to the reference
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 2,
      rating: 5,
      quote:
        "An absolutely breathtaking experience. The staff went above and beyond to ensure our comfort.",
      name: "Sarah Jenkins",
      source: "Google Reviews",
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const current = testimonials[currentIndex];

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-8 text-[#dca77c]">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <StarSolid key={index} className="w-4 h-4" />
          ) : (
            <StarOutline key={index} className="w-4 h-4" />
          ),
        )}
      </div>
    );
  };

  return (
    <section className="relative flex items-center justify-center w-full py-24 bg-[#faf8f5] overflow-hidden">
      {/* Note: The background uses a solid color matching the reference. 
          To add the exact topographical lines, you would apply a custom CSS 
          background-image URL pointing to your specific SVG pattern here. */}

      <div className="container relative px-4 mx-auto max-w-7xl">
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 z-10 p-2 text-gray-400 transition-colors -translate-y-1/2 top-1/2 hover:text-gray-800 md:left-12"
          aria-label="Previous testimonial">
          <ArrowLeftIcon className="w-6 h-6 stroke-1" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 z-10 p-2 text-gray-400 transition-colors -translate-y-1/2 top-1/2 hover:text-gray-800 md:right-12"
          aria-label="Next testimonial">
          <ArrowRightIcon className="w-6 h-6 stroke-1" />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center max-w-4xl px-12 mx-auto text-center transition-opacity duration-500">
          {/* Star Rating */}
          {renderStars(current.rating)}

          {/* Quote */}
          <blockquote className="mb-10 text-xl md:text-2xl lg:text-[28px] font-serif uppercase tracking-widest text-[#2a2a2a] leading-relaxed md:leading-loose">
            "{current.quote}"
          </blockquote>

          {/* Author Details */}
          <div className="flex flex-col items-center">
            <img
              src={current.image}
              alt={current.name}
              className="object-cover w-16 h-16 mb-4 rounded-full shadow-sm"
            />
            <h4 className="mb-1 text-sm font-bold tracking-widest text-[#1a1a1a] uppercase">
              {current.name}
            </h4>
            <p className="text-xs font-semibold tracking-widest text-[#dca77c] uppercase">
              {current.source}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
