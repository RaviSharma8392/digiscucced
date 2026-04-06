import React, { useEffect, useState, useMemo } from "react";
import CabinCard from "./CabinCard";
import BookingModal from "./BookingModal.jsx";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmtbCn4i8OYAZnIX0lxqnbE11YaBGFSI30dFwdE0sKXEHrrAYOW5X4MOuVxqo_GCmnrNgE27OsRcQf/pub?gid=1654232261&single=true&output=csv";

const HOMESTAY_DATA = {
  "A frame cabin(4k per night)": {
    title: "A Frame Cabin",
    price: "₹4000 / night",
    capacity: "2 guests · 1 bed · 1 bath",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    rating: "4.92",
  },
  "Cocoon House(3.5k per night)": {
    title: "Cocoon House",
    price: "₹3500 / night",
    capacity: "2 guests · 1 bed",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    rating: "4.88",
  },
  "Hybrid A frame(7k per night)": {
    title: "Hybrid A Frame Cabin",
    price: "₹7000 / night",
    capacity: "4 guests · 2 beds",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    rating: "4.95",
  },
  "Dome houses(3.5-4k per night)": {
    title: "Dome House",
    price: "₹3500–₹4000 / night",
    capacity: "2 guests · 1 bed",
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    rating: "4.90",
  },
  "Sky cabins(3.5k per night)": {
    title: "Sky Cabin",
    price: "₹3500 / night",
    capacity: "2 guests · 1 bed",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: "4.89",
  },
  "Hybrid tippi Cabin(6k per night)": {
    title: "Hybrid Tippi Cabin",
    price: "₹6000 / night",
    capacity: "3 guests · 2 beds",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    rating: "4.86",
  },
  "Tippi Cabin(3k per night)": {
    title: "Tippi Cabin",
    price: "₹3000 / night",
    capacity: "2 guests · 1 bed",
    imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    rating: "4.80",
  },
  "A frame cottage(4k per night)": {
    title: "A Frame Cottage",
    price: "₹4000 / night",
    capacity: "3 guests · 2 beds",
    imageUrl: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9",
    rating: "4.91",
  },
  "Watch Tower(6.5k per night)": {
    title: "Watch Tower Cabin",
    price: "₹6500 / night",
    capacity: "4 guests · 2 beds",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    rating: "4.97",
  },
  "Lookout Cabin(6k per night)": {
    title: "Lookout Cabin",
    price: "₹6000 / night",
    capacity: "4 guests · 2 beds",
    imageUrl: "https://images.unsplash.com/photo-1472224371017-08207f84aaae",
    rating: "4.93",
  },
};

export default function BookingEngine() {
  const [data, setData] = useState({});
  const [cabins, setCabins] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedCabin, setSelectedCabin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split("\n").map((r) => r.split(","));
        const headers = rows[0].map((h) => h.trim());

        const map = {};

        rows.slice(1).forEach((row) => {
          const obj = {};
          headers.forEach((h, i) => {
            obj[h] = row[i]?.trim();
          });
          map[obj["Date"]] = obj;
        });

        setData(map);
        setCabins(headers.slice(1));
        setLoading(false);
      });
  }, []);

  const formatCSVDate = (date) => {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1,
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  const getDatesBetween = (start, end) => {
    const dates = [];
    let current = new Date(start);
    const last = new Date(end);

    while (current <= last) {
      dates.push(formatCSVDate(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const availableCabins = useMemo(() => {
    if (!checkIn || !checkOut) return cabins;

    const dates = getDatesBetween(checkIn, checkOut);

    return cabins.filter((cabin) => {
      for (const date of dates) {
        const row = data[date];
        if (!row) continue;

        const val = row[cabin];

        if (!val || val.includes("N/A") || parseInt(val) <= 0) {
          return false;
        }
      }
      return true;
    });
  }, [checkIn, checkOut, cabins, data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Find your stay</h1>

      <div className="flex gap-4 mb-8">
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn}
          className="border p-2 rounded"
        />
      </div>

      {availableCabins.length === 0 && (
        <p>No cabins available for selected dates</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableCabins.map((cabinId) => {
          const room = HOMESTAY_DATA[cabinId];

          return (
            <CabinCard
              key={cabinId}
              cabin={room.title}
              price={room.price}
              capacity={room.capacity}
              imageUrl={room.imageUrl}
              rating={room.rating}
              onBook={() => setSelectedCabin(room)}
            />
          );
        })}
      </div>

      {selectedCabin && (
        <BookingModal
          cabin={selectedCabin.title}
          checkIn={checkIn}
          checkOut={checkOut}
          onClose={() => setSelectedCabin(null)}
        />
      )}
    </div>
  );
}
