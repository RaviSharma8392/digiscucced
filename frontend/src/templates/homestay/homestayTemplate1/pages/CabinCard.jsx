import React from "react";

export default function CabinCard({
  cabin,
  availability,
  price,
  capacity,
  imageUrl,
  rating,
  isDateSelected,
  onBook,
}) {
  const isAvailable = isDateSelected ? parseInt(availability) > 0 : true;

  return (
    <div className="group flex flex-col w-full">
      {/* Image Container */}
      <div className="relative aspect-[20/19] w-full overflow-hidden rounded-xl bg-gray-200 mb-3">
        <img
          src={imageUrl}
          alt={cabin}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Floating Wishlist Heart */}
        <button className="absolute top-3 right-3 text-white hover:text-red-500 transition">
          <svg
            className="w-7 h-7 drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-[15px] text-gray-900 truncate pr-4">
          {cabin}
        </h3>
        {/* Rating */}
        <div className="flex items-center gap-1 text-[15px]">
          <svg
            className="w-3.5 h-3.5 fill-current text-black"
            viewBox="0 0 32 32">
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fillRule="evenodd"></path>
          </svg>
          <span>{rating}</span>
        </div>
      </div>

      <p className="text-gray-500 text-[15px] mt-0.5 truncate">{capacity}</p>

      {/* Availability Status */}
      {isDateSelected && (
        <p
          className={`text-[14px] mt-0.5 ${isAvailable ? "text-green-600 font-medium" : "text-red-500 font-medium"}`}>
          {isAvailable
            ? `${availability} left for these dates`
            : "Sold out for these dates"}
        </p>
      )}

      <div className="mt-2 flex items-center justify-between">
        <div className="text-[15px]">
          <span className="font-semibold text-gray-900">{price}</span>
          <span className="text-gray-900"> night</span>
        </div>

        <button
          onClick={onBook}
          disabled={isDateSelected && !isAvailable}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${
            isDateSelected && !isAvailable
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 active:scale-95"
          }`}>
          Book
        </button>
      </div>
    </div>
  );
}
