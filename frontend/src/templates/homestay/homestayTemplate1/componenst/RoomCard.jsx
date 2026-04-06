import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Snowflake,
  Users,
} from "lucide-react";

const RoomCard = ({ room }) => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + room.images.length) % room.images.length);

  const next = () => setIndex((index + 1) % room.images.length);

  return (
    <div className="bg-white shadow-sm border rounded-lg overflow-hidden flex flex-col lg:flex-row">
      {/* Image */}
      <div className="relative lg:w-[380px] w-full h-[240px] lg:h-auto">
        <img
          src={room.images[index]}
          alt={room.title}
          className="w-full h-full object-cover"
        />

        {/* Slider Buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded">
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded">
          <ChevronRight size={18} />
        </button>

        {/* Image Count */}
        <div className="absolute bottom-3 right-3 bg-white text-xs px-2 py-1 rounded">
          {index + 1} / {room.images.length}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between p-6 flex-1 gap-6">
        {/* Room Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{room.title}</h3>

          <div className="flex gap-6 text-sm text-gray-500 mt-2">
            <span>{room.size}</span>
            <span>Max ospiti: {room.guests}</span>
          </div>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            {room.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Snowflake size={16} />
              Aria condizionata
            </div>

            <div className="flex items-center gap-2">
              <Wifi size={16} />
              Wi-Fi Free
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              Vista giardino
            </div>
          </div>

          <button className="text-blue-600 text-sm mt-4">Vedi di più</button>
        </div>

        {/* Price Section */}
        <div className="flex flex-col items-start lg:items-end justify-between min-w-[180px]">
          <div className="text-right">
            <p className="text-sm text-gray-500">A partire da</p>

            <p className="text-2xl font-bold text-gray-800">€ {room.price}</p>

            <p className="text-sm text-gray-500">per 1 notte</p>
          </div>

          <button className="mt-4 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded text-sm font-semibold">
            Info e prenota
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
