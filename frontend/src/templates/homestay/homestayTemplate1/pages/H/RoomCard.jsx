import React from "react";

// --- Reusable Sub-component ---
const RoomCard = ({ title, price, imageSrc, detailLink }) => {
  return (
    <div className="flex flex-col bg-white shadow-xl group">
      {/* Image Container with Overlay */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Room Title */}
        <h3 className="absolute bottom-6 left-0 right-0 text-center text-white text-xl md:text-2xl font-serif tracking-wider uppercase">
          {title}
        </h3>
      </div>

      {/* Card Details (Bottom White Section) */}
      <div className="flex flex-col items-center justify-center p-10">
        <div className="flex items-baseline mb-6 space-x-1 text-xs tracking-widest text-gray-400 uppercase">
          <span>From</span>
          <span className="text-3xl text-[#2a2a2a] font-serif mx-2">
            ${price}
          </span>
          <span>/Night</span>
        </div>

        <a
          href={detailLink}
          className="text-[10px] font-bold tracking-[0.2em] text-[#dca77c] uppercase transition-colors hover:text-[#2a2a2a] flex items-center gap-2">
          View Detail
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

// --- Main Section Component ---
export default function AccommodationSection() {
  const roomsData = [
    {
      id: 1,
      title: "Luxury Room",
      price: "64.9",
      // Placeholder image of a nice wood-paneled room
      imageSrc:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailLink: "#luxury-detail",
    },
    {
      id: 2,
      title: "Premium Room",
      price: "53.9",
      // Placeholder image of a spacious room with wooden beams
      imageSrc:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailLink: "#premium-detail",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Background Layer */}
      {/* Top dark section */}
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#403834] z-0"></div>
      {/* Bottom light patterned section (pattern can be added via CSS if needed) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#faf8f5] z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 container px-4 py-24 mx-auto max-w-6xl">
        {/* Section Headers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-serif tracking-wide text-white uppercase">
            Accommodation
          </h2>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#dca77c] uppercase">
            Choose from a wide range of rooms
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {roomsData.map((room) => (
            <RoomCard
              key={room.id}
              title={room.title}
              price={room.price}
              imageSrc={room.imageSrc}
              detailLink={room.detailLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
