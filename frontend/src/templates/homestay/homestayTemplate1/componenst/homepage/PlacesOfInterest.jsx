import React from "react";

export default function PlacesOfInterest() {
  // Array of images with specific column spans to create the mosaic layout
  const galleryData = [
    {
      id: 1,
      alt: "Waterfall over rocky cliff",
      // Placeholder: Waterfall
      src: "https://images.unsplash.com/photo-1432405972618-c60002b545f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      spanClasses: "col-span-1",
    },
    {
      id: 2,
      alt: "Person looking at sunrise over hills",
      // Placeholder: Sunset/Sunrise
      src: "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      spanClasses: "col-span-1",
    },
    {
      id: 3,
      alt: "People sitting on a rock overlooking mountains",
      // Placeholder: Mountains/Hikers
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      spanClasses: "col-span-2",
    },
    {
      id: 4,
      alt: "Tractor working in a green field at sunset",
      // Placeholder: Farm/Tractor
      src: "https://images.unsplash.com/photo-1592982537447-6f296d9b9322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      spanClasses: "col-span-2",
    },
    {
      id: 5,
      alt: "Ornate fountain at dusk",
      // Placeholder: Fountain
      src: "https://images.unsplash.com/photo-1543158068-154df0b029ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      spanClasses: "col-span-1",
    },
    {
      id: 6,
      alt: "Woman hiking through a shallow river",
      // Placeholder: River Hiker
      src: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      spanClasses: "col-span-1",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#faf8f5]">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Headers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-3 text-4xl md:text-5xl font-serif tracking-wide text-[#2a2a2a] uppercase">
            Places of Interest
          </h2>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#dca77c] uppercase">
            Explore amazing and beautiful places
          </p>
        </div>

        {/* Mosaic Image Grid */}
        <div className="grid w-full grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[300px] lg:auto-rows-[350px] overflow-hidden shadow-lg">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden ${item.spanClasses}`}>
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
              />
              {/* Optional: Subtle overlay on hover for better UI feel */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/10 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
